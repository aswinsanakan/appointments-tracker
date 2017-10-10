class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def verify_google_crawler
    render html: 'google-site-verification: google7e2388d998536b22.html'.html_safe
  end
end
