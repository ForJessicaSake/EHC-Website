import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";
import SideBar from "../../../../src/components/admin/SideBar";

const blogEdit = () => {
  const [result, setResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const router = useRouter();
  const routeId = router.query.slug;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResult((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const upload = ({ target: { files = [] } }) => {
    if (!files[0]) {
      return;
    }
    if (!files[0].type.match("image.*")) {
      return;
    }
    setSelectedFile(files[0]);
  };

  const authorUpload = ({ target: { files = [] } }) => {
    if (!files[0]) {
      return;
    }
    if (!files[0].type.match("image.*")) {
      return;
    }
    setSelectedAuthor(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("mode", result?.mode);
    formData.append("cover_photo", selectedFile);
    formData.append("title", result?.title);
    formData.append("description", result?.description);
    formData.append("introduction", result?.introduction);
    formData.append("author", result?.author);
    formData.append("author_image", selectedAuthor);
    formData.append("tags", [
      "660baf3f-e46f-417b-8bfe-8630505b2fe3",
      "5afdcf88-3aa2-4993-9ca3-0980c7f73cb9",
    ]);

    try {
      setLoading(true);
      const response = await fetch(
        `https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/${routeId}/`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: formData,
        }
      );
      const data = await response.json();
      setLoading(false);
      toast.info("Blog updated", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push("/admin/dashboard/blog");
      }, 500);
    } catch (error) {
      setLoading(false);
      toast.error("Kindly try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/${routeId}/`
        );
        const data = await response.json();
        setResult(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Kindly try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };
    fetchEvent();
  }, [routeId]);

  return (
    <>
      <section className="xl:hidden h-screen lg:text-2xl md:text-xl text-xl px-4 flex justify-center text-center items-center">
        <h1>
          Sorry, this page is not available on your current screen size. Please
          go back to the
          <Link href="/" legacyBehavior>
            <a className="underline text-primary">home page</a>
          </Link>
          to continue browsing.
        </h1>
      </section>

      <div className="flex">
        <div className="w-2/12">
          <SideBar />
        </div>
        <div className="w-10/12 px-6 mt-12">
          <form
            className="mb-4 hidden xl:flex 2xl:mx-auto 2xl:container flex-col"
            onSubmit={handleSubmit}
          >
            <div className="w-12/12 flex justify-between h-16">
              <div className="w-2/12">
                <label className="text-xl">Mode</label>
              </div>
              <div className="w-10/12">
                <select
                  className="border w-24 h-10 rounded-md px-1"
                  value={result?.mode}
                  name="mode"
                  onChange={handleInputChange}
                >
                  <option value="normal">normal</option>
                  <option value="featured">featured</option>
                </select>
              </div>
            </div>

            <div className="w-12/12 flex justify-between h-16">
              <div className="w-2/12">
                <label className="text-xl">Cover Photo</label>
              </div>
              <div className="w-10/12">
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
              <div className="w-2/12">
                <label className="text-xl">Title</label>
              </div>
              <div className="w-10/12">
                <input
                  type="text"
                  required
                  className="border h-10 rounded-md w-48 px-2"
                  value={result?.title}
                  name="title"
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>

            <div className="w-12/12 flex justify-between h-20">
              <div className="w-2/12">
                <label className="text-xl">Introduction</label>
              </div>
              <div className="w-10/12">
                <textarea
                  required
                  className="border w-full h-14 rounded-md px-2 py-2"
                  value={result?.introduction}
                  maxLength="185"
                  name="introduction"
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>

            <div className="w-12/12 flex justify-between h-64">
              <div className="w-2/12">
                <label className="text-xl">Description</label>
              </div>
              <div className="w-10/12">
                <textarea
                  type="text"
                  required
                  className="border rounded-md h-56 w-full px-2 py-2"
                  value={result?.description}
                  name="description"
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>

            <div className="w-12/12 flex justify-between h-16">
              <div className="w-2/12">
                <label className="text-xl">Author Image</label>
              </div>
              <div className="w-10/12">
                <input
                  type="file"
                  required
                  onChange={(e) => {
                    authorUpload(e);
                  }}
                ></input>
              </div>
            </div>

            <div className="w-12/12 flex justify-between h-24">
              <div className="w-2/12">
                <label className="text-xl">Author</label>
              </div>
              <div className="w-10/12">
                <input
                  type="text"
                  required
                  className="border h-10 rounded-md w-48 px-2"
                  value={result?.author}
                  name="author"
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className="w-12/12 flex justify-between h-16">
              <div className="w-2/12">
                <label className="text-xl">Tags</label>
              </div>
              <div className="w-10/12">
                <select
                  className="border w-44 h-10 rounded-md px-1"
                  value={result?.tags}
                  name="tags"
                  onChange={handleInputChange}
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                </select>
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
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default blogEdit;
