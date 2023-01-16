const Product = require("../models/product")

const getAllProducts =  async (req,res)=>{

    const myData = await Product.find({})
    res.json({myData})
}

const getAllProductsTesting = async (req,res)=>{
    const myData = await Product.find(req.query)

    res.json({myData})
}

module.exports ={getAllProducts, getAllProductsTesting}