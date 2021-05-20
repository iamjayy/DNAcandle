import "./style.css";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();

  return (
    <footer className="footer">
      <p>DERRICK AND ALONDRA CANDLES {fullYear}</p>
    </footer>
  );
};

export default Footer;
