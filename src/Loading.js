import React from 'react';
import './Loading.css';

const Loading = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui massive text loader">{props.message}</div>
    </div>
  );
};

Loading.defaultProps = {
  message: "Loading..."
}

export default Loading;
