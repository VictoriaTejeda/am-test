import React from "react";
export const ButtonHeader = () => {
  return (
    <>
      <section className="container-btn-menu">
        <div className="dropdown">
          <button
            className="favorite-btn"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            FAVORITOS
            <i className="bi bi-bookmark-fill"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>Action</li>
            <hr />
            <li>Another action</li>
            <hr />
            <li>Something else here</li>
          </ul>
          <button
            className="add-btn"
            data-bs-toggle="modal"
            data-bs-target="#crate-modal"
          >
            AGREGAR <i className="bi bi-person-plus-fill"></i>
          </button>
          <div
            className="modal fade"
            id="crate-modal"
            tabIndex="-1"
            aria-labelledby="crate-modalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="crate-modalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
