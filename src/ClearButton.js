import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default function ClearButton(props) {
    return <Button variant='contained' style={{margin: '1em'}} color='secondary' type="button" onClick={props.onClear} disabled={props.isdisabled}>Clear</Button>;
}