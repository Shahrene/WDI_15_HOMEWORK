require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

require_relative 'db_config'
require_relative 'models/movie'

get '/' do
  redirect to('/index')
end

get '/index' do
  erb :index
end

get '/omdb_search' do
  url = "http://omdbapi.com/?apikey=2f6435d9&s=#{params[:name]}"
  result = HTTParty.get(url)
  @search = result.parsed_response["Search"]
  erb :omdb_search
end


get '/movie' do
  url = "http://omdbapi.com/?apikey=2f6435d9&t=#{params[:name]}"
  result = HTTParty.get(url)
  @movie_poster = result.parsed_response["Poster"]
  @movie_title = result.parsed_response["Title"]
  @movie_year = result.parsed_response["Year"]
  @movie_plot = result.parsed_response["Plot"]
  @movie_genre = result.parsed_response["Genre"]
  @movie_rated = result.parsed_response["Rated"]
  @movie_actors = result.parsed_response["Actors"]
  @movie_runtime = result.parsed_response["Runtime"]
  erb :movie
end
