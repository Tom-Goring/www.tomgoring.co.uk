cd ~/www.tomgoring.co.uk/
docker build -t httpd-docker .
docker run -dit --name httpd -p 8080:80 \
	-v ~/www.tomgoring.co.uk/config/apache2/:/etc/apache2 \
	-v ~/www.tomgoring.co.uk/www/:/var/www/ \
	httpd-docker
cd -
#-v ~/www.tomgoring.co.uk/config/php/:/etc/php
