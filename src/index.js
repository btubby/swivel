
import React, { useState, useEffect } from "react";
import { Container, Image } from "./styles";

export default function SwivellingFace(props) {

  const [imageToDisplay, setImageToDisplay] = useState(props.straight);
  const [containerEdgeTop,    setContainerEdgeTop] = useState(0);
  const [containerEdgeBottom, setcontainerEdgeBottom] = useState(0);
  const [containerEdgeRight,  setcontainerEdgeRight] = useState(0);
  const [containerEdgeLeft,   setcontainerEdgeLeft] = useState(0);

  useEffect(() => {
    console.log(`TYPE[${props.title}] ` +
    `POSITIONS: top[${containerEdgeTop}] bottom/s[${containerEdgeBottom}] ` + 
    `right/e[${containerEdgeRight}] left/w[${containerEdgeLeft}]`
    );

    // This map is used to decide which image to display; 
    // We set the bits dependent on the relative location of the mouse to use
    // for example, when the pointer is northEast of this conponent, 
    // the 'n' and 'e' bits will be set to true.
    let map = { n: 0, e: 0, s: 0, w: 0 };
    map.n = (props.yCord <= containerEdgeTop)    ? 1 : 0;
    map.e = (props.xCord >= containerEdgeRight)  ? 1 : 0;
    map.w = (props.xCord <= containerEdgeLeft)   ? 1 : 0;
    map.s = (props.yCord >= containerEdgeBottom) ? 1 : 0;
    console.log(`x:${props.xCord}, y:${props.yCord} `, map);

    // Set the correct image 
    setImageToDisplay(props.straight);
    (map.n) && setImageToDisplay(props.n);
    (map.e) && setImageToDisplay(props.e);
    (map.s) && setImageToDisplay(props.s);
    (map.w) &&  setImageToDisplay(props.w);
    (map.n && map.e) && setImageToDisplay(props.ne);
    (map.s && map.e) && setImageToDisplay(props.se);
    (map.s && map.w) && setImageToDisplay(props.sw);
    (map.w && map.n) && setImageToDisplay(props.nw);
  },[props.yCord, props.xCord]);

  return (
    <Container
      ref={element => {
        if (!element) return;
        // Here we find and store the absolute positions of the top, bottom, left and right edges of our outer container
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        setContainerEdgeTop(Math.round(element.getBoundingClientRect().top));
        setcontainerEdgeBottom(Math.round(element.getBoundingClientRect().bottom));
        setcontainerEdgeRight(Math.round(element.getBoundingClientRect().right));
        setcontainerEdgeLeft(Math.round(element.getBoundingClientRect().left));
      }}
    >
      <Image src={imageToDisplay} title={props.title ? props.title : ''} />
    </Container>
  );
}
