/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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
import NumberFormat from "react-number-format";
import moment from "moment";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineToTop } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PAGE_SIZE, TYPE_NOTIFY } from "../../constants/DefaultValues";
import {
  apiGetAllCart,
  apiUpdateStatus,
  apiRemoveOder,
} from "../../services/Cart";
import { NotifySuccess, NotifyWarning, NotifyError } from "../Notify/Toast";
import "./OderPage.css";

export default function OderPage() {
  const columns = () => [
    {
      name: "Địa Chỉ",
      selector: "address",
      sortable: true,
    },
    {
      name: "SĐT",
      selector: "numberPhone",
      sortable: true,
    },
    {
      name: "Tổng số tiền",
      selector: "totalMoney",
      sortable: true,
      format: (row) => (
        <NumberFormat
          displayType="text"
          thousandSeparator
          placeholder="Thêm Giá"
          autoComplete="productPrice"
          suffix="vnđ"
          defaultValue={row.totalMoney}
        />
      ),
    },
    {
      name: "Ngày tạo đơn hàng",
      selector: "dateOder",
      sortable: true,
      format: (row) => moment(row.dateOder).format("DD-MM-YY hh:ss"),
    },

    {
      name: "Trạng Thái",
      selector: "status",
      sortable: true,
      format: (row) => {
        let text = "";
        if (row && row.status === 1) {
          text = <div style={{ color: "#25cc22" }}>Đang xử lý </div>;
        } else if (row && row.status === 2) {
          text = <div style={{ color: "#ffbf00" }}>Đang giao hàng </div>;
        } else if (row && row.status === 3) {
          text = <div style={{ color: "#b1b2b378" }}>Hoàn tất </div>;
        } else {
          text = <div style={{ color: "red" }}>Đã hủy đơn </div>;
        }
        return text;
      },
    },
    {
      name: "Chi Tiết",
      selector: "isDetail",
      sortable: true,
      format: (row) => (
        <Link
          to={{
            pathname: `/admin/DetailOder/${row._id}`,
          }}
        >
          <button className="Button__Detail" type="button">
            Chi Tiết
          </button>
        </Link>
      ),
    },
    {
      name: "Cập nhập trạng thái",
      selector: "isUpdate",
      sortable: false,
      center: true,
      wrap: true,
      format: (row) => (
        <>
          {row.status >= 3 ? (
            <AiOutlineToTop size="1.2rem" color="gray" />
          ) : (
            <AiOutlineToTop
              size="1.2rem"
              color="red"
              onClick={() => updateStatus(row._id, row.status)}
            />
          )}
        </>
      ),
    },

    {
      name: "Sửa",
      selector: "isEdit",
      sortable: false,
      center: true,
      wrap: true,
      width: "80px",
      format: (row) => (
        <Link
          to={{
            pathname: `/admin/EditOder/${row._id}`,
            state: {
              address: row.address,
              numberPhone: row.numberPhone,
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

  const [removeOder, setRemoveOder] = useState(false);
  const [idOder, setIdOder] = useState("");
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [dataGetAllCart, setDataGetAllCart] = useState([]);
  const toggleRemove = () => setRemoveOder(!removeOder);

  const removeItem = (id) => {
    setModal(!modal);
    setRemoveOder(true);
    setIdOder(id);
  };

  const DeleteOder = async () => {
    const req = await apiRemoveOder(idOder);
    if (req.status) {
      setRemoveOder(false);
      NotifySuccess("Thông Báo", "Xóa Thành Công");
      const getAllDataCart = await apiGetAllCart();
      setDataGetAllCart(getAllDataCart.data);
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Thông Báo", `${req.message}`);
    } else {
      NotifyError("Thông Báo", `${req.message}`);
    }
  };

  const updateStatus = async (id, status) => {
    const dataUpdate = {
      status: status + 1,
    };
    const UpdateStatusApi = await apiUpdateStatus(id, dataUpdate);
    if (UpdateStatusApi) {
      NotifySuccess("Cập nhật trạng thái", " Thành Công");
      const getAllDataCart = await apiGetAllCart();
      setDataGetAllCart(getAllDataCart.data);
    }
  };

  useEffect(() => {
    const GetAllCart = async () => {
      const getAllDataCart = await apiGetAllCart();
      setDataGetAllCart(getAllDataCart.data);
    };
    GetAllCart();
  }, [dispatch]);

  const tableData = {
    columns: columns(),
    data: dataGetAllCart,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };

  return (
    <div className="OderPage">
      <div className="Delete__Oder__Modal">
        <Modal isOpen={removeOder} toggle={toggleRemove}>
          <ModalHeader>Bạn Có Chắc Chán Muốn Xóa ? </ModalHeader>
          <ModalBody className="Delete__Oder__Modal__Body">
            <Button
              type="submit"
              color="primary"
              style={{ margin: "0 20px" }}
              onClick={() => DeleteOder()}
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
              data={dataGetAllCart}
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
