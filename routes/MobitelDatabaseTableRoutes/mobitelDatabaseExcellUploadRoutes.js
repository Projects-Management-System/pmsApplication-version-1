const router = require("express").Router();
const Posts = require("../../models/mobitelProjectsDatabase");

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------- Posting Excell data to the database  --------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------

router.post('/mobitelProjectsDatabasesExcell/upload', (req, res) => {
  const newPost = req.body;
  // console.log(newPost.length);

  async function run() {
    try {
      const options = { ordered: true };
      const result = await Posts.insertMany(newPost, options);
      // console.log(`${result.length} project documents were inserted`);
    } finally {
      res.status(200).json({
        success: `${newPost.length} Projects Added Successfully!`
      });
    }
  }
  run();

});




// router.post('/vendorProjectsDatabasesOne/save',(req,res) => {
//   const newPost = req.body;
//   console.log(newPost);

//   Posts.insertMany(req.body).then((err) =>{
//     if(err){
//       return res.status(400).json({
//         error:err
//       });
//     }
//     return res.status(200).json({
//       success:"Project Details Added Successfully"
//     });
//   });
// });


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
module.exports = router;
