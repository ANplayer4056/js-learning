
// 1.import export 需要使用 { } 包住
//  也可以透過 as 給別名 ==> import { data as abc } from "./modules test.js"  ===> console.log(abc)
// import { data } from "./modules test.js"

// 2.import export default 直接寫變數名稱就好了
// import sayhi from "./modules test.js"

// 情境1
// console.log(data)

// 情境2
// sayhi()


// 3.類似整包引入的概念
import * as service from "./modules test.js"

service.default()
console.log(service.data)