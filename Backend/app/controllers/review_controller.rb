class ReviewController < ApplicationController
    get '/reviews' do
        authorize
        reviews = Review.all
        reviews.to_json(include: :username)
    end
    post "/reviews/add_review" do
      authorize
        comment = params[:comment]
        rating = params[:rating]
        username = params[:username]
        if comment.present? && rating.present? && username.present?
          user = User.find_by(username: username)
          if user
            review = Review.create(comment: comment, rating: rating, user_id: user.id)
            if review
              message = { success: "Thank you for the review" }
              message.to_json
            else
              status 406
              message = { error: "Error saving the review" }
              message.to_json
            end
          else
            status 406
            message = { error: "You need to be Logged in to add a review!" }
            message.to_json
          end
        else
          status 406
          message = { error: "Cannot add empty review" }
          message.to_json
        end
      end
    delete "/reviews/delete/:id" do
      authorize
        check_review = Review.exists?(id: params[:id])
        if check_review
            review = Review.find(params[:id])
            review.destroy
            message = { success: "Review deleted" }
            message.to_json
        else
            status 406
            message = { error: "Review does not exist" }
            message.to_json
        end
    end
end