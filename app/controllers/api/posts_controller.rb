class Api::PostsController < ApplicationController
  before_action :set_blog

  def index
    render json: @blog.posts
  end

  private 
  
    def set_blog 
      @blog = Blog.find(params[:blog_id])
    end
end
