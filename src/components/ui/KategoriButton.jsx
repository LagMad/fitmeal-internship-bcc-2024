import React from 'react'

const KategoriButton = () => {
  return (
    <button
            className={`${
              isHovered === "Buah & Sayur" || isActive === "Buah & Sayur"
                ? "bg-cust-orange-normal text-white"
                : "bg-white text-cust-orange-normal"
            } flex flex-row group justify-start items-center px-3 py-1 rounded-lg gap-4`}
            onClick={() => setIsActive("Buah & Sayur")}
            onMouseEnter={() => setIsHovered("Buah & Sayur")}
            onMouseLeave={() => setIsHovered("")}
          >
            <SVGs.Buah
              fillColor={
                isHovered === "Buah & Sayur" || isActive === "Buah & Sayur"
                  ? white
                  : custOrange
              }
            />
            <div className="text-xl">Buah & Sayur</div>
          </button>
  )
}

export default KategoriButton