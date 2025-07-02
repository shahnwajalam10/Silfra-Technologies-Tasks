DROP DATABASE IF EXISTS blog_app;
CREATE DATABASE blog_app;
USE blog_app;

CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `author` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

INSERT INTO `posts` VALUES 
(1,'First Blog Post','This is my first blog post','Shahnwaj','2025-06-26 17:22:48');
