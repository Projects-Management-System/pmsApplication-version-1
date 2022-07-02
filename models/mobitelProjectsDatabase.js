const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  Planning_ID:String,
  Implementation_By:String,
  Project:String,
  Site_ID:String,
  Site_Name:String,
  HO_Date:String,
  HO_Modification:String,
  HO_Modified_Date:String,
  Scope:String,
  New_RAT:String,
  New_Sector:String,
  Approval_Status:String,
  Approval_Ref:String,
  IMP_Scenario:String,
  blank1:String,
  blank2:String,
  blank3:String,
  Tilt:String,
  Azimuth:String,
  Antenna_Height:String,
  New_RRU_Type:String,
  RRU_From:String,
  New_BTS_Type:String,
  BTS_From:String,
  New_Antenna_Type:String,
  Antenna_From:String,
  Cards_Type_n_From:String,
  Battery_count_n_From:String,
  Mobitel_Region:String,
  Planning_Engineer:String,
  On_Air_Target:String,
  Planning_Comments:String,
  Site_Engineer:String,
  Sub_Contractor:String,
  Assigned_Date:String,
  Special_Tag:String,
  Coordinator_Comments:String,
  Site_Status:String,
  Dependency:String,
  Responsible:String,
  Dependencies_On_Air_Target:String,
  Civil_PAT_Date:String,
  SAQ_Clearance_Date:String,
  TSSR_Referance:String,
  TSSR_Submitted_Date:String,
  TSSR_Approved_Date:String,
  Supply_BOQ_Submitted:String,
  Supply_BOQ_Approved:String,
  Approval_Received_Date:String,
  MCW_Requested_Date:String,
  MCW_Completed_Date:String,
  Supply_PR_Submitted:String,
  Supply_PR_Status:String,
  Supply_PR_Approved_Date:String,
  Supply_PR_Number:String,
  Supply_PR_Raise:String,
  Supply_PO_Number:String,
  Supply_PO_Issued:String,
  IMP_PR_Submitted:String,
  IMP_PR_Approved_Date:String,
  IMP_PR_Number:String,
  IMP_PR_Raised:String,
  IMP_PO_Number:String,
  IMP_PO_Issued:String,
  AWR_1:String,
  AWR_2:String,
  AWR_3:String,
  PI_Number:String,
  PI_Submitted:String,
  PI_Approved_ENG:String,
  TRC_Approved:String,
  BOI_Approved:String,
  ICL_Approved:String,
  Payment_Method:String,
  Payment_Confirmed:String,
  ETA:String,
  Received_To_Port:String,
  Port_Clearance:String,
  Logistics_Remarks:String,
  Mobilization_Status:String,
  Mobilized_Date:String,
  Installation_Status:String,
  Installation_Date:String,
  Power_Connected_Date:String,
  TX_Connected_Date:String,
  Commissioning_Status:String,
  Commisioned_Date:String,
  SAR_Reference:String,
  SAR_Status:String,
  SAR_Date:String,
  PAT_Reference:String,
  PAT_Status:String,
  PAT_Submitted:String,
  PAT_Pass_Date:String,
  Check_List_Submitted:String,
  Check_List_Verified:String,
  On_Air_Status:String,
  On_Air_Date:String,
  Material_Reconciled:String,
  Balance_Material_Returned_Date:String,
  COW_Number:String,
  COW_Submitted:String,
  COW_Approved:String,
  CPL_Number:String,
  CPL_Submitted:String,
  CPL_Approved:String,
  PAC_Invoice_Number:String,
  PAC_Invoice_Submitted:String,
  PAC_Invoice_Approved:String,
  FAC_Number:String,
  FAC_Submitted:String,
  FAC_Approved:String,
  PO_Status:String,
  PO_Closed_Date:String,
  Capitalization_Status:String,
  Capitalized_Date:String,
  Fiance_Remakrs:String
});

module.exports = mongoose.model('MobitelProjectsDatabase', dataSchema);
