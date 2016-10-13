namespace :uikit do

  desc "Install UI Kit and its dependencies"
  task :install do
    # Add UI Kit as a git submodule
    sh "git submodule init && git submodule update"
    # Install UI Kit's npm dependencies
    @install_dir = `printf $(git submodule | awk '{ printf $2 }')`
    sh "npm --prefix #{@install_dir} install #{@install_dir}"
    puts "→ UI Kit installed"
  end

  desc "Export styleguide data from UI Kit with KSS"
  task :json_comments do
    # Export JSON from UI Kit & copy to _data directory
    @install_dir = `printf $(git submodule | awk '{ printf $2 }')`
    if @install_dir == ""
      puts "→ UI Kit is not installed, try running rake db:install"
    else
      @gulp = "#{@install_dir}/node_modules/gulp/bin/gulp.js"
      sh "#{@gulp} styleguide.data --cwd #{@install_dir} &&
       cp #{@install_dir}/.sass-lint.yml _assets/scss/ &&
       cp #{@install_dir}/data-sections.json _data/ &&
       cp #{@install_dir}/assets/sass/components/templates/* _includes/templates"
      puts "→ Data & templates populated"
    end
  end

end

task :init => ['uikit:install', 'uikit:json_comments']
