const appPortfolioList = document.querySelectorAll('.app__portfolio--list');
const appPortfolioView = document.querySelectorAll('app__portfolio--view');


const navliAbout = document.querySelector(".liabout")
const liSkill = document.querySelector(".liskill")
const liWork = document.querySelector(".liwork")
const liContact = document.querySelector(".licontact")


const sectionAbout = document.querySelector(".section__about")
const sectionSkill = document.querySelector(".about--skillex")
const sectionWork = document.querySelector(".section__portfolio")
const sectionContact = document.querySelector(".section__contact")


navliAbout.addEventListener('click', (e) => {
    // scrolling
    sectionAbout.scrollIntoView({ behavior: 'smooth' });
})

liSkill.addEventListener('click', (e) => {
    // scrolling
    sectionSkill.scrollIntoView({ behavior: 'smooth' });
})

liWork.addEventListener('click', (e) => {
    // scrolling
    sectionWork.scrollIntoView({ behavior: 'smooth' });
})

liContact.addEventListener('click', (e) => {
    // scrolling
    sectionContact.scrollIntoView({ behavior: 'smooth' });
})





















// Reveale section
// select all section
const allSection = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.07
})
allSection.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
})



// revealing view&github link
appPortfolioList.forEach((e) => {
    e.addEventListener('mouseover', (e) => {
        e.preventDefault();
        if (e.currentTarget.lastElementChild.classList.contains('hidden')) {
            e.currentTarget.lastElementChild.classList.remove('hidden');
        }
    })

    e.addEventListener('mouseout', (e) => {
        e.preventDefault();
        if (!e.currentTarget.lastElementChild.classList.contains('hidden')) {
            e.currentTarget.lastElementChild.classList.add('hidden');
        }
    })
})




// hamburger menu
const hamburger = document.querySelector('.fa-bars');
const mainNav = document.querySelector('.nav-big');
const navLink = document.querySelectorAll('.nav__link');
const mainBodyData = document.querySelector('.main__body--container')



hamburger.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.classList.contains('fa-bars')) {
        mainBodyData.style.filter = "blur(5px)";
        mainNav.style.left = '0px';
        mainNav.style.top = '0px';
    }
})

navLink.forEach((e) => {
    e.addEventListener('click', () => {
        mainNav.style.left = '-1110px';
        mainNav.style.top = '0px';
        mainBodyData.style.filter = "blur(0px)";
    })
})

mainBodyData.addEventListener('click', (e) => {
    console.log(e.currentTarget);
    if (e.currentTarget.style.filter = "blur(5px)") {
        console.log('true');
        mainNav.style.left = '-1110px';
        mainBodyData.style.filter = "blur(0px)";
    }
})



//******************************************** */


let navbar = document.querySelector("#main-navbar");
let control = navbar.offsetTop;
window.onscroll = function(){navbarStickyFun()};


navbarStickyFun = ()=>{

    if(window.pageYOffset >= control){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}



