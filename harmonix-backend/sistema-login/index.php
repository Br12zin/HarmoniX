<?php
include "verificar-autenticacao.php";
$pagina = "home";
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel Administrativo HarmoniX</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <style>
        :root {
            --primary-color: #ececec;
            --secondary-color: #ececec;
            --accent-color: #ececec;
            --text-color: #5a5c69;
        }

        body {
            background-color: #ececec;
            color: var(--text-color);
            font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .dashboard-card {
            border: none;
            border-radius: 15px;
            box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            overflow: hidden;
        }

        .dashboard-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0.5rem 1.5rem 0 rgba(58, 59, 69, 0.2);
        }

        .card-icon {
            font-size: 2.5rem;
            color: #C7A315;
            margin-bottom: 1rem;
        }

        .card-title {
            font-weight: 600;
            color: var(--primary-color);
        }

        .card-footer {
            background: transparent;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
        }



        .container {
            padding-top: 2rem;
        }

        .count-badge {
            background-color: #C7A315;
            color: white;
            border-radius: 50px;
            padding: 3px 10px;
            font-size: 0.8rem;
            margin-left: 5px;
        }
    </style>
</head>

<body>
    <?php
    include "mensagens.php";
    include "navbar.php";
    ?>

    <!-- Conteúdo principal -->
    <div class="container mt-4">
        <img src="./imagens/logo-gold.png" alt="Logo-gold.png" class="img-fluid mx-auto d-block mb-4" style="max-width: 80px;">
        <h2 class="mb-4 text-center">Bem-vindo ao Painel Administrativo HarmoniX</h2>

        <div class="row justify-content-center g-4">
            <div class="col-md-4 mb-4">
                <div class="card h-100 dashboard-card">
                    <div class="card-body text-center p-4">
                        <div class="card-icon">
                            <i class="bi bi-gift"></i>
                        </div>
                        <h5 class="card-title mt-2">
                            Produtos
                            <span class="count-badge">
                                <?php
                                require('./requests/produtos/get.php');
                                echo isset($response['data']) ? count($response['data']) : 0;
                                ?>
                            </span>
                        </h5>
                        <p class="card-text text-muted">Gerencie seus produtos e estoque</p>
                    </div>
                    <div class="card-footer text-center bg-transparent">
                        <a href="<?php echo $_SESSION["url"]; ?>/produtos"
                            class="btn btn-primary"
                            style="background-color: #C7A315; border-color: #C7A315;"
                            onmouseover="this.style.filter='brightness(85%)'"
                            onmouseout="this.style.filter='brightness(100%)'">
                            <i class="bi bi-box-arrow-in-right me-2"></i>Acessar
                        </a>
                    </div>
                </div>
            </div>
            <!-- Você pode adicionar mais cards aqui conforme necessário -->
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>