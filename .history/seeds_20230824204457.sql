-- Insert departments
INSERT INTO department (id, name) VALUES
  (1, 'HR'),
  (2, 'Engineering'),
  (3, 'Sales');

-- Insert roles
INSERT INTO role (id, title, salary, department_id) VALUES
  (1, 'HR Manager', 60000, 1),
  (2, 'Software Engineer', 80000, 2),
  (3, 'Sales Representative', 50000, 3);

-- Insert employees
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
  (1, 'John', 'Doe', 1, NULL),
  (2, 'Jane', 'Smith', 2, 1),
  (3, 'Michael', 'Johnson', 3, 1);
