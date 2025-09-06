1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById, it works with only id, it's fast but limited, return single element
getElementByClassName, works with class name, return multiple element/html collecton.
querySelector is any css selector, return first matching element/ querySelectorAll is any css selector, return nodelist

2. How do you create and insert a new element into the DOM?
To create a new element use createElement() and to insert use appendChild()

3. What is Event Bubbling and how does it work?
In event bubbling, let a button is clicked now according bubbling it first runs the event handler then bubbles up to its parents then grand parents.you can easily stop it by stopPropagation()


4. What is Event Delegation in JavaScript? Why is it useful?
attaching a single event listener to a parent element to handle events triggered by its child elements.Let's use a code to understand this: document.getElementById('id').addEventListener('click', function(){ console.log('clicked');})
it depends on event bubbling.

5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() : prevent auto load in browser
stopPropagation() :Stops the click from reaching parent elements