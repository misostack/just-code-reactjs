import React from 'react';
function App() {
  // eslint-disable-next-line no-undef
  const { NODE_ENV, ...params } = process.env;
  return (
    <>
      <p>NODE_ENV:{NODE_ENV}</p>
      <p>PARAMS: {JSON.stringify(params)}</p>
    </>
  );
}

export default App;
