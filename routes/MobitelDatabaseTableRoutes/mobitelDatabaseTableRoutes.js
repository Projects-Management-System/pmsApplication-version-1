const router = require("express").Router();
const Posts = require("../../models/mobitelProjectsDatabase");

// ------------------------ Getting site data to Databases ---------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------
router.get('/mobitelProjectsDatabasesSiteData', async (req, res) => {
  const { q } = req.query;

  let reqQuery = []

  if ( q === '') {
    reqQuery = {};
  } else {
    reqQuery = { Implementation_By :  q };
  }

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
