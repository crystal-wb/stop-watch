import React, { Component } from 'react';
export default function ClearButton(props) {
    return <button type="button" onClick={props.onClear}>Clear</button>;
}