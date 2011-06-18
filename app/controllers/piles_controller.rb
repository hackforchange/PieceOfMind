class PilesController < ApplicationController
  # GET /piles
  # GET /piles.xml
  def index
    @piles = Pile.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @piles }
    end
  end

  # GET /piles/1
  # GET /piles/1.xml
  def show
    @pile = Pile.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @pile }
    end
  end

  # GET /piles/new
  # GET /piles/new.xml
  def new
    @pile = Pile.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @pile }
    end
  end

  # GET /piles/1/edit
  def edit
    @pile = Pile.find(params[:id])
  end

  # POST /piles
  # POST /piles.xml
  def create
    @pile = Pile.new(params[:pile])

    respond_to do |format|
      if @pile.save
        format.html { redirect_to(@pile, :notice => 'Pile was successfully created.') }
        format.xml  { render :xml => @pile, :status => :created, :location => @pile }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @pile.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /piles/1
  # PUT /piles/1.xml
  def update
    @pile = Pile.find(params[:id])

    respond_to do |format|
      if @pile.update_attributes(params[:pile])
        format.html { redirect_to(@pile, :notice => 'Pile was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @pile.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /piles/1
  # DELETE /piles/1.xml
  def destroy
    @pile = Pile.find(params[:id])
    @pile.destroy

    respond_to do |format|
      format.html { redirect_to(piles_url) }
      format.xml  { head :ok }
    end
  end
end
