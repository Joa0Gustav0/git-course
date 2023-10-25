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

//function for validating data

//function for console loging a validation log

insertTitle("Aurora | Find Artists App")
insertParagraph("Aurora is an application for find your favorite artists and know more about them!")