import React from 'react';
import {Layer, Line} from 'react-konva';

export const Board = ({unit, size, rows})=>{
  let grid = [];
  let stroke = 'grey';
  let strokeWidth = 10;

  for(let i=1; i < rows; i++){
    let position = unit * i;
    grid.push(
      <Line
        key={i+'v'}
        points={[position, 0, position, size]}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    )

    grid.push(
      <Line
        key={i+'h'}
        points={[0, position, size, position]}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    )
  }
  return(
    <Layer>
      {grid}
    </Layer>
  )
}
