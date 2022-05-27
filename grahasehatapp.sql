-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 27, 2022 at 07:42 AM
-- Server version: 8.0.21
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grahasehatapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nama` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `nama`) VALUES
(1, 'sabil', '$2a$10$Xbx6P5XwvpFETzwBGTXMFu1Id6ggI8A7fPTO3Fhl231Q3IZUZCyae', 'Alfad Sabil Haq');

-- --------------------------------------------------------

--
-- Table structure for table `aturan_lokasi`
--

DROP TABLE IF EXISTS `aturan_lokasi`;
CREATE TABLE IF NOT EXISTS `aturan_lokasi` (
  `id_aturan_lokasi` tinyint NOT NULL AUTO_INCREMENT,
  `latitud` text NOT NULL,
  `longitud` text NOT NULL,
  `status` enum('0','1') NOT NULL,
  PRIMARY KEY (`id_aturan_lokasi`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `aturan_presensi`
--

DROP TABLE IF EXISTS `aturan_presensi`;
CREATE TABLE IF NOT EXISTS `aturan_presensi` (
  `id_aturan` int NOT NULL AUTO_INCREMENT,
  `jam_masuk` varchar(2) NOT NULL,
  `jam_keluar` varchar(2) NOT NULL,
  `terlambat` varchar(2) NOT NULL,
  `status` enum('y','t') NOT NULL,
  PRIMARY KEY (`id_aturan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jabatan`
--

DROP TABLE IF EXISTS `jabatan`;
CREATE TABLE IF NOT EXISTS `jabatan` (
  `id` tinyint NOT NULL AUTO_INCREMENT,
  `nama_jabatan` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `jabatan`
--

INSERT INTO `jabatan` (`id`, `nama_jabatan`) VALUES
(1, 'Karyawan');

-- --------------------------------------------------------

--
-- Table structure for table `jadwal`
--

DROP TABLE IF EXISTS `jadwal`;
CREATE TABLE IF NOT EXISTS `jadwal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_karyawan` int NOT NULL,
  `id_shift` int NOT NULL,
  `tanggal` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `jadwal`
--

INSERT INTO `jadwal` (`id`, `id_karyawan`, `id_shift`, `tanggal`) VALUES
(1, 1, 1, '2022-05-31'),
(2, 1, 1, '2022-05-30'),
(3, 1, 1, '2022-05-29'),
(4, 1, 1, '2022-05-28'),
(5, 1, 1, '2022-05-27'),
(6, 1, 1, '2022-05-26'),
(7, 1, 1, '2022-05-25'),
(8, 1, 1, '2022-05-24'),
(9, 1, 1, '2022-05-23'),
(10, 1, 1, '2022-05-22'),
(11, 1, 1, '2022-05-21'),
(12, 1, 1, '2022-05-20'),
(13, 1, 1, '2022-05-19'),
(14, 1, 1, '2022-05-18'),
(15, 1, 1, '2022-05-17'),
(16, 1, 1, '2022-05-16'),
(17, 1, 1, '2022-05-15'),
(18, 1, 1, '2022-05-14'),
(19, 1, 1, '2022-05-13'),
(20, 1, 1, '2022-05-12'),
(21, 1, 1, '2022-05-11'),
(22, 1, 1, '2022-05-10'),
(23, 1, 1, '2022-05-09'),
(24, 1, 1, '2022-05-08'),
(25, 1, 1, '2022-05-07'),
(26, 1, 1, '2022-05-06'),
(27, 1, 1, '2022-05-05'),
(28, 1, 1, '2022-05-04'),
(29, 1, 1, '2022-05-03'),
(30, 1, 1, '2022-05-02'),
(31, 1, 1, '2022-05-01'),
(32, 2, 1, '2022-05-31'),
(33, 2, 0, '2022-05-30'),
(34, 2, 0, '2022-05-29'),
(35, 2, 0, '2022-05-28'),
(36, 2, 0, '2022-05-27'),
(37, 2, 0, '2022-05-26'),
(38, 2, 0, '2022-05-25'),
(39, 2, 0, '2022-05-24'),
(40, 2, 0, '2022-05-23'),
(41, 2, 0, '2022-05-22'),
(42, 2, 0, '2022-05-21'),
(43, 2, 0, '2022-05-20'),
(44, 2, 0, '2022-05-19'),
(45, 2, 0, '2022-05-18'),
(46, 2, 0, '2022-05-17'),
(47, 2, 0, '2022-05-16'),
(48, 2, 0, '2022-05-15'),
(49, 2, 0, '2022-05-14'),
(50, 2, 0, '2022-05-13'),
(51, 2, 0, '2022-05-12'),
(52, 2, 0, '2022-05-11'),
(53, 2, 0, '2022-05-10'),
(54, 2, 0, '2022-05-09'),
(55, 2, 0, '2022-05-08'),
(56, 2, 0, '2022-05-07'),
(57, 2, 0, '2022-05-06'),
(58, 2, 0, '2022-05-05'),
(59, 2, 0, '2022-05-04'),
(60, 2, 0, '2022-05-03'),
(61, 2, 0, '2022-05-02'),
(62, 2, 0, '2022-05-01'),
(63, 1, 2, '2022-05-01');

-- --------------------------------------------------------

--
-- Table structure for table `karyawan`
--

DROP TABLE IF EXISTS `karyawan`;
CREATE TABLE IF NOT EXISTS `karyawan` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `nik` varchar(18) NOT NULL,
  `nama` varchar(40) NOT NULL,
  `id_jabatan` tinyint NOT NULL,
  `id_unit` smallint NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `status_kawin` enum('Belum Kawin','Kawin') NOT NULL,
  `alamat` text NOT NULL,
  `gender` enum('L','P') NOT NULL,
  `pendidikan` enum('SMP Sederajat','SMA Sederajat','S1','S2','Lainnya') NOT NULL,
  `agama` varchar(15) NOT NULL,
  `telepon` varchar(16) NOT NULL,
  `foto` text,
  `tanggal_mulai_kerja` date NOT NULL,
  `tanggal_resign` date DEFAULT NULL,
  `status_aktif` enum('Aktif','Tidak Aktif') NOT NULL,
  `status_kerja` enum('Tetap','Kontrak','Training') NOT NULL,
  `tanggal_mulai_kontrak` date DEFAULT NULL,
  `tanggal_habis_kontrak` date DEFAULT NULL,
  `lama_kontrak` smallint DEFAULT NULL,
  `nama_pengguna` varchar(10) NOT NULL,
  `sandi` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lastupdate_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `jabatan` (`id_jabatan`),
  KEY `unit` (`id_unit`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `karyawan`
--

INSERT INTO `karyawan` (`id`, `nik`, `nama`, `id_jabatan`, `id_unit`, `tanggal_lahir`, `status_kawin`, `alamat`, `gender`, `pendidikan`, `agama`, `telepon`, `foto`, `tanggal_mulai_kerja`, `tanggal_resign`, `status_aktif`, `status_kerja`, `tanggal_mulai_kontrak`, `tanggal_habis_kontrak`, `lama_kontrak`, `nama_pengguna`, `sandi`) VALUES
(1, '123456', 'Alfad Sabil', 1, 1, '2022-05-26', 'Belum Kawin', 'De Tar', 'L', 'S1', 'Islam', '081234567890', NULL, '2022-05-26', NULL, 'Aktif', 'Tetap', NULL, NULL, NULL, 'sabil', '$2a$10$Xbx6P5XwvpFETzwBGTXMFu1Id6ggI8A7fPTO3Fhl231Q3IZUZCyae'),
(2, '123456', 'Dani', 1, 1, '2022-05-26', 'Belum Kawin', 'De Tar', 'L', 'S1', 'Islam', '081234567890', NULL, '2022-05-26', NULL, 'Aktif', 'Tetap', NULL, NULL, NULL, 'dani', '$2a$10$Xbx6P5XwvpFETzwBGTXMFu1Id6ggI8A7fPTO3Fhl231Q3IZUZCyae');

-- --------------------------------------------------------

--
-- Table structure for table `presensi`
--

DROP TABLE IF EXISTS `presensi`;
CREATE TABLE IF NOT EXISTS `presensi` (
  `id_presensi` int NOT NULL AUTO_INCREMENT,
  `id_karyawan` smallint NOT NULL,
  `waktu_masuk` varchar(20) NOT NULL,
  `waktu_keluar` varchar(20) DEFAULT NULL,
  `status` enum('Hadir','Terlambat') NOT NULL,
  `keterangan` text,
  PRIMARY KEY (`id_presensi`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shift`
