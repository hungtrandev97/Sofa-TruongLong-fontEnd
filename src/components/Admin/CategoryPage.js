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
import { Categorycolumns } from "./Columndata";
import { getAllCategory } from "../../store/actions/actions";
import { PAGE_SIZE, FromCategory } from "../../constants/DefaultValues";
import "react-data-table-component-extensions/dist/index.css";
import FormCreateCategory from "./FormCreateCategory";
import FormEditCategory from "./FormEditCategory";
import "./CategoryPage.css";

function CategoryPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const { dataCategory } = useSelector((state) => state.categoryRedux);
  console.log(dataCategory, "da");
  const tableData = {
    columns: Categorycolumns,
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
              columns={Categorycolumns}
              data={dataCategory}
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
export default CategoryPage;
