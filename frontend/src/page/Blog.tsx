import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogResultType } from "../interface/type";
import parse from "html-react-parser";
import dateFormat from "dateformat";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogResult, setBlogResult] = useState<blogResultType>();

  useEffect(() => {
    const BlogListCall = async () => {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_API}blogbyid/${id}`,
        );
        if (!result.data.success) {
          navigate("/page-not-found");
        } else {
          setBlogResult(result.data.data);
        }
      } catch (error) {
        navigate("/page-not-found");
      }
    };
    BlogListCall();
  }, [id, navigate]);

  return (
      <main className="m-auto p-5 lg:w-[800px]">
        {blogResult ? (
          <>
            <h1 className="text-2xl font-medium">{blogResult.title}</h1>
            <p className="mt-6 text-sm">{dateFormat(blogResult.createon)}</p>
            <img
              src={`${import.meta.env.VITE_API + blogResult.image}`}
              alt="blog image"
              className="mt-6 h-[270px] w-full"
            />
            <div className="mb-4 mt-10 md:mb-16">{parse(blogResult.post)}</div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
  );
};

export default Blog;
