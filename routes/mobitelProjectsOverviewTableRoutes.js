const router = require("express").Router();
const Posts = require("../models/mobitelProjectsOverviewTable");
const Datas = require("../models/mobitelProjectsDatabase");


router.post('/mobitelProjectsOverviewTable/save',(req,res)=>{

  let newPost = new Posts(req.body);

  newPost.save((err) =>{
    if(err){
      return res.status(400).json({
        error:err
      });
    }
    return res.status(200).json({
      success:"Project Details Added Successfully"
    });
  });
});

// --------------------------------------------------------------------------------------------------------------------
// -----------------------  Get posts from Mobitel Overview Table  ----------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

router.get('/mobitelProjectsOverviewTable', async (req, res, next) => {

  let reqQuery = [];
  if (req.query.ProjectName === 'All Mobitel Projects') {
    reqQuery = {};
  } else {
    reqQuery = { ...req.query };
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
      existingPosts:posts,
      scopeDataToTheFrontEnd:getProjectScopeData(posts),
    });
  });
});

// ------------------------------------------------------------------------------------------------------------------

router.get('/mobitelProjectsOverviewTableData', async (req, res, next) => {

  Datas.find().exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }

    return res.status(200).json({
      success: true,
      existingPosts: posts,
      siteData: getOverviewData(posts)
    });
  });
});

// ------------------------------------------------------------------------------------------------------------------
// --------------------------  Get projects name array  -------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------

router.get('/mobitelProjectsOverviewTable/ProjectsArray',(req,res) => {
  Posts.find().exec((err,mobitelProjects) => {
    if(err){
      return res.status(400).json({
        error:err
      });
    }
    return res.status(200).json({
      success:true,
      mobitelProjectsNamesArray:getProjectsNamesArray(mobitelProjects),
      mobitelProjectsNamesArrayForInsights:getProjectsNamesArrayInsights(mobitelProjects)
    });
  });
});

// ------------------------------------------------------------------------------------------------------------------

// Get a specific post

router.route("/mobitelProjectsOverviewTable/:id").get(async(req,res) =>{

  let postId = req.params.id;

  await Posts.findById(postId,(err,post) =>{
    if(err){
      return res.status(400).json({success:false, err});
    }    
      return res.status(200).json({
        success:true,
        post
      });
  });
});

// ---- update posts ------------------------------------------------------------------------------------------

router.route('/mobitelProjectsOverviewTable/Edit/:id').put(async(req,res) =>{

  let postID = req.params.id;
  const { Database, ProjectName, Vendor, StartDate, EndDate, Budget, ProjectScope, HandoverScope, OnHoldSites, PATPass, Completed, Remaining, Progress} = req.body;
  const updatePost = {
    Database, ProjectName, Vendor, StartDate, EndDate, Budget, ProjectScope, HandoverScope, OnHoldSites, PATPass, Completed, Remaining, Progress
  }

  const update = await Posts.findByIdAndUpdate(postID, updatePost)
  .then(() => {
    res.status(200).send({status:"Project Details Updated"})
  }).catch ((err) => {
    console.log(err);
    res.status(500).send({status:"Update Error", error: err.message});
  })
});

//delete post -----------------------------------------------------------------------------------------------

router.route('/mobitelProjectsOverviewTable/delete/:id').delete(async(req,res) =>{
  let postID = req.params.id;
  await Posts.findByIdAndDelete(postID)
  .then(() => {
    res.status(200).send({status: "Project Data Deleted"});
  }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error occured while deleting Preject details", error: err.message});
  })
});

//---------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------

function getProjectScopeData(posts) {
  
  var scopeDataArray = [];

  projectsScopesLength = posts.filter((obj) => (obj.ProjectScope)).length;

  for (var i = 0; i < projectsScopesLength; i++) {
    scopeDataArray[i] = posts.filter((obj) => (obj.ProjectScope))[i].ProjectScope;
  }

  let scopeDataSum = 0;

  for (let i = 0; i < scopeDataArray.length; i++) {
    scopeDataSum += scopeDataArray[i];
  }

  // console.log(scopeDataSum);
  return scopeDataSum;
 }
// //---------------------------------------------------------------------------------------------------------------------------
// //---------------------------------------------------------------------------------------------------------------------------

function getProjectsNamesArray(mobitelProjects) {
  
  var projectsNames = [];
  var projectsNamesArray = [];

  projectsNamesLength = mobitelProjects.filter((obj) => (obj.ProjectName)).length;

  for (var i = 0; i < projectsNamesLength; i++) {
    projectsNames[i] = mobitelProjects.filter((obj) => (obj.ProjectName))[i].ProjectName;

    projectsNamesArray.push({
      value: projectsNames[i],
      label: projectsNames[i]
    });
  }

  //  console.log(projectsNamesArray);
  return projectsNamesArray;
 }
//---------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------
function getProjectsNamesArrayInsights(mobitelProjects) {
  
  var projectsNames = [];
  var projectsNamesArray = [{ value: 'All Mobitel Projects', label: 'All Mobitel Projects' }];

  projectsNamesLength = mobitelProjects.filter((obj) => (obj.ProjectName)).length;

  for (var i = 0; i < projectsNamesLength; i++) {
    projectsNames[i] = mobitelProjects.filter((obj) => (obj.ProjectName))[i].ProjectName;

    projectsNamesArray.push({
      value: projectsNames[i],
      label: projectsNames[i]
    });
  }

  // console.log(projectsNamesArray);
  return projectsNamesArray;
 }

 //---------------------------------------------------------------------------------------------------------------------------
 //--------------------------------------  Overview Table Scope, PAT, Completed Data  ----------------------------------------
 //---------------------------------------------------------------------------------------------------------------------------

function getOverviewData(posts) {

  let data =  posts;
  console.log(data);

  return data;
 }

module.exports = router;