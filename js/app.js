//Start Global Variables

const sections = document.querySelectorAll("section");
const navigationBar = document.getElementById("navbar__list");

//End Global Variables

// Start Creating Navigation Bar sections
function createnavlist() {
  //access every section in html
  for (section of sections) {
    //caught section name and id
    secName = section.getAttribute("data-nav");
    secId = section.getAttribute("id");

    //create header element

    listcontent = document.createElement("li");

    listcontent.innerHTML = `<a class='menu__link' data-nav="${section.id}" href='#${secId}'>${secName}</a>`;
    //add item to navbar list

    navigationBar.appendChild(listcontent);
  }
}
// End Navigation Bar section
createnavlist();

// start making activate section
window.onscroll = function () {
  document.querySelectorAll("section").forEach((activate) => {
    let activeLink = navigationBar.querySelector(`[data-nav=${activate.id}]`);
    if (
      activate.getBoundingClientRect().top >= -400 &&
      activate.getBoundingClientRect().top <= 150
    ) {
      //activate this section
      activate.classList.add("your-active-class");
      activeLink.classList.add("active-link");
    } else {
      // sleep the section we don't  use
      activate.classList.remove("your-active-class");
      activeLink.classList.remove("active-link");
    }
  });
};

// making the scroll behavior smooth
navigationBar.addEventListener("click", (e) => {
  e.preventDefault();
  const srl = e.target;
  if (srl.classList.contains("menu__link")) {
    const id = srl.getAttribute("href").slice(1);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
});

let btn =  document.querySelector("#btn");
let counter = 4;
const createSection = () => {
  counter++;
  const content = `<section id="section${counter}" data-nav="Section ${counter}">
    <div class="landing__container">
    <h2>Section ${counter}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", content);
};

const navBar = document.getElementById("navbar__list");
const createNavItems = () => {
  navBar.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);
  });
};

document.getElementById("btn").addEventListener("click", () => {
    createSection();
    createNavItems();
  });