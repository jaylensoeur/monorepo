#!/usr/bin/env bash

PROJECTS=('IttyIt.MonoRepo.API' 'IttyIt.MonoRepo.ReactClientApp')

main() {
  for PROJECT in "${PROJECTS[@]}"
  do
    is_build=$(git diff --name-only HEAD^ HEAD | grep -oP -m 1 "^$PROJECT/")
    if [ -z $is_build ]
    then
        continue;
    else
        build $PROJECT
    fi
  done
}

build() {
  app=$1

  if [ -z $ENV ]
  then
    echo "Dry run build ${app}..."
  else
    echo "Build ${app}..."
    $app/build.sh
  fi
}

main;