CREATE DATABASE IF NOT EXISTS vovo4 CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE vovo4;

CREATE TABLE IF NOT EXISTS pedidos(
	id_pedidos INT PRIMARY KEY AUTO_INCREMENT,
    nome_pedidos VARCHAR(120) NOT NULL,
    email_pedidos VARCHAR(120) NOT NULL,
    sugestoes_pedidos VARCHAR(120) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    alterado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

SELECT * FROM pedidos;

INSERT INTO pedidos(nome_pedidos, email_pedidos, sugestoes_pedidos) VALUES ("Gabriel","gabriel@gmail.com","bolo");

UPDATE pedidos SET sugestoes_pedidos = "bolo de cenoura" WHERE id_pedidos = 1;

DELETE FROM pedidos WHERE id_pedidos = 2;