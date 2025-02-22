const Product = require("../models/productModel");

const createProduct = async(req,res) => {
    try{
        const { name, description, price, quantity } = req.body;
        if(!name || !description || !price || !quantity){
            res.status(401).json({message: "All fields required"})
        }

        const product = new Product({
            name,
            description,
            price,
            quantity
        });

        await product.save()
        res.status(200).send("Product created successfully");

    } catch(err){
        res.status(500).json({message: err.message})
    }
}

const getProduct = async (req,res) =>{
    try{
        const data = await Product.find();
        res.status(200).send(data)

    } catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = {createProduct, getProduct};