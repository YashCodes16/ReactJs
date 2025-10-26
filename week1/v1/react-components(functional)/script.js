
// * Traditional functions
// function App() {
//   return (
//     <div className="center">
//       <h1 className="head">
//         <u>
//           <b>About React</b>
//         </u>
//       </h1>
//       <ul>
//         <li>React is Composable</li>
//         <li>React is a Single Page Application</li>
//         <li>React is Declarative</li>
//       </ul>
//     </div>
//   );
// }

// * Arrow functions

const Name = () => <p>JSX is Javascript XML</p>;

const App = () => (
  <>
    <h1 className="head">
      <u>
        <b>About React</b>
      </u>
    </h1>
    <ul>
      <li>React is Composable</li>
      <li>React is a Single Page Application</li>
      <li>React is Declarative</li>
    </ul>
    <Name /> 
  </>

);
ReactDOM.createRoot(document.getElementById("root")).render(
<App />
)
