import React, { useState } from "react";
import { useSelector } from "react-redux";
import { apiGetAllProductCategory } from "../../services/product";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import FormProduct from "./FormProduct";

export default function ProductPage() {
  const [dataProduct, setDataProduct] = useState([]);
  const [numberIdProduct, setNumberIdProduct] = useState();
  const { idCategory } = useSelector((state) => state.productRedux);
  const GetAllProductCategory = async () => {
    const response = await apiGetAllProductCategory(idCategory);
    setDataProduct(response.data);
  };
  const GetAllProduct = async () => {
    const response = await apiGetAllProductCategory(idCategory);
    setDataProduct(response.data);
  };
  if (numberIdProduct !== idCategory) {
    setNumberIdProduct(idCategory);
    if (!idCategory) {
      GetAllProduct();
    } else {
      GetAllProductCategory();
    }
  }
  return (
    <div>
      <HeaderConsumer />
      <FormProduct data={dataProduct} />
      <FooterConsumer />
    </div>
  );
}
