const FoodCard = ({ food }) => {
  return (
    <div className="card">
      <img src={food.image} alt={food.name} />
      <h4>{food.name}</h4>
      <p>₹{food.price}</p>
    </div>
  );
};


export default FoodCard