import axios from "axios";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

export default function ProductList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products/");
                setList(res.data);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <NavBar />

            {list.map((product) => (
                <div key={product._id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                </div>
            ))}
        </>
    );
}
