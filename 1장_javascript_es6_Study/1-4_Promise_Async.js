// Promise 란? 언젠가 해결할 것이란 약속
// new Promise((reslove, reject)=>{}) Resolve : 해결, 성공 - then / Reject : 거절, 실패 - catch


//setTimeout()함수 이용 방법
//setTimeout(실행할 함수:()=>{}, 초:1000)

function sayHello(name, byeCallback){ //함수를 인수로 받아 올 수 있다!
    setTimeout(()=>{
    console.log(name+"님 안녕하세요")
    byeCallback()
    }, 2000);
}

sayHello("Mike", ()=>{
    console.log("안녕하 가세요")
})

//Promise 로 바꾸기
function sayHello2(name){ //sayHello2는 Promise 라고 생각하면 된다...
    return new Promise((resolve, reject)=>{ //Promise는 resolve랑 reject 2개의 인수르 받는다. resolve, reject이름은 무조건 국룰
        setTimeout(()=>{
            console.log(name+"님 안녕하세요!")
            resolve("서울") //해결이 잘 될 경우 .then()으로 간다 또한 안에 인수를 집어 넣을 수 있다
        }, 3000)
    }
    )
}

sayHello2("Frank")//resolve 이용
    .then((seoul)=>console.log(seoul+"안녕히가세요!")) //resolve가 실행했을 경우의 코드 then을 이용!!
//.then((여기에 resolve가 보낸 인수의 값이다!!)=>console.log(resolve가 보낸 인수 값))

//async function 방법!!
//async func_name(p){const result = await get_result()} await 기다려준다!

async function sayHelloBye(name){
    loc = await sayHello2(name) //어떠한 것을 꼭 기다려야 할 때 await을 사용
    console.log(loc + "안녕히 가세요")
}

sayHelloBye("Chang Woo")