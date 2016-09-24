require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    num = num.hash

    resize! if @count >= @store.length

    @store[num % @store.length] << num
    @count += 1
  end

  def remove(num)
    num = num.hash

    self[num].delete(num)
  end

  def include?(num)
    num = num.hash

    self[num].include?(num)
  end

  private

  def [](num)
    @store[num % @store.length]
  end

  def num_buckets
    @store.length
  end

  def resize!
    temp = Array.new(@count * 2) {[]}

    @store.each do |bucket|
      bucket.each do |el|
        temp[el % temp.length] << el
      end
    end
    @store = temp
  end
end
