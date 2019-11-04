function plusTwo(s){  //1. 기존 기본함수
    return s+2
}     
console.log(plusTwo(10))

pulsTwo = (s) => { //1. 기본 () => {} / () =>
    return s+2
}

console.log(plusTwo(10))

pulsTwo = (s) => s+2 //1. 파격적으로 바꾼 Arrow함수
pulsTwo = s => s+2 //1. 매개 변수가 하나면 소괄호 하나 없앨 수 있음!

console.log(plusTwo(10))


//2. 입력이 하나일때 {} / =>

//---------------------------------------------------------------

//Map, Filter 기능! 배열(리스트)를 조작하기 위해서!
arr = [1,2,3,4,5,6,7,8,9,13,4213,23123,334]

//Map
arr_map = arr.map(function(value){return value*2}) //원래는 이렇게 function을 해야됬음!
//배열(리스트)의 값을 추가적으로 더함! 혹은 조작함!! 이런식! value는 배열의 값인듯!
arr_map = arr.map(function(v){return v*2}) //굳이 value라고 적을 필요 없음!!
console.log(arr_map)

arr_map = arr.map(v => {return v + 2})//조금더 간단히 Arrow function으로 1단계 축약
console.log(arr_map)

arr_map = arr.map(v => v + 2) //더욱 더 간단히!
console.log(arr_map)

//-----------------

//Filter
arr_filter = arr.filter(v => v > 10) //10보다 큰녀석들 뽑아내고 싶어!
console.log(arr_filter)

