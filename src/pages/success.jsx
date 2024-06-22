import React from "react";
import { useHistory } from "react-router-dom";
import "./success.css";

const Success = () => {
  const history = useHistory();
  const orderDetails = history.location.state?.orderDetails;

  return (
    <div className="success-container">
      <header className="success-header">
        <img src="/Assets/mile1-assets/logo.svg" alt="" />
      </header>

      <div className="order-status">
        <div className="sub-header">
          <p>lezzetin yolda</p>
        </div>
        <p>SİPARİŞ ALINDI</p>
      </div>
      <div className="pizza-name">
        <p>{orderDetails?.name || "Position Absolute Acı Pizza"}</p>
      </div>

      <div className="order-details">
        <p>
          Boyut: <span>{orderDetails?.size}</span>{" "}
        </p>
        <p>
          Hamur: <span>{orderDetails?.crust}</span>
        </p>
        <p>
          Ek Malzemeler: <span>{orderDetails?.extras?.join(", ")}</span>
        </p>
        {orderDetails?.note && (
          <p>
            Sipariş Notu: <span>{orderDetails.note}</span>
          </p>
        )}
      </div>
      <div className="order-summary">
        <div className="order-sy">
          <p className="order-summary-title">Sipariş Toplamı</p>
          <p>
            Miktar: <span>{orderDetails?.quantity || 1}</span>
          </p>
          <p>
            Toplam:{" "}
            <span>{orderDetails?.totalPrice?.toFixed(2) || "110.50"}₺</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
