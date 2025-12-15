class TemplateHeader extends HTMLElement{
  constructor() {
    super();
    this.innerHTML = `
    <div id="headerArea">
      <nav id="navbar">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="experience.html">Experience</a></li>
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
        <li><strong>Discord: @zeldafanta</strong></li>
        <li><a href="https://github.com/Tsanzevino/" target="_blank">GitHub</a></li>
      </ul>
    </footer>
    `;}}
    
customElements.define('template-footer', TemplateFooter);
