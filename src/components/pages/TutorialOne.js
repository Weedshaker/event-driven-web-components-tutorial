export default class tutorialOne extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* HTML */`
      <h2>Tutorial 1 - Setup</h2>
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