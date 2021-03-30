-- 1 table
create table languages (
  language_id serial not null primary key,
  language_name varchar(20) not null
);

-- 2 table
create table users (
  user_id serial not null primary key,
  user_name varchar(20) not null
);

insert into languages(language_name) values ('UZ'), ('RU'), ('TR'), ('EN');

insert into users(user_name) values ('Bahodir'), ('Jakhongir'), ('Javohir'), ('Umar');

-- 3 table
create table knowledge (
  knowledge_id serial not null primary key,
  user_id int not null references users(user_id),
  language_id int not null references languages(language_id)
);

insert into knowledge(user_id, language_id) values (1, 1), (1, 4);
insert into knowledge(user_id, language_id) values (2, 1), (2, 2), (2, 4);

select
  u.user_name as name
from
  users as u
join
  knowledge as k on k.user_id = u.user_id
;