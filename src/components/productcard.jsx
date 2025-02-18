// write product card here

import React from 'react';
import ViewProductButton from '../components/button';
const Productcard = () => {
  const productImage = 'https://images.pexels.com/photos/9795001/pexels-photo-9795001.jpeg?auto=compress&cs=tinysrgb&w=600';
  const productName = 'Sample Product';
  const productPrice = '$99.99';
  return (
    <div style={styles.card}>
      <img src={productImage} alt={productName} style={styles.image} />
      <h3 style={styles.name}>{productName}</h3>
      <p style={styles.price}>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '16px',
    textAlign: 'center',
    width: '200px',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
  name: {
    fontSize: '16px',
    margin: '10px 0',
    color:'black',
  },
  price: {
    color: '#28a745',
    fontWeight: 'bold',
  },
};
export default Productcard;
