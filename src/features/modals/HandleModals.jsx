import useSize from "../../Hooks/useSize"
import SearchBox from "../Search/SearchBox";

function HandleModals() {
    const [width] = useSize();
    return (
        <div className="app-modal">
          {
            width < 1280 && <SearchBox device="mobile" />
          }
        </div>
    )
}

export default HandleModals
