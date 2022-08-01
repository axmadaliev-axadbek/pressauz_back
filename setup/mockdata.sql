SELECT * from users;
INSERT into users(username, password, avatar) VALUES
('salim',  crypt('55', gen_salt('bf')), 'http://picsum.photos/400'),
('asl',  crypt('5994', gen_salt('bf')), 'http://picsum.photos/400'),
('bobir',  crypt('111', gen_salt('bf')), 'http://picsum.photos/400'),
('sardor',  crypt('222', gen_salt('bf')), 'http://picsum.photos/400');


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
    status VARCHAR(255) NOT NULL default 'active');

SELECT * from posts;
select *, to_char(date_at, 'DD/MM/YYYY') as DATE_ORG from posts;
INSERT INTO posts (speaker,shaxs,job,phone,phone2, categories,subCategory,type,place,postTitle,postDesc,images) VALUES

 ('Ali Aliev', 'Jismoniy shaxs', 'Dasturchi', '+998931234567', '998931234567', 'Dasturclash',
  'Backend Node js', 'offline', 'Najot Talim', 'Roadmap To Nodejs', 'Dasrulash bu ...','http://picsum.photos/500');

  INSERT INTO posts (speaker,shaxs,job,phone,phone2, categories,subCategory,type,place,postTitle,postDesc,images, date_at) VALUES

 ('Salim Valiev', 'Yuridik shaxs', 'Dizayn', '+998931234567', '998931234567', 'Dasturclash',
  'Backend Node js', 'offline', 'Najot Talim', 'Roadmap To Nodejs', 'Dasrulash bu ...','http://picsum.photos/500', '2020-01-05');