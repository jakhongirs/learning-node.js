create database university

\c university

create table branches (
  branch_id serial not null primary key,
  branch_name varchar(20) not null,
  branch_location varchar(20) not null
);

create table courses (
  course_id serial not null primary key,
  course_name varchar(20) not null,
  branch_id int not null references branches(branch_id)
);

create table groups (
  group_id serial not null primary key,
  groups_name varchar(20) not null,
  courses_id int not null references courses(course_id),
  branch_id int not null references branches(branch_id)
);

create table students (
  student_id serial not null primary key,
  student_name varchar(20) not null,
  student_last_name varchar(20) not null,
  student_middle_name varchar(20) not null,
  student_address varchar(20) not null,
  student_birth_day date not null,
  groups_id int not null references groups(group_id)
);