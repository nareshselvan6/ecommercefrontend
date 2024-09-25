
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import axios from "axios";
import "../Components/Landing.css";
import shopsphere from "../Images/shopsphere.png";

const Landingpage = () => {
  const [allprod, setAllprod] = useState();
  const [rend, setRend] = useState(false);
  const [searchopt, setSearchopt] = useState();
  const [filter,setfilter]=useState()


   // MODEL
   const[editmodel,setEditmodel]=useState(false)
   const[namemodel,setNamemodel]=useState()
   const[descriptionmodel,setDescriptionmodel]=useState()
   const[pricemodel,setPricemodel]=useState()
   const[qtymodel,setQtymodel]=useState()
   const[idmodel,setIDmodel]=useState()
   const[categorymodel,setCategorymodel]=useState()

  useEffect(() => {
    fetchprod("all");
  }, []);

//  All Data Fetching

  const fetchprod = async (prodtype) => {
    try {
      if (prodtype === "all" || prodtype === " ") {
        await axios
          .get("https://ecommerce-landing-backend.onrender.com/api/get")
          .then((res) => setAllprod(res), setRend(true));
      } else {
        await axios
          .get(
            `https://ecommerce-landing-backend.onrender.com/api/getbytype/${prodtype}`
          )
          .then((res) => setAllprod(res), setRend(true));
      }
    } catch (error) {
      console.log(error);
    }
  };

//  Search By Producttype

  const searchprod = async (e) => {
    e.preventDefault();

    console.log(searchopt);

    try {
      const res = await axios(
        `https://ecommerce-landing-backend.onrender.com/api/getbyname/${searchopt}`
      );

    
      const result = Array.isArray(res.data.getting)
        ? res.data.getting
        : [res.data.getting];

      setAllprod({ data: { getting: result } });
    } catch (error) {
      console.log(error);
    }
  };

//  Search By Filter Value

const handlefilter=async(e)=>{
    const val=e.target.value

    try {
        if (val === "all" || val === " ") {
          await axios
            .get("https://ecommerce-landing-backend.onrender.com/api/get")
            .then((res) => setAllprod(res), setRend(true));
        } else {
            let prodtype=val
          await axios
            .get(
              `https://ecommerce-landing-backend.onrender.com/api/getbytype/${prodtype}`
            )
            .then((res) => setAllprod(res), setRend(true));
        }
      } catch (error) {
        console.log(error);
      }
}

// View Product

const view=async(ele)=>{
    console.log(ele);
    
    try {
        setEditmodel(true)
        setNamemodel(ele.productname)
        setDescriptionmodel(ele.description)
        setPricemodel(ele.price)
        setQtymodel(ele.quantity)
        setIDmodel(ele._id)
        setCategorymodel(ele.producttype)
        
        
    } catch (error) {
        console.log(error);
        
    }
}


  return (
    <div>
      <div>
        <Navbar />
        <div className="quotes1 m-3">
          <h2 className="d-flex justify-content-center align-items-center">
            "Welcome to the future of shopping"
          </h2>
          <h2 className="d-flex justify-content-center align-items-center">
            "Where every click brings you closer to what you love!"
          </h2>
        </div>
        <Carousel />
      </div>
      <div>
        <div className="quotes2 d-flex justify-content-center align-items-center">
          <h2>
            "Shop smart, shop fast – your dream products delivered with just a
            tap!"
          </h2>
        </div>

        <div className="before_title d-flex justify-content-center align-items-center m-4">
          <h5> Categories </h5>
        </div>

        <div classname="navtabs">
          <ul
            className="nav nav-tabs d-flex flex-wrap justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link me-md-3 me-1 text-dark"
                onClick={() => fetchprod("all")}
                id="home-tab"
                type="button"
                role="tab"
                aria-controls="all-tab-pane"
                aria-selected="false"
                data-bs-target="#all-tab-pane"
                data-bs-toggle="tab"
                tabIndex={-1}
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link me-md-3 me-1 text-dark"
                onClick={() => fetchprod("electronics")}
                id="electrnoics-tab"
                type="button"
                role="tab"
                aria-controls="electronics-tab-pane"
                aria-selected="false"
                data-bs-target="#electronics-tab-pane"
                data-bs-toggle="tab"
                tabIndex={-1}
              >
                Electronics
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link me-md-3 me-1 text-dark "
                onClick={() => fetchprod("clothing")}
                id="clothing-tab"
                type="button"
                role="tab"
                aria-controls="clothing-tab-pane"
                aria-selected="true"
                data-bs-target="#clothing-tab-pane"
                data-bs-toggle="tab"
              >
                Clothing
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link me-md-3 me-1 text-dark "
                onClick={() => fetchprod("homeappliances")}
                id="homeappliances-tab"
                type="button"
                role="tab"
                aria-controls="homeappliances-tab-pane"
                aria-selected="true"
                data-bs-target="#homeappliances-tab-pane"
                data-bs-toggle="tab"
              >
                Home Appliances
              </button>
            </li>
          </ul>
        </div>

        <nav className="navbar ">
          <div className="container-fluid d-flex justify-content-center m-3">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearchopt(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={searchprod}
              >
                Search
              </button>
            </form>
            <div className='filter '>
                <select 
                    className='filterbox  btn btn-info mx-2 w-100' 
                    onChange={handlefilter} 
                >
                    <option  value="all" className='pricefilter-btn'>All</option>   
                    <option value="electronics">Electronics</option>
                    <option value="clothings">Clothing</option>
                    <option value="homeappliances">Home Appliances</option>
                </select>         
          </div>
          </div>
        </nav>

        <div className="card_container row">
          {allprod?.data?.getting?.map((ele, ind) => {
            return (
              <div
                key={ele.id}
                className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3"
              >
                <div className="card" style={{ width: "100%" }}>
                  <img
                    src={shopsphere}
                    className="card-img-top"
                    alt="Product Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name: {ele.productname}</h5>
                    <h5 className="card-price">Price: {ele.price} rs</h5>
                    <h5 className="card-type">Type: {ele.producttype}</h5>
                    <a className="btn btn-primary" onClick={()=>view(ele)}>Product Details</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

{editmodel && (
  <div
    className="modal fade show"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
  >
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Product Info
          </h1>
          <button
            type="button"
            className="btn-close btn btn-danger"
            onClick={() => setEditmodel(false)}
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3 text-center img_modal">
              <img
                src={shopsphere}
                className="img-fluid img-thumbnail"
                alt="Product"
                style={{ maxHeight: "300px" }} // Ensures responsive height for the image
              />
            </div>
            <div className="mb-3">
              <h3 htmlFor="recipient-name" className="col-form-label">
                Product: {namemodel}
              </h3>
            </div>
            <div className="mb-3">
              <h3 htmlFor="recipient-name" className="col-form-label">
                Category: {categorymodel}
              </h3>
            </div>
            <div className="mb-3">
              <h3 htmlFor="message-text" className="col-form-label">
                Description: {descriptionmodel}
              </h3>
            </div>
            <div className="mb-3">
              <h3 htmlFor="message-text" className="col-form-label">
                Price: {pricemodel}
              </h3>
            </div>
            <div className="mb-3">
              <h3 htmlFor="message-text" className="col-form-label">
                Quantity: {qtymodel}
              </h3>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setEditmodel(false)}
          >
            Close
          </button>
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => update(idmodel)}
          >
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Landingpage;
