import { Image } from "../../Ui/SVGs/Svg"

function productLoading({number , gridNumber}) {

    return (
        <div className="w-full h-[400px] p-4 border-(--color-gray2) flex flex-col gap-2"
           style={{borderLeftWidth : `${gridNumber !== 0 && number !== 1 && (number % gridNumber) === 0 ? "0px" : "1px"}`, borderBottomWidth : "1px" , borderStyle : "solid" } }
        >
            <div className="flex items-center justify-center w-full h-[50%] rounded-xl bg-(--color-gray1) animate-pulse">
                <Image width={40} height={40}/>
            </div>
            <div className="w-full h-10 rounded-xl bg-(--color-gray1) animate-pulse"></div>
            <div className="w-[80%] h-5 rounded-xl bg-(--color-gray1) animate-pulse"></div>
            <div className="w-[60%] h-2 rounded-xl bg-(--color-gray1) animate-pulse"></div>
            <div className="w-[60%] h-2 rounded-xl bg-(--color-gray1) animate-pulse"></div>
            <div className="w-[60%] h-2 rounded-xl bg-(--color-gray1) animate-pulse"></div>
            <div className="w-[60%] h-2 rounded-xl bg-(--color-gray1) animate-pulse"></div>
        </div>
    )
}

export default productLoading
