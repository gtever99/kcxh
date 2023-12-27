import * as echarts from "echarts";
// @ts-ignore
import chinaMap from "@/assets/json/china.json";

/**
 * 横向柱状图
 * @param targetId 要渲染的元素的ID
 */
export default (targetId: string) => {
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
  const data = [
    {
      name: "重庆",
      value: 0,
      userNum: 22
    },
    {
      name: "云南",
      value: 0,
      userNum: 11
    },
    {
      name: "辽宁",
      value: 0,
      userNum: 513
    },
    {
      name: "黑龙江",
      value: 0,
      userNum: 31343
    },
    {
      name: "广西",
      value: 0,
      userNum: 143
    },
    {
      name: "甘肃",
      value: 0,
      userNum: 13
    },
    {
      name: "山西",
      value: 0,
      userNum: 3543
    },
    {
      name: "陕西",
      value: 0,
      userNum: 134
    },
    {
      name: "吉林",
      value: 0,
      userNum: 463
    },
    {
      name: "贵州",
      value: 0,
      userNum: 567
    },
    {
      name: "新疆",
      value: 0,
      userNum: 42
    },
    {
      name: "青海",
      value: 0,
      userNum: 436
    },
    {
      name: "西藏",
      value: 0,
      userNum: 543
    },
    {
      name: "四川",
      value: 0,
      userNum: 432
    },
    {
      name: "宁夏",
      value: 0,
      userNum: 778
    },
    {
      name: "海南",
      value: 0,
      userNum: 996
    },
    {
      name: "台湾",
      value: 0,
      userNum: 52
    },
    {
      name: "香港",
      value: 0,
      userNum: 542
    },
    {
      name: "澳门",
      value: 0,
      userNum: 75
    },
    {
      name: "上海",
      value: 20,
      userNum: 274
    },
    {
      name: "安徽",
      value: 20,
      userNum: 78
    },
    {
      name: "江苏",
      value: 20,
      userNum: 542
    },
    {
      name: "浙江",
      value: 20,
      userNum: 3435
    },
    {
      name: "北京",
      value: 20,
      userNum: 24
    },
    {
      name: "天津",
      value: 10,
      userNum: 42
    },
    {
      name: "河北",
      value: 10,
      userNum: 3445
    },
    {
      name: "河南",
      value: 10,
      userNum: 78
    },
    {
      name: "内蒙古",
      value: 10,
      userNum: 75
    },
    {
      name: "湖南",
      value: 10,
      userNum: 54
    },
    {
      name: "山东",
      value: 10,
      userNum: 68
    },
    {
      name: "江西",
      value: 10,
      userNum: 46
    },
    {
      name: "湖北",
      value: 10,
      userNum: 354
    },
    {
      name: "福建",
      value: 10,
      userNum: 435
    },
    {
      name: "广东",
      value: 10,
      userNum: 7968
    }
  ];

  const flag = document.body.offsetWidth > 1000;

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
        return `
                <div style="display: flex;">
                  <p style="position: relative; margin: 0 0 5px 5px">${params.marker}</p>
                  <div>
                    <div>
                      <p>${params.data.name}</p>
                    </div>
                    <ul>
                      <li style="list-style: initial; margin-left: 20px">用户数：${params.data.userNum}</li>
                      <li style="list-style: initial; margin-left: 20px">效率：${params.data.value}</li>
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
