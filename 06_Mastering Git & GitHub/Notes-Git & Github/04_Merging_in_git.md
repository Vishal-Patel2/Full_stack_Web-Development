# How to Merge Code in Git

Merging code in Git allows you to integrate changes from one branch into another. Here’s a step-by-step guide:

---

## Step 1: Ensure Your Branches Are Updated

Before merging, ensure you have the latest changes from the remote repository:

```bash
git pull origin <branch-name>
```

**Example:**

```bash
git pull origin main
```

---

## Step 2: Switch to the Branch You Want to Merge Into

You need to be on the branch where you want to integrate the changes.

```bash
git checkout <target-branch>
```

**Example:**

```bash
git checkout main
```

---

## Step 3: Merge the Branch

To merge another branch into the current branch:

```bash
git merge <source-branch>
```

**Example:**

```bash
git merge feature-branch
```

### Notes:
- If there are no conflicts, the merge will complete automatically.
- If there are conflicts, Git will indicate which files need to be resolved.

---

## Step 4: Resolve Merge Conflicts (If Any)

If conflicts arise:

1. Open the conflicting files.
2. Look for conflict markers:
   - `<<<<<<< HEAD` (your branch’s changes)
   - `=======`
   - `>>>>>>> <branch-name>` (changes from the branch you’re merging).
3. Edit the file to resolve the conflict.
4. After resolving all conflicts, mark them as resolved:

```bash
git add <file-name>
```

---

## Step 5: Complete the Merge

Once conflicts are resolved, finalize the merge by committing:

```bash
git commit -m "Resolved merge conflicts and completed merge"
```

---

## Step 6: Push the Changes

Push the merged code to the remote repository:

```bash
git push origin <branch-name>
```

**Example:**

```bash
git push origin main
```

---

## Example Scenario

1. Switch to the main branch:

```bash
git checkout main
```

2. Merge the feature-branch into main:

```bash
git merge feature-branch
```

3. Resolve any conflicts if necessary.
4. Commit and push the changes:

```bash
git push origin main
```

---

## Types of Merges

- **Fast-forward Merge:** If the target branch has no new commits since the source branch diverged, Git performs a fast-forward merge.
- **Not Fast-forward Merge:** If both branches have diverged, Git creates a merge commit to combine changes.

---

## Tips for Effective Merging

- Always pull the latest changes before merging.
- Test the merged code to ensure functionality.
- Communicate with your team to avoid conflicts.
