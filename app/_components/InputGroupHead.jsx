export default function InputsGroupHead({ icon, headText, text }) {
  return <div className="inputs__group__head">
    <div className="icon">{icon}</div>
    <div className="text">
      <h3>{headText}</h3>
      <strong>{text}</strong>
    </div>
  </div>;
}
