//비동기 : 모든게 절차적으로 실행되지 않는다!
//예
setTimeout(()=>{console.log("안녕하세요")},2000) //2초 뒤에 보여주는 함수

console.log("안녕히가세요!!!!!!!!") // 이런 식으로 순차적이지 않다!!
//이유 : 속도가 느려도 인터랙션은 되어야 한다!!
//1. 인터넷 속도 의종
//2. 유저 인터랙션
//만약 우리가 어떠한 웹사이트에 들어 갔을때 인터넷이 느리다고 가정해보자.
//그때, 아무것도 안뜨고 전부 끝날때까지 기다려야한다면 사용자로서는 불편..
//그래서 하나 하나 완료되면 띄우는 느낌!! 그림이 나중에 보이는 것처럼

//Call back 다 되면 알려줘!!
//Call back 구조, 다운로드를 받는다
function doSomethingElseAsync(callback){
    console.log('doSomethingElseAsync: Wait for half a sec.');
    setTimeout(function() {callback();}, 500);
}

//--------------------

function sayHello(sayGoodbye){ //call back이라고 굳이 안함
    setTimeout(()=>{
        console.log("안녕하세요"),
        sayGoodbye()//arrow함수로 매개변수로 sayGoodbye를 받아 return하는 console이다
    },2000) //2초 뒤에 보여주는 함수
}

sayHello(()=>console.log("안녕히가세요")) //안에 집어 넣는 녀석은 함수여야 된다! 그래서 arrow함수
//즉 이 의미는 sayHello라는 함수를 먼저 실행하고 그 다음 안에 console.log를 실행 하겠다는 의미


//다른 예제
function sayHello2(name,byeCallback){ //call back이라고 굳이 안함
    setTimeout(()=>{
        console.log(name+"님 안녕하세요22"),
        byeCallback()//arrow함수로 매개변수로 sayGoodbye를 받아 return하는 console이다
    },2000) //2초 뒤에 보여주는 함수
}

sayHello2("Mike", function(){
    console.log("안녕히 가세요!22")
}) //SayHello 비동기 함수가 끝났을 경우 이 안에 있는 녀석을 실행 하겠다!!

//동기 : 