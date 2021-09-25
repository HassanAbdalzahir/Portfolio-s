const el = (e) => e.charAt(0) == "#" ? document.querySelector(e) : document.querySelectorAll(e);

let box = el('.box')

let checkBoxes = () => {
    const triggerBottom = window.innerHeight;
    
    box.forEach(x => {
        const boxTop = x.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            x.classList.add('show')
        } else {
            x.classList.remove('show')
        }
    })
}

window.addEventListener('scroll', checkBoxes);
