import mysql from "mysql2"
// create a new MySQL connection
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'test12345',
  database: 'test_database'
}).promise()


async function GetValue(table, column, where, value) {
    var command = "SELECT " + column + " FROM " + table
    if (where != "") {
        command+=" WHERE " + where + "=" + value
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

const table = await GetTable("users")
const column = await GetColumn("users", "first_name")
const value = await GetValue("users", "first_name", "email", '"jsmith@csus.edu"')
console.log(table)
console.log(column)
console.log(value)

connection.end()