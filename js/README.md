# Checked/Unchecked

This is a solution to the [https://codepen.io/holllyyyy/pen/XWzYyjN](https://codepen.io/holllyyyy/pen/XWzYyjN).
This is part of Web Design for Everybody: Basics of Web Development & Coding Specialization : Interactivity with JavaScript :homework.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

Added the JavaScript code needed to enable auto-complete on the form.
Whenever the checkbox is checked, the code should automatically copy the
values from Shipping Name and Shipping Zip into the Billing Name and
Billing Zip. If the checkbox is unchecked, the Billing Name and Billing
Zip should go blank.

### Links

- Solution URL: [https://github.com/Holllyyyy/checked-unchecked](https://github.com/Holllyyyy/checked-unchecked)
- Live Site URL: [https://codepen.io/holllyyyy/pen/XWzYyjN](https://codepen.io/holllyyyy/pen/XWzYyjN)

## My process

In my HTML I wrote few lines for form, with inputs who are required, and with pattern what shows how much long should be input and which kind of characters should be used. After it here where I wrote about checkbox I put onchange billingFunction().

```html
<input type="checkbox" id="same" name="same" onchange="billingFunction()" />
<label for="same">Is the Billing Information the Same?</label>
<fieldset></fieldset>
```

Than, inside the JavaScript file, I wrote function billingFunction(). This now become responsible for setting and clearing the fields in Billing Information

```js
function billingFunction() {
  if (document.getElementById("same").checked) {
    /*I needed to use id 'same' cause thats focus for checked */
    const n =
      document.getElementById(
        "shippingName"
      ).value; /*Here i declare variable ... n is the name of this variable, with this '=' am telling java script a value is coming up next*/
    const z =
      document.getElementById("shippingZip").value; /*Here same just z */
    document.getElementById("billingName").value =
      n; /*here is the way how i got same text n numbers by clicking on checkbox */
    document.getElementById("billingZip").value = z;
  } else {
    document.getElementById("billingName").value =
      ""; /*This is if someone not check it, to write something else .. */
    document.getElementById("billingZip").value = "";
  }
}
```

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### What I learned

While working on this project I learned :

- how to declarate variable
- write function
- use of document.getElementById with value.
  This method returns an element with a specified value.

### Continued development

I will continue next with a course from Coursera. I want to practice and improve my HTML5 and CSS3 skills and learn about Java Script and Responsive Design.

## Author

- Website - [Svetlana Jokic](https://my-portfolio-hollyy.netlify.app/)
- Frontend Mentor - [@Holllyyyy](https://www.frontendmentor.io/profile/Holllyyyy)
- Twitter - [@svetlanajokic](https://twitter.com/svetlanajokic)
- LinkedIn - [@Svetlana Jokic](https://www.linkedin.com/in/svetlana-jokic-787432100/)
- FreeCodeCamp - [@hollyy](https://www.freecodecamp.org/hollyy)
