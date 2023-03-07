// @ts-check

import Page from '../prototypes/Page.js'

export default class TutorialFour extends Page {
  renderHTML () {
    this.html = /* HTML */`
      <h2>Tutorial 5 - ShadowDom</h2>
      <ol>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial5_1.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial5_1.mp4">link to the video</a> instead.</p>
          </video>
        </li>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial5_2.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial5_2.mp4">link to the video</a> instead.</p>
          </video>
        </li>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial5_3.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial5_3.mp4">link to the video</a> instead.</p>
          </video>
        </li>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial5_4.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial5_4.mp4">link to the video</a> instead.</p>
          </video>
        </li>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial5_5.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial5_5.mp4">link to the video</a> instead.</p>
          </video>
        </li>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial5_6.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial5_6.mp4">link to the video</a> instead.</p>
          </video>
        </li>
      </ol>
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow" target="_blank">attachShadow</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:host()" target="_blank">:host</a></li>
        <li><a href="https://github.com/Weedshaker/event-driven-web-components-prototypes" target="_blank">The Shadow Prototype</a></li>
        <li><a href="https://git-scm.com/book/en/v2/Git-Tools-Submodules" target="_blank">Git Submodules</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank">CSS Variables</a></li>
      </ul>
    `
  }
}
