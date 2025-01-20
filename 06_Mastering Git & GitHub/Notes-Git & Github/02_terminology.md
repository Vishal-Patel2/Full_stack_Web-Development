# Git and Github Basic Terminology

## 🧑‍💻 Git Basics  
- **Git**: Version control system for tracking code changes.  
- **Github**: Web-based platform for hosting Git repositories.  

## 📦 Repository  
A **repository** is where your code lives. It’s like a folder but with extra features like version control.

# Check repository status:
git status

## ⚙️ Setup Git  
Set your email and username globally:

- git config --global user.email "your-email@example.com"
- git config --global user.name "Your Name"

# Check your settings:
git config --list

# 🛠️ Create a Repository
 Initialize a repository:
 git init

# 📝 Commit Changes
- To commit changes:
- git commit -m "Your commit message"

# 🗂️ Stage Files
- To stage files:
- git add <file> <file2>

# 🚀 Push to Github
- After committing, push your changes:
- git push origin main

# 📜 View Logs
- To see commit history:
- git log

# 🔧 Change Default Editor
- Set VSCode as the default editor:
- git config --global core.editor "code --wait"

# 🛑 Gitignore
- Create a .gitignore to exclude files from tracking:
- node_modules/
- .env
- .vscode/

#💡 Conclusion
By mastering these basics, you'll be able to efficiently use Git and Github for version control and collaboration.


