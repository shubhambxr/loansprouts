import React from 'react'
import CountUp from "react-countup";
import "../styles/CounterUpBox.css";
const CountUpBox = () => {
  return (
    <div className="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="employees">
                <p className="counter-count shadow"><CountUp end={898} duration={5}/>+</p>
                <p className="employee-p">Employee</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="customer">
                <p className="counter-count shadow"><CountUp end={954} duration={6}/>+</p>
                <p className="customer-p">Customer</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="design">
                <p className="counter-count shadow"><CountUp end={1050} duration={7}/>+</p>
                <p className="design-p">Design</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="order">
                <p className="counter-count shadow-lg"><CountUp end={652} duration={4}/>+</p>
                <p className="order-p">Orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CountUpBox