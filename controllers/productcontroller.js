const product = require('../modelBlueprint/productModel');

//busines logic;
const getProducts = async(req,res)=>{
   
    try{
         const allProducts = await product.find();
         if(!allProducts || allProducts.length===0){
                res.json({
                sucess:false,
                message:"NO product found"
           })
         }
         res.json({
            sucess:true,
            products : allProducts
         })
    }
    catch(e){
     res.status(500).json({
        sucess:false,
        message:"internl error"
     })
    }
}

const createProduct = async(req,res)=>{
   try{
      const {name,price,category,description} = req.body;
      const newProduct = new product({name,price,category,description});
      await newProduct.save();

      res.status(200).json({
         suceess:true,
         ProductIS: newProduct,
      })
   }catch(e){
      res.status(500).json({
         suces:false,
         error :e.message
      })
   }
}


const updateProduct = async(req,res)=>{
   const {id} = req.params;
   try{
      const {name,price,category,description} = req.body;
      const newProduct = await product.findByIdAndUpdate(id,{name,price,category,description},{new:true})
   
      res.status(200).json({
         suceess:true,
         ProductIS: newProduct,
      })
   }catch(e){
      res.status(500).json({
         suces:false,
         error :e.message
      })
   }
}

const deleteProduct = async(req,res)=>{
   const {id} = req.params;
   try{
      const deletedProd = await product.findByIdAndDelete(id)
      
      res.status(200).json({
         suceess:true,
         ProductIS: deletedProd
      })
   }catch(e){
      res.status(500).json({
         suces:false,
         error :e.message
      })
   }
}
module.exports= {getProducts, createProduct, updateProduct,deleteProduct};
