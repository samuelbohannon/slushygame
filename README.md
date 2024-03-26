<b>How to Run:<b/>
- Clone the repository
- Download Python https://www.python.org/downloads/
- In the terminal, run "python main.py"

<b>How to make changes to the repository<b/>
- After you clone the repository, you'll make your development branch
- Download git https://git-scm.com/downloads
- Once you have git installed, open the project in your IDE
- Open a terminal
- Type "git status"
- You should be on the master branch. This branch should never be pushed to. We want to make a separate branch off of master and make a pull request into the master branch.
  - https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
- To make a new dev branch you'll be working on, do git "checkout -b {yourname}/dev/{shortdescription}"
- Do git status and make sure you're on your dev branch
- <b>How to make a pull request:<b/>
  - https://github.com/samuelbohannon/slushygame/pulls
  - Click "create pull request"
  - Find your branch into master
  - Create the request and ping the discord
  - You should never approve your own pull requests, always have a peer look them over before they get merged to main
  - Once merged, delete the branch you used.
- <b>Important notice:<b/> Before you make a pull request, get your branch up to date and resolve any conflicts so you don't have to do it in github.
  - To do this, do:
  - "git checkout master"
    -  "git stash" if you have any changes ready
  - "git pull origin master"
  - "git checkout {your dev branch youre ready to PR}"
  - "git merge master"
  - Now your branch is up to date. Restore any changes you stashed and make sure you test as code may have changed.
    - "git stash list"
    - "git stash apply stash@{<stash_number>}"
  
