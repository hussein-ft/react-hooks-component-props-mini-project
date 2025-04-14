import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blog from "../data/blog"; // ✅ All good

function App() {
  return (
    <div className="App">
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;
