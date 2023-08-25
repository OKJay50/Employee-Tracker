-- schema.sql
-- Create the department table
CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30)
);

-- Create the role table
CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Create the employee table
CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- Insert initial data if needed
-- INSERT INTO department (id, name) VALUES (1, 'HR'), (2, 'Engineering'), ...
-- INSERT INTO role (id, title, salary, department_id) VALUES (1, 'HR Manager', 60000, 1), ...
-- INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'John', 'Doe', 1, NULL), ...
