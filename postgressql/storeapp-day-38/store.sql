--Create Tables
create table products (
  product_id serial not null primary key,
  product_name varchar(30) not null,
  product_price decimal(10, 2)
);

create table deposit (
  deposit_id serial not null primary key,
  deposit_count int default 0,
  deposit_date date default current_date,
  product_id int not null references products(product_id)
);

create table sell (
  sell_id serial not null primary key,
  sell_amount int not null,
  sell_date date default current_date,
  product_id int not null references products(product_id)
);

--Adding Data to Products
insert into products(product_name, product_price) VALUES 
('Tarvuz', 15000),
('Qovun', 13800)
;

insert into products(product_name, product_price) VALUES 
('Olma', 20000),
('Mandarin', 50000)
;

--Adding Data to Deposit
insert into deposit(deposit_count, product_id) VALUES 
(10, 1), --10ta qo'shgin 1chi id lik productdan. ya'ni tarvuzdan 10ta qo'sh.
(20, 2),
(100, 4)
;

insert into deposit(deposit_count, product_id) VALUES 
(30, 1) --tarvuzga yana 10ta qo'sh
;

--Nimadan nechta borligini chiqorish:
select
  p.product_name as name,
  sum(d.deposit_count) as count
from
  deposit as d
join
  products as p using(product_id)
group by
  p.product_id
;

--Selling product:
insert into sell(sell_amount, product_id) VALUES 
(4, 1),--tarvuzni biz sotdik
(2, 1),
(5, 4)
;

--Nimadan qancha sotilganini chiqorish
SELECT
  p.product_name as product,
  p.product_price as price,
  sum(s.sell_amount) as amount,
  sum(s.sell_amount) * p.product_price as total_price
from
  sell as s
join
  products as p using(product_id)
group by
  p.product_id
;

-- Having bu group by dan keyin ishlaydi ya'ni uje gruppalangan narsani olishimiz uchun.
SELECT
  p.product_name as product,
  p.product_price as price,
  sum(s.sell_amount) as amount,
  sum(s.sell_amount) * p.product_price as total_price
from
  sell as s
join
  products as p using(product_id)
group by
  p.product_id
having
  sum(s.sell_amount) * p.product_price > 100000
;


--Topshiriq:
create table users (
  user_id serial not null primary key,
  user_name varchar(30) not null
);

create table contacts (
  contact_id serial not null primary key,
  contact_tel int,
  contact_email varchar(30),
  user_id int not null references users(user_id)
);

insert INTO users(user_name) VALUES ('Jakhongir'), ('Bahodir'), ('G''ayrat');

insert INTO contacts(user_id, contact_tel, contact_email) VALUES 
(1, 990171448, 'j.sagdullaev31@gmail.com'), 
(2, 996648898, 'bdevpro@gmail.com'),
(3, 910121558, 'gayrat@gmail.com') 
;

insert INTO contacts(user_id, contact_email) VALUES 
(1, 'j.sagdullaevstudent@wiut.uz')
;

SELECT
  u.user_name as name,
  count(c.contact_tel) + count(c.contact_email) as total_contacts
from
  contacts as c
join
  users as u using(user_id)
group by
  u.user_id
;

