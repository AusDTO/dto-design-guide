#!/usr/bin/env bash

# Exit immediately if there is an error
set -e -v

# cause a pipeline (for example, curl -s http://sipb.mit.edu/ | grep foo) to produce a failure
# return code if any command errors not just the last command of the pipeline.
set -o pipefail

# setup basic auth on the container
#
basicauth() {
  if [[ -n ${CF_BASIC_AUTH_PASSWORD+x} ]]
  then
    htpasswd -cb _site/Staticfile.auth $CF_BASIC_AUTH_USERNAME $CF_BASIC_AUTH_PASSWORD
  else
    echo "Not setting a password."
  fi
}

# main script function
#
main() {
  readonly GITBRANCH="${CIRCLE_BRANCH}"


  case "${GITBRANCH}" in
    master)
      cf api $CF_API_PROD
      cf auth $CF_USER_PROD $CF_PASSWORD_PROD
      cf target -o $CF_ORG_PROD
      cf target -s $CF_SPACE_PROD
      cf push -f manifest-production.yml
      ;;
    develop)
      cf api $CF_API_STAGING
      cf auth $CF_USER_STAGING $CF_PASSWORD_STAGING
      cf target -o $CF_ORG_STAGING
      cf target -s $CF_SPACE_STAGING
      cf push -f manifest-develop.yml
      ;;
    *)
      echo "I do not know how to deploy that branch"
      exit 0
      ;;
  esac
}

main $@
