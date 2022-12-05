import { useDispatch, useSelector } from "react-redux";

import ecommerceApi from "../api/ecommerceApi";

import {
  loadBestProducts,
  loadProducts,
} from "../store/slices/productSlice";

import {
  uiStartSearchProductsLoading,
  uiStopSearchProductsLoading
} from "../store/slices/uiSlice";

export const useProductsStore = () => {
  const dispatch = useDispatch();
  const { products, bestProducts } = useSelector((state) => state.product);

  const startLoadBestProducts = async () => {
    try {
      const { data } = await ecommerceApi.get("ranking/bestProducts");

      const { msg, results } = data;

      if (msg === "OK") {
        console.log(results);

        dispatch(loadBestProducts(results));
      } else {
        console.log(msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const startLoadProductsByCategories = async () => {
    // const term = (searchText !== '' && searchText) ? searchText : 'home';

    try {
      // dispatch(uiStartTableLoading());

      const { data } = await ecommerceApi.get("products/productsByCategories");

      const { msg, results } = data;

      if (msg === "OK") {
        console.log(results);

        // dispatch(loadProducts(filteredProducts));

        // window.scroll(0, 0);

        // dispatch(uiStopTableLoading());
      } else {
        // dispatch(uiStopTableLoading());
        console.log(msg);
      }
    } catch (error) {
      // dispatch(uiStopTableLoading());
      console.log(error);
    }
  };

  const startLoadProducts = async (filterBy, orderBy, searchText) => {
    const term = searchText !== "" && searchText ? searchText : "home";

    try {
      dispatch(uiStartSearchProductsLoading());

      const { data } = await ecommerceApi.get(
        `products/productsSearchEcommerce/${term}?filterBy=${filterBy}&orderBy=${orderBy}`
      );

      const { data: data2 } = await ecommerceApi.get(`ranking/bestProducts`);

      const { msg, results } = data;

      console.log('Called')

      if (msg === "OK") {
        // console.log('Filtered products', body);

        const filteredProducts = results;

        console.log(filteredProducts);

        dispatch(loadProducts(filteredProducts));

        window.scroll(0, 0);

        dispatch(uiStopSearchProductsLoading());
      } else {
        dispatch(uiStopSearchProductsLoading());
        console.log(msg);
      }
    } catch (error) {
      dispatch(uiStopSearchProductsLoading());
      console.log(error);
    }
  };

  return {
    //* Propiedades
    products,
    bestProducts,

    //* Métodos
    startLoadProductsByCategories,
    startLoadProducts,
    startLoadBestProducts,
  };
};
