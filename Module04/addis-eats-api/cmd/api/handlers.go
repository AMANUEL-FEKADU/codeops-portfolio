package main

import (
	"encoding/json"
	"errors"
	"net/http"

	"github.com/Amanuel-Fekadu/codeops-portfolio/Module04/addis-eats-api/internal/menu"
	"github.com/Amanuel-Fekadu/codeops-portfolio/Module04/addis-eats-api/internal/order"
)

func (app *application) health(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("ok"))
}

func (app *application) listDishes(w http.ResponseWriter, r *http.Request) {
	dishes, err := app.dishes.All()
	if err != nil {
		app.logger.Println(err)
		writeError(w, http.StatusInternalServerError, "internal error")
		return
	}
	writeJSON(w, http.StatusOK, dishes)
}

func (app *application) showDish(w http.ResponseWriter, r *http.Request) {
	id := r.PathValue("id") // Go 1.22 wildcard path variable
	dish, err := app.dishes.ByID(id)
	switch {
	case errors.Is(err, menu.ErrNotFound):
		writeError(w, http.StatusNotFound, "dish not found")
	case err != nil:
		app.logger.Println(err)                                         // Log actual internal error
		writeError(w, http.StatusInternalServerError, "internal error") // Return safe summary
	default:
		writeJSON(w, http.StatusOK, dish)
	}
}

func (app *application) createOrder(w http.ResponseWriter, r *http.Request) {
	// Expected JSON input: {"dish_ids": ["d1", "d3"]}
	var input struct {
		DishIDs []string `json:"dish_ids"`
	}

	if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
		writeError(w, http.StatusBadRequest, "invalid JSON payload")
		return
	}

	newOrder, err := app.orders.Create(input.DishIDs)
	switch {
	case errors.Is(err, order.ErrInvalidItems):
		writeError(w, http.StatusBadRequest, err.Error())
	case errors.Is(err, menu.ErrNotFound):
		writeError(w, http.StatusBadRequest, err.Error())
	case err != nil:
		app.logger.Println(err)
		writeError(w, http.StatusInternalServerError, "internal error")
	default:
		writeJSON(w, http.StatusCreated, newOrder)
	}
}

func (app *application) listOrders(w http.ResponseWriter, r *http.Request) {
	orders, err := app.orders.All()
	if err != nil {
		app.logger.Println(err)
		writeError(w, http.StatusInternalServerError, "internal error")
		return
	}
	writeJSON(w, http.StatusOK, orders)
}

func (app *application) showOrder(w http.ResponseWriter, r *http.Request) {
	id := r.PathValue("id")
	ord, err := app.orders.ByID(id)
	switch {
	case errors.Is(err, order.ErrNotFound):
		writeError(w, http.StatusNotFound, "order not found")
	case err != nil:
		app.logger.Println(err)
		writeError(w, http.StatusInternalServerError, "internal error")
	default:
		writeJSON(w, http.StatusOK, ord)
	}
}
