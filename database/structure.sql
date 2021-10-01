CREATE SCHEMA `database_db` ;

CREATE TABLE `database_db`.`tabla_credenciales_usuarios` (
  `id` INT NOT NULL,
  `nombre` LONGTEXT NULL,
  `apellido` LONGTEXT NULL,
  `correo_electronico` LONGTEXT NULL,
  `contraseña` LONGTEXT NULL,
  `id_permisos` TINYINT(5) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `database_db`.`tabla_permisos_usuarios` (
  `id` INT NOT NULL,
  `rango` VARCHAR(45) NULL,
  `permiso_editar` TINYINT(2) NULL,
  `permiso_comprar` TINYINT(2) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `database_db`.`tabla_productos` (
  `id` INT NOT NULL,
  `nombre_producto` LONGTEXT NULL,
  `imagen` LONGTEXT NULL,
  `precio` INT(100) NULL,
  `id_talle` TINYINT(5) NULL,
  `id_color` TINYINT(5) NULL,
  `descripcion` LONGTEXT NULL,
  `id_categoria` TINYINT(5) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `database_db`.`tabla_categorias` (
  `id` INT NOT NULL,
  `categoria` LONGTEXT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `database_db`.`tabla_colores` (
  `id` INT NOT NULL,
  `color` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `database_db`.`tabla_talles` (
  `id` INT NOT NULL,
  `talle` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));