// @ts-check

import Page from '../prototypes/Page.js'

export default class TutorialFour extends Page {
  renderHTML() {
    this.html = /* HTML */`
      <h2>Tutorial 4 - Structure and Type-Highlighting</h2>
      <ol>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial4_1.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial4_1.mp4">link to the video</a> instead.</p>
          </video>
        </li>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial4_2.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial4_2.mp4">link to the video</a> instead.</p>
          </video>
        </li>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial4_3.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial4_3.mp4">link to the video</a> instead.</p>
          </video>
        </li>
      </ol>
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks" target="_blank">Life cycles</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:host()" target="_blank">:host</a></li>
        <li><a href="https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html" target="_blank">type-checking-javascript-files (optional)</a></li>
      </ul>
    `
  }
}
