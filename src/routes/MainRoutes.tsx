import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// pages routing


// render - sample page
const CreditRisk = Loadable(lazy(() => import('pages/risk/credit-risk')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'credit-risk',
          element: <CreditRisk />
        }
      ]
    },
    {
      path: '/risk',
      element: (
        <AuthGuard>
          <MainLayout/>
        </AuthGuard>
      ),
      children: [
        {
          path: 'credit',
          element:<CreditRisk />
        },
     
      ]
    },
    {
      path: '/app',
      element: (
        <AuthGuard>
          <CommonLayout/>
        </AuthGuard>
      ),
      children: [
        {
          path: 'credit',
          element:<CreditRisk />
        },
     
      ]
    }
  ]
};

export default MainRoutes;
