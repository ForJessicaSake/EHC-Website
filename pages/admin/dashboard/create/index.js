import SideBar from "../../../../src/components/admin/SideBar";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Create = () => {
  const [image, setImage] = useState(null);
  const [event, setEvent] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", image);
    data.append("name", event);
    data.append("description", description);
    data.append("date", date);

    try {
      setLoading(true);
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/indexapi/events/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: data,
        }
      );

      if (response.ok) {
        setLoading(false);
        toast.success("Event successfully added");
        setTimeout(() => {
          router.push("/admin/dashboard/event");
        }, 3000);
      }
    } catch (error) {
      setLoading(false);
      toast.error("A network error occurred");
    }
  };

  const upload = ({ target: { files = [] } }) => {
    if (!files[0]) {
      return;
    }
    if (!files[0].type.match("image.*")) {
      return;
    }
    setImage(files[0]);
  };

  return (
    <div className="flex">
      <div className="w-2/12">
        <SideBar />
      </div>
      <form
        className="flex flex-col px-6 mt-10 w-10/12 mx-auto container"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h1 className="text-4xl">Add Event</h1>
        <div className="w-12/12 flex justify-between h-16 mt-16">
          <div className="w-3/12">
            <label className="text-lg">Image</label>
          </div>
          <div className="w-9/12">
            <input
              type="file"
              required
              onChange={(e) => {
                upload(e);
              }}
            ></input>
          </div>
        </div>
        <div className="w-12/12 flex justify-between h-24">
          <div className="w-3/12">
            <label className="text-lg">Event</label>
          </div>
          <div className="w-9/12">
            <input
              type="text"
              required
              className="border h-16 rounded-md w-full"
              value={event}
              onChange={(e) => {
                setEvent(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="w-12/12 flex justify-between h-64">
          <div className="w-3/12">
            <label className="text-lg">Description</label>
          </div>
          <div className="w-9/12">
            <textarea
              type="text"
              required
              className="border rounded-md h-56 w-full"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="w-12/12 flex justify-between h-20">
          <div className="w-3/12">
            <label className="text-lg">Date</label>
          </div>
          <div className="w-9/12">
            <input
              type="date"
              required
              className="border rounded-sm"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="flex justify-end">
          {loading ? (
            <button className="bg-primary w-32 rounded-md text-light text-xl h-11">
              Updating...
            </button>
          ) : (
            <button className="bg-primary w-32 rounded-md text-light text-xl h-11">
              Update
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Create;
