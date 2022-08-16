const app = new PIXI.Application({
    width: 500, 
    height: 700, 
    resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

let player = {
    sprite: new PIXI.Sprite.from("assets/player.png"),
    height: 50,
    width: 100,
    x: 0,
    y: 0
}

window.addEventListener("keydown", key => {
    console.log(x);
});
window.addEventListener("keyup", key => {
    console.log(x);
});


app.ticker.add(delta => {
    
})