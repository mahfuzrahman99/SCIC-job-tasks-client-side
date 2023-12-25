/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const DetailsTask = ({ item, i }) => {
  const { title, description, deadline, priority } = item;

  return (
    <>
      <dialog id={item._id + i} className="modal">
        <div className="modal-box ">
          <div className="p-4 ">
            <h1 className="text-xl font-semibold">
              <span className="font-bold">Title:</span> {title}
            </h1>
            <h1>
              <span className="font-bold">deadline:</span> {deadline}
            </h1>
            <h1>
              <span className="font-bold">priority:</span> {priority}
            </h1>
            <h1>
              <span className="font-bold">description:</span> {description}
            </h1>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default DetailsTask;
