class EmailInput {
    constructor(placeholderText, id) {
        this.placeholderText = placeholderText
        this.id = id
    }

    render() {
        const inputTag = document.createElement('input')
        inputTag.type = "text"
        inputTag.placeholder = this.placeholderText
        inputTag.setAttribute("id", this.id)

        const container = document.getElementById("container")
        container.appendChild(inputTag)
    }

    getValue() {
        const inputTag = document.getElementById(this.id)
        return inputTag.value
    }
}

export default EmailInput