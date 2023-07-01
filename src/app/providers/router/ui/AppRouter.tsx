import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
  <Suspense fallback={<h1>loading...</h1>}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
