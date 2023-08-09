const BookModel = require("./model");

//controllers
const listbookController = function (req,res){
    //list all banks
    const {id} = req.params;

    if(id){
        BookModel.find({_id:id}).then (books=>{
            res.json({data:books})
           }).catch (err=>console.log(err));
         
    }else {
        BookModel.find().then (books=>{
            res.json({data:books})
           }).catch (err=>console.log(err));
         
    }


  

}
const createbookController = function (req,res){
    const {title,author,description} = req.body;

    const book = new BookModel({title,author,description});
     
    book.save().then(result =>{
        res.json({message:"create successful",data:result});
    }).catch(err =>console.log(error));

  

}
const updatebookController = function (req,res){
    const {id,title,author,description} = req.body;


    BookModel.findById(id).then (book=>{
        if (book){
            book.title = title;
            book.author = author;
            book.description = description;
          
            book.save();

            
         res.json({message:"update successful", data:book})
        }

        res.json({message:"Document can not be found", data:book})
    }).catch(err => console.log(err))

}



   

const deleteBookController = function (req,res){
    const {id} = req.body;
    
    BookModel.findByIdAndRemove(id).then (deletedBook=>{
        if(deletedBook){
            res.json({message:"delete successful", data:deletedBook})
            return;
        }
        res.json({message: "bank not found"})
    }).catch(err => console.log(err))

}



module.exports = {
    listbookController,
    updatebookController,
    createbookController,
    deleteBookController
}