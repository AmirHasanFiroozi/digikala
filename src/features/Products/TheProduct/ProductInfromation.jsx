import { useSelector } from "react-redux";
import ProductColor from "./ProductColor";
import ProductAttribute from "./ProductAttribute";

function ProductInfromation() {
    const {data,color:colorSelected} = useSelector(store => store.theProductReducer);

    return (
        <div className="w-full border-t-[1px] pt-5 border-[var(--color-gray2)] mx-2">
            <h4 className="text-[var(--text-color)] text-xl max-md:text-[14px]">رنگ : <span className={`${colorSelected?.title === "سفید" ? "text-stroke":""}`} style={{color : `${colorSelected?.hex_code}`}}>{colorSelected?.title}</span></h4>
            <div className="flex gap-4 my-4">
                {
                    data.colors.map(color => <ProductColor color={color} colorSelected={colorSelected} key={color.id} />)
                }
            </div>
            <h4 className="text-[var(--text-color)] text-xl max-md:text-[14px]">ویژگی ها</h4>
            <div className="flex flex-wrap gap-2 mt-5">
                {
                    data.review.attributes.map(attribute => <ProductAttribute key={attribute?.title} attribute={attribute} />)
                }
            </div>
        </div>
    )
}

export default ProductInfromation
