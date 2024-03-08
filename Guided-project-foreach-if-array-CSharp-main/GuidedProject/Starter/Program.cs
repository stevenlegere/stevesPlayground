using System; // using statement enables you to write code that implements members of the System namespace without requiring you to specify System

// initialize variables - graded assignments 
int currentAssignments = 5; // variable, currentAssignments is used to hold the number of exams that have been scored

// create an integer array that will be used for Sophia's assignment scores
int[] sophiaScores = new int[] { 90, 86, 87, 98, 100 }; // the new operator is to specify that you're creating a new instance of an array
int[] andrewScores = new int[] { 92, 89, 81, 96, 90 };
int[] emmaScores = new int[] { 90, 85, 87, 98, 68 };
int[] loganScores = new int[] { 90, 95, 87, 88, 96 };

// These variables are integers that are being used to hold the sum of the exam scores.
int sophiaSum = 0;


// These variables are decimals that are used to hold the calculated average score.
decimal sophiaScore;

foreach (int score in sophiaScores)
{
    // add the exam score to the sum
    sophiaSum += score;
}

// These equations calculates the average score
    // The numerator is cast as a decimal to ensure the division retains the fractional component
sophiaScore = (decimal)sophiaSum / currentAssignments;


Console.WriteLine("Student\t\tGrade\n");
Console.WriteLine("Sophia:\t\t" + sophiaScore + "\tA-");


Console.WriteLine("Press the Enter key to continue");
Console.ReadLine(); // This will pause the program until the user presses the Enter key

