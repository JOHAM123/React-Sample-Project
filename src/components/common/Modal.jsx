import React from "react";

export default function Modal({
  children,
  modalName,
  modalTitle,
  saveClick,
  modalType
}) {
  const submitClick = e => {
    e.preventDefault();
    const closeElem = document.getElementById("close");
    closeElem.click();

    saveClick();
  };

  return (
    <div
      className="modal fade "
      id={modalName}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalTitle"
      // style={{ display: "none" }}
    >
      <div className=" modal-dialog col-12" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalTitle">
              {modalTitle}
            </h5>
            <a
              className="close"
              data-dismiss="modal"
              data-target={`#${modalName}`}
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </a>
          </div>
          {modalType == "form" ? (
            <form id="myForm" onSubmit={submitClick}>
              <div className="modal-body">{children}</div>
              <div className="modal-footer">
                <button
                  id="close"
                  className="btn btn-secondary"
                  data-target={`#${modalName}`}
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button className="btn btn-primary" type="submit">
                  Save
                </button>
              </div>
            </form>
          ) : (
            <React.Fragment>
              <div className="modal-body">{children}</div>
              <div className="modal-footer">
                <button
                  id="close"
                  className="btn btn-secondary"
                  data-target={`#${modalName}`}
                  data-dismiss="modal"
                >
                  NO
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-target={`#${modalName}`}
                  data-dismiss="modal"
                  onClick={saveClick}
                >
                  Yes
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
