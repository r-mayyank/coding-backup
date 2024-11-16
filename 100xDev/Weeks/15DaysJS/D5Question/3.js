// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

let score = 19;

switch (score) {
    case score>90 && score<=100: 
        score = "A";
        break;
    case score>70 && score<=90: 
        score = "B";
        break;
    case score>40 && score<=70: 
        score = "C";
        break;
    case score>20 && score<=40: 
        score = "D";
        break;

    default:
        score = "F"
        break;
}
console.log(score);