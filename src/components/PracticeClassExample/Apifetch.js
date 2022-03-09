import React, { useState, useEffect } from "react";
import axios from "axios";
function Apifetch() {
  const [values, setValues] = useState([]);
  const [id, setId] = useState();
  const [idClick, setIdclick] = useState(1);

  const handleClick = () => {
    setIdclick(id);
  };
  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/${idClick}")
      .then((result) => {
        console.log(result);
        setValues(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Display title
      </button>
      <div>{values.title}</div>
    </div>
  );
}

export default Apifetch;
