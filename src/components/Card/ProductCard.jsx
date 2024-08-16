import React from 'react';

const ProductCard = ({data}) => {
    console.log(data)
    const {productImage,productName,price}=data
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure className='h-96 w-96 object-center px-4 pt-4'>
    <img
        className='rounded-3xl'
      src={productImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{productName}</h2>
    <p className='text-left font-bold text-xl text-orange-600'>Price {price} $</p>
  </div>
</div>
    );
};

export default ProductCard;