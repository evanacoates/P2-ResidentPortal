DROP DATABASE IF EXISTS tenants_db;

CREATE DATABASE tenants_db;

USE tenants_db;

/* CREATE TABLE leasingInfo (
    unitNumber INTEGER PRIMARY KEY,
    leaseHolder VARCHAR(255) NOT NULL,
    leasingTerm VARCHAR(30) NOT NULL,
    rentCost INTEGER,
);
 */
/* CREATE TABLE personalInfo (
    unitNumber INTEGER FOREIGN KEY,
    name VARCHAR(30) NOT NULL,
    address VARCHAR(50) NOT NULL,
    phoneNumber INTEGER,
    email VARCHAR(30) NOT NULL,
);
 */
/* CREATE TABLE accountInfo (
    unitNumber INTEGER FOREIGN KEY,
    name VARCHAR(30) NOT NULL,
    userName VARCHAR(30) NOT NULL,
    Password VARCHAR(30) NOT NULL,
    billingIn INTEGER,
);
 */
CREATE TABLE accountInfo (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  billing INTEGER(30) NOT NULL
);
