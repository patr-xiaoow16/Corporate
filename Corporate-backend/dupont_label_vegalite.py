# 指标单独的视图生成
import json


def read_data_from_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)


def create_vega_lite_configs(data_json):
    labels = set(result['label'] for year_data in data_json['dupont'] for result in year_data['结果'])
    configs = {}
    for label in labels:
        data_list = []
        for year_data in data_json['dupont']:
            year = year_data['年份']
            for result in year_data['结果']:
                if result['label'] == label:
                    data_list.append({'年份': year, '标签': label, '值': result['value']})
        
        vega_lite_data = json.dumps(data_list, ensure_ascii=False, indent=2)
        vega_lite_config = f"""
{{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Visualization of {{label}} over the years with tooltips",
  "width": "container",  
  "height": "container", 
  "data": {{
    "values": {vega_lite_data}
  }},
  "mark": "line",
  "encoding": {{
    "x": {{
      "field": "年份",
      "type": "ordinal",
      "title": "年份",
      "axis": {{ "labelOverlap": "parity" }} 
    }},
    "y": {{
      "field": "值",
      "type": "quantitative",
      "title": "{label}的值",
      "format": ".2%"
    }},
    "tooltip": [
      {{"field": "年份", "type": "ordinal", "title": "Year"}},
      {{"field": "值", "type": "quantitative", "title": "Value", "format": ".2%"}}
    ]
  }},
  "selection": {{
    "brush": {{ "type": "interval", "encodings": ["x"] }}
  }},
  "transform": [
    {{
      "filter": {{"selection": "brush"}}
    }}
  ]
}}
"""

        configs[label] = vega_lite_config
    return configs


def save_configs_to_files(configs, directory):
    import os
    if not os.path.exists(directory):
        os.makedirs(directory)
    for label, config in configs.items():
        file_path = os.path.join(directory, f"{label}.json")
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(config)
        print(f"Configuration for {label} saved to {file_path}")
        
def save_configs_to_file_vega(configs, file_path):
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(configs, file, ensure_ascii=False, indent=4)
    print(f"Configuration saved to {file_path}")


data_file_path = 'uploaded_files/dupont_data.json'
data_json = read_data_from_file(data_file_path)
configs = create_vega_lite_configs(data_json)
save_configs_to_files(configs, 'uploaded_files/dupont_vega')  
save_configs_to_file_vega(configs, 'uploaded_files/dupont_vega_configs.json')
