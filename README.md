gh-pages-emigration
==================

Scripts I used to move a lot of static web sites hosted on GitHub Pages to a regular nginx web server.

# Step 1

Run this query in the [GitHub API GraphQL Explorer]():

    {
      user(login: "your username") {
        repositories(first: 100) {
          nodes {
            name
            defaultBranchRef {
              name
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    }

Repeat, adding a `after: <value from endCursor in the previous query's results>` to the `repositories` parameters, until you've gotten all of the repositories.

Save the `nodes` array from the results to a file, combining them into a single array. Name the file `repos.json` and put it in the root of this project.

Run `node list-repos-with-default-gh-pages-branch.js > repo-names.txt`

**OR**: Just make a text file with the project names you want to migrate, one to each line.

# Step 2

Edit `cloneroot` and `username` in `clone-repos.sh`.

Either on your computer or on your server, run `./clone-repos.sh` to clone all of the repos and check out the gh-pages branch. If you clone them to your computer, rsync them all up to the server.

Done! Now you can check them on a browser.

License
-------

The MIT License (MIT)

Copyright (c) 2019 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
