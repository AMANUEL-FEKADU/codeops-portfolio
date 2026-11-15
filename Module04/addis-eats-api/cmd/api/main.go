package main

import "fmt"

var deliveryFee int
var tip float64
var name string
var paid bool

func main() {
	fmt.Println("Yod Abysinnia")
	fmt.Println("Bole area")

	fmt.Printf("%v\n", deliveryFee)
	fmt.Printf("%v\n", tip)
	fmt.Printf("%q\n", name)
	fmt.Printf("%v\n", paid)

	var person map[string]string
	person["firstName"] = "Yod"

}
