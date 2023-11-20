import Styles from "../styles/Snap.module.css";
import { useContext } from "react";
import { SnapContext } from "../providers/Snap.Context";
import { Link } from "react-router-dom";
const Snap = () => {
  const { snaps, deleteSnap, deletingState } = useContext(SnapContext);
  return (
    <div className="snap_container">
      {snaps.map((snap) => {
        return (
          <div
            key={snap.id}
            className={`card ${Styles.custom_snap}`}
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{snap.title}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
              <p className="card-text">{snap.body}</p>
              <button
                onClick={() => deleteSnap(snap.id)}
                type="button"
                className="btn btn-light"
              >
                {deletingState[snap.id] ? "Deleting" : "Delete Snap"}
              </button>
              <Link to={`/edit/${snap.id}`} className="btn btn-light">
                Update
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Snap;
