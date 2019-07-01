use movielist;

CREATE TABLE movielist (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  watched BOOLEAN NOT NULL
)