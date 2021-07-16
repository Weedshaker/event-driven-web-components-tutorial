// @ts-check

import {Shadow} from '../event-driven-web-components-prototypes/src/Shadow.js'

export default class Page extends Shadow() {
  constructor() {
    super()
  }
  connectedCallback() {
    if (this.shouldComponentRenderHTML()) this.renderHTML()
    if (this.shouldComponentRenderCSS()) this.renderCSS()
  }
  /**
   * checks if render is needed
   *
   * @return {boolean}
   */
  shouldComponentRenderHTML() {
    return !this.h2
  }
  /**
   * checks if render is needed
   *
   * @return {boolean}
   */
  shouldComponentRenderCSS() {
    return !this.root.querySelector('style[_css]')
  }
  renderCSS() {
    this.css = /* CSS */`
      :host {
        color: var(--color);
      }
    `
  }

  get h2 () {
    return this.root.querySelector('h2')
  }
}
