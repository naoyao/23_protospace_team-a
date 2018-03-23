class CommentsController < ApplicationController
  def new
    @comment = Commnet.new
  end
  def create
    @comment =Comment.create(comment_params)
    respond_to do |format|
      format.html{redirect_to :back}
      format.json
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:text).merge(prototype_id: params[:prototype_id], user_id: current_user.id)
  end
end
