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
import memoizeOne from "memoize-one";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PAGE_SIZE } from "../../constants/DefaultValues";
import { apiGetAllProduct } from "../../services/product";
import "./Product.css";

export default function ProductPage() {
  const [dataProductList, setDataProductList] = useState();
  const [modal] = useState(false);
  const [removeProduct, setRemoveProduct] = useState(false);
  const columns = memoizeOne((currentPage) => [
    {
      name: "S/N",
      selector: "serial",
      sortable: false,
      center: true,
      wrap: true,
      width: "50px",
      // format: (row) => (currentPage - 1) * PAGE_SIZE + (row.serial + 1),
    },
    {
      name: "Tên Danh Mục Sản Phẩm",
      selector: "category_title",
      sortable: true,
      width: "200px",
      // eslint-disable-next-line no-underscore-dangle
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
      name: "Hình Ảnh Phụ",
      selector: "product_image",
      sortable: true,
      width: "150px",
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
          <AiOutlineEdit size="1rem" color="rgb(250, 62, 63)" />
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
          color="rgb(250, 62, 63)"
        />
      ),
    },
  ]);
  const removeItem = (id) => {
    setRemoveProduct(true);
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
  const currentPage = 1;
  const tableData = {
    columns: columns(currentPage),
    data: dataProductList,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };

  const toggle = () => {
    setRemoveProduct(!removeProduct);
  };
  const toggleRemove = () => setRemoveProduct(!removeProduct);
  const ChangIsModal = (ismodal, type) => {
    toggle(true);
    setRemoveProduct(type);
  };

  return (
    <div className="Product">
      <div className="Delete__Product__Modal">
        <Modal isOpen={removeProduct} toggle={toggleRemove}>
          <ModalHeader>Bạn Có Chắc Chán Muốn Xóa ? </ModalHeader>
          <ModalBody>
            <Button type="submit" style={{ margin: "0 20px" }}>
              Có
            </Button>
            <Button
              onClick={() => toggleRemove()}
              type="submit"
              style={{ margin: "0 20px" }}
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
              columns={columns(currentPage)}
              data={dataProductList}
              paginationPerPage={PAGE_SIZE}
              paginationDefaultPage={currentPage}
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
