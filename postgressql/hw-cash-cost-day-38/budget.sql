create table cash (
  cash_id serial not null primary key,
  cash_amount int not null,
  cash_desc varchar(30) not null,
  cash_date date default current_date not null
);

create table cost (
  cost_id serial not null primary key,
  cost_amount int not null,
  cost_desc varchar(30) not null,
  cost_date date default current_date not null
);


insert into cash(cash_amount, cash_desc, cash_date) VALUES 
(200000, 'parents', '2021-01-01'),
(900000, 'project', '2021-01-25')
;

insert into cash(cash_amount, cash_desc, cash_date) VALUES 
(1000000, 'Qarz berdi', '2021-02-01'),
(1200000, 'Qarz berdi 2', '2021-02-25')
;

insert into cost(cost_amount, cost_desc, cost_date) VALUES 
(40000, 'book', '2021-02-05'),
(600000, 'daily costs', '2021-02-28')
;

select
  to_date(cash_date,'mon') as birbalo, 
  sum(cash_amount) as cash
from
  cash
group by
  to_char(cash_date,'MM')
; 