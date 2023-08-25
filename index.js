const inquirer = require('inquirer');
const pool = require('./db'); // Import your db.js

async function mainMenu() {
  const { choice } = await inquirer.prompt({
    name: 'choice',
    type: 'list',
    message: 'Select an option:',
    choices: [
      'View all departments',
      'View employees by department',
      'Update employee managers', // Add a new option
      'View employees by manager', // Add a new option
      'Exit'
    ]
  });

  switch (choice) {
    case 'View all departments':
      await viewDepartments();
      break;
    case 'View employees by department':
      await viewEmployeesByDepartment();
      break;
    case 'Update employee managers':
      await updateEmployeeManagers(); // Call the function to update employee managers
      break;
    case 'View employees by manager':
      await viewEmployeesByManager(); // Call the function to view employees by manager
      break;
    case 'Exit':
      console.log('Goodbye!');
      pool.end(); // Close the database connection
      return;
  }
}
async function viewDepartments() {
  try {
    const [departments] = await pool.query('SELECT * FROM department');
    console.table(departments);
  } catch (error) {
    console.error('An error occurred:', error);
  }
  mainMenu();
}

async function viewEmployeesByDepartment() {
  try {
    const departments = await pool.query('SELECT * FROM department');
    const departmentChoices = departments.map(department => ({
      name: department.name,
      value: department.id
    }));

    const { departmentId } = await inquirer.prompt({
      name: 'departmentId',
      type: 'list',
      message: 'Select a department:',
      choices: departmentChoices
    });

    const [employees] = await pool.query(
      'SELECT * FROM employee WHERE role_id IN (SELECT id FROM role WHERE department_id = ?)',
      [departmentId]
    );
    console.table(employees);
  } catch (error) {
    console.error('An error occurred:', error);
  }
  mainMenu();
}

mainMenu();

