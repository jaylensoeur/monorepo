#!/usr/bin/env bash

PROJECTS=('IttyIt.MonoRepo.APIv2' 'IttyIt.MonoRepo.ReactClientApp')

main() {
  work_directory=$(pwd);
  for project in "${PROJECTS[@]}"
  do
    is_build=$(git diff --name-only HEAD^ HEAD | grep -oP -m 1 "^$project/")
    if [ -z $is_build ]
    then
        continue;
    else
        build $project $work_directory
    fi
  done
}

build() {
  app=$1
  work_directory=$2

  if [ -z $ENV ]
  then
    echo "Dry run build ${app}..."
  else
    echo "Build ${app}..."
    cd $work_directory
    cd $app && ./build.sh
  fi
}

main;