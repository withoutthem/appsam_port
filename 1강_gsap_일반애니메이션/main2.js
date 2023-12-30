$(()=>{

    gsap.registerPlugin(ScrollTrigger);

    // canvas
    const canvas = $('canvas')[0];
    const ctx = canvas.getContext('2d');

    // canvas 크기를 창 크기에 맞추기

    const resizeCanvas = () =>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // 전체화면
    }

    $(window).resize(resizeCanvas);

    resizeCanvas();

    // 이미지 미리 로드
    const imageCount = 310;
    const images = [];

    for(let i = 0; i < imageCount; i++){
        const img = new Image();
        img.src = `./temping/${i}.jpg`;
        images.push(img);
    }

    // 첫번째 이미지 그리기
    images[0].onload = () =>{
        ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
    }

    // scrollTrigger
    let canvasTimeline = gsap.timeline({
        scrollTrigger : {
            trigger: 'canvas',
            start: 'center center',
            end: '+=5000',
            scrub: 1,
            markers: true,
            pin: true,
            onUpdate: self => { // 0 ~ 1
                const imageNumber = Math.floor(self.progress * (imageCount - 1));
                ctx.drawImage(images[imageNumber], 0, 0, canvas.width, canvas.height);
            },
            onEnter : () =>{
                console.log('엔터다');
            }
        }
    })

})