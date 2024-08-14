import { Link } from "react-router-dom";
import { sideBarPropsType } from "../interface/type";

const SideBar = ({
  list,
  clickHandleSideBar,
  turnSidebar,
}: sideBarPropsType) => {
  return (
    <div className="fixed top-0 flex h-screen w-[240px] flex-col bg-white">
      <div className="flex h-[100px] items-end">
        <h1 className="pl-5 text-2xl font-bold">SideBar</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-5">
        <div className="flex flex-col gap-3">
          {list.map((item, i) => (
            <Link
              to="/"
              key={i}
              onClick={() => {
                clickHandleSideBar(item);
                turnSidebar();
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex h-[100px] items-center justify-center">
        <Link
          to="/create-blog"
          className="rounded-md bg-slateLight px-2 py-1 text-white"
          onClick={() => turnSidebar()}
        >
          + New Post
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
