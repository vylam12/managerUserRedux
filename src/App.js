import './App.css';

function App(props) {

  return (
    <>
      <div>
        <BrowserRouter basename="/app">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<AppContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
    // <Home />
  );
}
export default App;

