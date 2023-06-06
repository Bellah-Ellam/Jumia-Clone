class Review < ActiveRecord::Base
    belongs_to :product
    belongs_to :user
    def serializable_hash(options = nil)
        super(options.merge(include: :user))
    end
end
