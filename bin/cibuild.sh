#!/usr/bin/env bash

# Fail fast and be aware of exit codes
set -eo pipefail

# Install bundler conservatively
gem install --conservative bundler

# Use bundle to install dependencies
bundle install

# Initalises install and seed tasks (pulls UI-Kit as a submodule)
bundle exec rake init

# Run Jekyll hyde (lint)
#bundle exec jekyll hyde

# Run Jekyll
bundle exec jekyll build

# Set up the site in $CIRCLE_ARTIFACTS
bundle exec jekyll build --destination $CIRCLE_ARTIFACTS/site --baseurl /0/$CIRCLE_ARTIFACTS/site
