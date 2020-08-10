#!/bin/sh

yarn start

# `$*` expands the `args` supplied in an `array` individually
# or splits `args` in a string separated by whitespace.
sh -c "echo $GITHUB_REPOSITORY"
sh -c "echo $INPUT_CHECK"
sh -c "echo $INPUT_CHECK123"
sh -c "echo $PATH"

clone_repo="https://github.com/${GITHUB_REPOSITORY}.git"
git clone "${clone_repo}"
echo "Repository Cloned"
