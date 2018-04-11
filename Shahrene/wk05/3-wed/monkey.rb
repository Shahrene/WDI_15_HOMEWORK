

class Monkey


    def initialize(name, species)
      @name = name
      @species = species
      @foods_eaten = []
    end

    def eat(food)
      @foods_eaten << food
      #need to turn array results into string.
    end

    def introduce
      puts "Hi my name is #{@name}. I am a #{@species} and I had #{@foods_eaten} for breakfast"
    end
end
