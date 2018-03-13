class Hamming
  def self.compute(string1, string2)
    raise ArgumentError if string1.length != string2.length

    letters1 = string1.split("")

    hamming_distance = 0
    letters1.each_with_index do |letter, index|
      hamming_distance += 1 if letter != string2[index]
    end

    hamming_distance
  end
end

module BookKeeping
  VERSION = 3
end
