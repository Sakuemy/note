let print = document.querySelector('.print');

//сохраняю в локалсторедж при любом изменении поля
print.oninput = function () {
    localStorage.setItem('areaText', print.value);
}

//функция по загрузке из localstorage
function onLoad () {
    print.value = localStorage.getItem('areaText');
}

onLoad();