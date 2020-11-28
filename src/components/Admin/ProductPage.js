/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PAGE_SIZE, TYPE_NOTIFY } from "../../constants/DefaultValues";
import { apiGetAllProduct, apiDeleteProduct } from "../../services/product";
import { NotifySuccess, NotifyWarning, NotifyError } from "../Notify/Toast";

import "./Product.css";

export default function ProductPage() {
  const [idProduct, setIdProduct] = useState();
  const [dataProductList, setDataProductList] = useState();
  const [removeProduct, setRemoveProduct] = useState(false);
  const columns = () => [
    {
      name: "Tên Danh Mục Sản Phẩm",
      selector: "category_title",
      sortable: true,
      width: "200px",
      format: (row) => row._category.category_title,
    },
    {
      name: "Tên Sản Phẩm",
      selector: "product_title",
      sortable: true,
      width: "150px",
    },

    {
      name: "Mã Sản Phẩm",
      selector: "product_code",
      sortable: true,
      width: "150px",
      format: (row) => `MSP-${row.product_code}`,
    },
    {
      name: "Hình Ảnh Chính",
      selector: "product_imageMain",
      sortable: true,
      width: "150px",
      cell: (row) => (
        <>
          <img src={`${row.product_imageMain}`} alt="" width="100" />
        </>
      ),
    },
    {
      name: "Hình Ảnh Phụ 1",
      selector: "product_image",
      sortable: true,
      width: "150px",
      cell: (row) => (
        <>
          <img src={`${row.product_image[0]}`} alt="" width="100" />
        </>
      ),
    },
    {
      name: "Hình Ảnh Phụ 2",
      selector: "product_image",
      sortable: true,
      width: "150px",
      cell: (row) => (
        <>
          <img src={`${row.product_image[1]}`} alt="" width="100" />
        </>
      ),
    },
    {
      name: "Hình Ảnh Phụ 3",
      selector: "product_image",
      sortable: true,
      width: "150px",
      cell: (row) => (
        <>
          <img src={`${row.product_image[2]}`} alt="" width="100" />
        </>
      ),
    },
    {
      name: "Giá Sản Phẩm",
      selector: "product_price",
      sortable: true,
      width: "100px",
    },
    {
      name: "Giảm Giá Sản Phẩm",
      selector: "product_price_sale",
      sortable: true,
    },
    {
      name: " Hiện Thị Trên Trang Chủ",
      selector: "product_index",
      sortable: true,
      width: "150px",
      format: (row) => <>{row.product_index === 1 ? "Có" : "Không"}</>,
    },
    {
      name: "Sản Phẩm Mới",
      selector: "product_new",
      sortable: true,
      format: (row) => <>{row.product_new === 1 ? "Có" : "Không"}</>,
    },
    {
      name: "Sửa",
      selector: "isDeleted",
      sortable: false,
      center: true,
      wrap: true,
      width: "80px",
      format: (row) => (
        <Link to={`/admin/editProduct/${row._id}`}>
          <AiOutlineEdit size="1rem" color="#23b7e5" />
        </Link>
      ),
    },
    {
      name: "xóa",
      selector: "isDeleted",
      sortable: false,
      center: true,
      wrap: true,
      width: "80px",
      cell: (row) => (
        <RiDeleteBin6Line
          onClick={() => removeItem(row._id)}
          size="1rem"
          color="#23b7e5"
        />
      ),
    },
  ];
  const removeItem = (id) => {
    setRemoveProduct(true);
    setIdProduct(id);
  };
  const callApi = async () => {
    const req = await apiGetAllProduct();
    if (req.status) {
      setDataProductList(req.data.data);
    }
  };

  useEffect(() => {
    callApi();
  }, []);
  const tableData = {
    columns: columns(),
    data: dataProductList,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };

  const toggleRemove = () => setRemoveProduct(!removeProduct);
  const DeleteProduct = async () => {
    const req = await apiDeleteProduct(idProduct);

    if (req.status) {
      NotifySuccess("Xoa Sản Phẩm", "Xóa Sản Phẩm Thành Công");
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Xóa Sản Phẩm", `${req.message}`);
    } else {
      NotifyError("Xóa Sản Phẩm", `${req.message}`);
    }
  };

  return (
    <div className="Product">
      <div className="Delete__Product__Modal">
        <Modal isOpen={removeProduct} toggle={toggleRemove}>
          <ModalHeader>Bạn Có Chắc Chán Muốn Xóa ? </ModalHeader>
          <ModalBody className="Delete__Product__Modal__Body">
            <Button
              onClick={() => DeleteProduct()}
              type="submit"
              color="primary"
              style={{ margin: "0 20px" }}
            >
              Có
            </Button>
            <Button
              onClick={() => toggleRemove()}
              type="submit"
              style={{ margin: "0 20px" }}
              color="primary"
            >
              Không
            </Button>
          </ModalBody>
        </Modal>
      </div>
      <div
        className="Product__Header"
        style={{
          paddingTop: "10px",
          background: "#80808026",
          fontSize: "15px",
        }}
      >
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Danh Sách Sản Phẩm</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Card>
        <CardHeader
          className="Button__add"
          style={{ padding: "0px 40px 0px 0px" }}
        >
          <Link to="/admin/createProduct" className="Product__LinkNew">
            <span className="align-middle">Thêm Mới</span>
          </Link>
        </CardHeader>
        <CardBody>
          <DataTableExtensions {...tableData}>
            <DataTable
              noHeader
              pagination
              columns={columns()}
              data={dataProductList}
              paginationPerPage={PAGE_SIZE}
              highlightOnHover
              noDataComponent="Danh mục rỗng"
              pointerOnHover
              selectableRowsVosystemOnly
              selectableRowsNoSelectAll
              defaultSortField="id"
              paginationComponentOptions={{ noRowsPerPage: true }}
            />
          </DataTableExtensions>
        </CardBody>
      </Card>
    </div>
  );
}
