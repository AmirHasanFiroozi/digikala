import { useSelector } from "react-redux";
import { Error, Search } from "../../Ui/SVGs/Svg";

function SearchResult() {
  const { data, error, isLoading } = useSelector((store) => store.search);

  return (
    <div className="flex min-h-10 w-full items-center justify-center py-4 text-[15px] text-[var(--text-color)]">
      <>
        {error === "" && isLoading === false && !data && (
          <span>کالای مورد نیاز خودرا جستجو کنید</span>
        )}
        {isLoading && <span className="loader"></span>}
        {error && (
          <div className="my-2 flex w-56 flex-col items-center justify-center gap-1 rounded-2xl p-4 text-center shadow">
            <Error width={30} height={30} />
            <span>
              can not access to digikala.com server please use cors unblock
              extension
            </span>
          </div>
        )}
        {error === "" && isLoading === false && data && (
          <ul className="flex h-full w-full flex-col gap-5">
            {data.categories.map((Category) => (
              <li key={Category.category.id}>
                <a
                  className="flex gap-1"
                  href={`https://www.digikala.com/search/drillbit/?q=${Category.keyword}`}
                  target="_blank"
                >
                  <div className="mt-1">
                    <Search />
                  </div>
                  <div>
                    {Category.keyword}
                    <div>
                      در دسته‌ی{" "}
                      <span className="text-[var(--color-blue1)]">
                        {Category.category.title_fa}
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </>
    </div>
  );
}

export default SearchResult;
