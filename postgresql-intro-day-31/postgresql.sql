-- Postgresql Intro:

-- : Bu comment qoldirish
-- \! : Terminal commandalarini yozishimiz mumkin, masalan: \! cls
-- \du : Userlarni ko'rsatib beradi
-- \q : quit
-- \l : list of all databases
-- \c : connect to Database



-- Create role or user:
create role abduqodir;

-- Delete role or user:
drop role abduqodir;

-- Create database:
create database my_app;

-- Delete database:
drop database my_app;

-- Databasega kirib olish xuddi login qilgandek:
psql -U abduqodir -d postgres -h localhost -W

-- parol va login qilaoladigan user yasash:
create role with abduqodir with login encrypted password '123';

-- login va database yasaoladigan user yasash:
create role with abduqodir with createdb login encrypted password '123';

-- login, database, superuser, va role yasab oladigan user:
create role with abduqodir with createdb superuser createrole login encrypted password '123';


