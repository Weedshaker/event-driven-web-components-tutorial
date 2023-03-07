// @ts-check

import Page from '../prototypes/Page.js'

export default class TutorialThree extends Page {
  renderHTML () {
    this.html = /* HTML */`
      <h2>Tutorial 3 - Load a Web Component</h2>
      <ol>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial3_1.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial3_1.mp4">link to the video</a> instead.</p>
          </video>
        </li>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial3_2.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial3_2.mp4">link to the video</a> instead.</p>
          </video>
        </li>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial3_3.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial3_3.mp4">link to the video</a> instead.</p>
          </video>
        </li>
      </ol>
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import" target="_blank">import</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">Destructuring assignment</a></li>
      </ul>
    `
  }
}
