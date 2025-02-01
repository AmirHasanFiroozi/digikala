import { useSelector } from "react-redux";

function HandleFullLoader() {
    const loading = useSelector(store => store.homePageWidgets.isLoading);

    return (
        <div className={`absolute ${loading ? "opacity-100 visible w-full h-full flex items-center justify-center bg-white top-0 left-0 z-full" : "transition-[0.2s] opacity-0 invisible w-0 h-0" }`}>
            <span className="loader"></span>
        </div>
    )
}

export default HandleFullLoader
