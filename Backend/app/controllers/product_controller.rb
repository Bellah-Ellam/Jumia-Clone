class ProductController < ApplicationController
    get '/products' do 
        product = Product.all
        product.to_json
    end

    get '/product/:id' do
        product = Product.find(params[:id])
        product.to_json
    end

end
