import React, { useState } from "react";

const App = () => {
  const deleteWorld = () => {
    console.log("Deleing");
  };
  const confirmDelete = useConfirm("Are you sure", deleteWorld);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

const useConfirm = (message, callback) => {
  if (typeof callback !== "function") return;
  const confirmAction = () => {
    if (confirm(message) == true) callback();
  };
  return confirmAction;
};

export default App;
