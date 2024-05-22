import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Main from "./pages/Main";
import { Routes, Route, HashRouter } from "react-router-dom";
import Disclaimer from "./pages/Disclaimer";
import Results from "./pages/Results";
import Questionnaire from "./pages/Questionnaire";
import { ResultProvider } from "./context/ResultContext"; // Import the ResultProvider

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
        <HashRouter>
          <ResultProvider>
            <Routes>
              <Route path="/" element={<Disclaimer />}></Route>
              <Route path="/main" element={<Main />}></Route>
              <Route path="/results" element={<Results />}></Route>
              <Route path="/questionnaire" element={<Questionnaire />}></Route>
            </Routes>
          </ResultProvider>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
