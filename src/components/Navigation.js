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
  disconnectCallback() {
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
      :host a {
        color: green;
      }
      :host a.active {
        color: red;
      }
    `
  }
  renderHTML() {
    this.html = /* HTML */`
      <nav>
        <ul>
          <li><a href="#/one" alt-href="#/">Tutorial 1 - Setup</a></li>
          <li><a href="#/two">Tutorial 2 - Make a Web Component</a></li>
          <li><a href="#/three">Tutorial 3 - Load a Web Component</a></li>
          <li><a href="#/four">Tutorial 4 - Structure and Type-Highlighting</a></li>
          <li><a href="#/five">Tutorial 5 - ShadowDom</a></li>
          <li><a href="#/six">Tutorial 6 - Routing</a></li>
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
