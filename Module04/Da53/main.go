package main

import "fmt"

// syntax func functionName(parameter type,..) (type,.. (this will decide what to be returned)){
// 	return smth
// }

// function if anonimas is written in main else it is written outside and called inside main
func goodMorn() {
	fmt.Println("hello")
}

func main() {
	goodMorn()

	var x = 100
	var y = x
	y = 200
	fmt.Println(y)

	// // var a = 4
	// // var b = a
	// b = 200
	// fmt.Println(a)
}

//if a function name starts in lower case it's private else it can be imported
// you can pass by value or reference
