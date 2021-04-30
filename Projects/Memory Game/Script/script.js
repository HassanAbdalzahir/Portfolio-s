const el = (element) => {
    if (element.charAt(0) == '#'){
        return document.querySelector(element);
    }
    return document.querySelectorAll(element);
}

el('.control-buttons span')[0].onclick = () => {
    let yourName = prompt('What\'s Your Name?');

    if(yourName == null || yourName == ""){
        el('.name span')[0].innerHTML = 'Unknown';
    } else {
        el('.name span')[0].innerHTML = yourName;
    }

    el('.control-buttons')[0].remove();
}

let duration = 500;

let blocksContainer = el('.memory-blocks')[0];

let blocks = Array.from(blocksContainer.children);

let orderRange = [...(Array(blocks.length).keys())]

    shuffle(orderRange)

blocks.forEach((block, index) => {

    block.style.order = orderRange[index];

    block.addEventListener('click', () => {
        flipBlock(block);
    });

})

function flipBlock(selectedBlock){

    selectedBlock.classList.add('is-flipped');

    let flippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    if (flippedBlocks.length == 2) {
        
        stopClicking();

        checkBlock(flippedBlocks[0], flippedBlocks[1]);
    }

}


function stopClicking(){

    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {
    blocksContainer.classList.remove('no-clicking');
    }, duration);
}

function checkBlock(block1, block2){
    let triesEl = el('.tries span')[0];

    if (block1.dataset.kind == block2.dataset.kind){
        block1.classList.remove('is-flipped');
        block2.classList.remove('is-flipped');

        block1.classList.add('has-match');
        block2.classList.add('has-match');

    }else {
        triesEl.innerHTML = (parseInt(triesEl.innerHTML) + 1);

        setTimeout(() => {
        block1.classList.remove('is-flipped')
        block2.classList.remove('is-flipped')}, duration)
    }
}

function shuffle(array) {
    let current = array.length,
        temp,
        random;

    while(current > 0) {
        
        random = Math.floor(Math.random() * current);

        current--;

        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }

    return array;
}
