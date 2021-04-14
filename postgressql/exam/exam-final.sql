-- Task 1:

-- Square Function:
create or replace function square_fn(x int) returns int language plpgsql as $$
  begin
      return (
       x * x
      );
  end;
$$;

select square_fn(2)

-- Power of Function:
create or replace function power_fn(x int) returns int language plpgsql as $$
  begin
      return (
       x * x * x
      );
  end;
$$;

select power_fn(2)

-- Nth function:
create or replace function nth_fn(x int) returns varchar language plpgsql as $$
  begin
       
      if(x % 2 = 0) then
      return 'even';

      elsif(x % 2 <> 0) then
      return 'odd';

      end if;
      
  end;
$$;

select nth_fn(2)

-- Task 2:
create or replace function trigger() returns trigger language plpgsql as $$

  begin

    if(
        select
        user_id
        from
        users as u where lower(u.user_username) = lower(NEW.user_username)
    ) is null then
    return NEW;

    end if;
    return null;

  end;

$$;

create trigger triggs before insert on users for each row execute procedure trigger();

-- Task 3:
SELECT
  u.user_id as id,
  u.user_username as username,
  (
		select
		sum(s.score_amount)
		from
		score as s
		where s.user_id = u.user_id  AND s.score_type = 1
	) -
	(
		select
		sum(s.score_amount)
		from
		score as s
		where s.user_id = u.user_id  AND s.score_type = 0
	)
	as score
from
  users as u
join
  score as s using(user_id)
group by
  u.user_id
order by
	u.user_username
;




