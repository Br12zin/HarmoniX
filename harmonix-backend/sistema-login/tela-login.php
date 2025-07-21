<?php
session_start();
// VERIFICA SE HÁ COOKIE DE NAVEGAÇÃO DOS ACESSOS
if (
    isset($_COOKIE["email"]) &&
    isset($_COOKIE["password"]) &&
    isset($_COOKIE["remember"])
) {
    $email = $_COOKIE["email"];
    $password = $_COOKIE["password"];
    $remember = "checked";
} else {
    $email = "";
    $password = "";
    $remember = "";
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - HarmoniX</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <style>
        :root {
            --primary-color: #C7A315;
            --secondary-color: #ececec;
            --text-color: #5a5c69;
        }

        body {
            background-color: #f8f9fa;
            color: var(--text-color);
            font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            height: 100vh;
            display: flex;
            align-items: center;
        }

        .login-container {
            max-width: 400px;
            width: 100%;
            padding: 2rem;
            background: white;
            border-radius: 15px;
            box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
            margin: 0 auto;
        }

        .login-logo {
            text-align: center;
            margin-bottom: 1.5rem;
        }

        .login-logo img {
            max-width: 80px;
        }

        .login-title {
            text-align: center;
            margin-bottom: 1.5rem;
            font-weight: 600;
            color: var(--primary-color);
        }

        .form-control:focus {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 0.25rem rgba(199, 163, 21, 0.25);
        }

        .btn-primary {
            background-color: var(--primary-color);
            border-color: var(--primary-color);
        }

        .btn-primary:hover {
            background-color: #b59412;
            border-color: #b59412;
        }

        .form-check-input:checked {
            background-color: var(--primary-color);
            border-color: var(--primary-color);
        }

        .remember-me {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .forgot-password {
            color: var(--primary-color);
            text-decoration: none;
        }

        .forgot-password:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>


    <div class="container">

        <div class="login-container">

            <div class="login-logo">
                <img src="./imagens/logo-gold.png" alt="HarmoniX Logo">
            </div>

            <h2 class="login-title">Login HarmoniX</h2>
            <?php
            include "mensagens.php";
            ?>
            <form method="post" action="validar-login.php">
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input value="<?php echo $email; ?>" type="email" class="form-control" id="email" name="email" placeholder="Enter email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input value="<?php echo $password; ?>" type="password" class="form-control" id="password" name="password" placeholder="Password">
                </div>
                <div class="mb-3 remember-me">
                    <div class="form-check">
                        <input <?php echo $remember; ?> type="checkbox" class="form-check-input" id="remember" name="remember">
                        <label class="form-check-label" for="remember">Remember me</label>
                    </div>

                </div>

                <button type="submit" class="btn btn-primary w-100 py-2">
                    <i class="bi bi-box-arrow-in-right me-2"></i>Login
                </button>
            </form>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>