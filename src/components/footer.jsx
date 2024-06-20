import "./footer.css";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div style={{ display: "flex" }}>
          <div className="contact">
            <img src="/Assets/mile2-aseets/footer/logo-footer.svg" alt="" />
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src="/Assets/mile2-aseets/footer/icons/icon-1.png" alt="" />
              341 Londonderry Road, Istanbul Türkiye
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {" "}
              <img src="/Assets/mile2-aseets/footer/icons/icon-2.png" alt="" />
              aciktim@teknolojikyemekler.com
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {" "}
              <img src="/Assets/mile2-aseets/footer/icons/icon-3.png" alt="" />
              +90 216 123 45 67
            </p>
          </div>
          <div className="menus">
            <p>Sıcacık Menüler</p>
            <ul>
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Tester Geçit Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </div>
        </div>
        <div className="instagram">
          <p>Instagram</p>
          <div>
            <img src="/Assets/mile2-aseets/footer/insta/li-0.png" alt="" />
            <img src="/Assets/mile2-aseets/footer/insta/li-1.png" alt="" />
            <img src="/Assets/mile2-aseets/footer/insta/li-2.png" alt="" />
            <img src="/Assets/mile2-aseets/footer/insta/li-3.png" alt="" />
            <img src="/Assets/mile2-aseets/footer/insta/li-4.png" alt="" />
            <img src="/Assets/mile2-aseets/footer/insta/li-5.png" alt="" />
          </div>
        </div>
      </footer>
      <hr color="#333" />
      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler. </p>
        <FaTwitter />
      </div>
    </div>
  );
};

export default Footer;
