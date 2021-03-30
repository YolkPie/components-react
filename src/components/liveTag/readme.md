## 直播标签组件

props: 
liveData 数据结构
{ 
  code: "preplay", // 直播代码: 枚举值：preplay:预告中 playing:直播中 replay:回放 willPlay:即将开播
  label: "预告中", // 对应文案
  value: 1, // 对应后台接口枚举值
  viewNum: 159837, //观看人数
  startTime: timestamp // 距开播时间
},

methods:
countEnd()
预告中变为即将开播时触发事件，可修改状态，或从接口请求数据修改状态