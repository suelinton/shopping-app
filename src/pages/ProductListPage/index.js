import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import { PrimarySearchAppBar } from "../../components/PrimarySearchAppBar";
import { ProductList } from "../../components/ProductList";

export const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilterTextChange = (event) => {
    const filterValue = event.target.value;
    setFilterText(filterValue);

    const filter = products.filter((product) => {
      return product.name.toLowerCase().includes(filterValue.toLowerCase());
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
    ]
      .map((element) => [element, element, element, element, element])
      .flat()
      .map(({ name, price }, index) => ({
        id: index,
        name: `${name}${index}`,
        price: (price * Math.random() * 2).toFixed(2),
      }));

    setProducts(products);

    setFilteredProducts(products);
  }, []);

  return (
    <>
      <PrimarySearchAppBar
        filterText={filterText}
        handleFilterTextChange={handleFilterTextChange}
        key="PrimarySearchAppBar"
      />
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 10 }}
        sx={{ pt: 0, pl: 10, pr: 10, pb: 10 }}
        rowSpacing={2}
      >
        <Grid xs={12}>
          <div>
            <h3>
              {filterText.length
                ? `Exibindo resultado para: ${filterText}`
                : "Todos os produtos"}
            </h3>
            <div>
              <label>
                Ordenar:
                <select value={sortBy} onChange={handleSortByChange}>
                  <option value="name">Nome</option>
                  <option value="price">Valor</option>
                </select>
              </label>
            </div>
          </div>
        </Grid>
        <Grid xs={12}>
          <ProductList products={filteredProducts} />
        </Grid>
      </Grid>
    </>
  );
};
