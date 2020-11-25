import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import moment from "moment";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import Loader from "../Loaders/Loader";
import { PAGE_SIZE, FromCategory } from "../../constants/DefaultValues";
import { getAllCategory } from "../../store/actions/actions";
import "react-data-table-component-extensions/dist/index.css";
import FormCreateCategory from "./FormCreateCategory";
import FormEditCategory from "./FormEditCategory";
import "./CategoryPage.css";

function CategoryPage() {
  const columns = () => [
    {
      name: "Tên Danh Mục",
      selector: "category_title",
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Thời Gian Tạo Danh Mục",
      selector: "date_create",
      sortable: false,
      center: true,
      wrap: true,
      format: (row) => moment(row.date_create).format("DD-MM-DD hh:ss"),
    },
    {
      name: "Sửa",
      selector: "isDeleted",
      sortable: false,
      center: true,
      wrap: true,
      width: "80px",
      format: (row) => (
        <Link to={`/admin/editCategory/${row._id}`}>
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
          onClick={() => submit(row._id)}
          size="1rem"
          color="rgb(250, 62, 63)"
        />
      ),
    },
  ];

  const submit = (id) => {
    alert(id);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const { dataCategory } = useSelector((state) => state.categoryRedux);
  const tableData = {
    columns: columns(),
    data: dataCategory,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };

  const [modal, setModal] = useState(false);
  const [typeCategory, setTypeCategory] = useState(FromCategory.CREATE);
  const toggle = () => setModal(!modal);
  const ChangeIsModal = (ismodal, type) => {
    toggle(true);
    setTypeCategory(type);
  };
  return (
    <div className="Category">
      <div className="Category__Header">
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Danh Mục Sản Phẩm</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="Category__Modal">
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            {typeCategory === FromCategory.CREATE ? "THÊM MỚI" : "CHỈNH SỬA"}
          </ModalHeader>
          <ModalBody>
            {typeCategory === FromCategory.CREATE ? (
              <FormCreateCategory />
            ) : (
              <FormEditCategory />
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
            onClick={() => ChangeIsModal(true, FromCategory.CREATE)}
          >
            <span className="align-middle">Thêm Mới</span>
          </button>
        </CardHeader>
        <CardBody>
          {/* <div>Get Data Has Error</div> */}
          <DataTableExtensions {...tableData}>
            <DataTable
              noHeader
              columns={columns()}
              data={dataCategory}
              pagination
              paginationPerPage={PAGE_SIZE}
              progressComponent={
                <Loader styles={{ textAlign: "center", margin: "50px auto" }} />
              }
              highlightOnHover
              noDataComponent="Danh mục rỗng"
              defaultSortField="id"
            />
          </DataTableExtensions>
        </CardBody>
      </Card>
    </div>
  );
}
export default CategoryPage;
