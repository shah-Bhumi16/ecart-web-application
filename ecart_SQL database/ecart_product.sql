-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: ecart
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (4,'Red color pure cotton kurti','Red color kurti',800,18,'assets\\images\\red_kurti.jpg','Cotton kurti'),(7,'Gray simple silk kurti','Gray kurti',500,25,'assets\\images\\gray_kurti.jpg','Cotton kurti'),(8,'Orange heavy silk  kurti ','Orange silk kurti',1000,13,'assets\\images\\orange_kurti.jpg','Silk kurti'),(9,'Yellow color simple silk kurti','Yellow color kurti',400,5,'assets\\images\\yellow_kurti.jpg','Cotton kurti'),(10,'Jaipuri cotton gown style kurti','Jaipuri gownstyle kurti',900,5,'assets\\images\\gownstyle_kurti1.jpg','Gownstyle kurti'),(11,'Green simple long cotton floral kurti','Green kurti',450,12,'assets\\images\\green_kurti.jpg','Cotton kurti'),(12,'Pink color simple silk kurti','Pink kurti',500,15,'assets\\images\\pink_kurti.jpg','Cotton kurti'),(13,'Printed cotton simple silk kurti','Printed kurti',300,20,'assets\\images\\printed_kurti.jpg','Gownstyle kurti'),(14,'Gown style floral length kurti ','Gownstyle kurti',450,10,'assets\\images\\gownstyle.jpg','Gownstyle kurti'),(15,'Dark Red color pure cotton kurti ','Dark Red kurti',600,10,'assets\\images\\darkred_kurti.jpg','Silk kurti'),(16,'Black simple pure cotton kurti','Black kurti',700,0,'assets\\images\\black_kurti.jpg','Cotton kurti'),(17,'Long Neon Green latest color cotton kurti','Neon Green cotton kurti',900,15,'assets\\images\\neongreen_kurti.jpg','Cotton kurti'),(18,'Silk Red floral kurti','Red silk floral kurti',1000,20,'assets\\images\\silk_kurti.jpg','Silk kurti'),(19,'Long blue cotton kurti','Long Blue kurti',800,19,'assets\\images\\long_kurti.jpg','Gownstyle kurti');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-04 11:13:11
