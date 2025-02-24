create table exchanges (
    id bigint primary key generated always as identity,
    user_id uuid references profiles(id) on delete cascade unique,
    exchange_id text not null,
    api_key text not null,
    api_secret text not null
);

alter table exchanges
  enable row level security;

create policy "Users can select their own exchanges" 
on exchanges 
for select 
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can insert their own exchanges" 
on exchanges 
for INSERT 
to authenticated
WITH CHECK ((select auth.uid()) = user_id);

create policy "Users can update their own exchanges" 
on exchanges 
for UPDATE 
to authenticated
using ((select auth.uid()) = user_id) 
WITH CHECK ((select auth.uid()) = user_id);

create policy "Users can delete their own exchanges" 
on exchanges 
for DELETE 
to authenticated
using ((select auth.uid()) = user_id);