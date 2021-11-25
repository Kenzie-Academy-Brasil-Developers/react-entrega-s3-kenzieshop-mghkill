const Product = ({ item }) => {
  const { image, name, price } = item;
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <span>{price}</span>
      <button>Adicionar ao carrinho</button>
    </div>
  );
};
export default Product;
