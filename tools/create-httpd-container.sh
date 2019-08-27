docker run -dit --name httpd -p 8080:80 \
	-v ~/website/src/:/usr/local/apache2/htdocs/ \
	-v ~/website/images/:/usr/local/apache2/images/ \
	-v ~/website/icons/:/usr/local/apache2/icons/ \
	httpd-docker
