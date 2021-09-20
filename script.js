const sections = document.querySelectorAll('.content')

window.addEventListener('scroll', checkSections)

function checkSections(){
    const triger = (window.innerHeight / 5 * 4)

    sections.forEach(element => {
        const top = element.getBoundingClientRect().top
        if(top < triger){
            element.classList.add('show')
        }
        else {
            element.classList.remove('show')
        }
    });
}