package main

import (
    "net/http"
    "net/http/httptest"
    "testing"
)

func connTestHandler(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("Connection test successful"))
}

func protectedConnTestHandler(w http.ResponseWriter, r *http.Request) {
    http.Error(w, "Unauthorized", http.StatusUnauthorized)
}

func TestConnTestHandler(t *testing.T) {
    // Create a new HTTP request to the "/conntest" endpoint
    req, err := http.NewRequest("GET", "/conntest", nil)
    if err != nil {
        t.Fatal(err)
    }

    // Create a new ResponseRecorder to record the response
    rr := httptest.NewRecorder()

    // Call the handler function, passing in the ResponseRecorder and Request
    handler := http.HandlerFunc(connTestHandler)
    handler.ServeHTTP(rr, req)

    // Check that the response code is 200 OK
    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusOK)
    }

    // Check that the response body contains the expected string
    expected := "Connection test successful"
    if rr.Body.String() != expected {
        t.Errorf("handler returned unexpected body: got %v want %v",
            rr.Body.String(), expected)
    }
}

func TestProtectedConnTestHandler(t *testing.T) {
    req, err := http.NewRequest("GET", "/protectedconntest", nil)
    if err != nil {
        t.Fatal(err)
    }

    rr := httptest.NewRecorder()

    handler := http.HandlerFunc(protectedConnTestHandler)
    handler.ServeHTTP(rr, req)

    if status := rr.Code; status != http.StatusUnauthorized {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusUnauthorized)
    }

    expected := "Unauthorized\n"
    if rr.Body.String() != expected {
        t.Errorf("handler returned unexpected body: got %v want %v",
            rr.Body.String(), expected)
    }
}
