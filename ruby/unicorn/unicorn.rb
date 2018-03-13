#http://tutorials.jumpstartlab.com/topics/testing/intro-to-tdd.html

class Unicorn
  attr_reader :name, :color

  def initialize(name, color="white")
    @name = name
    @color = color
  end

# below is replaced by "attr_reader :name, :color"  above
=begin
  def name
    @name
  end

  def color
    @color
  end
=end

  def white?
    color == "white"
  end

  def say(something)
    "**;* #{something} **;*"
  end
end
