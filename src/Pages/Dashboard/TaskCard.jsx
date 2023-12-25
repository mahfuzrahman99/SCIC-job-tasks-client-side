/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useDrag } from "react-dnd";
import { HashLoader } from "react-spinners";
import { TiTick } from "react-icons/ti";
import { FiEye } from "react-icons/fi";
import DetailsTask from "./DetailsTask";
import { useState } from "react";
import { FaPenNib } from "react-icons/fa";
import UpdateTask from "./UpdateTask";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from "react-hot-toast";

const TaskCard = ({ task, handleItemDelete, i, refetch }) => {
  const { title, description, _id, priority, deadline } = task;
  const [showModal, setShowModal] = useState();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: _id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="flex items-center justify-between gap-2 p-2 border-b-2 border-[#8a8b8c]">
      <h1 ref={drag} className=" w-full">
        {title}
      </h1>
      <div className="flex items-center justify-center gap-2">
        <div>
          {task.status === "to-do" ? (
            ""
          ) : task.status === "ongoing" ? (
            <HashLoader
              size={15}
              color="#8a8b8c"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : task.status === "complete" ? (
            <span className="text-xl">
              <TiTick />
            </span>
          ) : (
            ""
          )}
        </div>
        <div>
          <button
            onClick={() => {
              document.getElementById(`${task._id + i}`).showModal();
              toast.success(`Task deadline ${task.deadline}`, {
                duration: 5000,
              });
            }}
          >
            <span>
              <FiEye />
            </span>
          </button>
          <DetailsTask
            refetch={refetch}
            i={i}
            item={task}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
        <div>
          <button
            onClick={() => document.getElementById(`${task._id}`).showModal()}
          >
            <span>
              <FaPenNib />
            </span>
          </button>
          <UpdateTask
            refetch={refetch}
            item={task}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
        <Link onClick={() => handleItemDelete(task)}>
          <span>
            <RiDeleteBin6Line />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
