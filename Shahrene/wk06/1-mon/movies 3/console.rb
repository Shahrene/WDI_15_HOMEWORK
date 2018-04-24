require 'pry'

require 'active_record'

ActiveRecord::Base.logger = Logger.new(STDERR)

require_relative 'db_config'

require_relative 'models/movie.rb'



binding.pry

puts 'ready for debuggin'
