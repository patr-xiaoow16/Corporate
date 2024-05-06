import json

input_filename = "uploaded_files/dupont_predictdata.json"
output_filename = "uploaded_files/formatted_dupont_data.json"


def transform_data(data):
    result = []
    for year_data in data['dupont']:
        year = year_data['年份']
        for metric in year_data['结果']:
            result.append({
                "Date": f"{year}",
                "series": metric['label'],
                "value": metric['value']
            })
    return result


with open(input_filename, "r", encoding="utf-8") as input_file:
    dupont_data = json.load(input_file)

# 转换
formatted_data = transform_data(dupont_data)


with open(output_filename, "w", encoding="utf-8") as output_file:
    json.dump(formatted_data, output_file, ensure_ascii=False, indent=4)


print(f"Formatted data has been saved to {output_filename}.")
