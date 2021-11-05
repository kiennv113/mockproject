package utils;


public class SQLCommand {
	public final static String LOGIN = "SELECT * FROM [USER] WHERE [EMAIL] = ? AND [PASSWORD] = ?";
	public final static String REGISTER= "INSERT INTO [USER]([USER_NAME], [PASSWORD], [EMAIL]) VALUES(?, ?, ?)";
	public static final String GET_ALL_CONTENT = "SELECT * FROM CONTENT";
	public static final String ADD_CONTENT = "INSERT INTO [CONTENT]([AUTHOR_ID], [TITLE], [BRIEF], [CONTENT], [CREATED_DATE]) VALUES (?, ?, ?, ?, ?)";
	public static final String UPDATE_USER = "UPDATE [USER] SET [FIRST_NAME] = ?, [LAST_NAME] = ?, [PHONE] = ? , [DESCRIPTION] = ? WHERE [USER_ID] = ?";
	public static final String GET_USER_BY_PHONE = "SELECT * FROM [USER] WHERE [PHONE] = ? AND [USER_ID] != ?";
	public static final String GET_CONTENT_BY_PAGE = "SELECT * FROM (SELECT ROW_NUMBER() OVER (ORDER BY [CONTENT_ID] ASC) AS rn, * FROM [CONTENT]) AS x WHERE rn BETWEEN ?*?-2 and ?*?";
	public static final String COUNT_CONTENT = "SELECT COUNT(*) AS [TOTAL] FROM [CONTENT]";
	public static final String GET_CONTENT_BY_ID = "SELECT * FROM CONTENT  WHERE CONTENT_ID = ?";
	public static final String UPDATE_CONTENT = "UPDATE [CONTENT] SET [TITLE]= ?, [BRIEF] = ?, [CONTENT]= ?, [CREATED_DATE] = ? WHERE [CONTENT_ID] = ?";
	public static final String DELETE_CONTENT = "DELETE FROM [CONTENT] WHERE [CONTENT_ID] = ?";
}
