//Mebel

let listScript=[
    'canvas',
];

// Подключение скриптов
for (let name of listScript) {
    let script=document.createElement('script');
    script.type='application/javascript';
    script.src='js/'+name+'.js';
    document.body.appendChild(script);
}