import { useContext } from "react";
import { AdminContext } from "../_context/adminManagement";

export default function FilterPopup({ children }) {
  const { toggleFilterPopup } = useContext(AdminContext);
  return (
    <section className="filter-popup-container">
      <div className="content">
        <span className="close-popup" onClick={toggleFilterPopup}>
          X
        </span>
        <strong className="popup-name">Filter</strong>
        {children}
      </div>
    </section>
  );
}
