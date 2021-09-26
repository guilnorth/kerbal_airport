-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 09/07/2018 às 15:06
-- Versão do servidor: 10.1.30-MariaDB
-- Versão do PHP: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `Aeroporto`
--

DELIMITER $$
--
-- Funções
--
CREATE DEFINER=`root`@`localhost` FUNCTION `total_voos_ativos` () RETURNS INT(11) BEGIN
	declare totalVoos int;
    SELECT count(id) INTO totalVoos FROM voos 
    WHERE NOW() between DATE(data_embarque) and DATE(data_desembarque) ;
	return totalVoos;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `administradores`
--

CREATE TABLE `administradores` (
  `id` int(11) NOT NULL,
  `login` varchar(45) NOT NULL,
  `senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONAMENTOS PARA TABELAS `administradores`:
--

--
-- Fazendo dump de dados para tabela `administradores`
--

INSERT INTO `administradores` (`id`, `login`, `senha`) VALUES
(6, 'admin', '$2a$10$pf0MfCBKUn/Xzpyex5eXDuVB15fcXXs3ADSDuvjOz5DyfSQYcQIzO');

-- --------------------------------------------------------

--
-- Estrutura para tabela `aeroportos`
--

CREATE TABLE `aeroportos` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `idPlaneta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONAMENTOS PARA TABELAS `aeroportos`:
--   `idPlaneta`
--       `planetas` -> `id`
--

--
-- Fazendo dump de dados para tabela `aeroportos`
--

INSERT INTO `aeroportos` (`id`, `nome`, `idPlaneta`) VALUES
(1, 'Aeroporto  Intergalático Terrestre', 5),
(2, 'Aeroporto Marciano Interespacial', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `avioes`
--

CREATE TABLE `avioes` (
  `id` int(11) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `empresa` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONAMENTOS PARA TABELAS `avioes`:
--

--
-- Fazendo dump de dados para tabela `avioes`
--

INSERT INTO `avioes` (`id`, `modelo`, `empresa`) VALUES
(1, 'A310', 'AirBus'),
(2, 'Dragon A1', 'Air Suit');

-- --------------------------------------------------------

--
-- Estrutura para tabela `passageiros`
--

CREATE TABLE `passageiros` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `dataNascimento` date NOT NULL,
  `etnia` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONAMENTOS PARA TABELAS `passageiros`:
--

--
-- Fazendo dump de dados para tabela `passageiros`
--

INSERT INTO `passageiros` (`id`, `nome`, `dataNascimento`, `etnia`) VALUES
(1, 'Daenerys ', '2018-07-01', 'Nascida da Tormenta'),
(2, 'Jon Snow', '2018-07-23', 'Além da Muralha');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pilotos`
--

CREATE TABLE `pilotos` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONAMENTOS PARA TABELAS `pilotos`:
--

--
-- Fazendo dump de dados para tabela `pilotos`
--

INSERT INTO `pilotos` (`id`, `nome`) VALUES
(1, 'João Antônio');

-- --------------------------------------------------------

--
-- Estrutura para tabela `piloto_voo`
--

CREATE TABLE `piloto_voo` (
  `id` int(11) NOT NULL,
  `idPiloto` int(11) NOT NULL,
  `idVoo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONAMENTOS PARA TABELAS `piloto_voo`:
--   `idPiloto`
--       `pilotos` -> `id`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `planetas`
--

CREATE TABLE `planetas` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `setor` varchar(100) NOT NULL,
  `descricao` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONAMENTOS PARA TABELAS `planetas`:
--

--
-- Fazendo dump de dados para tabela `planetas`
--

INSERT INTO `planetas` (`id`, `nome`, `setor`, `descricao`) VALUES
(1, 'Marte', 'via 1', 'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar'),
(5, 'Terra', 'via 1', 'A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar'),
(6, 'Ego', 'aaa', '\"Comecei a experimentar ... e foi assim que Ego surgiu. ... Um planeta que estava vivo; ');

-- --------------------------------------------------------

--
-- Estrutura para tabela `portões`
--

CREATE TABLE `portões` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `checkin` varchar(3) NOT NULL,
  `tipo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONAMENTOS PARA TABELAS `portões`:
--

--
-- Fazendo dump de dados para tabela `portões`
--

INSERT INTO `portões` (`id`, `nome`, `checkin`, `tipo`) VALUES
(1, 'A1', '1', 'Embarque'),
(2, 'A2', '2', 'Desembarque');

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `view_aeroportos_planetas`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `view_aeroportos_planetas` (
`Aeroporto` varchar(100)
,`Planeta` varchar(100)
,`Setor` varchar(100)
,`Descrição` varchar(255)
);

-- --------------------------------------------------------

--
-- Estrutura para tabela `voos`
--

CREATE TABLE `voos` (
  `id` int(11) NOT NULL,
  `idPassageiro` int(11) NOT NULL,
  `data_embarque` datetime NOT NULL,
  `data_desembarque` datetime NOT NULL,
  `idAeroporto` int(11) NOT NULL,
  `passagem_num` varchar(255) DEFAULT NULL,
  `idAviao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONAMENTOS PARA TABELAS `voos`:
--   `idPassageiro`
--       `passageiros` -> `id`
--   `idAeroporto`
--       `aeroportos` -> `id`
--   `idAviao`
--       `avioes` -> `id`
--

--
-- Fazendo dump de dados para tabela `voos`
--

INSERT INTO `voos` (`id`, `idPassageiro`, `data_embarque`, `data_desembarque`, `idAeroporto`, `passagem_num`, `idAviao`) VALUES
(2, 1, '2018-07-06 00:00:00', '2018-07-07 00:00:00', 1, 'AAA123', 1),
(6, 1, '2018-07-07 00:00:00', '2018-07-10 00:00:00', 1, 'RR123', 1),
(7, 1, '2018-07-07 00:00:00', '2018-07-14 00:00:00', 1, 'AAAB', 2);

-- --------------------------------------------------------

--
-- Estrutura para view `view_aeroportos_planetas`
--
DROP TABLE IF EXISTS `view_aeroportos_planetas`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_aeroportos_planetas`  AS  select `a`.`nome` AS `Aeroporto`,`pl`.`nome` AS `Planeta`,`pl`.`setor` AS `Setor`,`pl`.`descricao` AS `Descrição` from (`aeroportos` `a` join `planetas` `pl` on((`a`.`idPlaneta` = `pl`.`id`))) ;

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `aeroportos`
--
ALTER TABLE `aeroportos`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `fk_AeroportoDestino_Planetas_idx` (`idPlaneta`);

--
-- Índices de tabela `avioes`
--
ALTER TABLE `avioes`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `passageiros`
--
ALTER TABLE `passageiros`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `pilotos`
--
ALTER TABLE `pilotos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `piloto_voo`
--
ALTER TABLE `piloto_voo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Piloto_has_Aviao_Piloto1_idx` (`idPiloto`),
  ADD KEY `idVoo` (`idVoo`) USING BTREE;

--
-- Índices de tabela `planetas`
--
ALTER TABLE `planetas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `portões`
--
ALTER TABLE `portões`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `voos`
--
ALTER TABLE `voos`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `fk_Voo_1_idx` (`idPassageiro`),
  ADD KEY `fk_Voo_Aeroporto1_idx` (`idAeroporto`),
  ADD KEY `fk_Voo_Aviao` (`idAviao`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `administradores`
--
ALTER TABLE `administradores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `aeroportos`
--
ALTER TABLE `aeroportos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `avioes`
--
ALTER TABLE `avioes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `passageiros`
--
ALTER TABLE `passageiros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `pilotos`
--
ALTER TABLE `pilotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `piloto_voo`
--
ALTER TABLE `piloto_voo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `planetas`
--
ALTER TABLE `planetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `portões`
--
ALTER TABLE `portões`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `voos`
--
ALTER TABLE `voos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `aeroportos`
--
ALTER TABLE `aeroportos`
  ADD CONSTRAINT `fk_AeroportoDestino_Planetas` FOREIGN KEY (`idPlaneta`) REFERENCES `planetas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `piloto_voo`
--
ALTER TABLE `piloto_voo`
  ADD CONSTRAINT `fk_Piloto_has_Aviao_Piloto1` FOREIGN KEY (`idPiloto`) REFERENCES `pilotos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `voos`
--
ALTER TABLE `voos`
  ADD CONSTRAINT `fk_Voo_1` FOREIGN KEY (`idPassageiro`) REFERENCES `passageiros` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Voo_Aeroporto1` FOREIGN KEY (`idAeroporto`) REFERENCES `aeroportos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Voo_Aviao` FOREIGN KEY (`idAviao`) REFERENCES `avioes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
