import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { Toaster } from "react-hot-toast";
import Register from "./pages/register";
import ForgotPassword from "./pages/ForgotPassword";
import WriteBlog from "./pages/WriteBlog";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/write" element={<WriteBlog />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#333",
            // 363636
            color: "#fff",
            marginTop: "50px",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
            // Custom toast icon style
            iconTheme: {
              primary: "green",
              secondary: "#333",
            },
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
            enter: "fade",
            exit: "fade",
          },
        }}
      />
    </div>
  );
};

export default App;
