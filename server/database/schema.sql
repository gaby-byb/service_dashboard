-- Tables

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  phone VARCHAR(50),
  email VARCHAR(255),
  address VARCHAR(255)
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  phone VARCHAR(50),
  email VARCHAR(255)
);

CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  base_price DECIMAL
);

CREATE TABLE job_status (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(id),
  scheduled_date DATE,
  status INT REFERENCES job_status(id),
  notes VARCHAR(255)
);

CREATE TABLE job_employees (
  id SERIAL PRIMARY KEY,
  job_id INT REFERENCES jobs(id),
  employee_id INT REFERENCES employees(id)
);

CREATE TABLE job_services (
  id SERIAL PRIMARY KEY,
  job_id INT REFERENCES jobs(id),
  service_id INT REFERENCES services(id),
  price DECIMAL
);

CREATE TABLE invoices (
  id SERIAL PRIMARY KEY,
  job_id INT REFERENCES jobs(id),
  amount DECIMAL,
  paid BOOLEAN
);