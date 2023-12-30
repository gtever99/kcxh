import * as echarts from "echarts";
// @ts-ignore
import chinaMap from "@/assets/json/china.json";
import { IChoolGroupItem } from "@/apis/type.t";

/**
 * 横向柱状图
 * @param targetId 要渲染的元素的ID
 * @param paramsData
 */
export default (targetId: string, paramsData: IChoolGroupItem[]) => {
  if (!paramsData) return;
  const chartDom = document.getElementById(targetId)!;
  const myChart = echarts.init(chartDom);
  echarts.registerMap("china", {
    UTF8Encoding: false,
    UTF8Scale: 0,
    // @ts-ignore
    features: undefined,
    specialAreas: undefined,
    svg: undefined,
    type: "FeatureCollection",
    geoJSON: chinaMap
  });

  const flag = document.body.offsetWidth > 1000;
  const data: {
    name: string;
    value: number;
  }[] = [];
  const hashNames = new Set();
  paramsData.map(v => {
    data.push({
      name: v.province,
      value: v.province_count
    });
    hashNames.add(v.province);
  });
  chinaMap.features.map((v: any) => {
    const name = v.properties.name;
    if (!hashNames.has(name)) {
      data.push({
        name: name,
        value: 0
      });
    }
  });

  const option = {
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      inRange: {
        color: ["#fff", "#ff0000"] // 自定义颜色列表
      }
    },
    tooltip: {
      trigger: "item",
      formatter: function (params: any) {
        if (!params || !params.data || params.data.value === 0) return "";
        return `
                <div style="display: flex;">
                  <p style="position: relative; margin: 0 0 5px 5px">${params.marker}</p>
                  <div>
                    <div>
                      <p>${params.data.name}</p>
                    </div>
                    <ul>
                      <li style="list-style: initial; margin-left: 20px">院校数量：${params.data.value}</li>
                    </ul>
                  </div>
                </div>`;
      }
    },
    series: {
      type: "map",
      mapType: "china",
      data: data,
      zoom: 1.25,
      roam: flag, // 启用拖动和缩放功能
      label: {
        show: true, // 显示省份名称
        textStyle: {
          fontSize: flag ? 10 : 7 // 设置字号
        }
      }
    }
  };

  option && myChart.setOption(option);
};
