const db = require('./db')
const Query = {
   greeting:() => {
      return "hello from  Malhar !!!"
   },
   students:() => db.students.list()
}

module.exports = {Query}