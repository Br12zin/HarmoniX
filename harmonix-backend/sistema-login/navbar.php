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
            --primary-color: #4e73df;
            --secondary-color: #f8f9fc;
            --accent-color: #2e59d9;
            --text-color: #5a5c69;
        }
        
        body {
            background-color: #f8f9fc;
            color: var(--text-color);
            font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        
        .navbar {
            background: linear-gradient(135deg, #C7A315 0%, #C7A315 100%);
            box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
        }
        
        .navbar-brand {
            font-weight: 800;
            font-size: 1.2rem;
        }
        
        .nav-link {
            font-weight: 600;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            margin: 0 2px;
        }
        
        .nav-link:hover, .nav-link.active {
            background-color: rgba(255, 255, 255, 0.2);
        }
        
        .container {
            padding-top: 2rem;
        }
    </style>
</head>
<body>
    

<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center" href="<?php echo $_SESSION["url"]; ?>/">
            <i class="bi bi-speedometer2 me-2"></i>
            <span>Painel</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link <?php echo $pagina == "produtos" ? 'active' : ''; ?>"
                        href="<?php echo $_SESSION["url"]; ?>/produtos">
                        <i class="bi bi-gift me-1"></i> Produtos
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="<?php echo $_SESSION["url"]; ?>/encerrar-sessao.php">
                        <i class="bi bi-box-arrow-in-right me-2"></i> Sair
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</body>