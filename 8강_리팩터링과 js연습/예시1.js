
// 코드 리팩터링의 간단한 예시
// 1. 함수로 추출하기
// 2. 함수 쪼개기
// 3. 반복작업 통합하기
// 4. 함수명 변경하기

// 리팩터링 되기 전 ----------------------------------------------------------------

$(()=>{
    $('.요소').on('click',()=>{
        console.log('A를한다');
        console.log('A는 엄청나게 복잡하다');
        console.log('B를한다');
        console.log('B는 엄청나게 복잡하다');
        console.log('C를한다');
        console.log('C는 엄청나게 복잡하다');
        console.log('D를한다');
        console.log('D는 엄청나게 복잡하다');
    })
})



// 함수로 추출하기 ----------------------------------------------------------------
// 함수를 만들어서 코드를 간결하게 만들 수 있다.

$(()=>{

    // 함수부
    const 함수 = ()=>{
        console.log('A를한다');
        console.log('A는 엄청나게 복잡하다')
        console.log('B를한다');
        console.log('B는 엄청나게 복잡하다')
        console.log('C를한다');
        console.log('C는 엄청나게 복잡하다')
        console.log('D를한다');
        console.log('D는 엄청나게 복잡하다')
    }

    // 실행부
    $('.요소').on('click',()=>{
        함수();
    })
})




// 함수 쪼개기 ----------------------------------------------------------------
// 함수를 쪼개서 코드를 기능 별로 나눌 수 있다.

$(()=>{
    const 함수1 = ()=>{
        console.log('A를한다');
        console.log('A는 엄청나게 복잡하다')
    }
    const 함수2 = ()=>{
        console.log('B를한다');
        console.log('B는 엄청나게 복잡하다')
    }
    const 함수3 = ()=>{
        console.log('C를한다');
        console.log('C는 엄청나게 복잡하다')
    }
    const 함수4 = ()=>{
        console.log('D를한다');
        console.log('D는 엄청나게 복잡하다')
    }
    
    $('.요소').on('click',()=>{
        함수1();
        함수2();
        함수3();
        함수4();
    })
})

// 반복작업 통합하기 ----------------------------------------------------------------
// 반복작업을 통합해서 코드를 간결하게 만들 수 있다.

$(()=>{
    const 함수 = (str)=>{
        console.log(str+'를한다');
        console.log(str+'는 엄청나게 복잡하다')
    }
    
    $('.요소').on('click',()=>{
        함수('A');
        함수('B');
        함수('C');
        함수('D');
    })
})


// 함수명 변경하기 ----------------------------------------------------------------
// 함수명을 변경해서 코드를 더욱 명확하게 만들 수 있다.

$(()=>{
    const 한다 = (str)=>{
        console.log(str+'를한다');
        console.log(str+'는 엄청나게 복잡하다');
    }
    
    $('.요소').on('click',()=>{
        한다('A');
        한다('B');
        한다('C');
        한다('D');
    })
})