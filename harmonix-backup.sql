-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: mysql:3306
-- Tempo de geração: 24/07/2025 às 03:40
-- Versão do servidor: 9.3.0
-- Versão do PHP: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `harmonix`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `carrinho`
--

CREATE TABLE `carrinho` (
  `id_carrinho` int NOT NULL,
  `cliente_id` varchar(255) DEFAULT NULL,
  `id_produto` int DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `carrinho`
--

INSERT INTO `carrinho` (`id_carrinho`, `cliente_id`, `id_produto`, `quantidade`, `created_at`, `updated_at`) VALUES
(20, '7', 61, 1, '2025-07-24 00:14:42', '2025-07-24 00:14:42'),
(22, '8', 64, 3, '2025-07-24 02:27:12', '2025-07-24 02:48:51'),
(24, '8', 60, 1, '2025-07-24 03:37:23', '2025-07-24 03:37:23');

-- --------------------------------------------------------

--
-- Estrutura para tabela `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `categoria`, `created_at`, `updated_at`) VALUES
(1, 'Violão', '2025-05-26 17:23:32', '2025-05-26 17:23:32'),
(2, 'Guitarra', '2025-05-26 17:23:32', '2025-05-26 17:23:32'),
(3, 'Baixo', '2025-05-26 17:23:32', '2025-05-26 17:23:32'),
(4, 'Teclado', '2025-05-26 17:23:32', '2025-05-26 17:23:32'),
(5, 'Bateria', '2025-05-26 17:23:32', '2025-05-26 17:23:32'),
(6, 'Saxofone', '2025-05-26 17:23:32', '2025-05-26 17:23:32'),
(7, 'Trompete', '2025-05-26 17:23:32', '2025-05-26 17:23:32'),
(8, 'Flauta', '2025-05-26 17:23:32', '2025-05-26 17:23:32'),
(9, 'Clarinete', '2025-05-26 17:23:32', '2025-05-26 17:23:32'),
(10, 'Trombone', '2025-05-26 17:23:32', '2025-05-26 17:23:32'),
(11, 'Violino', '2025-05-26 17:23:32', '2025-05-26 17:23:32'),
(12, 'Tuba', '2025-05-26 17:23:32', '2025-05-26 17:23:32'),
(13, 'Pandeiro', '2025-05-26 17:23:32', '2025-05-26 17:23:32'),
(14, 'Clarone', '2025-05-26 17:23:32', '2025-05-26 17:23:32');

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoriasmarcas`
--

CREATE TABLE `categoriasmarcas` (
  `id_categoriaMarca` int NOT NULL,
  `id_categoria` int NOT NULL,
  `id_marca` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `categoriasmarcas`
--

INSERT INTO `categoriasmarcas` (`id_categoriaMarca`, `id_categoria`, `id_marca`) VALUES
(1, 2, 2),
(2, 1, 8),
(3, 1, 9),
(4, 1, 13),
(5, 2, 3),
(6, 2, 4),
(7, 2, 8),
(8, 2, 13),
(9, 3, 3),
(10, 3, 4),
(11, 3, 8),
(12, 3, 13),
(13, 4, 1),
(14, 4, 5),
(15, 4, 6),
(16, 4, 8),
(17, 5, 8),
(18, 5, 15),
(19, 5, 16),
(20, 6, 7),
(21, 6, 8),
(22, 6, 10),
(23, 6, 12),
(24, 7, 8),
(25, 7, 10),
(26, 7, 11),
(27, 7, 14),
(28, 8, 8),
(29, 8, 10),
(30, 9, 8),
(31, 9, 10),
(32, 10, 8),
(33, 10, 10),
(34, 10, 11),
(35, 10, 14),
(36, 11, 8),
(37, 11, 13),
(38, 12, 8),
(39, 12, 10),
(40, 12, 11),
(41, 12, 14),
(42, 13, 9),
(43, 13, 13),
(44, 14, 8),
(45, 14, 10),
(46, 14, 12);

-- --------------------------------------------------------

--
-- Estrutura para tabela `clientes`
--

CREATE TABLE `clientes` (
  `cliente_id` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `telefone` char(14) DEFAULT NULL,
  `cep` varchar(10) NOT NULL,
  `endereco` varchar(400) NOT NULL,
  `numero` int NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `complemento` varchar(100) DEFAULT NULL,
  `bairro` varchar(150) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `clientes`
--

INSERT INTO `clientes` (`cliente_id`, `nome`, `email`, `senha`, `telefone`, `cep`, `endereco`, `numero`, `cidade`, `estado`, `complemento`, `bairro`, `created_at`, `updated_at`) VALUES
(7, 'João da dfgSilva', 'joao.silfgdva@example.com', 'senhaSegura123', '11987654321', '01234-567', 'Rua das Flores', 123, 'São Paulo', 'SP', 'Apto 45', 'Jardins', '2025-07-09 01:53:43', '2025-07-09 01:53:43'),
(8, 'João da dfgSilva', 'victor@email.com', '1234', '11987654321', '01234-567', 'Rua das Flores', 123, 'São Paulo', 'SP', 'Apto 45', 'Jardins', '2025-07-09 01:54:40', '2025-07-09 01:54:40');

-- --------------------------------------------------------

--
-- Estrutura para tabela `itenspedidos`
--

CREATE TABLE `itenspedidos` (
  `id_itemPedido` int NOT NULL,
  `id_pedido` int NOT NULL,
  `id_produto` int NOT NULL,
  `quantidade` int NOT NULL,
  `preco_unitario` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `marcas`
--

CREATE TABLE `marcas` (
  `id_marca` int NOT NULL,
  `marca` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `marcas`
--

INSERT INTO `marcas` (`id_marca`, `marca`, `created_at`, `updated_at`) VALUES
(1, 'CASIO', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(2, 'CRAFTER', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(3, 'FENDER', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(4, 'GIBSON', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(5, 'KORG', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(6, 'ROLAND', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(7, 'SELMER PARIS', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(8, 'YAMAHA', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(9, 'EAGLE', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(10, 'JUPITER', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(11, 'WERIL', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(12, 'YABAGISAWA', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(13, 'MICHAEL', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(14, 'KING', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(15, 'PEARL', '2025-05-26 17:23:41', '2025-05-26 17:23:41'),
(16, 'DW', '2025-05-26 17:23:41', '2025-05-26 17:23:41');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pagamento`
--

CREATE TABLE `pagamento` (
  `id_pagamento` int NOT NULL,
  `nome_cartao` varchar(255) NOT NULL,
  `numero_cartao` varchar(200) NOT NULL,
  `validade_mes` int NOT NULL,
  `validade_ano` int NOT NULL,
  `cvv` char(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int NOT NULL,
  `cliente_id` int NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `id_produto` int NOT NULL,
  `id_categoria` int NOT NULL,
  `id_marca` int NOT NULL,
  `produto` varchar(255) NOT NULL,
  `especificacoes` varchar(400) DEFAULT NULL,
  `descricao` text,
  `quantidade` int NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `desconto` decimal(10,2) DEFAULT NULL,
  `imagem` varchar(500) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`id_produto`, `id_categoria`, `id_marca`, `produto`, `especificacoes`, `descricao`, `quantidade`, `preco`, `desconto`, `imagem`, `created_at`, `updated_at`) VALUES
(57, 1, 1, 'Violão Clássico Casio VC-200', 'Tampo: Spruce | Laterais e fundo: Nato | Braço: Okoume | Trastes: 19', 'O Violão Casio VC-200 é perfeito para iniciantes que buscam qualidade sonora com preço acessível. Seu design clássico e acabamento natural proporcionam ótima tocabilidade.', 25, 699.90, 50.00, 'vc-200-casio.jpg', '2025-07-23 14:24:25', '2025-07-23 14:24:25'),
(58, 2, 3, 'Guitarra Fender Stratocaster Standard', 'Corpo: Alder | Braço: Maple | Captadores: 3x Single Coil | Ponte: Tremolo', 'Ícone entre guitarristas, a Stratocaster Standard oferece timbres versáteis e construção robusta. Ideal para blues, rock e pop.', 10, 5499.90, 200.00, 'stratocaster-fender.jpg', '2025-07-23 14:24:25', '2025-07-23 14:24:25'),
(59, 4, 5, 'Teclado Korg B2SP com Pedaleira', 'Teclas: 88 | Polifonia: 120 | Timbres: 12 | Saídas: USB/MIDI | Pedais: Inclusos', 'Com timbres realistas e sensação de piano acústico, o Korg B2SP é perfeito para estudo e apresentações. Inclui pedaleira e estante.', 12, 3899.00, 150.00, 'korg-b2sp.jpg', '2025-07-23 14:24:25', '2025-07-23 14:24:25'),
(60, 6, 7, 'Saxofone Alto Selmer Paris Série II', 'Afinação: Eb | Corpo: Latão | Acabamento: Dourado | Estojo: Incluso', 'Considerado um dos melhores saxofones do mundo, o Série II é ideal para músicos avançados e profissionais. Timbre encorpado e projeção incrível.', 5, 19999.00, 500.00, 'selmer-sax-serie2.jpg', '2025-07-23 14:24:25', '2025-07-23 14:24:25'),
(61, 9, 8, 'Clarinete Yamaha YCL-255', 'Afinação: Bb | Material: Resina ABS | Chaves: Níquel | Estojo: Incluso', 'O YCL-255 é a escolha ideal para estudantes. Leve, resistente e com sonoridade clara, proporciona ótima ergonomia.', 8, 3890.00, 200.00, 'yamaha-ycl-255.jpg', '2025-07-23 14:24:25', '2025-07-23 14:24:25'),
(62, 5, 15, 'Bateria Pearl Export EXX725S', 'Cascos: Poplar | Tom holders: Opti-Loc | Ferragens: Incluídas | Pratos: Não inclusos', 'Uma das baterias mais vendidas no mundo, a Pearl Export oferece robustez e excelente custo-benefício para quem está começando.', 6, 4999.00, 300.00, 'pearl-export.jpg', '2025-07-23 14:24:25', '2025-07-23 14:24:25'),
(63, 10, 14, 'Trombone King 606', 'Afinação: Bb | Material: Latão Dourado | Estojo: Incluso | Bocal: Prateado', 'Projetado para estudantes, o trombone King 606 é leve e fácil de tocar, com timbre brilhante e projeção satisfatória.', 9, 4590.00, 250.00, 'king-606.jpg', '2025-07-23 14:24:25', '2025-07-23 14:24:25'),
(64, 3, 4, 'Baixo Gibson Thunderbird IV', 'Corpo: Mahogany | Escala: Rosewood | Captadores: Dual Humbucker', 'Com visual arrojado e som potente, o Thunderbird é ideal para baixistas que buscam presença sonora e estilo.', 4, 8790.00, 500.00, 'gibson-thunderbird.jpg', '2025-07-23 14:24:25', '2025-07-23 14:24:25'),
(65, 12, 11, 'Tuba Weril BCF440L', 'Afinação: Bb | Válvulas: 4 | Acabamento: Laqueado | Estojo: Incluso', 'A Weril BCF440L é uma excelente escolha para bandas e escolas de música. Som encorpado e durabilidade garantida.', 3, 13990.00, 800.00, 'tuba-weril.jpg', '2025-07-23 14:24:25', '2025-07-23 14:24:25'),
(66, 7, 10, 'Trompete Jupiter JTR700', 'Afinação: Bb | Acabamento: Laqueado | Pistões: Aço inox | Estojo: Incluso', 'Compacto e eficiente, o JTR700 é ideal para estudantes que buscam um instrumento de qualidade com excelente resposta.', 7, 3190.00, 150.00, 'jupiter-jtr700.jpg', '2025-07-23 14:24:25', '2025-07-23 14:24:25');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `imagem` varchar(250) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nome`, `email`, `senha`, `imagem`, `created_at`) VALUES
(2, 'victor', 'victor@email.com', '8cb2237d0679ca88db6464eac60da96345513964', '', '2025-07-07 19:14:38'),
(6, 'victor', 'victor2@email.com', '8cb2237d0679ca88db6464eac60da96345513964', 'asdasd', '2025-07-21 17:52:06');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `carrinho`
--
ALTER TABLE `carrinho`
  ADD PRIMARY KEY (`id_carrinho`),
  ADD KEY `id_produto` (`id_produto`);

--
-- Índices de tabela `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Índices de tabela `categoriasmarcas`
--
ALTER TABLE `categoriasmarcas`
  ADD PRIMARY KEY (`id_categoriaMarca`),
  ADD KEY `id_categoria` (`id_categoria`),
  ADD KEY `id_marca` (`id_marca`);

--
-- Índices de tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`cliente_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices de tabela `itenspedidos`
--
ALTER TABLE `itenspedidos`
  ADD PRIMARY KEY (`id_itemPedido`),
  ADD KEY `id_pedido` (`id_pedido`),
  ADD KEY `id_produto` (`id_produto`);

--
-- Índices de tabela `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id_marca`);

--
-- Índices de tabela `pagamento`
--
ALTER TABLE `pagamento`
  ADD PRIMARY KEY (`id_pagamento`);

--
-- Índices de tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`),
  ADD KEY `id_cliente` (`cliente_id`);

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id_produto`),
  ADD UNIQUE KEY `id_produto` (`id_produto`),
  ADD KEY `id_categoria` (`id_categoria`),
  ADD KEY `id_marca` (`id_marca`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `carrinho`
--
ALTER TABLE `carrinho`
  MODIFY `id_carrinho` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `categoriasmarcas`
--
ALTER TABLE `categoriasmarcas`
  MODIFY `id_categoriaMarca` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `cliente_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `itenspedidos`
--
ALTER TABLE `itenspedidos`
  MODIFY `id_itemPedido` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id_marca` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id_produto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `carrinho`
--
ALTER TABLE `carrinho`
  ADD CONSTRAINT `carrinho_ibfk_1` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id_produto`);

--
-- Restrições para tabelas `categoriasmarcas`
--
ALTER TABLE `categoriasmarcas`
  ADD CONSTRAINT `categoriasMarcas_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`),
  ADD CONSTRAINT `categoriasMarcas_ibfk_2` FOREIGN KEY (`id_marca`) REFERENCES `marcas` (`id_marca`);

--
-- Restrições para tabelas `itenspedidos`
--
ALTER TABLE `itenspedidos`
  ADD CONSTRAINT `itensPedidos_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`),
  ADD CONSTRAINT `itensPedidos_ibfk_2` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id_produto`);

--
-- Restrições para tabelas `pagamento`
--
ALTER TABLE `pagamento`
  ADD CONSTRAINT `pagamento_ibfk_1` FOREIGN KEY (`id_pagamento`) REFERENCES `pedidos` (`id_pedido`);

--
-- Restrições para tabelas `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`cliente_id`);

--
-- Restrições para tabelas `produtos`
--
ALTER TABLE `produtos`
  ADD CONSTRAINT `produtos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`),
  ADD CONSTRAINT `produtos_ibfk_2` FOREIGN KEY (`id_marca`) REFERENCES `marcas` (`id_marca`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
