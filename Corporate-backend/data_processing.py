import pandas as pd

file_path = 'uploaded_files/indicators.csv'
data = pd.read_csv(file_path)

# 直接打印数据集的信息
print("-------------original_info----------")
data.info()

# 删除完全空的列
data.dropna(axis=1, how='all', inplace=True)

# 将处理后的数据保存到新的CSV文件中
processed_file_path = 'uploaded_files/indicators_processed.csv'
data.to_csv(processed_file_path, index=False)

# 返回已处理文件的路径和数据集的信息
print("-------------processed_file_path-------------",processed_file_path)
data.info()




