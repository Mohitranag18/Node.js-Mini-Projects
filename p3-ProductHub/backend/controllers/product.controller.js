import Product from "../models/product.model.js"
import mongoose from "mongoose"

export const getProducts = async (req, res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json({success:true, data:products})
    } catch (error) {
        console.log(`Error in fetching product: ${error.messaage}`)
        res.status(404).json({success:false, message:"Products not found"})
    }
}

export const addProduct = async (req, res)=>{
    const product = req.body
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, messaage:"please provide all fields"})
    }
    const newProduct = new Product(product)
    try{
        await newProduct.save()
        res.status(201).json({success:true, data:newProduct})
    }catch(error){
        console.log(`Error in create product: ${error.message}`)
        return res.status(500).json({success:false, message:"Server Error"})
    }
}

export const deleteProduct = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false, message:"invalid product id"})
    }
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true, message:"Product deleted successfully"})
    } catch (error) {
        console.log(`Error in deleting product: ${error.messaage}`)
        res.status(500).json({success:false, message:"Server error"})
    }
}

export const updateProduct = async (req, res)=>{
    const {id} = req.params
    const product = req.body
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false, message:"invalid product id"})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true})
        res.status(200).json({success:true, data: updatedProduct})
    } catch (error) {
        console.log(`Error in updating product: ${error.messaage}`)
        res.status(500).json({success:false, message:"server error"})
    }
}
