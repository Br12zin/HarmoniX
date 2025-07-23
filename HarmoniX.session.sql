-- CREATE TABLE carrinho (
--   id_carrinho INT AUTO_INCREMENT PRIMARY KEY,
--   id_cliente VARCHAR(255), -- ou id_usuario, se tiver login
--   id_produto INT,
--   quantidade INT,
--   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--   updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
-- );

INSERT INTO produtos (
  id_categoria, id_marca, produto, especificacoes, descricao,
  quantidade, preco, desconto, imagem, created_at, updated_at
) VALUES

(1, 1, 'Violão Clássico Casio VC-200', 
 'Tampo: Spruce | Laterais e fundo: Nato | Braço: Okoume | Trastes: 19',
 'O Violão Casio VC-200 é perfeito para iniciantes que buscam qualidade sonora com preço acessível. Seu design clássico e acabamento natural proporcionam ótima tocabilidade.',
 25, 699.90, 50.00, 'vc-200-casio.jpg', NOW(), NOW()),

(2, 3, 'Guitarra Fender Stratocaster Standard', 
 'Corpo: Alder | Braço: Maple | Captadores: 3x Single Coil | Ponte: Tremolo',
 'Ícone entre guitarristas, a Stratocaster Standard oferece timbres versáteis e construção robusta. Ideal para blues, rock e pop.',
 10, 5499.90, 200.00, 'stratocaster-fender.jpg', NOW(), NOW()),

(4, 5, 'Teclado Korg B2SP com Pedaleira', 
 'Teclas: 88 | Polifonia: 120 | Timbres: 12 | Saídas: USB/MIDI | Pedais: Inclusos',
 'Com timbres realistas e sensação de piano acústico, o Korg B2SP é perfeito para estudo e apresentações. Inclui pedaleira e estante.',
 12, 3899.00, 150.00, 'korg-b2sp.jpg', NOW(), NOW()),

(6, 7, 'Saxofone Alto Selmer Paris Série II', 
 'Afinação: Eb | Corpo: Latão | Acabamento: Dourado | Estojo: Incluso',
 'Considerado um dos melhores saxofones do mundo, o Série II é ideal para músicos avançados e profissionais. Timbre encorpado e projeção incrível.',
 5, 19999.00, 500.00, 'selmer-sax-serie2.jpg', NOW(), NOW()),

(9, 8, 'Clarinete Yamaha YCL-255', 
 'Afinação: Bb | Material: Resina ABS | Chaves: Níquel | Estojo: Incluso',
 'O YCL-255 é a escolha ideal para estudantes. Leve, resistente e com sonoridade clara, proporciona ótima ergonomia.',
 8, 3890.00, 200.00, 'yamaha-ycl-255.jpg', NOW(), NOW()),

(5, 15, 'Bateria Pearl Export EXX725S', 
 'Cascos: Poplar | Tom holders: Opti-Loc | Ferragens: Incluídas | Pratos: Não inclusos',
 'Uma das baterias mais vendidas no mundo, a Pearl Export oferece robustez e excelente custo-benefício para quem está começando.',
 6, 4999.00, 300.00, 'pearl-export.jpg', NOW(), NOW()),

(10, 14, 'Trombone King 606', 
 'Afinação: Bb | Material: Latão Dourado | Estojo: Incluso | Bocal: Prateado',
 'Projetado para estudantes, o trombone King 606 é leve e fácil de tocar, com timbre brilhante e projeção satisfatória.',
 9, 4590.00, 250.00, 'king-606.jpg', NOW(), NOW()),

(3, 4, 'Baixo Gibson Thunderbird IV', 
 'Corpo: Mahogany | Escala: Rosewood | Captadores: Dual Humbucker',
 'Com visual arrojado e som potente, o Thunderbird é ideal para baixistas que buscam presença sonora e estilo.',
 4, 8790.00, 500.00, 'gibson-thunderbird.jpg', NOW(), NOW()),

(12, 11, 'Tuba Weril BCF440L', 
 'Afinação: Bb | Válvulas: 4 | Acabamento: Laqueado | Estojo: Incluso',
 'A Weril BCF440L é uma excelente escolha para bandas e escolas de música. Som encorpado e durabilidade garantida.',
 3, 13990.00, 800.00, 'tuba-weril.jpg', NOW(), NOW()),

(7, 10, 'Trompete Jupiter JTR700', 
 'Afinação: Bb | Acabamento: Laqueado | Pistões: Aço inox | Estojo: Incluso',
 'Compacto e eficiente, o JTR700 é ideal para estudantes que buscam um instrumento de qualidade com excelente resposta.',
 7, 3190.00, 150.00, 'jupiter-jtr700.jpg', NOW(), NOW());
