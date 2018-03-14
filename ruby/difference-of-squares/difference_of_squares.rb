class Squares
  def initialize(number)
    @size = number
  end

  def square_of_sum
    sum = 0
    1.upto(@size) {|x| sum += x}
    square = sum**2
  end

  def sum_of_squares
    sum = 0
    1.upto(@size) {|x| sum += x**2}
    sum
  end

  def difference
    square_of_sum - sum_of_squares
  end
end

module BookKeeping
  VERSION = 4
end
