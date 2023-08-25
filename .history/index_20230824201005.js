const inquirer = require('inquirer');
const pool = require('./employee_db'); // Import your db.js

async function mainMenu() {
  const { choice } = await inquirer.prompt({
    name: 'choice',
    type: 'list',
    message: 'Select an option:',
    choices: [
      'View all departments',
      'Exit'
    ]
  });

  switch (choice) {
    case 'View all departments':
      await viewDepartments();
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

mainMenu();
