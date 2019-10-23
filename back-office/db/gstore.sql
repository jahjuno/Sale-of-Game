-- MariaDB dump 10.17  Distrib 10.4.8-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: GSTORE
-- ------------------------------------------------------
-- Server version	10.4.8-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Game`
--

DROP TABLE IF EXISTS `Game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Game` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `couverture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categorie` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gameplay` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Game`
--

LOCK TABLES `Game` WRITE;
/*!40000 ALTER TABLE `Game` DISABLE KEYS */;
INSERT INTO `Game` VALUES (1,'Moto-cross 4','public/images/jeux/mt.jpg','Sport, Course','public/videos/moto.mp4'),(2,'Dark Soul 3','public/images/jeux/ds.jpg','Aventure','public/videos/ds.mp4'),(3,'PUBG Mobile','public/images/jeux/pubg.jpg','Action, Strategie','public/videos/pubg.mp4'),(4,'Modern Warfare 3','public/images/jeux/cod.jpg','Action','public/videos/cod.mp4'),(5,'PES 2019','public/images/jeux/pes.jpg','Sport','public/videos/pes.mp4'),(6,'Far Cry 5','public/images/jeux/far.jpg','Action','public/videos/farcry.mp4'),(7,'Blur','public/images/jeux/blur.png','Course','public/videos/blur.mp4'),(8,'GTA 5','public/images/jeux/gta.jpg','Action, Aventure','public/videos/gta.mp4'),(9,'Burnout 3','public/images/jeux/bur.jpg','Course','public/videos/burn.mp4'),(10,'NBA 2K20','public/images/jeux/nba.jpg','Sport','public/videos/nba.mp4'),(11,'Fortnite','public/images/jeux/for.jpg','Action, Strategie','public/videos/fortnite.mp4'),(12,'Euro Truck Simulator 2','public/images/jeux/euro.jpg','Simulation, Aventure','public/videos/euro.mp4');
/*!40000 ALTER TABLE `Game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Membre`
--

DROP TABLE IF EXISTS `Membre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Membre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Prenom` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Mail` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Phone` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_connected` tinyint(4) NOT NULL DEFAULT 0,
  `Admin` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Membre`
--

LOCK TABLES `Membre` WRITE;
/*!40000 ALTER TABLE `Membre` DISABLE KEYS */;
INSERT INTO `Membre` VALUES (9,'AAA','Aaaaa','aa@aaa.aa','0325398496','e93b4e3c464ffd51732fbd6ded717e9efda28aad',0,0),(10,'BAKARY','Gaetan Jonathan','gaetan@esti.mg','0325398496','7c222fb2927d828af22f592134e8932480637c0d',0,0);
/*!40000 ALTER TABLE `Membre` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-23 19:07:47
