require 'pry'
require 'to_words'

class Say

  def initialize(number)
    @number = number
    puts @number.to_words
  end
end
