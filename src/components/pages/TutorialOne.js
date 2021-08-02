// @ts-check

import Page from '../prototypes/Page.js'

export default class TutorialOne extends Page {
  renderHTML() {
    this.html = /* HTML */`
      <h2>Tutorial 1 - Setup</h2>
      <ol>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial1.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial1.mp4">link to the video</a> instead.</p>
          </video>
          <br>NOTE: Before "npm run serve" you need to install the packages by the command "npm install" at Minute 6:30. As well as you have to clone the submodules by "git submodule init" + "git submodule update"!
        </li>
      </ol>
      <ul>
        <li><a href="https://code.visualstudio.com/" target="_blank">Editor Visual Studio Code</a></li>
        <li><a href="https://github.com/" target="_blank">Github Account (optional)</a></li>
        <li><a href="https://git-scm.com/" target="_blank">Git (optional)</a></li>
        <li><a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/" target="_blank">NodeJs & npm (optional)</a></li>
        <li><a href="https://developer.mozilla.org/" target="_blank">Basic HTML, CSS and JS Knowledge</a></li>
        <li><a href="https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html" target="_blank">HTML String Extension (optional)</a></li>
        <li><a href="https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css" target="_blank">CSS String Extension (optional)</a></li>
      </ul>
    `
  }
}