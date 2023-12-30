$(()=>{

    $('#playButton').on('click', ()=>{
        gsap.to(".gsap_box1", {
            duration:1,
            width: 1000,
            height: 300,
            autoAlpha : 0.5,
            backgroundColor: "blue",
            "border-radius" : "50%",
        })
    })
})

// 연습
// 아무 디자인된 박스를 1.5초동안 width, borderRadius, rotate 을 변경시키는 애니메이션을 만들어봐요.
