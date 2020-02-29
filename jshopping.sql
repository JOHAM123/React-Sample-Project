-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: db4free.net    Database: 
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `jshopping_974`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `jshopping_974` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `jshopping_974`;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `description` varchar(30) DEFAULT NULL,
  `image` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Electronics','change your life better','/assets/upload/category/avatar-1.jpg');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feature`
--

DROP TABLE IF EXISTS `feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feature` (
  `feature_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `description` varchar(80) DEFAULT NULL,
  `sub_category_id` int DEFAULT NULL,
  `image` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`feature_id`),
  KEY `sub_category_id` (`sub_category_id`),
  CONSTRAINT `feature_ibfk_1` FOREIGN KEY (`sub_category_id`) REFERENCES `subcategory` (`sub_category_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feature`
--

LOCK TABLES `feature` WRITE;
/*!40000 ALTER TABLE `feature` DISABLE KEYS */;
INSERT INTO `feature` VALUES (1,'Brand','samsung,nokia ..',1,'/assets/upload/category/feature/avatar-4.jpg'),(2,'color','blue green red',1,'/assets/upload/category/feature/avatar-4.jpg'),(3,'processor','i3,i,i7.....',2,'/assets/upload/category/feature/avatar-4.jpg'),(4,'ram','ddr4,ddr3.....',2,'/assets/upload/category/feature/avatar-4.jpg');
/*!40000 ALTER TABLE `feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_details`
--

DROP TABLE IF EXISTS `product_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_details` (
  `product_detail_id` int NOT NULL AUTO_INCREMENT,
  `quantity` float DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `unit_price` float DEFAULT NULL,
  PRIMARY KEY (`product_detail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_details`
--

LOCK TABLES `product_details` WRITE;
/*!40000 ALTER TABLE `product_details` DISABLE KEYS */;
INSERT INTO `product_details` VALUES (2,2323,2,2323),(3,2323,3,2323),(4,23,4,233),(5,23,5,233),(6,23,6,233),(7,23,7,233),(8,23,8,233),(9,23,9,233),(10,23,10,233),(11,23,11,233),(12,23,12,233),(13,23,13,233),(14,23,14,233),(15,23,15,233);
/*!40000 ALTER TABLE `product_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_feature`
--

DROP TABLE IF EXISTS `product_feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_feature` (
  `product_feature_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `feature_Value` varchar(50) DEFAULT NULL,
  `feature_id` int DEFAULT NULL,
  PRIMARY KEY (`product_feature_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_feature`
--

LOCK TABLES `product_feature` WRITE;
/*!40000 ALTER TABLE `product_feature` DISABLE KEYS */;
INSERT INTO `product_feature` VALUES (3,2,'dsds',1),(4,2,'sdsds',2),(5,3,'sdsd',1),(6,3,'dsds',2),(7,4,'dsds',1),(8,4,'sdsdsdsd',2),(9,5,'dsds',1),(10,5,'sdsdsdsd',2),(11,6,'dsds',1),(12,6,'sdsdsdsd',2),(13,7,'dsds',1),(14,7,'sdsdsdsd',2),(15,8,'dsds',1),(16,8,'sdsdsdsd',2),(17,9,'dsds',1),(18,9,'sdsdsdsd',2),(19,10,'dsds',1),(20,10,'sdsdsdsd',2),(21,11,'dsds',1),(22,11,'sdsdsdsd',2),(23,12,'dsds',1),(24,12,'sdsdsdsd',2),(25,13,'dsds',1),(26,13,'sdsdsdsd',2),(27,14,'dsds',1),(28,14,'sdsdsdsd',2),(29,15,'dsds',1),(30,15,'sdsdsdsd',2);
/*!40000 ALTER TABLE `product_feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_image` (
  `prod_image_id` int NOT NULL AUTO_INCREMENT,
  `image_url1` varchar(80) DEFAULT NULL,
  `image_url2` varchar(80) DEFAULT NULL,
  `image_url3` varchar(80) DEFAULT NULL,
  `image_url4` varchar(80) DEFAULT NULL,
  `image_url5` varchar(80) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`prod_image_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_image_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` VALUES (2,'/assets/upload/product/avatar-5.jpg','/assets/upload/product/card-img.jpg','/assets/upload/product/card-img.jpg','/assets/upload/product/card-img-1.jpg',NULL,2),(3,'/assets/upload/product/avatar-2.jpg',NULL,NULL,NULL,NULL,3),(4,'/assets/upload/product/avatar-3.jpg','/assets/upload/product/avatar-3.jpg','/assets/upload/product/bitbucket.png','/assets/upload/product/avatar-1.jpg',NULL,4),(5,'/assets/upload/product/avatar-3.jpg','/assets/upload/product/avatar-3.jpg','/assets/upload/product/bitbucket.png','/assets/upload/product/avatar-1.jpg',NULL,5),(6,'/assets/upload/product/avatar-3.jpg','/assets/upload/product/avatar-3.jpg','/assets/upload/product/bitbucket.png','/assets/upload/product/avatar-1.jpg',NULL,6),(7,'/assets/upload/product/avatar-3.jpg','/assets/upload/product/avatar-3.jpg','/assets/upload/product/bitbucket.png','/assets/upload/product/avatar-1.jpg',NULL,7),(8,'/assets/upload/product/avatar-3.jpg','/assets/upload/product/avatar-3.jpg','/assets/upload/product/bitbucket.png','/assets/upload/product/avatar-1.jpg',NULL,8),(9,'/assets/upload/product/avatar-3.jpg','/assets/upload/product/avatar-3.jpg','/assets/upload/product/bitbucket.png','/assets/upload/product/avatar-1.jpg',NULL,9),(10,'/assets/upload/product/avatar-3.jpg','/assets/upload/product/avatar-3.jpg','/assets/upload/product/bitbucket.png','/assets/upload/product/avatar-1.jpg',NULL,10),(11,'/assets/upload/product/avatar-3.jpg','/assets/upload/product/avatar-3.jpg','/assets/upload/product/bitbucket.png','/assets/upload/product/avatar-1.jpg',NULL,11),(12,'/assets/upload/product/avatar-3.jpg','/assets/upload/product/avatar-3.jpg','/assets/upload/product/bitbucket.png','/assets/upload/product/avatar-1.jpg',NULL,12),(13,'/assets/upload/product/avatar-3.jpg','/assets/upload/product/avatar-3.jpg','/assets/upload/product/bitbucket.png','/assets/upload/product/avatar-1.jpg',NULL,13),(14,'/assets/upload/product/avatar-3.jpg','/assets/upload/product/avatar-3.jpg','/assets/upload/product/bitbucket.png','/assets/upload/product/avatar-1.jpg',NULL,14),(15,'/assets/upload/product/avatar-3.jpg','/assets/upload/product/avatar-3.jpg','/assets/upload/product/bitbucket.png','/assets/upload/product/avatar-1.jpg',NULL,15);
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `description` varchar(30) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `image` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'sds','232',1,'/assets/upload/product/avatar-5.jpg'),(3,'sdsd','sdsd',1,'/assets/upload/product/avatar-4.jpg'),(4,'ddf','2323',1,'/assets/upload/product/avatar-2.jpg'),(5,'ddf','2323',1,'/assets/upload/product/avatar-2.jpg'),(6,'ddf','2323',1,'/assets/upload/product/avatar-2.jpg'),(7,'ddf','2323',1,'/assets/upload/product/avatar-2.jpg'),(8,'ddf','2323',1,'/assets/upload/product/avatar-2.jpg'),(9,'ddf','2323',1,'/assets/upload/product/avatar-2.jpg'),(10,'ddf','2323',1,'/assets/upload/product/avatar-2.jpg'),(11,'ddf','2323',1,'/assets/upload/product/avatar-2.jpg'),(12,'ddf','2323',1,'/assets/upload/product/avatar-2.jpg'),(13,'ddf','2323',1,'/assets/upload/product/avatar-2.jpg'),(14,'ddf','2323',1,'/assets/upload/product/avatar-2.jpg'),(15,'ddf','2323',1,'/assets/upload/product/avatar-2.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategory` (
  `sub_category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `description` varchar(80) DEFAULT NULL,
  `image` varchar(80) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`sub_category_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE,
  CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (1,'Mobiles','communication makes easier','/assets/upload/category/subcategory/card-img.jpg',1),(2,'Laptop','make works efficient and easy','/assets/upload/category/subcategory/avatar-3.jpg',1);
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(80) DEFAULT NULL,
  `lname` varchar(80) DEFAULT NULL,
  `username` varchar(80) DEFAULT NULL,
  `password` varchar(80) DEFAULT NULL,
  `role` int DEFAULT NULL,
  `image` varchar(80) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `address` varchar(80) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `contactno` varchar(80) DEFAULT NULL,
  `state` varchar(80) DEFAULT NULL,
  `country` varchar(80) DEFAULT NULL,
  `pinCode` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'dff','dfd','dfdf','',0,'blob:http://localhost:1234/81ab81a0-991f-4454-ac03-355d30f186e1','df@ds.yh','dfdf',341,'34343','dfgfg','fgf','fgf');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-28 12:32:32
