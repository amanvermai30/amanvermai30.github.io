const appPortfolioList = document.querySelectorAll('.app__portfolio--list');
const appPortfolioView = document.querySelectorAll('app__portfolio--view');


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