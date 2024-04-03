//TODO
- retrieve dockeruser name / password from env variables ✅
-  set docker username/password in GIT ✅
-  Make a snyk project?
-  Add Dockerfile to the cookie cutter ⚡

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

# Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

# Notes

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

# TDD
 Validate if function received at least 1 parameter
    🤲 - Input: highAndLow("1 2 3 4 5") -> true
    🤲 - Input: highAndLow() -> false

Validate if integers are given in string format
    🤲 - Input: highAndLow("1 2 3 4 5") -> true
    🤲 - Input: highAndLow(1,2, 3,4,5) -> false

Validate if the string parameter contains at least 1 number
    🤲 - Input: highAndLow("1 2 3") -> true
    🤲 - Input: highAndLow("A","B") -> false

