import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./order.css";
import Footer from "../components/footer";

function Order() {
  const history = useHistory();

  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");

  const basePrice = 85.5;
  const extraPrice = 5;

  const handleExtraChange = (extra) => {
    setExtras((prevExtras) => {
      if (prevExtras.includes(extra)) {
        return prevExtras.filter((e) => e !== extra);
      } else if (prevExtras.length < 10) {
        return [...prevExtras, extra];
      }
      return prevExtras;
    });
  };

  const totalPrice =
    basePrice * quantity + extras.length * extraPrice * quantity;

  const handleOrderClick = () => {
    const orderDetails = {
      name: "Position Absolute Acı Pizza",
      size,
      crust,
      extras,
      quantity,
      note,
      totalPrice,
    };
    history.push("/success", { orderDetails });
  };

  return (
    <>
      <div className="order-header">
        <img src="/Assets/mile1-assets/logo.svg" alt="Logo" />
      </div>

      <section className="pizza-details">
        <img
          src="/Assets/mile2-aseets/pictures/form-banner.png"
          alt="Form Banner"
        />
        <div className="pizza-details-p">
          <p>
            <span>Anasayfa</span> - <span>Sipariş Oluştur</span>
          </p>
          <p className="p-font">Position Absolute Acı Pizza</p>
        </div>
        <div className="food-details-2">
          <span className="price">{basePrice.toFixed(2)}₺</span>
          <div className="food-details-3">
            <span>4.9</span>
            <span>(200)</span>
          </div>
        </div>
        <p className="description">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </section>

      <section className="customization">
        <div className="size-crust">
          <div className="size">
            <label>
              Boyut Seç <span className="required">*</span>
            </label>
            <div className="size-options">
              {["S", "M", "L"].map((s) => (
                <React.Fragment key={s}>
                  <input
                    type="radio"
                    id={s}
                    name="size"
                    value={s}
                    checked={size === s}
                    onChange={(e) => setSize(e.target.value)}
                  />
                  <label htmlFor={s}>{s}</label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="crust">
            <label>
              Hamur Seç <span className="required">*</span>
            </label>
            <select value={crust} onChange={(e) => setCrust(e.target.value)}>
              <option value="">-Hamur Kalınlığı Seç-</option>
              <option value="İnce">İnce</option>
              <option value="Kalın">Kalın</option>
            </select>
          </div>
        </div>

        <div className="extras">
          <p className="extras-p-1">Ek Malzemeler</p>
          <p className="extras-p-2">
            (En Fazla 10 malzeme seçebilirsiniz. 5₺):
          </p>
          <div className="extra-options">
            {[
              "Pepperoni",
              "Sosis",
              "Kanada Jambonu",
              "Tavuk Izgara",
              "Soğan",
              "Domates",
              "Mısır",
              "Sucuk",
              "Jalapeno",
              "Sarımsak",
              "Biber",
              "Sucuk-2",
              "Ananas",
              "Kabak",
            ].map((extra) => (
              <label
                key={extra}
                className={extras.includes(extra) ? "selected" : ""}
              >
                <input
                  type="checkbox"
                  checked={extras.includes(extra)}
                  onChange={() => handleExtraChange(extra)}
                />
                <span className="checkbox-custom"></span>
                {extra}
              </label>
            ))}
          </div>
        </div>

        <div className="note">
          <label htmlFor="orderNote">Sipariş Notu</label>
          <textarea
            id="orderNote"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <hr />
        <div className="quantity-total">
          <div className="quantity">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <input type="number" value={quantity} readOnly />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <div className="total">
            <p className="total-title">Sipariş Toplamı</p>
            <div className="total-details">
              <p>
                Seçimler
                <span>
                  {(extras.length * extraPrice * quantity).toFixed(2)}₺
                </span>
              </p>
              <p className="total-price">
                <font color="#CE2829">Toplam</font>
                <font color="#CE2829">
                  <span>{totalPrice.toFixed(2)}₺</span>
                </font>
              </p>
            </div>
            <button onClick={handleOrderClick} className="order-button">
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Order;
