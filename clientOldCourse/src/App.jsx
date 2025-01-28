import BookList from "./components/BookList.jsx";
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Hey! Lakshya</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
