### VIM(al)
Vim clone with JavaScript.  

<p align="center">
    <img src="src/img/vim-logo.png">
</p>
<h1 align="center">TODO's</h1>


<h2 align="center">Phase 1</h2>  

- [x] Text area.  
- [x] Left number column.  
- [x] Color palette.  
- [x] Add terminal input.
    - [x] Creat input form.  
    - [x] Show input form only when : key is clicked.   
    - [x] Hide with Esc key.  
    - [x] Add eventListener.  


<h2 align="center">Phase 2</h2>     

- [x] Carret move.  
- [x] Save files.   
    - [x] if file its already saved no need to put name.
    - [x] if filename exist alert.
    - [x] if current file progress isnt saved alert().
    - [x] save multiple files at the same time.
    - [x] check if any of the files haves the current progress.
- [x] Normal mode.  
    - [x] move carret.
- [ ] Visual mode.  
    - [ ] select words.
    - [ ] capital V for full line selection.
    - [ ] yy with visual selection yanks that selection.
- [x] Insert mode.   
    - [x] all keys for writing.
- [x] Move with h j k l.   
- [x] Esc to exit to normal mode.    
- [x] x to delete a character.     
- [x] D to delete a line.    
- [x] yy to copy a line. 
- [x] p for paste.
- [ ] :n name-of-file for new file
- [ ] u to go undo.     
- [ ] gg goes to line 0.
- [ ] G goes to end of file.
- [ ] Cntrl + R to redo.   

<h2 align="center">Phase 3</h2>  

- [x] : to open terminal mode.     
- [x] :%s/word/word-to-replace/g command.    
- [ ] syntax highlighting for JS.  
- [ ] Relative numbers.  
- [x] Airline.   
- [x] NerdTree.    
- [ ] Split screen.   
- [ ] .vimrc    

<h2 align="center">Phase 4</h2>  

- [ ] Colorschemes.   
- [x] Vimtutor.    
- [x] LocalStorage.
- [ ] Save in computer.
- [x] Open file from computer.

<h3 align="center">Daily Log</h2>  

    - 18/12/2020 -
    Indexed all the elements on the html div container.
    Added content editable to div to write.
    Create the terminal input.
    Add event listeners for the terminal input ( : and Esc )
    Created File and Folder classes.
    Added functions to save files.
    Added event listeners for insert and normal modes.
    
    - 19/12/2020 -
    Normal mode.
    Insert mode.
    Caret move.
    x to delete a character.
    Move with h j k l.
    div to textarea.
    Change saveFile() to work with textarea.value.
    Start left number column.
    
    - 20/12/2020 -
    Left number column.
    Nerd-tree.
    
    - 21/12/2020 -
    Make the terminal input stick to bottom.
    Airline
    Finish NerdTree.
    
    - 22/12/2020 - 
    D to delete a line.
    yy to copy a line.
    Delete file from nerdTree.
    p for paste.
    Add ~~~~ to the background.
    :%s/word/another/g to replace a word in whole file.
    Local Storage.
    
    - 22/12/2020 -
    Vimtutor
    Open file from browser.





