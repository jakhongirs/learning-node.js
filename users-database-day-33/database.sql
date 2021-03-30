create database bootcamp_3;

create table users (
  id serial not null primary key,
  first_name varchar(20) not null,
  last_name varchar(20) not null,
  middle_name varchar(20),
  is_married boolean default false,
  birthday date
);

insert into users (first_name, last_name, middle_name, is_married, birthday) values 
('Jakhongir', 'Sagdullaev', null, false, '1998-12-31'),
('Bahodir', 'Rajabov', null, false, '2005-07-15'),
('Behzod', 'Rafiqov', 'Botirovich', false, '1999-08-05'),
('MuhammadBobur', 'Sharofov', 'Abdulatif o''g''li', false, '2002-01-20'),
('Javohir', 'Nizomiddinov', null, false, '1998-04-23'),
('Abduqodir', 'Turg''uno''v', null, false, '1999-11-18'),
('Javohir', 'Chagabayev', null, true, '1993-11-11'),
('G''ayrat', 'Yo''ldoshev', null, false, '2001-01-01'),
('MuhammadBobur', 'Hamidullayev', 'Umar o''g''li', false, '2002-10-31'),
('Sardor', 'Abdurasulo''v', 'Sobir o''gli', false, '2001-03-14'),
('Dildora', 'Yo''ldosheva', null, true, '2001-10-28'),
('Shirin', 'Rasulova', null, false, '2002-10-02')
;

select * from users where middle_name is null;

select * from users where to_char(now(),'YYYY')::integer - to_char(birthday,'YYYY')::integer < 20;