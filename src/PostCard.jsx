import React, { useState } from "react";

function PostCard(props) {
  const { title, body, ...rest } = props;
  const [clicked, setClicked] = useState(false);

  const cardClasses = `
    p-6 
    shadow-lg 
    rounded-lg 
    bg-white
    text-gray-800
    text-center
    h-full  
    
    flex 
    flex-col 
    justify-between 
    transition duration-300 ease-in-out

    hover:scale-[1.03]          
    hover:border-2            
    hover:border-special-red-2
    hover:bg-pink-50          
  `;

  const buttonClasses = `
    w-full
    text-white 
    p-2 
    rounded-md 
    mt-4 
    
    ${clicked ? "bg-special-red-2" : "bg-gray-600"} 
    
    hover:brightness-125      
    
    ${clicked ? "opacity-90 cursor-not-allowed" : ""}
    transition duration-150 ease-in-out
  `;

  return (
    <div className={cardClasses}>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-4 mb-4">{body}</p>
      </div>

      <button
        className={buttonClasses}
        onClick={() => setClicked(true)}
        disabled={clicked}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;
