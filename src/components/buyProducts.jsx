export const BuyProducts = ({ addProduct, deleteProductToCart }) => {
  const uniqueProductInCart = [];
  addProduct.forEach((product) => {
    const existProductInCart = uniqueProductInCart.findIndex((elemArr) => {
      return elemArr.id === product.id;
    });
    if (existProductInCart !== -1) {
      uniqueProductInCart[existProductInCart].quantityProduct += 1;
      uniqueProductInCart[existProductInCart].cost += product.cost;
    } else {
      uniqueProductInCart.push({ ...product, quantityProduct: 1 });
    }
  });

  const sumAll = () => {
    let totalSum = 0;
    uniqueProductInCart.forEach((product) => {
      totalSum += product.cost;
    });

    return totalSum;
  };

  const deleteProduct = (productId) => {
    const updateCart = addProduct.filter((product) => product.id !== productId);
    deleteProductToCart(updateCart);
  };

  return (
    <>
      <div className="buyAll">
        <div className="buyProductCart">
          {uniqueProductInCart.map((product, id) => (
            <div className="blockProductCart" key={id}>
              <div className="blockProductCartLeft">
                <h2>{product.name}</h2>
                <h3> {product.color}</h3>
                <hr />
                <img className="fotoCard" src={product.photo} />
              </div>
              <div className="blockProductCartRight">
                <h2>Quantity: {product.quantityProduct}</h2>
                <h2>Cost: {product.cost / product.quantityProduct} UAH</h2>
                <h2>Sum: {product.cost} UAH</h2>
                <button
                  className="deleteProduct"
                  onClick={() => {
                    deleteProduct(product.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="totalBuy">
          <h1>Total sum: {sumAll()} UAH</h1>
          <button className="buttonBuyAll"> Buy All</button>
        </div>
      </div>
    </>
  );
};
