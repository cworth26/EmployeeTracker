DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;


CREATE TABLE department (
    id INT auto_increment,
    name VARCHAR(30) NOT NULL,
    primary key(id) -- UNIQUE NOT NULL
); 

CREATE TABLE role (
    id INT auto_increment,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    primary key(id), -- UNIQUE NOT NULL
    foreign key(department_id) references department(id) -- must point to valid department primary key
);

CREATE TABLE employee (
    id INT auto_increment,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    primary key(id),
    foreign key(role_id) references role(id),
    foreign key(manager_id) references employee(id) -- must point to valid department primary key
);



