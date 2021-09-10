import React from 'react';
console.log('ProductController outside');
const ProductController = () => {
  console.log('ProductController inside');
  return (
    <div>
      ProductController
      {console.log('ProductController inside return')}
    </div>
  );
};

export default ProductController;
