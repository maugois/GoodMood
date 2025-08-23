// Cabeçalho responsivo
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.3}s`);
    });
  }

  handleClick() {
    console.log(this.navList)
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
        console.log(this);
        this.addClickEvent();
    }
    console.log(this.mobileMenu);
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".btn-mobile",
  "#nav-mobile",
  "#nav-mobile ul li",
);

mobileNavbar.init();

// Cabeçalho fixo no topo com efeito
window.addEventListener("scroll", () => {
    const navMobile = document.getElementById("nav-mobile");
    const header = document.getElementById("cabecalho-pagina");
    
    header.classList.toggle("cabecalho-fixed-top", window.scrollY > 0);
    navMobile.classList.toggle("nav-fix", window.scrollY > 0)
});