import { lazy } from 'react';

const Cell = lazy(() => import('./cell'));

const cellRoutes = [{ path: '/cell', component: Cell }];

export default cellRoutes;
