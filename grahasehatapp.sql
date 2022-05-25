-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2022 at 08:14 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.23

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
-- Table structure for table `aturan_lokasi`
--

CREATE TABLE `aturan_lokasi` (
  `id_aturan_lokasi` tinyint(4) NOT NULL,
  `latitud` text NOT NULL,
  `longitud` text NOT NULL,
  `status` enum('0','1') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `aturan_presensi`
--

CREATE TABLE `aturan_presensi` (
  `id_aturan` int(6) NOT NULL,
  `jam_masuk` varchar(2) NOT NULL,
  `jam_keluar` varchar(2) NOT NULL,
  `terlambat` varchar(2) NOT NULL,
  `status` enum('y','t') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jabatan`
--

CREATE TABLE `jabatan` (
  `id_jabatan` tinyint(4) NOT NULL,
  `nama_jabatan` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `karyawan`
--

CREATE TABLE `karyawan` (
  `id_karyawan` smallint(6) NOT NULL,
  `nik` varchar(18) NOT NULL,
  `nama` varchar(40) NOT NULL,
  `jabatan` tinyint(4) NOT NULL,
  `unit` smallint(6) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `status_kawin` enum('Belum Kawin','Kawin') NOT NULL,
  `alamat` text NOT NULL,
  `gender` enum('L','P') NOT NULL,
  `pendidikan` enum('SMP Sederajat','SMA Sederajat','S1','S2','Lainnya') NOT NULL,
  `agama` varchar(15) NOT NULL,
  `telepon` varchar(16) NOT NULL,
  `foto` text DEFAULT NULL,
  `tanggal_mulai_kerja` date NOT NULL,
  `tanggal_resign` date DEFAULT NULL,
  `status_aktif` enum('Aktif','Tidak Aktif') NOT NULL,
  `status_kerja` enum('Tetap','Kontrak','Training') NOT NULL,
  `tanggal_mulai_kontrak` date DEFAULT NULL,
  `tanggal_habis_kontrak` date DEFAULT NULL,
  `lama_kontrak` smallint(2) DEFAULT NULL,
  `nama_pengguna` varchar(10) NOT NULL,
  `sandi` varchar(20) NOT NULL,
  `lastupdate_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `presensi`
--

CREATE TABLE `presensi` (
  `id_presensi` int(11) NOT NULL,
  `id_karyawan` smallint(6) NOT NULL,
  `waktu_masuk` varchar(20) NOT NULL,
  `waktu_keluar` varchar(20) DEFAULT NULL,
  `status` enum('Hadir','Terlambat') NOT NULL,
  `keterangan` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `shift`
--

CREATE TABLE `shift` (
  `id_shift` int(11) NOT NULL,
  `kode_shift` varchar(10) NOT NULL,
  `nama_shift` int(11) NOT NULL,
  `jam_masuk` time NOT NULL,
  `jam_keluar` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `unit`
--

CREATE TABLE `unit` (
  `id_unit` smallint(6) NOT NULL,
  `nama_unit` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aturan_lokasi`
--
ALTER TABLE `aturan_lokasi`
  ADD PRIMARY KEY (`id_aturan_lokasi`);

--
-- Indexes for table `aturan_presensi`
--
ALTER TABLE `aturan_presensi`
  ADD PRIMARY KEY (`id_aturan`);

--
-- Indexes for table `jabatan`
--
ALTER TABLE `jabatan`
  ADD PRIMARY KEY (`id_jabatan`);

--
-- Indexes for table `karyawan`
--
ALTER TABLE `karyawan`
  ADD PRIMARY KEY (`id_karyawan`),
  ADD KEY `jabatan` (`jabatan`),
  ADD KEY `unit` (`unit`);

--
-- Indexes for table `presensi`
--
ALTER TABLE `presensi`
  ADD PRIMARY KEY (`id_presensi`);

--
-- Indexes for table `shift`
--
ALTER TABLE `shift`
  ADD PRIMARY KEY (`id_shift`);

--
-- Indexes for table `unit`
--
ALTER TABLE `unit`
  ADD PRIMARY KEY (`id_unit`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aturan_lokasi`
--
ALTER TABLE `aturan_lokasi`
  MODIFY `id_aturan_lokasi` tinyint(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `aturan_presensi`
--
ALTER TABLE `aturan_presensi`
  MODIFY `id_aturan` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jabatan`
--
ALTER TABLE `jabatan`
  MODIFY `id_jabatan` tinyint(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `presensi`
--
ALTER TABLE `presensi`
  MODIFY `id_presensi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shift`
--
ALTER TABLE `shift`
  MODIFY `id_shift` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `unit`
--
ALTER TABLE `unit`
  MODIFY `id_unit` smallint(6) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `karyawan`
--
ALTER TABLE `karyawan`
  ADD CONSTRAINT `jabatan` FOREIGN KEY (`jabatan`) REFERENCES `jabatan` (`id_jabatan`),
  ADD CONSTRAINT `unit` FOREIGN KEY (`unit`) REFERENCES `unit` (`id_unit`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
