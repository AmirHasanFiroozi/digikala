import { useSelector } from "react-redux";
import ProductPrice from "../Products/TheProduct/ProductPrice";

function TheProductPageModal() {
    const { isLoading, error, data } = useSelector(
        (store) => store.theProductReducer,
      );
    return (
        <div>
            <div className="hidden max-md:block">
            {
                isLoading === false && error === "" && data.id && <ProductPrice />
            }
            </div>
        </div>
    )
}

export default TheProductPageModal
