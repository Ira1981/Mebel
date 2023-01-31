<?php #Mebel ?>

<section class='container order'>
    <div class='inserted'>
        <h2>
            Форма <span class='special'>заказа</span>
        </h2>
        <div class="Toolbar">
            - Цвет -<br>
            <img id="redPen" src="http://professorweb.ru/downloads/pen_red.gif" alt="Красная кисть" onclick="changeColor('rgb(212,21,29)', this)">
            <img id="greenPen" src="http://professorweb.ru/downloads/pen_green.gif" alt="Зеленая кисть" onclick="changeColor('rgb(131,190,61)', this)"> 
            <img id="bluePen" src="http://professorweb.ru/downloads/pen_blue.gif" alt="Синяя кисть" onclick="changeColor('rgb(0,86,166)', this)">
        </div>
        <div class="Toolbar">
            - Толщина -<br>
            <img src="http://professorweb.ru/downloads/pen_thin.gif" alt="Тонкая кисть" onclick="changeThickness(1, this)">
            <img src="http://professorweb.ru/downloads/pen_medium.gif" alt="Нормальная кисть" onclick="changeThickness(5, this)"> 
            <img src="http://professorweb.ru/downloads/pen_thick.gif" alt="Толстая кисть" onclick="changeThickness(10, this)">
        </div>
        <div class="CanvasContainer">
            <canvas id="drawingCanvas" width="500" height="300"></canvas>
        </div>
        <div class="Toolbar">
            - Операции-<br>
            <button onclick="saveCanvas()">Сохранить содержимое Canvas</button>
            <button onclick="clearCanvas()">Очистить Canvas</button>
            <div id="savedCopyContainer">
            <img id="savedImageCopy"><br>
            Щелкните правой кнопкой мыши для сохранения ...
            </div>
        </div>
        <p>
            <i class="fa fa-pencil" aria-hidden="true"></i>
            <i class="fa fa-eraser" aria-hidden="true"></i>
        </p>
        <p><a href="#" class='button'>Оформить заказ</a></p>
    </div>
</section>