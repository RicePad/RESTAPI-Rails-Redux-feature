class Api::V1::TasksController < ApplicationController
	skip_before_action :verify_authenticity_token


	def index
		@tasks = Task.order("created_at DESC")
		render json: @tasks
	end

	def show
		@task = Task.find(params[:id])
		render json: @task
	end

	def create 
		@task = Task.create(task_params)
		render json: @task

	end

	def update
		@task = Task.find(params[:id])
		@task.update_attributes(task_params)
		render json: @task

	end

	def destroy
		@task = Task.find(params[:id])
		if @task.destroy
			head :no_content, status: :ok
		else
			render json: @task.errors, status: :unprocessable_entity
		end
	end

	private

		def task_params 
      		params.require(:task).permit(:title, :body)
		end
end
 