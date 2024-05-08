import mysql from "mysql2"

//tables
const tableUsers = "users"
const tableEvents = "student_events"
//const tableMessages = "messages"

// create a new MySQL connection
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'test12345',
  database: 'test_database'
}).promise()

export {GetUser, DoesUserExist, isValidPassword, AddUser, SetEventsForUser}

async function GetUser(email) {
    const temp = await GetValue(tableUsers, "email", "email", email)
    console.log(temp[0])
    return temp[0]
}

async function DoesUserExist(email) {
    const result = await GetUser(email)
    return result != undefined
}

async function isValidPassword(email, password) {
    const temppasscode = await GetValue(tableUsers, "passcode", "email", email)
    console.log(temppasscode[0].passcode)
    console.log(password)
    return temppasscode[0].passcode == password
}

async function GetValue(table, column, where, value) {
    var command = "SELECT " + column + " FROM " + table
    if (where != "") {
        command+=" WHERE " + where + '="' + value + '"'
    }
    const result =  await connection.query(command)
    return result[0]
}

async function GetTable(table) {
    return await GetColumn(table, "*")
}

async function GetColumn(table, column) {
    return await GetValue(table, column, "", "")
}

async function AddUser(email, first, last, passcode, username) {
    var command = "INSERT INTO " + tableUsers + ' VALUES ("' + email + '", "' + first + '", "' + last + '", "' + passcode + '", "' + username + '")'
    const result = await connection.query(command)
    await CreateUserEvents(email)
    return result[0]
}

async function RemoveUser(email) {
    var command = "DELETE FROM " + tableUsers + ' WHERE email = "' + email + '"'
    const result = await connection.query(command)
}

async function CreateUserEvents(email) {
    var command = "INSERT INTO " + tableEvents + ' VALUES ("' + email + '", false, false, false, false)'
    const result = await connection.query(command)
    return result
}

async function SetEventsForUser(user, event1, event2, event3, event4) {
    if (event1 == "on") event1 = true
    else event1 = false
    if (event2 == "on") event2 = true
    else event2 = false
    if (event3 == "on") event3 = true
    else event3 = false
    if (event4 == "on") event4 = true
    else event4 = false
    var command = "UPDATE " + tableEvents + " SET event1 = " + event1 + ", event2 = " + event2 + ", event3 = " + event3 + ", event4 = " + event4 + ' WHERE email = "' + user + '"'
    const result = await connection.query(command)
    return result
}
//const remove = await RemoveUser("nicolasschallock@csus.edu")
//const user = await AddUser("nicolasschallock@csus.edu", "Nicolas", "Schallock")
//async function AddMessage(sender, receiver, message) {
    //var command = "INSERT INTO " + tableMessages + ' VALUES ("' + sender + '", "' + receiver + '", "' + message + '")'
    //const result = await connection.query(command)
  //  return result[0]
//}



//const usr = await AddUser("jcena@csus.edu", "John", "Cena", "12345")
//const table = await GetTable(tableUsers)
//const validusr = await DoesUserExist("jena@csus.edu")
//const validpass = await isValidPassword("jcena@csus.edu", "12345");
//console.log(validusr)
//console.log(validpass);
//console.log(table)
//console.log(usr)

//connection.end()