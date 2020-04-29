
import React, { useState, useEffect } from "react";
import { Container, Image } from "./styles";

export default function SwivellingFace(props) {
  const {
    xCord,    // xCord and yCord are the current X and Y coordinates of the pointer
    yCord, 
    // The following are the 9 image files
    straight,
    w,
    e,
    n,
    s,
    nw,
    ne,
    sw,
    se
  } = props;

  const [image, setImage] = useState(straight);
  const [N, setN1] = useState(0);
  const [S, setS1] = useState(0);
  const [E, setE1] = useState(0);
  const [W, setW1] = useState(0);

  useEffect(() => {
    let map = { n: 0, e: 0, s: 0, w: 0 };
    // console.log(`${type} top: ${N} bottom: ${S} right: ${E} left: ${W}`);
    // Decide which image to display dependant on the relative potition of the mouse to this component
    map.n = (yCord <= N) ? 1 : 0;
    map.e = (xCord >= E) ? 1 : 0;
    map.w = (xCord <= W) ? 1 : 0;
    map.s = (yCord >= S) ? 1 : 0;
    console.log(`x:${xCord}, y:${yCord} `, map);
    // Set the correct image 
    setImage(straight);
    (map.n) && setImage(n);
    (map.e) && setImage(e);
    (map.s) && setImage(s);
    (map.w) &&  setImage(w);
    (map.n && map.e) && setImage(ne);
    (map.s && map.e) && setImage(se);
    (map.s && map.w) && setImage(sw);
    (map.w && map.n) && setImage(nw);
  },[yCord, N, xCord, E, W, S, straight, n, e, s, w, ne, se, sw, nw]);
  return (
    <Container
      ref={dd => {
        if (!dd) return;
        setN1(dd.getBoundingClientRect().top);
        setS1(dd.getBoundingClientRect().bottom);
        setE1(dd.getBoundingClientRect().right);
        setW1(dd.getBoundingClientRect().left);
      }}
    >
      <Image src={image} alt="{image}" />
    </Container>
  );
}
