import mysql from "mysql2"

//tables
const tableUsers = "users"

// create a new MySQL connection
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'test12345',
  database: 'test_database'
}).promise()

async function GetUser(email) {
    return GetValue(tableUsers, "email", "email", email)
}

async function DoesUserExist(email) {
    const result = await GetUser(email)
    return result != undefined
}

async function GetValue(table, column, where, value) {
    var command = "SELECT " + column + " FROM " + table
    if (where != "") {
        command+=" WHERE " + where + '="' + value + '"'
    }
    const result =  await connection.query(command)
    return result[0][0]
}

async function GetTable(table) {
    return GetColumn(table, "*")
}

async function GetColumn(table, column) {
    return GetValue(table, column, "", "")
}

async function AddUser(email, first, last) {
    var command = "INSERT INTO " + tableUsers + ' VALUES ("' + email + '", "' + first + '", "' + last + '")'
    const result = await connection.query(command)
    return result[0]
}

async function RemoveUser(email) {
    var command = "DELETE FROM " + tableUsers + ' WHERE email = "' + email + '"'
    const result = await connection.query(command)
}

//const remove = await RemoveUser("nicolasschallock@csus.edu")
//const user = await AddUser("nicolasschallock@csus.edu", "Nicolas", "Schallock")
const doesExist = await DoesUserExist("jsmith@csus.edu")
if (doesExist) {

}



const usr = await GetUser("nicolasschallock@csus.edu")
const table = await GetTable(tableUsers)
console.log(usr)
console.log(user)

connection.end()