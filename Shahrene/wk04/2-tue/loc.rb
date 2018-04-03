
puts('Enter the name of the file: ')

filename = gets.chomp
count = IO.readlines("filename")

puts("#{count} lines in #{filename}")
