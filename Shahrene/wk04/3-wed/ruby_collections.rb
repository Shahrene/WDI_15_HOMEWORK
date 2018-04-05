planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

Access the second value in planeteers.

planeteers[1];

Add "Heart" to the end of planeteers.

planeteers.push("Heart")

Remove "Captain Planet" from the array (without using pop or shift).

planeteers -["Captain Planet"]

Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = "#{planeteers} + #{rangers}"

Alphabetize the contents of heroes using a method. The Ruby documentation might help.

heroes.sort

Randomize the contents of heroes using a method. The Ruby documentation might help.

heroes.rand

Bonus
Select a random element from heroes using a method. The Ruby documentation might help.

heroes.sample

Select all elements in heroes that begin with "B" using a method. The Ruby documentation might help.

heroes.select {|str| str.start_with?(B)}

Hashes
Initialize a hash called ninja_turtle with the properties name, weapon and radical. They should have values of
"Michelangelo", "Nunchuks" and true respectively.

ninja_turtle = {"name" => "Michelangelo", "weapon" => "Nunchuks", "radical" => true}

Add a key age to ninja_turtle. Set it to whatever numerical value youd like.

ninja_turtle[:"age"] = 18

Remove the radical key-value pair from ninja_turtle.

ninja_turtle.delete("radical")

Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).

ninja_turtle[:"pizza_toppings"] = ["cheese", "pepperoni", "peppers"]

Access the first element of pizza_toppings.

pizza_toppings.at(0)

Produce an array containing all of ninja_turtles keys using a method. The Ruby documentation might help.

array = ninja_turtle.keys

Bonus
Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method.
The Ruby documentation might help.

ninja_turtle.each do
puts "#{key.to_s} is equal to #{value.to_s}"
