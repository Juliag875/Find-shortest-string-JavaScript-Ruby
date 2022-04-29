# Solution 1 
def find_shortest_string(arr)
  arr.reduce do |shortest, string|
    string.length < shortest.length ? string : shortest
  end
end

# Solution 2
# def find_shortest_string(arr)
#   shortest = arr[0]

#   arr.each do |string|
#     if string.length < shortest.length
#       shortest=string
#   end
# end
#   shortest
# end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string(['flower', 'juniper', 'lily', 'dadelion'])

  # Don't forget to add your own!

  # BENCHMARK HERE
end

# Please add your pseudocode to this file
# And a written explanation of your solution
