Var – Global/function scoped. Will work anywhere in the function even if variable is declared below the actual usage. This is known has “hoisting” where the declaration of the variable will be moved to the top of the function (block?);

Let – Block scoped. A variable declared using let will only exist in the block that it was declared in (and nested blocks). Also the variable cannot be used before the declaration. The space between where block starts and variable is declared is known as “Temporal Dead Zone”. Also when using in a loop it scopes not only in the loop but for each iteration of the loop.

Const – Has the same properties as Let except that the value assigned to it is immutable. Also value must be assigned at declaration. If declared as an object the properties can be changed.

Typically it is the recommended order of using is const > let > var. Const should be used most of the time unless the variable needs to be redefined later (like a loop) in which case let can be used. A lot of people suggest not using var at all but there are some advantages of using it. 
It’s important when declaring variables you choose the one you need not just based on use case but also intent. In some situations var can be useful if you want to signal that the variable will be used throughout the function in multiple blocks. The general idea is that you want to place your variables as close as possible and as far down in scope as possible. This is the same reason it is a bad idea to declare global variables.

Also cannot check existence of a variable declared with let or const using typeof (probably due to them not being hoisted) but this shouldn’t be a problem if following best practices.
