import homeRoutes from '../pages/Home/routes';
import donateRoutes from '../pages/Donate/routes';
import ministryRoutes from '../pages/Ministry/routes';
import cellRoutes from '../pages/Cell/routes';


const routes = [
    ...homeRoutes,
    ...donateRoutes,
    ...ministryRoutes,
    ...cellRoutes
];

export default routes;
