#!/usr/bin/env bash

# Exit immediately if there is an error
set -e

# cause a pipeline (for example, curl -s http://sipb.mit.edu/ | grep foo) to produce a failure return code if any command errors not just the last command of the pipeline.
set -o pipefail

# echo out each line of the shell as it executes
set -x

main() {
  readonly GITBRANCH="${CIRCLE_BRANCH}"

  case "${GITBRANCH}" in
    master)
      echo "Building with production jekyll config"
      JEKYLL_ENV=production bundle exec jekyll build
      # Not using for now: --config _config.yml,_config-production.yml
      ;;
    develop)
      echo "Cloning UI-Kit as a submodule, and installing npm deps and building JSON"
      git submodule init
      git submodule update
      INSTALL_DIR="`printf $(git submodule | awk '{ printf $2 }')`"
      npm --prefix ${INSTALL_DIR} install ${INSTALL_DIR}
      npm start
      echo "Building with development/staging jekyll config"
      JEKYLL_ENV=production bundle exec jekyll build
      # Not suing for now: --config _config.yml,_config-develop.yml
      ;;
    *)
      echo "Cloning UI-Kit as a submodule, and installing npm deps and building JSON"
      git submodule init
      git submodule update
      INSTALL_DIR="`printf $(git submodule | awk '{ printf $2 }')`"
      # npm --prefix ${INSTALL_DIR} install ${INSTALL_DIR}
      npm i
      npm start
      echo "Building with normal jekyll config"
      bundle exec jekyll build
      exit 0
      ;;
  esac
}

main $@
