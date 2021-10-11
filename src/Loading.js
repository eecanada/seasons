import React from 'react';
import './Loading.css'

const Loading = () => {
  return (
    <div class="ui segment loading">
      <div class="ui active dimmer">
        <div class="ui massive text loader">Loading</div>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default Loading;
