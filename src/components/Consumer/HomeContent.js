import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import "./HomeContent.css";
import { useSelector, useDispatch } from "react-redux";
import ItemProduct from "./Layout/ItemProduct";
import HeaderProduct from "./Layout/HeaderProduct";
import { getAllCategory } from "../../store/actions/actions";

const ListProduct = [
  {
    id: 1,
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);
  const { dataCategory } = useSelector((state) => state.categoryRedux);
  console.log(dataCategory);
  return (
    <div className="HomeContent screen__Wep">
      {dataCategory.map((item) => (
        <div className="HomeContent_nav" key={item.id}>
          {item.checkProduct ? (
            <HeaderProduct title={item.title} link={item.url} />
          ) : (
            ""
          )}
          <div className="HomeContent__product__new">
            <Row>
              {ListProduct.map((itemproduct, index) => {
                if (item.id === itemproduct.idCategory) {
                  return (
                    <Col key={index} lg={3} md={4} ms={6} xs={6}>
                      <ItemProduct
                        title="Bàn Ghế ăn"
                        SouceProduct="M15"
                        price="5.000.000"
                        pricePromotional="4.000.000"
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
