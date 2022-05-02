# Wcat 🚀🚀

This command is used to display or make a copy of content of one or more files in the terminal


## Commands:

1- wcat "filePath" =>displays content of the file in the terminal

2- wcat "filePath1" "filePath2" "filePath3"... =>displays the content of all of the listed files in the wcat command in concatenated form in the given order.

3- wcat -s "filePath" => converts multiple empty lines (big line-breaks) into a singular linebreak.

4- wcat -n "filePath" => gives numberings to all the existing lines in the listed files' content from the command line.

5- wcat -b "filePath" => gives numbering to only non- empty lines in the content of files listed in the wcat command.

6- wcat "file1Path" >
 "file2Path"   => adds all the content of file1 into file2 by overriding the original data in file2, if file2 doesn't exist it creates file2 and adds content from file1 into file2

7- wcat "file1Path" >> "file2Path"  => appends all the content from file1 into file2. 

8- node wcat -s "filePath1" > "filePath2" => get the file content of filename, remove large spaces and saves the output in filename2

9- we can also mix and match the options

### Note - 6, 7 and 8 are Operating System features in CLI terminal.


## Corner Cases
1- If file entered is not found then it gives file does not exist error message

2- -n and -b are mutually exclusive options, so if user types both of them together it should give an error instead of executing both.

### Files 

The main input and function calls are done in wcat.js file and remaining features are implemented in their own separate files using the module import functionality on nodejs. This makes the complete code a lot more modular and easy to debug/change according to requirement.