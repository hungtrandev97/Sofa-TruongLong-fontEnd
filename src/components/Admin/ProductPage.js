import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
} from "reactstrap";
import { PAGE_SIZE, FromProduct } from "../../constants/DefaultValues";
import FormEditProduct from "./FormEditProduct";
import FormCreateProduct from "./FormCreateProduct";
import "./Product.css";

export default function ProductPage() {
  // const dispatch = useDispatch();

  const tableData = {
    export: false,
    print: false,
  };
  const [modal, setModal] = useState(false);
  const [typeProduct, setTypeProduct] = useState(FromProduct.CREATE);
  const toggle = () => setModal(!modal);
  const ChangeIsModal = (ismodal, type) => {
    toggle(true);
    setTypeProduct(type);
  };
  return (
    <div className="Product">
      <div
        className="Product__Header"
        style={{
          paddingTop: "10px",
          background: "#80808026",
          fontSize: "15px",
        }}
      >
        <Breadcrumb>
          <BreadcrumbItem>Danh Sách Sản Phẩm</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="Product__Modal">
        <Modal
          isOpen={modal}
          toggle={toggle}
          // style={{ overflow: "scroll", height: "500px" }}
        >
          <ModalHeader toggle={toggle}>
            {typeProduct === FromProduct.CREATE ? "THÊM MỚI" : "CHỈNH SỬA"}
          </ModalHeader>
          <ModalBody>
            {typeProduct === FromProduct.CREATE ? (
              <FormCreateProduct />
            ) : (
              <FormEditProduct />
            )}
          </ModalBody>
        </Modal>
      </div>
      <Card>
        <CardHeader
          className="Button__add"
          style={{ padding: "0px 40px 0px 0px" }}
        >
          <button
            type="button"
            onClick={() => ChangeIsModal(true, FromProduct.CREATE)}
          >
            <span className="align-middle">Thêm Mới</span>
          </button>
        </CardHeader>
        <CardBody>
          {/* <div>Get Data Has Error</div> */}
          <DataTableExtensions {...tableData}>
            <DataTable
              noHeader
              pagination
              // paginationServer
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
