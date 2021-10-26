-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 24-10-2021 a las 22:20:38
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `phones`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `all_phone_book`
--

CREATE TABLE `all_phone_book` (
  `id` int(11) NOT NULL,
  `prefix` varchar(10) NOT NULL COMMENT '+40=ro\r\n+39=de',
  `number` varchar(30) NOT NULL COMMENT 'left trimmed all the leading zeroes',
  `name` varchar(80) NOT NULL COMMENT 'associate or client name',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'last update timestamp',
  `deleted` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `all_phone_book`
--

INSERT INTO `all_phone_book` (`id`, `prefix`, `number`, `name`, `updated_at`, `deleted`) VALUES
(180, '+58', '5443333', 'Venezuela', '2021-10-24 20:19:25', 0),
(179, '+1939', '43464364643', 'Puerto Rico (USA)', '2021-10-24 20:17:51', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `all_phone_book`
--
ALTER TABLE `all_phone_book`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_phone` (`prefix`,`number`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `all_phone_book`
--
ALTER TABLE `all_phone_book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=181;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
