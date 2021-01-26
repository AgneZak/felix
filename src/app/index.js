import "./index.scss";

import Layout from "./components/Layout";
import Divider from "./components/Divider";

function App() {
  return (
    <Layout>
      <Divider />
      <section className="main__container">
        <p>Here goes my content</p>
        <div className="main__movies"></div>
        <button className="main__btn">Get More Content</button>
      </section>
    </Layout>
  );
}

export default App;
