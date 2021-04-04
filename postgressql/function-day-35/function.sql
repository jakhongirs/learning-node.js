create function find_age(userage varchar) returns int language plpgsql as $$
  begin
      return (
       TO_CHAR(now(), 'YYYY')::smallint - TO_CHAR(userage::date, 'YYYY')::smallint || ' years ' || 
       TO_CHAR(now(), 'MM')::smallint - TO_CHAR(userage::date, 'MM')::smallint || ' months ' || 
       TO_CHAR(now(), 'DD')::smallint - TO_CHAR(userage::date, 'DD')::smallint || ' days'
      );
  end;
$$;

select find_age('1990-01-01');