/* eslint-disable react/jsx-props-no-spreading */
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
import { NotifySuccess, NotifyWarning, NotifyError } from "../Notify/Toast";
import { apiDeleteAccount, apiGetAllAccountAdmin } from "../../services/auth";
import "./AccountManagement.css";

export default function AccountManagement() {
  // column data-react-table
  const columns = () => [
    {
      name: "Tên Tài Khoản",
      selector: "userName",
      sortable: true,
      wrap: true,
      width: "200px",
    },
    {
      name: "Giới Tính",
      selector: "gender",
      sortable: true,
      width: "100px",
      format: (row) => <>{row.gender === 1 ? "Nam" : "Nữ"}</>,
    },
    {
      name: "Gmail",
      selector: "email",
      width: "250px",
      sortable: true,
    },
    {
      name: "Số Điện Thoại",
      selector: "numberPhone",
      sortable: true,
      width: "200px",
    },
    {
      name: "Địa Chỉ",
      selector: "address",
      sortable: true,
    },
    {
      name: "Phân Quyền",
      selector: "role",
      sortable: true,
      width: "150px",
      format: (row) => <>{row.role === 1 ? "Admin" : "User"}</>,
    },
    {
      name: "Sửa",
      selector: "isDeleted",
      sortable: false,
      center: true,
      wrap: true,
      width: "100px",
      format: (row) => (
        <Link
          to={{
            pathname: `/admin/EditAccountManagement/${row._id}`,
            state: {
              row,
            },
          }}
        >
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
      width: "100px",
      cell: (row) => (
        <RiDeleteBin6Line
          onClick={() => removeItem(row._id)}
          size="1rem"
          color="#23b7e5"
        />
      ),
    },
  ];
  // end

  const [idAccount, setIdAccount] = useState("");
  const [removeAccount, setRemoveAccount] = useState(false);
  const toggleRemove = () => setRemoveAccount(!removeAccount);
  const [dataAccountAdminList, setdataAccountAdminList] = useState();

  // function
  const removeItem = (id) => {
    setRemoveAccount(true);
    setIdAccount(id);
  };
  const DeleteAccount = async () => {
    const req = await apiDeleteAccount(idAccount);
    if (req.status) {
      NotifySuccess("Thông Báo", "Xóa Thành Công");
      setRemoveAccount(false);
      const ListAcountAdmin = await apiGetAllAccountAdmin();
      if (ListAcountAdmin.status) {
        setdataAccountAdminList(ListAcountAdmin.data);
      }
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Thông Báo", `${req.message}`);
    } else {
      NotifyError("Thông Báo", `${req.message}`);
    }
  };
  const GetFromApiAllAcountAdmin = async () => {
    const req = await apiGetAllAccountAdmin();
    if (req.status) {
      setdataAccountAdminList(req.data);
    }
  };

  // end function
  useEffect(() => {
    GetFromApiAllAcountAdmin();
  }, []);

  const tableData = {
    columns: columns(),
    data: dataAccountAdminList,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };

  return (
    <div className="AdminAccountManagement">
      <div className="Delete__Account__Modal">
        <Modal isOpen={removeAccount} toggle={toggleRemove}>
          <ModalHeader>Bạn Có Chắc Chán Muốn Xóa ? </ModalHeader>
          <ModalBody className="Delete__Account__Modal__Body">
            <Button
              onClick={() => DeleteAccount()}
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
              data={dataAccountAdminList}
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
