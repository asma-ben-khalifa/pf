const express = require("express")
const cors = require("cors")
const app = express()
const products = require("./products")
const multer = require("multer")

app.use(express.json())
app.use(cors())
app.get("/" , (req, res) => {
    res.send("welcome to our online shop api")

})
app.get("/products" , (req, res) => {
    res.send(products);

})

const fileStorageEngine = multer.diskStorage({
    destination: (req ,file , cb) =>{
        cb(null, './images' )
    },
    filename: (req , file , cb)=>{
        cb(null, Date.now() + '--' +file.originalname)
    }
})

  
const upload =multer({storage : fileStorageEngine})

app.post("/single",upload.single("image"),(req,res)=>{
    console.log(req.file)
    res.send("single upolad")
})

const port = process.env.PORT || 3005
app.listen(port, console.log(`server runing on port ${port}`)
)