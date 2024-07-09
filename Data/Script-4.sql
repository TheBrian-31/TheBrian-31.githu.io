-- public.door definition

-- Drop table

-- DROP TABLE public.door;

CREATE TABLE public.door (
	id int4 NOT NULL,
	"name" varchar(255) NULL,
	CONSTRAINT door_pkey PRIMARY KEY (id)
);


-- public.history definition

-- Drop table

-- DROP TABLE public.history;

CREATE TABLE public.history (
	n_house int4 NULL,
	time_entry timestamp(6) NULL,
	id uuid NOT NULL,
	door varchar(255) NULL,
	user_permitted varchar(255) NULL,
	visitor varchar(255) NULL,
	CONSTRAINT history_pkey PRIMARY KEY (id)
);


-- public.house definition

-- Drop table

-- DROP TABLE public.house;

CREATE TABLE public.house (
	capacity int4 NULL,
	n_house int4 NULL,
	id uuid NOT NULL,
	CONSTRAINT house_n_house_key UNIQUE (n_house),
	CONSTRAINT house_pkey PRIMARY KEY (id)
);


-- public.rol definition

-- Drop table

-- DROP TABLE public.rol;

CREATE TABLE public.rol (
	id varchar(255) NOT NULL,
	rol varchar(255) NULL,
	CONSTRAINT rol_pkey PRIMARY KEY (id)
);


-- public.state definition

-- Drop table

-- DROP TABLE public.state;

CREATE TABLE public.state (
	id varchar(255) NOT NULL,
	state varchar(255) NULL,
	CONSTRAINT state_pkey PRIMARY KEY (id)
);


-- public."user" definition

-- Drop table

-- DROP TABLE public."user";

CREATE TABLE public."user" (
	created_at timestamptz(6) NULL,
	id uuid NOT NULL,
	dui varchar(255) NULL,
	email varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT user_dui_key UNIQUE (dui),
	CONSTRAINT user_email_key UNIQUE (email),
	CONSTRAINT user_pkey PRIMARY KEY (id)
);


-- public."permission" definition

-- Drop table

-- DROP TABLE public."permission";

CREATE TABLE public."permission" (
	date_time_application timestamp(6) NULL,
	date_time_end timestamp(6) NULL,
	date_time_start timestamp(6) NULL,
	unique_entry timestamp(6) NULL,
	house_id uuid NULL,
	id uuid NOT NULL,
	user_permitted_id uuid NULL,
	user_petition_id uuid NULL,
	visitor_id uuid NULL,
	state_id varchar(255) NULL,
	days_week _varchar NULL,
	CONSTRAINT permission_pkey PRIMARY KEY (id),
	CONSTRAINT "FK190pwm6xrpunijowauc1loqq2" FOREIGN KEY (visitor_id) REFERENCES public."user"(id),
	CONSTRAINT "FK5blwr2aagc1t4wmdao8cft96u" FOREIGN KEY (user_permitted_id) REFERENCES public."user"(id),
	CONSTRAINT "FK91xbgicmeahjv83kv4minsvxs" FOREIGN KEY (state_id) REFERENCES public.state(id),
	CONSTRAINT "FK9wv33lb69gqlx0a3xhxymqo5m" FOREIGN KEY (house_id) REFERENCES public.house(id),
	CONSTRAINT "FKq4ajgyolc8km9mcyfgm0qcgwd" FOREIGN KEY (user_petition_id) REFERENCES public."user"(id)
);


-- public."token" definition

-- Drop table

-- DROP TABLE public."token";

CREATE TABLE public."token" (
	state bool NULL,
	time_passed timestamp(6) NULL,
	id uuid NOT NULL,
	permission_id uuid NULL,
	hash varchar(255) NULL,
	CONSTRAINT token_pkey PRIMARY KEY (id),
	CONSTRAINT "FKdhund9tjnskx4c9kjga9u1e3u" FOREIGN KEY (permission_id) REFERENCES public."permission"(id)
);


-- public.userx_house definition

-- Drop table

-- DROP TABLE public.userx_house;

CREATE TABLE public.userx_house (
	house_id uuid NOT NULL,
	user_id uuid NOT NULL,
	CONSTRAINT "FKad8hruh4mnathtbpcsl5r2cnk" FOREIGN KEY (house_id) REFERENCES public.house(id),
	CONSTRAINT "FKrnhqne2mpckwjxxvxog6s4ubu" FOREIGN KEY (user_id) REFERENCES public."user"(id)
);


-- public.userx_role definition

-- Drop table

-- DROP TABLE public.userx_role;

CREATE TABLE public.userx_role (
	user_id uuid NOT NULL,
	role_id varchar(255) NOT NULL,
	CONSTRAINT "FKqjcxqj6t23vy5efnlp87wq91j" FOREIGN KEY (role_id) REFERENCES public.rol(id),
	CONSTRAINT "FKrofl7d8o4dbj0jeyi50db1b0w" FOREIGN KEY (user_id) REFERENCES public."user"(id)
);


-- public.income definition

-- Drop table

-- DROP TABLE public.income;

CREATE TABLE public.income (
	door_id int4 NULL,
	date_time timestamp(6) NULL,
	id uuid NOT NULL,
	token_id uuid NULL,
	CONSTRAINT income_pkey PRIMARY KEY (id),
	CONSTRAINT "FKj1jukfmc6mmwwiuw9v8ipgtx0" FOREIGN KEY (door_id) REFERENCES public.door(id),
	CONSTRAINT "FKl8qje9nepnvb1fflquopjicdw" FOREIGN KEY (token_id) REFERENCES public."token"(id)
);

INSERT INTO public.rol
(id, rol)
VALUES('ADMN', 'administrador');
INSERT INTO public.rol
(id, rol)
VALUES('VIGI', 'vigilante');
INSERT INTO public.rol
(id, rol)
VALUES('REEN', 'residente encargado');
INSERT INTO public.rol
(id, rol)
VALUES('RESI', 'residente');
INSERT INTO public.rol
(id, rol)
VALUES('VISI', 'visitante');


INSERT INTO public.state
(id,state)
VALUES('APRO','Aprovado');
INSERT INTO public.state
(id,state)
VALUES('RECH','Rechazado');
INSERT INTO public.state
(id,state)
VALUES('PEND','Pendiente');