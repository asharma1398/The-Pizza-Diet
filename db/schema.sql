-- drop, create and use database 
DROP DATABASE IF EXISTS pizzaDB;
CREATE DATABASE pizzaDB;
USE pizzaDB;

-- pizza table
CREATE TABLE pizza (
    id INT AUTO_INCREMENT NOT NULL,
    pizza_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE, 
    PRIMARY KEY(id)
); 