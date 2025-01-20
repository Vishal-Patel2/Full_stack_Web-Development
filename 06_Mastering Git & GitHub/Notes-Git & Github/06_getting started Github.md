# Getting Started with Github

## Learn and Community

Check out our wide range of courses. We have a Discord community where you can ask questions and get help from the community.

## What is Github?

Github is a web-based Git repository hosting service. It is a popular platform for developers to collaborate on projects and to share code. Github provides a user-friendly interface for managing and tracking changes to your code, as well as a platform for hosting and sharing your projects with others.

### Alternatives to Github:
- Gitlab
- Bitbucket
- Azure Repos
- Gitea

However, the most mainstream and popular tool these days is Github.

## Github Account

Creating a Github account is free and easy. You can create an account by visiting the Github website and clicking on the "Sign up" button. You will be prompted to enter your email address and password, and then you will be redirected to the Github homepage.

Once you have created an account, you can start using Github to host and collaborate on your projects. Github provides a variety of features and tools that make it easy to manage and track your code, including issues, pull requests, and code reviews.

## Configure Your Config File

If you haven’t done it already, you need to configure your git config file. You can do this by running the following command:

```bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
```

This will set your email and name as your global settings. You can change these settings later by running the same command with new values.

Now you can check your config settings:

```bash
git config --list
```

This will show you all the settings that you have configured.

## Setup SSH Key and Add to Github

If you haven’t done it already, you need to set up an SSH key and add it to your Github account. You can find detailed instructions on the Github website for both Windows and macOS. The steps are similar for both; macOS users will also need to add the SSH key to their keychain.

### Step 1: Generate a New SSH Key

To generate a new SSH key, open the terminal and run the following command:

```bash
ssh-keygen -t ed25519 -C "your-email@domain.com"
```

Here `ed25519` is the type of key being generated. This creates a new SSH key, using the provided email as a label.

### Step 2: Save the Key

After generating the key, save it to your computer. You can do this by running the following command:

```bash
Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM): [Press enter]
```

At the prompt, you can enter a passphrase for the key or leave it blank. If you leave it blank, the key will be saved without a passphrase.

### Step 3: Add Key to Your SSH-Agent

After saving the key, add it to your SSH-agent. Refer to Github’s documentation for exact steps, as they provide comprehensive guides.

### Step 4: Add Key to Github

Use the Github web interface to add the SSH key to your account. Follow the instructions provided on the Github website.

## Adding Code to a Remote Repository

Now that you have set up your SSH key and added it to your Github account, you can start pushing your code to a remote repository.

### Step 1: Create a New Repository Locally

Create a new repository, add some code, and commit it:

```bash
git init
git add <files>
git commit -m "Initial commit"
```

### Step 2: Check Remote URL Settings

You can check the remote URL settings by running the following command:

```bash
git remote -v
```

### Step 3: Add a Remote Repository

Add a remote repository by running:

```bash
git remote add origin <remote-url>
```

For example:

```bash
git remote add origin https://github.com/your-username/your-repository.git
```

### Step 4: Push Code to Remote Repository

Push your code to the remote repository:

```bash
git push origin main
```

### Step 5: Setup an Upstream Remote

Setting up an upstream remote allows you to fetch and merge changes from the remote repository into your local repository. Use the following command:

```bash
git remote add upstream <remote-url>
```

You can also set it during the initial push:

```bash
git push -u origin main
```

This enables running future commands like `git pull` and `git push` without specifying the remote name.

## Get Code from a Remote Repository

### Fetch Code

To fetch code from a remote repository:

```bash
git fetch <remote-name>
```

### Pull Code

To pull code from a remote repository:

```bash
git pull origin main
```

## Conclusion

In this guide, we have covered setting up Github, configuring SSH keys, adding code to remote repositories, and fetching/pulling code. By following these steps, you can effectively use Github for version control and collaboration.
