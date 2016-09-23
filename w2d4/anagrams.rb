def first_anagram?(str1, str2)
  anagrams = []
  anagrams1 = str1.chars.permutation.to_a

  anagrams1.include?(str2.chars)
end
#time complexity == n!

def second_anagram?(str1, str2)
  return false unless str1.length == str2.length

  a1 = str1.chars
  a2 = str2.chars

  a1.each_with_index do |l1, i|
    a2.each_with_index do |l2, j|
      a1[i], a2[j] = "", "" if l1 == l2
    end
  end

  a1 == a2
end
# time complexity == n ** 2

def third_anagram?(str1, str2)
  str1 = str1.chars.sort
  str2 = str2.chars.sort

  str1 == str2
end
# time complexity == n * log(n)

def fourth_anagram?(str1, str2)
  h1, h2 = Hash.new {0}, Hash.new {0}

  str1.each_char do |char|
    h1.has_key?(char) ? h1[char] += 1 : h1[char] = 1
  end

  str2.each_char do |char|
    h2.has_key?(char) ? h2[char] += 1 : h2[char] = 1
  end

  h1 == h2
end
# time complexity == n
