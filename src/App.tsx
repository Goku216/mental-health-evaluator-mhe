import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AllRoutes } from "./routes/AllRoutes";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <AllRoutes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
