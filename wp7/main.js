(() => {
    let tiles = document.querySelectorAll(".tile"); 
    for (let i = tiles.length - 1; i >= 0; i--) {
        let tile = tiles[i];
        tile.style.transformOrigin = -(i % 2) * 173 - 24 + "px";
        tile.style.transform =  "translate3d(-64px,0, -64px) rotateY(90deg)";
        tile.style.opacity = 0;        
    }

    setTimeout(() => { 
        for (let i = tiles.length - 1; i >= 0; i--) {
            let tile = tiles[i];

            tile.style.transitionDelay = (tiles.length - i) * 40 + "ms",
            tile.style.transform = "translate3d(0,0,0) rotateY(0deg)";
            tile.style.opacity = 1;
        }
    }, 1000)
})();