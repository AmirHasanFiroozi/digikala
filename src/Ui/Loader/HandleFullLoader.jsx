import { useSelector } from "react-redux";

function HandleFullLoader() {
    const loading = useSelector(store => store.homePageWidgets.isLoading);

    return (
        <div className={`${loading ? "opacity-100 visible" : "transition-[0.2s] opacity-0 invisible" } w-full h-full flex items-center justify-center bg-white absolute top-0 left-0 z-[1000]`}>
            <span className="loader"></span>
        </div>
    )
}

export default HandleFullLoader
