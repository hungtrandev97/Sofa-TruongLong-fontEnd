/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import "./HomeContent.css";
import { useSelector } from "react-redux";
import ItemProduct from "./Layout/ItemProduct";
import HeaderProduct from "./Layout/HeaderProduct";
import { getAllProductIndex } from "../../services/product";

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

  return (
    <div className="HomeContent screen__Wep">
      {dataCategory.map((item, index) => (
        <div className="HomeContent_nav" key={index}>
          {item ? (
            <>
              {item.checkProduct === 1 ? (
                <>
                  <HeaderProduct title={item.category_title} link={item.url} />
                  <div className="HomeContent__product__new">
                    <Row>
                      {dataProduct.map((itemproduct, index) => {
                        if (item._id === itemproduct._category._id) {
                          return (
                            <Col key={index} lg={3} md={4} ms={6} xs={6}>
                              <ItemProduct
                                idProduct={itemproduct._id}
                                title={itemproduct.product_title}
                                SouceProduct={itemproduct.product_code}
                                price={itemproduct.product_price}
                                pricePromotional={
                                  itemproduct.product_price_sale
                                }
                                imageMain={itemproduct.product_imageMain}
                                product_priceNumber={
                                  itemproduct.product_priceNumber
                                }
                                product_priceNumber_sale={
                                  itemproduct.product_priceNumber_sale
                                }
                              />
                            </Col>
                          );
                        }
                      })}
                    </Row>
                  </div>
                </>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
