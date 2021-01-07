import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import { apiGetAllSearch } from "../../services/search";
import FormSearch from "./FormSearch";

export default function Search() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [dataProduct, setDataProduct] = useState([]);
  const [titiProduct, setTitleProduct] = useState([]);
  const { dataSearch } = useSelector((state) => state.searchRedux);
  const GetAllSearch = async () => {
    const response = await apiGetAllSearch(dataSearch);
    const { data } = response;
    setDataProduct(data.body.data);
  };

  if (titiProduct !== dataSearch) {
    GetAllSearch();
    setTitleProduct(dataSearch);
  }
  return (
    <div>
      <HeaderConsumer />
      <FormSearch dataSearch={dataProduct} />
      <FooterConsumer />
    </div>
  );
}
