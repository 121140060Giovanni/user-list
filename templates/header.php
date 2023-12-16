<!DOCTYPE html>
<html lang="en" data-bs-theme="light">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User List</title>
    <link rel="stylesheet" href="assets/css/style.css" />
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/fontawesome/css/fontawesome.css" rel="stylesheet" />
    <link href="assets/css/style.css" rel="stylesheet" />
    <link href="assets/fontawesome/css/brands.css" rel="stylesheet" />
    <link href="assets/fontawesome/css/solid.css" rel="stylesheet" />
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/jquery-validation/jquery.validate.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/script.js"></script>

</head>

<body>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow px-5 py-3 bg-opacity-50 dark-mode" id="mainNav">
        <div class="container">
            <a class="navbar-brand font-weight-bold page-scroll" href=".">
                <i class="fa-solid fa-users fa-2xl"></i>
                User List
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- made that navbar in right -->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav flex-row ml-auto float-end gap-2 mt-2">
                    <?php if (isset($_SESSION['username'])) : ?>
                        <li class="nav-item d-flex align-items-center me-4">
                            <a>Halo, <?= $_SESSION['username'] ?></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="logout.php">Logout</a>
                        </li>
                    <?php else : ?>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="login.php">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="register.php">Register</a>
                        </li>
                    <?php endif ?>
                    <li class="nav-item mx-4" style="border-right: 1px solid #c0b8b8"></li>
                    <li class="nav-item mx-2">
                        <i class="fa-solid fa-sun"></i>
                    </li>
                    <li class="nav-item form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="darkModeSwitch" />
                    </li>
                    <li class="nav-item">
                        <i class="fa-solid fa-moon"></i>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="m-0 g-0 p-0">