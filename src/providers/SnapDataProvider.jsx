import { useState, useEffect } from "react";
import { SnapContext } from "./Snap.Context";
import Loader from "../components/Loader";

const SnapDataProvider = ({ children }) => {
  const [snaps, setSnaps] = useState([]);
  const [loading, setLoading] = useState(false);

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
      const deleted = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      if (deleted.ok) {
        const newSnaps = snaps.filter((snap) => snap.id !== id);
        setSnaps(newSnaps);
      }
    } catch (err) {
      console.log("Error while deleting");
    }
  };
  return (
    <SnapContext.Provider value={{ snaps, deleteSnap }}>
      {loading ? <Loader /> : children}
    </SnapContext.Provider>
  );
};

export default SnapDataProvider;
