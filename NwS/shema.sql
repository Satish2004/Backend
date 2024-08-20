
use first_app;

CREATE TABLE USER(
id varchar(50) unique,
username varchar(50) unique,
email varchar(50) unique not null,
password varchar(50) not null

);
show tables;