export type dataType = {
  id: number;
  title: string;
  image: string;
  post: string;
  category: string;
  createon: string;
};

export type dataPostType = {
  title: string;
  image: string;
  post: string;
  category: string;
};

export type dataPostBlogType = {
  title: string;
  image: File | undefined;
  post: string;
  category: string;
};

export type dataBlogType = {
  category: string;
  createon: string;
  id: number;
  image: string;
  post: string;
  title: string;
};

export type globalContextType = {
  categoryList: string[];
  navSelector: string;
  setNavSelector: React.Dispatch<React.SetStateAction<string>>;
};

export type blogResultType = {
  id: number;
  title: string;
  image: string;
  post: string;
  category: string;
  createon: string;
};

export type sideBarPropsType = {
  list: string[];
  clickHandleSideBar: (value: string) => void;
  turnSidebar: () => void;
};
