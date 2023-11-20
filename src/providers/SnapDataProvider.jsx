import { useState, useEffect } from "react";
import { SnapContext } from "./Snap.Context";
import LoadingSpinner from "../components/LoadingSpinner";
const SnapDataProvider = ({ children }) => {
  const [snaps, setSnaps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingState, setDeletingState] = useState(
    Array(snaps.length).fill(false)
  );

  useEffect(() => {
    const fetchSnaps = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setSnaps(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts", err);
      }
    };
    fetchSnaps();
  }, []);

  const deleteSnap = async (id) => {
    try {
      let newDeletingState = [...deletingState];
      newDeletingState[id] = true;
      setDeletingState(newDeletingState);
      const deleted = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      if (deleted.ok) {
        const newSnaps = snaps.filter((snap) => snap.id !== id);
        setSnaps(newSnaps);
        newDeletingState = [...deletingState];
        newDeletingState[id] = false;
        setDeletingState(newDeletingState);
      }
    } catch (err) {
      console.log("Error while deleting");
    }
  };
  const createSnap = async (title, desc) => {
    try {
      const snap = {
        title: title,
        body: desc,
        userId: 1,
        id: snaps.length + 1,
      };
      console.log(snaps.length + 1);
      const newSnap = [...snaps, snap];
      setSnaps(newSnap);
    } catch (err) {
      console.log("Error while creating", err);
    }
  };
  const updateSnap = async (title, desc, snapId) => {
    try {
      const snap = {
        title: title,
        body: desc,
        userId: 1,
        id: snapId,
      };
      const newSnap = [...snaps];
      newSnap[snapId - 1] = snap;
      setSnaps(newSnap);
    } catch (err) {
      console.log("Error while updating", err);
    }
  };
  return (
    <SnapContext.Provider
      value={{
        snaps,
        deleteSnap,
        deletingState,
        createSnap,
        updateSnap,
      }}
    >
      {loading ? <LoadingSpinner /> : children}
    </SnapContext.Provider>
  );
};

export default SnapDataProvider;
