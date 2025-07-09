import React, { useState } from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";

const dataList = [
  { id: 1, title: "제목1", desc: "내용1 입니다.", imgurl: "" },
  { id: 2, title: "제목2", desc: "내용2 입니다.", imgurl: "" },
  { id: 3, title: "제목3", desc: "내용3 입니다.", imgurl: "" },
  { id: 4, title: "제목4", desc: "내용4 입니다.", imgurl: "" },
];

const Content1 = () => {
  return (
    <Container>
      <div className="inner">
        <h2> BUSINESS</h2>
        <ul>
          {dataList.map((item) => (
            <li key={item.id} item={item}>
              {/* <Link to=""></Link> */}
              <img src={item.imgurl} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Content1;
