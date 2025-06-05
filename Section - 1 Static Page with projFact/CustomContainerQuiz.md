1. What is a React component?
It is an reusable property , just like function we can be able to reuse the same set of code again and again by callinf

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
Component name always start with Upper case letter MyComponent

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
to call the component , we use htmt kind of tags to call the component

<Header/> is the correct form
