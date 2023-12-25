/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useDrop } from "react-dnd";
import TaskCard from "./taskCard";
import toast, { Toaster } from "react-hot-toast";

const AllTasks = () => {
  const axiosPublic = useAxiosPublic();

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

  const addItemToSection = (id, newStatus) => {
    axiosPublic
      .put(`/task/${id}`, { status: newStatus })
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          refetch()
          toast.success("Task status changed", { duration: 2000 })
        }
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  };

  const [{ isOverToDo }, dropToDo] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id, "to-do"),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));

  const [{ isOverOnGoing }, dropOnGoing] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id, "ongoing"),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));

  const [{ isOverCompleted }, dropCompleted] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id, "complete"),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));

  return (
    <div>
      <Toaster toastOptions={{ style: { zIndex: "1000" } }} />
      <div className="max-w-5xl mx-auto md:grid grid-cols-3 gap-3 mt-10">
        <div className="col-span-1  shadow-md shadow-[#8a8b8c]" ref={dropToDo}>
          <h1 className="bg-[#8a8b8c] p-2 rounded-tr-md rounded-tl-md text-center text-xl font-bold text-white">
            To-Do
          </h1>
          <ul className="p-3">
            <div>
              {todo.map((task, i) => (
                <TaskCard
                  refetch={refetch}
                  key={task._id}
                  i={i}
                  handleItemDelete={handleItemDelete}
                  task={task}
                />
              ))}
            </div>
          </ul>
        </div>
        <div
          className="col-span-1  shadow-md shadow-[#8a8b8c]"
          ref={dropOnGoing}
        >
          <h1 className="bg-[#8a8b8c] p-2 rounded-tr-md rounded-tl-md text-center text-xl font-bold text-white">
            Ongoing
          </h1>
          <ul className="p-3">
            <div>
              {ongoing.map((task, i) => (
                <TaskCard
                  refetch={refetch}
                  key={task._id}
                  i={i}
                  handleItemDelete={handleItemDelete}
                  task={task}
                />
              ))}
            </div>
          </ul>
        </div>
        <div
          className="col-span-1  shadow-md shadow-[#8a8b8c]"
          ref={dropCompleted}
        >
          <h1 className="bg-[#8a8b8c] p-2 rounded-tr-md rounded-tl-md text-center text-xl font-bold text-white">
            Complete
          </h1>
          <ul className="p-3">
            <div>
              {complete.map((task, i) => (
                <TaskCard
                  refetch={refetch}
                  key={task._id}
                  i={i}
                  handleItemDelete={handleItemDelete}
                  task={task}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
