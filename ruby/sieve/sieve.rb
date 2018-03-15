class Sieve
  def initialize(number)
    @limit = number
  end

  def primes
    range = (2..@limit).to_a

    i = 0
    while i < range.length
      break if range[i+1].nil?
      range[(i+1)..-1].each_with_index { |value, index|
        range.delete_at(index) if value % range[i] == 0
        i += 1
      }
    end

    return range
  end
end

module BookKeeping
  VERSION = 1
end
