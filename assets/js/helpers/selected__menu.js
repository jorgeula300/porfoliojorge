const navbarLisDom = document.querySelector('.navbar__link');
const navbarlinks = document.querySelector('.navbar__link--a');
const sections = document.querySelectorAll('section');

function activeSection(e) {
    if (e && e.type === 'click') {
        const clickedLink = e.target.closests(".navbar__link--a");
        const activeLink = document.querySelector('.navbar__link--a.active');
        if (activeLink) {
            activeLink.classList.remove('active');
        }

        if (clickedLink) {
            clickedLink.classList.add('active');
        }
    } else if (e && e.type === 'scroll') {
        const scrollPosition = window.scrollY + 50;

        for (let i = sections.length-1; i >= 0; i--) {

            if(scrollPosition >= sections[i].offsetTop) {
                const activeLink = document.querySelector('.navbar__link--a.active');
                if (activeLink) {
                    activeLink.classList.remove('active');
                }
                
                navbarLisDom[i].classList.add('active');
                break
            }

        }
    }


}


navbarLisDom.addEventListener('click', activeSection);
window.addEventListener('scroll', activeSection);
export default activeSection;