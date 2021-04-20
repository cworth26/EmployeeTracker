USE employee_trackerDB;

INSERT INTO department(name) VALUES
	("DevOps");

INSERT INTO role (title, salary, department_id) VALUES 
	("Developer", 80000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
	("Ben", "Benson", 1, null),
    ("Bobby", "Lennox", 1, 1);


--different seeds for departments
INSERT INTO department (name)
VALUE ("Human Resources");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Management");
INSERT INTO department (name)
VALUE ("Internships");