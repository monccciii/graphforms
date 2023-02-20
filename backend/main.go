package main

import (
	"github.com/monccciii/graphforms/app"
)

func main() {
	err := app.SetupApp()
	if err != nil {
		panic(err)
	}
}
