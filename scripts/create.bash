heroku create &&
heroku apps:rename $1 &&
git remote remove heroku &&
heroku git:remote -a $1 &&
git push heroku
