use db;
CREATE Table role(
  id INT PRIMARY KEY NOT NULL,
  des VARCHAR(50) NOT NULL
);
--roles
INSERT INTO
  role
VALUES
  (1, 'jefe'),(2, 'cliente');
SELECT
  *
FROM
  role;
CREATE Table usuario(
    id int(11) PRIMARY KEY not NULL AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    role INT NOT NULL,
    FOREIGN KEY (role) REFERENCES role(id)
  );
Describe usuario;
INSERT INTO
  usuario
VALUES
  (null, 'eric@test.com', 'eric123', 1);
INSERT INTO
  usuario
VALUES
  (null, 'nico@test.com', 'nico123', 2);
INSERT INTO
  usuario
VALUES
  (null, 'po@test.com', 'po123', 2);
SELECT
  *
FROM
  usuario;