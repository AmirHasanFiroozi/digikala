import { useSelector } from "react-redux";
import useSize from "../../Hooks/useSize"
import SearchBox from "../Search/SearchBox";
import CustomModal from "./CustomModal";

function HandleModals() {
    const [width] = useSize();
    const error = useSelector(store => store.homePageWidgets.error);
    console.log(error)

    return (
        <diV>
          {
            width < 1280 && <SearchBox device="mobile" />
          }
          {
            error && <CustomModal text="برای دریافت اطلاعات صحیح از سرور دیجی کالا لطفا افزونه‌ی cors Unblock را نصب کنید " />
          }
        </diV>
    )
}

export default HandleModals
