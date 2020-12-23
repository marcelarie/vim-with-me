
import {Folder} from "../src/model/folder.js"
import {File} from "../src/model/file.js"

export const mainFolder = new Folder()

if (localStorage.getItem('files') !== null) {
    const storage = localStorage.getItem('files');
    mainFolder.files = JSON.parse(storage)
} else {
    mainFolder.createFile('index.html',
        `<!DOCTYPE html> < html lang = "en" >
    <head>
        <meta charset="UTF-8">
            <title></title>
    </head>
        <body>

        </body>
    </html> `)
    mainFolder.createFile('style.css',
        `
:root {
    /*gruvbox*/
    --gruvbox-background: #282828;
    --gruvbox-background-light: #fbf1c7;
    --gruvbox-red : #cc241d;
    --gruvbox-green : #98971a;
    --gruvbox-yellow : #d79921;
    --gruvbox-blue: #458588;
    --gruvbox-purple: #b16286;
    --gruvbox-aqua: #689d6a;
    --gruvbox-gray: #a89984;
    --gruvbox-orange: #fe8019;
    --gruvbox-light-red : #fb4934;
    --gruvbox-light-green : #b8bb26;
    --gruvbox-light-yellow : #fabd2f;
    --gruvbox-light-blue: #83a598;
    --gruvbox-light-purple: #d3869b;
    --gruvbox-light-aqua: #8ec07c;
    --gruvbox-fg: #ebdbb2;
    --gruvbox-grey-comment: #928374;
    --gruvbox-grey-dark: #504945;
    --gruvbox-grey-darker: #3C3836;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
}

body {
    background-color: var(--gruvbox-background); 
} `)
    mainFolder.createFile('main.js',
        `
import {File} from "./file.js"

class Folder {
    constructor(files = {}) {
        this.files = files;
    }

    createFile(filename, content) {
        this.files[filename] = new File(filename, content)
    }
}

export {Folder} `)

    mainFolder.createFile('vimtutor',
        `
===============================================================================
=    W e l c o m e   t o   t h e   V I M(al)   T u t o r    -   Version 0.5   =
===============================================================================

Vim is a very powerful editor that has many commands, too many to explain in a 
tutor such as this, of course my version is not as powerful so this tutor is 
designed to describe enough of the commands that you will be able to easily use 
Vim as an all-purpose editor.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            			Lesson 1.1:  MOVING THE CURSOR

   ** To move the cursor, press the h,j,k,l keys as indicated. **
	     ^
	     k		    Hint:  The h key is at the left and moves left.
    < h	    l >		   The l key is at the right and moves right.
	     j			   The j key looks like a down arrow
	     v
  1. Move the cursor around the screen until you are comfortable.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    	      	     Lesson 1.2: ENTERING AND EXITING VIM

  !! NOTE: Before executing any of the steps below, read this entire lesson!!

  1. Press the <ESC> key (to make sure you are in Normal mode).

  2. Type:			:q <ENTER>.

---> This exits the editor WITHOUT saving any changes you have made.
     If you want to save the changes and exit type:
				:w <ENTER> :q <ENTER>

  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    	           Lesson 1.3: TEXT EDITING - DELETION

** While in Normal mode press	x  to delete the character under the cursor. **

  1. Move the cursor to the line below marked --->.

  2. To fix the errors, move the cursor until it is on top of the
     character to be deleted.

  3. Press the	x  key to delete the unwanted character.

  4. Repeat steps 2 through 4 until the sentence is correct.

---> The ccow jumpedd ovverr thhe mooon.

  5. Now that the line is correct, go on to Lesson 1.4.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        	Lesson 2.4: AN EXCEPTION TO  'COMMAND-OBJECT'
    
	       ** Type	 D   to delete a whole line. **

  Due to the frequency of whole line deletion, the designers of Vim decided
  it would be easier to simply type D to delete a line.

  1. Move the cursor to the second line in the phrase below.
  2. Type  D  to delete the line.
  3. Now move to the fourth line.

      1)  Roses are red,
      2)  Mud is fun,
      3)  Violets are blue,
      4)  I have a car,
      5)  Clocks tell time,
      6)  Sugar is sweet
      7)  And so are you.


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            			 Lesson 3.1: THE PUT COMMAND

       ** Type	p  to put the last copy (yy) after the cursor. **

  1. Move the cursor to the first line in the set below.

  2. Type  yy  to delete the line and store it in Vim's buffer.

  3. Move the cursor to the line ABOVE where the deleted line should go.

  4. While in Normal mode, type    p	 to replace the line.

  5. Repeat steps 2 through 4 to put all the lines in correct order.

     d) Can you learn too?
     b) Violets are blue,
     c) Intelligence is learned,
     a) Roses are red,

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            	      Lesson 4.4: A WAY TO CHANGE ERRORS

	** Type  :%s/old/new/g  to substitute 'new' for 'old'. **

  1. Now type	:%s/thee/the/g	  meaning substitute globally on the line.
     This changes all occurrences on the line.

---> thee best time to see thee flowers is in thee spring.
 

                                  ENJOY!!

                               marcel arie ©

        `)
}

console.log(mainFolder)