--

DROP TABLE IF EXISTS `shift`;
CREATE TABLE IF NOT EXISTS `shift` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode_shift` varchar(10) NOT NULL,
  `nama_shift` varchar(10) NOT NULL,
  `jam_masuk` time NOT NULL,
  `jam_keluar` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `shift`
--

INSERT INTO `shift` (`id`, `kode_shift`, `nama_shift`, `jam_masuk`, `jam_keluar`) VALUES
(1, 'P-001', 'Pagi', '08:00:00', '12:00:00'),
(2, 'P-002', 'Pagi', '09:00:00', '13:00:00'),
(3, 'S-001', 'Siang', '12:00:00', '18:00:00'),
(4, 'S-002', 'Siang', '13:00:00', '20:00:00'),
(5, 'S-003', 'Siang', '14:00:00', '21:00:00'),
(6, 'S-004', 'Sore', '15:00:00', '22:00:00'),
(7, 'M-001', 'Malam', '19:00:00', '23:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
CREATE TABLE IF NOT EXISTS `unit` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `nama_unit` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `unit`
--

INSERT INTO `unit` (`id`, `nama_unit`) VALUES
(1, 'Resepsionis');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `karyawan`
--
ALTER TABLE `karyawan`
  ADD CONSTRAINT `jabatan` FOREIGN KEY (`id_jabatan`) REFERENCES `jabatan` (`id`),
  ADD CONSTRAINT `unit` FOREIGN KEY (`id_unit`) REFERENCES `unit` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
