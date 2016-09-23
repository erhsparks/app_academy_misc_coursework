def bad_two_sum? (array, target)
  subs = array.permutation(2).to_a

  subs.any? { |arr| arr.first + arr.last == target }
end
# time complexity == n!

def okay_two_sum?(array, target)
  return false if array.include?(target / 2.0) &&
                        array.count(target / 2.0) == 1

  array.sort!
  array.any? do |el|
    diff = target - el
    array.bsearch {|num| num == diff } == diff
  end
end
# time complexity == n * log(n)

def pair_sum?(array, target)
  return false if array.include?(target / 2.0) &&
                        array.count(target / 2.0) == 1

  pairs = (0...array.length).zip(array)
  hash = Hash[pairs]

  array.any? { |el| hash.has_value?(target - el) }
end
# time complexity == n
