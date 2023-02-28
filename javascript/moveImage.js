let image=document.getElementById('image');
// console.log(image);

document.onkeydown = move;

function move(e) {
    // e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        // console.log(parseInt(image.style.top))
        image.style.top = parseInt(image.style.top)-8+"px";
    }
    else if (e.keyCode == '40') {
        // down arrow
        image.style.top = parseInt(image.style.top)+8+"px";
    }
    else if (e.keyCode == '37') {
       // left arrow
       image.style.left = parseInt(image.style.left)-8+"px";
    }
    else if (e.keyCode == '39') {
       // right arrow
    //    console.log(parseInt(image.style.left))
    //    console.log((image.style.left))
       image.style.left = parseInt(image.style.left)+8+"px";
    }

}