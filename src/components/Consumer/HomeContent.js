/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import "./HomeContent.css";
import { useSelector } from "react-redux";
import ItemProduct from "./Layout/ItemProduct";
import HeaderProduct from "./Layout/HeaderProduct";
import { getAllProductIndex } from "../../services/product";

const category = [
  {
    id: 1,
    title: "Sản Phẩm Mới Nhất",
    url: "san-pham-moi-nhat",
    checkProduct: true,
  },
  {
    id: 2,
    title: "Sản Phẩm Bán Cháy",
    url: "san-pham-moi-nhat",
    checkProduct: true,
  },
  {
    id: 3,
    title: "Sản phẩm mwosi nhất3",
    url: "san-pham-moi-nhat",
    checkProduct: true,
  },
  {
    id: 4,
    title: "Sản phẩm mwosi nhất4",
    url: "san-pham-moi-nhat",
    checkProduct: false,
  },
  {
    id: 5,
    title: "Sản phẩm mwosi nhất5",
    url: "san-pham-moi-nhat",
    checkProduct: false,
  },
];

const ListProduct = [
  {
    id: "5fb11766ded2b6352d5d3fb4",
    title: "Bàn Ghế ăn",
    SouceProduct: "M15",
    price: "5.000.000",
    pricePromotional: "4.000.000",
    idCategory: 1,
  },
  {
    id: 2,
    title: "Bàn Ghế ăn",
    SouceProduct: "M15",
    price: "5.000.000",
    pricePromotional: "4.000.000",
    idCategory: 1,
  },
  {
    id: 3,
    title: "Bàn Ghế ăn",
    SouceProduct: "M15",
    price: "5.000.000",
    pricePromotional: "4.000.000",
    idCategory: 1,
  },
  {
    id: 4,
    title: "Bàn Ghế ăn",
    SouceProduct: "M15",
    price: "5.000.000",
    pricePromotional: "4.000.000",
    idCategory: 2,
  },
  {
    id: 5,
    title: "Bàn Ghế ăn",
    SouceProduct: "M15",
    price: "5.000.000",
    pricePromotional: "4.000.000",
    idCategory: 2,
  },
  {
    id: 6,
    title: "Bàn Ghế ăn",
    SouceProduct: "M15",
    price: "5.000.000",
    pricePromotional: "4.000.000",
    idCategory: 2,
  },
  {
    id: 7,
    title: "Bàn Ghế ăn",
    SouceProduct: "M15",
    price: "5.000.000",
    pricePromotional: "4.000.000",
    idCategory: 3,
  },
  {
    id: 8,
    title: "Bàn Ghế ăn",
    SouceProduct: "M15",
    price: "5.000.000",
    pricePromotional: "4.000.000",
    idCategory: 3,
  },
  {
    id: 20,
    title: "Bàn Ghế ăn",
    SouceProduct: "M15",
    price: "5.000.000",
    pricePromotional: "4.000.000",
    idCategory: 3,
  },
];

const HomeContent = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const { dataCategory } = useSelector((state) => state.categoryRedux);

  const GetProduct = async () => {
    const responseData = await getAllProductIndex();
    setDataProduct(responseData.data);
  };

  useEffect(() => {
    GetProduct();
  }, []);

  console.log(dataProduct, "dataProduct");
  return (
    <div className="HomeContent screen__Wep">
      {dataCategory.map((item, index) => (
        <div className="HomeContent_nav" key={index}>
          {item.checkProduct ? (
            <HeaderProduct title={item.category_title} link={item.url} />
          ) : (
            ""
          )}
          <div className="HomeContent__product__new">
            <Row>
              {dataProduct.map((itemproduct, index) => {
                if (item._id === itemproduct._category._id) {
                  return (
                    <Col key={index} lg={3} md={4} ms={6} xs={6}>
                      <ItemProduct
                        title={itemproduct.product_title}
                        SouceProduct={itemproduct.product_code}
                        price={itemproduct.product_price}
                        pricePromotional={itemproduct.product_price_sale}
                      />
                    </Col>
                  );
                }
              })}
            </Row>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
