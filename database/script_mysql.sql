-- ***********************************
-- atividade prática SAEP
create database troca_tudo_SAEP;
use troca_tudo_SAEP;

-- 1. criando tabela 'users'
create table users(
	id int primary key auto_increment,
    nome varchar(100),
    avatar varchar(100),
    email varchar(100),
    senha text,
    curtidas_totais int, 
    descurtidas_totais int
);
select* from users;

-- 1.1 criando tabela 'produtos'
create table products(
	id_product int primary key auto_increment,
    nome_product varchar(100),
    image varchar(100),
    curtidas int,
    descurtidas int
);
select* from products;

-- 1.3 criando tabela 'comentario'
create table coments(
	id_coment int primary key auto_increment,
    id_product int,
    id_usuario int,
    coment text,
    cidade varchar(50),
    estado varchar(50),
    foreign key (id_product) references products(id_product),
    foreign key (id_usuario) references users(id)
);
select* from coments;








