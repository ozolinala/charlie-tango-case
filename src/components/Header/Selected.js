export default function Selected(props) {
  return (
    <li className="Selected" key={props.key}>
      <article>
        <h1>{props.id}</h1>
        <p>{props.description}</p>
        <button onClick={() => props.removeSelectedBuyer(props.id)}>X</button>
      </article>
    </li>
  );
}
