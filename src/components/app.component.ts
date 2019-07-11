import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';

const componentCSS = require('./app.component.scss');

/**
 * Modern corner circular navbar built with Lit-Element
 * @event selected - Dispatches a CustomEvent when nav item is selected. Selected item is stored in detail of Custom event
 * @cssprop --bg-color-item - Background color of item, when not hovered or selected
 * @cssprop --circle-color-transparent1 - First, less transparent, color of circle
 * @cssprop --circle-color-transparent2 - Second, more transparent, color of circle
 * @cssprop --circle-radius - Sets the radius of the inner circle
 * @cssprop --color - text color
 * @cssprop --bg-color-hover - Color when item is hovered
 * @cssprop --item-radius - Radius of the nav items inside of circle
 * @cssprop --item-shadow - Shadow of item, when not selected
 * @cssprop --item-shadow-selected - Shadow of item, when selected
 * @cssprop --position - Default: fixed
 * @cssprop --primary-color - Change primary color easily
 * @cssprop --shadow-x - Shadow-x of item
 * @cssprop --shadow-y - Shadow-y of item
 */
@customElement('bronco-corner-navbar')
export class BroncoCornerNavbar extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  itemsCount!: string;

  @property()
  isScrolling!: boolean;

  @property()
  mobile = false;

  /**
   * Takes an array to set (minimum: 3, maximum 5) nav items, of this component
   * @type {string[]}
   * @memberof AppRoot
   */
  @property()
  navItems = ['Home', 'Components', 'Documentation', 'Get started'];

  /**
   * Attribute, which is set to true when navbar is open
   * @type {boolean}
   * @memberof BroncoCornerNavbar
   */
  @property()
  open = false;

  /**
   * Sets selected item. Default is first item
   * @type {string}
   * @memberof BroncoCornerNavbar
   */
  @property()
  selectedItem = 'Components';

  @property()
  scrolledTop: boolean = true;

  /**
   * Makes the navbar disappear, when user is scrolling
   * @type {boolean}
   * @memberof BroncoCornerNavbar
   */
  @property()
  hideOnScrolling = false;

  /**
   * Makes the navbar disappear, when window is scrolled to the top
   * @type {boolean}
   * @memberof BroncoCornerNavbar
   */
  @property()
  hideOnTop = false;

  firstUpdated() {
    this.navItems = this.navItems.reverse();
    switch (this.navItems.length) {
      case 3:
        this.itemsCount = 'three';
        break;
      case 4:
        this.itemsCount = 'four';
        break;
      case 5:
        this.itemsCount = 'five';
        break;
      default:
        this.itemsCount = 'five';
    }
    if (window.innerWidth < 928) this.mobile = true;
    window.addEventListener('resize', () => {
      if (window.innerWidth < 928) this.mobile = true;
      if (window.innerWidth >= 928) this.mobile = false;
    });

    document.addEventListener('scroll', () => {
      this.isScrolling = true;
      this.open = false;
      document.documentElement.scrollTop === 0 ? this.scrolledTop = true : this.scrolledTop = false;
      setTimeout(() => {
        this.isScrolling = false;
      }, 500);
    });

    // Closes corner navbar when clicking outside of navbar
    document.addEventListener('click', (e: Event) => {
      const clickoutside = !e.composedPath().includes(this);
      clickoutside ? this.open = false : '';
    });
  }


  emit(selectedItem: string) {
    this.selectedItem = selectedItem;
    this.dispatchEvent(
      new CustomEvent('selected', {
        detail: selectedItem,
        bubbles: true
      })
    );
  }

  render() {
    return html`
                <!-- Hides corner icon during scrolling, when hideOnScrolling is activated.
                Hides corner, when scrolled to to the top, if hideOnTop is activated.
                On mobile devices, it is always shown -->
            <div class="icon ${this.open ? 'open' : ''}
            ${(((this.scrolledTop && this.hideOnTop) || this.isScrolling) && !this.mobile) && this.hideOnScrolling ? 'hide' : 'show showIcon'}"
              @click=${() =>
                this.open ? this.open
                    = false : this.open = true}>
              <span class="cls"></span>
              <span>
                <ul class="sub-menu">
                  <ul class='circle-container ${this.itemsCount}'>
                    <!-- Items are visible in opposite order  -->
                    <li></li>
                    ${this.navItems.map(item => html` <li>
                      <div class=${this.selectedItem===item ? 'active' : '' } @click=${()=> this.emit(item)}><a>${item}</a></div>
                    </li>`)}
                  </ul>
                </ul>
              </span>
              <span class="cls"></span>
            </div>
`;
  }

}
