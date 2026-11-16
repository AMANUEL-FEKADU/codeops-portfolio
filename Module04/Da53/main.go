package main

import "fmt"

// syntax func functionName(parameter type,..) (type,.. (this will decide what to be returned)){
// 	return smth
// }

// function if anonimas is written in main else it is written outside and called inside main
// func goodMorn() {
// 	fmt.Println("hello")
// }

// func double(num int) int {
// 	return num * 2
// }

// func sumall(nums ...int) (int, error) {
// 	if len(nums) == 0 {
// 		return 0, fmt.Errorf("no numbers provided")
// 	}
// 	sum := 0
// 	for _, num := range nums {
// 		if num <= 0 {
// 			return 0, fmt.Errorf("numbers must be greater than 0")
// 		}
// 		sum += num
// 	}
// 	return sum, nil

// }

// var person = map[string]string{
// 	"firstName": "Yod",
// 	"lastName":  "Abysinnia",
// 	"area":      "Bole",
// }

// type Dish struct {
// 	name    string
// 	price   int
// 	paid    bool
// 	ordered bool
// }
var area = []string{"Bole", "Megenagna", "Kazanchis", "Addis Ketema", "Ayat"}

func deliveryFeeSantim(area string) (int, error) {
	switch area {
	case "Bole":
		return 3000, nil
	case "Megenagna":
		return 4500, nil
	case "Kazanchis":
		return 3500, nil
	case "Addis Ketema":
		return 4000, nil
	}

	return 0, fmt.Errorf("%s is not covered on our Delivery locations", area)
}

var deliveryFeesSantim = map[string]int{
	"Bole":         3000,
	"Megenagna":    4500,
	"Kazanchis":    3500,
	"Addis Ketema": 4000,
}

func deliveryFeeSantimMap(area string) (int, error) {
	fee, ok := deliveryFeesSantim[area]
	if !ok {
		return 0, fmt.Errorf("%s is not covered on our Delivery locations", area)
	}
	return fee, nil
}

func main() {
	// goodMorn()

	// var x = 100
	// var y = x
	// y = 200
	// fmt.Println(y)

	// // var a = 4
	// // var b = a
	// b = 200
	// fmt.Println(a)

	// fmt.Println(double(5))
	// inpt, err := sumall()
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }
	// fmt.Println(inpt)

	// menu := []string{"bread", "tea", "banana", "coffee"}
	// newMenu := make([]string, 0, 8)
	// menu = append(menu, "apple")
	// fmt.Println(menu)
	// newMenu = append(newMenu, menu...)
	// newMenu[0] = "cookie"
	// fmt.Println(newMenu)
	// fmt.Println(menu)

	// newer := make([]string, 0, 8)
	// newer = menu[0:8]
	// fmt.Println(newer)
	// newer[0] = "cookie"
	// fmt.Println(newer)
	// fmt.Println(menu)

	//person["firstName"] = "Yodi"
	// fmt.Println(person)

	// d := Dish{name: "Shiro", price: 10000, paid: false, ordered: true}
	// fmt.Println(d)
	location, err := deliveryFeeSantim(area[1])
	fmt.Println(location, err)
	newarea, err2 := deliveryFeeSantimMap(area[1])
	fmt.Println(newarea, err2)

}

//if a function name starts in lower case it's private else it can be imported
// you can pass by value or reference
