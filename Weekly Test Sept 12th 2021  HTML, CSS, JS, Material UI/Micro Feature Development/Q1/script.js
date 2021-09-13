// import anime from 'animejs/lib/anime.es.js';
anime({
    targets: '.box',
    keyframes: [
        {translateX: 400},
        {translateX: -1}
      ],
    duration: 2000,

});

setTimeout(() => {
    let element = document.getElementsByClassName("box")[0]
    element.style.display = "flex";
    anime({
        targets: '.box',
        keyframes: [
            {translateX: 400},
            {translateX: -1}
          ],
        duration: 3000,
    
    });
},3000)