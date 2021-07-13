// @ts-check

import {Shadow} from '../event-driven-web-components-prototypes/src/Shadow.js'

export default class Page extends Shadow() {
  constructor() {
    super()
  }
  connectedCallback() {
    if (this.shouldComponentRenderCSS()) this.renderCSS()
  }
  /**
   * checks if render is needed
   *
   * @return {boolean}
   */
  shouldComponentRenderCSS() {
    return !this.querySelector('style')
  }
  renderCSS() {
    this.css = /* CSS */`
      :host {
        color: var(--color);
      }
    `
  }
}
