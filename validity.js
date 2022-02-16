export function testField(regExp, str) {
    return regExp.test(str);
}
let obj = {
    firstname: /^[А-Яа-яёЁйЙъЪьЬ]{2,10}$/,
    lastname: /^[А-Яа-яёЁйЙъЪьЬ]{2,}$/,
    city: /^[А-Яа-яёЁйЙъЪьЬ\.\-\s]$/,
    adress: /^[А-Яа-яёЁйЙъЪьЬ\s\-\.,0-9]{5,}$/,
    zip: /^[0-9]{6}$/, 
    email: /^[^\W_\d][a-z0-9-._]{1,20}@[a-z0-9]{1,10}\.[a-z]{2,10}$/,
    message: /.{5,}/
}
export function nameChangeHandler(e) {
    let label = e.target.previousElementSibling;
    let span = label.querySelector(".invalid_text");
    let regExp = obj[e.target.id];
    let isValid = testField(regExp, e.target.value);

    let button = e.target.closest("form").lastElementChild;

    console.log(isValid);
    if(!isValid) {
        span.textContent = "Поле заполнено неверно.";
        e.target.classList.add("invalid");
        button.disabled = true;
    } else {
        span.textContent = '';
        e.target.classList.remove("invalid");
        button.disabled = false;
    }
    
}
export function textareaHandler(e) {
    let label = e.target.previousElementSibling;
    let span = label.querySelector(".invalid_text");
    let regExp = obj.message;
    let isValid = testField(regExp, e.target.value);
    let button = e.target.closest("form").lastElementChild;

    if(!isValid) {
        span.textContent = "Поле заполнено неверно.";
        e.target.classList.add("invalid");
        button.disabled = true;
    } else {
        span.textContent = '';
        e.target.classList.remove("invalid");
        button.disabled = false;
    }
}