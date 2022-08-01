const GETALL = `
select * from users as u
where case  when $1 > 0 then u.users_id = $1
                            else true
                            end

`

const LOGIN = `
select 
 *
from users as u where u.username = $1 and u.password = crypt($2, password)
`
const REGISTER = `
insert into users (username, password) values ($1, crypt($2, gen_salt('bf'))) returning *
`

const CHANGEPROFILE = `
    update users set username = $1, visibility = $2 where users.user_id = $3 returning *
`
 module.exports = {
    LOGIN,  CHANGEPROFILE, REGISTER,GETALL
 }

// select * from users where username like '%ar%';