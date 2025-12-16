class TemplateHeader extends HTMLElement{
  constructor() {
    super();
    this.innerHTML = `
    <div id="headerArea">
      <nav id="navbar">
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/projects.html">Projects</a></li>
          <li><a href="/experience.html">Experience</a></li>
        </ul>
      </nav>
    </div>
    `;
    
  }
}

customElements.define('template-header', TemplateHeader);

class TemplateFooter extends HTMLElement{
  constructor(){
    super();
  
    this.innerHTML=`
    <footer>
      <h1>Connect with Me!</h1>
      <ul>
        <li><a href="https://www.linkedin.com/in/theodore-anzevino/" target="_blank">LinkedIn</a></li>
        <li><a href="https://discord.com/users/zeldafanta" target="_blank">Discord</a></li>
        <li><a href="https://github.com/Tsanzevino/" target="_blank">GitHub</a></li>
        <li><a href="mailto:tsanzevino@gmail.com" target="_blank">Email</a></li>
      </ul>
    </footer>
    `;}}
    
customElements.define('template-footer', TemplateFooter);

class TemplateAside extends HTMLElement{
  constructor(){
    super();
  
    this.innerHTML=`
  <h2>Updates</h2>
  <div class="box">
    <p><strong>Please read this first!</strong></p>
    <ul style="padding-left:10px;">
      <li>Rewrote the JS to generate cleaner code</li>
      <li>Rewrote the CSS in a way that hopefully makes much more sense to edit</li>
      <li>Added a couple of new features!</li>
      <li>Old version is still available <a href="old.html" target="_blank">here</a></li>
    </ul>
  </div>
  <h2>Hi there!</h2>
  <h3>Other Tools</h3>
  <ul>
    <li><a href="https://sadgrlonline.github.io/html-cheatsheet/" target="_blank">HTML Cheatsheet</a></li>
    <li><a href="/sadgrl/webmastery/webmaster-links.html" target="_blank">Webmaster Links</a></li>
    <li><a href="/sadgrl/webmastery/downloads/tiledbgs.html" target="_blank">Tiled BGs</a></li>
    <li><a href="/sadgrl/webmastery/downloads/fonts.html" target="_blank">Fonts</a></li>
    <li><a href="/sadgrl/projects/ideas/" target="_blank">Site Ideas</a></li>
  </ul>`;}}
    
customElements.define('template-aside', TemplateAside);

