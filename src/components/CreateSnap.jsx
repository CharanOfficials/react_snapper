import { useContext, useRef } from "react";
import { SnapContext } from "../providers/Snap.Context";

const CreateSnap = () => {
  const { createSnap } = useContext(SnapContext);
  const snapTitle = useRef();
  const snapDesc = useRef();
  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    const title = snapTitle.current.value;
    const desc = snapDesc.current.value;
    snapTitle.current.value = "";
    snapDesc.current.value = "";
    createSnap(title, desc);
  };
  return (
    <form onSubmit={handleAddButtonClicked}>
      <div className="create_snap">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            ref={snapTitle}
            type="text"
            className="form-control"
            id="title"
            placeholder="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <textarea
            ref={snapDesc}
            className="form-control"
            id="desc"
            rows="5"
            cols="50"
          ></textarea>
        </div>
        <button className="btn btn-secondary">Submit</button>
      </div>
    </form>
  );
};
export default CreateSnap;
