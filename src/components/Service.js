import React from "react";
import { service } from "../data";

const Service = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {service.map((serv) => {
          return (
            <article className="service">
              <span className="service-icon">
                <i className={serv.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{serv.title}</h4>
                <p className="service-text">{serv.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
