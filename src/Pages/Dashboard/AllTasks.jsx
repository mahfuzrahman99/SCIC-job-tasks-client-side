/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FaPenNib } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { useState } from "react";
import UpdateTask from "./UpdateTask";
import DetailsTask from "./DetailsTask";
import { HashLoader } from "react-spinners";
import { TiTick } from "react-icons/ti";
import { useDrag } from "react-dnd";

const AllTasks = () => {
  const axiosPublic = useAxiosPublic();
  const [showModal, setShowModal] = useState(false);

  const { data: tasks = [], refetch } = useQuery({
    queryKey: "tasks",
    queryFn: async () => {
      const res = await axiosPublic.get("/task");
      return res.data;
    },
  });
  const todo = tasks.filter((item) => item.status === "to-do");
  const ongoing = tasks.filter((item) => item.status === "ongoing");
  const complete = tasks.filter((item) => item.status === "complete");

  const handleItemDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to delete ${item.title}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/task/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top",
            icon: "success",
            title: `${item.title} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto md:grid grid-cols-3 gap-3 mt-10">
        <div className="col-span-1  shadow-md shadow-[#8a8b8c]">
          <h1 className="bg-[#8a8b8c] p-2 rounded-tr-md rounded-tl-md text-center text-xl font-bold text-white">
            To-Do
          </h1>
          <ul className="p-3">
            {todo.map((item, i) => (
              <li
                key={item._id}
                className="flex items-center justify-between gap-2 p-2 border-b-2 border-[#8a8b8c]"
              >
                <span>{item.title}</span>
                <div className="flex items-center justify-center gap-2">
                  <div>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      <span>
                        <FiEye />
                      </span>
                    </button>
                    <DetailsTask
                      item={item}
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      <span>
                        <FaPenNib />
                      </span>
                    </button>
                    <UpdateTask
                      item={item}
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                  <Link onClick={() => handleItemDelete(item)}>
                    <span>
                      <RiDeleteBin6Line />
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1  shadow-md shadow-[#8a8b8c]">
          <h1 className="bg-[#8a8b8c] p-2 rounded-tr-md rounded-tl-md text-center text-xl font-bold text-white">
            Ongoing
          </h1>
          <ul className="p-3">
            {ongoing.map((item, i) => (
              <li
                key={item._id}
                className="flex items-center justify-between gap-2 p-2 border-b-2 border-[#8a8b8c]"
              >
                {item.title}
                <div className="flex items-center justify-center gap-2">
                  <HashLoader
                    size={15}
                    color="#8a8b8c"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                  <div>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      <span>
                        <FiEye />
                      </span>
                    </button>
                    <DetailsTask
                      item={item}
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      <span>
                        <FaPenNib />
                      </span>
                    </button>
                    <UpdateTask
                      item={item}
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                  <Link onClick={() => handleItemDelete(item)}>
                    <span>
                      <RiDeleteBin6Line />
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1  shadow-md shadow-[#8a8b8c]">
          <h1 className="bg-[#8a8b8c] p-2 rounded-tr-md rounded-tl-md text-center text-xl font-bold text-white">
            Complete
          </h1>
          <ul className="p-3">
            {complete.map((item, i) => (
              <li
                key={item._id}
                className="flex items-center justify-between gap-2 p-2 border-b-2 border-[#8a8b8c]"
              >
                {item.title}
                <div className="flex items-center justify-center gap-2">
                  <div>
                    <span className="text-xl">
                      <TiTick />
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      <span>
                        <FiEye />
                      </span>
                    </button>
                    <DetailsTask
                      item={item}
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      <span>
                        <FaPenNib />
                      </span>
                    </button>
                    <UpdateTask
                      item={item}
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                  <Link onClick={() => handleItemDelete(item)}>
                    <span>
                      <RiDeleteBin6Line />
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
