create table students (
	student_id serial not null primary key,
	student_name varchar(20) not null
);

create table attendance (
	att_id serial not null primary key,
  student_id int not null references students(student_id),
	att_date date not null
);


insert into students (student_name) values ('Jakhongir'), ('Bahodir'), ('Abduqodir'), ('Behzod');
insert into attendance (student_id, att_date) values (1, '2020-01-19'), (1, '2020-03-02'), (1, '2020-02-20');
insert into attendance (student_id, att_date) values (2, '2020-01-23'), (2, '2020-02-06'), (2, '2020-03-20');
insert into attendance (student_id, att_date) values (3, '2020-01-01'), (3, '2020-02-08'), (3, '2020-03-06');
insert into attendance (student_id, att_date) values (4, '2020-01-23'), (4, '2020-01-24'), (4, '2020-02-18');


create or replace function att(student_id int) returns table(
	student_name varchar,
	att_date int
) language plpgsql as $$
	
  begin
		return query 

    select students.name, count(attendance.att_date),
      case
        when student_id is not null then true
      end;

		from students
    left join
      attendance on attendance.att_id = students.student_id
	end;
$$;




STUDENTS

	STUDENT_ID
	STUDENT_NAME

ATTENDANCE
	ATT_ID
	STUDENT_ID
	ATT_DATE


SELECT * from att(0, true)

STUDENT		|	ATTENDANCE
------------------------------
MUHAMMAD	|	20
BOBUR			|	18
JAVOHIR		|	4
BEGZOD		|	2
JAXONGIR	|	0
SAID			|	0

SELECT * from att(1, true)

STUDENT		|	ATTENDANCE
------------------------------
MUHAMMAD	|	20


SELECT * from att(1, false)

STUDENT		|	ATTENDANCE
------------------------------
MUHAMMAD	|	2020-01-01
MUHAMMAD	|	2020-01-02
MUHAMMAD	|	2020-01-03