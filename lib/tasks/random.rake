desc "publish some random piles"
task :publish_random => :environment do
  Pile.unpublished.order('RANDOM()').limit(100).update_all({:published => true})
end