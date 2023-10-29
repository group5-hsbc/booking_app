import React from "react";

const Container = ({ className, style = {}, children }) => {
  return (
    <section className="w-full h-max">
      <div className={`max-w-[1200px] mx-auto ${className}`} style={style}>
        {children}
      </div>
    </section>
  );
};

export default Container;
