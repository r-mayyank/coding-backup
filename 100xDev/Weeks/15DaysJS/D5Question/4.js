// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).

let time = parseInt(prompt("Input hour(Like 9, 13, 21)"));

switch (time) {
    case time<=12 && time>4:
        console.log("Good morning");
        break;
    case time<=5 && time>12:
        console.log("Good Afternoon");
        break;
    case time<=8 && time>5:
        console.log("Good evening");
        break;

    default:
        console.log("Good night");
        break;
}