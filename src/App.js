function App() {
  const { NODE_ENV, ...params } = process.env;
  return (
    <>
      <p>NODE_ENV:{NODE_ENV}</p>
      <p>PARAMS: {JSON.stringify(params)}</p>
    </>
  );
}

export default App;
