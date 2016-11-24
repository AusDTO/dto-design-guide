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

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Settings
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
  return {
    UIKIT: '_assets/vendor/dto-ui-kit',
    UIKIT_SCSS: 'assets/sass',
    UIKIT_templates: 'assets/sass/components/templates',
    KIT: '_data/uikit.json',
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
const Path = require(`path`);


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

        //writing the object to file
        Fs.writeFile( GEN.KIT, JSON.stringify( kit ), (error) => {
          if( error ) {
            throw error;
          }

          CFonts.say(`✅  successfully generated ${GEN.KIT} file`, {
              font: 'console',
              colors: ['green'],
          });
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

  GEN.json.init();
};

GEN.init();
