import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { dataPostBlogType } from "../interface/type";
import { useGlobalContext } from "../global_variable/GlobalContext";
import axios from "axios";

const CreateBlog = () => {
  const [inputStore, setInputStore] = useState<dataPostBlogType>({
    title: "Title Holder",
    category: "Nature",
    image: undefined,
    post: "<p></p>",
  });
  const {categoryList} = useGlobalContext()

  const submitHandle = async () => {
    const formData = new FormData();
    formData.append("title", inputStore.title);
    formData.append("category", inputStore.category);
    formData.append("post", inputStore.post);
    if (inputStore.image) {
      formData.append("file", inputStore.image);
    }

    try {
      const result = await axios.post(`${import.meta.env.VITE_API}blog`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      })
      console.log(result.data)
    } catch (error) {
      console.error('There was an error uploading the file!', error)
    }
  };

  const inputTextHandle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setInputStore((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="screen-content my-5 flex items-center justify-center">
      <main className="flex min-h-[600px] flex-col gap-4 rounded-2xl bg-grayLight p-5 sm:min-h-[600px] sm:w-[587px]">
        <h1 className="text-xl">Create Blog Spot</h1>
        <label className="text-gray-400">Title</label>
        <input
          name="title"
          className="h-[40px] bg-white px-5"
          type="text"
          onChange={inputTextHandle}
        />
        <label className="text-gray-400">Category</label>
        <select
          name="category"
          value={inputStore.category}
          className="h-[40px] bg-gray-300 px-5"
          onChange={inputTextHandle}
        >
          {
            categoryList.map(
              (item, i) => (
                <option value="item" key={i}>{item}</option>
              )
            )
          }
        </select>
        <label className="text-gray-400">Image</label>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            file && setInputStore((prev) => ({ ...prev, image: file }));
          }}
        />
        <label className="text-gray-400">Post</label>
        <ReactQuill
          className="ql-container h-[200px] rounded-xl bg-white"
          theme="snow"
          placeholder="Write blog post..."
          value={inputStore.post}
          onChange={(e) => setInputStore((prev) => ({ ...prev, post: e }))}
        />
        <button
          className="h-[30px] w-[80px] bg-slateLight text-white"
          onClick={submitHandle}
        >
          Submit
        </button>
      </main>
    </div>
  );
};

export default CreateBlog;
