import { useRoutes, useLocation, useParams, Navigate } from 'react-router-dom';
import loadable from 'react-loadable';

import MasterLayout from '../pages/layouts';
import { routes, OptionalRoute } from './index';

interface Props {
  accessToken: string;
}

interface PartialRouteObject {
  caseSensitive?: boolean;
  children?: PartialRouteObject[];
  element: React.ReactNode;
  path: string;
}

interface AsyncComponentProps {
  name: string;
  privateRouter: boolean;
  accessToken?: string;
  hideLayout: boolean;
}

const AsyncComponent: React.FC<AsyncComponentProps> = ({ name, ...props }) => {
  const location = useLocation();
  const params = useParams();
  if (props.privateRouter && !props.accessToken) {
    return (
      <Navigate
        to={{
          pathname: '/dang-nhap',
          search: `redirect=${location.pathname}`,
        }}
      />
    );
  }
  const Page = loadable({
    loader: () => import(`../pages/${name}.tsx`),
    loading() {
      return <div>Loading...</div>;
    },
  });
  return (
    <MasterLayout isHide={props.hideLayout}>
      <Page {...props} match={{ params }} location={location} />
    </MasterLayout>
  );
};

const generateRoutes = (
  routes: OptionalRoute[],
  props: Props,
): PartialRouteObject[] => {
  return routes.map(
    ({ path, pageName, privateRouter = false, hideLayout = false }) => ({
      element: (
        <AsyncComponent
          hideLayout={hideLayout}
          name={pageName}
          accessToken={props.accessToken}
          privateRouter={privateRouter}
        />
      ),
      path,
    }),
  );
};

export default function RenderRouter(props: Props) {
  return useRoutes([...generateRoutes(routes, props)]);
}
