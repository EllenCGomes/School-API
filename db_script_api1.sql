-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS
, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS
, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE
, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA
IF NOT EXISTS `mydb` DEFAULT CHARACTER
SET utf8 ;
USE `mydb`
;

-- -----------------------------------------------------
-- Table `mydb`.`tb_curso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tb_curso` ;

CREATE TABLE
IF NOT EXISTS `mydb`.`tb_curso`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR
(45) NOT NULL,
  `dt_inicio` DATE NULL,
  PRIMARY KEY
(`id`),
  UNIQUE INDEX `nome_UNIQUE`
(`nome` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_aluno`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tb_aluno` ;

CREATE TABLE
IF NOT EXISTS `mydb`.`tb_aluno`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR
(45) NOT NULL,
  `dt_nasc` DATE NOT NULL,
  `dt_matricula` DATE NOT NULL,
  `email` VARCHAR
(100) NOT NULL,
  `ativo` TINYINT NOT NULL,
  `tb_curso_id` INT NOT NULL,
  PRIMARY KEY
(`id`),
  UNIQUE INDEX `nome_aluno_UNIQUE`
(`nome` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE`
(`email` ASC) VISIBLE,
  INDEX `fk_tb_aluno_tb_curso_idx`
(`tb_curso_id` ASC) VISIBLE,
  CONSTRAINT `fk_tb_aluno_tb_curso`
    FOREIGN KEY
(`tb_curso_id`)
    REFERENCES `mydb`.`tb_curso`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_disciplina`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tb_disciplina` ;

CREATE TABLE
IF NOT EXISTS `mydb`.`tb_disciplina`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR
(45) NOT NULL,
  PRIMARY KEY
(`id`),
  UNIQUE INDEX `nome_UNIQUE`
(`nome` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_professor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tb_professor` ;

CREATE TABLE
IF NOT EXISTS `mydb`.`tb_professor`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR
(45) NOT NULL,
  `cpf` VARCHAR
(11) NOT NULL,
  `email` VARCHAR
(100) NOT NULL,
  `dt_registro` DATE NOT NULL,
  `tb_disciplina_id` INT NOT NULL,
  PRIMARY KEY
(`id`),
  UNIQUE INDEX `nome_UNIQUE`
(`nome` ASC) VISIBLE,
  UNIQUE INDEX `cpf_UNIQUE`
(`cpf` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE`
(`email` ASC) VISIBLE,
  INDEX `fk_tb_professor_tb_disciplina1_idx`
(`tb_disciplina_id` ASC) VISIBLE,
  CONSTRAINT `fk_tb_professor_tb_disciplina1`
    FOREIGN KEY
(`tb_disciplina_id`)
    REFERENCES `mydb`.`tb_disciplina`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_aula`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tb_aula` ;

CREATE TABLE
IF NOT EXISTS `mydb`.`tb_aula`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `dt_aula` DATE NOT NULL,
  `tb_curso_id` INT NOT NULL,
  `tb_disciplina_id` INT NOT NULL,
  PRIMARY KEY
(`id`),
  INDEX `fk_tb_aula_tb_curso1_idx`
(`tb_curso_id` ASC) VISIBLE,
  INDEX `fk_tb_aula_tb_disciplina1_idx`
(`tb_disciplina_id` ASC) VISIBLE,
  CONSTRAINT `fk_tb_aula_tb_curso1`
    FOREIGN KEY
(`tb_curso_id`)
    REFERENCES `mydb`.`tb_curso`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION,
  CONSTRAINT `fk_tb_aula_tb_disciplina1`
    FOREIGN KEY
(`tb_disciplina_id`)
    REFERENCES `mydb`.`tb_disciplina`
(`id`)
    ON
DELETE NO ACTION
    ON
UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE
=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS
=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS
=@OLD_UNIQUE_CHECKS;
