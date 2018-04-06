require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'stock_quote'

get '/about' do
  'goodbye to yahoo finance'
end

get '/' do
  erb :index
end

get '/stock_info' do
  #return params.inspect
  redirect to('/') if params[:stock_symbol] == ''

  stock_info = StockQuote::Stock.quote(params[:stock_symbol])
  @price = stock_info.latest_price
  erb :stock_info

end
