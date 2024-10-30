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

func postsHandler(w http.ResponseWriter, r *http.Request) {
	//request db
	//result(we will implement database later instead of this):
	posts := []Post{
		Post{
			Id:        1,
			Author_id: 1,
			Date:      1728318287544,
			Content:   "Post1",
		},
		Post{
			Id:        2,
			Author_id: 1,
			Date:      4342143214214,
			Content:   "Post 2",
		},
	}

	sendResponse(w, posts)

	//["post" : "{"id" : 1, "author_id" : 1 }", "post" : "" ]

}
