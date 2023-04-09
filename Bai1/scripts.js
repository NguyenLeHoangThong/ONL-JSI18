// Muốn mở comment trong Visual Studio Code: Ctrl + K + U


/********************************************************************************************************************/
// ôn tập object / array

// const human = {
//     name: "Thong",
//     age: 16
// }

// const car = {
//     brand: "Yamaha",
//     price: 500
// }

//const cars = ["BWM", "Honda", "Mercedes"]

// // loops - vòng lặp: thực hiện một số công việc nào đó nhiều lần
// for (let i = 0; i < 10; i++) { // dùng for
//     console.log("Hello") // 0 -> 9
// }

// cars.forEach((item) => { // dùng hàm forEach của JS
//     console.log(`${item}: 10000`)
// })

// // Ví dụ về 1 mảng lưu các giá trị là object
// const students = [
//     {
//         name: "Hung",
//         age: 16,
//         hobbies: ["Bong ro", "Workout", "Gaming"]
//     },
//     {
//         name: "Anh",
//         age: 17,
//         hobbies: ["Workout", "Bong da"]
//     }
// ]

/********************************************************************************************************************/
// function
// gọn code 
// dễ hiểu

// function add(a, b) {
//     let result = a + b // 14
//     return result //14
// }

// console.log("add: ", add(5, 9))

/********************************************************************************************************************/
// Sản phẩm quần áo: tên, giá, số lượng
// Viết một hàm, hàm này nhận vào (input) 1 mảng chứa các sản phẩm quần áo => (return) mảng sản phẩm đó, giá của mỗi sản phẩm + 10% thuế
// In mảng mà hàm trả ra ra màn hình


// // Giải bài tập trên:
// const products = [
//     {
//         name: "Hung",
//         age: 16,
//     },
//     {
//         name: "Anh",
//         age: 17,
//     },
//     {
//         name: "Anh",
//         age: 17,
//     }
// ]

// function addPriceProduct(sp) {
//     sp.forEach((item) => {
//         item.age = item.age + item.age * 10/100 
//     })

//     return sp
// }

// console.log("addPriceProduct(products): ", addPriceProduct(products))

/********************************************************************************************************************/
// JSON.stringify => chuyển 1 object / 1 dữ liệu của code JS => JSON
// JSON.parse => Ngược lại

// localStorage.setItem("products", JSON.stringify(products));
// console.log("localStorage.getItem: ", JSON.parse(localStorage.getItem("products")))

/********************************************************************************************************************/
// API
// https://jsonplaceholder.typicode.com/

// // CALL API CƠ BẢN VỚI SERVER Ở TRÊN, CÁC BẠN NHẤN VÀO LINK Ở TRÊN VÀ ĐỌC DOCUMENT CỦA LINK ĐẤY THÌ MỚI BIẾT ĐƯỢC CÁCH LẤY URL NHÉ
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((results) => results.json())
//     .then((finalResults) => console.log("finalResults: ", finalResults))
//     .catch((error) => console.log("Error: ",))