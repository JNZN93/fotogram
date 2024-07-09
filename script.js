let images = ['bird.jpg', 'blue-flower.jpg','elephant.jpg', 'forest.jpg', 'kangaroo.jpg', 'mountain.jpg', 'mountains.jpg', 'wheat.jpg']


function render() {
    let content = document.getElementById('content');
    for ( let i = 0; i < images.length; i++) {
        content.innerHTML += `
        <div onclick="openDialog(${i})" class="imageCon">
        <img src="./img/images/${images[i]}">
    </div>
    <div onclick="closeDialog()" id="dialog" class="dialog d-none">
    </div>`;
    }
}


function openDialog(i) {
    let dialog = document.getElementById('dialog');
    dialog.innerHTML = "";
    dialog.classList.remove('d-none');
    dialog.innerHTML += `<div class="dialogImage">
        <img src="./img/images/${images[i]}">
        <div class="arrowCon">
        <img onclick="prevImage(event, ${i})" class="arrow" src="./assets/arrow-left.png">
        <span> ${i + 1} / ${images.length}</span>
        <img onclick="nextImage(event, ${i})" class="arrow" src="./assets/arrow-right.png">
        </div>
    </div>`;
}


function closeDialog() {
    let dialog = document.getElementById('dialog');
    dialog.classList.add('d-none');
}


function nextImage(event,i) {
    event.stopPropagation();
    if (i == images.length -1) {
        openDialog(0);

    } else {
        openDialog(i + 1);
    }
}


function prevImage(event, i) {
    event.stopPropagation();
    if (i == 0) {
     openDialog(images.length-1);

    } else {
        openDialog(i - 1);
    }
}