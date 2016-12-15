#!/usr/bin/env bash

# Exit immediately if there is an error
set -e

# cause a pipeline (for example, curl -s http://sipb.mit.edu/ | grep foo) to produce a failure
# return code if any command errors not just the last command of the pipeline.
set -o pipefail

# echo out each line of the shell as it executes
set -x

main() {
  readonly GITBRANCH="${CIRCLE_BRANCH}"

  case "${GITBRANCH}" in
    master)
      echo "Building with production jekyll config"
      git submodule init                                                    # Pulling submodule
      git submodule update                                                  # Updating submodule
      npm i                                                                 # Installing dependencies for our build
      npm start                                                             # Starting build
                                                                            # Building jekyll with two configs plus the path variable
      bundle exec jekyll build --config _config.yml,_config-production.yml --destination ./_site/$CF_PATH --baseurl /$CF_PATH
      ;;
    *)
      echo "Building with develop jekyll config"
      git submodule init                                                 # Pulling submodule
      git submodule update                                               # Updating submodule
      npm i                                                              # Installing dependencies for our build
      npm start                                                          # Starting build
      bundle exec jekyll build --config _config.yml,_config-develop.yml  # Building jekyll with two configs
      ;;
  esac
}

main $@
