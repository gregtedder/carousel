
export default function Slide(props) {
  return (
    <>
      <h3 className="center">{props.heading}</h3>
      <p className="center">{props.text}</p>
      <img
        className="d-block w-100"
        src={props.image}
        alt={props.alt} />
        
    </>
  );
}
