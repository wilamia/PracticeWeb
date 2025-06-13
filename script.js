$(document).ready(function () {
    $("#employeeForm").validate({
        rules: {
            fullname: {
                required: true,
                minlength: 5
            },
            position: {
                required: true,
                minlength: 2
            },
            experience: {
                required: true,
                digits: true,
                min: 0,
                max: 60
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                phoneUS: false,
                minlength: 10
            }
        },
        messages: {
            fullname: {
                required: "Введите ФИО",
                minlength: "Минимум 5 символов"
            },
            position: {
                required: "Введите должность"
            },
            experience: {
                required: "Укажите стаж",
                digits: "Только числа",
                min: "Не может быть меньше 0",
                max: "Неверное значение"
            },
            email: {
                required: "Введите Email",
                email: "Некорректный Email"
            },
            phone: {
                required: "Введите телефон",
                minlength: "Минимум 10 цифр"
            }
        },
        submitHandler: function (form) {
            alert("Форма успешно отправлена!");
            form.reset();
        }
    });
});
