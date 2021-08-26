/* eslint-disable react/jsx-no-comment-textnodes */
import { ChildProcess } from 'child_process';
import React, {ReactElement} from 'react';
import Mani from './Header/Mani';


export default function App(): ReactElement<ChildProcess> {
  return (
    <div className="ui active inverted dimmer">
      <Mani color="Red"></Mani>
      <Mani color="Blue"></Mani>
      <Mani color="Blue" >just</Mani>
    </div>
  );
}
