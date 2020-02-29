import React from "react";
import ManageCategory from "./manageCategory";
import ManageSubCategory from "./manageSubCategory";
import ManageFeatures from "./manageFeatures";

export default function index(props) {
  const selectedPage = props.match.params.page;
  const initialPage = { page: <div>page not exist</div>, pageName: "Error" };
  const [pageDetails, setpageDetails] = React.useState(initialPage);

  React.useEffect(() => {
    if (selectedPage == "manageCategory")
      setpageDetails({
        page: <ManageCategory {...props} />,
        pageName: "Manage Category"
      });
    else if (selectedPage == "manageFeatures")
      setpageDetails({
        page: <ManageFeatures {...props} />,
        pageName: "Manage Features"
      });
    else if (selectedPage == "manageSubCategory")
      setpageDetails({
        page: <ManageSubCategory {...props} />,
        pageName: "Manage Sub Category"
      });
    else {
      setpageDetails(initialPage);
    }
  }, [selectedPage]);

  return (
    <div className="container-fluid  dashboard-content">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="page-header">
            <h3 className="mb-2">{pageDetails.pageName}</h3>
            <p className="pageheader-text"></p>
            <div className="page-breadcrumb">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#" className="breadcrumb-link">
                      Category
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageDetails.pageName}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {pageDetails.page}
    </div>
  );
}
