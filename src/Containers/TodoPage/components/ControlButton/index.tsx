import React from 'react';

import s from './style.css';

export enum CONTROL_BUTTONS_TYPES {
  SAVE = 'save',
  DELETE = 'delete',
}

type ControlButtonProps = {
  type: CONTROL_BUTTONS_TYPES,
  onClick: () => void,
};

export const ControlButton: React.FC<ControlButtonProps> = ({ type, onClick }) => (
  <div className={`${s.button} ${s[`button_${type}`]}`} onClick={onClick}>
    {type}
  </div>
);