/*
@app.route("/")
def home():
    html_page = get_html("index")
    username = ""
    nousername = ""

    # If username exist (check Dynamic interface JS)
    if username == True:
        # Display the Homepage with "Welcome username" and the menu
        return html_page.replace("$$USERNAME$$", username)
    # No username
    else:
        # Display the Homepage with "Welcome" hide the menu and add a field
        # and button to add a username. Then display the full Homepage
        # with "Welcome username"
        return html_page.replace("$$NOUSERNAME$$", nousername)






function displayWelcome(){ //retrieves items in the localStorage

    // checker si déjà un username et ...
    for (var i = 1; i <= localStorage.length; i++) {
        const paragraph = document.createElement("p");
        const value = localStorage.getItem(i.toString());
        keyItem = localStorage.length;
        paragraph.className = "random";
        paragraph.innerText = value;
        content.appendChild(paragraph);

        console.log("restore value " + value);
        console.log("restore key " + localStorage.key(i));
        console.log("lenght" + localStorage.length);
        console.log("i = " + i);
    }

*/




const welcomeMsg = document.getElementById("welcomeMsg");
const myButton = document.getElementById("myButton");
const myUsername = document.getElementById("myUsername");
const keyItem = "username";
let displayUsername = "";

function getUsername(){
    localStorage.setItem(keyItem, myUsername.value);
    changeWelcome();
}

function changeWelcome(){
    if (localStorage.getItem("username") != -1){
        displayUsername = localStorage.getItem("username");
        welcomeMsg.innerText = "Welcome back " + displayUsername;
        document.getElementById("myUsername").style.visibility = "hidden";
        document.getElementById("myButton").style.visibility = "hidden";         
    }
}

//displayWelcome();
if (localStorage.getItem("username") != -1 && localStorage.getItem("username") != null){
    changeWelcome();
}
else{
    document.getElementById("myUsername").style.visibility = "visible";
    document.getElementById("myButton").style.visibility = "visible";
}

myButton.addEventListener("click", getUsername);

/*
userName.value


//avec un event listener
changeWelcome()


Let's assume the user clicks the button, what is happening: 
If the condition localStorage.getItem("username") != -1 
is met, we write a welcome message that takes the value from the local storage. 
Else, we take the username from the text box and display the welcome message.

const paragraph = document.getElementById("welcomeMsg");
const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");

function changeParagraph(){
    paragraph.innerText = myText.value;
}

myButton.addEventListener("click", changeParagraph);

*/
