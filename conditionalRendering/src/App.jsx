import "./App.css";
import Toggle from "./component/Toggle";
import ContentVar from "./ContentVar";
import RenderingMethod from "./RenderingMethod";

function App() {
  const option = "a";
  // const isLogin = true;
  // if (isLogin) {
  //   return (
  //     <div>
  //       <h1>Welcome back! You are loggedIn</h1>
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <h1>Please login!</h1>
  //   </div>
  // );
  // return <> {isLogin ? <h1>Logged In</h1> : <h1>Please Log in</h1>}</>;
  return (
    <>
      {option === "a" ? (
        <h1>Component A</h1>
      ) : option === "b" ? (
        <h1>Component B</h1>
      ) : (
        <h1>Other Component</h1>
      )}
      <RenderingMethod />
      <ContentVar />
      <Toggle />
    </>
  );
}

export default App;
