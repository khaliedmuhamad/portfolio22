/**
 * for fix  <a  cannot appear as a descendant of <a>. 
 * 
 */
import React from 'react'

export default function Anochor(props) {
  return (
    <a {...props}>{props.children }</a>
  );
}
