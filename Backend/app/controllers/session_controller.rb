class SessionController < ApplicationController

    post '/login' do
        email = params[:email]
        password = params[:password]

        if (email.present? && password.present?)
            user = User.find_by(email: email)
                if (user && user.authenticate(password))
                session[:user_id] = user.id
                message = {:success => "Logged in successfully"}
                message.to_json()

                    else
                message = {:error => "Invalid email or password"}
                message.to_json()
                end
            else
            message = {:error => "Email and password are required"}
            message.to_json
        end
    end

    post '/logout' do 
        session.delete :user_id
        message = {:success => 'You have now logged out'}
        message.to_json()
    end 
end