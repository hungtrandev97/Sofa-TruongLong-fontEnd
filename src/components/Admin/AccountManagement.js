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
import { PAGE_SIZE, TYPE_NOTIFY } from "../../constants/DefaultValues";
import {
  getAllAcountAdmin,
  registerAdminSuccess,
} from "../../store/actions/actions";
import { NotifySuccess, NotifyWarning, NotifyError } from "../Notify/Toast";
import { apiDeleteAccount } from "../../services/auth";

export default function AccountManagement() {
  const [idAccount, setIdAccount] = useState("");
  const dispatch = useDispatch();
  const [removeAccount, setRemoveAccount] = useState(false);
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
              category_title: row.category_title,
              checkProduct: row.checkProduct,
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
  const removeItem = (id) => {
    setRemoveAccount(true);
    setIdAccount(id);
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
  const DeleteAccount = async () => {
    const req = await apiDeleteAccount(idAccount);
    if (req.status) {
      NotifySuccess("Xóa Danh Mục", "Xóa Thành Công");
      setRemoveAccount(false);
      dispatch(registerAdminSuccess(req.data));
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Xóa Danh Mục", `${req.message}`);
    } else {
      NotifyError("Xóa Danh Mục", `${req.message}`);
    }
  };
  const toggleRemove = () => setRemoveAccount(!removeAccount);
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
