import MainLayout from '../layouts/MainLayout';
import AddProductForm from '../component/AddProductForm';
import Product from '../component/Product';
import { useState } from 'react'
const testProduct = [
    {
        name: 'Pen',
        description: 'Write something',
        price: 10,
        Quanity: 100,
        imageURL: ''
    },

    {
        name: 'Pencil',
        description: 'Note something',
        price: 10,
        Quanity: 100,
        imageURL: ''
    },

]

const ProductsPages = () => {

    const [products, setProducts] = useState([]);

    const handleCreate = (data) => {
        products.push(data);
        let temp = products
        setProducts([...temp]);
    }

    return (
        <MainLayout>
            <h3>Add New Prodeuct</h3>
            <AddProductForm onCreate={handleCreate} />
            <h3>
                Product List {JSON.stringify(products)}
            </h3>
            {products.map((item) => (
                <Product data={item} />
            ))}

        </MainLayout>
    )
}
export default ProductsPages;