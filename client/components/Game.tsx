import { Key, ReactElement, JSXElementConstructor, ReactNode } from 'react'
import { turnFormat } from '../../models/game'
import { useState } from 'react';

const [noughtsArr, setNoughtsArr] = useState<number[]>([]);
const [crossesArr, setCrossesArr] = useState<number[]>([]);

const Grid = [1, 2, 3, 4, 5, 6, 7, 8, 9]

<div className="grid-container">
  
  
</div>

const winArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
 
