DROP database pressa;
CREATE database pressa;
CREATE extension pgcrypto;

-- DROP TABLES IF EXISTS posts;
DROP table users;
CREATE TABLE users(
    users_id serial  PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar text default 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaju6aeP_TbkqujtX04nuWpgW6xqesaSDkUw&usqp=CAU'
);

CREATE TABLE posts (
    posts_id serial  PRIMARY KEY,
    speaker TEXT NOT NULL,
    shaxs VARCHAR(255) NOT NULL,
    job TEXT NOT NULL, 
    phone TEXT NOT NULL,
    phone2 VARCHAR(255) NOT NULL,
    date_at date  NOT NULL default CURRENT_DATE,
    time TIME NOT NULL default CURRENT_TIME,
    categories VARCHAR(255) NOT NULL,
    subCategory VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    place TEXT NOT NULL,
    postTitle VARCHAR(255) NOT NULL,
    postDesc TEXT NOT NULL,
    images TEXT NOT NULL,
    view int default 2541,
    status VARCHAR(255) NOT NULL default 'pending'
);



CREATE TABLE events (
    posts_id serial  PRIMARY KEY,
    speaker TEXT NOT NULL,
    shaxs VARCHAR(255) NOT NULL,
    job TEXT NOT NULL, 
    phone TEXT NOT NULL,
    phone2 VARCHAR(255) NOT NULL,
    date_at date  NOT NULL default CURRENT_DATE,
    time TIME NOT NULL default CURRENT_TIME,
    categories VARCHAR(255) NOT NULL,
    subCategory VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    place TEXT NOT NULL,
    postTitle VARCHAR(255) NOT NULL,
    postDesc TEXT NOT NULL,
    images TEXT NOT NULL,
    view int default 2541,
    status VARCHAR(255) NOT NULL default 'active'
);
