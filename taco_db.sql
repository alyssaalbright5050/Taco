
CREATE DATABASE burger_db;
USE nnfdmq3uyaou6uh9;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO burgers (burger_name) VALUES ('Bacon Taco');

INSERT INTO burgers (burger_name) VALUES ('Shrimp Taco');

INSERT INTO burgers (burger_name) VALUES ('Mushroom Taco');