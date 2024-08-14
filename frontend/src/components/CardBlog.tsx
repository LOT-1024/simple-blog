import { IoApps } from "react-icons/io5";
import { Link } from "react-router-dom";

const CardBlog = ({
  title = "Title",
  category = "Category",
  imageInput = "https://picsum.photos/id/237/300/200",
  direct = "/",
}) => {
  return (
    <Link
      to={direct}
      className="max-h-[220px] w-full max-w-[420px] flex-auto basis-full cursor-pointer flex-col rounded-xl shadow-2xl md:h-[270px] md:max-h-[270px] lg:max-h-full"
    >
      <img
        className="h-[166px] w-full rounded-t-xl md:h-[206px]"
        src={imageInput}
        alt="photo"
      />
      <div className="pl-2 md:py-1">
        <h1>{title}</h1>
        <p className="flex items-center gap-2">
          <IoApps />
          <span>{category}</span>
        </p>
      </div>
    </Link>
  );
};

export default CardBlog;
