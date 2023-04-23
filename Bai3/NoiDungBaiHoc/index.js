class HocSinh {
    constructor(nameInput, ageInput, dateOfBirthInput, avgScoreInput, hobbiesInput) {
        this.name = nameInput
        this.age = ageInput
        this.dateOfBirth = dateOfBirthInput
        this.avgScore = avgScoreInput
        this.hobbies = hobbiesInput
    }

    addHobbies(nameOfHobby) {
        this.hobbies.push(nameOfHobby)
    }

    addScore(x) {
        this.avgScore += x
    }
}

const phiVu = new HocSinh("Phi Vu", 30, "1/1/1990", 8.5, ["An", "Ngu"])


class HocSinhChuyenTinHoc extends HocSinh {
    constructor(nameInput, ageInput, dateOfBirthInput, avgScoreInput, hobbiesInput, itScoreInput) {
        // super là của Class, không phải của instance
        super(nameInput, ageInput, dateOfBirthInput, avgScoreInput, hobbiesInput)
        this.itScore = itScoreInput
    }
}

const quangHao = new HocSinhChuyenTinHoc("Quang Hao", 20, "1/2/1990", 9, ["An", "Ngu"], 10.0)


quangHao.addScore(5)


console.log(quangHao)


