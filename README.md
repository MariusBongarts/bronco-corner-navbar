
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#live-demo)

## ➤ Live demo

<p class="codepen" data-height="311" data-theme-id="0" data-default-tab="html,result" data-user="marius2502" data-slug-hash="MMzboL" style="height: 311px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="bronco-button">
  <span>See the Pen <a target="_blank" href="https://codepen.io/marius2502/pen/LKaMWL">
  bronco-corner-navbar</a> by marius2502 (<a target="_blank" href="https://codepen.io/marius2502">@marius2502</a>)
  on CodePen.</span>
</p>


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