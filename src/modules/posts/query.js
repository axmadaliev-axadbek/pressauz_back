
// const GETALL = `
// select 
//  p.*,
//  json_agg(c.*) as comments
// from posts as p
// left join comments as c on p.post_id= c.post_id
// where p.status='active' and case
//                             when $1 > 0 then p.post_id = $1
//                             else true
//                             end
//         group by p.post_id, c.post_id
// `
// select to_char(date_col, 'DD/MM/YYYY') from table;
// SELECT to_char(b.foo,'dd/MM/yyyy') as foo, b.bar
// FROM   baz b
// ORDER  BY b.foo;
// p.date_at =< current_date and
// ORDER  BY p.date_at desc 
const GETALL = `
SELECT 
*,
to_char(p.date_at,'dd/MM/yyyy') as date_at,
to_char(p.time, 'HH24:MI') as time,
floor(random()*(5000-10+1))+10 as view
from posts as p
where  p.status='confirmed' and case
                            when $1 > 0 then p.posts_id = $1
                            else true
                            end
                                                      
`

const getPendingPosts = `
SELECT 
*,
to_char(p.date_at,'dd/MM/yyyy') as date_at,
to_char(p.time, 'HH24:MI') as time,
floor(random()*(5000-10+1))+10 as view
from posts as p
where  p.status='pending' and case
                            when $1 > 0 then p.posts_id = $1
                            else true
                            end
  `

  const getCanceledPosts = `
  SELECT 
  *,
  to_char(p.date_at,'dd/MM/yyyy') as date_at,
  to_char(p.time, 'HH24:MI') as time,
  floor(random()*(5000-10+1))+10 as view
  from posts as p
  where  p.status='canceled' and case
                              when $1 > 0 then p.posts_id = $1
                              else true
                              end
    `
  

const ADDPOST = `
INSERT INTO posts (speaker, shaxs, job, phone, phone2, categories, subCategory, type, place, postTitle, postDesc,  date_at, time, images) VALUES
 ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
 returning *
`


const CANCELPOST = `
    update posts set status = 'canceled' where posts.posts_id = $1  returning *
`
const CONFIRMPOST = `
    update posts set status = 'confirmed' where posts.posts_id = $1  returning *
`
module.exports = {
    GETALL, ADDPOST, CANCELPOST, CONFIRMPOST, getPendingPosts, getCanceledPosts
}


// select * from posts where username like '%ar%';