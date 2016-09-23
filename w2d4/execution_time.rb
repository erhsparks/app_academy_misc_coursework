def my_min1(list)
  list.each do |el1|
    count = 0
    list.each { |el2| count += 1 if el1 <= el2 }

    return el1 if count == list.length
  end
end
# time complexity == n ** 2

def my_min2(list)
  test_el = list.first
  list.each { |el| test_el = el if el < test_el }

  test_el
end
# time complexity == n

def contiguous_sum1(list)
  sub_arrays = []
  (0...list.length).each do |i|
    (i ... list.length).each { |j| sub_arrays << list[i..j] }
  end

  sums = []
  sub_arrays.each { |array| sums << array.inject(:+) }

  sums.max
end
#time complexity == n ** 3

def contiguous_sum2(list)
  best_sum = list.first
  current_sum = best_sum

  list[1..-1].each do |el|
    if current_sum >= 0
      if el >= 0
        current_sum += el
      else
        best_sum = current_sum

        if current_sum + el < 0
         current_sum = 0
        else
         current_sum += el
        end
      end
    else
      if el >= 0
        current_sum = el
      else
        current_sum = el if el > current_sum
      end
    end
  end
  best_sum = current_sum if current_sum > best_sum

  best_sum
end



def largest_contiguous_subsum2(arr)
  largest = arr.first
  current = arr.first

  return arr.max if arr.all? { |num| num < 0 }

  arr.drop(1).each do |num|
    current = 0 if current < 0
    current += num
    largest = current if current > largest
  end

  largest
end
