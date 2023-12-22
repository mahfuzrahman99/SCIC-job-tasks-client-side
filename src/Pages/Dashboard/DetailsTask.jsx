/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const DetailsTask = ({ item }) => {
  const { title, description, deadline, priority } = item;

  return (
    <>
      {
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
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
            <div className="modal-action">
              <form method="dialog">
                <button
                  onClick={() => document.getElementById("my_modal_2")}
                  className="btn"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      }
    </>
  );
};

export default DetailsTask;
