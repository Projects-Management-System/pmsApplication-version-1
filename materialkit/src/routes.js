import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import AuthLayout from './layouts/AuthLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Home from './pages/Home';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Unauthorized from './pages/Unauthorized';
import Databases from './pages/Databases';
import VendorProjectsInsightsHome from './pages/VendorProjectsInsights';
import VendorProjectsInsights from './components/_dashboard/Insights/AllVendorInsights/AllVendorProjectsInsights';
import HuaweiProjectsInsights from './components/_dashboard/Insights/HuaweiInsights/HuaweiProjectsInsights';
import ZTEProjectsInsights from './components/_dashboard/Insights/ZTE Insights/ZTEProjectsInsights';
import Tasks from './pages/Tasks';
import Other from './pages/Other';
import Addnew from './pages/Addnew';
import Projects from './pages/Projects';
import MobitelProjects from './pages/MobitelProjects';
import MobitelProjectsOverview from './pages/MobitelProjectsOverview';
import MobitelSubProjects from './pages/MobitelSubProjects';
import MobitelProjectsFinance from './pages/MobitelProjectsFinance';
import MobitelProjectsInsights from './pages/MobitelProjectsInsights';
import MobitelProjectsSiteEngineers from './pages/MobitelProjectsSiteEngineers';
import VendorProjectsOverview from './pages/VendorProjectsOverview';
import AllVendorProjectsOverview from './components/_dashboard/VendorProjectsOverview/AllVendors/AllVendorProjectsOverview';
import VendorProjectsOverviewHuawei from './components/_dashboard/VendorProjectsOverview/HuaweiOverview/VendorProjectsOverviewHuawei';
import VendorProjectsOverviewZTE from './components/_dashboard/VendorProjectsOverview/ZTEOverview/VendorProjectsOverviewZTE';
import VendorProjectsMilestones from './pages/VendorProjectsMilestones';
import VendorProjectsMilestonesAll from './components/_dashboard/VendorProjectsMilestones/AllVendorProjects/AllVendorProjectsMilestones';
import VendorProjectsMilestonesHuawei from './components/_dashboard/VendorProjectsMilestones/HuaweiProjects/HuaweiProjectsMilestones';
import VendorProjectsMilestonesZTE from './components/_dashboard/VendorProjectsMilestones/ZTEProjects/ZTEProjectsMilestones';
import VendorProjectsDatabase from './pages/VendorProjectsDatabase';
import VendorProjectsDatabaseAll from './components/_dashboard/VendorProjectDatabase/AllVendors/AllVendorsDatabases';
import VendorProjectsDatabaseHuawei from './components/_dashboard/VendorProjectDatabase/Huawei/VendorsDatabasesHuawei';
import VendorProjectsDatabaseZTE from './components/_dashboard/VendorProjectDatabase/ZTE/VendorsDatabasesZTE';
import DatabasesFileUpload from './pages/DatabasesFileUpload';
import VendorProjectsDatabasesFileUpload from './components/_dashboard/DatabasesFilesUploads/VendorProjects/VendorProjectsDatabasesFileUpload';
import MobitelProjectsDatabasesFileUpload from './components/_dashboard/DatabasesFilesUploads/MobitelProjects/MobitelProjectsDatabasesFileUpload';
import MobitelProjectsMilestones from './pages/MobitelProjectsMilestones';
import MobitelProjectsDatabase from './pages/MobitelProjectsDatabase';
// Mobitel Databases
import DatabasesMobitelProjectsAllMobitelProjects from './components/_dashboard/MobitelProjectDatabase/AllMobitelProjects/AllMobitelProjectsPage';
import DatabasesMobitelProjectsPendingMobitelProjects from './components/_dashboard/MobitelProjectDatabase/PendingTasks/PendingTasksHome/MobitelDatabasesPendingTasksHome';
import DatabasesMobitelProjectsPendingMobitelProjectsHODetails from './components/_dashboard/MobitelProjectDatabase/PendingTasks/HODetails/HODetailsPage';
import DatabasesMobitelProjectsPendingMobitelProjectsAssign from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Assign/AssignPage';
import DatabasesMobitelProjectsPendingMobitelProjectsDependencies from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Dependencies/DependenciesPage';
import DatabasesMobitelProjectsPendingMobitelProjectsPRPO from './components/_dashboard/MobitelProjectDatabase/PendingTasks/PRPOProgress/PRPOProgressPage';
import DatabasesMobitelProjectsPendingMobitelProjectsLogistics from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Logistics/LogisticsPage';
import DatabasesMobitelProjectsPendingMobitelProjectsImplementation from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Implementation/ImplementationPage';
import DatabasesMobitelProjectsPendingMobitelProjectsAcceptance from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Acceptance/AcceptancePage';
import DatabasesMobitelProjectsPendingMobitelProjectsPayment from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Payment/PaymentPage';
// Users
import RegisterUsers from './pages/RegisterUsers';
import UserList from './pages/UserList';
import UserProfile from './pages/UserProfile';
import TestDb1 from './pages/TestDb1';
import TestDb1CreatePost from './pages/TestDb1CreatePost';
import TestDb1ViewPost from './pages/TestDb1ViewPost';
import EditDetailsVOT from './components/_dashboard/VendorProjectsOverview/EditDetails';
import AddNewVendorProject from './components/_dashboard/VendorProjectDatabase/AddNewVendorProject';
import EditVendorProject from './components/_dashboard/VendorProjectDatabase/EditVendorProject';
import AddNewMobitelProject from './components/_dashboard/MobitelProjectDatabase/AddNewMobitelProject';
import EditMobitelProject from './components/_dashboard/MobitelProjectDatabase/EditMobitelProject';
import EditDetailsMOT from './components/_dashboard/MobitelProjectsOverview/EditDetails';
import TestDatagrid from './pages/TestDatagrid';
import Settings from './pages/Settings';
import SettingsVendorProjectsHome from './components/_dashboard/Settings/VendorProjects/VendorProjectsSetingsHome';
import SettingsMobitelProjectsHome from './components/_dashboard/Settings/MobitelProjects/MobitelProjectsSetingsHome';
import SettingsMobitelProjectsSiteEngineers from './components/_dashboard/Settings/MobitelProjects/MobitelProjectsSettingsSiteEngineers';

