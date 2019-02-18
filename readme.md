# hide-file-extension-mac [![Build Status](https://travis-ci.com/rodrigobdz/hide-file-extension-mac.svg?branch=master)](https://travis-ci.com/rodrigobdz/hide-file-extension-mac)

> Toggle file extension visibility from CLI for macOS


## Install

```
$ npm install hide-file-extension-mac
```


## Usage

```js
const hideFileExtensionMac = require('hide-file-extension-mac');

hideFileExtensionMac('unicorns');
//=> 'unicorns & rainbows'
```


## API

### hideFileExtensionMac(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `Object`

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global hide-file-extension-mac
```

```
$ hide-file-extension-mac --help

  Usage
    hide-file-extension-mac [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ hide-file-extension-mac
    unicorns & rainbows
    $ hide-file-extension-mac ponies
    ponies & rainbows
```


## License

MIT © [Rodrigo Bermudez Schettino](http://rodrigobdz.github.io)
