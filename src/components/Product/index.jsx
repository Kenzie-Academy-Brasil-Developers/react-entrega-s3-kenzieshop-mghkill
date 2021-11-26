const Product = ({ item, handle, children }) => {
  const { image, name, price } = item;

  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <span>{price}</span>
      <button onClick={() => handle(item)}>{children}</button>
    </div>
  );
};
export default Product;
