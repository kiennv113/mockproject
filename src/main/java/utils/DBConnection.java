package utils;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class DBConnection {
	private static DBConnection instance;
	private Connection connection;

	private DBConnection() {
		Properties properties = new Properties();

		try {
			properties.load(DBConnection.class.getResourceAsStream("/DBConfig.properties"));

			String driver = properties.getProperty("driver");
			String url = properties.getProperty("url");
			String userName = properties.getProperty("userName");
			String password = properties.getProperty("password");

			Class.forName(driver);

			connection = DriverManager.getConnection(url, userName, password);
		} catch (IOException | ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
	}

	/**
	 * Get the connection from the instance
	 * 
	 * @return the connection
	 */
	public Connection getConnection() {
		return connection;
	}
	
	/**
	 * Create new instance which connects with the database
	 * 
	 * @return the instance
	 * @throws SQLException
	 */
	public static DBConnection getInstance() throws SQLException {
		if (instance == null || instance.getConnection().isClosed()) {
			instance = new DBConnection();
		}
		return instance;
	}
}
