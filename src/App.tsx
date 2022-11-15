import React from 'react';
import RenderRouter from './routes/renderRouters';

type Props = {
  accessToken: string;
};

const App = ({ accessToken }: Props) => {
  return <RenderRouter accessToken={accessToken} />;
};

export default App;
