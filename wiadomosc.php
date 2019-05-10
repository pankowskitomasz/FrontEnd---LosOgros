<!DOCTYPE HTML>
<html lang="pl">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <!--[if lt IE 9]>
            <script type="text/javascript" src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script type="text/javascript" src="https://oss.maxcdn.com/respond/1.4.0/respond.min.js"></script>
        <![endif]-->
        <link rel="icon" href="img/favicon.png">
        <link type="text/css" rel="stylesheet" href="css/styles.min.css">
        <title>Los Ogros | Najlepsze burgery w mieście</title>
    </head>
    <body class="bg-black-red">
        <nav class="container-full-w navbar shadow bg-black">
            <a href="index.html" class="nav-logo">
                <img src="img/logo.svg" alt="logo">
            </a>
            <div class="menu menu-right">
                <div class="menu-min">
                    <button class="menu-button">
                        <img src="img/burger-icon.png" alt="burger icon">
                    </button>
                </div>
                <div class="menu-full">
                    <ul class="menu-content text-uppercase">
                        <li><a href="index.html#menu">Menu</a></li>
                        <li><a href="index.html#about">O nas</a></li>
                        <li><a href="index.html#join">Dołącz</a></li>
                        <li><a href="index.html#points">Punkty</a></li>
                        <li><a href="index.html#contact">Kontakt</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <section class="container-full-w text-white  d-flex">
            <div class="row d-flex my-auto">
                <div class="xs-col-6 float-none mx-auto">
                    <h3 class="font-f3 text-center">Potwierdzenie</h3>
                    <dl>
                        <dt class="font-f3">Imię</dt>
                        <dd class="font-f1 p-2">
                            <?php
                            if(isset($_POST['fname'])){
                                echo htmlspecialchars($_POST['fname']);
                            }
                            ?>
                        </dd>
                        <dt class="font-f3">Email</dt>
                        <dd class="font-f1 p-2">
                            <?php
                            if(isset($_POST['femail'])){
                                echo htmlspecialchars($_POST['femail']);
                            }
                            ?>
                        </dd>
                        <dt class="font-f3">Telefon</dt>
                        <dd class="font-f1 p-2">
                            <?php
                            if(isset($_POST['ftel'])){
                                echo htmlspecialchars($_POST['ftel']);
                            }
                            ?>
                        </dd>
                        <dt class="font-f3">Wiadomość</dt>
                        <dd class="font-f1 p-2">
                            <?php
                            if(isset($_POST['fmessage'])){
                                echo htmlspecialchars($_POST['fmessage']);
                            }
                            ?>
                        </dd>
                    </dl>
                </div>
            </div>
        </section>        
        <footer class="container-full-w text-white text-center pt-2">
            <div class="row">
                <ul class="list-inline icon-list">
                    <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><span class="fa fa-facebook-official"></span></a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><span class="fa fa-instagram"></span></a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><span class="fa fa-twitter"></span></a></li>
                </ul>
            </div>
            <div class="row">
                <p class="text-center text-uppercase font-f3">Copyright <span class="font-f1">&copy;</span> 2019</p>
            </div>
        </footer>
       <script src="js/main.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAh1xIfMS6UqeltTwp9dL-LtRcRb6J9ao8&callback=pointsMap"></script>
    </body>
</html>