package com.bluemobi.util;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;


/**
 * socket 线程类
 * 
 * @author huajian
 */
public class SocketThread extends Thread {
	Logger log = Logger.getLogger(SocketThread.class);
	private ServerSocket serverSocket = null;

	public SocketThread(ServerSocket serverScoket) {
		try {
			if (null == serverSocket) {
				this.serverSocket = new ServerSocket(8088);
				System.out.println("socket start");
			}
		} catch (Exception e) {
			log.info("SocketThread创建socket服务出错");
			e.printStackTrace();
		}

	}

	public void run() {
		//!this.isInterrupted()
		while (!this.isInterrupted()) {
			if(serverSocket.isClosed()) {
				try {
					serverSocket = new ServerSocket(8088);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			try {
				Socket socket = serverSocket.accept();

				if (null != socket && !socket.isClosed()) {
					// 处理接受的数据
					new SocketOperate(socket).start();
				}
				
				//socket.setSoTimeout(30000);

			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	public void closeSocketServer() {
		try {
			if (null != serverSocket && !serverSocket.isClosed()) {
				serverSocket.close();
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
