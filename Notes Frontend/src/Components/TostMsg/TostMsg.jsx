import { memo, useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const TostMsg = memo(function TostMsg({ isShow, msg, type, onClose }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isShow,onClose]);

  console.log("hi")

  return (
    <>
      <div
        className={`absolute top-20 right-6 transition-all duration-500 ${
          isShow ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`min-w-52 bg-white border shadow-2xl rounded-md after:w-[5px] 
            after:h-full ${
              type === "delete" ? "after:bg-red-500" : "after:bg-green-500"
            }
            after:absolute after:left-0 after:top-0 after:rounded-l-lg`}
        >
          <div className="flex items-center gap-3 py-2 px-4">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                type === "delete" ? "bg-red-50" : "bg-green-50"
              }`}
            >
              {type === "delete" ? (
                <MdDeleteOutline className="text-xl text-red500" />
              ) : (
                <LuCheck className="text-xl text-green-500" />
              )}
            </div>
            <p className="text-sm text-slate-800 ">{msg}</p>
          </div>
        </div>
      </div>
    </>
  );
})

export default TostMsg;
