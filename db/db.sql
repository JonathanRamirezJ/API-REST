create database api-rest-db;

use api-rest-db;

CREATE TABLE IF NOT EXISTS `users` (
    `id` int(10) NOT NULL  AUTO_INCREMENT,
    `username` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
    `email` VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
    `password` VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `update_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY kEY(id),
    UNIQUE KEY `user_email_unique` (`email`)
);

DESCRIBE users;
