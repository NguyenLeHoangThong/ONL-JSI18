class PhanSo {
    constructor(tuSo, mauSo) {
        this.tuSo = tuSo
        this.mauSo = mauSo
    }

    phepNhan(phanSoCanNhan) {
        const tuSoSauKhiNhan = this.tuSo * phanSoCanNhan.tuSo
        const mauSoSoSauKhiNhan = this.mauSo * phanSoCanNhan.mauSo
        return `${tuSoSauKhiNhan} / ${mauSoSoSauKhiNhan}`
    }
}


const a = new PhanSo(3, 5)
const b = new PhanSo(4, 8)


console.log(a.phepNhan(b)) // =>  12 / 40