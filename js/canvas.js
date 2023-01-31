//Создаем канвас, привязываем события
var canvas;
var ctx;
window.onload = function() {
      canvas = document.getElementById("drawingCanvas");
      ctx = canvas.getContext("2d");
      canvas.onmousedown = startDrawing;
      canvas.onmouseup = stopDrawing;
      canvas.onmouseout = stopDrawing;
      canvas.onmousemove = draw;
}

//Смена цвета
var previousColorElement;
function changeColor(color, imgElement) {
	ctx.strokeStyle = color; //меняем текущий цвет рисования
	imgElement.className = "Selected"; //меняем стиль элемента <img>, по которому щелкнули
	if (previousColorElement != null) //возвращаем ранее выбранный элемент <img> в нормальное состояние
	   previousColorElement.className = "";
	previousColorElement = imgElement;
}

//Отслеживаем элемент <img> для толщины линии, по которому ранее щелкнули
var previousThicknessElement;
function changeThickness (thickness, imgElement) {
	ctx.lineWidth = thickness; //изменяем текущую толщину линии
	imgElement.className = "Selected"; //меняем стиль элемента <img>, по которому щелкнули
	if (previousThicknessElement != null) //возвращаем выбранный элемент <img> в нормальное состояние
	   previousThicknessElement.className = "";
	previousThicknessElement = imgElement;
}

//Начинаем рисовать
function startDrawing(e) {
	isDrawing = true;
	ctx.beginPath();
	ctx.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

//Рисование линии
function draw(e) {
	if (isDrawing) {
		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}

//Перенос пера
function stopDrawing() {
    isDrawing = false;	
}

//Очистка экрана
function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

//Сохранение рисунка
var url = canvas.toDataURL("image/jpeg");
window.location = canvas.toDataURL();
function saveCanvas() {
	var imageCopy = document.getElementById("savedImageCopy"); //находим элемент <img>
	imageCopy.src = canvas.toDataURL(); //отображаем данные холста в элементе <img>
	var imageContainer = document.getElementById("savedCopyContainer"); //отображаем <div>, делая изображение видимым
    imageContainer.style.display = "block";
}