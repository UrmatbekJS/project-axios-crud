import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const ProductList = ({ readProducts, products, deleteProduct }) => {
  useEffect(() => {
    readProducts();
  }, []);

  return (
    <div>
      <Container sx={{ marginTop: "50px" }}>
        <h1>Product List</h1>
        <Container
          sx={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {products.map((item, index) => (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.image}
                title="product image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Название: {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Описание: {item.descr}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Цена: {item.price}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <Link to={`edit/${item.id}`}>
                  <Button
                    sx={{ textDecoration: "none" }}
                    variant="outlined"
                    size="small"
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={(e) => deleteProduct(item.id)}
                  size="small"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
        </Container>
      </Container>
    </div>
  );
};

export default ProductList;
