/* Step 1- SETUP DATABASE TABLES */
Create Schema csDepartment;
use csDepartment;
SET SQL_SAFE_UPDATES = 0; -- Turn Safe updates off


CREATE TABLE student (
    emplid VARCHAR(8) PRIMARY KEY,
    firstName VARCHAR(50),
    mi CHAR(1),
    lastName VARCHAR(50),
    dob DATE,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(12),
    house_number VARCHAR(10),
    street VARCHAR(255),
    city VARCHAR(255),
    zipCode CHAR(5),
    state CHAR(2),
);
CREATE UNIQUE INDEX idx_student_emplid ON student(emplid);

ALTER TABLE student
ADD CONSTRAINT fk_student_emplid
FOREIGN KEY (emplid) REFERENCES student(emplid)
ON DELETE CASCADE;


CREATE TABLE departmentA (
  departmentID varchar(5) NOT NULL,
  building varchar(50) DEFAULT NULL,
  roomNumber varchar(3) DEFAULT NULL,
  PRIMARY KEY (departmentID)
);

CREATE TABLE departmentB (
  name varchar(255) NOT NULL,
  building varchar(50) DEFAULT NULL,
  roomNumber varchar(3) DEFAULT NULL,
  PRIMARY KEY (name)
);

CREATE TABLE departmentC (
    phone VARCHAR(12) PRIMARY KEY,
    building VARCHAR(50),
    roomNumber VARCHAR(3)
);


CREATE TABLE instructor (
    emplid VARCHAR(8) PRIMARY KEY,
    fName VARCHAR(20),
    Minit CHAR(1),
    lName VARCHAR(25),
    phone VARCHAR(12) ,
    email VARCHAR(254),
    Date_of_Hire DATE,
    house_number VARCHAR(10),
    street VARCHAR(255),
    zipCode VARCHAR(20),
    city VARCHAR(100),
    state VARCHAR(50),
    officeBld VARCHAR(50),
    roomNumber VARCHAR(3)
);

CREATE TABLE graduates (
    STUDENTemplid VARCHAR(8),
    gradYear CHAR(4),
    gradSemester VARCHAR(20),
    degreeEarned VARCHAR(255),
    graduateID int AUTO_INCREMENT UNIQUE,
    PRIMARY KEY (STUDENTemplid, degreeEarned),
    FOREIGN KEY (STUDENTemplid) REFERENCES student(emplid)
        ON DELETE CASCADE  -- This is the cascading option
);


CREATE TABLE courseA (
    courseID VARCHAR(5) PRIMARY KEY,
    courseCode VARCHAR(5) UNIQUE
);

CREATE TABLE courseB (
    courseCode VARCHAR(5) PRIMARY KEY,
    courseName VARCHAR(50) UNIQUE,
    FOREIGN KEY (courseCode) REFERENCES courseA(courseCode)
);

CREATE TABLE courseC (
    courseName VARCHAR(50) PRIMARY KEY,
    credits INT,
    hours VARCHAR(30),
    description VARCHAR(255),
    departmentID VARCHAR(5),
    FOREIGN KEY (departmentID) REFERENCES departmentA(departmentID)
);

CREATE TABLE courseSection (
    sectionID VARCHAR(5) PRIMARY KEY,
    courseID VARCHAR(5),
    semester VARCHAR(10),
    schedule VARCHAR(50),
    roomNumber VARCHAR(4),
    instructorID VARCHAR(8),
    year CHAR(4),
    FOREIGN KEY (instructorID) REFERENCES instructor(emplid),
    FOREIGN KEY (courseID) REFERENCES courseA(courseID)
);


CREATE TABLE employer (
    employerID CHAR(5) PRIMARY KEY,
    employerName VARCHAR(255),
    industry VARCHAR(255),
    house_number VARCHAR(10),
    street VARCHAR(255),
    zipCode VARCHAR(20),
    city VARCHAR(100),
    state VARCHAR(50)
);

