import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalBody,
  Badge,
  ModalHeader,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import memoizeOne from "memoize-one";
import DataTableExtensions from "react-data-table-component-extensions";
import moment from "moment";
import Loader from "../Loaders/Loader";
import { PAGE_SIZE, FromCategory } from "../../constants/DefaultValues";
import { getAllCategory } from "../../store/actions/actions";
import "react-data-table-component-extensions/dist/index.css";
import FormCreateCategory from "./FormCreateCategory";
import FormEditCategory from "./FormEditCategory";
import "./CategoryPage.css";

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
    format: (row) => (
      <Badge color={`${row.isDeleted ? "danger" : "success"}`}>
        {`${row.isDeleted ? "Deleted" : "Actived"}`}
      </Badge>
    ),
  },
]);

function CategoryPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const { dataCategory } = useSelector((state) => state.categoryRedux);

  const currentPage = 1;

  const tableData = {
    columns: columns(currentPage),
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
          <BreadcrumbItem>home</BreadcrumbItem>
          <BreadcrumbItem active>List</BreadcrumbItem>
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
              columns={columns(currentPage)}
              data={dataCategory}
              pagination
              paginationPerPage={PAGE_SIZE}
              paginationDefaultPage={currentPage}
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
