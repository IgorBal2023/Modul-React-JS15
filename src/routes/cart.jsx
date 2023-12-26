import { Link } from "react-router-dom";
import "../css/cart.css";
import { BuyProducts } from "../components/buyProducts";
import { useState } from "react";

export const Cart = () => {
  const products = [
    {
      id: "red",
      name: "Airpods-Max",
      color: "Red",
      cost: 26799,
      photo: "src/assets/img/airpods-max-select-side-red.png",
    },
    {
      id: "green",
      name: "Airpods-Max",
      color: "Green",
      cost: 26799,
      photo: "src/assets/img/airpods-max-select-side-green.png",
    },
    {
      id: "blue",
      name: "Airpods-Max",
      color: "Blue",
      cost: 26799,
      photo: "src/assets/img/airpods-max-select-side-blue.png",
    },
    {
      id: "silver",
      name: "Airpods-Max",
      color: "Silver",
      cost: 26799,
      photo: "src/assets/img/airpods-max-select-side-silver.png",
    },
    {
      id: "black",
      name: "Airpods-Max",
      color: "Black",
      cost: 26799,
      photo: "src/assets/img/airpods-max-select-side-black.png",
    },
  ];

  const [addProduct, setAddProduct] = useState([]);

  const addProductToCart = (product) => {
    setAddProduct([...addProduct, product]);
  };

  const deleteProductToCart = (updateCart) => {
    setAddProduct(updateCart);
  };
  return (
    <>
      <Link to="/">
        <button className="buttonHome">Home</button>
      </Link>
      <div className="cardBlock">
        {products.map((product) => (
          <div className="blockProduct" key={product.id}>
            <h2>{product.name}</h2>
            <h3> {product.color}</h3>
            <img className="fotoCard" src={product.photo} />
            <h2>Cost: {product.cost} UAH</h2>
            <button
              className="buyProduct"
              onClick={() => {
                addProductToCart(product);
              }}
            >
              BUY
            </button>
          </div>
        ))}
      </div>
      <BuyProducts
        addProduct={addProduct}
        deleteProductToCart={deleteProductToCart}
      />
    </>
  );
};
