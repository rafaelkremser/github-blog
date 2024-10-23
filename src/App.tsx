import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Posts } from "./pages/Posts";
import { IssuesProvider } from "./contexts/IssuesContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IssueDetails } from "./pages/IssueDetails";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <IssuesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/issues/:number" element={<IssueDetails />} />
          </Routes>
        </BrowserRouter>
      </IssuesProvider>
    </ThemeProvider>
  );
}
