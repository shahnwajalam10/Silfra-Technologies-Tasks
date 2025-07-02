DROP DATABASE IF EXISTS todo_app;
CREATE DATABASE todo_app;
USE todo_app;

CREATE TABLE `todos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `completed` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

INSERT INTO `todos` VALUES 
(1,'Learn Node.js',NULL),
(2,'Build API',NULL),
(3,'Good',0);
