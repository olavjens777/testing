var user = prompt("Are you a guy?").toLowerCase();
switch(user) {
    case 'yes':
        if(prompt("How old are you?")>9 && prompt("Are u sure?") === true) {
            console.log("So you are a guy who is older than 9 years old.")
        }
        else {
            console.log("You can't play this game ahaha!")
        }
        break;
    case 'no':
        console.log("You are a girl. Why d you play games?")
        break;
    case 'maybe':
        console.log("You smart huh?")
        if (prompt("What is your job") === "Hacker" || "Troll") {
            console.log("Fuck.")
        }
        else {
            console.log("You are too smart for this game.")
        }
        break;
    default:
        
}
