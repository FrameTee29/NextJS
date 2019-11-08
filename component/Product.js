import React from 'react'

const Product = props => {

    const { name, description, price, Quanity, imageURL } = props.data;

    return (
        <div>
            <img src={imageURL} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{Quanity} Left</p>
            <p>{price} Bath</p>
        </div>
    )
}
export default Product;