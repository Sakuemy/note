let print = document.querySelector('.print');
let hiddenDiv = document.querySelector('.hiddenDiv');

//подгон размеров textarea под содержимое
function Autosize(){
    str = localStorage.getItem('areaText');
    hiddenDiv.innerHTML = str.replace(new RegExp('\n', 'g'), '<br>');
    print.style.height = hiddenDiv.offsetHeight + 'px';
}

//сохраняю в локалсторедж при любом изменении поля
print.oninput = function () {
    localStorage.setItem('areaText', print.value);
    Autosize();
}

//функция по загрузке из localstorage
function onLoad () {
    print.value = localStorage.getItem('areaText');
    Autosize();
}

onLoad();
