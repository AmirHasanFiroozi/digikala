import { memo, useState } from "react";
import digikalaApp from "../../assets/icons/digikalaApp.svg";
import InstallButton from "../../Ui/Buttons/InstallButton";
import { X } from "../../Ui/SVGs/Svg";

function InstallDigikala() {
    const [closeApplicationInstalling , setCloseApplicationInstalling] = useState(false);

    function closeApplicationInstallingFunc(){
        setCloseApplicationInstalling(true);
    }
  return (
    <div className={`hidden max-xl:flex ${closeApplicationInstalling ? "max-xl:hidden" : ""} px-2 py-2 w-full items-center justify-between`}>
      <div className="flex items-center gap-2">
        <button onClick={closeApplicationInstallingFunc}>
        <X width={17} height={17}/>
        </button>
        <img className="rounded-xl w-8 h-8" src={digikalaApp} alt="digikala app icon" />
        <h3 className="font-bold text-[12px]">اپلیکیشن دیجی کالا</h3>
      </div>
      <InstallButton />
    </div>
  );
}

export default memo(InstallDigikala);
