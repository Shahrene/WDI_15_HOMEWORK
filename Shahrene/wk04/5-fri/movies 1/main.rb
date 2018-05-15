require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do
  redirect to('/index')
end

get '/index' do
  erb :index
end

get '/omdb' do

  url = "http://omdbapi.com/?apikey=2f6435d9&t=#{params[:name]}"
  result = HTTParty.get(url)
  @movie_poster = result.parsed_response["Poster"]
  @movie_title = result.parsed_response["Title"]
  @movie_year = result.parsed_response["Year"]
  @movie_plot = result.parsed_response["Plot"]
  erb :omdb

  end
