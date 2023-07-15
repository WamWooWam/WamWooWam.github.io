const createBezier = module.exports;

let isShiftDown = false;
window.addEventListener('keydown', (event) => {
    if (event.key === 'Shift') {
        isShiftDown = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'Shift') {
        isShiftDown = false;
    }
});

// function that takes time and returns a value between 0 and 1
const EASE_LINEAR = createBezier(0, 0, 1, 1);
const EASE_CUBIC = createBezier(0.25, 0.1, 0.25, 1);
const EASE_CIRCULAR = createBezier(0.1, 0.57, 0.1, 1);
const EASE_APPLAUNCHROTATE = createBezier(0.18, 0.7, 0.6, 1.0);
const EASE_APPLAUNCHROTATEBOUNCE = createBezier(0.41, 0.52, 0.6, 1.4);
const EASE_APPLAUNCHDRIFT = createBezier(0.41, 0.52, 0.0, 0.94);
const EASE_APPLAUNCHSCALE = createBezier(0.42, 0.47, 0.3, 0.95);
const EASE_APPLAUNCHFASTIN = createBezier(0.17, 0.55, 0.3, 0.95);

const createEase = (bezier) => {
    return (time, start, end, duration) => {
        return start + (end - start) * bezier(time / duration);
    };
};

const createEaseClamp = (bezier) => {
    return (time, start, end, duration) => {
        return start + (end - start) * Math.max(0, Math.min(1, bezier(time / duration)));
    };
};


// an animation is constructed of a set of layers that are animated in parallel
// each layer has a start time, duration, and a function that takes time and returns a value between 0 and 1
// the value returned by the function is used to interpolate between the start and end values

const createAnimation = (layers) => {
    const duration = layers.reduce((max, layer) => {
        return Math.max(max, layer.start + layer.duration);
    }, 0);

    return {
        duration: duration,
        tick: (time) => {
            let values = {};
            for (const layer of layers) {
                let progress = (time - layer.start) / layer.duration;
                if (progress < 0) {
                    progress = 0;
                } else if (progress > 1) {
                    progress = 1;
                }

                console.log(layer.name, progress);

                values[layer.name] = layer.ease(progress, layer.startValue, layer.endValue, 1);
            }
            return values;
        }
    };
};

const createLayer = (name, startValue, endValue, start, duration, ease) => {
    return {
        name: name,
        startValue: startValue,
        endValue: endValue,
        start: start,
        duration: duration,
        ease: ease
    };
};

const createFlipAnimation = (tile, tileBounds) => {
    const linearEase = createEase(EASE_LINEAR);
    const fastInEase = createEase(EASE_APPLAUNCHFASTIN);
    const scaleEase = createEase(EASE_APPLAUNCHSCALE);
    const driftEase = createEase(EASE_APPLAUNCHDRIFT);
    const rotateEase = createEase(EASE_APPLAUNCHROTATE);

    const xLayer = createLayer("x", tileBounds.left - (window.innerWidth / 2) + (tileBounds.width / 2), 0, 0.0, 0.972, fastInEase);
    const yLayer = createLayer("y", tileBounds.top - (window.innerHeight / 2) + (tileBounds.height / 2), 0, 0.0, 0.972, driftEase);
    const widthLayer = createLayer("width", tileBounds.width / window.innerWidth, 1, 0.0, 0.947, scaleEase);
    const heightLayer = createLayer("height", tileBounds.height / window.innerHeight, 1, 0.0, 0.947, scaleEase);

    const angleLayer = createLayer("angle", 0, 180, 0.0, 1, rotateEase);
    const flipLayer = createLayer("flip", 0, 1, 0, 1, linearEase);

    return createAnimation([xLayer, yLayer, widthLayer, heightLayer, angleLayer, flipLayer]);
};


const createAnimationRunner = (animation, onTick, onFinished, timeScalar = 1.0) => {
    let startTime = null;
    let running = false;
    let animationFrame = null;
    let scalar = isShiftDown ? timeScalar * 20 : timeScalar;

    const run = (time) => {
        if (startTime === null) {
            startTime = time;
        }
        const progress = (time - startTime) / (animation.duration * (1000 * scalar));
        if (progress < 1.0) {
            onTick(animation.tick(progress));
            animationFrame = requestAnimationFrame(run);
        } else {
            onTick(animation.tick(1.0));
            running = false;
        }
    };

    return {
        start: () => {
            if (!running) {
                running = true;
                animationFrame = requestAnimationFrame(run);
            }
        },
        stop: () => {
            if (running) {
                running = false;
                cancelAnimationFrame(animationFrame);
            }
        }
    };
};

const createTileBack = (tile) => {


}


document.addEventListener('DOMContentLoaded', () => {
    const tileAnimationLayer = document.querySelector('.tile-animation-layer')
    let tiles = document.querySelectorAll('.tile');
    for (const tile of tiles) {
        tile.addEventListener('click', () => {
            const tileBounds = tile.getBoundingClientRect();

            const tileClone = tile.cloneNode(true);
            tileClone.classList.add('tile-clone');

            tileClone.style.position = 'absolute';
            tileClone.style.left = '0px';
            tileClone.style.top = '0px';
            tileClone.style.width = window.innerWidth + 'px';
            tileClone.style.height = window.innerHeight + 'px';
            tileClone.style.transform = `perspective(4000px) translate(${tileBounds.left}px, ${tileBounds.top}px) scale(${tileBounds.width / window.innerWidth}, ${tileBounds.height / window.innerHeight}) rotateY(0deg)`;
            tileAnimationLayer.appendChild(tileClone);

            tile.classList.add('hidden');

            const onTick = (values) => {
                let transform = `perspective(4000px) translate(${values.x}px, ${values.y}px) scale(${values.width}, ${values.height}) rotate3d(0,1,0,${values.angle}deg)`;
                tileClone.style.transform = transform;
            };

            const onFinished = () => {

            };

            const animation = createFlipAnimation(tileClone, tileBounds);
            const animationRunner = createAnimationRunner(animation, onTick, onFinished, 0.666);
            animationRunner.start();
        });
    }
});
