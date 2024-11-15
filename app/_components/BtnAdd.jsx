export default function BtnAdd({ item }) {
  return (
    <button className="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        viewBox="0 0 20 20"
        height="20"
        fill="none"
        className="svg-icon">
        <g strokeWidth="1.5" strokeLinecap="round" stroke="#e67e22">
          <circle r="7.5" cy="10" cx="10"></circle>
          <path d="m9.99998 7.5v5"></path>
          <path d="m7.5 9.99998h5"></path>
        </g>
      </svg>
      <span className="lable">Add Product</span>
    </button>
  );
}
