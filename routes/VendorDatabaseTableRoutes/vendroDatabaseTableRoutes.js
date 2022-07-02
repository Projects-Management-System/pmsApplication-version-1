const router = require("express").Router();
const Posts = require("../../models/vendorProjectsDatabase");


// --------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------ Getting site data to vendor project Databases ---------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------

router.get('/vendorProjectsDatabasesSiteData', async (req, res) => {
  const Implementation_By = req.query;

  let reqQuery = []

  if ( Implementation_By === '') {
    reqQuery = {};
  } else {
    reqQuery = Implementation_By;
  }

  console.log(reqQuery);
  let queryStr = JSON.stringify(reqQuery);

  Posts.find(JSON.parse(queryStr)).exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }

    return res.status(200).json({
      success: true,
      posts:posts,
    });
  });
});

module.exports = router;
