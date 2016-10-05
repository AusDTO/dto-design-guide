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
