import React, { Component } from "react";
import Breadcrumb from "../Orders/Breadcrumb";
const Content = [
  {
    id: "1",
    location: "New York",
    status: "Available",
  },
  {
    id: "2",
    location: "New York",
    status: "Available",
  },
  {
    id: "3",
    location: "New York",
    status: "Reserved",
  },
  {
    id: "4",
    location: "New York",
    status: "Reserved",
  },
  {
    id: "5",
    location: "New York",
    status: "Reserved",
  },
  {
    id: "6",
    name: "Sarah",
    location: "New York",
    status: "Reserved",
  },
];
class Ordertable extends Component {
  render() {
    return (
      <div className="ms-content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <Breadcrumb />
            <div className="ms-panel">
              <div className="ms-panel-header">
                <h6> Order List</h6>
              </div>
              <div className="ms-panel-body">
                <div className="table-responsive">
                  <table className="table table-hover thead-primary">
                    <thead>
                      <tr>
                        <th scope="col">Table ID</th>
                        <th scope="col">Location</th>
                        <th scope="col">Status</th>
                        <th scope="col">Reserve</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Content.map((t, i) => (
                        <tr key={i}>
                          <th scope="row">{t.id}</th>
                          <td>{t.location}</td>
                          {(() => {
                            if (t.status === "Reserved") {
                              return (
                                <td>
                                  <span className="badge badge-dark">
                                    {t.status}
                                  </span>
                                </td>
                              );
                            } else {
                              return (
                                <td>
                                  <span className="badge badge-success">
                                    {t.status}
                                  </span>
                                </td>
                              );
                            }
                          })()}
                          {(() => {
                            if (t.status === "Available") {
                              return (
                                <td>
                                <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                </td>
                              );
                            } else {
                              return (
                                <td>
                                   <input type="checkbox" defaultValue checked='checked' /> <i className="ms-checkbox-check" />
                                </td>
                              );
                            }
                          })()}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ordertable;
