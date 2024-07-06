JS serveer is only necessary to allow users to arrive at "deep links" such as page /2 or /3 
In forum we don't want that as we want users to have to log in.  
The server sanitises requests to prevent hacking by "directory traversal", 
then serves index.html no matter what page is requested. The client (app.js) 
handles attempts to access "pages" that don't exist.
