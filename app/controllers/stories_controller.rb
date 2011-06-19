class StoriesController < ApplicationController
  
  def my
    @pile = Pile.find_by_serial(params[:pile_id] || session[:pile_id])
    
    if @pile
      session[:pile_id] = @pile.serial;
      @story = @pile.story
      
      if @story
        render :show
      else
        @story = Story.new({
          :pile_id => @pile.id
        })
        render :edit
      end
    end
  end

  # GET /stories/1
  # GET /stories/1.xml
  def show
    @story = Story.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @story }
    end
  end

  # GET /stories/new
  # GET /stories/new.xml
  def new
    @story = Story.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @story }
    end
  end

  # GET /stories/1/edit
  def edit
    @pile = Pile.find_by_serial(session[:pile_id])
    @story = @pile.story
  end

  # POST /stories
  # POST /stories.xml
  def create
    @story = Story.new(params[:story])
    @story.pile_id = Pile.find_by_serial(session[:pile_id]).id

    if @story.save
      redirect_to(my_story_path, :notice => 'Story was successfully created.')
    else
      render :action => "edit"
    end
  end

  # PUT /stories/1
  # PUT /stories/1.xml
  def update
    @story = Story.find(params[:id])

    if @story.update_attributes(params[:story])
      redirect_to(my_story_path, :notice => 'Story was successfully updated.')
    else
      render :action => "edit"
    end
  end

  # DELETE /stories/1
  # DELETE /stories/1.xml
  def destroy
    @story = Story.find(params[:id])
    @story.destroy

    respond_to do |format|
      format.html { redirect_to(stories_url) }
      format.xml  { head :ok }
    end
  end
end
