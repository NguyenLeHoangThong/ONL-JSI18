// form đăng ký 

// + ô input email
// + dòng chữ báo lỗi email
// + ô input password
// + dòng chữ báo lỗi password
// + button đăng ký


import EmailInput from "./components/EmailInput.js"
import PasswordInput from "./components/PasswordInput.js"
import { SubmitButton } from "./components/SubmitButton.js"


const emailInput = new EmailInput("Hãy nhập email", "email")
emailInput.render()


const passwordInput = new PasswordInput("Nhập password của bạn", "password")
passwordInput.render()

const submitBtn = new SubmitButton("Đăng ký", "#FF0000")
submitBtn.render()
