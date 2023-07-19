import { useRef, useState } from "react";

const IconButton = ({ children, text, color, active, ...props }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex p-1.5 items-center rounded-lg text-sm ${color || "bg-gray-600"} ${active ? "text-[#4A5568]" : "text-white"}`} {...props}>

      {children}

      <div style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }} className="overflow-x-hidden transition-all duration-300 ease-out">
        <span ref={ref} className="px-1 font-semibold">{text}</span>
      </div>
    </button>
  );
};

export default IconButton;
