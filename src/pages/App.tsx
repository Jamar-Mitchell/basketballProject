import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Main from "./Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Disclaimer from "./Disclaimer";
import Results from "./Results";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Disclaimer />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/results" element={<Results />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
