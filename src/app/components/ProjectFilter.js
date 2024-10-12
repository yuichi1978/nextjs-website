import React, { useEffect } from "react";
import { projects } from "@/app/constants/projects";

const ProjectFilter = ({ activeCategory, setActiveCategory, setFiltered }) => {
  useEffect(() => {
    // もしもactiveCategoryがallと一致するなら
    if (activeCategory === "all") {
      setFiltered(projects);
      return;
    }

    // filterメソッドは配列の各要素に対して指定された条件んがtrueの場合、その要素を新しい配列に含めるメソッドで、
    // フィルタの条件を満たさない要素は新しい配列に含まれない！！
    // projectsという配列に対してfilterメソッドを使用して条件に合う要素だけを取り出す処理
    const filtered = projects.filter((project) =>
      project.category.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory, setFiltered]);

  return (
    <div className="flex gap-5 my-10">
      {/* activeCategoryがallになっている場合はcssが反映されるそれ以外はnullにする */}
      <button
        className={
          activeCategory == "all"
            ? "bg-darkblue py-1 px-3 text-white rounded-lg"
            : null
        }
        // activeCategoryを有効にする必要がある
        // onClickされたときsetActiveCategoryがallにきりかわる
        onClick={() => setActiveCategory("all")}
      >
        全て
      </button>
      <button
        className={
          activeCategory == "react"
            ? "bg-darkblue py-1 px-3 text-white rounded-lg"
            : null
        }
        onClick={() => setActiveCategory("react")}
      >
        React
      </button>
      <button
        className={
          activeCategory == "aws"
            ? "bg-darkblue py-1 px-3 text-white rounded-lg"
            : null
        }
        onClick={() => setActiveCategory("aws")}
      >
        AWS
      </button>
      <button
        className={
          activeCategory == "wordpress"
            ? "bg-darkblue py-1 px-3 text-white rounded-lg"
            : null
        }
        onClick={() => setActiveCategory("wordpress")}
      >
        WordPress
      </button>
    </div>
  );
};

export default ProjectFilter;
