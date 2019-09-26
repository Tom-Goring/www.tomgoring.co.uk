'''    Simple socket server using threads
'''
import os
import socket
import sys
HOST = ''   # Symbolic name, meaning all available interfaces
PORT = 3420 # Arbitrary non-privileged port
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print 'Socket created'
#Bind socket to local host and port
try:
    s.bind((HOST, PORT))
except socket.error as msg:
    print 'Bind failed. Error Code : ' + str(msg[0]) + ' Message ' + msg[1]
    sys.exit()
print 'Socket bind complete'
#Start listening on socket
s.listen(10)
print 'Socket now listening'
#now keep talking with the client
while 1:
    #wait to accept a connection - blocking call
    conn, addr = s.accept()
    print 'Connected with ' + addr[0] + ':' + str(addr[1])
    h = 'HTTP/1.1 200 OK\n'

    conn.send("HTTP/1.1 200 OK\n"
    +"Content-Type: text/html\n"
    +"\n" # Important!
    +"Webhook detected successfully!\n");
    conn.close()

    os.chdir('/home/ec2-user/www.tomgoring.co.uk/')
    os.system('git fetch --all')
	os.system('git reset --hard origin/WebAssembly')
s.close()
