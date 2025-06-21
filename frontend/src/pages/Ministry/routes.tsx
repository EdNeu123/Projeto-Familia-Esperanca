import { lazy } from 'react';

const Ministry = lazy(() => import('./ministry'));

const ministryRoutes = [{ path: '/ministry', component: Ministry }];

export default ministryRoutes;
