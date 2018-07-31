DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(7,2) NOT NULL,
  stock_quantity INT(10)default 0 NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Micro USB Cable", "Electronics", 8.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Portable Battery Charger", "Electronics", 29.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Pro 2018", "Computers", 1499.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("4-Person Tent", "Outdoors", 249.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hammock", "Outdoors", 49.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ray Bans", "Accessories", 149.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Leather Wallet", "Accessories", 19.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Headphones", "Audio", 129.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wireless Mouse", "Electronics", 49.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Snowboard Helmet", "Outdoors", 99.99, 150);