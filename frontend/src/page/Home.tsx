import { useEffect, useState } from "react";
import { useGlobalContext } from "../global_variable/GlobalContext";
import axios from "axios";
import { CardBlog } from "../components";
import { dataBlogType } from "../interface/type";

const Home = () => {
  const [data, setData] = useState<dataBlogType[]>();
  const { navSelector } = useGlobalContext();

  useEffect(() => {
    const getCategoryData = async () => {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_API}blog/${navSelector}`,
        );
        setData(result.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getCategoryData();
  }, [navSelector]);

  return (
    <main className="w-custom m-auto flex w-full flex-col items-center gap-4 p-5 md:max-w-[856px] md:px-0 lg:flex-row lg:flex-wrap lg:items-start xl:max-w-[1292px]">
      {data &&
        data.map((dataInput) => (
          <CardBlog
            key={dataInput.id}
            title={dataInput.title}
            imageInput={`${import.meta.env.VITE_API + dataInput.image}`}
            category={dataInput.category}
            direct={`/blog/${dataInput.id}`}
          />
        ))}
    </main>
  );
};

export default Home;
