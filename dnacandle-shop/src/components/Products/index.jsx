import Product from "../Product";
import { Grid, Container } from "@material-ui/core";
import Banner from "../Banner";
import "./style.css";

const Products = ({ products }) => {
  return (
    <div>
      <Banner />
      <Container id="products">
        <Grid container spacing={4}>
          {products.map((product) => {
            return (
              <Grid key={product.id} item xs={12} md={4}>
                <Product product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
