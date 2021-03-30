create table users (
  user_id serial not null primary key,
  user_name varchar(30) not null
);

create table teachers (
  teacher_id serial not null primary key,
  teacher_experience smallint,
  user_id int not null references users(user_id)
);

create table students (
  student_id serial not null primary key,
  student_score smallint,
  user_id int not null references users(user_id)
);

create unique index user_uniq_idx on users( lower(user_name) );

insert into users (user_name) values ('Bahodir');
insert into users (user_name) values ('Jahongir');
insert into users (user_name) values ('Javohir');
insert into users (user_name) values ('Muhammadjavohir');

insert into teachers (teacher_experience, user_id) values (10, 4);
insert into students (student_score, user_id) values (0, 1), (0, 2), (0, 3);

select
  t.teacher_id,
  t.teacher_experience,
  u.user_name
from
  teachers as t
join
  users as u on u.user_id = t.user_id
;

select
  s.student_id,
  s.student_score,
  u.user_name
from
  students as s
join
  users as u on u.user_id = s.user_id
;

select
  u.user_name,
  t.teacher_experience
from
  users as u
left join
  teachers as t on t.user_id = u.user_id
;

select
  u.user_name,

  case
    when t.teacher_experience is not null then true
  end as is_teacher,

  case
    when s.student_score is not null then true
  end as is_student

from
  users as u
left join
  teachers as t on t.user_id = u.user_id
left join
  students as s on s.user_id = u.user_id
order by
  is_teacher,
  t.teacher_experience
;