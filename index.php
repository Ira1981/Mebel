<?php #Mebel

    error_reporting(E_ALL);
    //setcookie('name', 'Sergey', time()+24*60*60);
    session_start();

    //Название, логотип, краткое описание
    require_once('php/header.php');

    //Описание с инфографикой
    require_once('php/intro.php');

    //Форма заказа (с рисовалкой)
    require_once('php/order.php');

    //Примеры работ
    require_once('php/examples.php');

    //Варианты выбора
    require_once('php/choice.php');

    //Частые вопросы
    require_once('php/faq.php');

    //Отзывы клиентов
    require_once('php/recall.php');

    //Подвал и подключение скриптов
    require_once('php/footer.php');

?>