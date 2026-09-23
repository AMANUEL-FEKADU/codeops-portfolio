import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from './useFetch';
import DishList from './DishList';
import Loading from './Loading';
import ErrorPage from './ErrorPage';
import styles from './Menu.module.css';

function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: rawDishes, loading, error } = useFetch('https://addis-eats-backend.onrender.com/menu/');

  if (loading) return <Loading />;
  if (error) return <ErrorPage message={error} />;

  const dishes = Array.isArray(rawDishes) ? rawDishes : [];

  const categories = ['All', ...new Set(dishes.map((dish) => dish.category).filter(Boolean))];

  const currentCategory = searchParams.get('category') || 'All';
  const searchQuery = searchParams.get('search') || '';

  const handleSearchChange = (e) => {
    const value = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set('search', value);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const handleCategoryChange = (category) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  };

  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory =
      currentCategory === 'All' || dish.category === currentCategory;

    const matchesSearch =
      dish.nameEn?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Menu</h1>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.filterContainer}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={currentCategory === cat ? styles.activeFilter : styles.filterBtn}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <DishList dishes={filteredDishes} />
    </div>
  );
}

export default Menu;