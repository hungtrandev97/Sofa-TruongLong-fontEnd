import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  apiGetAllProductCategory,
  apiGetAllProduct,
} from "../../services/product";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import FormProduct from "./FormProduct";

export default function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [dataProduct, setDataProduct] = useState([]);
  const [numberIdProduct, setNumberIdProduct] = useState();
  const { idCategory, nameCategory } = useSelector(
    (state) => state.productRedux
  );
  const GetAllProductCategory = async () => {
    const response = await apiGetAllProductCategory(idCategory);
    setDataProduct(response.data);
  };
  const GetAllProduct = async () => {
    const response = await apiGetAllProduct();
    setDataProduct(response.data);
  };
  if (numberIdProduct !== idCategory) {
    setNumberIdProduct(idCategory);
    if (!idCategory || idCategory === 0) {
      GetAllProduct();
    } else {
      GetAllProductCategory();
    }
  }
  return (
    <div>
      <HeaderConsumer />
      <FormProduct data={dataProduct} nameCategory={nameCategory} />
      <FooterConsumer />
    </div>
  );
}
