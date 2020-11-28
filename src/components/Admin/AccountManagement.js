/* eslint-disable react/jsx-props-no-spreading */
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
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./AccountManagement.css";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PAGE_SIZE } from "../../constants/DefaultValues";
import { getAllAcountAdmin } from "../../store/actions/actions";

export default function AccountManagement() {
  const dispatch = useDispatch();
  const [removeAccount, setRemoveAccount] = useState(false);
  const columns = () => [
    {
      name: "Tên Tài Khoản",
      selector: "userName",
      sortable: true,
      wrap: true,
    },
    {
      name: "Mật Khẩu",
      selector: "password",
      sortable: true,
    },
    {
      name: "Giới Tính",
      selector: "gender",
      sortable: true,
    },
    {
      name: "Gmail",
      selector: "email",
      sortable: true,
    },
    {
      name: "Số Điện Thoại",
      selector: "numberPhone",
      sortable: true,
    },
    {
      name: "Địa Chỉ",
      selector: "address",
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
        <Link to={`/admin/EditAccountManagement/${row._id}`}>
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
          // eslint-disable-next-line no-use-before-define
          onClick={() => removeItem(row._id)}
          size="1rem"
          color="#23b7e5"
        />
      ),
    },
  ];
  const removeItem = (id) => {
    setRemoveAccount(true);
  };
  useEffect(() => {
    dispatch(getAllAcountAdmin());
  }, [dispatch]);
  const { registerAdmin } = useSelector((state) => state.authRedux);
  const tableData = {
    columns: columns(),
    data: registerAdmin.data,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };
  const toggleRemove = () => setRemoveAccount(!removeAccount);
  return (
    <div className="AdminAccountManagement">
      <div className="Delete__Account__Modal">
        <Modal isOpen={removeAccount} toggle={toggleRemove}>
          <ModalHeader>Bạn Có Chắc Chán Muốn Xóa ? </ModalHeader>
          <ModalBody className="Delete__Account__Modal__Body">
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
      <div
        className="AccountManagement_Header"
        style={{
          paddingTop: "10px",
          background: "#80808026",
          fontSize: "15px",
        }}
      >
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Quản Lý Tài Khoản</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Card>
        <CardHeader
          className="Button__add"
          style={{ padding: "0px 40px 0px 0px" }}
        >
          <Link
            to="/admin/CreateAccountManagement"
            className="AccountManagement__LinkNew"
          >
            <span className="align-middle">Thêm Mới</span>
          </Link>
        </CardHeader>
        <CardBody>
          <DataTableExtensions {...tableData}>
            <DataTable
              noHeader
              pagination
              columns={columns()}
              data={registerAdmin.data}
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
