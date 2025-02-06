import LittleProductBox from "./LittleProductBox"
import ProductComments from "./ProductComments"

function ProductCommentBox() {
    return (
        <div className="flex py-5 gap-5 max-md:pb-20">
            <ProductComments />
            <LittleProductBox />
        </div>
    )
}

export default ProductCommentBox
