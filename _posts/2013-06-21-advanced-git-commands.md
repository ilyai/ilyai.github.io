---
layout: post
title: "Advanced Git commands"
date: 2013-06-21 02:12:02
categories: git
---

## Some of which are used not so often thus harder to memorize
  
    $ git config --global color.ui true    # enable colors
  
    $ git add --all    # add all new or modified files
    
    $ git diff --staged    # view staged differences
    
    $ git reset HEAD <file>    # unstage a file
    
    $ git checkout -- <file>    # reset file to the last commit's state
    
    $ git reset --soft HEAD^    # revert last commit and move its changes to the staging area *
    
    $ git commit --amend -m <message>    # complement last commit with the content of staging area
    
    $ git reset --hard HEAD^    # undo last commit with all its changes *
    
    $ git remote add origin <url>    # add main remote repository **
    
    $ git remote rm <name>    # remove the remote
    
    $ git push -u <origin> <branch>    # push to given origin and branch and remember it for the next run
    
    $ git clone <url> <destination>    # clone repository into destination **
    
    $ git remote -v    # list remotes
    
    $ git branch <branch>    # create new branch
    
    $ git checkout <branch>    # switch to the given branch
    
    $ git merge <branch>    # merge given branch to the current
    
    $ git branch -d <branch>    # delete branch if it has no unsed commits
    
    $ git merge --abort    # undo merge with conflicts
    
    $ git commit -a    # commit with default message (after resolving conflicts)
    
    $ git branch -r    # list all remote branches
    
    $ git remote show origin    # list info about origin and branches
    
    $ git push origin :<branch>    # delete remote branch
    
    $ git remote prune origin    # cleanup refs of stalled branches
    
    $ git push origin <local_branch>:<remote_branch>    # push local branch to another remote one
    
    $ git tag    # list all tags
    
    $ git tag -a <tag> -m <message>    # add a new tag
    
    $ git push --tags    # push with tags
    
    $ git fetch    # sync with remote branch without merging
    
    $ git rebase    # rebase fetched remote branch with local
    
    $ git log --pretty=oneline    # log in the compact format (hash, message)
    
    $ git log --oneline -p    # log commits along with diffs
    
    $ git log --oneline --graph    # log tree along with commits messages
    
    $ git diff HEAD^    # diff against previous commit *
    
    $ git diff HEAD^..HEAD    # diff between range *
    
    $ git diff <branch1> <branch2>   # diff between branches
    
    $ git blame <file>    # print each line of the file along with author and date
    
    $ git rm --cached <file>    # remove the file without actually deleting it from filesystem
    
    $ git config --list    # dump current settings


***    
`*` *Instead of `HEAD^` use `HEAD^^` for last 2 commits, `HEAD~3` for last 3 commits and so on*

`**` *Url format is usually `host:path`*
