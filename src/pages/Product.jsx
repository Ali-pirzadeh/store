import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import Container from "../component/Container";
import Card from "../component/Card";
import Loader from "../component/Loader";
import { FilterCategury, getInitialQuery, QueryProducts } from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../component/SearchBox";
import SidebarBox from "../component/SidebarBox";

function Product() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = QueryProducts(products, query.search);
    finalProducts = FilterCategury(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);


  if (!displayed.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <Container>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className="flex flex-col md:flex-row-reverse w-full gap-4">
        <SidebarBox setQuery={setQuery} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full md:w-3/4">
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Product;
