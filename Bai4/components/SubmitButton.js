export class SubmitButton {
    constructor(text, backgroundColor) {
        this.text = text;
        this.backgroundColor = backgroundColor
    }

    render() {
        const buttonTag = document.createElement("button")
        buttonTag.innerText = this.text
        buttonTag.style.backgroundColor = this.backgroundColor

        buttonTag.onclick = () => {
            //B1
            const emailInput = document.getElementById("email")
            const passwordInput = document.getElementById("password")

            //B2
            const accounts = JSON.parse(localStorage.getItem("accounts"))

            if (accounts?.length > 0) { // B2.2
                accounts.push({
                    email: emailInput.value,
                    password: passwordInput.value
                })

                localStorage.setItem('accounts', JSON.stringify(accounts))
            }
            else { // B2.1
                localStorage.setItem('accounts', JSON.stringify([{
                    email: emailInput.value,
                    password: passwordInput.value
                }]))
            }
        }

        const container = document.getElementById("container")
        container.appendChild(buttonTag)
    }
}



// XỬ LÍ BUTTON SUBMIT
// B1: LẤY GIÁ TRỊ 2 FIELD: EMAIL + PASSWORD
// B2: LẤY RA TẤT CẢ ACCOUNTS ĐANG CÓ TRONG LOCAL STORAGE
    // B2.1: TRƯỜNG HỢP CHƯA CÓ ACCOUNT NÀO
    // B2.2: TRƯỜNG HỢP ĐÃ CÓ CÁC ACCOUNT TRƯỚC ĐÓ
