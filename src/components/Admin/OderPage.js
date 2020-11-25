/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  Card,
  CardHeader,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
} from "reactstrap";

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PAGE_SIZE } from "../../constants/DefaultValues";
import { DataOder } from "./Columndata";
import "./OderPage.css";

export default function OderPage() {
  const [removeOder, setRemoveOder] = useState(false);
  const columns = () => [
    {
      name: "STT",
      selector: "serial",
      sortable: false,
      center: true,
      wrap: true,
      width: "50px",
    },
    {
      name: "Tên Danh Mục",
      selector: "category_title",
      sortable: true,
    },
    {
      name: "Tên Sản Phẩm",
      selector: "product_title",
      sortable: true,
    },
    {
      name: "Thời Gian Tạo Đơn Hàng",
      selector: "date_create",
      sortable: true,
    },
    {
      name: "Địa Chỉ Khách Hàng",
      selector: "address_customer",
      sortable: true,
    },
    {
      name: "Chức Năng",
      sortable: true,
    },
    {
      name: "Sửa",
      selector: "isDeleted",
      sortable: false,
      center: true,
      wrap: true,
      width: "80px",
      format: (row) => (
        <Link to={`/admin/EditOder/${row._id}`}>
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
          // eslint-disable-next-line no-use-before-define
          onClick={() => removeItem(row._id)}
          size="1rem"
          color="rgb(250, 62, 63)"
        />
      ),
    },
  ];
  const removeItem = (id) => {
    console.log(id);
    setRemoveOder(true);
  };
  const tableData = {
    columns: columns(),
    data: DataOder,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };
  const toggleRemove = () => setRemoveOder(!removeOder);
  return (
    <div className="OderPage">
      <div className="Delete__Oder__Modal">
        <Modal isOpen={removeOder} toggle={toggleRemove}>
          <ModalHeader>Bạn Có Chắc Chán Muốn Xóa ? </ModalHeader>
          <ModalBody className="Delete__Oder__Modal__Body">
            <Button type="submit" color="primary" style={{ margin: "0 20px" }}>
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
      <div className="OderPage__Header">
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Đơn Hàng</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Card>
        <CardHeader
          className="Button__add"
          style={{ padding: "0px 40px 0px 0px" }}
        />
        <CardBody>
          {/* <div>Get Data Has Error</div> */}
          <DataTableExtensions {...tableData}>
            <DataTable
              columns={columns()}
              data={DataOder}
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
