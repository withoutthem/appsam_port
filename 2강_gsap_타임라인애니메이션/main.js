$(()=>{

    $('#playButton').on('click', ()=>{

        //gsap 타임라인 객체(인스턴스 선언)
        let tl = gsap.timeline();

        //체이닝 시스템을 통해 복잡한 애니메이션을 구현할 수 있다.
        tl.to(".gsap_box2", { duration: 1, x: 100 })
            .to(".gsap_box3",{duration:1, x:-100, y:-100})
            .to(".gsap_box3",{duration:1, rotate:90}, "<") // 이전 체이닝과 동시에 실행
            .to(".gsap_box2", { duration: 1, y: 100 })
            .to(".gsap_box2", { duration: 1, x: 0 })
            .to(".gsap_box2", {duration:2, scale:2, rotate:180},"<") // 이전 체이닝과 동시에 실행
            .to(".gsap_box3", {duration:2, rotate:270, backgroundColor:"red"},"<") // 이전 체이닝과 동시에 실행
    })

})

// 연습 : gsap를 이용해서 자유롭게 5체이닝 이상의 애니메이션을 구현해보세요.