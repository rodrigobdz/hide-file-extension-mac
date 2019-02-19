# 📄 Hide File Extension 🍎

> Toggle file extension visibility from CLI for macOS

## Requirements

- Xcode Command-Line Tools
- Node

## Install

```sh
$ npm install hide-file-extension-mac
```

## Usage

```js
const hideFileExtensionMac = require("hide-file-extension-mac");

// foo.txt
hideFileExtensionMac("foo.txt");
//=> 'foo'

// foo
hideFileExtensionMac("foo.txt", { show: true });
//=> 'foo.txt'
```

## API

### hideFileExtensionMac(input, [options])

#### input

Type: `string`

Path to file.

#### options

Type: `Object`

##### show

Type: `boolean`<br>
Default: `false`

Flag to show or hide file extension.

## CLI

```sh
$ npm install --global hide-file-extension-mac
```

```sh
$ hide-file-extension-mac --help

  Usage
    hide-file-extension-mac [input]

  Options
    --show, -s  Show extensions [Default: false]

  Examples
    $ hide-file-extension-mac --show foo.txt
    # foo.txt
    $ hide-file-extension-mac foo.txt
    # foo
```

## License

[MIT](license) © [Rodrigo Bermudez Schettino](http://rodrigobdz.github.io)
