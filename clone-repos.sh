#!/bin/bash

cloneroot=../yourdomain.com
username=your-github-username

while read name; do
  cd $cloneroot
  git clone git@github.com:$username/$name.git
  git checkout gh-pages
done < repo-names.txt
