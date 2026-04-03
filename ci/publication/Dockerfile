FROM ruby:2.6.5

ENV LC_ALL="C.UTF-8"
ENV LANG="en_US.UTF-8"
ENV LANGUAGE="en_US.UTF-8"


RUN gem install bundler:2.3.22

ADD ./Gemfile /srv/Gemfile
ADD ./Gemfile.lock /srv/Gemfile.lock

COPY . /srv

WORKDIR /srv/

RUN ls -la /srv

RUN bundle install

#CMD [ "bundle exec jekyll build --config _config_preview.yml" ]
