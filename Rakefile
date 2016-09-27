namespace :db do

  desc "Install UI Kit and its dependencies"
  task :install do
    # Add UI Kit as a git submodule
    sh "git submodule init && git submodule update"
    # Install UI Kit's npm dependencies
    @install_path = `printf $(git submodule | awk '{ printf $2 }')`
    sh "npm --prefix #{@install_path} install #{@install_path}"
  end

  desc "Export styleguide data from UI Kit with KSS"
  task :seed do
    # Export JSON from UI Kit & copy to _data directory
    @install_path = `printf $(git submodule | awk '{ printf $2 }')`
    if @install_path == ""
      puts "UI Kit is not installed, try running rake db:install"
    else
      @gulp = "#{@install_path}/node_modules/gulp/bin/gulp.js"
      sh "#{@gulp} styleguide.data --cwd #{@install_path}"
      sh "cp #{@install_path}/data-sections.json _data/"
    end
  end
end

task :init => ['db:install', 'db:seed']
