/*
%===============================================================================
% source: pst-flags-colors-html.sty
% Remark: Colors of flags of countries
% Manual: \input{pst-flags-doc.tex}
% Author: Amit Manohar Manthanwar
% Mailer: manthanwar@hotmail.com
% WebURL: https://manthanwar.github.io
% GitHub: https://github.com/manthanwar/PST-Flags
% Rights: Copyright ©2022 Amit Manohar Manthanwar
%-------------------------------------------------------------------------------
% This program can be redistributed and/or modified under the terms
% of the LaTeX Project Public License Distributed from CTAN archives
% in directory macros/latex/base/lppl.txt.
%===============================================================================
%---------------+---------+-----------------------------------------------------
% Revision Log  | Author  | Description
%---------------+---------+-----------------------------------------------------
% 27-Nov-2022   | AMM     | Initial Version
%---------------+---------+-----------------------------------------------------
% 25-Dec-2022   | AMM     | CTAN Review Updates
%---------------+---------+-----------------------------------------------------
% 09-Jan-2023   | AMM     | Removed xcolor options
%---------------+---------+-----------------------------------------------------
%---------------+---------+-----------------------------------------------------
%---------------+---------+-----------------------------------------------------
%===============================================================================
*/

/**
 * Create a Chart class
 * @param {String} name - name given to chart
 * @param {String} type - type of chart
 * @param {element} parent - DOM element of html to attach to
 */
export class Chart {
  // #NL;
  // #NS;
  constructor(name, type) {
    this.name = name;
    this.type = type;
    // this.parent = parent;

    this.NS = 'http://www.w3.org/2000/svg';
    this.NL = 'http://www.w3.org/1999/xlink';
  }

  setName(newName) {
    newName = newName.trim();
    if (newName === '') {
      throw new Error('Error: Kindly enter an name');
    }
    this.name = newName;
  }

  setAttrs(obj, ele) {
    // assign attributes e.g. el.setAttributeNS(null,'fill','red');
    if (obj.attrs) {
      // assign attributes
      for (let key of Object.keys(obj.attrs)) {
        // grab the value of this attribute
        const value = obj.attrs[key];

        // convert attribute key from camel case to dash syntax
        if (key !== key.toLowerCase() && key !== 'viewBox') {
          key = key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
        }
        // set the attribute on the element
        ele.setAttributeNS(null, key, value);
      }
    }
  }

  setStyle(obj, ele) {
    if (obj.style) {
      // assign attributes
      for (const key of Object.keys(obj.style)) {
        ele.style[key] = obj.style[key];
      }
    }
  }

  /**
   * @param {Object} obj - object literal with element properties
   */
  createElement(obj) {
    const type = obj.type || 'div';
    const el = document.createElement(type);

    // iterate through properties e.g.  el.className = 'myClass';

    for (const key of Object.keys(obj)) {
      if (key !== 'attrs' && key !== 'type') {
        el[key] = obj[key];
      }
    }

    // assign attributes e.g. el.setAttribute('data-user','Amit');
    if (obj.attrs) {
      // assign attributes
      for (let key of Object.keys(obj.attrs)) {
        // grab the value of this attribute
        const value = obj.attrs[key];

        // convert attribute key from camel case to dash syntax
        if (key !== key.toLowerCase()) {
          key = key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
        }
        // set the attribute on the element
        el.setAttribute(key, value);
      }
    }

    // this.parent.appendChild(el);
    return el;
  }

  /**
   * @param {Object} obj - object literal with element properties
   */
  createSvg(obj) {
    const type = obj.type || 'svg';
    const ele = document.createElementNS(this.NS, type);

    if (obj.class) {
      ele.className.baseVal = obj.class;
    }

    this.setAttrs(obj, ele);
    this.setStyle(obj, ele);

    return ele;
  }
}