CREATE TABLE major (
    studentID VARCHAR(8) PRIMARY KEY,
    major VARCHAR(100),
    FOREIGN KEY (studentID) REFERENCES student(emplid)ON DELETE CASCADE
);

CREATE TABLE cheatingIncident (
    incidentID CHAR(5) PRIMARY KEY,
    sectionID VARCHAR(5),
    description TEXT,
    incidentDate DATE,
    studentID VARCHAR(8),
    FOREIGN KEY (sectionID) REFERENCES courseSection(sectionID) ON DELETE CASCADE,
    FOREIGN KEY (studentID) REFERENCES student(emplid) ON DELETE CASCADE
);


CREATE TABLE enrolledIn (
    sectionID VARCHAR(5),
    studentID VARCHAR(8),
    grade char(1),
    FOREIGN KEY (sectionID) REFERENCES courseSection(sectionID) ON DELETE CASCADE,
    FOREIGN KEY (studentID) REFERENCES student(emplid) ON DELETE CASCADE
);

CREATE TABLE researchInterest (
    INSTemplid VARCHAR(8),
    researchArea VARCHAR(255),
    FOREIGN KEY (INSTemplid) REFERENCES instructor(emplid)
);


CREATE TABLE teachingInterest (
    INSTemplid VARCHAR(8),
    teachingArea VARCHAR(255),
    FOREIGN KEY (INSTemplid) REFERENCES instructor(emplid)
);


CREATE TABLE employmentRec (
    employerID CHAR(5),
    studentID VARCHAR(8),
    gradSemester varchar(20),
    gradYear varchar(4),
    degreeEarned varchar(255),
    startDate DATE,
    endDate DATE,
    jobTitle VARCHAR(255),
    graduateID INT,
    FOREIGN KEY (employerID) REFERENCES employer(employerID),
    FOREIGN KEY (studentID) REFERENCES graduates(STUDENTemplid)ON DELETE CASCADE,
    FOREIGN KEY (graduateID) REFERENCES graduates(graduateID),
    PRIMARY KEY (studentID, employerID, startDate)
);



/* Step 2- Insert DATA  */

INSERT INTO csDepartment.student ( -- STUDENT
    emplid,
    firstName,
    mi,
    lastName,
    dob,
    email,
    phone,
    house_number,
    street,
    city,
    zipCode,
    state
) VALUES
('100001', 'John', 'D', 'Doe', '1990-05-15', 'john.doe@email.com', '123-456-7890', '123', 'Main St', 'Cityville', '12345', 'CA'),
('100002', 'Jane', 'A', 'Smith', '1991-08-22', 'jane.smith@email.com', '987-654-3210', '456', 'Maple Ave', 'Townburg', '56789', 'NY'),
('100003', 'Mike', 'J', 'Johnson', '1992-03-10', 'mike.johnson@email.com', '555-123-4567', '789', 'Oak Ln', 'Villagetown', '67890', 'TX'),
('100004', 'Sara', 'M', 'Miller', '1993-11-05', 'sara.miller@email.com', '111-222-3333', '101', 'Pine St', 'Hamletsville', '45678', 'FL'),
('100005', 'David', 'L', 'Lee', '1994-06-20', 'david.lee@email.com', '777-888-9999', '202', 'Cedar Rd', 'Cityburg', '23456', 'IL'),
('100006', 'Emily', 'R', 'Robinson', '1995-02-14', 'emily.robinson@email.com', '444-555-6666', '303', 'Elm Dr', 'Towndale', '34567', 'GA'),
('100007', 'Chris', 'S', 'Simmons', '1996-09-30', 'chris.simmons@email.com', '666-777-8888', '404', 'Birch Blvd', 'Villageburg', '56789', 'OH'),
('100008', 'Lisa', 'K', 'Kim', '1997-04-25', 'lisa.kim@email.com', '222-333-4444', '505', 'Walnut Ave', 'Citytown', '67890', 'WA'),
('100009', 'Brian', 'P', 'Perez', '1998-12-08', 'brian.perez@email.com', '999-888-7777', '606', 'Sycamore Ln', 'Hometown', '78901', 'MI');

