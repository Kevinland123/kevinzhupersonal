import React from 'react'
import { tableOfContent } from '../css/style.module.css'

const TableOfContents = () => {
  return (
    <nav aria-label="Table of contents" className={tableOfContent}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Resume</li>
        <li>Projects</li>
        <li>Piano</li>
        <li>Statistics</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default TableOfContents;