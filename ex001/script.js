//function for console loging title
const insertTitle = (title) => {
    
    var boxWidth = ""

    for (var i = 0; i < title.length; i++){
        boxWidth += " "
    }

    console.log("+ " + boxWidth + " +")
    console.log("- " + title + " -")
    console.log("+ " + boxWidth + " +")

}

//function for console loging a paragraph
const insertParagraph = (text) => {
    console.log(text)
}

//function for console loging user's inserted data
const insertUserData = (username, password) => {
    console.log("Hello, " + username + ".")
    console.log("Your password is: " + password)
}

insertTitle("List | Listing Application")
insertParagraph("List is an application for listing several stuffs. List is used by many corporations.")
insertUserData("Jeff", "Jef3780998frey")