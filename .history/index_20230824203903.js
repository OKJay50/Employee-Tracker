const inquirer = require('inquirer');
const pool = require('./db'); // Import your db.js

async function mainMenu() {
  const { choice } = await inquirer.prompt({
    name: 'choice',
    type: 'list',
    message: 'Select an option:',
    choices: [
      'View all departments',
      'Add a department', // Add a new option for adding a department
      'Exit'
    ]
  });

  switch (choice) {
    case 'View all departments':
      await viewDepartments();
      break;
    case 'Add a department':
      await addDepartment(); // Call the function to add a department
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

async function addDepartment() {
  const department = await inquirer.prompt({
    name: 'name',
    type: 'input',
    message: 'Enter the name of the new department:'
  });

  try {
    await pool.query('INSERT INTO department (name) VALUES (?)', [department.name]);
    console.log('Department added successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  }

  mainMenu();
}

mainMenu();