INSERT INTO departmentA (departmentID, building, roomNumber) -- DEPARTMENT A 
VALUES
('A001', 'Engineering Building', '101'),
('A002', 'Science Hall', '203'),
('A003', 'Business Center', '305'),
('A004', 'Liberal Arts Building', '102'),
('A005', 'Technology Tower', '404'),
('A006', 'Health Sciences Complex', '201'),
('A007', 'Fine Arts Building', '301'),
('A008', 'Social Sciences Center', '202'),
('A009', 'Mathematics Building', '402');

INSERT INTO departmentB (name, building, roomNumber) -- DEPARTMENT B 
VALUES
('Engineering', 'Engineering Building', '101'),
('Science', 'Science Hall', '203'),
('Business', 'Business Center', '305'),
('LiberalArts', 'Liberal Arts Building', '102'),
('Technology', 'Technology Tower', '404'),
('HealthSciences', 'Health Sciences Complex', '201'),
('FineArts', 'Fine Arts Building', '301'),
('SocialSciences', 'Social Sciences Center', '202'),
('Mathematics', 'Mathematics Building', '402');

INSERT INTO departmentC (phone, building, roomNumber) -- DEPARTMENT C
VALUES
('555-111-1111', 'Engineering Building', '101'),
('555-222-2222', 'Science Hall', '203'),
('555-333-3333', 'Business Center', '305'),
('555-444-4444', 'Liberal Arts Building', '102'),
('555-555-5555', 'Technology Tower', '404'),
('555-666-6666', 'Health Sciences Complex', '201'),
('555-777-7777', 'Fine Arts Building', '301'),
('555-888-8888', 'Social Sciences Center', '202'),
('555-999-9999', 'Mathematics Building', '402');


INSERT INTO instructor (emplid, fName, Minit, lName, phone, email, Date_of_Hire, house_number, street, zipCode, city, state, officeBld, roomNumber) -- INSTRUCTOR
VALUES
('I100001', 'John', 'D', 'Smith', '555-111-1111', 'john.smith@email.com', '2022-01-15', '123', 'Main St', '12345', 'Cityville', 'CA', 'Science Building', '301'),
('I100002', 'Jane', 'A', 'Johnson', '555-222-2222', 'jane.johnson@email.com', '2021-08-22', '456', 'Maple Ave', '56789', 'Townburg', 'NY', 'Administration Building', '201'),
('I100003', 'Mike', 'J', 'Williams', '555-333-3333', 'mike.williams@email.com', '2020-03-10', '789', 'Oak Ln', '67890', 'Villagetown', 'TX', 'Business Center', '102'),
('I100004', 'Sara', 'M', 'Brown', '555-444-4444', 'sara.brown@email.com', '2019-11-05', '101', 'Pine St', '45678', 'Hamletsville', 'FL', 'Liberal Arts Building', '203'),
('I100005', 'David', 'L', 'Taylor', '555-555-5555', 'david.taylor@email.com', '2018-06-20', '202', 'Cedar Rd', '23456', 'Cityburg', 'IL', 'Technology Tower', '404'),
('I100006', 'Emily', 'R', 'Anderson', '555-666-6666', 'emily.anderson@email.com', '2017-02-14', '303', 'Elm Dr', '34567', 'Towndale', 'GA', 'Health Sciences Complex', '201'),
('I100007', 'Chris', 'S', 'Davis', '555-777-7777', 'chris.davis@email.com', '2016-09-30', '404', 'Birch Blvd', '56789', 'Villageburg', 'OH', 'Fine Arts Building', '301'),
('I100008', 'Lisa', 'K', 'Moore', '555-888-8888', 'lisa.moore@email.com', '2015-04-25', '505', 'Walnut Ave', '67890', 'Citytown', 'WA', 'Social Sciences Center', '202'),
('I100009', 'Brian', 'P', 'Martinez', '555-999-9999', 'brian.martinez@email.com', '2014-12-08', '606', 'Sycamore Ln', '78901', 'Hometown', 'MI', 'Mathematics Building', '402');

