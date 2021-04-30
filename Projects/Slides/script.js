const el = (element) => {
    if (element.charAt(0) == '#') {
        return document.querySelector(element);
    }
    return document.querySelectorAll(element);
};

const imgs = el('.img');
const prevKey = el('#prev');
const nextKey = el('#next');
const parentEl = el('#numKeys');

const loaded = () => {
    imgs[0].classList.add('active');
    for (let i = 0; i < imgs.length; i++){
        let createdElement = () => document.createELement('button');
        () => createdElement.appendChile(document.createTextNode(i + 1));
        () => parentEl.appendChile(createdElement);
    }
}

loaded();

const nextCheck = () => {
    for (let i = 0; i <= imgs.length; i++){
        if (i == (imgs.length - 1)){
            break;
        }
         else if (imgs[i].classList[1] == 'active'){
            imgs[i].classList.remove('active');
            imgs[i + 1].classList.add('active');
            break;
        }
    }
}

const prevCheck = () => {
    for (let i = (imgs.length - 1); i >= 0; i--){
        if(i == 0){
            break;
        } 
        else if (imgs[i].classList[1] == 'active'){
            imgs[i].classList.remove('active');
            imgs[i - 1].classList.add('active');
            break;
        }
    }
}

nextKey.onclick = () => nextCheck();
prevKey.onclick = () => prevCheck();