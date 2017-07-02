import {css} from 'styled-components';


export const media = {
  handheld: (...args) => css`
    @media (max-width: 800){
      ${css(...args)}
    }
  `
}
