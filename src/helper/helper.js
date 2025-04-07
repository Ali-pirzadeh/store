const QueryProducts = (products , search) => {
    if (!search) return products;
    const queryProducts = products.filter((p) => p.title.toLowerCase().includes(search));
    return queryProducts;
}

const FilterCategury = (products, category) => {
    if (!category) return products;
    const filterCategury = products.filter((p) => p.category === category)
    return filterCategury;
};


const createQueryObject = (currentQuery, newQuery) => {
    if (newQuery.category === "all") {
        const { category, ...rest } = currentQuery;
        return rest;
    }
    if (newQuery.search === "") {
        const { search, ...rest } = currentQuery;
        return rest
    }
    return { ...currentQuery  , ...newQuery};
};
 

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
    if (search) query.search = search;
    return query;
};

const sumProducts = (products) => {
    const itemsCounter = products.reduce((acc, product) => acc + product.quantity,0);
    const totalPrice = products.reduce((acc, total) => acc + total.price * total.quantity, 0).toFixed(2);
    return { itemsCounter, totalPrice };
}

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export {
  QueryProducts,
  FilterCategury,
  createQueryObject,
  getInitialQuery,
  sumProducts,
  productQuantity,
};