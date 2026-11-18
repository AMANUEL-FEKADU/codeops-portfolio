package main

// import "fmt"

// var price int
// var tip float64
// var name string
// var paid bool

// var subtotal = 68500
// var deliveryFee = 3000

// var fee = int(float64(subtotal) * 5 / 100)
// var total = subtotal + deliveryFee + fee

// var Dishes = []string{"ሽሮ", "ዶሮ ወጥ ከአይብ እና እንቁላል ጋር ", "ጥብስ", "chicken", "wine"}
// var areas = []string{"Bole", "Megenagna", "Kazanchis", "Addis Ketema", "Ayat"}
// var subtotal = []int{10000, 30000, 60000}

// func main() {
// 	//q1
// 	// fmt.Println("Yod Abysinnia")
// 	// fmt.Println("Bole area")

// 	//q2
// 	// fmt.Printf("%v\n", price)
// 	// fmt.Printf("%v\n", tip)
// 	// fmt.Printf("%q\n", name)
// 	// fmt.Printf("%v\n", paid)

// 	// panic: assignment to entry in nil map
// 	// var person map[string]string
// 	// person["firstName"] = "Yod"

// 	//q3
// 	// fmt.Printf("Subtotal: ETB %.2f\n", float64(subtotal)/100)
// 	// fmt.Printf("Fee: ETB%.2f\n", float64(fee)/100)
// 	// fmt.Printf("Delivery Fee: ETB %.2f\n", float64(deliveryFee)/100)
// 	// fmt.Printf("Total: ETB %.2f\n", float64(total)/100)

// 	//q4
// 	// for _, dish := range Dishes {
// 	// 	fmt.Println(dish, "|bytes:", len(dish), " |runes:", len([]rune(dish)), " |is under 20 char:", len([]rune(dish)) <= 20)
// 	// }

// 	//q5
// 	fmt.Printf("%-12s %-12s %-12s %-12s\n", "Area", "Subtotal", "Delivery", "Total")

// 	for _, area := range areas {
// 		for _, subtotal := range subtotal {
// 			fee := 0

// 			if subtotal < 50000 {
// 				switch area {
// 				case "Bole":
// 					fee = 3000
// 				case "Kazanchis":
// 					fee = 3500
// 				case "Addis Ketema":
// 					fee = 4000
// 				case "Megenagna":
// 					fee = 4500
// 				default:
// 					fee = 5000
// 				}
// 			}

// 			total := subtotal + fee
// 			fmt.Printf("%-12s %-12.2f %-12.2f %-12.2f\n",
// 				area, float64(subtotal)/100, float64(fee)/100, float64(total)/100)
// 		}
// 	}
// }

import (
	"log"
	"net/http"
	"os"
	"time"

	"github.com/Amanuel-Fekadu/codeops-portfolio/Module04/addis-eats-api/internal/menu"
	"github.com/Amanuel-Fekadu/codeops-portfolio/Module04/addis-eats-api/internal/order"
)

type application struct {
	logger *log.Logger
	dishes menu.DishReader
	orders order.OrderStore
}

func main() {
	logger := log.New(os.Stdout, "", log.LstdFlags)
	store := menu.NewMemoryStore()
	app := &application{
		logger: logger,
		dishes: store,
		orders: order.NewMemoryStore(store),
	}

	addr := os.Getenv("API_ADDR")
	if addr == "" {
		addr = ":8080"
	}

	srv := &http.Server{
		Addr:         addr,
		Handler:      app.routes(),
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  time.Minute,
	}

	logger.Printf("starting server on %s", addr)
	logger.Fatal(srv.ListenAndServe())
}
