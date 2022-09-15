export default function MessageDisplay({ name }) {
  const evenLength = name.length % 2 === 0;
  return evenLength ? <h3>Hi {name}!</h3> : <h3>Hello {name}!</h3>;
}
