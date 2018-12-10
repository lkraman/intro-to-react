function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
  <div>
    <Welcome name="Sylvie" />
    <Welcome name="Salvie" />
    <Welcome name="Julie" />
   </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
