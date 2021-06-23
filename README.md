# Material-UI Analysis

## Overview architecture

![material-ui_architecture](https://user-images.githubusercontent.com/18292247/123029913-16136d00-d40c-11eb-8058-d8ba1b63424f.jpg)

**General Guidelines**

- Lean toward styling rather than theming for bundle size optimization.
- Create styles for specific use if the UI looks different than normal eg. adsButtonStyles. [see example](/src/styles/adsButtonStyles.ts)

  ```jsx
  import { useAdsButtonStyles } from 'path/to/styles';

  function App() {
    const classes = useAdsButtonStyles();
    return (
      <Button classes={classes} />
    )
  }
  ```

- For multiple application that want to share components (but slightly different design), create custom components that can be customized in theme. [see example](/src/components/CustomComponent.tsx)

## Bundle Size

### Styling-engine

| styling-engine 	| size          	|
|----------------	|---------------	|
| v4 (jss)       	| ~20kb         	|
| v4 + emotion   	| ~33kb (+13kb) 	|

> Note: material-ui v5 replace JSS with emotion (can switch to styled-components)

**Details**

- Pure Material-UI v4

<img width="1428" alt="Screen Shot 2564-06-23 at 08 30 43" src="https://user-images.githubusercontent.com/18292247/123020936-54556000-d3fd-11eb-8e78-a164ddcf5a1f.png">

- Material-UI v4 + emotion

<img width="1424" alt="Screen Shot 2564-06-23 at 08 34 20" src="https://user-images.githubusercontent.com/18292247/123021239-ebbab300-d3fd-11eb-8143-4430f450c6fa.png">

## Theme size

| customization 	| size             	|
|---------------	|------------------	|
| none          	| 221.44KB         	|
| 10 lines      	| 222.26KB (+1KB)  	|
| 300 lines     	| 226.42KB (+5KB)  	|
| 1000 lines    	| 236.44KB (+15KB) 	|

**Details**

- No customization

  <img width="1427" alt="Screen Shot 2564-06-23 at 10 31 11" src="https://user-images.githubusercontent.com/18292247/123031209-262c4c00-d40e-11eb-9afd-4c62982a184f.png">

- 10 lines (custom palette, typography)

  <img width="1425" alt="Screen Shot 2564-06-23 at 08 50 10" src="https://user-images.githubusercontent.com/18292247/123022464-0b52db00-d400-11eb-89f4-7f5ebb8664eb.png">

- ~300 lines (8 components)

  <img width="1427" alt="Screen Shot 2564-06-23 at 09 00 17" src="https://user-images.githubusercontent.com/18292247/123023359-74871e00-d401-11eb-93e5-d2f81042c863.png">
- ~1000 lines (28 components)

  <img width="1430" alt="Screen Shot 2564-06-23 at 09 28 56" src="https://user-images.githubusercontent.com/18292247/123025836-7652e080-d405-11eb-85b7-0d60c6182b97.png">

## Automation

- [source-map-explorer](https://github.com/danvk/source-map-explorer)
- [lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci)