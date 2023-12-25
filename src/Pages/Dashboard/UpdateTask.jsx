/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";

/* eslint-disable react/prop-types */
const UpdateTask = ({ item, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const [priority, setPriority] = useState(item.priority);

  const handleUpdateItems = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;

    const menuItems = {
      title,
      description,
      deadline,
      priority,
      status: item.status,
      backgroundColor: item.backgroundColor,
    };

    axiosPublic.patch(`/task/${item._id}`, menuItems).then((responses) => {
      if (responses.data.modifiedCount) {
        refetch();
        document.getElementById(`${item._id}`).close();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `The item is modified`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update the item. Please try again.",
        });
      }
    });
  };

  return (
    <dialog id={item._id} className="modal">
      <div className="modal-box">
        <form
          onSubmit={handleUpdateItems}
          className="md:grid grid-cols-2 gap-3 p-4 rounded-xl shadow-md"
        >
          <div className="col-span-1">
            <label>
              <h1 className="font-bold">Title</h1>
            </label>
            <input type="text" name="title" defaultValue={item.title} />
          </div>
          <div className="col-span-1">
            <label>
              <h1 className="font-bold">Deadline</h1>
            </label>
            <input type="text" name="deadline" defaultValue={item.deadline} />
          </div>
          <div className="col-span-1">
            <label>
              <h1 className="font-bold">Priority</h1>
            </label>
            <select
              name="priority"
              defaultValue={item.priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="high">High</option>
              <option value="moderate">Moderate</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="col-span-1">
            <label>
              <h1 className="font-bold">Description</h1>
            </label>
            <textarea
              type="text"
              className="col-span-2"
              name="description"
              defaultValue={item.description}
            />
          </div>
          <div>
            <input
              type="submit"
              className="bg-[#8a8b8c] p-2 rounded-md text-white font-semibold"
              value="Update Task"
            />
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default UpdateTask;
