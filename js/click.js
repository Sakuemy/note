let tem_button = document.querySelector('.tem_button');
let body = document.querySelector('body');
let dropbtn = document.querySelector('.dropbtn');
let dropdown_content = document.querySelector('.dropdown-content');

function infoclick() {
    alert("Этот сайт предназначен для создания быстрых заметок. Все данные хранятся на Вашем компьютере и при очистке кэша браузера удаляются. \n\nСайт создан на коленке в 2021 году");
}

function donationclick() {
    alert("WebMoney кошелек для пожертвования разработчику: Z327592589895.");
}

function tem() {
    if (tem_button.textContent == 'Светлая тема'){
        tem_button.textContent = 'Тёмная тема';
        body.style.backgroundColor = '#e2e2e2';
        print.style.backgroundColor = '#ffffff';
        print.style.color = '#000000';
        dropbtn.style.backgroundColor = 'rgb(175 175 175)';
        dropdown_content.style.backgroundColor = '#afafaf';
        localStorage.setItem('tem', '0');
    } else {
        tem_button.textContent = 'Светлая тема';
        body.style.backgroundColor = '#252526';
        print.style.backgroundColor = '#1e1e1e';
        print.style.color = '#adadad';
        dropbtn.style.backgroundColor = 'rgb(105 105 105)';
        dropdown_content.style.backgroundColor = '#6b6968';
        localStorage.setItem('tem', '1');
    }
}

function tem_stor() {
    if (localStorage.getItem('tem') == '0'){
        tem_button.textContent = 'Тёмная тема';
        body.style.backgroundColor = '#e2e2e2';
        print.style.backgroundColor = '#ffffff';
        print.style.color = '#000000';
        dropbtn.style.backgroundColor = 'rgb(175 175 175)';
        dropdown_content.style.backgroundColor = '#afafaf';
    } else {
        tem_button.textContent = 'Светлая тема';
        body.style.backgroundColor = '#252526';
        print.style.backgroundColor = '#1e1e1e';
        print.style.color = '#adadad';
        dropbtn.style.backgroundColor = 'rgb(105 105 105)';
        dropdown_content.style.backgroundColor = '#6b6968';
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

tem_stor();