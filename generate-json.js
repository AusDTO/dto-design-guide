/***************************************************************************************************************************************************************
 *
 * Generate a json file from the UI-Kit repository and move into _data folder for Jekyll to ingest
 *
 **************************************************************************************************************************************************************/

'use strict';


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const Fs = require(`fs`);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Constructor
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const GEN = (() => { //constructor factory

  return {
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Settings
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
    UIKIT: '_assets/vendor/dto-ui-kit',
    UIKIT_SCSS: 'assets/sass',
    UIKIT_templates: 'assets/sass/components/templates',

    KIT: '_data/uikit.json',
    TEMPLATES: '_includes/templates',


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Log to console.log
//
// @method  success                    Log success info
//          @param   [text]  {string}  The sting you want to log
//          @return  [ansi]            output
//
// @method  error                      Log error info
//          @param   [text]  {string}  The sting you want to log
//          @return  [ansi]            output
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
    log: {

      success: ( text ) => {
        CFonts.say(`✅  ${text}/`, {
          font: 'console',
          space: false,
          colors: ['green'],
        });
      },

      error: ( text ) => {
        CFonts.say(`❎  ${text}`, {
          font: 'console',
          space: false,
          colors: ['red'],
        });
      },
    },
  }
})();


/***************************************************************************************************************************************************************
 *
 * MODULE
 *
 * Generate the json file
 *
 **************************************************************************************************************************************************************/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const KSS = require(`kss`);


GEN.json = (() => {

  return {
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Module init method
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
    init: () => {
      const uikitPath = `${GEN.UIKIT}/${GEN.UIKIT_SCSS}`;

      //http://kss-node.github.io/kss-node/api/master/module-kss.html
      KSS //use KSS to parse the scss files
       .traverse( uikitPath ) //we use the root path
       .then( kssData => { //promise return
        const data = JSON.parse( JSON.stringify( kssData.data.sections ) ); //parsing the data into an object
        let ID = ''; //we need to find the base ID
        let templates = []; //and populate the template array
        let kit = {}; //this is the object we will be building

        //reading this package.json for it's version
        const pkg = JSON.parse( Fs.readFileSync(`${GEN.UIKIT}/package.json`, `utf8`) );
        kit.version = pkg.version;

        data.map( section => { //iterate over the data

          //this is a top level entry
          if( section.depth === 1 ) {
            // Adding complete block to kit.json
            if( ID !== '' ) {
              kit[ ID ] = {
                templates: templates,
              };
            }

            ID = section.referenceURI; //setting the ID for the next section
            templates = []; //resetting the templates array
          }
          //this is a child entry
          else {
            if( section.markup !== '' ) { //we're only interested in the markup file paths
              templates.push( section.markup ); //adding it into our templates array
            }
          }
        });

        //adding last iteration to object
        kit[ ID ] = {
          templates: templates,
        };

        //writing the object to file
        Fs.writeFile( GEN.KIT, JSON.stringify( kit ), ( error ) => {
          if( error ) {
            throw error;
          }

          GEN.log.success(`successfully generated ${GEN.KIT} file`);

          console.log(`\n\n`);
        });
       }
      );
    },
  }

})();


/***************************************************************************************************************************************************************
 *
 * MODULE
 *
 * Copy template files into jekyll _includes folder
 *
 **************************************************************************************************************************************************************/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const Exec = require('child_process').exec;


GEN.copy = (() => {

  return {
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Module init method
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
    init: () => {
      //remove all html files in the folder so we don't produce garbage files
      let script = `rm ${GEN.TEMPLATES}/*.html`;

      Exec(script, ( error ) => {
        if( error ) {
          GEN.log.error(`exec error: ${error}`);
          return;
        }

        GEN.log.success(`successfully removed all files from ${GEN.TEMPLATES}/`);
      });


      //create folder just in case this is the first time we run this
      script = `mkdir ${GEN.TEMPLATES}`;

      Exec(script, ( error ) => {
        if( error ) {
          GEN.log.error(`Folder already created. All good...`);
          return;
        }

        GEN.log.success(`successfully created the folder: ${GEN.TEMPLATES}/`);
      });


      //copy files from submodule to includes folder of jekyll
      script = `cp ${GEN.UIKIT}/${GEN.UIKIT_templates}/* ${GEN.TEMPLATES}`;

      Exec(script, ( error ) => {
        if( error ) {
          GEN.log.error(`exec error: ${error}`);
          return;
        }

         GEN.log.success(`successfully copied all files from ${GEN.UIKIT}/${GEN.UIKIT_templates}/ to ${GEN.TEMPLATES}`);
      });
    },
  }

})();


/***************************************************************************************************************************************************************
 *
 * MODULE
 *
 * Initiate application
 *
 **************************************************************************************************************************************************************/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const CFonts = require(`cfonts`);

GEN.init = () => {
  CFonts.say(`Doing work`, {
      font: 'chrome',
      space: false,
      colors: ['red', 'magenta', 'blue'],
  });

  CFonts.say(`... so you don't have to`, {
      font: 'console',
      space: false,
  });

  console.log(`\n`);

  GEN.json.init();
  GEN.copy.init();
};

GEN.init();
