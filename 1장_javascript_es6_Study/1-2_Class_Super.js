class Animal{   //상속! (밑에 Lion 보고 오세요!!)
    constructor(leg){ //초기값들 파이썬에서는 def __init__(self):
        this.leg = leg
    }

    printAnimal(){
        console.log(this.name+"은 "+String(this.leg)+"개 만큼의 다리를 가지고 있습니다!")
    }

}

class Lion{ //Class (이거부터 보세요!!!)
    constructor(name){ //초기값들 파이썬에서는 def __init__(self):
        this.name = name
    }

    getName(){  
        console.log("내 이름은 "+this.name)
    }

}

class Tiger extends Animal{ // 상속 받기!!
    constructor(name, leg){ //초기값들 파이썬에서는 def __init__(self):
        super(leg) //부모의 constructor의 input이다!! 이거 leg 인수는 super class constructor의 인수랑 같아야됨 constructor(leg){this.leg = leg}
        this.name = name
        //무조건 super를 써야됨다!!!!!!!!!!!!!!!!!!!!!!!! 가장 중요!!
    }

    getName(){  
        console.log("내 이름은 "+this.name)
    }
}

myLion = new Lion("King") //객체를 설정! 인수를 통해서 constructor로 전달!
myLion.getName()

myTiger = new Tiger("Chang", 4)
myTiger.getName()
myTiger.printAnimal()

//Constructor
//Super