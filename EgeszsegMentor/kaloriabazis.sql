-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Ápr 28. 16:37
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

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

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalok`
--

CREATE TABLE `felhasznalok` (
  `userID` int(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `felhasznalok`
--

INSERT INTO `felhasznalok` (`userID`, `email`, `username`, `password`, `role`) VALUES
(4, 'alexandra.csontos@dyntell.com', 'MCSA', '$2b$10$DfjZxhplGBWzlzWedK2Y8.0lzGD.5ofvja9VwVLfgq4XfeKs/T5nG', 1),
(6, 'teszt@dyntell.com', 'teszt', '$2b$10$u9WsABtd3VhzqD.5sR40MOluei0oRVHuJpIqFtTlpWnrD4yI7G9y.', 1);

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
  `szenhidrat` double(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `kaloriabazis`
--

INSERT INTO `kaloriabazis` (`id`, `neve`, `energia`, `feherje`, `zsir`, `szenhidrat`) VALUES
(1, 'Főtt tojás', 155, 12.50, 10.60, 1.10),
(2, 'Barna rizs (főtt)', 112, 2.30, 0.80, 21.17),
(3, 'Basmati rizs (főtt)', 147, 4.10, 1.20, 32.80),
(4, 'Bulgur (főtt)', 83, 3.10, 0.20, 18.60),
(5, 'Búzadara', 360, 12.70, 1.10, 68.90),
(6, 'Fehér rizs (főtt)', 130, 2.40, 0.30, 28.30),
(7, 'Jázmin rizs (főtt)', 103, 2.10, 0.10, 22.30),
(8, 'Zab', 389, 16.80, 6.90, 55.60),
(9, 'Zabpehely', 389, 16.80, 6.90, 55.60),
(10, 'Tehéntej (2,8%-os)', 56, 3.00, 2.80, 4.60),
(11, 'Tehéntej (1,5%-os)', 44, 3.00, 1.50, 4.70),
(12, 'Trappista sajt', 352, 23.80, 28.20, 0.60),
(13, 'Alma', 52, 0.30, 0.20, 11.40),
(14, 'Banán', 89, 1.10, 0.30, 20.20),
(15, 'Burgonya (főtt)', 86, 1.70, 0.10, 18.20),
(16, 'Édesburgonya (főtt)', 76, 1.40, 0.10, 15.20),
(17, 'Paradicsom', 18, 0.90, 0.20, 1.30);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `felhasznalok`
--
ALTER TABLE `felhasznalok`
  ADD PRIMARY KEY (`userID`);

--
-- A tábla indexei `kaloriabazis`
--
ALTER TABLE `kaloriabazis`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `userID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `kaloriabazis`
--
ALTER TABLE `kaloriabazis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
