let print = document.querySelector('.print');
let hiddenDiv = document.querySelector('.hiddenDiv');
let size = 0;

//подгон размеров textarea под содержимое
function Autosize(){
    str = localStorage.getItem('areaText');
    hiddenDiv.innerHTML = str.replace(new RegExp('\n', 'g'), '<br>');
	size = 200 + hiddenDiv.offsetHeight
    print.style.height = size + 'px';
}

//сохраняю в локалсторедж при любом изменении поля
print.oninput = function () {
    localStorage.setItem('areaText', print.value);
    Autosize();
}

print.onresize = function () {
    Autosize();
}

//функция по загрузке из localstorage
function onLoad () {
    print.value = localStorage.getItem('areaText');
    Autosize();
}

onLoad();
