package main

import (
	"fmt"
	"net/http"
)

func main() {

	http.HandleFunc("/", homeHandler)

	fmt.Println("Setver started at port 8080")
	http.ListenAndServe(":8080", nil)
}
