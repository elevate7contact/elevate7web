-- Tabla de sesiones pagadas confirmadas
create table public.bookings (
  id                uuid primary key default gen_random_uuid(),
  stripe_session_id text unique not null,
  customer_email    text,
  plan              text not null,       -- '30min' | '60min'
  amount            integer not null,    -- en centavos USD
  event_uri         text,               -- URI del evento en Calendly
  invitee_uri       text,               -- URI del invitado en Calendly
  status            text default 'confirmed',
  created_at        timestamptz not null default now()
);

alter table public.bookings enable row level security;

create policy "Service role can manage bookings"
  on public.bookings for all
  using (auth.role() = 'service_role');

-- Tabla de leads / contactos desde la landing page
create table public.leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  company     text,
  service     text,
  message     text,
  created_at  timestamptz not null default now()
);

-- Índice para buscar por email rápido
create index leads_email_idx on public.leads (email);

-- Row Level Security: nadie puede leer/modificar desde el cliente
-- solo insertar (el formulario solo hace INSERT)
alter table public.leads enable row level security;

create policy "Allow public insert"
  on public.leads for insert
  with check (true);

-- Solo el service role (backend/dashboard) puede leer
create policy "Service role can read"
  on public.leads for select
  using (auth.role() = 'service_role');
