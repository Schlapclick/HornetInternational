var ActiveUser = "fred@csus.edu"

export { SetActiveUser, GetActiveUser }

async function SetActiveUser(email) {
    ActiveUser = email
}

async function GetActiveUser() {
    return ActiveUser
}