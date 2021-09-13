// import anime from 'animejs/lib/anime.es.js';
// anime({
//     targets: '.box',
//     keyframes: [
//         {translateX: 400},
//         {translateX: 0},

//       ],
//     duration: 1000,

// });

setTimeout(() => {
    let element = document.getElementsByClassName("box")[0]
    element.style.display = "flex";
    let element1 = document.getElementsByClassName("head")[0]
    element1.style.display = "flex";
    anime({
        targets: '.box',
        keyframes: [
            {translateX: 250},
            // {rotate: 360},
            // {scale: 2},
            // {rotate: -360},
            // {scale: 1},
            {translateX: -1}
          ],
        // translateX: {
        //   value: 250,
        //   duration: 800
        // },
        // rotate: {
        //   value: 360,
        //   duration: 1800,
        //   easing: 'easeInOutSine'
        // },
        // scale: {
        //   value: 2,
        //   duration: 1600,
        //   delay: 800,
        //   easing: 'easeInOutQuart'
        // },
        // rotate: {
        //   value: 360,
        //   duration: 1800,
        //   easing: 'easeInOutSine'
        // },
        // scale: {
        //   duration: 1600,
        //   delay: 800,
        //   easing: 'easeInOutQuart'
        // },
        easing: 'easeInOutSine',
        duration: 1000,
    
    });
    anime({
        targets: '.head',
        keyframes: [
            {translateY: -50},
            {translateY: 0},
            {translateY: 0},
          ],
          easing: 'easeInOutSine',
        duration: 1000,
    })
    anime({
        targets: '.btn',
        keyframes: [
            {rotateZ: '10deg'},
            {rotateZ: '-10deg'},
            {rotateZ: '10deg'},
            {rotateZ: '-10deg'},
            {rotateZ: '10deg'},
            {rotateZ: '-10deg'},
            {rotateZ: '10deg'},
            {rotateZ: '-10deg'},
            {rotateZ: '10deg'},
            {rotateZ: '-10deg'},
            {rotateZ: 0},
          ],
        delay: 1000,  
        easing: 'easeInOutSine',
        duration: 800,
    })
},500)