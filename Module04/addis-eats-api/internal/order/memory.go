package order

import (
	"fmt"
	"sync"

	"github.com/Amanuel-Fekadu/codeops-portfolio/Module04/addis-eats-api/internal/menu"
)

type memoryStore struct {
	mu     sync.RWMutex
	orders []Order
	dishes menu.DishReader
	nextID int
}

// NewMemoryStore initializes an empty thread-safe order store connected to a DishReader
func NewMemoryStore(dishes menu.DishReader) *memoryStore {
	return &memoryStore{
		orders: []Order{},
		dishes: dishes,
		nextID: 1,
	}
}

func (s *memoryStore) All() ([]Order, error) {
	s.mu.RLock()
	defer s.mu.RUnlock()

	dst := make([]Order, len(s.orders))
	copy(dst, s.orders)
	return dst, nil
}

func (s *memoryStore) ByID(id string) (Order, error) {
	s.mu.RLock()
	defer s.mu.RUnlock()

	for _, o := range s.orders {
		if o.ID == id {
			return o, nil
		}
	}
	return Order{}, ErrNotFound
}

func (s *memoryStore) Create(dishIDs []string) (Order, error) {
	if len(dishIDs) == 0 {
		return Order{}, ErrInvalidItems
	}

	var items []menu.Dish
	total := 0

	// Validate each dish ID and calculate total before locking the order slice
	for _, id := range dishIDs {
		dish, err := s.dishes.ByID(id)
		if err != nil {
			return Order{}, fmt.Errorf("dish %s: %w", id, err)
		}
		items = append(items, dish)
		total += dish.PriceSantim
	}

	s.mu.Lock()
	defer s.mu.Unlock()

	newOrder := Order{
		ID:          fmt.Sprintf("o%d", s.nextID),
		Items:       items,
		TotalSantim: total,
		Status:      "pending",
	}
	s.nextID++
	s.orders = append(s.orders, newOrder)

	return newOrder, nil
}
