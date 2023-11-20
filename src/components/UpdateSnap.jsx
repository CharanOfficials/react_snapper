import { useContext, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SnapContext } from "../providers/Snap.Context";

const UpdateSnap = () => {
  const history = useNavigate();
  const { snapId } = useParams();
  const { snaps, updateSnap } = useContext(SnapContext);
  const snap = snaps[snapId - 1];
  const [title, setTitle] = useState(snap.title);
  const [desc, setDesc] = useState(snap.body);
  const snapTitle = useRef();
  const snapDesc = useRef();
  const handleUpdateButtonClicked = (e) => {
    e.preventDefault();
    const title = snapTitle.current.value;
    const desc = snapDesc.current.value;
    snapTitle.current.value = "";
    snapDesc.current.value = "";
    updateSnap(title, desc, snapId);
    history("/");
  };
  return (
    <form onSubmit={handleUpdateButtonClicked}>
      <div className="create_snap">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            ref={snapTitle}
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="desc"
            rows="5"
            ref={snapDesc}
            cols="50"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-secondary">Submit</button>
      </div>
    </form>
  );
};
export default UpdateSnap;
