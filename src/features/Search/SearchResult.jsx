import { useSelector } from "react-redux"

function SearchResult() {
    const data = useSelector(store => store.search.data.data);
    console.log(data);

    return (
        <div>
            
        </div>
    )
}

export default SearchResult
