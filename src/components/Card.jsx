import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "motion/react";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{scale:1.2}}
      className="relative flex-shrink-0 w-60 h-72 bg-zinc-900 rounded-[45px] text-white py-10 px-5 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-xs mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-5 py-5 mb-5">
          <h5> {data.fileSize}</h5>

          <span className="w-8 h-8 bg-zinc-500 rounded-full flex items-center justify-center">
            {data.close ? (
              <CiCircleRemove size="2.3rem" color="#fff" />
            ) : (
              <MdOutlineFileDownload size="1.3rem" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className="tag w-full py-4 bg-green-500 flex justify-center items-center">
            <h3 className="text-sm">Download Now</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
