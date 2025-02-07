import { useSelector } from "react-redux";

function AllCategories() {
  const data = useSelector((store) => store.homePageWidgets.data);
  const categories = data.filter(
    (data) => data.type === "main_categories_grid",
  )[0].data;

  return (
    <div className="mainContainer flex flex-col items-center text-center text-xl">
      <h2 className="py-4 pb-10">{categories.title}</h2>
      <div className="grid gap-6 grid-cols-8 text-[12px] font-bold max-xl:grid-cols-7 max-lg:grid-cols-6 max-sm:grid-cols-3">
        {categories.categories.map((category) => (
          <a href={`https://www.digikala.com/${category.url.uri}`} target="_blank" key={category.id}>
            <img className="w-28" src={category.image} alt={category.id} />
            <h3>{category.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}

export default AllCategories;
