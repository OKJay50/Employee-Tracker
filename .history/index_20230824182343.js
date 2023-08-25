const inquirer = require('inquirer');
const pool = require('./db'); // Path to your db.js

async function mainMenu() {
    const { choice } = await inquirer.prompt({
        name: 'choice',
        type: 'list',
        message: 'Select an option:',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    });

    // Call the appropriate function based on the user's choice
    switch (choice) {
        case 'View all departments':
            // Call function to view departments
            break;
        case 'View all roles':
            // Call function to view roles
            break;
        // Handle other choices
        case 'Exit':
            console.log('Goodbye!');
            pool.end(); // Close the database connection
            return;
    }
}

// Call the main menu function to start the application
mainMenu();
