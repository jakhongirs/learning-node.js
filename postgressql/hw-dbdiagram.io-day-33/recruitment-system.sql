create table agencies (
  agency_id serial not null primary key,
  agency_name varchar(20) not null,
  agency_location varchar(20) not null
);

create table companies (
  company_id serial not null primary key,
  company_name varchar(20) not null,
  agency_id int not null references agencies(agency_id)
);

create table jobs (
  job_id serial not null primary key,
  job_name varchar(20) not null,
  job_description varchar(20) not null,
  job_salary varchar(20) not null,
  company_id int not null references companies(company_id)
);

create table job_categories (
  job_category_id serial not null primary key,
  job_category varchar(20) not null,
  job_id int not null references jobs(job_id)
);

create table location (
  location_id serial not null primary key,
  location_name varchar(20) not null,
  company_id int not null references companies(company_id),
  job_id int not null references jobs(job_id)
);

create table employees (
  employer_id serial not null primary key,
  employer_name varchar(20) not null,
  employer_last_name varchar(20) not null,
  employer_middle_name varchar(20) not null,
  employer_address varchar(20) not null,
  employer_birth_day date not null,
  job_category int not null references job_categories(job_category_id)
);