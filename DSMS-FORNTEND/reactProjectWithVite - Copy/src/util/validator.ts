const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;  //Rashmi Sharmila
const usernameRegex = /^[a-z0-9]+$/i; //rashi123
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //rsrashi0430@gmail.com
const passwordReg = /^[a-zA-Z0-9]{8}$/; //rashi123
const phoneNumberReg = /^(0[0-9]{9}|2[0-9]{9}|3[0-8][0-9]{8}|4[1|5|7][0-9]{8}|5[1|2|4|5|7][0-9]{8}|6[3|5-7][0-9]{8}|8[0-9]{9}|9[1][0-9]{8})$/; //077474542401 / 0382230632 should be includ 10 numbers


export function validatefname(name: string): boolean {
    return nameRegex.test(name)
}

export function validateUsername(username: string): boolean {
    return usernameRegex.test(username)
}

export function validateEmail(email: string): boolean {
    return emailRegex.test(email)
}

export function validatePassword(password: string): boolean {
    return passwordReg.test(password)
}

export function validatephonenumber(phonenumber: string): boolean {
    return phoneNumberReg.test(phonenumber)
}