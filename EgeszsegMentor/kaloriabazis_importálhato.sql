-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Feb 29. 22:38
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `kaloriabazis`
--
CREATE DATABASE IF NOT EXISTS `kaloriabazis` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `kaloriabazis`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kaloriabazis`
--

CREATE TABLE `kaloriabazis` (
  `id` int(11) NOT NULL,
  `neve` varchar(50) NOT NULL,
  `energia` int(11) NOT NULL,
  `feherje` double(10,2) NOT NULL,
  `zsir` double(10,2) NOT NULL,
  `szenhidrat` double(10,2) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `kaloriabazis`
--

INSERT INTO `kaloriabazis` (`id`, `neve`, `energia`, `feherje`, `zsir`, `szenhidrat`) VALUES
(1, 'Főtt tojás', 155, 12.5, 10.6, 1.1),
(2, 'Barna rizs (főtt)', 112, 2.3, 0.8, 21.17),
(3, 'Basmati rizs (főtt)', 147, 4.1, 1.2, 32.8),
(4, 'Bulgur (főtt)', 83, 3.1, 0.2, 18.6),
(5, 'Búzadara', 360, 12.7, 1.1, 68.9),
(6, 'Fehér rizs (főtt)', 130, 2.4, 0.3, 28.3),
(7, 'Jázmin rizs (főtt)', 103, 2.1, 0.1, 22.3),
(8, 'Zab', 389, 16.8, 6.9, 55.6),
(9, 'Zabpehely', 389, 16.8, 6.9, 55.6),
(10, 'Tehéntej (2,8%-os)', 56, 3.0, 2.8, 4.6),
(11, 'Tehéntej (1,5%-os)', 44, 3.0, 1.5, 4.7),
(12, 'Trappista sajt', 352, 23.8, 28.2, 0.6),
(13, 'Alma', 52, 0.3, 0.2, 11.4),
(14, 'Banán', 89, 1.1, 0.3, 20.2),
(15, 'Burgonya (főtt)', 86, 1.7, 0.1, 18.2),
(16, 'Édesburgonya (főtt)', 76, 1.4, 0.1, 15.2),
(17, 'Paradicsom', 18, 0.9, 0.2, 1.3);


--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `kaloriabazis`
--
ALTER TABLE `kaloriabazis` ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `kaloriabazis`
--
ALTER TABLE `kaloriabazis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
