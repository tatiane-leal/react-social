import { Post } from "./Post";
import { Header } from "./components/header/header";

import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Tatiane Sala"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium asperiores repudiandae quae nemo qui a porro nesciunt deleniti ab recusandae, molestiae voluptatum labore tempore similique tempora ducimus quidem veritatis repellendus."
      />

      <Post
        author="Gabriel Sala"
        content="AAA nesciunt deleniti ab recusandae, molestiae voluptatum labore tempore similique tempora ducimus quidem veritatis repellendus."
      />
    </>
  );
}
