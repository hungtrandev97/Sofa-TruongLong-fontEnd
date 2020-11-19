import React from "react";
import { Row, Col } from "reactstrap";
import "./HomeContent.css";
import ItemProduct from "./Layout/ItemProduct";
import HeaderProduct from "./Layout/HeaderProduct";

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
  return (
    <div className="HomeContent screen__Wep">
      {category.map((item) => (
        <div className="HomeContent_nav" key={item.id}>
          {item.checkProduct ? (
            <HeaderProduct title={item.title} link={item.url} />
          ) : (
            ""
          )}
          <div className="HomeContent__product__new">
            <Row>
              {ListProduct.forEach((itemproduct) => (
                <>
                  {item.id === itemproduct.idCategory ? (
                    <Col lg={3} md={4} ms={6} xs={6}>
                      <ItemProduct
                        title="Bàn Ghế ăn"
                        SouceProduct="M15"
                        price="5.000.000"
                        pricePromotional="4.000.000"
                      />
                    </Col>
                  ) : (
                    ""
                  )}
                </>
              ))}
            </Row>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
