create table users(
  user_id serial NOT NULL PRIMARY KEY,
  user_name varchar(30) NOT NULL
);

create table contacts(
  contact_id serial NOT NULL PRIMARY KEY,
  contact_tel int NOT NULL,
  contact_email varchar(30) NOT NULL,
  user_id int not null REFERENCES users(user_id)
);

insert INTO users(user_name) VALUES ('Bahodir'), ('G''ayrat'), ('Jahongir');
insert INTO contacts(user_id, contact_tel, contact_email) VALUES 
(2, 990125264, 'email3'),
(2, 990125264, 'email3'),
(2, 990125264, 'email4'),
(3, 990125264, 'email5')
;

select
  u.user_name as name,
  count(c.contact_tel) as telephone,
  count(c.contact_email) as email
from
  users as u
join contacts as c using(user_id)
group by
  u.user_id
;

