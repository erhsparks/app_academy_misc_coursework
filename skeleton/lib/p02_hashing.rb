class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    a = self.inject("") do |sum , el|
      el = el.hash if el.is_a?(Array) || el.is_a?(Hash)

      sum + (el.ord.to_s)
    end

    a.to_i ^ 101010
  end
end

class String
  def hash
    a = self.chars.inject("") do |sum , el|
      el = el.hash if el.is_a?(Array) || el.is_a?(Hash)

      sum + (el.ord.to_s)
    end

    a.to_i ^ 101010
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    a = self.keys + self.values
    a = a.map { |el| el.to_s }.sort

    a.hash
  end
end
