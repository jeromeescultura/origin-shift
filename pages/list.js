import React, { useRef } from "react";

export default function List() {
  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        alert("reached bottom");
      }
    }
  };

  return (
    <div>
      <div
        onScroll={onScroll}
        ref={listInnerRef}
        style={{ height: "200px", overflowY: "auto" }}
      >
        {Array(200)
          .fill()
          .map((_, i) => {
            return <p key={i}>{i}</p>;
          })}
      </div>
    </div>
  );
}
