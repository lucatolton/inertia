FROM gitpod/workspace-full
USER gitpod

# Install Heroku CLI
RUN curl https://cli-assets.heroku.com/install-ubuntu.sh | sudo sh