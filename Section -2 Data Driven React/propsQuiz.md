1. What do props help us accomplish?
Props help us to achieve reusability of components


2. How do you pass a prop into a component?

by passing our userdefined parameter with value while calling th component

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   no , for html it has defined some attributes other than that we can't be able to use it


4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}

props.<attribute>


5. What data type is `props` when the component receives it?
object
