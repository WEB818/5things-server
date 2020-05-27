BEGIN;

  TRUNCATE
  journal,
  users
  RESTART IDENTITY CASCADE;

  INSERT INTO users
    (username, name, password)
  VALUES
    ('wendybee', 'Wendy', '$2a$12$8zTUtyLYgtn4hjqnKZ.isepUhdgxYhRRBGANpeTsEJLPTZFNLIw1.');

  COMMIT;