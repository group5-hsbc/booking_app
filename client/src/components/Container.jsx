import React from "react";

const Container = ({
  className = "max-w-[1200px] mx-auto",
  style = {},
  children,
}) => {
  return (
    <section className="w-full h-max">
      <div className={className} style={style}>
        {children}
      </div>
    </section>
  );
};

export default Container;
