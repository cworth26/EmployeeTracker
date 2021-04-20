//bringing in dependencies
const inquirer = require("inquirer"),
const mysql = require("mysql"),
const cTable = require("console.table");

const dataConnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_trackerDB",

});


//starts the prompts
function startPrompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "choice",
            choices: [
                "View All Employees?",
                "View All Employee's By Roles?",
                "View all Emplyees By Deparments",
                "Update Employee",
                "Add Employee?",
                "Add Role?",
                "Add Department?"
            ]
        }

    ]).then(function (val) {
        switch (val.choice) {
            case "View all Employees?":
                viewAllEmployees();
                break;

            case "View all Employees by Role?":
                viewAllRoles();
                break;
            case "View all Employees by Departments":
                viewAllDepartments();
                break;
            case "Add Employee?":
                addEmployee();
                break;
            case "Add Role?":
                addRole();
                break;
            case "Add Department?":
                addDepartment();
                break;
        }
    })

}

//function to view all employees
function viewAllEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, role.id, employee.manager_id",
        function (err, res) {
            if (err) throw err
            console.table(res)
            startPrompt()
        }
    )
};
//write function to VIEW roles
function viewRoles() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id",
        function (err, res) {
            if (err) throw (err)
            console.table(res)
            startPrompt()
        }
    )
};

//write function to VIEW employees by department, roles , employees
function viewDepartments() {
    connection.query("SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id",
        function (err, res) {
            if (err) throw (err)
            console.table(res)
            startPrompt()
        }
    )
};



//write function to ADD employees
function addEmployee() {
    inquirer.prompt([
        {
            name: "firstname",
            type: "input",
            messsage: "Please enter first name"
        },
        {
            name: "lastname",
            type: "input",
            message: "Please enter last name"
        },
        {
            name: "role",
            type: "input",
            message: "Please enter employee role",
            choices: [
                "Manager",
                "Intern",
                "Developer",
                "Employee",
            ]
        },
        {
            name: "name",
            type: "input",
            message: "Please enter manager's name",
        },
    ]).then(function (answers) {

        startPrompt()

    });
}


//write function to UPDATE employee roles
function updateEmployee() {
    //question marks are placeholders
    inquirer.prompt([{

    }]).then(res => {
        connection.query("UPDATE role.title SET role_id = ? WHERE id = ? ",
            [res.One, res.Two],
            function (err, res) {
                if (err) throw (err);
                console.table(res);
                startPrompt();
            }
        );

    })
}