// Nếu file export không có chữ default thì các 
// biến phải bỏ vào dấu ngoặc

// import { number, number2 } from "./components/inputEmail.js"

// console.log(number)
// console.log(number2)


// form đăng ký 

// + ô input email
// + dòng chữ báo lỗi email
// + ô input password
// + dòng chữ báo lỗi password
// + button xác nhận
// + button đăng nhập



import EmailInput from "./components/EmailInput.js"
import PasswordInput from "./components/PasswordInput.js"


const emailInput = new EmailInput("Email hoặc số điện thoại", "inputEmail")
emailInput.render()


const passwordInput = new PasswordInput("Nhập password của bạn", "testblalba")
passwordInput.render()

document.getElementById("testBtn").onclick = () => {
    console.log(passwordInput.getValue())
}