INSERT INTO graduates (STUDENTemplid, gradYear, gradSemester, degreeEarned) -- GRADUATES
VALUES
('100001', '2023', 'Spring', 'Bachelor of Science in Engineering'),
('100002', '2023', 'Spring', 'Bachelor of Arts in History'),
('100003', '2023', 'Spring', 'Bachelor of Business Administration'),
('100004', '2023', 'Spring', 'Bachelor of Arts in Liberal Arts'),
('100005', '2023', 'Spring', 'Bachelor of Technology');

INSERT INTO courseA (courseID, courseCode) -- COURSE A
VALUES
('C001', 'CS101'),
('C002', 'MATH1'),
('C003', 'BUS01'),
('C004', 'LIT01'),
('C005', 'MKTG1'),
('C006', 'PHYS1'),
('C007', 'PSY01'),
('C008', 'DS101'),
('C009', 'ART01');

INSERT INTO courseB (courseCode, courseName) -- COURSE B 
VALUES
('CS101', 'Introduction to Computer Science'),
('MATH1', 'Calculus I'),
('BUS01', 'Business Ethics'),
('LIT01', 'Introduction to Literature'),
('MKTG1', 'Digital Marketing Strategies'),
('PHYS1', 'Physics I'),
('PSY01', 'Psychology of Human Behavior'),
('DS101', 'Introduction to Data Science'),
('ART01', 'Introduction to Art History');

INSERT INTO courseC (courseName, credits, hours, description, departmentID) -- COURSE C
VALUES
('Introduction to Computer Science', 3, '3 hours', 'An introductory course covering the fundamentals of computer science.', 'A001'),
('Calculus I', 4, '4 hours', 'A foundational course in calculus for engineering and science majors.', 'A002'),
('Business Ethics', 3, '3 hours', 'Exploration of ethical issues in business practices and decision-making.', 'A003'),
('Introduction to Literature', 3, '3 hours', 'Survey of major literary works and genres.', 'A004'),
('Digital Marketing Strategies', 3, '3 hours', 'Examining effective digital marketing strategies for modern businesses.', 'A005'),
('Physics I', 4, '4 hours', 'Fundamental principles of classical physics.', 'A006'),
('Psychology of Human Behavior', 3, '3 hours', 'Study of human behavior and psychological processes.', 'A007'),
('Introduction to Data Science', 3, '3 hours', 'Foundations of data science, including data analysis and visualization.', 'A008'),
('Introduction to Art History', 3, '3 hours', 'Survey of major art movements and styles throughout history.', 'A009');

INSERT INTO courseSection (sectionID, courseID, semester, schedule, roomNumber, instructorID, year) -- COURSE SECTION
VALUES
('S001', 'C001', 'Spring', 'MWF 10:00 AM - 11:30 AM', '101', 'I100001', '2023'),
('S002', 'C002', 'Fall', 'TTH 2:00 PM - 3:30 PM', '203', 'I100002', '2023'),
('S003', 'C003', 'Spring', 'MWF 1:00 PM - 2:30 PM', '305', 'I100003', '2023'),
('S004', 'C004', 'Fall', 'TTH 9:00 AM - 10:30 AM', '102', 'I100004', '2023'),
('S005', 'C005', 'Spring', 'MWF 11:30 AM - 1:00 PM', '404', 'I100005', '2023'),
('S006', 'C006', 'Fall', 'TTH 3:30 PM - 5:00 PM', '201', 'I100006', '2023'),
('S007', 'C007', 'Spring', 'MWF 2:30 PM - 4:00 PM', '301', 'I100007', '2023'),
('S008', 'C008', 'Fall', 'TTH 10:30 AM - 12:00 PM', '202', 'I100008', '2023'),
('S009', 'C009', 'Spring', 'MWF 9:00 AM - 10:30 AM', '402', 'I100009', '2023');

