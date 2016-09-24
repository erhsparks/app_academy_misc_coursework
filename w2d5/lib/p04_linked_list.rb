class Link
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end
end

class LinkedList
  include Enumerable
  def initialize
    @head = Link.new(:head, nil)
    @tail = Link.new(:tail, nil)
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail && @tail.prev == @head
  end

  def get(key)
    link = find { |current| current.key == key }

    link.nil? ? nil : link.val
  end

  def include?(key)
    any? { |current| current.key == key }
  end

  def insert(key, val)
    new_link = Link.new(key, val)

    if empty?
      new_link.prev = @head
      @head.next = new_link

      new_link.next = @tail
      @tail.prev = new_link
    elsif include?(key)
      each { |link| link.val = val if link.key == key }
    else
      old_last = @tail.prev
      new_link.prev = old_last
      old_last.next = new_link

      new_link.next = @tail
      @tail.prev = new_link
    end
  end

  def get_neighbors(key)
    link = find { |current| current.key == key }

    link.nil? ? [nil, nil] : [link.prev, link.next]
  end

  def remove(key)
    prev_link, next_link = get_neighbors(key)
    prev_link.next = next_link
    next_link.prev = prev_link
  end

  def each(&prc)
    current = @head.next
    until current == @tail
      prc.call(current)
      current = current.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
