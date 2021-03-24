


// let reg1=/^[A-ZА-Я][a-zа-я]+$/;
// let reg2=/^(\d{4})\-(0\d|1[012])\-([0-2]\d|3[01])$/;
// let reg3=/[0-9]/;
// let reg4=/^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/;
// let reg5=/^(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

// let name = document.querySelector('#name');
// let surname = document.querySelector('#surname');
// let number = document.querySelector('#number');
// let password = document.querySelector('#password');
// let password2 = document.querySelector('#password2');
// let email = document.querySelector('#email');
// let span1 = document.querySelector('.span1');
// let date = document.querySelector('#date');
// let span2 = document.querySelector('.span2');
// let span3 = document.querySelector('.span3');
// let span4 = document.querySelector('.span4');
// let span5 = document.querySelector('.span5');
// let span6 = document.querySelector('.span6');
// let span7 = document.querySelector('.span7');

// Эта штука срабатывает после того как страницу загрузилась
// Тут навешиваем функции валидации на все формы с классом .needs-validation
document.addEventListener('DOMContentLoaded', function () {
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
});

// document.querySelector('.btn1').onclick = function (e) {


    // e.preventDefault();
    // if(!reg4.test(email.value)){
    //     notValidate(email, span1, 'enter email correctly')
    //  }else {
    //      valid(email,span1,'');
    //  }
    // if(!reg1.test(name.value)){
    //    notValidate(name, span2, 'enter the name correctly')
    // }else {
    //     valid(name,span2,'');
    // }
    // if(!reg1.test(surname.value)){
    //     notValidate(surname, span3, 'enter the surname correctly')
    // }else {
    //      valid(surname,span3,'');
    // }
    // if(!reg2.test(date.value)){
    //     notValidate(date, span4, 'enter date correctly ')
    // }else {
    //      valid(date,span4,'');
    // } 
    // if(!reg3.test(number.value)){
    //    notValidate(number, span5, 'enter number correctly')
    // }else {
    //     valid(number,span5,'');
    // }  
    // if(!reg5.test(password.value)){
    //     notValidate(password, span6,  'enter password correctly')
    //  }else {
    //      valid(password,span6,'');
    //  }
    //  if(password.value !=password2.value){
    //     alert('пароли не совпадают');
    //  }


// }



// function validate(regex, inp){
//     return regex.test(inp);
// }

// function notValidate(inp, el, mess){
//     inp.classList.add('is-invalid');
//     el.innerHTML = mess;
// }


// function valid(inp, el, mess){
//     inp.classList.remove('is-invalid');
//     inp.classList.add('is-invalid');
//     el.innerHTML = mess;
// }