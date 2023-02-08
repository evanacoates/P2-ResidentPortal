DROP DATABASE IF EXISTS tenants_db;

CREATE DATABASE tenants_db;

USE tenants_db;

CREATE TABLE leasingInfo {
    unitNumber INT PRIMARY KEY,
    leaseHolder VARCHAR(255) NOT NULL,
    leasingTerm VARCHAR(30) NOT NULL,
    rentCost INT
};

CREATE TABLE personalInfo {
    unitNumber INT FOREIGN KEY,
    name VARCHAR(30) NOT NULL,
    address VARCHAR(50) NOT NULL,
    phoneNumber INT,
    email VARCHAR(30) NOT NULL,
};

CREATE TABLE accountInfo {
    unitNumber INT FOREIGN KEY,
    name VARCHAR(30) NOT NULL,
    userName VARCHAR(30) NOT NULL,
    Password VARCHAR(30) NOT NULL,
    billingIn INT,
};
