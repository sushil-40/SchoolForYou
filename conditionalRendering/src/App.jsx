import "./App.css";

function App() {
  const isLogin = true;
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
  return <> {isLogin ? <h1>Logged In</h1> : <h1>Please Log in</h1>}</>;
}

export default App;
