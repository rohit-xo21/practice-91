import { useState } from "react";
import axios from "axios"
import NavBar from "../components/NavBar";


const Home = () => {
    const[product, setProduct] = useState({
        name: "",
        description: "",
        price : "",
        quantity: ""
    });

    const onsubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/api/products/create", {...product});
            console.log(res)
        } catch(err) {
            console.log(err);
        }

        setProduct({
            name: "",
        description: "",
        price : "",
        quantity: ""
        })
    }


    return (
    <>

        <NavBar />
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" name="name"
            value={product.name}
            onChange={(e) => setProduct({...product, name: e.target.value})}
            /> <br />
            <label htmlFor="decription">Description</label>
            <input type="text" 
            name="description"
            value={product.description}
            onChange={(e) => setProduct({...product, description: e.target.value})}
            /> <br />
            <label htmlFor="price">Price</label>
            <input type="number" 
            name="price"
            value={product.price}
            onChange={(e) => setProduct({...product, price: e.target.value})}
            /> <br />
            <label htmlFor="quantity">Quantity</label>
            <input type="number" 
            value={product.quantity}
            onChange={(e) => setProduct({...product, quantity: e.target.value})}
            /> <br />
            <button type="submit" onClick={onsubmit}>Add Task</button>

        </form>            
    </>
    )

}

export default Home