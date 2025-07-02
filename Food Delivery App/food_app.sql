DROP DATABASE IF EXISTS food_app;
CREATE DATABASE food_app;
USE food_app;

CREATE TABLE `foods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` VALUES 
(1,'John Doe','john@example.com','$2b$10$w9MxApUe.rxHVlvJfsqAuuRLD0UpQxjN0e2qgIkCV4kfhSMH0duy6'),
(2,'nasir','nasir10@gmail.com','$2b$10$bjvqorr6ykz.LnqyG4KyNeAYwpDE1SxW0Zi/697ED9p2ovwpPEONG');
