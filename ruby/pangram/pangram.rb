class Pangram
  def self.pangram?(phrase)
    return false if phrase == ''
    # alphabet = 'abcdefghijklmnopqrstuvwxyz'
    alphabet = ('a'..'z')
    alphabet.each { |n| return false if phrase.downcase.include?(n) == false }
    # if it gets to this point:
    return true
  end
end

module BookKeeping
  VERSION = 6
end
