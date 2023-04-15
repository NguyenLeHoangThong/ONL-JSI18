// array / object

// ES6 JS - Spread


// const car1 = {
//     name: "VF8",
//     brand: "Vinfast",
//     price: 500
// }

// const car2 = {
//     ...car1,
//     color: "Blue"
// }

// car1.name = "VF7"

// console.log(car1.color)


// const cars = ["vision", "wave", "vin", "bwm", "mercedes"]

// const cars1 = [...cars, "audi"]

// cars[0] = "yamaha"

// console.log(cars1)


// arrow function - ES6

// function congHaiSo(a,b) {
//     return a + b
// }

// const nhanHaiSo = (a,b) => ({
//     name: "Thong",
//     age: 10
// })


// console.log(nhanHaiSo(4, 4))

// **

// const cars = ["vision", "wave", "vin", "bwm", "mercedes"]

// const numbers1 = [5,3,4,7,6,3,3]
// // cars.forEach((item, index) => {
// //     console.log("Xe: ", item)
// //     item = item + "50"
// // })


// const cars2 = cars.map((item, index) => {
//     return item + "50"
// })


// const numbers2 = numbers1.map((item, index) => {
//     return item ** 3
// })

// console.log(numbers1)

// console.log(numbers2)

// Giong nhau: đều duyệt qua mảng
// Khác nhau: 
// + forEach: ảnh hưởng trực tiếp đến mảng gốc
// + map: tạo ra mảng mới


// const students = [
//     {
//         name: "Dũ",
//         age: 14,
//         class: 8
//     },
//     {
//         name: "Thông",
//         age: 18,
//         class: 12
//     },
//     {
//         name: "Bảo",
//         age: 16,
//         class: 10
//     },
//     {
//         name: "Hào",
//         age: 15,
//         class: 9
//     }
// ]

// const hocSinhLenLop = students.map((item) => {
//     return {
//         ...item,
//         age: item.age + 1,
//         class: item.class + 1
//     }
// })

// console.log(students)
// console.log(hocSinhLenLop)


//const numbers1 = [5,3,4,7,9,3,3]


// numbers1.sort()


// const result = numbers1.find((item) => {
//     return item > 6
// })

// console.log(result)


// const soBeHon5 = tatCaSanPham.filter((item, index) => {
//     return item < 5
// })

// console.log(soBeHon5)


// B1 gán total = pt đầu tiên
// B2 gán item = pt thứ 2
// sau khi tính toán chỗ return => gán ngược lại vào total
// cuối cùng => trả ra total

// const tinhHieu = numbers1.reduce((total, item) => {
//     return total - item
// })

// console.log(tinhHieu)

// const students = [
//     {
//         name: "Dũ",
//         age: 14,
//         class: 8
//     },
//     {
//         name: "Thông",
//         age: 18,
//         class: 12
//     },
//     {
//         name: "Bảo",
//         age: 16,
//         class: 10
//     },
//     {
//         name: "Hào",
//         age: 15,
//         class: 9
//     }
// ]


// total = 
// {
//         name: "Dũ",
//         age: 14,
//         class: 8
//     },


// item = {
//     name: "Thông",
//     age: 18,
//     class: 12
// },


// total = 22


// 22.age

// const tongTuoi = students.reduce((total, item) => {
//     if (typeof total === "object") {
//         return total.age + item.age
//     }
//     else{
//         return total + item.age 
//     }
// })

// console.log(tongTuoi)