# Local Storage

## ELI5

Imagine you have a magic box that you can use to store small items that you might need later. This box can remember the items you put in it even after you close it and open it again later. In JavaScript, `localStorage` works in a similar way.

`localStorage` is a special place in your web browser where you can store small pieces of information, like numbers or words, that your web page might need later. This information is stored in your browser and can be accessed even after you close the browser and open it again later.

For example, imagine you have a web page where users can customize the background color. You can use `localStorage` to remember the user's choice, so that the next time they visit the page, the background color is the same as the last time they chose it.

```js
// Store the background color in localStorage
localStorage.setItem('bgColor', 'blue');

// Retrieve the background color from localStorage
let bgColor = localStorage.getItem('bgColor');
```

In this example, we first use the `setItem()` method to store the background color "blue" in localStorage under the key `bgColor`. This will save the value "blue" in the user's browser.

Later, we can use the `getItem()` method to retrieve the value of "bgColor" from `localStorage`, and store it in a variable called `bgColor`. We can then use this variable to set the background color of the web page.

`localStorage` is a useful tool in JavaScript for storing small pieces of information that you might need later, without having to rely on a server or database. However, it's important to note that `localStorage` has limits on the amount of data it can store, so it's **not suitable for storing large amounts of information**.
