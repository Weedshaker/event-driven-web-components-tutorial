// @ts-check

import {Shadow} from './event-driven-web-components-prototypes/src/Shadow.js'

export default class Navigation extends Shadow() {
  constructor () {
    super()

    this.hashchangeListener = event => this.as.forEach(a => a.classList[location.hash === a.getAttribute('href') || location.hash === a.getAttribute('alt-href') ? 'add' : 'remove']('active'))
  }
  connectedCallback() {
    if (this.shouldComponentRenderCSS()) this.renderCSS()
    if (this.shouldComponentRenderHTML()) this.renderHTML()
    self.addEventListener('hashchange', this.hashchangeListener)
    this.hashchangeListener()
  }
  disconnectedCallback() {
    self.removeEventListener('hashchange', this.hashchangeListener)
  }
  /**
   * checks if render is needed
   *
   * @return {boolean}
   */
  shouldComponentRenderCSS() {
    return !this.root.querySelector('style[_css]')
  }
  /**
   * checks if render is needed
   *
   * @return {boolean}
   */
  shouldComponentRenderHTML() {
    return !this.nav
  }
  renderCSS() {
    this.css = /* CSS */`
      :host, nav {
        width: 40vw;
      }
      nav {
        position: fixed;
      }
      :host a {
        color: var(--a-color);
      }
      :host a.active {
        color: var(--a-color-active);
      }
      :host a:hover {
        color: var(--a-color-hover);
      }
      @media only screen and (max-width: ${this.getAttribute('mobile-breakpoint') ? this.getAttribute('mobile-breakpoint') : self.Environment && !!self.Environment.mobileBreakpoint ? self.Environment.mobileBreakpoint : '1000px'}) {
        nav {
          position: inherit;
          width: 100vw;
        }
      }
    `
  }
  renderHTML() {
    this.html = /* HTML */`
      <nav>
        <ul>
          <li><iframe class="gh-button" src="https://ghbtns.com/github-btn.html?user=Weedshaker&amp;repo=event-driven-web-components-tutorial&amp;type=star&amp;count=true&amp;size=large" scrolling="0" width="160px" height="30px" frameborder="0"></iframe></li>
          <li><a href="#/one" alt-href="#/">Tutorial 1 - Setup</a></li>
          <li><a href="#/two">Tutorial 2 - Make a Web Component</a></li>
          <li><a href="#/three">Tutorial 3 - Load a Web Component</a></li>
          <li><a href="#/four">Tutorial 4 - Structure and Type-Highlighting</a></li>
          <li><a href="#/five">Tutorial 5 - ShadowDom</a></li>
          <li><a href="#/six">Tutorial 6 - Routing</a></li>
          <li><a href="#/seven">Tutorial 7 - Event Driven</a></li>
        </ul>
      </nav>
    `
  }
  get nav () {
    return this.root.querySelector('nav')
  }
  get as () {
    return Array.from(this.root.querySelectorAll('a'))
  }
}
