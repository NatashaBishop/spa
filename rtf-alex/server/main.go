package main

import (
	"fmt"
	"net/http"
)

func main() {

	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/posts", postsHandler)

	fmt.Println("Server started at port 8080")
	http.ListenAndServe(":8080", nil)
}
