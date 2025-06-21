import { lazy } from 'react';

const Donate = lazy(() => import('./donation'));

const donationRoutes = [
    { path: '/donation', component: Donate },
];

export default donationRoutes;
