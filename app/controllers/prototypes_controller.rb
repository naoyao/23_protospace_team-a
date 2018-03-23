class PrototypesController < ApplicationController
  before_action :set_prototype, only: [:show, :edit, :update]

  def index
    # @prototypes = Prototype.all
    @prototypes = Prototype.order("created_at DESC").page(params[:page]).per(10)
  end

  def new
    @prototype = Prototype.new
    @prototype.captured_images.build
  end

  def create
    @prototype = Prototype.new(prototype_params)
    if @prototype.save
      redirect_to :root, notice: 'New prototype was successfully created'
    else
      redirect_to ({ action: "new" }), alert: 'YNew prototype was unsuccessfully created'
    end
  end

  def show
    @comment = Comment.new
    @prototypes = Prototype.find(params[:id])
    @comments = @prototypes.comments
  end

  def destroy
    prototype = Prototype.find(params[:id])
    prototype.destroy if prototype.user_id == current_user.id
    redirect_to :action => 'index'
  end

  def edit
  end

  def update
    @prototype.update(prototype_params) if @prototype.user_id == current_user.id
    redirect_to :root, notice: 'Prototype was successfully update'
  end

  private

  def set_prototype
    @prototype = Prototype.find(params[:id])
  end

  def prototype_params
    params.require(:prototype).permit(
      :title,
      :catch_copy,
      :concept,
      :user_id,
      :image,
      :image_cache,
      captured_images_attributes: [:content, :status, :id]
    )
  end
end
