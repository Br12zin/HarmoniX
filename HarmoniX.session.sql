CREATE TABLE carrinho (
  id_carrinho INT AUTO_INCREMENT PRIMARY KEY,
  id_cliente VARCHAR(255), -- ou id_usuario, se tiver login
  id_produto INT,
  quantidade INT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);
