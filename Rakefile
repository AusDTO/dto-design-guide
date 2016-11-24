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

end

task :init => ['uikit:install', 'uikit:json_comments']
