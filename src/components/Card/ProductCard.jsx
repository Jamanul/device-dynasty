import React from 'react';

const ProductCard = ({data}) => {
    //console.log(data)
    const {productName,
        productImage,
        productBrand,
        description,
        price,
        category,
        ratings,
        productCreationDate,
        productCreationTime,}=data
    return (
        <div className="card bg-base-100 shadow-xl">
    
  <figure className='w-96 object-center m-4 h-96'>
    <img
        className=''
        height={800}
        width={400}
      src={productImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{productName}</h2>
    <p className='text-left'><span className='font-bold'>About:</span> {description}</p>
    <div className="flex gap-2">
    <p className='text-left'><span className='font-bold'>Category:</span> {category}</p>
    <p className='text-left'><span className='font-bold'>Brand:</span> {productBrand}</p>
    <p className='text-left'><span className='font-bold'>Rating:</span> {ratings}</p>
    </div>
    <div className='flex justify-between'>
    <p className='text-left font-bold text-xl text-orange-600'>Price {price} $</p>
    <p className='text-left flex items-center justify-center'><span className='font-bold text-xl'>Date: </span> {productCreationDate}</p>
    </div>
  </div>
</div>
    );
};

export default ProductCard;