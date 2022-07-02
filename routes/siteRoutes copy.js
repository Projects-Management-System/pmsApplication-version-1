const router = require("express").Router();
const Sites = require("../models/vendorProject1");

//get sites ---------------------------------------------------------------------------------------------------

router.get('/sites', (_req, res) => {
  Sites.find().exec((err, sites) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }

    return res.status(200).json({
      success: true,
      MobiAug: [50, 78, 90, 56, 45, 76, 98, 37, 87, 98, 76], // sample data sent from backend to front end as MobiAug

      chartDataForFrontEnd: getchartData(sites),  // Graph data of number of sites Mobilized in each month sending to front end Appwebsitevisits

    });
  });
});
// -------------------------------Mobilzed Data----------------------------------------------------------------

function getchartData(sites) {
  var mobilizeData = []
  var installedData = []
  var commissioned = []
  var sarData = []
  var patData = []
  var onairData = []

  // var date = new Date();
  // var month = [],
  //   monthNames = ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'Jul', 'Jun', 'May', 'Apr', 'Mar', 'Feb', 'Jan'];
  // for (var i = 0; i < 12; i++) {
  //   month.push(monthNames[date.getMonth()]);
  //   date.setMonth(date.getMonth() - 1);
  // }

  var date = new Date();
  var month = [],
    monthNames = ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'Jul', 'Jun', 'May', 'Apr', 'Mar', 'Feb', 'Jan'];
  for (var i = 0; i < 12; i++) {
    month.push(monthNames[date.getMonth()] + '-' + date.getFullYear().toString().substr(-2));;
    date.setMonth(date.getMonth() - 1);
  }

  // console.log(month);

  // var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];  

  for (var i = 0; i < 12; i++) {

      mobilizeData[i] = sites.filter((obj) => ((obj.Mobilized.split('-')[1]+"-"+obj.Mobilized.split('-')[2]) === month[i])).length,
      installedData[i] = sites.filter((obj) => ((obj.Installed.split('-')[1]+"-"+obj.Installed.split('-')[2]) === month[i])).length,
      commissioned[i] = sites.filter((obj) => ((obj.Commissioned_date.split('-')[1]+"-"+obj.Commissioned_date.split('-')[2]) === month[i])).length,
      sarData[i] = sites.filter((obj) => ((obj.SAR_Doc.split('-')[1]+"-"+obj.SAR_Doc.split('-')[2]) === month[i])).length,
      patData[i] = sites.filter((obj) => ((obj.PAT_pass_date.split('-')[1]+"-"+obj.PAT_pass_date.split('-')[2]) === month[i])).length,
      onairData[i] = sites.filter((obj) => ((obj.On_air_date.split('-')[1]+"-"+obj.On_air_date.split('-')[2]) === month[i])).length
    }
    // ---------------------------------------------------------------------------------------------------

    let myarray1 = mobilizeData, cumilative1 = [];
    let myarray2 = installedData, cumilative2 = [];
    let myarray3 = commissioned, cumilative3 = [];
    let myarray4 = sarData, cumilative4 = [];
    let myarray5 = patData, cumilative5 = [];
    let myarray6 = onairData, cumilative6 = [];

    for (let i = 0, s = myarray1[0]; i < myarray1.length; i++, s += myarray1[i]) cumilative1.push(s);
    for (let i = 0, s = myarray2[0]; i < myarray2.length; i++, s += myarray2[i]) cumilative2.push(s);
    for (let i = 0, s = myarray3[0]; i < myarray3.length; i++, s += myarray3[i]) cumilative3.push(s);
    for (let i = 0, s = myarray4[0]; i < myarray4.length; i++, s += myarray4[i]) cumilative4.push(s);
    for (let i = 0, s = myarray5[0]; i < myarray5.length; i++, s += myarray5[i]) cumilative5.push(s);
    for (let i = 0, s = myarray6[0]; i < myarray6.length; i++, s += myarray6[i]) cumilative6.push(s);
    
      let chartData = []
      chartData.push(
        {"name": "On Air", "type": "column", "data": cumilative6},
        {"name": "PAT", "type": "column", "data": cumilative5},
        {"name": "SAR", "type": "column", "data": cumilative4},
        {"name": "Commisioned", "type": "column", "data": cumilative3},
        {"name": "Installed", "type": "column", "data": cumilative2},
        {"name": "Mobilized", "type": "column", "data": cumilative1},
        );

      console.log(chartData)
          
  return chartData;
}

module.exports = router;
