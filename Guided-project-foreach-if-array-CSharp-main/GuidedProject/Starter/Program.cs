using System; // using statement enables you to write code that implements members of the System namespace without requiring you to specify System

// initialize variables - graded assignments 
int examAssignments = 5; // variable, currentAssignments is used to hold the number of exams that have been scored

// create an integer array that will be used for Sophia's assignment scores
int[] sophiaScores = new int[] { 90, 86, 87, 98, 100, 94, 90 }; // the new operator is to specify that you're creating a new instance of an array
int[] andrewScores = new int[] { 92, 89, 81, 96, 90, 89 };
int[] emmaScores = new int[] { 90, 85, 87, 98, 68, 89, 89, 89 };
int[] loganScores = new int[] { 90, 95, 87, 88, 96, 96 };

// Student names
string[] studentNames = new string[] { "Sophia", "Andrew", "Emma", "Logan" };

int[] studentScores = new int[10]; // This creates an array of integers that can hold 10 values

string currentStudentLetterGrade = ""; // This creates a string variable that will be used to hold the letter grade for the current student

Console.WriteLine("Student\t\tGrade\n");

foreach (string name in studentNames)

{
    string currentStudent = name;

    if (currentStudent == "Sophia")
        studentScores = sophiaScores;

    else if (currentStudent == "Andrew")
        studentScores = andrewScores;

    else if (currentStudent == "Emma")
        studentScores = emmaScores;

    else if (currentStudent == "Logan")
        studentScores = loganScores;

    // These variables are integers that are being used to hold the sum of the exam scores.
    int sumAssignmentScores = 0;
    // These variables are decimals that are used to hold the calculated average score.
    decimal currentStudentGrade;

    int gradedAssignments = 0; // // initialize/reset a counter for the number of assignments

    foreach (int score in studentScores)
    {
        // add the exam score to the sum
        sumAssignmentScores += score;
        // Once your foreach loop has iterated through all of the values in the sophiaScores array, sophiaSum will contain the sum of her scores
    }

    // These equations calculates the average score
    // The numerator is cast as a decimal to ensure the division retains the fractional component
    currentStudentGrade = (decimal)sumAssignmentScores / examAssignments;

    if (currentStudentGrade >= 97)
        currentStudentLetterGrade = "A+";

    else if (currentStudentGrade >= 93)
        currentStudentLetterGrade = "A";

    else if (currentStudentGrade >= 90)
        currentStudentLetterGrade = "A-";

    else if (currentStudentGrade >= 87)
        currentStudentLetterGrade = "B+";

    else if (currentStudentGrade >= 83)
        currentStudentLetterGrade = "B";

    else if (currentStudentGrade >= 80)
        currentStudentLetterGrade = "B-";

    else if (currentStudentGrade >= 77)
        currentStudentLetterGrade = "C+";

    else if (currentStudentGrade >= 73)
        currentStudentLetterGrade = "C";

    else if (currentStudentGrade >= 70)
        currentStudentLetterGrade = "C-";

    else if (currentStudentGrade >= 67)
        currentStudentLetterGrade = "D+";

    else if (currentStudentGrade >= 63)
        currentStudentLetterGrade = "D";

    else if (currentStudentGrade >= 60)
        currentStudentLetterGrade = "D-";

    else
        currentStudentLetterGrade = "F";

    Console.WriteLine($"{currentStudent}\t\t{currentStudentGrade}\t{currentStudentLetterGrade}");


}

Console.WriteLine("Press the Enter key to continue");
Console.ReadLine(); // This will pause the program until the user presses the Enter key



