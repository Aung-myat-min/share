from socket import *

def createServer():
    serverSocket = socket(AF_INET, SOCK_STREAM)
    try:
        serverSocket.bind(('localhost', 8888))
        serverSocket.listen(5)
        while(1):
            (clientsocket, adderess) = serverSocket.accept()
            rd = clientsocket.recv(5000).decode()
            pieces = rd.split("Nn")
            if (len(pieces) > 0): print(pieces[0])
            data = 'HTTP/1.1 200 OK\r\n'
            data += 'Content-Type: Text/Html; charset = uft-8\r\n'
            data += '\r\n'
            data += '<html><body><h1>This is a fucking web-server written in python.</h1></body></html>\r\n'
            clientsocket.sendall(data.encode())
            clientsocket.shutdown(SHUT_WR)
    
    except KeyboardInterrupt:
        print('\nShutting down...\n')
    except Exception as exc:
        print("Error...\n")
        print(exc)
        
    serverSocket.close()

print('Access http://localhost:8888')
createServer()