INSERT INTO employer (employerID, employerName, industry, house_number, street, zipCode, city, state)-- EMPLOYER
VALUES
('E001', 'Tech Solutions Inc.', 'Information Technology', '123', 'Tech Blvd', '54321', 'Techville', 'CA'),
('E002', 'Green Energy Co.', 'Renewable Energy', '456', 'Eco Lane', '98765', 'Eco City', 'NY'),
('E003', 'Finance Dynamics LLC', 'Financial Services', '789', 'Finance Street', '23456', 'Moneytown', 'TX'),
('E004', 'Artistry Studios', 'Entertainment', '101', 'Creative Ave', '45678', 'Artsville', 'FL'),
('E005', 'HealthFirst Hospitals', 'Healthcare', '202', 'Wellness Rd', '12345', 'Healthburg', 'IL'),
('E006', 'Global Logistics Corp.', 'Transportation', '303', 'Cargo Lane', '34567', 'Logisticsville', 'GA'),
('E007', 'Fashion Trends Ltd.', 'Retail', '404', 'Style Blvd', '56789', 'Fashion City', 'OH'),
('E008', 'GreenEarth Environmental', 'Environmental Services', '505', 'Nature Lane', '67890', 'Greentown', 'WA'),
('E009', 'Tech Innovators Ltd.', 'Technology', '606', 'Innovation Rd', '78901', 'Innovation City', 'MI');

INSERT INTO major (studentID, major)-- MAJOR
VALUES
('100001', 'Computer Science'),
('100002', 'Environmental Science'),
('100003', 'Business Administration'),
('100004', 'Psychology'),
('100005', 'Engineering'),
('100006', 'Health Sciences'),
('100007', 'Fine Arts'),
('100008', 'Social Sciences'),
('100009', 'Mathematics');


INSERT INTO cheatingIncident (incidentID, sectionID, description, incidentDate, studentID)-- CHEATING INCIDENT
VALUES
('CI001', 'S001', 'Copying answers during the exam', '2023-02-15', '100001'),
('CI002', 'S002', 'Using unauthorized materials', '2023-03-20', '100002'),
('CI003', 'S003', 'Collaborating with another student', '2023-04-10', '100003'),
('CI004', 'S004', 'Plagiarism in assignment', '2023-05-05', '100004'),
('CI005', 'S005', 'Attempting to use a cheat sheet', '2023-06-12', '100005'),
('CI006', 'S006', 'Talking during the exam', '2023-07-18', '100006'),
('CI007', 'S007', 'Copying from a neighbor', '2023-08-25', '100007'),
('CI008', 'S008', 'Sharing answers via messaging app', '2023-09-30', '100008'),
('CI009', 'S009', 'Using a programmable calculator', '2023-10-15', '100009'),
('CI010', 'S001', 'Tried to outsmart the exam with an invisible ink pen', '2023-11-20', '100001');

INSERT INTO csDepartment.enrolledIn ( -- ENROLLED IN
    sectionID,
    studentID,
    grade
) VALUES
('S001', '100001', 'A'),
('S001', '100002', 'A'),
('S002', '100003', 'C'),
('S002', '100004', 'A'),
('S003', '100005', 'B'),
('S003', '100006', 'C'),
('S004', '100007', 'A'),
('S004', '100008', 'A'),
('S005', '100009', 'A');

INSERT INTO researchInterest (INSTemplid, researchArea) -- RESEARCH INTEREST
VALUES
('I100001', 'Artificial Intelligence'),
('I100002', 'Renewable Energy'),
('I100003', 'Financial Economics'),
('I100004', 'Clinical Psychology'),
('I100005', 'Computer Networks'),
('I100006', 'Public Health'),
('I100007', 'Fine Arts Education'),
('I100008', 'Sociology'),
('I100009', 'Pure Mathematics');

INSERT INTO teachingInterest (INSTemplid, teachingArea) -- TEACHING INTEREST
VALUES
('I100001', 'Machine Learning'),
('I100002', 'Environmental Science'),
('I100003', 'Business Management'),
('I100004', 'Counseling Psychology'),
('I100005', 'Computer Science'),
('I100006', 'Public Health Education'),
('I100007', 'Fine Arts Studio'),
('I100008', 'Sociology'),
('I100009', 'Advanced Mathematics');


