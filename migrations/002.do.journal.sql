CREATE TABLE journal
(
  id SERIAL PRIMARY KEY,
  date_added TIMESTAMPTZ NOT NULL DEFAULT now
(),
  timer TIME NOT NULL,
  mood INTEGER,
  journal_entry TEXT,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL
);