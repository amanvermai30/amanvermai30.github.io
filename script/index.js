const appPortfolioList = document.querySelectorAll('.app__portfolio--list');
const appPortfolioView = document.querySelectorAll('app__portfolio--view');


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
    threshold: 0.20
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


