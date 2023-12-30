$(()=>{

    //scrollTrigger 플러그인을 gsap에 등록
    gsap.registerPlugin(ScrollTrigger);

    // gsap.timeline()을 이용해 애니메이션 효과를 줄 요소들을 지정(tl객체 생성)
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".gsap_box5",
            pin: true, // true이면 스크롤이 트리거를 지나갈 때까지 트리거를 고정
            start: "center center", // 트리거가 화면 상단에 닿으면 애니메이션 시작
            markers: true,
            end: "+=1000", // 2000px만큼 스크롤하면 애니메이션 끝
            scrub: 1, // 스크롤 속도에 따라 애니메이션 속도가 달라짐
        },
    });

    tl2.to(".gsap_box5", { rotate : 360 })
        .to(".gsap_box5", { "background":"red" }, "<")// "<"는 앞에 있는 애니메이션과 함께 실행
        .to(".gsap_box5", { rotate: 0 });

})

// 연습 : scrollTrigger 플러그인을 이용해 스크롤에 따라 3체이닝 이상의 애니메이션을 자유롭게 구현해보세요.