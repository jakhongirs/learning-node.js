create table users (
	id serial not null primary key,
	data json
);

insert into users (data) values ('{"fullname": "Jakhongir", "birthday": "1994-01-01", "schedule": {"x": "true"}}');

insert into users (data) values ('{"fullname": "Bahodir", "birthday": "2005-01-01", "schedule": {"x": "false"}}');

insert into users (data) values ('{"fullname": "Abduqodir", "birthday": "1999-01-01", "schedule": {"x": "true"}}');

select
  data -> 'fullname'

from
	users
WHERE to_char((data ->> 'birthday')::DATE, 'YYYY')::int <= 1999
;

