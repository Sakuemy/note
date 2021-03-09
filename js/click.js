let tem_button = document.querySelector('.tem_button');
let body = document.querySelector('body');

function infoclick() {
    alert("Этот сайт предназначен для создания быстрых заметок. Все данные хранятся на Вашем компьютере и при очистке кэша браузера удаляются. \n\nСайт создан на коленке в 2021 году");
}

function donationclick() {
    alert("WebMoney кошелек для пожертвования разработчику: Z327592589895.");
}

function tem() {
    if (tem_button.textContent == 'Светлая тема'){
        tem_button.textContent = 'Тёмная тема';
        body.classList.remove('dark_theme');
        body.classList.add('light_theme');
        localStorage.setItem('tem', '0');
    } else {
        tem_button.textContent = 'Светлая тема';
        body.classList.remove('light_theme');
        body.classList.add('dark_theme');
        localStorage.setItem('tem', '1');
    }
}

function clr() {
    if (print.value == ''){
        alert("Поле ввода пустое!");
    }else{
        if (confirm('Вы уверены что хотите очистить содержимое экрана? \nДанные будут удалены и из локального хранилища. \nДля подтверждения нажмите \"OK\", а для отмены \"Отмена\".')) {
            print.value = '';
            localStorage.setItem('areaText', print.value);
            Autosize();
        }
    }
}

switch(localStorage.getItem('tem')) {

    case '1':
        tem_button.textContent = 'Тёмная тема';
        tem();
        break;

    default:
        tem_button.textContent = 'Светлая тема';
        tem();
        break;
}
