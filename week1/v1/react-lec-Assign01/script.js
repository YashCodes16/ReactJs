const root = document.getElementById("root");
const heading = (
  <div class="center">
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
  </div>
);
ReactDOM.createRoot(root).render(heading);
