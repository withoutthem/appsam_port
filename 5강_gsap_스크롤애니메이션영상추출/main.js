$(()=>{

    gsap.registerPlugin(ScrollTrigger);
    // canvas 준비
    const canvas = $('canvas')[0];
    const ctx = canvas.getContext('2d');

    // 캔버스 크기를 창 크기에 맞추기
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    $(window).resize(resizeCanvas); // 창 크기가 바뀔 때마다 캔버스 크기를 조정

    resizeCanvas(); // 처음에 한 번 캔버스 크기를 조정

    // 이미지 미리 로드
    const imageCount = 310; // 이미지 개수
    const images = [];

    for(let i = 0; i < imageCount; i++) {
        const img = new Image();
        img.src = `./tempimg/${i}.jpg`;
        images.push(img);
    }

    // 첫 번째 이미지 그리기
    images[0].onload = () => {
        ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
    };


    // scrollTrigger
    let canvasTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: 'canvas',
            start: 'center center',
            end: '+=5000',
            scrub: 1,
            markers:true,
            pin: true,
            onUpdate: self => {
                // progress에 따라 이미지 그리기
                const imageNumber = Math.floor(self.progress * (imageCount - 1));
                console.log(imageNumber);
                ctx.drawImage(images[imageNumber], 0, 0, canvas.width, canvas.height);
            }
        }
    })
})

// canvas로 하면 장점 ?
// - 코드가 효율적임
// - html에 img 태그를 넣지 않아도 됨
// - 자체 api를 사용하므로 api의 목적에 맞음

// canvas로 하면 단점 ?
// - 렌더링이 대체로 느림

// img 태그로 opacity를 조절하면 장점 ?
// - 브라우저 내에서 GPU를 대부분 사용하므로 렌더링이 빠름
// - js엔진을 덜 돌려도 되므로 빠르다는 장점 외에 없음

// img 태그로 opacity를 조절하면 단점 ?
// - 코드가 비효율적임
// - html에 img 태그를 넣어야 함(아주 많이)
// - 자체 api를 사용하지 않으므로 api의 목적에 맞지 않음 (가라임)

// 연습2 : scrollTrigger의 공식사이트에서 콜백함수를 4개 이상 찾아 각각 실행시켜보고 console에 자유롭게 출력해보세요. (예시 : onUpdate, onEnter)
// (라이브러리 공식문서 읽는 연습하기, 디버깅 연습하기)