INSERT INTO employmentRec ( employerID, studentID, gradSemester, gradYear, degreeEarned, startDate, endDate, jobTitle, graduateID)-- EMPLOYMENT RECORD
VALUES
('E001', '100001', 'Spring', '2023', 'Bachelor of Science in Engineering', '2023-01-15', '2023-12-31', 'Software Engineer', 1),
('E002', '100002', 'Spring', '2023', 'Bachelor of Arts in History', '2023-01-15', '2023-12-31', 'Historian', 2),
('E003', '100003', 'Spring', '2023', 'Bachelor of Business Administration', '2023-01-15', '2023-12-31', 'Financial Analyst', 3),
('E004', '100004', 'Spring', '2023', 'Bachelor of Arts in Liberal Arts', '2023-01-15', '2023-12-31', 'Liberal Arts Specialist', 4),
('E005', '100005', 'Spring', '2023', 'Bachelor of Technology', '2023-01-15', '2023-12-31', 'Technology Specialist', 5);

/* Step 3- Query all tables to get their State */

SELECT * FROM csDepartment.cheatingIncident;
SELECT * FROM csDepartment.courseA;
SELECT * FROM csDepartment.courseB;
SELECT * FROM csDepartment.courseC;
SELECT * FROM csDepartment.courseSection;
SELECT * FROM csDepartment.departmentA;
SELECT * FROM csDepartment.departmentB;
SELECT * FROM csDepartment.departmentC;
SELECT * FROM csDepartment.employer;
SELECT * FROM csDepartment.employmentRec;
SELECT * FROM csDepartment.enrolledIn;
SELECT * FROM csDepartment.graduates;
SELECT * FROM csDepartment.instructor;
SELECT * FROM csDepartment.major;
SELECT * FROM csDepartment.researchInterest;
SELECT * FROM csDepartment.student;
SELECT * FROM csDepartment.teachingInterest;

/* STEP 4- One simple select statement that retrieves records from all the tables using some simple condition */


SELECT * 
FROM cheatingIncident
WHERE incidentDate < '2023-05-01';-- All cheating before MAY

SELECT * FROM courseC
WHERE credits = 3;-- All 3 credit courses

SELECT *
FROM courseB
WHERE courseName LIKE '%introduction%';-- All Introductory Courses

SELECT *
FROM courseB
WHERE courseCode LIKE '%ART%';-- All Courses Code that contain ART

SELECT * FROM csDepartment.courseSection
WHERE SEMESTER = 'FALL';-- All Fall Course Sections

SELECT * FROM csDepartment.departmentA
where roomNumber LIKE '2%';-- All Departments located On A 2nd Floor

SELECT * FROM csDepartment.departmentB
where roomNumber LIKE '3%';-- All Departments located On A 3rd Floor

SELECT * FROM csDepartment.departmentC
where roomNumber LIKE '4%';-- All Departments located On A 4th Floor

SELECT * FROM csDepartment.employer
where industry LIKE '%Technology%';-- All employers in the tech industry

SELECT * FROM csDepartment.employmentRec
where degreeEarned LIKE '%Bachelor of Arts%'; -- All Student that graduates that got a job with a Bachelor gof Arts

SELECT * FROM csDepartment.enrolledIn
where grade= 'c'; -- All Student that earned a C grade


SELECT * FROM csDepartment.graduates
where degreeEarned LIKE '%Bachelor of Arts%';-- All graduates with Bachelor of Arts


SELECT * FROM csDepartment.instructor
where state ='NY'; -- All instructors that live in New York

SELECT * FROM csDepartment.major
WHERE major LIKE '%sciences%';-- All students that major in something that containes the word sciences

SELECT * FROM csDepartment.researchInterest
where researchArea Like '%health%'; -- All instructor that are interrested in researching anything related to health

