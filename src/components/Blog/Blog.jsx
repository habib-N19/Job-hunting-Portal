import React from 'react'

const Blog = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <div className=''>
        <span className='font-bold'>When you should use Context Api? </span>
        <p>
          Context Api is a helpful way of avoiding props drilling. If the passed
          data is used by a whole lot of components and minimal changes are made
          in the state then we should use Context api. But we should avoid using
          context api for large amount of data. To use that data we have to
          divide the data into smaller context then use it. For an example, if
          in a e-commerce website from shop to details of the product we can
          just use context in shop and product details page will get the data
          easily. If the data is getting passed to a far component then we
          should use context but other than a complex object and farther props
          drilling we should not use Context Api
        </p>
      </div>
      <div>
        <span className='font-bold'>What is a custom hook?</span>
        <p>
          A custom hook is a javascript function that can operate like a hook.
          We can use a custom hook in multiple components so we don't have to
          rewrite similar codes in each component. If we need to fetch data in
          multiple components then we can create a file where we can create a
          hook that fetches data from api. Then we can use that hook inside any
          of our component to pass the url there and fetch the data. This is
          just one use of a custom hook.
        </p>
      </div>
      <div>
        <span className='font-bold'>What is useRef?</span>
        <p>
          useRef is built in react hook. It can access dom element and it also
          can show a previous data without re-rendering. When we use useState,
          it is an asynchronous operation. Data will render first and then we
          can see. But when we use ueRef we can see the data without re
          rendering the component. Also useRef is mutable. We can change what's
          inside the reference. UseRef can be used to keep track of state
          changes, how many times a button is clicked.
        </p>
      </div>
      <div>
        <span className='font-bold'>What is useMemo?</span>
        <p>
          We can call useMemo hook as a caching mechanism. Let's say we have a
          component where we have declared a state and done some mathematical
          calculations. Let's say we also have another state that stores some
          other data. If we do not use useMemo hook then when we change the
          state of that another element, it will re render everything and again
          calculate the mathematical expression. But we did not change anything
          inside out mathematical expression. Again, useMemo takes dependency,
          it will only re-render / calculate the data if inside the dependencies
          are changed. If we have a todo list and a square root function inside
          a component, then it is unnecessary to re render the square root
          function every time we add a new item to our todo list. It can store
          the data so we don't have to re render it.
        </p>
      </div>
    </div>
  )
}

export default Blog
