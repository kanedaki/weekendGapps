require 'sinatra/base'
require 'json'

class Web < Sinatra::Base
  set :public_folder, './public'
  set :static, true

  get '/' do
    erb :index , :layout => :home_layout
  end
  get '/calendar' do
    erb :calendar, :layout => :home_layout
  end

  get '/plus' do
    erb :plus, :layout => :home_layout
  end

end
