// write button card here

import React from 'react';
const ViewProductButton = () => {
  return (
    <button style={styles.button}>View Product</button>
  );
};
const styles = {
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
};
export default ViewProductButton;
