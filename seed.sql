USE ems;

INSERT IGNORE INTO departments (name) VALUES
('Engineering'), ('HR'), ('Sales'), ('Finance');

INSERT IGNORE INTO roles (name) VALUES
('Developer'), ('Manager'), ('HR Executive'), ('Sales Associate'), ('Accountant');

-- admin user (password: admin123)
INSERT IGNORE INTO users (id, email, password_hash, full_name, role)
VALUES (1, 'admin@ems.local', '$2a$10$Flsu9S1K1L5o5QIKV0mN8O7L5H1x8mWvZr4v0z9nqg9g3Yw5qk0sS', 'System Admin', 'ADMIN');

-- sample employees
INSERT IGNORE INTO employees (full_name, email, phone, department_id, role_id, salary, user_id)
VALUES
('Alice Johnson', 'alice@company.com', '1234567890', 1, 1, 70000, NULL),
('Bob Smith', 'bob@company.com', '9876543210', 2, 3, 50000, NULL);
