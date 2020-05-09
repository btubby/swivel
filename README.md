# swiveler

## Work in progress

See storybook for upto-date usage

> Made with create-react-library
https://www.npmjs.com/package/swiveler

[![NPM](https://img.shields.io/npm/v/swiveler.svg)](https://www.npmjs.com/package/swiveler) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save swiveler
```

## Usage

```jsx
import React, { Component } from 'react'
import Swivler from 'swiveler'

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
          
          straight= {image_straight}
          n= {image_north}
          ne= {image_northeast}
          e= {image_east}
          s= {image_south}
          se= {image_southeast}
          sw= {image_southwest}
          w={image_west}
          nw= {image_northwest}
        />
        </Padding>
     </OuterContainer>       
    )
}
```

## License

MIT © [btubby](https://github.com/btubby)
