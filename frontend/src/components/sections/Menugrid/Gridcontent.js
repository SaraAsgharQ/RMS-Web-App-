import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import Axios from 'axios'

import img1 from "../../../assets/img/RMS/food-1.jpg";
import img2 from "../../../assets/img/RMS/food-2.jpg";
import img3 from "../../../assets/img/RMS/food-3.jpg";
import img4 from "../../../assets/img/RMS/food-4.jpg";
import img5 from "../../../assets/img/RMS/food-5.jpg";
import img6 from "../../../assets/img/RMS/food-6.jpg";
import img7 from "../../../assets/img/RMS/food-7.jpg";
import img8 from "../../../assets/img/RMS/food-8.jpg";



class Gridcontent extends Component {
  state = {
    gridcontent: []
    
  }

  getgridcontent = () => {
    Axios.get("http://localhost:3001/api/ge"
      // id : this.state.id,
      // name : this.state.name,
      // location : this.state.location,
      //  price : this.state.price,
      //  time : this.state.time_remaining,
    ).then((response) => {
      this.setState({gridcontent: response.data});
      //console.log(OrdersContent);
    });
};
  render() {
    return (
      <div className="ms-content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <Breadcrumb />
            <div className="row">
            <div className="col-md-12">
                <button className="btn btn-primary w-100" onClick={(e)=>{e.preventDefault();this.getgridcontent();}}>Show Menu Grid</button>
              {this.state.gridcontent.map((item, i) => (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="ms-card">
                    <div className="ms-card-img">
                      {/* <img src={item.photo} alt="card_img" /> */}
                    </div>
                    <div className="ms-card-body">
                      <div className="new">
                        <h6 className="mb-0">{item.name} </h6>
                        <h6 className="ms-text-primary mb-0">{item.price}</h6>
                      </div>
                      <div className="new meta">
                        <p>Qty:{item.quantity} </p>
                        <span className={item.statuscls}>{item.status}</span>
                      </div>
                      <p>{item.para}</p>
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

export default Gridcontent;
