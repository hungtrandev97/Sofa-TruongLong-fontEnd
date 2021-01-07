import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import {
  apiGetAllDetail,
  apiGetAllGetAllCustomerBought,
} from "../../services/Details";
import { apiGetAllProductCategory } from "../../services/product";
import FormDetails from "./FormDetails";

export default function DetailsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { idProduct, idCategoryForProduct } = useSelector(
    (state) => state.productRedux
  );
  const [idProductPage, setIdProductPage] = useState("");
  const [dataGetAllDetail, setDataGetAllDetail] = useState([]);
  const [dataCustomerBought, setCustomerBought] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);

  const CallApi = async () => {
    const getAllDataDetail = await apiGetAllDetail(idProduct);
    const getAllCustomerBought = await apiGetAllGetAllCustomerBought(idProduct);
    const response = await apiGetAllProductCategory(idCategoryForProduct);
    if (getAllDataDetail && getAllDataDetail.data[0]) {
      setDataGetAllDetail(getAllDataDetail.data[0]);
    }
    if (getAllCustomerBought && getAllCustomerBought.data) {
      setCustomerBought(getAllCustomerBought.data);
    }
    setDataProduct(response.data);
  };
  if (idProductPage !== idProduct) {
    CallApi();
    setIdProductPage(idProduct);
  }
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <HeaderConsumer />
      <FormDetails
        dataGetAllDetail={dataGetAllDetail}
        dataCustomerBought={dataCustomerBought}
        dataProduct={dataProduct}
      />
      <FooterConsumer />
    </div>
  );
}
