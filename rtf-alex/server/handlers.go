package main

import (
	"encoding/json"
	"net/http"
)

func sendResponse(w http.ResponseWriter, response interface{}) {
	w.Header().Set("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, PATCH")
	json.NewEncoder(w).Encode(response)

}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	echo := Echo{
		Message: "Hello from Server",
	}
	sendResponse(w, echo)

}
