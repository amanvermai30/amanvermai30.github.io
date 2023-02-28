const appPortfolioList = document.querySelectorAll('.app__portfolio--list');
const appPortfolioView = document.querySelectorAll('app__portfolio--view');


const liAbout = document.querySelectorAll(".liabout")
const liSkill = document.querySelectorAll(".liskill")
const liWork = document.querySelectorAll(".liwork")
const liContact = document.querySelectorAll(".licontact")


const sectionAbout = document.querySelector(".section__about")
const sectionSkill = document.querySelector(".about--skillex")
const sectionWork = document.querySelector(".section__portfolio")
const sectionContact = document.querySelector(".section__contact")


liAbout.forEach((e) => {
    e.addEventListener('click', (e) => {
        // scrolling
        console.log(e.target);
        sectionAbout.scrollIntoView({ behavior: 'smooth' });
    })
})

liSkill.forEach((e) => {
    e.addEventListener('click', (e) => {
        // scrolling
        sectionSkill.scrollIntoView({ behavior: 'smooth' });
    })
})

liWork.forEach((e) => {
    e.addEventListener('click', (e) => {
        // scrolling
        console.log(e.target);
        sectionWork.scrollIntoView({ behavior: 'smooth' });
    })
})

liContact.forEach((e) => {
    e.addEventListener('click', (e) => {
        // scrolling
        console.log(e.target);
        sectionContact.scrollIntoView({ behavior: 'smooth' });
    })
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
// appPortfolioList.forEach((e) => {
//     e.addEventListener('mouseover', (e) => {
//         e.preventDefault();
//         if (e.currentTarget.lastElementChild.classList.contains('hidden')) {
//             e.currentTarget.lastElementChild.classList.remove('hidden');
//         }
//     })

//     e.addEventListener('mouseout', (e) => {
//         e.preventDefault();
//         if (!e.currentTarget.lastElementChild.classList.contains('hidden')) {
//             e.currentTarget.lastElementChild.classList.add('hidden');
//         }
//     })
// })




// hamburger menu
const hamburger = document.querySelector('.fa-bars');
const mainNav = document.querySelector('.nav-big--2');
const navLink = document.querySelectorAll('.nav__link--2');
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


// changing website theme color

let icon = document.getElementById("sidebar_icon");
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if( document.body.classList.contains("light-theme")){
        icon.src = "./assets/moon.png";

    }else {
        icon.src = "./assets/sun.png";
    }
}


// for styles cursor 
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


function downloadResume() {

    window.open("https://drive.google.com/file/d/16xCZ4u51wHZtHW56jTAbwq9QU7l9EEnT/view?usp=sharing","_blank")

}

