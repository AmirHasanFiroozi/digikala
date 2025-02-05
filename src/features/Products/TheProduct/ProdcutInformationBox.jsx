import { useSelector } from "react-redux"
import ProductInfromation from "./ProductInfromation"
import ProductPriceBox from "./ProductPriceBox"

function ProdcutInformationBox() {
    const {data} = useSelector(store => store.theProductReducer);
    console.log(data);

    return (
        <div className="w-full h-[400px] mr-4">
            <div>
                <a className="font-bold text-[#19bfd3] text-sm" href={`https://www.digikala.com/${data.brand.url.uri}`} target="_blank">{data.brand.title_fa}</a>
                <span className="text-(--text-color)">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                <a className="font-bold text-[#19bfd3] text-sm" href={`https://www.digikala.com/${data.meta.brand_category_url.uri}`} target="_blank">{data.title_fa.split(" ").slice(0,3).join(" ")}</a>
            </div>
            <h1 className="text-xl py-2 pb-4">{data.title_fa}</h1>
            <div className="flex">
                <ProductInfromation />
                <ProductPriceBox />
            </div>
        </div>
    )
}

export default ProdcutInformationBox
