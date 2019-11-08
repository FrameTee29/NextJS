import React, { useState } from 'react'

const AddProductForm = (props) => {

    const [name, setName] = useState('');
    const [description, setdescription] = useState('');
    const [price, setPrice] = useState(0);
    const [Quanity, setQuanity] = useState(0);
    const [imageURL, setimageURL] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    const handelCreate = () => {
        props.onCreate({ name, description, price, Quanity, imageURL })
    }

    return (
        <div className='add-product-form'>
            <label>
                <p>Name</p>
                <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                <p>Description</p>
                <textarea type='text' onChange={(e) => setdescription(e.target.value)} />
            </label>
            <label>
                <p>Price</p>
                <input type='number' onChange={(e) => setPrice(+e.target.value)} />
            </label>
            <label>
                <p>Quanity</p>
                <input type='number' onChange={(e) => setQuanity(e.target.value)} />
            </label>

            <label>
                <p>Image</p>
                <input type='file' />
            </label>
            <div>
                <button onClick={handelCreate}>Create</button>
            </div>

            <style jsx>{` 
                .add-product-form{
                    border: 1px solid #16161e;
                    max-width: 200px;
                    padding: 10px;
                    border-radius: 8px;
                }
                button{
                    width: 100px;
                    background:pink;
                    border:1px solid #cecece;
                    padding:4px;
                    border-radius:8px;
                    outline:none;
                }
                p {
                    margin: 0 0 5px 0;
                }
                input{
                    margin-button:5px;
                    border-radius:4px;
                    padding:4 px;
                    border:1px soild #1616e;

                }
                textarea{
                    border-radius:8px;
                }
                `}</style>
        </div>
    )
}
export default AddProductForm;