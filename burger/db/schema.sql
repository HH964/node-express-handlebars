create database burgers_db;
use burgers_db;

create table burgers (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

use burgers_db;
INSERT INTO burgers (burger_name, devoured) values ('Hamburger', false);
INSERT INTO burgers (burger_name, devoured) values ('Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured) values ('Bacon ', false);


use burgers_db;
select * from burgers;