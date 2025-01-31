import { memo } from "react";


function LeftMenu({children}) {
    return (
        <div dir="ltr" className="h-full bg-white py-8 px-8 overflow-y-auto max-xl:p-2 max-xl:w-full">
            <div dir="rtl">
                {children}
            </div>
        </div>
    )
}

export default memo(LeftMenu);
