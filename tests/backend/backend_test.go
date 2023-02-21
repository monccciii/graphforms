package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestConnTestHandler(t *testing.T) {
	req, err := http.NewRequest("GET", "/conntest", nil)
	if err != nil {
		t.Fatal(err)
	}

	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(ConnTestHandler)

	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}
}
