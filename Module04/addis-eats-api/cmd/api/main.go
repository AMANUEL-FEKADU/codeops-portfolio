package main

import "fmt"

// var price int
// var tip float64
// var name string
// var paid bool

// var subtotal = 68500
// var deliveryFee = 3000

// var fee = int(float64(subtotal) * 5 / 100)
// var total = subtotal + deliveryFee + fee

var Dishes = []string{"ሽሮ", "ዶሮ ወጥ ከአይብ እና እንቁላል ጋር ", "ጥብስ", "chicken", "wine"}

func main() {
	//q1
	fmt.Println("Yod Abysinnia")
	fmt.Println("Bole area")

	//q2
	// fmt.Printf("%v\n", price)
	// fmt.Printf("%v\n", tip)
	// fmt.Printf("%q\n", name)
	// fmt.Printf("%v\n", paid)

	// panic: assignment to entry in nil map
	// var person map[string]string
	// person["firstName"] = "Yod"

	//q3
	// fmt.Printf("Subtotal: ETB %.2f\n", float64(subtotal)/100)
	// fmt.Printf("Fee: ETB%.2f\n", float64(fee)/100)
	// fmt.Printf("Delivery Fee: ETB %.2f\n", float64(deliveryFee)/100)
	// fmt.Printf("Total: ETB %.2f\n", float64(total)/100)

	//q4
	for _, dish := range Dishes {
		fmt.Println(dish, "|bytes:", len(dish), " |runes:", len([]rune(dish)), " |is under 20 char:", len([]rune(dish)) <= 20)
	}
}
