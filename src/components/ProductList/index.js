import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const cart = useCart();

  const handleFilterTextChange = (event) => {
    const filterValue = event.target.value;
    setFilterText(filterValue);

    const filter = products.filter((product) => {
      return product.name.toLowerCase().includes(filterText.toLowerCase());
    });

    setFilteredProducts(filter);
  };

  const handleSortByChange = (event) => {
    const sortValue = event.target.value;

    setSortBy(sortValue);

    if (sortValue === "price") {
      filteredProducts.sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      filteredProducts.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  };

  useEffect(() => {
    // fetch products from an API

    const products = [
      { id: 1, name: "T-Shirt", price: 19.99 },
      { id: 2, name: "Shorts", price: 14.99 },
      { id: 3, name: "Socks", price: 9.99 },
    ];
    setProducts(products);

    setFilteredProducts(products);
  }, []);

  return (
    <>
      <div>
        <h3>Lista de produtos</h3>
        <div>
          <label>
            Filter by Name:
            <input
              type="text"
              value={filterText}
              onChange={handleFilterTextChange}
            />
          </label>
        </div>
        <div>
          <label>
            Sort By:
            <select value={sortBy} onChange={handleSortByChange}>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </label>
        </div>
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
              <button onClick={() => cart.handleAddItem(product)}>
                Add Cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Link to="cart">Carrinho</Link>
    </>
  );
};
