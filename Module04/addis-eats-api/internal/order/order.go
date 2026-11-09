package main

import "fmt"

func lineTotal(priceSantim, qty int) int {
	return priceSantim * qty
}

func serviceFeeSantim(subTotal float64) float64 {
	return subTotal * 0.15
}

func deliveryFeeSantim(area string) (int, error) {
	switch area {
	case "Bole":
		return 3000, nil
	case "Megenagna":
		return 2000, nil
	}
	return 0, fmt.Errorf(area, "is not covered on our Delivery locations")
}

type Dish struct {
	Name string
	PriceSantim int
	paid bool
}

type Order struct {
	Dishes []Dish
	Area   string
	paid   bool
}

func (o Order) SubTotalSantim() int {
	total:=0
	for _, d:=range o.Dishes{total+=d.PriceSantim}
	return total
}

func (o *Order) AddItmes(d Dish){
	o.Dishes=append(o.Dishes, d)
}

func (o Order) TotalSantim() (int, error) {
	subTotal:=o.SubTotalSantim()
	fee:=int(serviceFeeSantim(float64(subTotal)))
	deliveryFee, err:=deliveryFeeSantim(o.Area)
	if err!=nil{
		return 0, err
	}
	return subTotal+fee+deliveryFee, nil

}
shiro:=Dish{
	Name:"Shiro",
	PriceSantim:5000,
	paid:false,
}
