# Mono-repo

A monorepo (of monolithic repository) is a repository that houses more then one project in the repository.
The intent is to make the code easier to reuse, simplified dependency management, atomic commits, large code refactoring and
collaboration across teams.

Monorepo will create challenges with deployment. 
When a change is made to one project that is isolated from the other projects, the naive approach is to deploy to all projects.
This is not what we want in large scale repos with a large number of projects.  
Unless the code change is a shared dependency, then its wasteful/inefficient to deploy to all.
However, it is possible with a little effort to make the deployment smarter.

One way to get more control is to do an independent deployment, split project deployment, we do this by comparing latest changes with the previous changes (latest commit with the previous commit).
When doing this we will need to workout what files have changed and in which projects. Then only building and deploying the project that change has effected.


>Below is a sample bash script of how we might achieve idependent deploy in a monorepo:
```
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
```

1. We could have a `build.sh` script for each project 
2. Maintaining a project location list in the `deploy.sh` script


# Meta-repo

###### Ref
https://en.wikipedia.org/wiki/Monorepo

https://github.com/lerna/lerna

https://medium.com/@mattklein123/monorepos-please-dont-e9a279be011b

https://danluu.com/monorepo/

https://hackernoon.com/4-ways-to-go-monorepo-in-2019-ea5d19fc1f08

https://seed.run/blog/how-to-deploy-only-the-updated-services-in-a-monorepo-serverless-app

http://blog.shippable.com/build-test-and-deploy-applications-independently-from-a-monorepo

https://notes.burke.libbey.me/metarepo/

https://www.youtube.com/watch?v=NxQVSzjl3x4 (Matt Walters - Many repos? Monorepo? Meta repo!)
