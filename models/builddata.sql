CREATE TABLE topic (
    id serial primary key,
    name text,
    rank_id int REFERENCES rank (id)
);

CREATE TABLE rank (
    id serial primary key,
    rank int CHECK (rank BETWEEN 0 AND 5),
    title text
);

INSERT INTO rank (rank, title)
VALUES
(0, 'Unranked'),
(1, 'Poor'),
(2, 'Okay'),
(3, 'Good'),
(4, 'Great'),
(5, 'Awesome');

INSERT INTO topic (name, rank_id)
VALUES
('HTML', 1),
('CSS', 1),
('Javascript', 1),
('PostgreSQL', 1),
('Node', 1),
('Express', 1);

SELECT * FROM topic INNER JOIN rank ON topic.rank_id = rank.id;