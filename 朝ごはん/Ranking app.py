import mysql.connector
from datetime import datetime, timedelta

def get_total_ranking():
    """通算ランキングを取得"""
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database='asagohan'
        )

        cursor = connection.cursor()

        # 通算ポイントランキングを取得
        query = '''
        SELECT pr.name, SUM(p.point) AS total_points 
        FROM point p 
        JOIN profile pr ON p.user_id = pr.user_id 
        GROUP BY pr.name 
        ORDER BY total_points DESC 
        LIMIT 10
        '''
        cursor.execute(query)
        results = cursor.fetchall()
        
        # 通算ランキングを表示
        print("通算ランキング (ベスト10):")
        print("順位 | 名前 | ポイント")
        for rank, row in enumerate(results, start=1):
            print(f"{rank}   | {row[0]}  | {row[1]}")

    except mysql.connector.Error as err:
        print(f"エラー: {err}")
    finally:
        if 'connection' in locals() and connection.is_connected():
            connection.close()

def get_weekly_ranking():
    """週間ランキングを取得"""
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database='asagohan'
        )

        cursor = connection.cursor()

        # 現在の日時から1週間前の日付を計算
        now = datetime.now()
        start_date = now - timedelta(weeks=1)

        # 過去1週間のポイントランキングを取得
        query = '''
        SELECT pr.name, SUM(p.point) AS weekly_points 
        FROM point p 
        JOIN profile pr ON p.user_id = pr.user_id 
        WHERE p.date >= %s 
        GROUP BY pr.name 
        ORDER BY weekly_points DESC 
        LIMIT 10
        '''
        cursor.execute(query, (start_date,))
        results = cursor.fetchall()
        
        # 週間ランキングを表示
        print("週間ランキング (ベスト10):")
        print("順位 | 名前 | ポイント")
        for rank, row in enumerate(results, start=1):
            print(f"{rank}   | {row[0]}  | {row[1]}")

    except mysql.connector.Error as err:
        print(f"エラー: {err}")
    finally:
        if 'connection' in locals() and connection.is_connected():
            connection.close()

def get_monthly_ranking():
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
        
        # 月間ランキングを表示
        print("月間ランキング (ベスト10):")
        print("順位 | 名前 | ポイント")
        for rank, row in enumerate(results, start=1):
            print(f"{rank}   | {row[0]}  | {row[1]}")

    except mysql.connector.Error as err:
        print(f"エラー: {err}")
    finally:
        if 'connection' in locals() and connection.is_connected():
            connection.close()

# 通算ランキングを取得
get_total_ranking()

# 週間ランキングを取得
get_weekly_ranking()

# 月間ランキングを取得
get_monthly_ranking()
