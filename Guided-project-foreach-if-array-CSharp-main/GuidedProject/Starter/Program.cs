using System; // using statement enables you to write code that implements members of the System namespace without requiring you to specify System

// initialize variables - graded assignments 
int currentAssignments = 5; // variable, currentAssignments is used to hold the number of exams that have been scored

// create an integer array that will be used for Sophia's assignment scores
int[] sophiaScores = new int[5]; // the new operator is to specify that you're creating a new instance of an array

// variables that are used to hold the scores of graded assignments
int sophia1 = 90;
int sophia2 = 86;
int sophia3 = 87;
int sophia4 = 98;
int sophia5 = 100;

int andrew1 = 92;
int andrew2 = 89;
int andrew3 = 81;
int andrew4 = 96;
int andrew5 = 90;

int emma1 = 90;
int emma2 = 85;
int emma3 = 87;
int emma4 = 98;
int emma5 = 68;

int logan1 = 90;
int logan2 = 95;
int logan3 = 87;
int logan4 = 88;
int logan5 = 96;

// These variables are integers that are being used to hold the sum of the exam scores.
int sophiaSum = 0;
int andrewSum = 0;
int emmaSum = 0;
int loganSum = 0;

// These variables are decimals that are used to hold the calculated average score.
decimal sophiaScore;
decimal andrewScore;
decimal emmaScore;
decimal loganScore;

// These equations is used to calculate the sum of the assignment scores for each student.
sophiaSum = sophia1 + sophia2 + sophia3 + sophia4 + sophia5;
andrewSum = andrew1 + andrew2 + andrew3 + andrew4 + andrew5;
emmaSum = emma1 + emma2 + emma3 + emma4 + emma5;
loganSum = logan1 + logan2 + logan3 + logan4 + logan5;

// These equations calculates the average score
    // The numerator is cast as a decimal to ensure the division retains the fractional component
sophiaScore = (decimal)sophiaSum / currentAssignments;
andrewScore = (decimal)andrewSum / currentAssignments;
emmaScore = (decimal)emmaSum / currentAssignments;
loganScore = (decimal)loganSum / currentAssignments;

Console.WriteLine("Student\t\tGrade\n");
Console.WriteLine("Sophia:\t\t" + sophiaScore + "\tA-");
Console.WriteLine("Andrew:\t\t" + andrewScore + "\tB+");
Console.WriteLine("Emma:\t\t" + emmaScore + "\tB");
Console.WriteLine("Logan:\t\t" + loganScore + "\tA-");

Console.WriteLine("Press the Enter key to continue");
Console.ReadLine(); // This will pause the program until the user presses the Enter key

