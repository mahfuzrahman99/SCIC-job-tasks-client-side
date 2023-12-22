import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const CreateTask = () => {
  const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const menuItem = {
      title: data.title,
      deadline: data.deadline,
      description: data.description,
      priority: data.priority,
      email: user.email,
      status: "to-do",
      // specialized_service: data.specializedServices,
      // healthcare_professional: data.healthcareProfessionals,
    };
    axiosPublic.post(`/task`, menuItem)
    .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top",
                icon: "success",
                title: ` is posted successfully`,
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to post the task. Please try again.",
              });
            }
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center md:mt-12">
        <div className="max-w-3xl w-full bg-gray-200 p-8 rounded shadow-lg">
          <div className="md:grid grid-cols-2 gap-2">
            <h2 className="text-2xl font-semibold mb-6 uppercase text-center text-[#8a8b8c] col-span-2">
              Create a task
            </h2>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700">Title:</label>
              <input
                className="w-full bg-white p-2 rounded-md mt-1"
                {...register("title", {
                  required: "Task Title is required",
                })}
              />
              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700">Deadline:</label>
              <input
                type="date"
                {...register("deadline", {
                  required: "deadline is required",
                })}
                className="w-full bg-white p-2 rounded-md mt-1"
              />
              {errors.deadline && (
                <p className="text-red-500">{errors.deadline.message}</p>
              )}
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700">Priority:</label>
              <select
                {...register("priority", {
                  required: "Priority selection is required",
                })}
                className="w-full bg-white p-2 rounded-md mt-1"
              >
                <option value="">Select Priority</option>
                <option value="high">High</option>
                <option value="moderate">Moderate</option>
                <option value="low">Low</option>
              </select>
              {errors.priority && (
                <p className="text-red-500">{errors.priority.message}</p>
              )}
            </div>

            <div className="mb-4 col-span-2">
              <label className="block text-gray-700">Description:</label>
              <textarea
                {...register("description", {
                  required: "Comprehensive Description is required",
                })}
                className="w-full bg-white p-2 rounded-md mt-1"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#8a8b8c] hover:bg-[#4a4a4a] text-white font-bold py-2 px-4 rounded md:w-2/6 uppercase"
            >
              Create a task 
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
