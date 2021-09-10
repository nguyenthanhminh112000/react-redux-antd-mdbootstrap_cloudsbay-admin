import React from 'react';
console.log('ProductsController outside');
const ProductsController = () => {
  console.log('ProductsController inside');
  return (
    <div>
      ProductsController
      {console.log('ProductsController inside return')}
    </div>
  );
};

export default ProductsController;
