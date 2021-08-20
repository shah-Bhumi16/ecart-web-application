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
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `otp` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKt606w44qrdbvqy8lk0x3kb0se` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (52,'Ishani','Ahmedabad','ishani@gmail.com','NDzzI8hYslAzrYQCfCHiGQ==',NULL),(53,'Nobita','Bombay','nobita@gmail.com','eMNctdbeq3aWYFulMaZaFQ==',NULL),(54,'Bhumi Shah','Ahmedabad','bhumishah770@gmail.com','H2cm5j4qX/LMSjqpzA2tJg==',NULL),(55,'Anish Khandelwal','Mehsana','anishkhandelwal144@gmail.com','PsTIkatOmi5yOHhcb6mn6w==',NULL),(56,'Pradip Shah','Baroda','pradip30shah@gmail.com','LRhGk6f+0UEYxJEBMMzk0w==',NULL),(57,'Jia Shah','Bombay','jia@gmail.com','Zbo+esJvqOGrtoo2yElnzA==',NULL),(58,'Doremon','Bombay','doremon@gmail.com','8KkUJbz+ZLg7F7+Yl0Vl3Q==',NULL),(59,'Mickey Mouse','Ahmedabad','mickey@gmail.com','Kqyg6DnCoNKBiO2rTQh3sA==',NULL),(60,'Shinchan','Baroda','sinchan@gmail.com','4/SziiKGlK+GPIXwgtcDXw==',NULL),(62,'nisha','baroda','nisha@gmail.com','OjxLqVyChyNp2SiopcmZcw==',NULL),(65,'Isha','baroda','isha@gmail.com','GS7HqimTEYriBaUw6Pz2oQ==',NULL),(66,'Vishwa','Ahmedabad','vishwa123@gmail.com','Fuurlow6ujyD8fK509ND/A==',NULL),(67,'Nita','Ahmedabad','nita123@gmail.com','eu67uf2N1PVSI3vfCq2l9w==',NULL),(68,'Ishan','Bombay','ishan@gmail.com','LeGBKcgc3dJBhCIOHA4OFg==',NULL);
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-04 11:13:10
