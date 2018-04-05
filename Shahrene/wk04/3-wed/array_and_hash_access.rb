Array and Hash access

A. Given the following data structure:
a = ["Anil", "Erik", "Jonathan"]

How would you return the string "Erik"?

a.at(1)

How would you add your name to the array?

a.push("Shahrene")

B. Given the following data structure:
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

How would you return the string "One"?

h[1]

How would you return the string "Two"?

h[:two]

How would you return the number 2?

h["two"]

How would you add {3 => "Three"} to the hash?

h[3] = "Three"

How would you add {:four => 4} to the hash?

h[:four] = 4

C. Given the following data structure:
is = {true => "It's true!", false => "It's false"}

What is the return value of is[2 + 2 == 4]?

"It's true!"

What is the return value of is["Erik" == "Jonathan"]?

"Its false"

What is the return value of is[9 > 10]?

"Its false"

What is the return value of is[0]?

nil

What is the return value of is["Erik"]?

nil

D. Given the following data structure:
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
How would you access Jonathans Twitter handle (i.e. the string "tronathan")?

users["Jonathan"][:twitter]

How would you add the number 7 to Eriks favorite numbers?

users["Erik"][:favorite_numbers].push(7)

How would you add yourself to the users hash?

users["Shahrene"] = { twitter: "Shahrene"}

How would you return the array of Eriks favorite numbers?

users["Erik"][:favorite_numbers]

How would you return the smallest of Eriks favorite numbers?

users["Erik"][:favorite_numbers].min

How would you return an array of Anils favorite numbers that are also even?

users["Anil"][:favorite_numbers].select do |num|
  num.even?
  end

How would you return an array of the favorite numbers common to all users?

users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers] & users["Jonathan"][:favorite_numbers]

How would you return an array containing all users favorite numbers, sorted, and excluding duplicates?

allUsers = ["Erik"] + ["Anil"] + ["Jonathan"].sort.uniq
