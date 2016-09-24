require 'byebug'

def better_change(amount, coins)
  return [] if amount == 0

  largest_possible = coins.select { |coin| coin <= amount }.max
  number_largest = amount / largest_possible
  left_over = amount % largest_possible

  change = []
  number_largest.times { change << largest_possible }

  change.concat(better_change(left_over, coins))
end


def greedy_change(amount, coins)
  largest_coin = coins.sort!.pop
  change_left = amount
  change = []

  until change_left < largest_coin
    change << largest_coin
    change_left -= largest_coin
  end

  if change_left == 0
    change
  else
    change.concat(greedy_change(change_left, coins))
  end
end



def merge_sort(arr)
  if arr.length <= 1
    arr
  else
    mid_idx = arr.length / 2
    arr1 = merge_sort(arr[0...mid_idx])
    arr2 = merge_sort(arr[mid_idx..-1])

    sort_merge(arr1, arr2)
  end
end

def sort_merge(r1, r2)
  arr1 = r1.dup
  arr2 = r2.dup
  merged = []

  until arr1.empty? && arr2.empty?
    if arr1.empty?
      merged << arr2.shift
    elsif arr2.empty?
      merged << arr1.shift
    elsif arr1.first < arr2.first
      merged << arr1.shift
    else
      merged << arr2.shift
    end
  end
  merged
end

def bsearch(array, target)
  mid_idx = array.size / 2

  if target == array[mid_idx]
    mid_idx
  elsif target < array[mid_idx]
    bsearch(array[0...mid_idx], target)
  else
    mid_idx + bsearch(array[mid_idx..-1], target)
  end
end


def fib(num)
  if num < 1
    []
  elsif num == 1
    [1]
  elsif num == 2
    fib(num - 1) << 1
  else
    fib_array = fib(num - 1)
    fib_array << (fib_array[-2] + fib_array[-1])
  end
end


class Array
  def deep_dup
    self.map do |el|
      if el.is_a?(Array)
        el.deep_dup
      else
        el
      end
    end
  end
end


def exp1(base, power)
  if power < 0
    1 / exp1(base.to_f, power.abs)
  elsif power == 0
    1
  else
    base * exp1(base, power - 1)
  end
end

def exp2(base, power)
  if power < 0
    1 / exp2(base.to_f, power.abs)
  elsif power == 0
    1
  elsif power == 1
    base
  elsif power.even?
    new_base = exp2(base, power / 2)
    new_base * new_base
  else
    new_base = exp2(base, (power - 1) / 2)
    base * new_base * new_base
  end
end


def range(range_start, range_end)
  if range_end < range_start
    []
  elsif range_end == range_start
    [range_start]
  else
    [range_start] + range(range_start + 1, range_end)
  end
end


def range_iterative(r_start, r_end)
  if r_end < r_start
    []
  else
    range_array = [r_start]
    (r_end - r_start).times do |num|
      num += 1
      range_array << r_start + num
    end
    range_array
  end
end
