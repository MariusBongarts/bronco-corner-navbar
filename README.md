Welcome to @marius/bronkocornernavbar. This is version 1.0.0!

<p align="center">
		<a href="https://david-dm.org/marius2502/WebStarter"><img alt="Dependencies" src="https://img.shields.io/david/marius2502/WebStarter.svg" height="20"/></a>
<a href="https://github.com/marius2502/WebStarter/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/marius2502/WebStarter.svg" height="20"/></a>
<a href="https://github.com/badges/shields"><img alt="Coverage" src="https://img.shields.io/badge/custom-badge-f39f37.svg" height="20"/></a>
	</p>


<p align="center">
  <b>Modern circle corner navbar</b></br>
  <sub>This modern circular navbar can be used in the corner of your website<sub>
</p>

<br />



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Installation](#-installation)
* [➤ Building](#-building)
* [➤ Testing](#-testing)
* [➤ bronco-corner-navbar](#-bronco-corner-navbar)
	* [Properties](#properties)
	* [Events](#events)
	* [CSS Custom Properties](#css-custom-properties)
* [➤ Contributors](#-contributors)
* [➤ License](#-license)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#installation)

## ➤ Installation

```
$ npm i
```

```
$ npm start
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#building)

## ➤ Building

```
$ npm run build
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#testing)

## ➤ Testing

Karma tests
```
$ npm run test
```

Selenium tests
```
$ npm run e2e
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#bronco-corner-navbar)

## ➤ bronco-corner-navbar

Modern corner circular navbar built with Lit-Element

### Properties

| Property          | Type          | Default      | Description                                      |
|-------------------|---------------|--------------|--------------------------------------------------|
| `clickoutside`    | `false \| ""` |              |                                                  |
| `hideOnScrolling` | `boolean`     | false        | Makes the navbar disappear, when user is scrolling |
| `hideOnTop`       | `boolean`     | false        | Makes the navbar disappear, when window is scrolled to the top |
| `isScrolling`     | `boolean`     | **required** |                                                  |
| `itemsCount`      | `string`      | **required** |                                                  |
| `mobile`          | `boolean`     | false        |                                                  |
| `navItems`        | `string[]`    |              | Takes an array to set (minimum: 3, maximum 5) nav items, of this component |
| `open`            | `boolean`     | false        | Attribute, which is set to true when navbar is open |
| `scrolledTop`     | `boolean`     | true         |                                                  |
| `selectedItem`    | `string`      | "Components" | Sets selected item. Default is first item        |

### Events

| Event      | Description                                      |
|------------|--------------------------------------------------|
| `selected` | Dispatches a CustomEvent when nav item is selected. Selected item is stored in detail of Custom event |

### CSS Custom Properties

| Property                      | Description                                      |
|-------------------------------|--------------------------------------------------|
| `--bg-color-hover`            | Color when item is hovered                       |
| `--bg-color-item`             | Background color of item, when not hovered or selected |
| `--circle-color-transparent1` | First, less transparent, color of circle         |
| `--circle-color-transparent2` | Second, more transparent, color of circle        |
| `--circle-radius`             | Sets the radius of the inner circle              |
| `--color`                     | text color                                       |
| `--item-radius`               | Radius of the nav items inside of circle         |
| `--item-shadow`               | Shadow of item, when not selected                |
| `--item-shadow-selected`      | Shadow of item, when selected                    |
| `--position`                  | Default: fixed                                   |
| `--primary-color`             | Change primary color easily                      |
| `--shadow-x`                  | Shadow-x of item                                 |
| `--shadow-y`                  | Shadow-y of item                                 |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ Contributors
	

| [<img alt="Marius Bongarts" src="https://avatars2.githubusercontent.com/u/38838885?s=460&v=4" width="100">](https://bongarts.net/) | [<img alt="You?" src="https://joeschmoe.io/api/v1/random" width="100">](https://github.com/andreasbm/readme/blob/master/CONTRIBUTING.md) |
|:--------------------------------------------------:|:--------------------------------------------------:|
| [Marius Bongarts](https://bongarts.net/)         | [You?](https://github.com/andreasbm/readme/blob/master/CONTRIBUTING.md) |
| [marius@bongarts.net](mailto:marius@bongarts.net) |                                                  |
| 🔥                                               |                                                  |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License
	
Licensed under [ISC](https://opensource.org/licenses/ISC).



