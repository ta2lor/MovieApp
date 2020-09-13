import React from 'react';
import PropTypes from 'prop-types'

const foodList = [
  {
    id : 1,
    name: "kimchi",
    image : " https://www.liveeatlearn.com/wp-content/uploads/2019/11/how-to-make-kimchi-vert-500x500.jpg",
    rating : 4
  }
]

function Food(props) {
  return (
      <div>
          <h3>i love {props.name}</h3>
          <h4>{props.rating}/5</h4>
          <img src={props.picture} alt={props.name} />
      </div>
  )
}

Food.prototype = {
  name : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
}

function App() {
  return (
    <div>
      {foodList.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
    </div>
  );
}

export default App;
