import React, {ReactElement} from 'react';
import Mani from './Header/Mani';


export default function App(): ReactElement {
  return (
    <div className="ui active inverted dimmer">
      <Mani color="Red"/>
      <Mani color="Blue"/>
    </div>
  );
}
