import { encryptPassword , decryptPassword} from "./string.js";
import { lowercaseLetters } from "./characterSets.js";

const errorEncrypt = document.querySelector(".form-encrypt .form-error")
const errorDecrypt = document.querySelector(".form-decrypt .form-error")

const listForm = document.querySelectorAll(".form-item input");

const renderErrorEncrypt = (error, status) => {
  errorEncrypt.classList.remove("form-error--danger")
  errorEncrypt.classList.remove("form-error--success")

  errorEncrypt.innerText = error;
  errorEncrypt.classList.add(`form-error--${status}`)
}

const renderErrorDecrypt = (error, status) => {
  errorDecrypt.classList.remove("form-error--danger")
  errorDecrypt.classList.remove("form-error--success")

  errorDecrypt.innerText = error;
  errorDecrypt.classList.add(`form-error--${status}`)
}
const handleEncrypt = (value) => {
  if (!value) {
    renderErrorEncrypt("Báo lỗi : Trường này không được trống", "danger")
    return;
  }

  if (value.indexOf("*") !== -1) {
    renderErrorEncrypt("Báo lỗi : Trường này không được bỏ kí tự *", "danger")
    return;
  }

  const arrStr = value.split("");
  const stringFilter = arrStr.filter((i) => lowercaseLetters.some(j => j === i.toLocaleLowerCase())).join("");
  if (stringFilter.length < 4) {
    renderErrorEncrypt("Báo lỗi : Trường này bạn phải nhập ít nhất 4 cái chữ", "danger")
    return;
  }

  renderErrorEncrypt(`Mật khẩu mạnh mẽ là : ${encryptPassword(value)}`, "success")
}

const handleDecrypt = (value) => {
  if (!value) {
    renderErrorDecrypt("Báo lỗi : Trường này không được trống", "danger")
    return;
  }

  if (value.indexOf("*") === -1) {
    renderErrorDecrypt("Báo lỗi : Mật khẩu bạn nhập không chính xác", "danger")
    return;
  }

  if(!decryptPassword(value)) {
    renderErrorDecrypt("Báo lỗi : Mật khẩu bạn nhập không chính xác", "danger")
    return;
  }

  renderErrorDecrypt(`Mật khẩu giải mã : ${decryptPassword(value)}`, "success")
}

listForm.forEach((item) => {
  item.addEventListener("keyup", function (e) {
    const { value, name } = e.target;

    if (name === "encrypt") {
      handleEncrypt(value);
      return;
    }
    handleDecrypt(value);
  })
})