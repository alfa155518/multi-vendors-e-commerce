export default function BtnMore({ status, setStatus }) {
  return (
    <div className="container-btn-more">
      <div className="btn-more" onClick={() => setStatus(!status)}>
        <strong>Show All Reviews</strong>
      </div>
    </div>
  );
}
