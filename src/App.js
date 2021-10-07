import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import ProjectPage from "./pages/ProjectPage/ProjectPage.component";
import { Footer, Header } from "./components";
import { ScrollTop } from "./components/index";
import { useEffect, useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={ProjectPage} />
      </Switch>
      <Footer />
      <ScrollTop show={show} />
    </Router>
  );
}

export default App;
