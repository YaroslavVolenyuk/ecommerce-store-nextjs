CREATE TABLE bikes (
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name varchar(30) NOT NULL,
type varchar(30) NOT NULL,
price varchar(10) NOT NULL,
material varchar(20),
weight varchar(10),
rating varchar(10),
description varchar(500) NOT NULL
);
