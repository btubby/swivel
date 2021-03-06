import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import SwivellingFace from '..';

import wstraight from "./images/straight.jpg";
import wwest from "./images/w.jpg";
import weast from "./images/e.jpg";
import wnorth from "./images/n.jpg";
import wsouth from "./images/s.jpg";
import wnortheast from "./images/ne.jpg";
import wnorthwest from "./images/w.jpg";
import wsoutheast from "./images/se.jpg";
import wsouthwest from "./images/sw.jpg";
import styled from 'styled-components';


export default {
  title: 'Swivel component with photos',
  component: SwivellingFace,
  decorators: [withKnobs]
};


// this is the container the that bounds the mouse limits
 const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  width:100%;
  border: 1px solid red;
`;
 const FloatingContent = styled.div`
  align-content: center;
  position:absolute;
  top:3%;
  text-align: center;
  width:100%;
  height: 100%;
  z-index:1000;
`;

 const Padding = styled.div`
  padding:100px;
`;

export function SwivelWill() {
    const [xCord, setxCord] = useState(0);
    const [yCord, setyCord] = useState(0);
    return (
        <OuterContainer
            onMouseMove={e => {
                setxCord(e.nativeEvent.clientX);
                setyCord(e.nativeEvent.clientY);
            }}
        >
        <Padding>
        <SwivellingFace 
          title={"Will's Mug"}
          xCord={xCord}
          yCord={yCord}
          straight= {wstraight}
          n= {wnorth}
          ne= {wnortheast}
          e= {weast}
          s= {wsouth}
          se= {wsoutheast}
          sw= {wsouthwest}
          w={wwest}
          nw= {wnorthwest}
        />
        </Padding>
     </OuterContainer>       
    )
}
    