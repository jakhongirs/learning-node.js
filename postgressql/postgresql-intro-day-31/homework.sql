create table users (
  id serial,
  first_name varchar(20),
  last_name varchar(20),
  username varchar(20),
  password int,
  birth varchar(20)
);

--Insert:
insert into users (first_name, last_name, username, password, birth) values ('Jakhongir', 'Sagdullaev', 'jakhongir_codes', 3112, '1998.12.31');