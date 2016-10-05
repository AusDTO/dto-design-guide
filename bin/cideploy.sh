#!/usr/bin/env bash

# Exit immediately if any commands return non-zero
set -e
# download cf-cli and use to push
curl -v -L -o cf-cli_amd64.deb 'https://cli.run.pivotal.io/stable?release=debian64&source=github'
sudo dpkg -i cf-cli_amd64.deb
cf -v
cf login -a https://api.system.staging.digital.gov.au -o gov-ui -s gov-ui-kit -u $CF_USER_STAGING -p $CF_PASSWORD_STAGING
cf push dto-design-guide$1 -b staticfile_buildpack -p ./_site -i 1
