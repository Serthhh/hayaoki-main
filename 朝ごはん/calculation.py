
def add_regular_point():
    """月間ランキングを取得"""
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database='asagohan'
        )

        cursor = connection.cursor()

        # 現在の日時から1ヶ月前の日付を計算
        now = datetime.now()
        start_date = now - timedelta(days=30)

        # 過去1ヶ月のポイントランキングを取得
        query = '''
        SELECT pr.name, SUM(p.point) AS monthly_points 
        FROM point p 
        JOIN profile pr ON p.user_id = pr.user_id 
        WHERE p.date >= %s 
        GROUP BY pr.name 
        ORDER BY monthly_points DESC 
        LIMIT 10
        '''
        cursor.execute(query, (start_date,))
        results = cursor.fetchall()