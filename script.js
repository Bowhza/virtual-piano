document.addEventListener("keypress", function (event){
    let audio = new Audio(`audio/${event.key.toUpperCase()}.mp3`);
    audio.play();
});