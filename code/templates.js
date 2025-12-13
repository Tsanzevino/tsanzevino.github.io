class TemplateHeader extends HTMLElement{
  constructor() {
    super();
    this.innerHTML = `
    <div id="header">
        <nav id="navbar" style="margin-bottom: 10px;">
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
        <div id="footer-container">
            <h1>Connect with Me!</h1>
            <h2><a href="https://www.linkedin.com/in/theodore-anzevino/">LinkedIn</a></h2>
            <h2>Discord: @zeldafanta</h2>
        </div>
    </footer>
    `;}}
    
customElements.define('template-footer', TemplateFooter);
