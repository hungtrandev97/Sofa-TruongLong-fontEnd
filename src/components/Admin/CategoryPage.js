/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import DataTable from "react-data-table-component";
import moment from "moment";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import DataTableExtensions from "react-data-table-component-extensions";
import Loader from "../Loaders/Loader";
import { PAGE_SIZE, TYPE_NOTIFY } from "../../constants/DefaultValues";
import { CategorySuccess } from "../../store/actions/actions";
import FormCreateCategory from "./FormCreateCategory";
import { apiGetAllCategory, apiDeleteCategory } from "../../services/category";
import { NotifySuccess, NotifyWarning, NotifyError } from "../Notify/Toast";
import "react-data-table-component-extensions/dist/index.css";
import "./CategoryPage.css";

function CategoryPage() {
  // column data-react-table
  const columns = () => [
    {
      name: "Tên Danh Mục",
      selector: "category_title",
      sortable: true,
      wrap: true,
      width: "300px",
    },
    {
      name: "Hiện thị danh mục trang chủ",
      selector: "checkProduct",
      sortable: true,
      width: "300px",
      format: (row) => <>{row.checkProduct === 1 ? "Có" : "Không"}</>,
    },
    {
      name: "Thời Gian Tạo Danh Mục",
      selector: "date_create",
      sortable: false,
      wrap: true,
      format: (row) => moment(row.date_create).format("DD-MM-YY hh:ss"),
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
            pathname: `/admin/editCategory/${row._id}`,
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
          onClick={() => RemoveItemCategory(row._id)}
          size="1rem"
          color="#23b7e5"
          style={{ cursor: "pointer" }}
        />
      ),
    },
  ];
  // end

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [idCategory, setIdCategory] = useState("");
  const [removeCategory, setRemoveCategory] = useState(false);
  const toggleRemove = () => setRemoveCategory(!removeCategory);
  const { dataCategory } = useSelector((state) => state.categoryRedux);

  // function
  const toggle = () => {
    setModal(!modal);
    setRemoveCategory(!removeCategory);
  };
  const RemoveItemCategory = (id) => {
    setRemoveCategory(true);
    setIdCategory(id);
  };
  const DeleteCategory = async () => {
    const req = await apiDeleteCategory(idCategory);
    if (req.status) {
      setRemoveCategory(false);
      NotifySuccess("Thông Báo", "Xóa Thành Công");
      dispatch(CategorySuccess(req));
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Thông Báo", `${req.message}`);
    } else {
      NotifyError("Thông Báo", `${req.message}`);
    }
  };
  const ChangeIsModal = (type) => {
    toggle(true);
    setRemoveCategory(type);
  };

  // end function

  useEffect(() => {
    const GetFromApiAllCategory = async () => {
      const getDataCategory = await apiGetAllCategory();
      dispatch(CategorySuccess(getDataCategory));
    };
    GetFromApiAllCategory();
  }, [dispatch]);

  const tableData = {
    columns: columns(),
    data: dataCategory,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };

  return (
    <div className="Category">
      <div className="Category__Header">
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Danh Mục Sản Phẩm</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="Delete__Category__Modal">
        <Modal isOpen={removeCategory} toggle={toggleRemove}>
          <ModalHeader>Bạn Có Chắc Muốn Xóa ?</ModalHeader>
          <ModalBody className="Delete__Category__Modal__Body">
            <Button
              onClick={() => DeleteCategory()}
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
      <div className="Category__Modal">
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>THÊM MỚI</ModalHeader>
          <ModalBody>
            <FormCreateCategory />
          </ModalBody>
        </Modal>
      </div>
      <Card>
        <CardHeader
          className="Button__add"
          style={{ padding: "0px 40px 0px 0px" }}
        >
          <button type="button" onClick={() => ChangeIsModal(true)}>
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