SELECT * FROM csDepartment.student
where dob> '1995-01-01';-- All students born after Jan 1st 1995 

SELECT * FROM csDepartment.teachingInterest
where teachingArea LIKE '%psychology%';-- All Instructors with an interest in teachng psychology

/* STEP 5- Adavanced queries */



SELECT * FROM student
WHERE EXISTS(SELECT * FROM GRADUATES 
WHERE STUDENTemplid= emplid
); -- Get All students that Graduated

SELECT * FROM student
WHERE EXISTS(SELECT * FROM GRADUATES 
WHERE STUDENTemplid= emplid
)
AND EXISTS(
	SELECT * FROM employmentRec
    WHERE studentID= emplid AND jobTitle ='Software Engineer'
); -- Select All Students that Graduated and Work as Software Engineers

/* STEP 6-  students who have all A letter grades */
SELECT * FROM csDepartment.enrolledIn
where grade= 'a';

/* STEP 7- Students who haven't taken more than 5 courses */

SELECT studentID, COUNT(DISTINCT sectionID) AS numberOfCourses
FROM enrolledIn
GROUP BY studentID
HAVING numberOfCourses<5;

/* STEP 8- Write 6 UPDATE Statements based on some condition */

UPDATE enrolledIn -- Assign failing Grade to All Students in section S003
SET grade = 'F'
WHERE sectionID = 'S003';

UPDATE enrolledIn -- Assign failing Grade to All Students who cheated
SET grade = 'F'
WHERE EXISTS (
    SELECT 1
    FROM cheatingIncident
    WHERE cheatingIncident.studentID = enrolledIn.studentID
      AND cheatingIncident.sectionID = enrolledIn.sectionID
);

UPDATE student -- CHANGE Students who live in NY to XX
SET state = 'XX'
WHERE state = 'NY';

UPDATE student -- CHANGE a student's first name to Aliyah
SET firstName = 'Aliyah'
WHERE emplid = '100002';

UPDATE instructor -- CHANGE An instructor's last Name To Fulakeza
SET lName = 'Fulakeza'
WHERE emplid = 'I100001';

UPDATE employer -- CHANGE zip code to 10472 for employers in NY
SET zipCode = '10472'
WHERE state = 'NY';

/* STEP 9-Write 3 statements that delete a record from a table based on some condition.*/

DELETE FROM employer
WHERE employerID = 'E009';

DELETE FROM student
WHERE emplid = '100009';

DELETE FROM graduates
WHERE STUDENTemplid = '100005';


/* STEP 10-Query for students who cheated in at least one course */

SELECT firstName,mi,lastName FROM csDepartment.cheatingIncident JOIN student ON emplid=studentID;

/* STEP 11-Query for the instructor who reported the most incidents*/

SELECT
    instructor.emplid AS instructorID,
    instructor.fname,
    instructor.lname,
    COUNT(DISTINCT cheatingIncident.incidentID) AS numberOfReportedIncidents
FROM cheatingIncident
JOIN courseSection ON cheatingIncident.sectionID = courseSection.sectionID
JOIN instructor ON courseSection.instructorID = instructor.emplid
GROUP BY instructor.emplid, instructor.fname, instructor.lname
ORDER BY numberOfReportedIncidents DESC
LIMIT 1;

/* STEP 12-Query for instructors who never reported an incident*/

SELECT
    instructor.emplid AS instructorID,
    instructor.fname,
    instructor.lname
FROM instructor
LEFT JOIN courseSection ON instructor.emplid = courseSection.instructorID
LEFT JOIN cheatingIncident ON courseSection.sectionID = cheatingIncident.sectionID
WHERE cheatingIncident.incidentID IS NULL
GROUP BY instructor.emplid, instructor.fname, instructor.lname;

/* STEP 13-Query For The Most Recently hired instructor */

SELECT *
FROM instructor
ORDER BY Date_of_Hire DESC
LIMIT 1;

SET SQL_SAFE_UPDATES = 1; -- Turn safe updates back on