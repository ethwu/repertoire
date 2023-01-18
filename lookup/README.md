oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g spellbook-lookup
$ lookup COMMAND
running command...
$ lookup (--version)
spellbook-lookup/0.0.0 darwin-arm64 node-v19.4.0
$ lookup --help [COMMAND]
USAGE
  $ lookup COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`lookup hello PERSON`](#lookup-hello-person)
* [`lookup hello world`](#lookup-hello-world)
* [`lookup help [COMMAND]`](#lookup-help-command)
* [`lookup plugins`](#lookup-plugins)
* [`lookup plugins:install PLUGIN...`](#lookup-pluginsinstall-plugin)
* [`lookup plugins:inspect PLUGIN...`](#lookup-pluginsinspect-plugin)
* [`lookup plugins:install PLUGIN...`](#lookup-pluginsinstall-plugin-1)
* [`lookup plugins:link PLUGIN`](#lookup-pluginslink-plugin)
* [`lookup plugins:uninstall PLUGIN...`](#lookup-pluginsuninstall-plugin)
* [`lookup plugins:uninstall PLUGIN...`](#lookup-pluginsuninstall-plugin-1)
* [`lookup plugins:uninstall PLUGIN...`](#lookup-pluginsuninstall-plugin-2)
* [`lookup plugins update`](#lookup-plugins-update)

## `lookup hello PERSON`

Say hello

```
USAGE
  $ lookup hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/ethwu/spellbook/blob/v0.0.0/dist/commands/hello/index.ts)_

## `lookup hello world`

Say hello world

```
USAGE
  $ lookup hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ lookup hello world
  hello world! (./src/commands/hello/world.ts)
```

## `lookup help [COMMAND]`

Display help for lookup.

```
USAGE
  $ lookup help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for lookup.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.22/src/commands/help.ts)_

## `lookup plugins`

List installed plugins.

```
USAGE
  $ lookup plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ lookup plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.12/src/commands/plugins/index.ts)_

## `lookup plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ lookup plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ lookup plugins add

EXAMPLES
  $ lookup plugins:install myplugin 

  $ lookup plugins:install https://github.com/someuser/someplugin

  $ lookup plugins:install someuser/someplugin
```

## `lookup plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ lookup plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ lookup plugins:inspect myplugin
```

## `lookup plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ lookup plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ lookup plugins add

EXAMPLES
  $ lookup plugins:install myplugin 

  $ lookup plugins:install https://github.com/someuser/someplugin

  $ lookup plugins:install someuser/someplugin
```

## `lookup plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ lookup plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ lookup plugins:link myplugin
```

## `lookup plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ lookup plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lookup plugins unlink
  $ lookup plugins remove
```

## `lookup plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ lookup plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lookup plugins unlink
  $ lookup plugins remove
```

## `lookup plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ lookup plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lookup plugins unlink
  $ lookup plugins remove
```

## `lookup plugins update`

Update installed plugins.

```
USAGE
  $ lookup plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
