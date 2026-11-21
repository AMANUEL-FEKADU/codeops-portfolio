package main

import "fmt"

// var number = 2500

// func tip() {
// 	tip := 300
// 	fmt.Println("Your tip is", tip)
// }

var resturant = "tadias addis"

var (
	fname = "Abebe kebede"
	age   int
)

func main() {

	// fmt.Println("initial print statement in go")
	// fmt.Println(number + number)
	// fmt.Println("Your total is", number)
	// tip()
	// this is first days class exercise
	service := 200
	tip := 25.50
	fmt.Println(service + 90)
	name := "ከበደ"
	fmt.Println(len(name))
	fmt.Println([]rune(name))

	fmt.Println(fname, " ", resturant)
	fmt.Println(age, ":age ")

	total := int(float64(service)+tip) / 100 //assumin it was initialy in santim
	fmt.Println("total: ", total, "ETB")

	//len works for charackers in english but for amharic it counts the bytes
	// use it with rune to find lenght of amharic characters

	wordCk := "Abebe"
	wordck := "አበበ"
	println("eng: ", len(wordCk))
	println("Amh: ", len([]rune(wordck)))
}
