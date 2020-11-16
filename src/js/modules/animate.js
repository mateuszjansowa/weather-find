import {
    gsap
} from 'gsap';

const timeline = gsap.timeline();

const animateFadeDown = element => {
    timeline.from(element, {
            duration: 0.5,
            opacity: 0,
            y: -100,
        },
        "-=0.2")
}

const animateFadeUp = element => {
    timeline.from(element, {
        duration: 0.5,
        opacity: 0,
        y: 100,
        stagger: 0.1,
    }, "-=0.5")
}

export {
    animateFadeUp,
    animateFadeDown
};