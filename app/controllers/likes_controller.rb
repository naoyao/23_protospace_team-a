class LikesController < ApplicationController
  def create
    @like = Like.new(user_id: current_user.id, prototype_id: params[:prototype_id])
    if @like.save
      redirect_to controller: :prototypes, action: :show, id: params[:prototype_id]
    else
      flash:'できてません'
    end
  end

  def destroy
    like = Like.find(params[:id])
    like.destroy
    redirect_to controller: :prototypes, action: :show, id: params[:prototype_id]
  end
end
