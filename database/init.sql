\c salary_db;

CREATE TABLE IF NOT EXISTS prediction (
    id SERIAL PRIMARY KEY,
    experience INT NOT NULL,
    prediction NUMERIC NOT NULL
);

CREATE TABLE IF NOT EXISTS job_salaries (
    work_year INT,
    experience_level VARCHAR(50),
    employment_type VARCHAR(50),
    job_title VARCHAR(100),
    salary FLOAT,
    salary_currency VARCHAR(10),
    salary_in_usd INT,
    employee_residence VARCHAR(50),
    remote_ratio FLOAT,
    company_location VARCHAR(50),
    company_size VARCHAR(10)
);
