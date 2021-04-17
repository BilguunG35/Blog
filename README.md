# Blog
C20IO1006 Group-1 Г.Билгүүн

npm-s node_modules tataj avah;

package.json file deer baigaa nemelt ugugdliig tataj suulgah;


MySQL  
database - users;

create table login(
id int not null auto_increment,
firstname varchar(100),
lastname varchar(100),
username varchar(100),
email varchar(100),
password varchar(50));


create table content(
id int not null auto_increment,
title varchar(300) not null,
highlight varchar(350),
body longtext not null,
image varchar(300),
primary key (id));
