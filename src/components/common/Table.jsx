import React from "react";
import Modal from "./Modal";
export default function Table({ headerColumn,children,tableData, editClick, deleteClick }) {
  const initialValue = {
    tableHeader: [],
    tableBody: (
      <tr>
        <td>No Data</td>
      </tr>
    )
  };
  const [tableInfo, settableInfo] = React.useState(initialValue);

  React.useEffect(() => {
    if (tableData.length != 0) {
      const { tableHeader, tableBody } = getTableValue();

      settableInfo(prevState => ({
        ...prevState,
        tableHeader: tableHeader,
        tableBody: tableBody
      }));
    }
    return () => {
      settableInfo(initialValue);
    };
  }, [tableData]);

  const getTableValue = () => {
    // const headerkey = Object.keys(tableData[0]);
    const headerkey = headerColumn;
    const tableHeader = headerkey.map(elem => {
      return (
        <th key={elem.toUpperCase()} className="border-0">
          {elem.toUpperCase()}
        </th>
      );
    });
    tableHeader.push(<th key="Action" className="border-0">Action</th>);

    const tableBody = tableData.map((elem, index) => {
      return (
        <tr key={index}>
          {headerkey.map(key => {
            if (key == "image") {
              return (
                <td key={key}>
                  <div className="m-r-10">
                    <img
                      src={elem.image}
                      alt="No Image"
                      className="rounded"
                      width="45"
                    />
                  </div>
                </td>
              );
            } else return <td key={key}>{elem[key]}</td>;
          })}

          <td>
            <div className="dd-nodrag btn-group ml-auto">
              <button
                className="btn btn-sm btn-outline-light"
                onClick={() => editClick(elem)}
              >
                <i className="fas fa-edit"></i>
              </button>
              <a
                className="btn btn-sm btn-outline-light"
                data-toggle="modal"
                data-target={`#delete${index}`}
              >
                <i className="far fa-trash-alt"></i>
              </a>
            </div>

            <Modal
              modalName={`delete${index}`}
              modalTitle="Select Choice"
              modalType="choice"
              saveClick={() => deleteClick(elem)}
            >
              <p>Are you sure to delete this Item ?</p>
            </Modal>
          </td>
        </tr>
      );
    });
    return { tableHeader, tableBody };
  };

  const { tableHeader, tableBody } = tableInfo;
  return (
    <div className="table-responsive">
      <table
        id="example"
        className="table table-striped table-bordered second"
        style={{ width: "100%" }}
      >
        <thead className="bg-light">
          <tr className="border-0">{tableHeader}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
}
