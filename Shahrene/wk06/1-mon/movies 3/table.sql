CREATE DATABASE moviesdb;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(100),
  rated VARCHAR(10),
  year VARCHAR(15),
  runtime VARCHAR(15),
  genre VARCHAR(20),
  actors VARCHAR(1000),
  plot VARCHAR(2000),
  poster VARCHAR(1000)
);
