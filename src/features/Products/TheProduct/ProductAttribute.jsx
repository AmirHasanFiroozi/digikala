
/* eslint-disable react/prop-types */
function ProductAttribute({attribute}) {
    return (
        <div className="px-5 py-2 bg-[var(--color-gray1)] rounded-xl flex flex-col gap-2">
            <span className="text-[var(--text-color)]">{attribute.title}</span>
            <span className="font-bold">{attribute.values}</span>
        </div>
    )
}

export default ProductAttribute
