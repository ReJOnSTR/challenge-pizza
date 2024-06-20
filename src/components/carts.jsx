import "./carts.css";

const Carts = () => (
  <div className="food-menu">
    <div className="food-card-1 special-card">
      <div className="food-card-text">
        <p style={{ fontFamily: "Quattrocento", fontSize: "68px" }}>
          Özel <br />
          Lezzetus
        </p>
        <p
          style={{
            fontFamily: "Barlow",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          Position: Absolute Aç Burger
        </p>
        <a href="">
          <button>SİPARİŞ VER</button>
        </a>
      </div>
    </div>
    <div className="food-carts">
      <div className="food-card-2 small-card">
        <div className="food-card-text">
          <p
            style={{
              fontFamily: "Barlow",
              fontSize: "32px",
              fontWeight: "500",
            }}
          >
            Hackathlon <br />
            Burger Menü
          </p>
          <a href="">
            <button>SİPARİŞ VER</button>
          </a>
        </div>
      </div>
      <div className="food-card-3 small-card">
        <div className="food-card-text">
          <p
            style={{
              fontFamily: "Barlow",
              fontSize: "32px",
              color: "black",
              fontWeight: "500",
            }}
          >
            <font color="red">Çoooook</font> hızlı <br />
            npm gibi kurye
          </p>
          <a href="">
            <button> SİPARİŞ VER</button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Carts;