// --------------------------------------------------------------------------------------
const userRole = localStorage.getItem('adminLevel');
// --------------------------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    { path: '/', element: <Login />, children: [{ path: 'login', element: <Login /> }] },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },

        // Admin mod
        {
          path: 'app',
          element:
            userRole === 'Admin' || userRole === 'Moderator' ? (
              <DashboardApp />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'databases',
          element:
            userRole === 'Admin' || userRole === 'Moderator' ? (
              <Databases />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },

        // Admin mod vendor
        {
          path: 'VendorProjectsOverview',
          element:
            userRole === 'Admin' ||
            userRole === 'Moderator' ||
            userRole === 'Vendor - Huawei' ||
            userRole === 'Vendor - ZTE' ? (
              <VendorProjectsOverview />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsOverviewAll',
          element:
            userRole === 'Admin' || userRole === 'Moderator' ? (
              <AllVendorProjectsOverview />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsOverviewHuawei',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Vendor - Huawei' ? (
              <VendorProjectsOverviewHuawei />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsOverviewZTE',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Vendor - ZTE' ? (
              <VendorProjectsOverviewZTE />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsOverview/EditDetails/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Moderator' ||
            userRole === 'Vendor - Huawei' ||
            userRole === 'Vendor - ZTE' ? (
              <EditDetailsVOT />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsInsights',
          element:
            userRole === 'Admin' ||
            userRole === 'Moderator' ||
            userRole === 'Vendor - Huawei' ||
            userRole === 'Vendor - ZTE' ? (
              <VendorProjectsInsightsHome />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsInsightsAll',
          element:
            userRole === 'Admin' || userRole === 'Moderator' ? (
              <VendorProjectsInsights />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsInsightsHuawei',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Vendor - Huawei' ? (
              <HuaweiProjectsInsights />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsInsightsZTE',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Vendor - ZTE' ? (
              <ZTEProjectsInsights />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsMilestones',
          element:
            userRole === 'Admin' ||
            userRole === 'Moderator' ||
            userRole === 'Vendor - Huawei' ||
            userRole === 'Vendor - ZTE' ? (
              <VendorProjectsMilestones />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsMilestonesAll',
          element:
            userRole === 'Admin' || userRole === 'Moderator' ? (
              <VendorProjectsMilestonesAll />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsMilestonesHuawei',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Vendor - Huawei' ? (
              <VendorProjectsMilestonesHuawei />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsMilestonesZTE',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Vendor - ZTE' ? (
              <VendorProjectsMilestonesZTE />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects',
          element:
            userRole === 'Admin' ||
            userRole === 'Moderator' ||
            userRole === 'Vendor - Huawei' ||
            userRole === 'Vendor - ZTE' ? (
              <VendorProjectsDatabase />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsAll',
          element:
            userRole === 'Admin' || userRole === 'Moderator' ? (
              <VendorProjectsDatabaseAll />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsHuawei',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Vendor - Huawei' ? (
              <VendorProjectsDatabaseHuawei />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsZTE',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Vendor - ZTE' ? (
              <VendorProjectsDatabaseZTE />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AddNew',
          element:
            userRole === 'Admin' ||
            userRole === 'Moderator' ||
            userRole === 'Vendor - Huawei' ||
            userRole === 'Vendor - ZTE' ? (
              <AddNewVendorProject />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesUploadProjectFiles',
          element:
            userRole === 'Admin' ||
            userRole === 'Moderator' ||
            userRole === 'Editor' ||
            userRole === 'Vendor - Huawei' ||
            userRole === 'Vendor - ZTE' ? (
              <DatabasesFileUpload />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesUpload/ProjectFiles/VendorProjects',
          element:
            userRole === 'Admin' ||
            userRole === 'Moderator' ||
            userRole === 'Vendor - Huawei' ||
            userRole === 'Vendor - ZTE' ? (
              <VendorProjectsDatabasesFileUpload />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjects/EditProject/:id',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Vendor' ? (
              <EditVendorProject />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },

        // Admin mod

        {
          path: 'MobitelProjectsOverview',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <MobitelProjectsOverview />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'MobitelProjectsOverview/Edit/:id',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <EditDetailsMOT />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'MobitelProjectsInsights',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <MobitelProjectsInsights />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'MobitelProjectsMilestones',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <MobitelProjectsMilestones />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'MobitelProjectsFinance',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <MobitelProjectsFinance />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'MobitelSubProjects',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <MobitelSubProjects />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'MobitelProjectsSiteEngineers',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <MobitelProjectsSiteEngineers />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'MobitelProjects',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <MobitelProjects />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },

        // Admin mod editor
        {
          path: 'DatabasesMobitelProjects',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <MobitelProjectsDatabase />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/AllMobitelProjects',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <DatabasesMobitelProjectsAllMobitelProjects />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <DatabasesMobitelProjectsPendingMobitelProjects />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/HandoverDetails',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsHODetails />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/Assign',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsAssign />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/Dependencies',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsDependencies />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/PRPO',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsPRPO />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/Logistics',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsLogistics />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/Implementation',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsImplementation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/Acceptance',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsAcceptance />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/Payment',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsPayment />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/AddNew',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <AddNewMobitelProject />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/Edit/:id',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <EditMobitelProject />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesUpload/ProjectFiles/MobitelProjects',
          element:
            userRole === 'Admin' || userRole === 'Moderator' || userRole === 'Editor' ? (
              <MobitelProjectsDatabasesFileUpload />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        { path: 'home', element: <Home /> },
        { path: 'tasks', element: <Tasks /> },
        { path: 'userProfile', element: <UserProfile /> },
        { path: 'TestDb1', element: <TestDb1 /> },
        { path: 'TestDb1/addpost', element: <TestDb1CreatePost /> },
        { path: 'TestDb1/post/:id', element: <TestDb1ViewPost /> },
        { path: 'other', element: <Other /> },
        { path: 'addnew', element: <Addnew /> },
        { path: 'user', element: <User /> },
        { path: 'blog', element: <Blog /> },
        { path: 'TasksTestDatagrid', element: <TestDatagrid /> },
        // Admin
        {
          path: 'Users/registerUser',
          element: userRole === 'Admin' ? <RegisterUsers /> : <Navigate to="/unauthorized" />
        },
        {
          path: 'Users/userList',
          element: userRole === 'Admin' ? <UserList /> : <Navigate to="/unauthorized" />
        },
        {
          path: 'settings',
          element: userRole === 'Admin' ? <Settings /> : <Navigate to="/unauthorized" />
        },
        {
          path: 'settings/VendorProjects',
          element:
            userRole === 'Admin' ? <SettingsVendorProjectsHome /> : <Navigate to="/unauthorized" />
        },
        {
          path: 'settings/MobitelProjects',
          element:
            userRole === 'Admin' ? <SettingsMobitelProjectsHome /> : <Navigate to="/unauthorized" />
        },
        {
          path: 'settings/MobitelProjects/SiteEngineers',
          element:
            userRole === 'Admin' ? (
              <SettingsMobitelProjectsSiteEngineers />
            ) : (
              <Navigate to="/unauthorized" />
            )
        }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'user', element: <User /> },
        { path: 'product category', element: <Tasks /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: 'unauthorized', element: <Unauthorized /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
