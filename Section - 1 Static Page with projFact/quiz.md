1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?
into index.html
2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
something list element(h1,length,Hello World)

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
Multiple lines , react always gets a single section meaning single element so to use multiple
tags , sections or elements , we can use main,section,div or <> tags

4. What does it mean for something to be "declarative" instead of "imperative"?
declarative means , we only declare things that the compiler will understand by itself

imperative means that we need declare each and every instructions of the code

5. What does it mean for something to be "composable"?
we can be able to make a large code into single file , which can be resused by us later in anypart
 of the code base
