import React from 'react';
console.log('SubCategoryController outside');
const SubCategoryController = () => {
  console.log('SubCategoryController inside');
  return (
    <div>
      SubCategoryController
      {console.log('SubCategoryController inside return')}
    </div>
  );
};

export default SubCategoryController;
