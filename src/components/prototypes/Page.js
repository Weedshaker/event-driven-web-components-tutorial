// @ts-check

import {Shadow} from '../event-driven-web-components-prototypes/src/Shadow.js'

export default class Page extends Shadow() {
  constructor() {
    super()

    this.scrollY = 0
    this.routeListener = event => this.scrollY = self.scrollY
    this.playListener = event => this.videos.forEach(video => {
      if (video === event.target) {
        video.classList.add('playing')
      } else {
        video.classList.remove('playing')
        video.pause()
      }
    })
    this.endedListener = event => {
      let nextVideo = null
      if ((nextVideo = this.videos[this.videos.indexOf(event.target) + 1])) nextVideo.play()
    }
  }
  connectedCallback() {
    if (this.shouldComponentRenderHTML()) this.renderHTML()
    if (this.shouldComponentRenderCSS()) this.renderCSS()
    document.body.addEventListener('route', this.routeListener)
    this.root.addEventListener('play', this.playListener, {capture: true})
    this.root.addEventListener('ended', this.endedListener, {capture: true})
    self.scrollTo(0, this.scrollY)
  }
  disconnectedCallback () {
    document.body.removeEventListener('route', this.routeListener)
    this.root.removeEventListener('play', this.playListener)
    this.root.removeEventListener('ended', this.endedListener)
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
        display: block;
        color: var(--color);
        width: 57vw;
      }
      .playing {
        border: var(--border);
      }
      :host a {
        color: var(--a-color);
      }
      :host a:hover {
        color: var(--a-color-hover);
      }
      @media only screen and (max-width: ${this.getAttribute('mobile-breakpoint') ? this.getAttribute('mobile-breakpoint') : self.Environment && !!self.Environment.mobileBreakpoint ? self.Environment.mobileBreakpoint : '1000px'}) {
        :host {
          width: 100vw;
        }
      }
    `
  }

  get h2 () {
    return this.root.querySelector('h2')
  }

  get videos () {
    return Array.from(this.root.querySelectorAll('video'))
  }
}
