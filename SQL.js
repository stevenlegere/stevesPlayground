// Retrieve all employees and their corresponding department names.

// Table employees
// | emp_id | emp_name  | salary | dept_id |
// |--------|-----------|--------|---------|
// | 1      | John      | 50000  | 1       |
// | 2      | Jane      | 60000  | 2       |
// | 3      | Bob       | 55000  | 1       |
// | 4      | Alice     | 70000  | 2       |
// | 5      | Charlie   | 45000  | 3       |

// Table departments
// | dept_id | dept_name   |
// |---------|-------------|
// | 1       | HR          |
// | 2       | Finance     |
// | 3       | IT          |


// SELECT emp_id, emp_name, salary, dept_name
// FROM employees
// INNER JOIN departments ON employees.dept_id = departments.dept_id;

SELECT emp_id, emp_name, salary, dept_id
FROM employees
INNER JOIN 

// SQL QUERY from HackerRank
// Query all columns for all American cities in CITY with populations larger than 100000. The CountryCode for America is USA.
SELECT *
FROM CITY
WHERE COUNTRYCODE = 'USA'
AND POPULATION > 100000;

// Query returned the following rows of data:
// 3878 Scottsdale USA Arizona 202705 
// 3965 Corona USA California 124966 
// 3973 Concord USA California 121780 
// 3977 Cedar Rapids USA Iowa 120758 
// 3982 Coral Springs USA Florida 117549 

// Query the NAME field for all American cities in CITY with populations larger than 120000. The CountryCode for America is USA.
SELECT NAME
FROM CITY
WHERE COUNTRYCODE = 'USA'
AND POPULATION > 120000;

// Query returned the following rows of data:
// Scottsdale
// Corona
// Concord
// Cedar Rapids

// Query all columns (attributes) for every row in the CITY table.
SELECT *
FROM CITY;
// Query returned the following rows of data:
// 6 Rotterdam NLD Zuid-Holland 593321
// 3878 Scottsdale USA Arizona 202705
// 3965 Corona USA California 124966
// 3973 Concord USA California 121780
// 3977 Cedar Rapids USA Iowa 120758
// 3982 Coral Springs USA Florida 117549
// 4054 Fairfield USA California 92256
// 4058 Boulder USA Colorado 91238
// 4061 Fall River USA Massachusetts 90555
// Expected Output
// 6 Rotterdam NLD Zuid-Holland 593321 
// 3878 Scottsdale USA Arizona 202705 
// 3965 Corona USA California 124966 
// 3973 Concord USA California 121780 
// 3977 Cedar Rapids USA Iowa 120758 
// 3982 Coral Springs USA Florida 117549 
// 4054 Fairfield USA California 92256 
// 4058 Boulder USA Colorado 91238 
// 4061 Fall River USA Massachusetts 90555 

// Query all columns for a city in CITY with the ID 1661.
SELECT *
FROM CITY
WHERE ID = 1661;
// Query returned the following rows of data:
// 1661 Sayama JPN Saitama 162472

// Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.
SELECT *
FROM CITY
WHERE COUNTRYCODE = 'JPN';
// Query returned the following rows of data:
//1613 Neyagawa JPN Osaka 257315
// 1630 Ageo JPN Saitama 209442
// 1661 Sayama JPN Saitama 162472
// 1681 Omuta JPN Fukuoka 142889
// 1739 Tokuyama JPN Yamaguchi 107078

// Query the names of all the Japanese cities in the CITY table. The COUNTRYCODE for Japan is JPN.
SELECT NAME
FROM CITY
WHERE COUNTRYCODE = 'JPN';
// Query returned the following rows of data:
// Neyagawa
// Ageo
// Sayama
// Omuta
// Tokuyama

// Query a list of CITY and STATE from the STATION table.
SELECT CITY, STATE
FROM STATION

// Query a list of CITY names from STATION with even ID numbers only. You may print the results in any order, but must exclude duplicates from your answer.
SELECT DISTINCT CITY
FROM STATION
WHERE ID % 2 = 0;
// DISTINCT is used to return only distinct (different) values.

// Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.
SELECT COUNT(CITY) - COUNT(DISTINCT CITY)
FROM STATION;
// COUNT(CITY) counts the number of rows in the CITY column.
// COUNT(DISTINCT CITY) counts the number of distinct values in the CITY column.
// The difference between the two is the number of rows that have duplicate values in the CITY column.
// 13

// Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.
SELECT CITY, LENGTH(CITY)
FROM STATION
ORDER BY LENGTH(CITY) ASC, CITY ASC
LIMIT 1;
// Amo 3
SELECT CITY, LENGTH(CITY)
FROM STATION
ORDER BY LENGTH(CITY) DESC, CITY ASC
LIMIT 1;
// Marine On Saint Croix 21
