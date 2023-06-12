import "./App.css";
import HeadArticle from "./components/HeadArticle";
import LastArticle from "./components/LastArticle";
import Navigation from "./components/Navigation";
import NewArticleSection from "./components/NewArticleSection";

function App() {
  return (
    <div className="container">
      <Navigation />
      <HeadArticle />
      <NewArticleSection/>
      <LastArticle/>
    </div>
  );
}

export default App;
