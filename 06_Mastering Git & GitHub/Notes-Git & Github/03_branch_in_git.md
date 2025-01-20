# Branched in Git

## Learn and Community

Check out our wide range of courses.  
We have a **Discord community** where you can ask questions and get help from the community.

---

## Branches in Git

Branches are a way to work on different versions of a project at the same time. They allow you to create a separate line of development that can be worked on independently of the main branch. This can be useful when you want to make changes to a project without affecting the main branch or when you want to work on a new feature or bug fix.

---

## Git and GitHub

Some developers can work on **Header**, some can work on **Footer**, some can work on **Content**, and some can work on **Layout**. This is a good example of how branches can be used in Git.

---

## HEAD in Git

The `HEAD` is a pointer to the current branch that you are working on. It points to the latest commit in the current branch. When you create a new branch, it is automatically set as the `HEAD` of that branch.

The default branch used to be **master**, but it is now called **main**. There is nothing special about `main`; it is just a convention.

---

## Creating a New Branch

To create a new branch, you can use the following commands:

```bash
git branch
git branch bug-fix
git switch bug-fix
git log
git switch master
git switch -c dark-mode
git checkout orange-mode

```
Some points to note:
git branch - Lists all the branches in the current repository.
git branch bug-fix - Creates a new branch called bug-fix.
git switch bug-fix - Switches to the bug-fix branch.
git log - Shows the commit history for the current branch.
git switch master - Switches to the master branch.
git switch -c dark-mode - Creates a new branch called dark-mode. The -c flag is used to create a new branch.
git checkout orange-mode - Switches to the orange-mode branch.

# Commit Before Switching to a Branch
Go to the .git folder and check out the HEAD file.

# Merging Branches

## Fast-forward Merge

A fast-forward merge is straightforward when the branch you are trying to merge is ahead of the main branch, and there are no conflicts.

When you are done working on a branch, you can merge it back into the main branch using the following commands:

```bash
git checkout main
git merge bug-fix

```

Some points to note:
git checkout main - Switches to the main branch.
git merge bug-fix - Merges the bug-fix branch into the main branch.
This is a fast-forward merge, meaning that the commits in the bug-fix branch are directly merged into the main branch.

# Not Fast-forward Merge

In this type of merge, the main branch also worked and has some commits that are not in the bug-fix branch. This is a not fast-forward merge.

### Commands:

```bash
git checkout main
git merge bug-fix
```

### Difference:

The difference is resolving conflicts. In a fast-forward merge, there are no conflicts. In a not fast-forward merge, conflicts arise, and there are no shortcuts to resolve them. You have to manually resolve the conflicts by deciding what to keep and what to discard.

### Resolving Conflicts:

- **Using VSCode:**  
  VSCode has a built-in merge tool that can help you resolve the conflicts.

- **Using GitHub:**  
  GitHub also has a merge tool, but most developers prefer handling conflicts in VSCode.


# Managing Conflicts
There is no magic button to resolve conflicts. You have to manually resolve them. Decide what to keep and what to discard. While it sounds scary to beginners, it’s all about communication and understanding the code situation with your team members.

# Rename a Branch

You can rename a branch using the following command:

```bash
git branch -m <old-branch-name> <new-branch-name>
```

# Delete a Branch

You can delete a branch using the following command:

```bash
git branch -d <branch-name>
```

# Checkout a Branch

You can checkout a branch using the following command:

```bash
git checkout <branch-name>
```

Checking out a branch means that you are going to work on that branch. You can check out any branch you want.

# List All Branches

You can list all branches using the following command:

```bash
git branch
```

Listing all branches means you are going to see all the branches in your repository.

# Conclusion

In this section, we have learned about:

- Different types of merges and how to resolve conflicts.
- The importance of branching and merging in Git and GitHub.
