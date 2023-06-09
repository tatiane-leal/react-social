export function Post(props) {
  return (
    <div>
      <p>
        Author: <strong>{props.author}</strong>
      </p>
      <p>
        Content: <strong>{props.content}</strong>
      </p>
    </div>
  );
}
