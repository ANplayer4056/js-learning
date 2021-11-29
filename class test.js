
// class 的基本操作
// class 名稱通常以大寫開頭
class Card {

    // 構造函數
    constructor(initName) {
        this.name = initName;
    }

    // 宣告 class 的 function
    hello() {
        console.log(`hello ${this.name}`)
    }
}

// 使用 class 的方式 ===> new
const user1 = new Card("andy");
console.log(user1.name)
user1.hello();



class Car {
    constructor(initName) {
        this.name = initName
    }

    start() {
        console.log("車子啟動")
    }
}

// 繼承 extends
class Porshi extends Car {
    constructor(namePorshi) {

        // super 調用父層的 constructor
        super(namePorshi)
    }

    start2() {
        // 透過 super 調用父層的 function
        super.start()
        console.log("車子排氣")
    }

    // 相同的命名，所以會蓋過繼承父層的，但是又透過 super 同時又保留了父層的東西
    start(){
        super.start()
        console.log("andy 的保時捷啟動");
    }
}
const p1 = new Porshi("andy 的保時捷");
p1.start()
p1.start2()
console.log("name ===>", p1.name)