# Copy My Code

## A little tool for kinesthetic learners

#### **Props**
`props.children` : Your example code for the student to copy, see example below for formatting.
>formatting, spacing, and everything else here might take some playing with, I'm working on this primarily.

`props.title` : String title to display, optional.
>simple title at the top per section. Images will be added soon too.

#### **Intro**
This is a really simple tool for practicing typing out pre-written code, almost more of an exersize for me than for intro learners.

I work with kids primarily so you need training wheels like this, it's a tool to introduce certain vocab words and how to spell them, as well as give kids an idea what braces and semicolons do. I'm hoping this will help those kinesthetic learners and make something that should be relatively difficult to learn (Java for Minecraft) much easier. Also it'll help answer all those questions they're too afraid to ask; do I put a space between equals signs? what is a semicolon? how do you keep track of curly-braces vs parantheses vs brackets?

I plan on adding more features, like validating each line and having some interactivity linked to that, but for now I just want to be able to use it so it'll be ~ usable ~

- [x] Basic functionality
- [ ] Open styling
- [ ] Line-by-line validation
- [ ] Interactive validated content

[Github Repo](https://github.com/devinlizardi/copy-my-code)  
[npm Package](https://www.npmjs.com/package/copy-my-code)

#### **Example**
```
<CopyCode title="Testing Write">
    ` class Main {
        public static void main(String[] args) {
            System.out.println("Hello World!");
        }
    }`
</CopyCode>
```
<img src="https://github.com/devinlizardi/copy-my-code/blob/master/img/Screen%20Shot%202020-11-16%20at%2011.03.01%20AM.png" width="50%" height="50%" alt="output image">
