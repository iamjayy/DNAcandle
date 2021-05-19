import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = ({ basketItems, totalCost }) => {
  return (
    <>
      <AppBar position="fixed" className="custom-navbar">
        <Container>
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className="custom-title"
              color="inherit"
            >
              <img
                src="https://scalebranding.com/wp-content/uploads/2020/10/Letter-A-fire-Candle.jpg"
                alt="DwinaTech logo"
                height="25px"
                className="logo"
              />
            </Typography>

            <div className="basket-wrapper">
              <IconButton
                component={Link}
                to="/basket"
                aria-label="Show basket contents"
                color="inherit"
              >
                <Badge badgeContent={basketItems} color="secondary">
                  <ShoppingCart className="custom-basket" />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
