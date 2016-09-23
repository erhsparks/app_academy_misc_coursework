def windowed_max_range1(array, window_size)
  current_max_range = nil

  (0..array.length - window_size).each do |i|
    window = array[i...i + window_size]
    range = window.max - window.min

    if current_max_range.nil? || current_max_range < range
      current_max_range = range
    end
  end

  current_max_range
end
# time complexity == n ** 2

def windowed_max_range(array, window_size)
  stack = StackQueue.new

  array[0...window_size].each do |el|
    stack.enqueue(el)
  end

  range = stack.max - stack.min

  array[window_size..-1].each do |el|
    # require 'byebug'; debugger
    stack.dequeue
    stack.enqueue(el)
    current_max_range = stack.max - stack.min
    range = current_max_range if current_max_range > range
  end

  range
end

class StackQueue
  def initialize
    @stack1 = MyStack.new
    @stack2 = MyStack.new
  end

  def enqueue(item)
    @stack1.push(item)
  end

  def dequeue
    @stack2.push(@stack1.pop) until @stack1.empty?
    item = @stack2.pop
    @stack1.push(@stack2.pop) until @stack2.empty?

    item
  end

  def size
    @stack1.size
  end

  def empty?
    @stack1.empty?
  end

  def max
    @stack1.max
  end

  def min
    @stack1.min
  end
end

class MyStack
  def initialize
    @store = []
    @max = []
    @min = []
  end

  def pop
    item = @store.pop unless @store.empty?

    @max.pop if @max.last == item
    @min.pop if @min.last == item
  end

  def push(item)
    @max << item if @max.empty? || @max.last < item
    @min << item if @min.empty? || @min.last > item

    @store.push(item)
  end

  def peek
    @store.last
  end

  def size
    @store.size
  end

  def empty?
    @store.empty?
  end

  def max
    @max.last
  end

  def min
    @min.last
  end
end

class MyQueue
  def initialize
    @store = []
  end

  def enqueue(item)
    @store << item
  end

  def dequeue
    @store.shift
  end

  def peek
    @store.first
  end

  def size
    @store.size
  end

  def empty?
    @store.empty?
  end
end
