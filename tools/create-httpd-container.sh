cd ~/www.tomgoring.co.uk/
docker build -t httpd-docker .
docker run -dit --name httpd -p 8080:80 \
	-v ~/www.tomgoring.co.uk/src/:/usr/local/apache2/htdocs/ \
	-v ~/www.tomgoring.co.uk/images/:/usr/local/apache2/images/ \
	-v ~/www.tomgoring.co.uk/icons/:/usr/local/apache2/icons/ \
	-v ~/www.tomgoring.co.uk/config/:/usr/local/apache2/conf/ \
	httpd-docker
cd -
