require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! if @count >= num_buckets

    @count += 1
    self[num.hash] << num
  end

  def remove(num)
    self[num.hash].delete(num)
  end

  def include?(num)
    self[num.hash].include?(num)
  end

  private

  def [](num)
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    temp = Array.new(@count * 2) { [] }

    @store.each do |bucket|
      bucket.each { |el| temp[el % temp.length] << el }
    end

    @store = temp
  end
end
