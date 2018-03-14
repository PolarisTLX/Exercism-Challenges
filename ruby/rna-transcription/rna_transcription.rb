class Complement
  def self.of_dna(string)
    output = []
    string.each_char do |char|
      case char
      when 'C' then output << 'G'
      when 'G' then output << 'C'
      when 'T' then output << 'A'
      when 'A' then output << 'U'
      else return ''
      end
    end
    output.join("")
  end
end

module BookKeeping
  VERSION = 4
end
