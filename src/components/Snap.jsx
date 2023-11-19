import Styles from "../styles/Snap.module.css";
import { useContext } from "react";
import { SnapContext } from "../providers/Snap.Context";
const Snap = () => {
  const { snaps, deleteSnap } = useContext(SnapContext);
  return (
    <>
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
                class="btn btn-light"
              >
                Delete Snap
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Snap;
