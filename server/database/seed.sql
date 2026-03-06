--
-- PostgreSQL database dump
--

-- Dumped from database version 18.3 (Homebrew)
-- Dumped by pg_dump version 18.3 (Homebrew)

--
-- Data for Name: customers; --

INSERT INTO public.customers (id, name, phone, email, address) VALUES (1, 'Sarah Johnson', '706-555-1023', 'sarah.johnson@email.com', '123 Oak St');
INSERT INTO public.customers (id, name, phone, email, address) VALUES (2, 'Mike Thompson', '706-555-2045', 'mike.thompson@email.com', '78 Pine Ridge Rd');
INSERT INTO public.customers (id, name, phone, email, address) VALUES (3, 'Emily Carter', '706-555-7781', 'emily.carter@email.com', '442 Maple Ave');


--
-- Data for Name: employees; 
--

INSERT INTO public.employees (id, name, phone, email) VALUES (1, 'Carlos Ramirez', '706-555-3001', 'carlos@company.com');
INSERT INTO public.employees (id, name, phone, email) VALUES (2, 'Jake Miller', '706-555-3002', 'jake@company.com');
INSERT INTO public.employees (id, name, phone, email) VALUES (3, 'Anthony Davis', '706-555-3003', 'anthony@company.com');


--
-- Data for Name: job_status; --

INSERT INTO public.job_status (id, name) VALUES (1, 'quoted');
INSERT INTO public.job_status (id, name) VALUES (2, 'accepted');
INSERT INTO public.job_status (id, name) VALUES (3, 'not_accepted');
INSERT INTO public.job_status (id, name) VALUES (4, 'in_progress');
INSERT INTO public.job_status (id, name) VALUES (5, 'completed');


--
-- Data for Name: jobs; 
--

INSERT INTO public.jobs (id, customer_id, scheduled_date, status, notes) VALUES (4, 1, '2026-03-10', 4, 'Interior repaint living room');
INSERT INTO public.jobs (id, customer_id, scheduled_date, status, notes) VALUES (5, 2, '2026-03-12', 1, 'Quoted exterior repaint');
INSERT INTO public.jobs (id, customer_id, scheduled_date, status, notes) VALUES (6, 3, '2026-03-15', 2, 'Pressure wash driveway and walkway');



--
-- Data for Name: services; 
--

INSERT INTO public.services (id, name, description, base_price) VALUES (1, 'Interior Painting', 'Full interior wall painting', 1200);
INSERT INTO public.services (id, name, description, base_price) VALUES (2, 'Exterior Painting', 'Exterior house painting', 2500);
INSERT INTO public.services (id, name, description, base_price) VALUES (3, 'Pressure Washing', 'Driveway and siding pressure washing', 250);
INSERT INTO public.services (id, name, description, base_price) VALUES (4, 'Deck Staining', 'Clean and stain deck', 450);
INSERT INTO public.services (id, name, description, base_price) VALUES (5, 'Interior Painting', 'Full interior wall painting', 1200);
INSERT INTO public.services (id, name, description, base_price) VALUES (6, 'Exterior Painting', 'Exterior house painting', 2500);
INSERT INTO public.services (id, name, description, base_price) VALUES (7, 'Pressure Washing', 'Driveway and siding pressure washing', 450);
INSERT INTO public.services (id, name, description, base_price) VALUES (8, 'Deck Staining', 'Clean and stain deck', 450);



--
-- PostgreSQL database dump complete
--


