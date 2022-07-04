# ImgurGallery
`IMGUR GALLERY` This application facilitates Browsing Imgur Gallery Images. User can filter images as per section like hot, top, user and user can sort images like viral, top and time, similarly user can select window like day, week, month, year , all. The image resource api is provided by api.imgur.com


Contents
========

 * [Why?](#why)
 * [Technology used](#Technology-used)
 * [Installation](#installation)
 * [Usage](#usage)
 * [Git Integration](#git-integration)
 * [Configuration](#configuration)
 * [Output Structure](#output-structure)

### Why?

I wanted a simple web application that allows user to:

+ Browse images.
+ Browse images based on section by selecting the section drop down values like hot, top, user.
+ Browse images based on sort by selecting the sort drop down values like viral, top, time.
+ Browse images based on window by selecting the window drop down values like day, week, month, year, all.
+ Load Images Button provided, so that once combination of drop down selection was made then click on this button to load images accordingly.

### Technology used
+ Angular 14
+ Material UI


### Installation
---

####  Install From GIT Repository

```bash
> mkdir imgur-gallery
> cd imgur-gallery
> git clone https://github.com/sampath3797/imgur-gallery.git
> npm install
```

### Usage
---
``` https://sampath3797.github.io/imgur-gallery/``` in browser to access the application
By default section selected as hot, sort selected as top, window selected as day. Hence as per the default selected values the application loads images. After that user can change the selection of section, sort and window as required and click on `Load Images` button to load images.

`shallow-backup` was built with scripting in mind. Every feature that's supported in the interactive program is supported with command line arguments.

```shell
Usage: shallow-backup [OPTIONS]

  Easily back up installed packages, dotfiles, and more.
  You can edit which files are backed up in ~/.shallow-backup.

  Written by Aaron Lichtman (@alichtman).

Options:
  --add-dot TEXT              Add a dotfile or dotfolder to config by path.
  -backup-all                 Full back up.
  -backup-configs             Back up app config files.
  -backup-dots                Back up dotfiles.
  -backup-packages            Back up package libraries.
  -delete-config              Delete config file.
  -destroy-backup             Delete backup directory.
  -dry-run                    Don't backup or reinstall any files, just give
                              verbose output.

  -backup-fonts               Back up installed fonts.
  --new-path TEXT             Input a new back up directory path.
  -no-new-backup-path-prompt  Skip setting new back up directory path prompt.
  -no-splash                  Don't display splash screen.
  -reinstall-all              Full reinstallation.
  -reinstall-configs          Reinstall configs.
  -reinstall-dots             Reinstall dotfiles and dotfolders.
  -reinstall-fonts            Reinstall fonts.
  -reinstall-packages         Reinstall packages.
  --remote TEXT               Set remote URL for the git repo.
  -separate-dotfiles-repo     Use if you are trying to maintain a separate
                              dotfiles repo and running into issue #229.

  -show                       Display config file.
  -v, --version               Display version and author info.
  -h, -help, --help           Show this message and exit.
```


### Git Integration
---

**A Word of Caution**

This backup tool is git-integrated, meaning that you can easily store your backups remotely (on GitHub, for example.) Dotfiles and configuration files may contain sensitive information like API keys and ssh keys, and you don't want to make those public. To make sure no sensitive files are uploaded accidentally, `shallow-backup` creates a `.gitignore` file if it can't find one in the directory. It excludes `.ssh/` and `.pypirc` by default. It's safe to remove these restrictions if you're pushing to a remote private repository, or you're only backing up locally. To do this, you should clear the `.gitignore` file without deleting it.

_If you choose to back up to a public repository, look at every file you're backing up to make sure you want it to be public._

**What if I'd like to maintain a separate repo for my dotfiles?**

`shallow-backup` makes this easy! After making your first backup, `cd` into the `dotfiles/` directory and run `$ git init`. Create a `.gitignore` and a new repo on your favorite version control platform. This repo will be maintained independently (manually) of the base `shallow-backup` repo. Note that you may need to use the `-separate_dotfiles_repo` flag to get this to work, and it may [break some other functionality of the tool](https://github.com/alichtman/shallow-backup/issues/229). It's ok for my use case, though.

Here's a `bash` script that I wrote to [automate my dotfile backup workflow](https://github.com/alichtman/scripts/blob/master/backup-and-update-dotfiles.sh). You can use this by placing it in your `$PATH`, making it executable, and running it.

### What can I back up?
---

By default, `shallow-backup` backs these up.

1. Dotfiles and dotfolders
    * `.bashrc`
    * `.bash_profile`
    * `.gitconfig`
    * `.pypirc`
    * `.config/shallow-backup.conf`
    * `.ssh/`
    * `.vim/`
    * `.zshrc`

2. App Config Files
    * Atom
    * VSCode
    * Sublime Text 2/3
    * Terminal.app

3. Installed Packages
    * `apm`
    * `brew` and `cask`
    * `cargo`
    * `gem`
    * `pip`
    * `pip3`
    * `npm`
    * `macports`
    * `VSCode` Extensions
    * `Sublime Text 2/3` Packages
    * System Applications

4. User installed `fonts`.

### Configuration

If you'd like to modify which files are backed up, you have to edit the `JSON` config file, located at `~/.config/shallow-backup.conf`. There are two ways to do this.

1. Select the appropriate option in the CLI and follow the prompts.
2. Open the file in a text editor and make your changes.

Editing the file in a text editor will give you more control and be faster.

#### Conditional Backup and Reinstallation

> **Warning**
> This feature allows code execution (by design). If untrusted users can write to your config, they can achieve code execution next time you invoke `shallow-backup` _backup_ or _reinstall_ functions. Starting in `v5.2`, the config file will have default permissions of `644`, and a warning will be printed if others can write to the config.

Every key under dotfiles has two optional subkeys: `backup_condition` and `reinstall_condition`. Both of these accept expressions that will be evaluated with `bash`. An empty string (`""`) is the default value, and is considered to be `True`. If the return value of the expression is `0`, this is considered `True`. Otherwise, it is `False`. This lets you do simple things like preventing backup with:

```javascript
// Because `$ false` returns 1
"backup_condition": "false"
```

And also more complicated things like only backing up certain files if an environment variable is set:

```javascript
"backup_condition": "[[ -n \"$ENV_VAR\" ]]"
```

Here's an example config based on my [dotfiles](https://www.github.com/alichtman/dotfiles):

```json
{
	"backup_path": "~/shallow-backup",
	"lowest_supported_version": "5.0.0a",
	"dotfiles": {
		".config/agignore": {
			"backup_condition": "uname -a | grep Darwin",
			"reinstall_conditon": "uname -a | grep Darwin"
		},
		".config/git/gitignore_global": { },
		".config/jrnl/jrnl.yaml": { },
		".config/kitty": { },
		".config/nvim": { },
		".config/pycodestyle": { },
		...
		".zshenv": { }
	},
	"root-gitignore": [
		".DS_Store",
		"dotfiles/.config/nvim/.netrwhist",
		"dotfiles/.config/nvim/spell/en.utf-8.add",
		"dotfiles/.config/ranger/plugins/ranger_devicons",
		"dotfiles/.config/zsh/.zcompdump*",
		"dotfiles/.pypirc",
		"dotfiles/.ssh"
	],
	"dotfiles-gitignore": [
		".DS_Store",
		".config/nvim/.netrwhist",
		".config/nvim/spell/en.utf-8.add*",
		".config/ranger/plugins/*",
		".config/zsh/.zcompdump*",
		".config/zsh/.zinit",
		".config/tmux/plugins",
		".config/tmux/resurrect",
		".pypirc",
		".ssh/*"
	],
	"config_mapping": {
		"/Users/alichtman/Library/Application Support/Sublime Text 2": "sublime2",
		"/Users/alichtman/Library/Application Support/Sublime Text 3": "sublime3",
		"/Users/alichtman/Library/Application Support/Code/User/settings.json": "vscode/settings",
		"/Users/alichtman/Library/Application Support/Code/User/Snippets": "vscode/Snippets",
		"/Users/alichtman/Library/Application Support/Code/User/keybindings.json": "vscode/keybindings",
		"/Users/alichtman/.atom": "atom",
		"/Users/alichtman/Library/Preferences/com.apple.Terminal.plist": "terminal_plist"
	}
}
```

#### .gitignore
node_modules folders are ignored

#### Output Structure
---

```shell
backup_dir/
├── configs
│   ├── plist
│   │   └── com.apple.Terminal.plist
│   ├── sublime_2
│   │   └── ...
│   └── sublime_3
│       └── ...
├── dotfiles
│   ├── .bash_profile
│   ├── .bashrc
│   ├── .gitconfig
│   ├── .pypirc
│   ├── ...
│   ├── .shallow-backup
│   ├── .ssh/
│   │   └── known_hosts
│   ├── .vim/
│   └── .zshrc
├── fonts
│   ├── AllerDisplay.ttf
│   ├── Aller_Bd.ttf
│   ├── ...
│   ├── Ubuntu Mono derivative Powerline Italic.ttf
│   └── Ubuntu Mono derivative Powerline.ttf
└── packages
    ├── apm_list.txt
    ├── brew-cask_list.txt
    ├── brew_list.txt
    ├── cargo_list.txt
    ├── gem_list.txt
    ├── installed_apps_list.txt
    ├── npm_list.txt
    ├── macports_list.txt
    ├── pip_list.txt
    └── sublime3_list.txt
```

