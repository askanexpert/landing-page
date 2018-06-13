git remote remove heroku &&
heroku git:remote -a $1 &&
git push heroku
