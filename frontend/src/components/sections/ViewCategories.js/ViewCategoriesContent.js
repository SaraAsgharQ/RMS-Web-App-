import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import Axios from 'axios'

import img1 from "../../../assets/img/RMS/category-1.jpg";
import img2 from "../../../assets/img/RMS/category-2.jpg";
import img3 from "../../../assets/img/RMS/category-3.jpg";



class ViewCategoriesContent extends Component {
  state = {
    categorycontent: []
    
  }
  getcategorycontent = () => {
    Axios.get("http://localhost:3001/api/gete"
      // id : this.state.id,
      // name : this.state.name,
      // location : this.state.location,
      //  price : this.state.price,
      //  time : this.state.time_remaining,
    ).then((response) => {
      this.setState({categorycontent: response.data});
      //console.log(OrdersContent);
    });
};
  render() {
    return (
      <div className="ms-content-wrapper">
        <div className="row">
          <div className="col-md-12">
          <div className="col-md-12">
                <button className="btn btn-primary w-100" onClick={(e)=>{e.preventDefault();this.getcategorycontent();}}>Show Categories</button>
            <Breadcrumb />
            <div className="row">
              {this.state.categorycontent.map((category, i) => (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="ms-card">
                    <div className="ms-card-img">
                      {/* <img src={category.photo} alt="card_img" /> */}
                    </div>
                    <div className="ms-card-body">
                      <div className="new">
                        <h6 className="mb-0">{category.name} </h6>
                      </div>
                      <div className="new mb-0">
                        <button
                          type="button"
                          className="btn grid-btn mt-0 btn-sm btn-primary"
                        >
                          Remove
                        </button>
                        <button
                          type="button"
                          className="btn grid-btn mt-0 btn-sm btn-secondary"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewCategoriesContent;
