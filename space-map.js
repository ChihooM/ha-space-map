/* space-map v0.3 · 空间地图 Lovelace 卡片（零构建、单文件、无依赖）
 * 宽屏：左栏信息 / 中栏户型 / 右栏操作；窄屏：只留中栏 + 顶部信息条
 * 数据在 {"version": "0.4.0", "units": "cm", "canvas": [560, 860], "colors": {"light": "#ffcd5c", "cover": "#b08aff", "switch": "#5eead4", "wall_switch": "#5eead4", "media_player": "#ff8a5c", "sensor": "#78d18c", "binary_sensor": "#78d18c", "button": "#ff78aa", "scene": "#ff78aa", "vacuum": "#c8c87a", "climate": "#8FD3FF", "gateway": "#8ab4ff", "pet": "#c9a0ff"}, "rooms": [{"name": "卧室", "points": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]], "bbox": [103.0, 0.0, 379.0, 410.0], "label": [242.07, 215.73], "temp": "sensor.wen_kong_ban_lu_w100_wo_shi_wen_du_wen_du"}, {"name": "大阳台", "points": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]], "bbox": [379.0, 190.0, 550.0, 410.0], "label": [464.5, 300.0], "temp": null}, {"name": "客厅", "points": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]], "bbox": [235.0, 410.0, 550.0, 665.0], "label": [392.5, 537.5], "temp": null}, {"name": "书房", "points": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]], "bbox": [235.0, 665.0, 550.0, 850.0], "label": [465.0, 743.0], "temp": null}, {"name": "玄关", "points": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]], "bbox": [235.0, 740.0, 380.0, 850.0], "label": [307.5, 795.0], "temp": "sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_wen_du"}, {"name": "浴室", "points": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]], "bbox": [103.0, 410.0, 235.0, 665.0], "label": [169.0, 537.5], "temp": null}, {"name": "小阳台", "points": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]], "bbox": [0.0, 420.0, 103.0, 665.0], "label": [51.5, 542.5], "temp": null}, {"name": "厨房", "points": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]], "bbox": [0.0, 665.0, 235.0, 850.0], "label": [117.5, 757.5], "temp": null}], "walls": [[340.0, 0.0, 160.0, 0.0], [340.0, 0.0, 340.0, 70.0], [160.0, 0.0, 160.0, 70.0], [379.0, 70.0, 340.0, 70.0], [160.0, 70.0, 103.0, 70.0], [379.0, 70.0, 379.0, 410.0], [103.0, 70.0, 103.0, 410.0], [550.0, 190.0, 395.0, 190.0], [550.0, 190.0, 550.0, 850.0], [0.0, 850.0, 255.0, 850.0], [345.0, 850.0, 550.0, 850.0], [0.0, 420.0, 0.0, 850.0], [103.0, 420.0, 0.0, 420.0], [379.0, 410.0, 385.0, 410.0], [545.0, 410.0, 550.0, 410.0], [103.0, 410.0, 287.5, 410.0], [372.5, 410.0, 379.0, 410.0], [235.0, 410.0, 235.0, 430.0], [235.0, 510.0, 235.0, 760.0], [235.0, 840.0, 235.0, 850.0], [0.0, 665.0, 7.0, 665.0], [97.0, 665.0, 235.0, 665.0], [103.0, 410.0, 103.0, 665.0], [379.0, 190.0, 395.0, 190.0]], "doors": [{"id": "entry", "a": "户外", "b": "玄关", "type": "swing", "axis": "h", "gap": [[255.0, 850.0], [345.0, 850.0]], "w": 90.0, "hinge": [345.0, 850.0], "open": [293.4, 776.3], "closed": [255.0, 850.0]}, {"id": "bedroom", "a": "卧室", "b": "客厅", "type": "swing", "axis": "h", "gap": [[287.5, 410.0], [372.5, 410.0]], "w": 85.0, "hinge": [372.5, 410.0], "open": [323.7, 340.4], "closed": [287.5, 410.0]}, {"id": "bath", "a": "浴室", "b": "客厅", "type": "swing", "axis": "v", "gap": [[235.0, 430.0], [235.0, 510.0]], "w": 80.0, "hinge": [235.0, 430.0], "open": [169.5, 475.9], "closed": [235.0, 510.0]}, {"id": "kitchen", "a": "厨房", "b": "玄关", "type": "swing", "axis": "v", "gap": [[235.0, 760.0], [235.0, 840.0]], "w": 80.0, "hinge": [235.0, 840.0], "open": [169.5, 794.1], "closed": [235.0, 760.0]}, {"id": "balcony", "a": "客厅", "b": "大阳台", "type": "sliding", "axis": "h", "gap": [[385.0, 410.0], [545.0, 410.0]], "w": 160.0, "hinge": null, "open": null, "closed": null}, {"id": "sbalcony", "a": "厨房", "b": "小阳台", "type": "opening", "axis": "h", "gap": [[7.0, 665.0], [97.0, 665.0]], "w": 90.0, "hinge": null, "open": null, "closed": null}], "devices": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "area": "卧室", "kind": "light", "rank": 1, "x": 243.1, "y": 226.6, "gangs": null, "controls": [{"entity_id": "light.wo_shi_deng", "domain": "light", "label": "卧室·主灯"}], "state_entity": null, "battery": null}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "area": "卧室", "kind": "cover", "rank": 2, "x": 249.4, "y": 16.7, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_wo_shi", "domain": "cover", "label": "卧室·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_wo_shi_pei_zhi_zhuang_tai", "battery": null}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "area": "卧室", "kind": "sensor", "rank": 3, "x": 111.4, "y": 325.5, "gangs": null, "controls": [], "state_entity": "sensor.wen_kong_ban_lu_w100_wo_shi_shi_du_shi_du", "battery": null}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "area": "卧室", "kind": "switch", "rank": null, "x": 363.5, "y": 146.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_qian", "domain": "switch", "label": "卧室·插座（床前）"}], "state_entity": null, "battery": null}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "area": "卧室", "kind": "switch", "rank": null, "x": 116.2, "y": 116.3, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_you", "domain": "switch", "label": "卧室·插座（床右）"}], "state_entity": null, "battery": null}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "area": "卧室", "kind": "switch", "rank": null, "x": 109.9, "y": 290.6, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_zuo", "domain": "switch", "label": "卧室·插座（床左）"}], "state_entity": null, "battery": null}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "area": "大阳台", "kind": "light", "rank": 12, "x": 464.4, "y": 304.7, "gangs": null, "controls": [{"entity_id": "light.da_yang_tai_deng", "domain": "light", "label": "大阳台·主灯"}], "state_entity": null, "battery": null}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "area": "大阳台", "kind": "sensor", "rank": 14, "x": 512.4, "y": 368.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_ci_chu_you_ren", "battery": "sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_dian_chi_dian_ya"}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "area": "大阳台", "kind": "sensor", "rank": 15, "x": 417.5, "y": 368.8, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_men", "battery": "sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_dian_chi_dian_ya"}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "area": "大阳台", "kind": "binary_sensor", "rank": null, "x": 500.8, "y": 237.5, "gangs": null, "controls": [{"entity_id": "switch.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_auto_clean", "domain": "switch", "label": "大阳台·猫厕所 MAX2"}], "state_entity": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_frequent_use_detection", "battery": null}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "area": "客厅", "kind": "light", "rank": 4, "x": 394.9, "y": 539.8, "gangs": null, "controls": [{"entity_id": "light.ke_ting_deng", "domain": "light", "label": "客厅·主灯"}], "state_entity": null, "battery": null}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "area": "客厅", "kind": "media", "rank": 5, "x": 538.6, "y": 461.2, "gangs": null, "controls": [{"entity_id": "media_player.qi_ju_shi_qi_ju_shi", "domain": "media_player", "label": "客厅·HomePod mini"}], "state_entity": null, "battery": null}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "area": "客厅", "kind": "pet", "rank": 6, "x": 249.4, "y": 504.3, "gangs": null, "controls": [{"entity_id": "switch.zhi_neng_wei_shi_qi_solo_child_lock", "domain": "switch", "label": "客厅·喂食器 SOLO"}], "state_entity": "binary_sensor.zhi_neng_wei_shi_qi_solo_feeding", "battery": "sensor.zhi_neng_wei_shi_qi_solo_battery_level"}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "area": "客厅", "kind": "switch", "rank": null, "x": 250.1, "y": 541.1, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_you", "domain": "switch", "label": "客厅·插座（右）"}], "state_entity": null, "battery": null}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "area": "客厅", "kind": "switch", "rank": null, "x": 249.5, "y": 569.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_zuo", "domain": "switch", "label": "客厅·插座（左）"}], "state_entity": null, "battery": null}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "area": "客厅", "kind": "switch", "rank": null, "x": 537.6, "y": 505.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_sha_fa_bei", "domain": "switch", "label": "客厅·插座（沙发背）"}], "state_entity": null, "battery": null}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "area": "书房", "kind": "light", "rank": 7, "x": 440, "y": 745.5, "gangs": null, "controls": [{"entity_id": "light.shu_zhuo_deng", "domain": "light", "label": "书房·书桌灯"}], "state_entity": null, "battery": null}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "area": "书房", "kind": "light", "rank": 8, "x": 513, "y": 689.6, "gangs": null, "controls": [{"entity_id": "light.liu_guang_yi_cai_luo_di_deng_t1", "domain": "light", "label": "书房·落地灯 T1"}], "state_entity": null, "battery": null}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "area": "书房", "kind": "scene", "rank": 9, "x": 513, "y": 747.2, "gangs": null, "controls": [], "state_entity": null, "battery": "sensor.mo_fang_kong_zhi_qi_shu_fang_fan_zhuan_90_dian_chi_dian_ya"}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "area": "书房", "kind": "gateway", "rank": 10, "x": 514.1, "y": 807, "gangs": null, "controls": [], "state_entity": null, "battery": null}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "area": "书房", "kind": "switch", "rank": null, "x": 537, "y": 777.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_shu_fang", "domain": "switch", "label": "书房·插座"}], "state_entity": null, "battery": null}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "area": "玄关", "kind": "sensor", "rank": 18, "x": 310, "y": 828.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_ci_chu_you_ren", "battery": null}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "area": "玄关", "kind": "sensor", "rank": 19, "x": 260, "y": 827.1, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_zhuang_tai_chuan_gan_qi_p100_men", "battery": null}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "area": "浴室", "kind": "wall_switch", "rank": 20, "x": 169.1, "y": 545.9, "gangs": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "label": "排气扇", "domain": "light", "endpoint": 40, "key": "键1"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "label": "浴室灯", "domain": "light", "endpoint": 41, "key": "键2"}], "controls": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "domain": "light", "label": "排气扇"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "domain": "light", "label": "浴室灯"}], "state_entity": null, "battery": null}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 146, "y": 480.1, "gangs": null, "controls": [{"entity_id": "switch.wei_sheng_jian_p20_do_not_disturb", "domain": "switch", "label": "浴室·扫地机 P20"}], "state_entity": "binary_sensor.wei_sheng_jian_p20_charging", "battery": "sensor.wei_sheng_jian_p20_battery"}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 124.1, "y": 479.6, "gangs": null, "controls": [{"entity_id": "switch.p20_dock_child_lock", "domain": "switch", "label": "浴室·扫地机基站"}], "state_entity": "binary_sensor.p20_dock_clean_water_box", "battery": null}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "area": "小阳台", "kind": "light", "rank": 16, "x": 50.1, "y": 550, "gangs": null, "controls": [{"entity_id": "light.xiao_yang_tai_deng", "domain": "light", "label": "小阳台·主灯"}], "state_entity": null, "battery": null}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "area": "小阳台", "kind": "sensor", "rank": 17, "x": 77.1, "y": 653.4, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_men", "battery": "sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_dian_chi_dian_ya"}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "area": "厨房", "kind": "light", "rank": 11, "x": 120, "y": 759.9, "gangs": null, "controls": [{"entity_id": "light.chu_fang_deng", "domain": "light", "label": "厨房·主灯"}], "state_entity": null, "battery": null}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "area": "厨房", "kind": "switch", "rank": null, "x": 172.4, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_you", "domain": "switch", "label": "厨房·插座（右）"}], "state_entity": null, "battery": null}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "area": "厨房", "kind": "switch", "rank": null, "x": 198.9, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_zuo", "domain": "switch", "label": "厨房·插座（左）"}], "state_entity": null, "battery": null}, {"id": "climate_138a_thermostat", "name": "卧室·空调", "area": "卧室", "kind": "climate", "rank": 21, "x": 170.0, "y": 388.0, "gangs": null, "controls": [{"entity_id": "climate.ac_controller_138a_thermostat", "domain": "climate", "label": "卧室·空调"}], "state_entity": null, "battery": null}], "topology": [{"target": "书房·书桌灯", "via": "玄关·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键1 → 切换书桌灯"}, {"target": "客厅·主灯", "via": "玄关·墙面开关 Z1", "gang": 2, "note": "Studio 自动化：按键2 → 切换客厅灯"}, {"target": "卧室·主灯", "via": "卧室·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键 → 切换卧室灯"}], "scenes": [{"name": "回家", "icon": "🏠", "entity": "script.hui_jia", "steps": [{"kind": "light", "label": "客厅主灯 60% · 3000K", "expect": {"on": true, "pct": 60, "kelvin": 3000}, "check": [{"e": "light.ke_ting_deng", "on": true, "pct": 60, "kelvin": 3000}]}, {"kind": "cover", "label": "卧室窗帘 打开", "cond": "day", "expect": {"state": "open"}, "check": [{"e": "cover.chuang_lian_ban_lu_wo_shi", "state": "open"}]}]}, {"name": "离家", "icon": "🚪", "entity": "script.li_jia", "steps": [{"kind": "light", "label": "全屋 7 盏灯 关闭", "expect": {"on": false}, "check": [{"e": "light.ke_ting_deng", "on": false}, {"e": "light.wo_shi_deng", "on": false}, {"e": "light.shu_zhuo_deng", "on": false}, {"e": "light.liu_guang_yi_cai_luo_di_deng_t1", "on": false}, {"e": "light.chu_fang_deng", "on": false}, {"e": "light.da_yang_tai_deng", "on": false}, {"e": "light.xiao_yang_tai_deng", "on": false}]}, {"kind": "cover", "label": "卧室窗帘 关闭", "expect": {"state": "closed"}, "check": [{"e": "cover.chuang_lian_ban_lu_wo_shi", "state": "closed"}]}]}, {"name": "睡觉", "icon": "🌙", "entity": "script.shui_jiao", "steps": [{"kind": "light", "label": "客厅 + 书房 3 盏灯 关闭", "expect": {"on": false}, "check": [{"e": "light.ke_ting_deng", "on": false}, {"e": "light.shu_zhuo_deng", "on": false}, {"e": "light.liu_guang_yi_cai_luo_di_deng_t1", "on": false}]}, {"kind": "light", "label": "卧室主灯 20% · 2800K", "expect": {"on": true, "pct": 20, "kelvin": 2800}, "check": [{"e": "light.wo_shi_deng", "on": true, "pct": 20, "kelvin": 2800}]}, {"kind": "cover", "label": "卧室窗帘 关闭", "expect": {"state": "closed"}, "check": [{"e": "cover.chuang_lian_ban_lu_wo_shi", "state": "closed"}]}]}, {"name": "办公", "icon": "💼", "entity": "script.ban_gong", "steps": [{"kind": "light", "label": "关闭其他灯", "expect": {"on": false}, "check": [{"e": "light.ke_ting_deng", "on": false}, {"e": "light.wo_shi_deng", "on": false}, {"e": "light.chu_fang_deng", "on": false}, {"e": "light.da_yang_tai_deng", "on": false}, {"e": "light.xiao_yang_tai_deng", "on": false}, {"e": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "on": false}, {"e": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "on": false}]}, {"kind": "light", "label": "书桌灯 100% · 4000K", "expect": {"on": true, "pct": 100, "kelvin": 4000}, "check": [{"e": "light.shu_zhuo_deng", "on": true, "pct": 100, "kelvin": 4000}]}, {"kind": "light", "label": "落地灯 60% · 3500K", "expect": {"on": true, "pct": 60, "kelvin": 3500}, "check": [{"e": "light.liu_guang_yi_cai_luo_di_deng_t1", "on": true, "pct": 60, "kelvin": 3500}]}]}], "ai": [{"icon": "☀", "entity": "input_text.ai_line_weather"}, {"icon": "🧳", "entity": "input_text.ai_line_trip"}, {"icon": "🌡", "entity": "input_text.ai_line_home"}, {"icon": "⚠", "entity": "input_text.ai_line_cross"}], "aiMeta": "input_text.ai_meta", "aiScript": "script.ai_brief_refresh", "iso": {"viewBox": [0, 0, 1104.52, 733.0], "H": 120.0, "T": 10.0, "tilt": 45.0, "zIso": 0.5, "flip": false, "camera": [1.0, 1.0], "tones": {"dark": {"top": "#728090", "mid": "#4A5F78", "dark": "#3E4A61"}, "light": {"top": "#FAF9F7", "mid": "#E6E1D8", "dark": "#BFB9B6"}, "deltaL": {"dark": {"top_mid": 13.4, "mid_dark": 8.3, "top_dark": 21.7}, "light": {"top_mid": 8.2, "mid_dark": 14.2, "top_dark": 22.4}}}, "floors": [{"type": "floor", "name": "卧室", "points": [[1029.7, 230.56], [995.83, 211.27], [1056.46, 176.76], [902.43, 87.88], [842.66, 122.9], [793.83, 94.33], [500.91, 262.58], [738.38, 399.66]], "z": -9617.0, "shade": 1.0, "poly": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]]}, {"type": "floor", "name": "大阳台", "points": [[1073.76, 376.68], [927.8, 292.4], [740.01, 400.82], [885.97, 485.1]], "z": -9235.5, "shade": 1.0, "poly": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]]}, {"type": "floor", "name": "客厅", "points": [[883.23, 486.35], [613.14, 330.41], [394.49, 456.65], [664.58, 612.59]], "z": -9070.0, "shade": 1.0, "poly": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]]}, {"type": "floor", "name": "书房", "points": [[662.5, 613.59], [392.71, 457.86], [328.7, 495.07], [452.27, 567.89], [359.28, 620.59], [504.05, 705.13]], "z": -8860.0, "shade": 1.0, "poly": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]]}, {"type": "floor", "name": "玄关", "points": [[450.24, 566.31], [327.43, 495.4], [234.27, 549.19], [357.08, 620.1]], "z": -8897.5, "shade": 1.0, "poly": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]]}, {"type": "floor", "name": "浴室", "points": [[610.55, 329.43], [497.83, 264.35], [280.07, 390.07], [392.79, 455.15]], "z": -9293.5, "shade": 1.0, "poly": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]]}, {"type": "floor", "name": "小阳台", "points": [[487.64, 268.53], [399.78, 217.81], [190.81, 338.47], [278.66, 389.19]], "z": -9406.0, "shade": 1.0, "poly": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]]}, {"type": "floor", "name": "厨房", "points": [[389.62, 456.33], [188.83, 340.4], [30.76, 431.67], [231.55, 547.6]], "z": -9125.0, "shade": 1.0, "poly": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]]}], "walls": [{"type": "wall", "seg": [340.0, 0.0, 160.0, 0.0], "top": [[1063.2, 114.0], [1054.54, 119.0], [898.66, 29.0], [907.32, 24.0]], "faces": [{"points": [[1063.2, 174.0], [1054.54, 179.0], [1054.54, 119.0], [1063.2, 114.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1054.54, 179.0], [898.66, 89.0], [898.66, 29.0], [1054.54, 119.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 310.0, "shade": 1.0}, {"type": "wall", "seg": [340.0, 0.0, 340.0, 70.0], "top": [[1054.54, 114.0], [1063.2, 119.0], [1002.58, 154.0], [993.92, 149.0]], "faces": [{"points": [[1063.2, 179.0], [1002.58, 214.0], [1002.58, 154.0], [1063.2, 119.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1002.58, 214.0], [993.92, 209.0], [993.92, 149.0], [1002.58, 154.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 435.0, "shade": 1.0}, {"type": "wall", "seg": [160.0, 0.0, 160.0, 70.0], "top": [[898.66, 24.0], [907.32, 29.0], [846.7, 64.0], [838.04, 59.0]], "faces": [{"points": [[907.32, 89.0], [846.7, 124.0], [846.7, 64.0], [907.32, 29.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[846.7, 124.0], [838.04, 119.0], [838.04, 59.0], [846.7, 64.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 255.0, "shade": 1.0}, {"type": "wall", "seg": [379.0, 70.0, 340.0, 70.0], "top": [[1036.35, 168.5], [1027.69, 173.5], [993.92, 154.0], [1002.58, 149.0]], "faces": [{"points": [[1036.35, 228.5], [1027.69, 233.5], [1027.69, 173.5], [1036.35, 168.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1027.69, 233.5], [993.92, 214.0], [993.92, 154.0], [1027.69, 173.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 489.5, "shade": 1.0}, {"type": "wall", "seg": [160.0, 70.0, 103.0, 70.0], "top": [[846.7, 59.0], [838.04, 64.0], [788.68, 35.5], [797.34, 30.5]], "faces": [{"points": [[846.7, 119.0], [838.04, 124.0], [838.04, 64.0], [846.7, 59.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[838.04, 124.0], [788.68, 95.5], [788.68, 35.5], [838.04, 64.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 261.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 70.0, 379.0, 410.0], "top": [[1027.69, 168.5], [1036.35, 173.5], [741.91, 343.5], [733.25, 338.5]], "faces": [{"points": [[1036.35, 233.5], [741.91, 403.5], [741.91, 343.5], [1036.35, 173.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[741.91, 403.5], [733.25, 398.5], [733.25, 338.5], [741.91, 343.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 679.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 70.0, 103.0, 410.0], "top": [[788.68, 30.5], [797.34, 35.5], [502.9, 205.5], [494.24, 200.5]], "faces": [{"points": [[797.34, 95.5], [502.9, 265.5], [502.9, 205.5], [797.34, 35.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[502.9, 265.5], [494.24, 260.5], [494.24, 200.5], [502.9, 205.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 403.0, "shade": 1.0}, {"type": "wall", "seg": [550.0, 190.0, 395.0, 190.0], "top": [[1080.52, 314.0], [1071.86, 319.0], [937.63, 241.5], [946.29, 236.5]], "faces": [{"points": [[1080.52, 374.0], [1071.86, 379.0], [1071.86, 319.0], [1080.52, 314.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1071.86, 379.0], [937.63, 301.5], [937.63, 241.5], [1071.86, 319.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 722.5, "shade": 1.0}, {"type": "wall", "seg": [550.0, 190.0, 550.0, 850.0], "top": [[1071.86, 314.0], [1080.52, 319.0], [508.96, 649.0], [500.3, 644.0]], "faces": [{"points": [[1080.52, 379.0], [508.96, 709.0], [508.96, 649.0], [1080.52, 319.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[508.96, 709.0], [500.3, 704.0], [500.3, 644.0], [508.96, 649.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1130.0, "shade": 1.0}, {"type": "wall", "seg": [0.0, 850.0, 255.0, 850.0], "top": [[24.0, 374.0], [32.66, 369.0], [253.49, 496.5], [244.83, 501.5]], "faces": [{"points": [[253.49, 556.5], [244.83, 561.5], [244.83, 501.5], [253.49, 496.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[244.83, 561.5], [24.0, 434.0], [24.0, 374.0], [244.83, 501.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1037.5, "shade": 1.0}, {"type": "wall", "seg": [345.0, 850.0, 550.0, 850.0], "top": [[322.77, 546.5], [331.43, 541.5], [508.96, 644.0], [500.3, 649.0]], "faces": [{"points": [[508.96, 704.0], [500.3, 709.0], [500.3, 649.0], [508.96, 644.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[500.3, 709.0], [322.77, 606.5], [322.77, 546.5], [500.3, 649.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1357.5, "shade": 1.0}, {"type": "wall", "seg": [0.0, 420.0, 0.0, 850.0], "top": [[396.38, 154.0], [405.04, 159.0], [32.66, 374.0], [24.0, 369.0]], "faces": [{"points": [[405.04, 219.0], [32.66, 434.0], [32.66, 374.0], [405.04, 159.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[32.66, 434.0], [24.0, 429.0], [24.0, 369.0], [32.66, 374.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 695.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 420.0, 0.0, 420.0], "top": [[494.24, 205.5], [485.58, 210.5], [396.38, 159.0], [405.04, 154.0]], "faces": [{"points": [[494.24, 265.5], [485.58, 270.5], [485.58, 210.5], [494.24, 205.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[485.58, 270.5], [396.38, 219.0], [396.38, 159.0], [485.58, 210.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 531.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 410.0, 385.0, 410.0], "top": [[733.25, 343.5], [741.91, 338.5], [747.11, 341.5], [738.45, 346.5]], "faces": [{"points": [[747.11, 401.5], [738.45, 406.5], [738.45, 346.5], [747.11, 341.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[738.45, 406.5], [733.25, 403.5], [733.25, 343.5], [738.45, 346.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 852.0, "shade": 1.0}, {"type": "wall", "seg": [545.0, 410.0, 550.0, 410.0], "top": [[877.01, 426.5], [885.67, 421.5], [890.0, 424.0], [881.34, 429.0]], "faces": [{"points": [[890.0, 484.0], [881.34, 489.0], [881.34, 429.0], [890.0, 424.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[881.34, 489.0], [877.01, 486.5], [877.01, 426.5], [881.34, 429.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1017.5, "shade": 1.0}, {"type": "wall", "seg": [103.0, 410.0, 287.5, 410.0], "top": [[494.24, 205.5], [502.9, 200.5], [662.68, 292.75], [654.02, 297.75]], "faces": [{"points": [[662.68, 352.75], [654.02, 357.75], [654.02, 297.75], [662.68, 292.75]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[654.02, 357.75], [494.24, 265.5], [494.24, 205.5], [654.02, 297.75]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 665.25, "shade": 1.0}, {"type": "wall", "seg": [372.5, 410.0, 379.0, 410.0], "top": [[727.62, 340.25], [736.29, 335.25], [741.91, 338.5], [733.25, 343.5]], "faces": [{"points": [[741.91, 398.5], [733.25, 403.5], [733.25, 343.5], [741.91, 338.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[733.25, 403.5], [727.62, 400.25], [727.62, 340.25], [733.25, 343.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 845.75, "shade": 1.0}, {"type": "wall", "seg": [235.0, 410.0, 235.0, 430.0], "top": [[608.55, 266.5], [617.21, 271.5], [599.89, 281.5], [591.23, 276.5]], "faces": [{"points": [[617.21, 331.5], [599.89, 341.5], [599.89, 281.5], [617.21, 271.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[599.89, 341.5], [591.23, 336.5], [591.23, 276.5], [599.89, 281.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 715.0, "shade": 1.0}, {"type": "wall", "seg": [235.0, 510.0, 235.0, 760.0], "top": [[521.95, 316.5], [530.61, 321.5], [314.11, 446.5], [305.45, 441.5]], "faces": [{"points": [[530.61, 381.5], [314.11, 506.5], [314.11, 446.5], [530.61, 321.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[314.11, 506.5], [305.45, 501.5], [305.45, 441.5], [314.11, 446.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 930.0, "shade": 1.0}, {"type": "wall", "seg": [235.0, 840.0, 235.0, 850.0], "top": [[236.17, 481.5], [244.83, 486.5], [236.17, 491.5], [227.51, 486.5]], "faces": [{"points": [[244.83, 546.5], [236.17, 551.5], [236.17, 491.5], [244.83, 486.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[236.17, 551.5], [227.51, 546.5], [227.51, 486.5], [236.17, 491.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1140.0, "shade": 1.0}, {"type": "wall", "seg": [0.0, 665.0, 7.0, 665.0], "top": [[184.21, 281.5], [192.87, 276.5], [198.93, 280.0], [190.27, 285.0]], "faces": [{"points": [[198.93, 340.0], [190.27, 345.0], [190.27, 285.0], [198.93, 280.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[190.27, 345.0], [184.21, 341.5], [184.21, 281.5], [190.27, 285.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 728.5, "shade": 1.0}, {"type": "wall", "seg": [97.0, 665.0, 235.0, 665.0], "top": [[268.21, 330.0], [276.87, 325.0], [396.38, 394.0], [387.72, 399.0]], "faces": [{"points": [[396.38, 454.0], [387.72, 459.0], [387.72, 399.0], [396.38, 394.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[387.72, 459.0], [268.21, 390.0], [268.21, 330.0], [387.72, 399.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 891.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 410.0, 103.0, 665.0], "top": [[494.24, 200.5], [502.9, 205.5], [282.07, 333.0], [273.41, 328.0]], "faces": [{"points": [[502.9, 265.5], [282.07, 393.0], [282.07, 333.0], [502.9, 205.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[282.07, 393.0], [273.41, 388.0], [273.41, 328.0], [282.07, 333.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 700.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 190.0, 395.0, 190.0], "top": [[923.77, 233.5], [932.43, 228.5], [946.29, 236.5], [937.63, 241.5]], "faces": [{"points": [[946.29, 296.5], [937.63, 301.5], [937.63, 241.5], [946.29, 236.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[937.63, 301.5], [923.77, 293.5], [923.77, 233.5], [937.63, 241.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 637.0, "shade": 1.0}], "ao": [{"type": "ao", "points": [[1058.0, 181.0], [895.2, 87.0], [888.27, 91.0], [1051.08, 185.0]], "opacity": 0.14, "z": 309.95}, {"type": "ao", "points": [[1058.0, 172.0], [990.46, 211.0], [983.53, 207.0], [1051.08, 168.0]], "opacity": 0.14, "z": 434.95}, {"type": "ao", "points": [[910.78, 87.0], [843.24, 126.0], [850.16, 130.0], [917.71, 91.0]], "opacity": 0.14, "z": 254.95}, {"type": "ao", "points": [[1031.16, 235.5], [990.46, 212.0], [983.53, 216.0], [1024.23, 239.5]], "opacity": 0.14, "z": 489.45}, {"type": "ao", "points": [[841.5, 126.0], [785.21, 93.5], [778.29, 97.5], [834.58, 130.0]], "opacity": 0.14, "z": 261.45}, {"type": "ao", "points": [[1031.16, 226.5], [729.79, 400.5], [722.86, 396.5], [1024.23, 222.5]], "opacity": 0.14, "z": 678.95}, {"type": "ao", "points": [[1039.82, 231.5], [738.45, 405.5], [745.38, 409.5], [1046.75, 235.5]], "opacity": 0.14, "z": 678.95}, {"type": "ao", "points": [[800.8, 93.5], [499.43, 267.5], [506.36, 271.5], [807.73, 97.5]], "opacity": 0.14, "z": 402.95}, {"type": "ao", "points": [[1075.32, 381.0], [934.17, 299.5], [927.24, 303.5], [1068.4, 385.0]], "opacity": 0.14, "z": 722.45}, {"type": "ao", "points": [[1075.32, 372.0], [496.84, 706.0], [489.91, 702.0], [1068.4, 368.0]], "opacity": 0.14, "z": 1129.95}, {"type": "ao", "points": [[29.2, 427.0], [256.95, 558.5], [263.88, 554.5], [36.12, 423.0]], "opacity": 0.14, "z": 1037.45}, {"type": "ao", "points": [[327.97, 599.5], [512.42, 706.0], [519.35, 702.0], [334.89, 595.5]], "opacity": 0.14, "z": 1357.45}, {"type": "ao", "points": [[408.5, 217.0], [29.2, 436.0], [36.12, 440.0], [415.43, 221.0]], "opacity": 0.14, "z": 694.95}, {"type": "ao", "points": [[489.04, 272.5], [392.92, 217.0], [385.99, 221.0], [482.11, 276.5]], "opacity": 0.14, "z": 531.45}, {"type": "ao", "points": [[729.79, 401.5], [741.91, 408.5], [734.99, 412.5], [722.86, 405.5]], "opacity": 0.14, "z": 851.95}, {"type": "ao", "points": [[738.45, 396.5], [750.57, 403.5], [757.5, 399.5], [745.38, 392.5]], "opacity": 0.14, "z": 851.95}, {"type": "ao", "points": [[873.55, 484.5], [884.8, 491.0], [877.88, 495.0], [866.62, 488.5]], "opacity": 0.14, "z": 1017.45}, {"type": "ao", "points": [[882.21, 479.5], [893.46, 486.0], [900.39, 482.0], [889.13, 475.5]], "opacity": 0.14, "z": 1017.45}, {"type": "ao", "points": [[490.77, 263.5], [657.48, 359.75], [650.55, 363.75], [483.85, 267.5]], "opacity": 0.14, "z": 665.2}, {"type": "ao", "points": [[499.43, 258.5], [666.14, 354.75], [673.07, 350.75], [506.36, 254.5]], "opacity": 0.14, "z": 665.2}, {"type": "ao", "points": [[724.16, 398.25], [736.72, 405.5], [729.79, 409.5], [717.23, 402.25]], "opacity": 0.14, "z": 845.7}, {"type": "ao", "points": [[732.82, 393.25], [745.38, 400.5], [752.31, 396.5], [739.75, 389.25]], "opacity": 0.14, "z": 845.7}, {"type": "ao", "points": [[612.01, 324.5], [587.77, 338.5], [580.84, 334.5], [605.09, 320.5]], "opacity": 0.14, "z": 714.95}, {"type": "ao", "points": [[620.67, 329.5], [596.43, 343.5], [603.35, 347.5], [627.6, 333.5]], "opacity": 0.14, "z": 714.95}, {"type": "ao", "points": [[525.41, 374.5], [301.99, 503.5], [295.06, 499.5], [518.49, 370.5]], "opacity": 0.14, "z": 929.95}, {"type": "ao", "points": [[534.07, 379.5], [310.65, 508.5], [317.57, 512.5], [541.0, 383.5]], "opacity": 0.14, "z": 929.95}, {"type": "ao", "points": [[239.63, 539.5], [224.05, 548.5], [217.12, 544.5], [232.71, 535.5]], "opacity": 0.14, "z": 1139.95}, {"type": "ao", "points": [[248.29, 544.5], [232.71, 553.5], [239.63, 557.5], [255.22, 548.5]], "opacity": 0.14, "z": 1139.95}, {"type": "ao", "points": [[180.75, 339.5], [193.74, 347.0], [186.81, 351.0], [173.82, 343.5]], "opacity": 0.14, "z": 728.45}, {"type": "ao", "points": [[189.41, 334.5], [202.4, 342.0], [209.32, 338.0], [196.33, 330.5]], "opacity": 0.14, "z": 728.45}, {"type": "ao", "points": [[264.75, 388.0], [391.18, 461.0], [384.26, 465.0], [257.82, 392.0]], "opacity": 0.14, "z": 890.95}, {"type": "ao", "points": [[273.41, 383.0], [399.84, 456.0], [406.77, 452.0], [280.34, 379.0]], "opacity": 0.14, "z": 890.95}, {"type": "ao", "points": [[497.7, 258.5], [269.94, 390.0], [263.02, 386.0], [490.77, 254.5]], "opacity": 0.14, "z": 700.45}, {"type": "ao", "points": [[506.36, 263.5], [278.6, 395.0], [285.53, 399.0], [513.29, 267.5]], "opacity": 0.14, "z": 700.45}, {"type": "ao", "points": [[920.31, 291.5], [941.09, 303.5], [934.17, 307.5], [913.38, 295.5]], "opacity": 0.14, "z": 636.95}], "furn": [{"type": "furn", "id": "bed", "name": "双人床", "room": "卧室", "material": "soft", "top": [[823.32, 113.5], [953.22, 188.5], [780.02, 288.5], [650.12, 213.5]], "faces": [{"points": [[953.22, 213.5], [780.02, 313.5], [780.02, 288.5], [953.22, 188.5]], "tone": "dark"}, {"points": [[780.02, 313.5], [650.12, 238.5], [650.12, 213.5], [780.02, 288.5]], "tone": "mid"}], "z": 464.0, "base_h": 0.0, "height": 50.0, "height_raw": 50.0, "height_capped": false}, {"type": "furn", "id": "wardrobe", "name": "衣柜", "room": "卧室", "material": "wood", "top": [[560.92, 178.0], [716.8, 268.0], [664.84, 298.0], [508.96, 208.0]], "faces": [{"points": [[716.8, 323.0], [664.84, 353.0], [664.84, 298.0], [716.8, 268.0]], "tone": "dark"}, {"points": [[664.84, 353.0], [508.96, 263.0], [508.96, 208.0], [664.84, 298.0]], "tone": "mid"}], "z": 628.0, "base_h": 0.0, "height": 110.0, "height_raw": 220.0, "height_capped": true}, {"type": "furn", "id": "dresser", "name": "梳妆台", "room": "卧室", "material": "wood", "top": [[911.65, 60.0], [1032.89, 130.0], [993.92, 152.5], [872.68, 82.5]], "faces": [{"points": [[1032.89, 167.5], [993.92, 190.0], [993.92, 152.5], [1032.89, 130.0]], "tone": "dark"}, {"points": [[993.92, 190.0], [872.68, 120.0], [872.68, 82.5], [993.92, 152.5]], "tone": "mid"}], "z": 312.0, "base_h": 0.0, "height": 75.0, "height_raw": 75.0, "height_capped": false}, {"type": "furn", "id": "sofa", "name": "三人沙发", "room": "客厅", "material": "soft", "top": [[745.38, 429.0], [823.32, 474.0], [664.84, 565.5], [586.9, 520.5]], "faces": [{"points": [[823.32, 516.5], [664.84, 608.0], [664.84, 565.5], [823.32, 474.0]], "tone": "dark"}, {"points": [[664.84, 608.0], [586.9, 563.0], [586.9, 520.5], [664.84, 565.5]], "tone": "mid"}], "z": 1109.0, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "display", "name": "展示柜", "room": "客厅", "material": "wood", "top": [[844.97, 414.0], [875.28, 431.5], [828.51, 458.5], [798.2, 441.0]], "faces": [{"points": [[875.28, 486.5], [828.51, 513.5], [828.51, 458.5], [875.28, 431.5]], "tone": "dark"}, {"points": [[828.51, 513.5], [798.2, 496.0], [798.2, 441.0], [828.51, 458.5]], "tone": "mid"}], "z": 1024.5, "base_h": 0.0, "height": 110.0, "height_raw": 110.0, "height_capped": false}, {"type": "furn", "id": "desk", "name": "书桌", "room": "书房", "material": "wood", "top": [[598.16, 544.0], [654.45, 576.5], [539.27, 643.0], [482.98, 610.5]], "faces": [{"points": [[654.45, 614.0], [539.27, 680.5], [539.27, 643.0], [654.45, 576.5]], "tone": "dark"}, {"points": [[539.27, 680.5], [482.98, 648.0], [482.98, 610.5], [539.27, 643.0]], "tone": "mid"}], "z": 1286.5, "base_h": 0.0, "height": 75.0, "height_raw": 75.0, "height_capped": false}, {"type": "furn", "id": "chair", "name": "人体工学椅", "room": "书房", "material": "wood", "top": [[513.29, 519.0], [569.58, 551.5], [513.29, 584.0], [457.0, 551.5]], "faces": [{"points": [[569.58, 594.0], [513.29, 626.5], [513.29, 584.0], [569.58, 551.5]], "tone": "dark"}, {"points": [[513.29, 626.5], [457.0, 594.0], [457.0, 551.5], [513.29, 584.0]], "tone": "mid"}], "z": 1217.5, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "cube", "name": "格子柜", "room": "书房", "material": "wood", "top": [[402.44, 546.5], [506.36, 606.5], [471.72, 626.5], [367.8, 566.5]], "faces": [{"points": [[506.36, 661.5], [471.72, 681.5], [471.72, 626.5], [506.36, 606.5]], "tone": "dark"}, {"points": [[471.72, 681.5], [367.8, 621.5], [367.8, 566.5], [471.72, 626.5]], "tone": "mid"}], "z": 1325.0, "base_h": 0.0, "height": 110.0, "height_raw": 130.0, "height_capped": true}, {"type": "furn", "id": "litter", "name": "猫厕所", "room": "大阳台", "material": "wood", "top": [[993.92, 319.0], [1047.61, 350.0], [1000.85, 377.0], [947.16, 346.0]], "faces": [{"points": [[1047.61, 380.0], [1000.85, 407.0], [1000.85, 377.0], [1047.61, 350.0]], "tone": "dark"}, {"points": [[1000.85, 407.0], [947.16, 376.0], [947.16, 346.0], [1000.85, 377.0]], "tone": "mid"}], "z": 773.0, "base_h": 0.0, "height": 60.0, "height_raw": 60.0, "height_capped": false}, {"type": "furn", "id": "fridge", "name": "冰箱", "room": "小阳台", "material": "wood", "top": [[286.4, 235.5], [334.03, 263.0], [282.07, 293.0], [234.44, 265.5]], "faces": [{"points": [[334.03, 318.0], [282.07, 348.0], [282.07, 293.0], [334.03, 263.0]], "tone": "dark"}, {"points": [[282.07, 348.0], [234.44, 320.5], [234.44, 265.5], [282.07, 293.0]], "tone": "mid"}], "z": 680.5, "base_h": 0.0, "height": 110.0, "height_raw": 145.0, "height_capped": true}, {"type": "furn", "id": "rack", "name": "置物架", "room": "小阳台", "material": "wood", "top": [[390.32, 200.5], [424.96, 220.5], [394.65, 238.0], [360.01, 218.0]], "faces": [{"points": [[424.96, 250.5], [394.65, 268.0], [394.65, 238.0], [424.96, 220.5]], "tone": "dark"}, {"points": [[394.65, 268.0], [360.01, 248.0], [360.01, 218.0], [394.65, 238.0]], "tone": "mid"}], "z": 515.5, "base_h": 0.0, "height": 60.0, "height_raw": 60.0, "height_capped": false}, {"type": "furn", "id": "counter_s", "name": "橱柜台面（南）", "room": "厨房", "material": "wood", "top": [[90.68, 359.0], [283.8, 470.5], [231.84, 500.5], [38.72, 389.0]], "faces": [{"points": [[283.8, 513.0], [231.84, 543.0], [231.84, 500.5], [283.8, 470.5]], "tone": "dark"}, {"points": [[231.84, 543.0], [38.72, 431.5], [38.72, 389.0], [231.84, 500.5]], "tone": "mid"}], "z": 974.0, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "counter_w", "name": "橱柜台面（西）", "room": "厨房", "material": "wood", "top": [[163.43, 317.0], [211.06, 344.5], [138.31, 386.5], [90.68, 359.0]], "faces": [{"points": [[211.06, 387.0], [138.31, 429.0], [138.31, 386.5], [211.06, 344.5]], "tone": "dark"}, {"points": [[138.31, 429.0], [90.68, 401.5], [90.68, 359.0], [138.31, 386.5]], "tone": "mid"}], "z": 818.0, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "cooktop", "name": "灶台（双眼）", "room": "厨房", "material": "hard", "top": [[97.61, 371.0], [153.9, 403.5], [114.93, 426.0], [58.64, 393.5]], "faces": [{"points": [[153.9, 406.5], [114.93, 429.0], [114.93, 426.0], [153.9, 403.5]], "tone": "dark"}, {"points": [[114.93, 429.0], [58.64, 396.5], [58.64, 393.5], [114.93, 426.0]], "tone": "mid"}], "z": 920.5, "base_h": 85.0, "height": 6.0, "height_raw": 6.0, "height_capped": false}, {"type": "furn", "id": "sink", "name": "水槽", "room": "厨房", "material": "hard", "top": [[164.29, 318.5], [203.26, 341.0], [168.62, 361.0], [129.65, 338.5]], "faces": [{"points": [[203.26, 345.0], [168.62, 365.0], [168.62, 361.0], [203.26, 341.0]], "tone": "dark"}, {"points": [[168.62, 365.0], [129.65, 342.5], [129.65, 338.5], [168.62, 361.0]], "tone": "mid"}], "z": 806.0, "base_h": 85.0, "height": 8.0, "height_raw": 8.0, "height_capped": false}, {"type": "furn", "id": "bin", "name": "垃圾桶", "room": "厨房", "material": "wood", "top": [[355.68, 422.5], [379.93, 436.5], [359.14, 448.5], [334.89, 434.5]], "faces": [{"points": [[379.93, 456.5], [359.14, 468.5], [359.14, 448.5], [379.93, 436.5]], "tone": "dark"}, {"points": [[359.14, 468.5], [334.89, 454.5], [334.89, 434.5], [359.14, 448.5]], "tone": "mid"}], "z": 918.0, "base_h": 0.0, "height": 40.0, "height_raw": 40.0, "height_capped": false}, {"type": "furn", "id": "shower", "name": "淋浴区", "room": "浴室", "material": "hard", "top": [[498.57, 214.0], [576.51, 259.0], [498.57, 304.0], [420.63, 259.0]], "faces": [{"points": [[576.51, 314.0], [498.57, 359.0], [498.57, 304.0], [576.51, 259.0]], "tone": "dark"}, {"points": [[498.57, 359.0], [420.63, 314.0], [420.63, 259.0], [498.57, 304.0]], "tone": "mid"}], "z": 670.0, "base_h": 0.0, "height": 110.0, "height_raw": 200.0, "height_capped": true}, {"type": "furn", "id": "toilet", "name": "马桶", "room": "浴室", "material": "wood", "top": [[412.83, 281.0], [464.79, 311.0], [430.15, 331.0], [378.19, 301.0]], "faces": [{"points": [[464.79, 348.5], [430.15, 368.5], [430.15, 331.0], [464.79, 311.0]], "tone": "dark"}, {"points": [[430.15, 368.5], [378.19, 338.5], [378.19, 301.0], [430.15, 331.0]], "tone": "mid"}], "z": 711.5, "base_h": 0.0, "height": 75.0, "height_raw": 75.0, "height_capped": false}, {"type": "furn", "id": "basin", "name": "洗手台", "room": "浴室", "material": "wood", "top": [[356.54, 308.5], [395.51, 331.0], [347.88, 358.5], [308.91, 336.0]], "faces": [{"points": [[395.51, 373.5], [347.88, 401.0], [347.88, 358.5], [395.51, 331.0]], "tone": "dark"}, {"points": [[347.88, 401.0], [308.91, 378.5], [308.91, 336.0], [347.88, 358.5]], "tone": "mid"}], "z": 781.5, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "dock", "name": "扫地机基站", "room": "浴室", "material": "wood", "top": [[396.38, 376.5], [431.02, 396.5], [392.05, 419.0], [357.41, 399.0]], "faces": [{"points": [[431.02, 414.0], [392.05, 436.5], [392.05, 419.0], [431.02, 396.5]], "tone": "dark"}, {"points": [[392.05, 436.5], [357.41, 416.5], [357.41, 399.0], [392.05, 419.0]], "tone": "mid"}], "z": 835.0, "base_h": 0.0, "height": 35.0, "height_raw": 35.0, "height_capped": false}], "doors": [{"id": "entry", "a": "户外", "b": "玄关", "axis": "h", "at": 850.0, "c": 300.0, "w": 90.0, "type": "swing", "gap": [[255.0, 850.0], [345.0, 850.0]], "hinge_pt": [345.0, 850.0], "closed_end": [255.0, 850.0], "open_end": [293.4, 776.3]}, {"id": "bedroom", "a": "卧室", "b": "客厅", "axis": "h", "at": 410.0, "c": 330.0, "w": 85.0, "type": "swing", "gap": [[287.5, 410.0], [372.5, 410.0]], "hinge_pt": [372.5, 410.0], "closed_end": [287.5, 410.0], "open_end": [323.7, 340.4]}, {"id": "bath", "a": "浴室", "b": "客厅", "axis": "v", "at": 235.0, "c": 470.0, "w": 80.0, "type": "swing", "gap": [[235.0, 430.0], [235.0, 510.0]], "hinge_pt": [235.0, 430.0], "closed_end": [235.0, 510.0], "open_end": [169.5, 475.9]}, {"id": "kitchen", "a": "厨房", "b": "玄关", "axis": "v", "at": 235.0, "c": 800.0, "w": 80.0, "type": "swing", "gap": [[235.0, 760.0], [235.0, 840.0]], "hinge_pt": [235.0, 840.0], "closed_end": [235.0, 760.0], "open_end": [169.5, 794.1]}, {"id": "balcony", "a": "客厅", "b": "大阳台", "axis": "h", "at": 410.0, "c": 465.0, "w": 160.0, "type": "sliding", "gap": [[385.0, 410.0], [545.0, 410.0]], "hinge_pt": null, "closed_end": null, "open_end": null}, {"id": "sbalcony", "a": "厨房", "b": "小阳台", "axis": "h", "at": 665.0, "c": 52.0, "w": 90.0, "type": "opening", "gap": [[7.0, 665.0], [97.0, 665.0]], "hinge_pt": null, "closed_end": null, "open_end": null}], "draw": [{"role": "floor", "pts": [[1029.7, 230.56], [995.83, 211.27], [1056.46, 176.76], [902.43, 87.88], [842.66, 122.9], [793.83, 94.33], [500.91, 262.58], [738.38, 399.66]], "depth": -100000.0, "name": "卧室"}, {"role": "floor", "pts": [[1073.76, 376.68], [927.8, 292.4], [740.01, 400.82], [885.97, 485.1]], "depth": -99999.0, "name": "大阳台"}, {"role": "floor", "pts": [[883.23, 486.35], [613.14, 330.41], [394.49, 456.65], [664.58, 612.59]], "depth": -99998.0, "name": "客厅"}, {"role": "floor", "pts": [[662.5, 613.59], [392.71, 457.86], [328.7, 495.07], [452.27, 567.89], [359.28, 620.59], [504.05, 705.13]], "depth": -99997.0, "name": "书房"}, {"role": "floor", "pts": [[450.24, 566.31], [327.43, 495.4], [234.27, 549.19], [357.08, 620.1]], "depth": -99996.0, "name": "玄关"}, {"role": "floor", "pts": [[610.55, 329.43], [497.83, 264.35], [280.07, 390.07], [392.79, 455.15]], "depth": -99995.0, "name": "浴室"}, {"role": "floor", "pts": [[487.64, 268.53], [399.78, 217.81], [190.81, 338.47], [278.66, 389.19]], "depth": -99994.0, "name": "小阳台"}, {"role": "floor", "pts": [[389.62, 456.33], [188.83, 340.4], [30.76, 431.67], [231.55, 547.6]], "depth": -99993.0, "name": "厨房"}, {"role": "wallFace", "pts": [[907.32, 89.0], [877.01, 106.5], [877.01, 46.5], [907.32, 29.0]], "depth": 242.5, "tone": "dark"}, {"role": "wallFace", "pts": [[937.63, 111.5], [898.66, 89.0], [898.66, 29.0], [937.63, 51.5]], "depth": 247.5, "tone": "mid"}, {"role": "wallFace", "pts": [[813.36, 109.75], [788.68, 95.5], [788.68, 35.5], [813.36, 49.75]], "depth": 252.25, "tone": "mid"}, {"role": "ao", "pts": [[910.78, 87.0], [843.24, 126.0], [850.16, 130.0], [917.71, 91.0]], "depth": 254.5, "opacity": 0.14}, {"role": "ao", "pts": [[841.5, 126.0], [785.21, 93.5], [778.29, 97.5], [834.58, 130.0]], "depth": 261.0, "opacity": 0.14}, {"role": "wallFace", "pts": [[797.34, 95.5], [755.28, 119.79], [755.28, 59.79], [797.34, 35.5]], "depth": 262.29, "tone": "dark"}, {"role": "wallFace", "pts": [[877.01, 106.5], [846.7, 124.0], [846.7, 64.0], [877.01, 46.5]], "depth": 277.5, "tone": "dark"}, {"role": "wallFace", "pts": [[838.04, 124.0], [813.36, 109.75], [813.36, 49.75], [838.04, 64.0]], "depth": 280.75, "tone": "mid"}, {"role": "wallFace", "pts": [[846.7, 124.0], [838.04, 119.0], [838.04, 59.0], [846.7, 64.0]], "depth": 290.0, "tone": "mid"}, {"role": "wallFace", "pts": [[846.7, 119.0], [838.04, 124.0], [838.04, 64.0], [846.7, 59.0]], "depth": 290.0, "tone": "dark"}, {"role": "wallFace", "pts": [[976.6, 134.0], [937.63, 111.5], [937.63, 51.5], [976.6, 74.0]], "depth": 292.5, "tone": "mid"}, {"role": "wallTop", "pts": [[898.66, 24.0], [907.32, 29.0], [877.01, 46.5], [868.35, 41.5]], "depth": 297.5, "tone": "top"}, {"role": "wallTop", "pts": [[946.29, 46.5], [937.63, 51.5], [898.66, 29.0], [907.32, 24.0]], "depth": 302.5, "tone": "top"}, {"role": "wallTop", "pts": [[822.02, 44.75], [813.36, 49.75], [788.68, 35.5], [797.34, 30.5]], "depth": 307.25, "tone": "top"}, {"role": "ao", "pts": [[1058.0, 181.0], [895.2, 87.0], [888.27, 91.0], [1051.08, 185.0]], "depth": 309.5, "opacity": 0.14}, {"role": "wallFace", "pts": [[755.28, 119.79], [713.21, 144.07], [713.21, 84.07], [755.28, 59.79]], "depth": 310.86, "tone": "dark"}, {"role": "wallTop", "pts": [[788.68, 30.5], [797.34, 35.5], [755.28, 59.79], [746.62, 54.79]], "depth": 317.29, "tone": "top"}, {"role": "wallTop", "pts": [[868.35, 41.5], [877.01, 46.5], [846.7, 64.0], [838.04, 59.0]], "depth": 332.5, "tone": "top"}, {"role": "furnFace", "pts": [[993.92, 190.0], [872.68, 120.0], [872.68, 82.5], [993.92, 152.5]], "depth": 334.5, "tone": "mid", "mat": "wood"}, {"role": "wallTop", "pts": [[846.7, 59.0], [838.04, 64.0], [813.36, 49.75], [822.02, 44.75]], "depth": 335.75, "tone": "top"}, {"role": "wallFace", "pts": [[1015.57, 156.5], [976.6, 134.0], [976.6, 74.0], [1015.57, 96.5]], "depth": 337.5, "tone": "mid"}, {"role": "wallTop", "pts": [[985.26, 69.0], [976.6, 74.0], [937.63, 51.5], [946.29, 46.5]], "depth": 347.5, "tone": "top"}, {"role": "furnTop", "pts": [[911.65, 60.0], [1032.89, 130.0], [993.92, 152.5], [872.68, 82.5]], "depth": 349.5, "tone": "top", "mat": "wood"}, {"role": "wallFace", "pts": [[713.21, 144.07], [671.15, 168.36], [671.15, 108.36], [713.21, 84.07]], "depth": 359.43, "tone": "dark"}, {"role": "wallTop", "pts": [[746.62, 54.79], [755.28, 59.79], [713.21, 84.07], [704.55, 79.07]], "depth": 365.86, "tone": "top"}, {"role": "furnFace", "pts": [[1032.89, 167.5], [993.92, 190.0], [993.92, 152.5], [1032.89, 130.0]], "depth": 382.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[1054.54, 179.0], [1015.57, 156.5], [1015.57, 96.5], [1054.54, 119.0]], "depth": 382.5, "tone": "mid"}, {"role": "wallTop", "pts": [[1024.23, 91.5], [1015.57, 96.5], [976.6, 74.0], [985.26, 69.0]], "depth": 392.5, "tone": "top"}, {"role": "wallFace", "pts": [[1063.2, 174.0], [1054.54, 179.0], [1054.54, 119.0], [1063.2, 114.0]], "depth": 400.0, "tone": "dark"}, {"role": "ao", "pts": [[800.8, 93.5], [499.43, 267.5], [506.36, 271.5], [807.73, 97.5]], "depth": 402.5, "opacity": 0.14}, {"role": "wallFace", "pts": [[671.15, 168.36], [629.09, 192.64], [629.09, 132.64], [671.15, 108.36]], "depth": 408.0, "tone": "dark"}, {"role": "wallTop", "pts": [[704.55, 79.07], [713.21, 84.07], [671.15, 108.36], [662.49, 103.36]], "depth": 414.43, "tone": "top"}, {"role": "wallFace", "pts": [[1063.2, 179.0], [1032.89, 196.5], [1032.89, 136.5], [1063.2, 119.0]], "depth": 422.5, "tone": "dark"}, {"role": "ao", "pts": [[1058.0, 172.0], [990.46, 211.0], [983.53, 207.0], [1051.08, 168.0]], "depth": 434.5, "opacity": 0.14}, {"role": "wallTop", "pts": [[1063.2, 114.0], [1054.54, 119.0], [1015.57, 96.5], [1024.23, 91.5]], "depth": 437.5, "tone": "top"}, {"role": "wallFace", "pts": [[629.09, 192.64], [587.02, 216.93], [587.02, 156.93], [629.09, 132.64]], "depth": 456.57, "tone": "dark"}, {"role": "wallFace", "pts": [[1032.89, 196.5], [1002.58, 214.0], [1002.58, 154.0], [1032.89, 136.5]], "depth": 457.5, "tone": "dark"}, {"role": "wallTop", "pts": [[662.49, 103.36], [671.15, 108.36], [629.09, 132.64], [620.43, 127.64]], "depth": 463.0, "tone": "top"}, {"role": "wallFace", "pts": [[1002.58, 214.0], [993.92, 209.0], [993.92, 149.0], [1002.58, 154.0]], "depth": 470.0, "tone": "mid"}, {"role": "wallTop", "pts": [[1054.54, 114.0], [1063.2, 119.0], [1032.89, 136.5], [1024.23, 131.5]], "depth": 477.5, "tone": "top"}, {"role": "ao", "pts": [[1031.16, 235.5], [990.46, 212.0], [983.53, 216.0], [1024.23, 239.5]], "depth": 489.0, "opacity": 0.14}, {"role": "furnTop", "pts": [[823.32, 113.5], [953.22, 188.5], [780.02, 288.5], [650.12, 213.5]], "depth": 489.0, "tone": "top", "mat": "soft"}, {"role": "wallFace", "pts": [[1027.69, 233.5], [993.92, 214.0], [993.92, 154.0], [1027.69, 173.5]], "depth": 494.5, "tone": "mid"}, {"role": "wallFace", "pts": [[426.11, 236.17], [396.38, 219.0], [396.38, 159.0], [426.11, 176.17]], "depth": 502.17, "tone": "mid"}, {"role": "wallFace", "pts": [[587.02, 216.93], [544.96, 241.21], [544.96, 181.21], [587.02, 156.93]], "depth": 505.14, "tone": "dark"}, {"role": "wallFace", "pts": [[405.04, 219.0], [363.66, 242.89], [363.66, 182.89], [405.04, 159.0]], "depth": 508.89, "tone": "dark"}, {"role": "wallFace", "pts": [[1036.35, 228.5], [1027.69, 233.5], [1027.69, 173.5], [1036.35, 168.5]], "depth": 509.0, "tone": "dark"}, {"role": "wallTop", "pts": [[620.43, 127.64], [629.09, 132.64], [587.02, 156.93], [578.36, 151.93]], "depth": 511.57, "tone": "top"}, {"role": "wallTop", "pts": [[1024.23, 131.5], [1032.89, 136.5], [1002.58, 154.0], [993.92, 149.0]], "depth": 512.5, "tone": "top"}, {"role": "ao", "pts": [[489.04, 272.5], [392.92, 217.0], [385.99, 221.0], [482.11, 276.5]], "depth": 531.0, "opacity": 0.14}, {"role": "furnFace", "pts": [[394.65, 268.0], [360.01, 248.0], [360.01, 218.0], [394.65, 238.0]], "depth": 533.0, "tone": "mid", "mat": "wood"}, {"role": "furnFace", "pts": [[424.96, 250.5], [394.65, 268.0], [394.65, 238.0], [424.96, 220.5]], "depth": 535.5, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[455.85, 253.33], [426.11, 236.17], [426.11, 176.17], [455.85, 193.33]], "depth": 536.5, "tone": "mid"}, {"role": "wallFace", "pts": [[1036.35, 233.5], [994.29, 257.79], [994.29, 197.79], [1036.35, 173.5]], "depth": 538.29, "tone": "dark"}, {"role": "furnFace", "pts": [[953.22, 213.5], [780.02, 313.5], [780.02, 288.5], [953.22, 188.5]], "depth": 539.0, "tone": "dark", "mat": "soft"}, {"role": "furnTop", "pts": [[390.32, 200.5], [424.96, 220.5], [394.65, 238.0], [360.01, 218.0]], "depth": 545.5, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[1036.35, 168.5], [1027.69, 173.5], [993.92, 154.0], [1002.58, 149.0]], "depth": 549.5, "tone": "top"}, {"role": "wallFace", "pts": [[544.96, 241.21], [502.9, 265.5], [502.9, 205.5], [544.96, 181.21]], "depth": 553.71, "tone": "dark"}, {"role": "wallFace", "pts": [[363.66, 242.89], [322.29, 266.78], [322.29, 206.78], [363.66, 182.89]], "depth": 556.67, "tone": "dark"}, {"role": "wallTop", "pts": [[434.77, 171.17], [426.11, 176.17], [396.38, 159.0], [405.04, 154.0]], "depth": 557.17, "tone": "top"}, {"role": "wallTop", "pts": [[578.36, 151.93], [587.02, 156.93], [544.96, 181.21], [536.3, 176.21]], "depth": 560.14, "tone": "top"}, {"role": "wallTop", "pts": [[396.38, 154.0], [405.04, 159.0], [363.66, 182.89], [355.0, 177.89]], "depth": 563.89, "tone": "top"}, {"role": "furnFace", "pts": [[780.02, 313.5], [650.12, 238.5], [650.12, 213.5], [780.02, 288.5]], "depth": 564.0, "tone": "mid", "mat": "soft"}, {"role": "wallFace", "pts": [[485.58, 270.5], [455.85, 253.33], [455.85, 193.33], [485.58, 210.5]], "depth": 570.83, "tone": "mid"}, {"role": "wallFace", "pts": [[502.9, 265.5], [494.24, 260.5], [494.24, 200.5], [502.9, 205.5]], "depth": 573.0, "tone": "mid"}, {"role": "wallFace", "pts": [[494.24, 265.5], [485.58, 270.5], [485.58, 210.5], [494.24, 205.5]], "depth": 583.0, "tone": "dark"}, {"role": "wallFace", "pts": [[994.29, 257.79], [952.23, 282.07], [952.23, 222.07], [994.29, 197.79]], "depth": 586.86, "tone": "dark"}, {"role": "wallTop", "pts": [[464.51, 188.33], [455.85, 193.33], [426.11, 176.17], [434.77, 171.17]], "depth": 591.5, "tone": "top"}, {"role": "wallTop", "pts": [[1027.69, 168.5], [1036.35, 173.5], [994.29, 197.79], [985.63, 192.79]], "depth": 593.29, "tone": "top"}, {"role": "wallFace", "pts": [[502.9, 265.5], [466.09, 286.75], [466.09, 226.75], [502.9, 205.5]], "depth": 599.25, "tone": "dark"}, {"role": "wallFace", "pts": [[534.18, 288.56], [494.24, 265.5], [494.24, 205.5], [534.18, 228.56]], "depth": 601.06, "tone": "mid"}, {"role": "wallFace", "pts": [[322.29, 266.78], [280.91, 290.67], [280.91, 230.67], [322.29, 206.78]], "depth": 604.44, "tone": "dark"}, {"role": "wallTop", "pts": [[536.3, 176.21], [544.96, 181.21], [502.9, 205.5], [494.24, 200.5]], "depth": 608.71, "tone": "top"}, {"role": "wallTop", "pts": [[355.0, 177.89], [363.66, 182.89], [322.29, 206.78], [313.63, 201.78]], "depth": 611.67, "tone": "top"}, {"role": "wallTop", "pts": [[494.24, 205.5], [485.58, 210.5], [455.85, 193.33], [464.51, 188.33]], "depth": 625.83, "tone": "top"}, {"role": "wallFace", "pts": [[952.23, 282.07], [910.17, 306.36], [910.17, 246.36], [952.23, 222.07]], "depth": 635.43, "tone": "dark"}, {"role": "ao", "pts": [[920.31, 291.5], [941.09, 303.5], [934.17, 307.5], [913.38, 295.5]], "depth": 636.5, "opacity": 0.14}, {"role": "wallFace", "pts": [[466.09, 286.75], [429.29, 308.0], [429.29, 248.0], [466.09, 226.75]], "depth": 641.75, "tone": "dark"}, {"role": "wallTop", "pts": [[985.63, 192.79], [994.29, 197.79], [952.23, 222.07], [943.57, 217.07]], "depth": 641.86, "tone": "top"}, {"role": "wallFace", "pts": [[937.63, 301.5], [923.77, 293.5], [923.77, 233.5], [937.63, 241.5]], "depth": 642.0, "tone": "mid"}, {"role": "wallFace", "pts": [[946.29, 296.5], [937.63, 301.5], [937.63, 241.5], [946.29, 236.5]], "depth": 645.0, "tone": "dark"}, {"role": "wallFace", "pts": [[574.13, 311.62], [534.18, 288.56], [534.18, 228.56], [574.13, 251.62]], "depth": 647.19, "tone": "mid"}, {"role": "wallFace", "pts": [[280.91, 290.67], [239.54, 314.56], [239.54, 254.56], [280.91, 230.67]], "depth": 652.22, "tone": "dark"}, {"role": "wallTop", "pts": [[494.24, 200.5], [502.9, 205.5], [466.09, 226.75], [457.43, 221.75]], "depth": 654.25, "tone": "top"}, {"role": "wallTop", "pts": [[494.24, 205.5], [502.9, 200.5], [542.84, 223.56], [534.18, 228.56]], "depth": 656.06, "tone": "top"}, {"role": "furnFace", "pts": [[664.84, 353.0], [508.96, 263.0], [508.96, 208.0], [664.84, 298.0]], "depth": 658.0, "tone": "mid", "mat": "wood"}, {"role": "wallTop", "pts": [[313.63, 201.78], [322.29, 206.78], [280.91, 230.67], [272.25, 225.67]], "depth": 659.44, "tone": "top"}, {"role": "ao", "pts": [[490.77, 263.5], [657.48, 359.75], [650.55, 363.75], [483.85, 267.5]], "depth": 664.75, "opacity": 0.14}, {"role": "ao", "pts": [[499.43, 258.5], [666.14, 354.75], [673.07, 350.75], [506.36, 254.5]], "depth": 664.75, "opacity": 0.14}, {"role": "wallFace", "pts": [[971.19, 320.88], [937.63, 301.5], [937.63, 241.5], [971.19, 260.88]], "depth": 669.38, "tone": "mid"}, {"role": "ao", "pts": [[1031.16, 226.5], [729.79, 400.5], [722.86, 396.5], [1024.23, 222.5]], "depth": 678.5, "opacity": 0.14}, {"role": "ao", "pts": [[1039.82, 231.5], [738.45, 405.5], [745.38, 409.5], [1046.75, 235.5]], "depth": 678.5, "opacity": 0.14}, {"role": "furnTop", "pts": [[560.92, 178.0], [716.8, 268.0], [664.84, 298.0], [508.96, 208.0]], "depth": 683.0, "tone": "top", "mat": "wood"}, {"role": "wallFace", "pts": [[910.17, 306.36], [868.1, 330.64], [868.1, 270.64], [910.17, 246.36]], "depth": 684.0, "tone": "dark"}, {"role": "wallFace", "pts": [[429.29, 308.0], [392.48, 329.25], [392.48, 269.25], [429.29, 248.0]], "depth": 684.25, "tone": "dark"}, {"role": "wallTop", "pts": [[943.57, 217.07], [952.23, 222.07], [910.17, 246.36], [901.51, 241.36]], "depth": 690.43, "tone": "top"}, {"role": "wallFace", "pts": [[614.07, 334.69], [574.13, 311.62], [574.13, 251.62], [614.07, 274.69]], "depth": 693.31, "tone": "mid"}, {"role": "ao", "pts": [[408.5, 217.0], [29.2, 436.0], [36.12, 440.0], [415.43, 221.0]], "depth": 694.5, "opacity": 0.14}, {"role": "wallTop", "pts": [[457.43, 221.75], [466.09, 226.75], [429.29, 248.0], [420.63, 243.0]], "depth": 696.75, "tone": "top"}, {"role": "wallTop", "pts": [[923.77, 233.5], [932.43, 228.5], [946.29, 236.5], [937.63, 241.5]], "depth": 697.0, "tone": "top"}, {"role": "wallFace", "pts": [[239.54, 314.56], [198.16, 338.44], [198.16, 278.44], [239.54, 254.56]], "depth": 700.0, "tone": "dark"}, {"role": "ao", "pts": [[497.7, 258.5], [269.94, 390.0], [263.02, 386.0], [490.77, 254.5]], "depth": 700.0, "opacity": 0.14}, {"role": "ao", "pts": [[506.36, 263.5], [278.6, 395.0], [285.53, 399.0], [513.29, 267.5]], "depth": 700.0, "opacity": 0.14}, {"role": "wallTop", "pts": [[534.18, 228.56], [542.84, 223.56], [582.79, 246.62], [574.13, 251.62]], "depth": 702.19, "tone": "top"}, {"role": "doorFace", "pts": [[499.51, 327.81], [498.66, 330.59], [498.66, 271.59], [499.51, 268.81]], "depth": 704.4, "tone": "dark", "mat": "door", "door": "bath"}, {"role": "wallTop", "pts": [[272.25, 225.67], [280.91, 230.67], [239.54, 254.56], [230.88, 249.56]], "depth": 707.22, "tone": "top"}, {"role": "furnFace", "pts": [[334.03, 318.0], [282.07, 348.0], [282.07, 293.0], [334.03, 263.0]], "depth": 708.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[1004.74, 340.25], [971.19, 320.88], [971.19, 260.88], [1004.74, 280.25]], "depth": 708.12, "tone": "mid"}, {"role": "furnFace", "pts": [[282.07, 348.0], [234.44, 320.5], [234.44, 265.5], [282.07, 293.0]], "depth": 710.5, "tone": "mid", "mat": "wood"}, {"role": "doorFace", "pts": [[595.98, 337.61], [499.51, 327.81], [499.51, 268.81], [595.98, 278.61]], "depth": 711.41, "tone": "mid", "mat": "door", "door": "bath"}, {"role": "ao", "pts": [[612.01, 324.5], [587.77, 338.5], [580.84, 334.5], [605.09, 320.5]], "depth": 714.5, "opacity": 0.14}, {"role": "ao", "pts": [[620.67, 329.5], [596.43, 343.5], [603.35, 347.5], [627.6, 333.5]], "depth": 714.5, "opacity": 0.14}, {"role": "furnFace", "pts": [[576.51, 314.0], [498.57, 359.0], [498.57, 304.0], [576.51, 259.0]], "depth": 715.0, "tone": "dark", "mat": "hard"}, {"role": "furnFace", "pts": [[498.57, 359.0], [420.63, 314.0], [420.63, 259.0], [498.57, 304.0]], "depth": 715.0, "tone": "mid", "mat": "hard"}, {"role": "furnFace", "pts": [[716.8, 323.0], [664.84, 353.0], [664.84, 298.0], [716.8, 268.0]], "depth": 718.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[617.21, 331.5], [599.89, 341.5], [599.89, 281.5], [617.21, 271.5]], "depth": 720.0, "tone": "dark"}, {"role": "ao", "pts": [[1075.32, 381.0], [934.17, 299.5], [927.24, 303.5], [1068.4, 385.0]], "depth": 722.0, "opacity": 0.14}, {"role": "doorFace", "pts": [[752.38, 338.79], [747.56, 338.31], [747.56, 279.31], [752.38, 279.79]], "depth": 723.1, "tone": "mid", "mat": "door", "door": "bedroom"}, {"role": "wallTop", "pts": [[979.85, 255.88], [971.19, 260.88], [937.63, 241.5], [946.29, 236.5]], "depth": 724.38, "tone": "top"}, {"role": "wallFace", "pts": [[599.89, 341.5], [591.23, 336.5], [591.23, 276.5], [599.89, 281.5]], "depth": 725.0, "tone": "mid"}, {"role": "furnTop", "pts": [[498.57, 214.0], [576.51, 259.0], [498.57, 304.0], [420.63, 259.0]], "depth": 725.0, "tone": "top", "mat": "hard"}, {"role": "wallFace", "pts": [[392.48, 329.25], [355.68, 350.5], [355.68, 290.5], [392.48, 269.25]], "depth": 726.75, "tone": "dark"}, {"role": "ao", "pts": [[180.75, 339.5], [193.74, 347.0], [186.81, 351.0], [173.82, 343.5]], "depth": 728.0, "opacity": 0.14}, {"role": "ao", "pts": [[189.41, 334.5], [202.4, 342.0], [209.32, 338.0], [196.33, 330.5]], "depth": 728.0, "opacity": 0.14}, {"role": "furnFace", "pts": [[430.15, 368.5], [378.19, 338.5], [378.19, 301.0], [430.15, 331.0]], "depth": 731.5, "tone": "mid", "mat": "wood"}, {"role": "wallFace", "pts": [[198.93, 340.0], [190.27, 345.0], [190.27, 285.0], [198.93, 280.0]], "depth": 732.0, "tone": "dark"}, {"role": "wallFace", "pts": [[868.1, 330.64], [826.04, 354.93], [826.04, 294.93], [868.1, 270.64]], "depth": 732.57, "tone": "dark"}, {"role": "wallFace", "pts": [[190.27, 345.0], [184.21, 341.5], [184.21, 281.5], [190.27, 285.0]], "depth": 733.5, "tone": "mid"}, {"role": "furnTop", "pts": [[286.4, 235.5], [334.03, 263.0], [282.07, 293.0], [234.44, 265.5]], "depth": 735.5, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[901.51, 241.36], [910.17, 246.36], [868.1, 270.64], [859.44, 265.64]], "depth": 739.0, "tone": "top"}, {"role": "wallTop", "pts": [[420.63, 243.0], [429.29, 248.0], [392.48, 269.25], [383.82, 264.25]], "depth": 739.25, "tone": "top"}, {"role": "wallFace", "pts": [[654.02, 357.75], [614.07, 334.69], [614.07, 274.69], [654.02, 297.75]], "depth": 739.44, "tone": "mid"}, {"role": "furnFace", "pts": [[464.79, 348.5], [430.15, 368.5], [430.15, 331.0], [464.79, 311.0]], "depth": 741.5, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[1038.3, 359.62], [1004.74, 340.25], [1004.74, 280.25], [1038.3, 299.62]], "depth": 746.88, "tone": "mid"}, {"role": "wallFace", "pts": [[198.16, 338.44], [156.79, 362.33], [156.79, 302.33], [198.16, 278.44]], "depth": 747.78, "tone": "dark"}, {"role": "wallTop", "pts": [[574.13, 251.62], [582.79, 246.62], [622.73, 269.69], [614.07, 274.69]], "depth": 748.31, "tone": "top"}, {"role": "furnTop", "pts": [[412.83, 281.0], [464.79, 311.0], [430.15, 331.0], [378.19, 301.0]], "depth": 749.0, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[230.88, 249.56], [239.54, 254.56], [198.16, 278.44], [189.5, 273.44]], "depth": 755.0, "tone": "top"}, {"role": "wallFace", "pts": [[662.68, 352.75], [654.02, 357.75], [654.02, 297.75], [662.68, 292.75]], "depth": 757.5, "tone": "dark"}, {"role": "wallTop", "pts": [[1013.4, 275.25], [1004.74, 280.25], [971.19, 260.88], [979.85, 255.88]], "depth": 763.12, "tone": "top"}, {"role": "wallFace", "pts": [[355.68, 350.5], [318.87, 371.75], [318.87, 311.75], [355.68, 290.5]], "depth": 769.25, "tone": "dark"}, {"role": "doorTop", "pts": [[595.98, 278.61], [499.51, 268.81], [498.66, 271.59], [595.14, 281.39]], "depth": 773.2, "tone": "top", "mat": "door", "door": "bath"}, {"role": "wallTop", "pts": [[608.55, 266.5], [617.21, 271.5], [599.89, 281.5], [591.23, 276.5]], "depth": 775.0, "tone": "top"}, {"role": "wallFace", "pts": [[826.04, 354.93], [783.98, 379.21], [783.98, 319.21], [826.04, 294.93]], "depth": 781.14, "tone": "dark"}, {"role": "wallTop", "pts": [[383.82, 264.25], [392.48, 269.25], [355.68, 290.5], [347.02, 285.5]], "depth": 781.75, "tone": "top"}, {"role": "doorFace", "pts": [[747.56, 338.31], [729.54, 397.51], [729.54, 338.51], [747.56, 279.31]], "depth": 781.81, "tone": "dark", "mat": "door", "door": "bedroom"}, {"role": "wallFace", "pts": [[1071.86, 379.0], [1038.3, 359.62], [1038.3, 299.62], [1071.86, 319.0]], "depth": 785.62, "tone": "mid"}, {"role": "wallTop", "pts": [[859.44, 265.64], [868.1, 270.64], [826.04, 294.93], [817.38, 289.93]], "depth": 787.57, "tone": "top"}, {"role": "wallTop", "pts": [[184.21, 281.5], [192.87, 276.5], [198.93, 280.0], [190.27, 285.0]], "depth": 788.5, "tone": "top"}, {"role": "wallTop", "pts": [[614.07, 274.69], [622.73, 269.69], [662.68, 292.75], [654.02, 297.75]], "depth": 794.44, "tone": "top"}, {"role": "wallFace", "pts": [[156.79, 362.33], [115.41, 386.22], [115.41, 326.22], [156.79, 302.33]], "depth": 795.56, "tone": "dark"}, {"role": "wallFace", "pts": [[1080.52, 374.0], [1071.86, 379.0], [1071.86, 319.0], [1080.52, 314.0]], "depth": 800.0, "tone": "dark"}, {"role": "furnFace", "pts": [[1000.85, 407.0], [947.16, 376.0], [947.16, 346.0], [1000.85, 377.0]], "depth": 800.0, "tone": "mid", "mat": "wood"}, {"role": "wallTop", "pts": [[1046.96, 294.62], [1038.3, 299.62], [1004.74, 280.25], [1013.4, 275.25]], "depth": 801.88, "tone": "top"}, {"role": "wallTop", "pts": [[189.5, 273.44], [198.16, 278.44], [156.79, 302.33], [148.13, 297.33]], "depth": 802.78, "tone": "top"}, {"role": "furnTop", "pts": [[993.92, 319.0], [1047.61, 350.0], [1000.85, 377.0], [947.16, 346.0]], "depth": 803.0, "tone": "top", "mat": "wood"}, {"role": "furnFace", "pts": [[1047.61, 380.0], [1000.85, 407.0], [1000.85, 377.0], [1047.61, 350.0]], "depth": 804.0, "tone": "dark", "mat": "wood"}, {"role": "furnFace", "pts": [[395.51, 373.5], [347.88, 401.0], [347.88, 358.5], [395.51, 331.0]], "depth": 804.0, "tone": "dark", "mat": "wood"}, {"role": "furnFace", "pts": [[347.88, 401.0], [308.91, 378.5], [308.91, 336.0], [347.88, 358.5]], "depth": 809.0, "tone": "mid", "mat": "wood"}, {"role": "wallFace", "pts": [[318.87, 371.75], [282.07, 393.0], [282.07, 333.0], [318.87, 311.75]], "depth": 811.75, "tone": "dark"}, {"role": "furnTop", "pts": [[356.54, 308.5], [395.51, 331.0], [347.88, 358.5], [308.91, 336.0]], "depth": 824.0, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[347.02, 285.5], [355.68, 290.5], [318.87, 311.75], [310.21, 306.75]], "depth": 824.25, "tone": "top"}, {"role": "wallFace", "pts": [[282.07, 393.0], [273.41, 388.0], [273.41, 328.0], [282.07, 333.0]], "depth": 828.0, "tone": "mid"}, {"role": "wallFace", "pts": [[1080.52, 379.0], [1039.69, 402.57], [1039.69, 342.57], [1080.52, 319.0]], "depth": 828.57, "tone": "dark"}, {"role": "wallFace", "pts": [[783.98, 379.21], [741.91, 403.5], [741.91, 343.5], [783.98, 319.21]], "depth": 829.71, "tone": "dark"}, {"role": "wallFace", "pts": [[530.61, 381.5], [487.31, 406.5], [487.31, 346.5], [530.61, 321.5]], "depth": 835.0, "tone": "dark"}, {"role": "wallTop", "pts": [[817.38, 289.93], [826.04, 294.93], [783.98, 319.21], [775.32, 314.21]], "depth": 836.14, "tone": "top"}, {"role": "wallTop", "pts": [[1080.52, 314.0], [1071.86, 319.0], [1038.3, 299.62], [1046.96, 294.62]], "depth": 840.62, "tone": "top"}, {"role": "doorTop", "pts": [[734.37, 338.99], [752.38, 279.79], [747.56, 279.31], [729.54, 338.51]], "depth": 841.3, "tone": "top", "mat": "door", "door": "bedroom"}, {"role": "wallFace", "pts": [[115.41, 386.22], [74.04, 410.11], [74.04, 350.11], [115.41, 326.22]], "depth": 843.33, "tone": "dark"}, {"role": "ao", "pts": [[724.16, 398.25], [736.72, 405.5], [729.79, 409.5], [717.23, 402.25]], "depth": 845.25, "opacity": 0.14}, {"role": "ao", "pts": [[732.82, 393.25], [745.38, 400.5], [752.31, 396.5], [739.75, 389.25]], "depth": 845.25, "opacity": 0.14}, {"role": "furnFace", "pts": [[211.06, 387.0], [138.31, 429.0], [138.31, 386.5], [211.06, 344.5]], "depth": 845.5, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[741.91, 403.5], [733.25, 398.5], [733.25, 338.5], [741.91, 343.5]], "depth": 849.0, "tone": "mid"}, {"role": "wallFace", "pts": [[741.91, 398.5], [733.25, 403.5], [733.25, 343.5], [741.91, 338.5]], "depth": 849.0, "tone": "dark"}, {"role": "wallFace", "pts": [[308.05, 413.0], [268.21, 390.0], [268.21, 330.0], [308.05, 353.0]], "depth": 850.0, "tone": "mid"}, {"role": "wallTop", "pts": [[148.13, 297.33], [156.79, 302.33], [115.41, 326.22], [106.75, 321.22]], "depth": 850.56, "tone": "top"}, {"role": "wallFace", "pts": [[733.25, 403.5], [727.62, 400.25], [727.62, 340.25], [733.25, 343.5]], "depth": 850.75, "tone": "mid"}, {"role": "ao", "pts": [[729.79, 401.5], [741.91, 408.5], [734.99, 412.5], [722.86, 405.5]], "depth": 851.5, "opacity": 0.14}, {"role": "ao", "pts": [[738.45, 396.5], [750.57, 403.5], [757.5, 399.5], [745.38, 392.5]], "depth": 851.5, "opacity": 0.14}, {"role": "furnTop", "pts": [[164.29, 318.5], [203.26, 341.0], [168.62, 361.0], [129.65, 338.5]], "depth": 852.5, "tone": "top", "mat": "hard"}, {"role": "furnTop", "pts": [[396.38, 376.5], [431.02, 396.5], [392.05, 419.0], [357.41, 399.0]], "depth": 852.5, "tone": "top", "mat": "wood"}, {"role": "wallFace", "pts": [[747.11, 401.5], [738.45, 406.5], [738.45, 346.5], [747.11, 341.5]], "depth": 855.0, "tone": "dark"}, {"role": "furnFace", "pts": [[431.02, 414.0], [392.05, 436.5], [392.05, 419.0], [431.02, 396.5]], "depth": 855.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[738.45, 406.5], [733.25, 403.5], [733.25, 343.5], [738.45, 346.5]], "depth": 857.0, "tone": "mid"}, {"role": "furnFace", "pts": [[392.05, 436.5], [357.41, 416.5], [357.41, 399.0], [392.05, 419.0]], "depth": 857.5, "tone": "mid", "mat": "wood"}, {"role": "furnFace", "pts": [[138.31, 429.0], [90.68, 401.5], [90.68, 359.0], [138.31, 386.5]], "depth": 860.0, "tone": "mid", "mat": "wood"}, {"role": "furnTop", "pts": [[163.43, 317.0], [211.06, 344.5], [138.31, 386.5], [90.68, 359.0]], "depth": 860.5, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[310.21, 306.75], [318.87, 311.75], [282.07, 333.0], [273.41, 328.0]], "depth": 866.75, "tone": "top"}, {"role": "furnFace", "pts": [[168.62, 365.0], [129.65, 342.5], [129.65, 338.5], [168.62, 361.0]], "depth": 868.5, "tone": "mid", "mat": "hard"}, {"role": "furnFace", "pts": [[203.26, 345.0], [168.62, 365.0], [168.62, 361.0], [203.26, 341.0]], "depth": 871.0, "tone": "dark", "mat": "hard"}, {"role": "wallFace", "pts": [[1039.69, 402.57], [998.87, 426.14], [998.87, 366.14], [1039.69, 342.57]], "depth": 875.71, "tone": "dark"}, {"role": "wallTop", "pts": [[1071.86, 314.0], [1080.52, 319.0], [1039.69, 342.57], [1031.03, 337.57]], "depth": 883.57, "tone": "top"}, {"role": "wallTop", "pts": [[775.32, 314.21], [783.98, 319.21], [741.91, 343.5], [733.25, 338.5]], "depth": 884.71, "tone": "top"}, {"role": "wallFace", "pts": [[487.31, 406.5], [444.01, 431.5], [444.01, 371.5], [487.31, 346.5]], "depth": 885.0, "tone": "dark"}, {"role": "wallTop", "pts": [[521.95, 316.5], [530.61, 321.5], [487.31, 346.5], [478.65, 341.5]], "depth": 890.0, "tone": "top"}, {"role": "ao", "pts": [[264.75, 388.0], [391.18, 461.0], [384.26, 465.0], [257.82, 392.0]], "depth": 890.5, "opacity": 0.14}, {"role": "ao", "pts": [[273.41, 383.0], [399.84, 456.0], [406.77, 452.0], [280.34, 379.0]], "depth": 890.5, "opacity": 0.14}, {"role": "wallFace", "pts": [[74.04, 410.11], [32.66, 434.0], [32.66, 374.0], [74.04, 350.11]], "depth": 891.11, "tone": "dark"}, {"role": "wallFace", "pts": [[347.88, 436.0], [308.05, 413.0], [308.05, 353.0], [347.88, 376.0]], "depth": 896.0, "tone": "mid"}, {"role": "doorFace", "pts": [[820.29, 447.25], [744.08, 403.25], [744.08, 344.25], [820.29, 388.25]], "depth": 896.5, "tone": "mid", "mat": "door", "door": "balcony"}, {"role": "wallTop", "pts": [[106.75, 321.22], [115.41, 326.22], [74.04, 350.11], [65.38, 345.11]], "depth": 898.33, "tone": "top"}, {"role": "wallTop", "pts": [[268.21, 330.0], [276.87, 325.0], [316.71, 348.0], [308.05, 353.0]], "depth": 905.0, "tone": "top"}, {"role": "wallTop", "pts": [[727.62, 340.25], [736.29, 335.25], [741.91, 338.5], [733.25, 343.5]], "depth": 905.75, "tone": "top"}, {"role": "wallFace", "pts": [[32.66, 434.0], [24.0, 429.0], [24.0, 369.0], [32.66, 374.0]], "depth": 910.0, "tone": "mid"}, {"role": "wallTop", "pts": [[733.25, 343.5], [741.91, 338.5], [747.11, 341.5], [738.45, 346.5]], "depth": 912.0, "tone": "top"}, {"role": "wallFace", "pts": [[998.87, 426.14], [958.04, 449.71], [958.04, 389.71], [998.87, 366.14]], "depth": 922.86, "tone": "dark"}, {"role": "ao", "pts": [[525.41, 374.5], [301.99, 503.5], [295.06, 499.5], [518.49, 370.5]], "depth": 929.5, "opacity": 0.14}, {"role": "ao", "pts": [[534.07, 379.5], [310.65, 508.5], [317.57, 512.5], [541.0, 383.5]], "depth": 929.5, "opacity": 0.14}, {"role": "furnFace", "pts": [[359.14, 468.5], [334.89, 454.5], [334.89, 434.5], [359.14, 448.5]], "depth": 930.0, "tone": "mid", "mat": "wood"}, {"role": "wallTop", "pts": [[1031.03, 337.57], [1039.69, 342.57], [998.87, 366.14], [990.21, 361.14]], "depth": 930.71, "tone": "top"}, {"role": "furnFace", "pts": [[379.93, 456.5], [359.14, 468.5], [359.14, 448.5], [379.93, 436.5]], "depth": 932.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[444.01, 431.5], [400.71, 456.5], [400.71, 396.5], [444.01, 371.5]], "depth": 935.0, "tone": "dark"}, {"role": "wallFace", "pts": [[60.81, 455.25], [24.0, 434.0], [24.0, 374.0], [60.81, 395.25]], "depth": 936.25, "tone": "mid"}, {"role": "furnTop", "pts": [[355.68, 422.5], [379.93, 436.5], [359.14, 448.5], [334.89, 434.5]], "depth": 938.0, "tone": "top", "mat": "wood"}, {"role": "doorFace", "pts": [[823.75, 445.25], [820.29, 447.25], [820.29, 388.25], [823.75, 386.25]], "depth": 938.5, "tone": "dark", "mat": "door", "door": "balcony"}, {"role": "wallTop", "pts": [[478.65, 341.5], [487.31, 346.5], [444.01, 371.5], [435.35, 366.5]], "depth": 940.0, "tone": "top"}, {"role": "wallFace", "pts": [[387.72, 459.0], [347.88, 436.0], [347.88, 376.0], [387.72, 399.0]], "depth": 942.0, "tone": "mid"}, {"role": "wallTop", "pts": [[65.38, 345.11], [74.04, 350.11], [32.66, 374.0], [24.0, 369.0]], "depth": 946.11, "tone": "top"}, {"role": "wallTop", "pts": [[308.05, 353.0], [316.71, 348.0], [356.54, 371.0], [347.88, 376.0]], "depth": 951.0, "tone": "top"}, {"role": "doorTop", "pts": [[747.54, 342.25], [823.75, 386.25], [820.29, 388.25], [744.08, 344.25]], "depth": 953.5, "tone": "top", "mat": "door", "door": "balcony"}, {"role": "wallFace", "pts": [[396.38, 454.0], [387.72, 459.0], [387.72, 399.0], [396.38, 394.0]], "depth": 960.0, "tone": "dark"}, {"role": "furnTop", "pts": [[97.61, 371.0], [153.9, 403.5], [114.93, 426.0], [58.64, 393.5]], "depth": 966.0, "tone": "top", "mat": "hard"}, {"role": "wallFace", "pts": [[958.04, 449.71], [917.22, 473.29], [917.22, 413.29], [958.04, 389.71]], "depth": 970.0, "tone": "dark"}, {"role": "doorFace", "pts": [[876.58, 486.75], [800.37, 442.75], [800.37, 383.75], [876.58, 427.75]], "depth": 975.5, "tone": "mid", "mat": "door", "door": "balcony"}, {"role": "wallTop", "pts": [[990.21, 361.14], [998.87, 366.14], [958.04, 389.71], [949.38, 384.71]], "depth": 977.86, "tone": "top"}, {"role": "wallFace", "pts": [[97.61, 476.5], [60.81, 455.25], [60.81, 395.25], [97.61, 416.5]], "depth": 978.75, "tone": "mid"}, {"role": "wallFace", "pts": [[400.71, 456.5], [357.41, 481.5], [357.41, 421.5], [400.71, 396.5]], "depth": 985.0, "tone": "dark"}, {"role": "furnFace", "pts": [[114.93, 429.0], [58.64, 396.5], [58.64, 393.5], [114.93, 426.0]], "depth": 985.5, "tone": "mid", "mat": "hard"}, {"role": "wallTop", "pts": [[435.35, 366.5], [444.01, 371.5], [400.71, 396.5], [392.05, 391.5]], "depth": 990.0, "tone": "top"}, {"role": "wallTop", "pts": [[24.0, 374.0], [32.66, 369.0], [69.46, 390.25], [60.81, 395.25]], "depth": 991.25, "tone": "top"}, {"role": "furnFace", "pts": [[153.9, 406.5], [114.93, 429.0], [114.93, 426.0], [153.9, 403.5]], "depth": 995.5, "tone": "dark", "mat": "hard"}, {"role": "wallTop", "pts": [[347.88, 376.0], [356.54, 371.0], [396.38, 394.0], [387.72, 399.0]], "depth": 997.0, "tone": "top"}, {"role": "furnFace", "pts": [[231.84, 543.0], [38.72, 431.5], [38.72, 389.0], [231.84, 500.5]], "depth": 1004.0, "tone": "mid", "mat": "wood"}, {"role": "furnTop", "pts": [[90.68, 359.0], [283.8, 470.5], [231.84, 500.5], [38.72, 389.0]], "depth": 1016.5, "tone": "top", "mat": "wood"}, {"role": "ao", "pts": [[873.55, 484.5], [884.8, 491.0], [877.88, 495.0], [866.62, 488.5]], "depth": 1017.0, "opacity": 0.14}, {"role": "ao", "pts": [[882.21, 479.5], [893.46, 486.0], [900.39, 482.0], [889.13, 475.5]], "depth": 1017.0, "opacity": 0.14}, {"role": "wallFace", "pts": [[917.22, 473.29], [876.39, 496.86], [876.39, 436.86], [917.22, 413.29]], "depth": 1017.14, "tone": "dark"}, {"role": "doorFace", "pts": [[880.04, 484.75], [876.58, 486.75], [876.58, 427.75], [880.04, 425.75]], "depth": 1017.5, "tone": "dark", "mat": "door", "door": "balcony"}, {"role": "wallFace", "pts": [[890.0, 484.0], [881.34, 489.0], [881.34, 429.0], [890.0, 424.0]], "depth": 1020.0, "tone": "dark"}, {"role": "wallFace", "pts": [[134.42, 497.75], [97.61, 476.5], [97.61, 416.5], [134.42, 437.75]], "depth": 1021.25, "tone": "mid"}, {"role": "wallFace", "pts": [[881.34, 489.0], [877.01, 486.5], [877.01, 426.5], [881.34, 429.0]], "depth": 1022.5, "tone": "mid"}, {"role": "doorFace", "pts": [[225.94, 488.05], [221.11, 488.55], [221.11, 429.55], [225.94, 429.05]], "depth": 1022.6, "tone": "dark", "mat": "door", "door": "kitchen"}, {"role": "wallTop", "pts": [[949.38, 384.71], [958.04, 389.71], [917.22, 413.29], [908.56, 408.29]], "depth": 1025.0, "tone": "top"}, {"role": "doorTop", "pts": [[803.83, 381.75], [880.04, 425.75], [876.58, 427.75], [800.37, 383.75]], "depth": 1032.5, "tone": "top", "mat": "door", "door": "balcony"}, {"role": "wallTop", "pts": [[60.81, 395.25], [69.46, 390.25], [106.27, 411.5], [97.61, 416.5]], "depth": 1033.75, "tone": "top"}, {"role": "wallFace", "pts": [[357.41, 481.5], [314.11, 506.5], [314.11, 446.5], [357.41, 421.5]], "depth": 1035.0, "tone": "dark"}, {"role": "ao", "pts": [[29.2, 427.0], [256.95, 558.5], [263.88, 554.5], [36.12, 423.0]], "depth": 1037.0, "opacity": 0.14}, {"role": "wallTop", "pts": [[392.05, 391.5], [400.71, 396.5], [357.41, 421.5], [348.75, 416.5]], "depth": 1040.0, "tone": "top"}, {"role": "furnFace", "pts": [[875.28, 486.5], [828.51, 513.5], [828.51, 458.5], [875.28, 431.5]], "depth": 1042.0, "tone": "dark", "mat": "wood"}, {"role": "furnFace", "pts": [[828.51, 513.5], [798.2, 496.0], [798.2, 441.0], [828.51, 458.5]], "depth": 1051.5, "tone": "mid", "mat": "wood"}, {"role": "wallFace", "pts": [[314.11, 506.5], [305.45, 501.5], [305.45, 441.5], [314.11, 446.5]], "depth": 1055.0, "tone": "mid"}, {"role": "wallFace", "pts": [[171.22, 519.0], [134.42, 497.75], [134.42, 437.75], [171.22, 459.0]], "depth": 1063.75, "tone": "mid"}, {"role": "wallFace", "pts": [[876.39, 496.86], [835.57, 520.43], [835.57, 460.43], [876.39, 436.86]], "depth": 1064.29, "tone": "dark"}, {"role": "wallTop", "pts": [[908.56, 408.29], [917.22, 413.29], [876.39, 436.86], [867.73, 431.86]], "depth": 1072.14, "tone": "top"}, {"role": "wallTop", "pts": [[97.61, 416.5], [106.27, 411.5], [143.07, 432.75], [134.42, 437.75]], "depth": 1076.25, "tone": "top"}, {"role": "wallTop", "pts": [[877.01, 426.5], [885.67, 421.5], [890.0, 424.0], [881.34, 429.0]], "depth": 1077.5, "tone": "top"}, {"role": "doorFace", "pts": [[242.91, 543.75], [225.94, 488.05], [225.94, 429.05], [242.91, 484.75]], "depth": 1077.81, "tone": "mid", "mat": "door", "door": "kitchen"}, {"role": "furnTop", "pts": [[844.97, 414.0], [875.28, 431.5], [828.51, 458.5], [798.2, 441.0]], "depth": 1079.5, "tone": "top", "mat": "wood"}, {"role": "furnFace", "pts": [[283.8, 513.0], [231.84, 543.0], [231.84, 500.5], [283.8, 470.5]], "depth": 1085.5, "tone": "dark", "mat": "wood"}, {"role": "wallTop", "pts": [[348.75, 416.5], [357.41, 421.5], [314.11, 446.5], [305.45, 441.5]], "depth": 1090.0, "tone": "top"}, {"role": "wallFace", "pts": [[208.03, 540.25], [171.22, 519.0], [171.22, 459.0], [208.03, 480.25]], "depth": 1106.25, "tone": "mid"}, {"role": "wallFace", "pts": [[835.57, 520.43], [794.74, 544.0], [794.74, 484.0], [835.57, 460.43]], "depth": 1111.43, "tone": "dark"}, {"role": "wallTop", "pts": [[134.42, 437.75], [143.07, 432.75], [179.88, 454.0], [171.22, 459.0]], "depth": 1118.75, "tone": "top"}, {"role": "wallTop", "pts": [[867.73, 431.86], [876.39, 436.86], [835.57, 460.43], [826.91, 455.43]], "depth": 1119.29, "tone": "top"}, {"role": "doorFace", "pts": [[348.65, 541.6], [343.83, 541.1], [343.83, 482.1], [348.65, 482.6]], "depth": 1128.7, "tone": "mid", "mat": "door", "door": "entry"}, {"role": "ao", "pts": [[1075.32, 372.0], [496.84, 706.0], [489.91, 702.0], [1068.4, 368.0]], "depth": 1129.5, "opacity": 0.14}, {"role": "doorTop", "pts": [[242.91, 484.75], [225.94, 429.05], [221.11, 429.55], [238.09, 485.25]], "depth": 1137.3, "tone": "top", "mat": "door", "door": "kitchen"}, {"role": "ao", "pts": [[239.63, 539.5], [224.05, 548.5], [217.12, 544.5], [232.71, 535.5]], "depth": 1139.5, "opacity": 0.14}, {"role": "ao", "pts": [[248.29, 544.5], [232.71, 553.5], [239.63, 557.5], [255.22, 548.5]], "depth": 1139.5, "opacity": 0.14}, {"role": "wallFace", "pts": [[244.83, 546.5], [236.17, 551.5], [236.17, 491.5], [244.83, 486.5]], "depth": 1145.0, "tone": "dark"}, {"role": "wallFace", "pts": [[236.17, 551.5], [227.51, 546.5], [227.51, 486.5], [236.17, 491.5]], "depth": 1145.0, "tone": "mid"}, {"role": "wallFace", "pts": [[244.83, 561.5], [208.03, 540.25], [208.03, 480.25], [244.83, 501.5]], "depth": 1148.75, "tone": "mid"}, {"role": "furnTop", "pts": [[745.38, 429.0], [823.32, 474.0], [664.84, 565.5], [586.9, 520.5]], "depth": 1151.5, "tone": "top", "mat": "soft"}, {"role": "furnFace", "pts": [[823.32, 516.5], [664.84, 608.0], [664.84, 565.5], [823.32, 474.0]], "depth": 1154.0, "tone": "dark", "mat": "soft"}, {"role": "wallFace", "pts": [[794.74, 544.0], [753.91, 567.57], [753.91, 507.57], [794.74, 484.0]], "depth": 1158.57, "tone": "dark"}, {"role": "wallTop", "pts": [[171.22, 459.0], [179.88, 454.0], [216.68, 475.25], [208.03, 480.25]], "depth": 1161.25, "tone": "top"}, {"role": "wallFace", "pts": [[253.49, 556.5], [244.83, 561.5], [244.83, 501.5], [253.49, 496.5]], "depth": 1165.0, "tone": "dark"}, {"role": "wallTop", "pts": [[826.91, 455.43], [835.57, 460.43], [794.74, 484.0], [786.08, 479.0]], "depth": 1166.43, "tone": "top"}, {"role": "doorFace", "pts": [[343.83, 541.1], [324.69, 603.75], [324.69, 544.75], [343.83, 482.1]], "depth": 1190.86, "tone": "dark", "mat": "door", "door": "entry"}, {"role": "wallTop", "pts": [[236.17, 481.5], [244.83, 486.5], [236.17, 491.5], [227.51, 486.5]], "depth": 1200.0, "tone": "top"}, {"role": "furnFace", "pts": [[664.84, 608.0], [586.9, 563.0], [586.9, 520.5], [664.84, 565.5]], "depth": 1200.5, "tone": "mid", "mat": "soft"}, {"role": "wallTop", "pts": [[208.03, 480.25], [216.68, 475.25], [253.49, 496.5], [244.83, 501.5]], "depth": 1203.75, "tone": "top"}, {"role": "wallFace", "pts": [[753.91, 567.57], [713.09, 591.14], [713.09, 531.14], [753.91, 507.57]], "depth": 1205.71, "tone": "dark"}, {"role": "wallTop", "pts": [[786.08, 479.0], [794.74, 484.0], [753.91, 507.57], [745.25, 502.57]], "depth": 1213.57, "tone": "top"}, {"role": "furnFace", "pts": [[569.58, 594.0], [513.29, 626.5], [513.29, 584.0], [569.58, 551.5]], "depth": 1250.0, "tone": "dark", "mat": "wood"}, {"role": "furnFace", "pts": [[513.29, 626.5], [457.0, 594.0], [457.0, 551.5], [513.29, 584.0]], "depth": 1250.0, "tone": "mid", "mat": "wood"}, {"role": "doorTop", "pts": [[329.51, 545.25], [348.65, 482.6], [343.83, 482.1], [324.69, 544.75]], "depth": 1250.35, "tone": "top", "mat": "door", "door": "entry"}, {"role": "wallFace", "pts": [[713.09, 591.14], [672.26, 614.71], [672.26, 554.71], [713.09, 531.14]], "depth": 1252.86, "tone": "dark"}, {"role": "furnTop", "pts": [[513.29, 519.0], [569.58, 551.5], [513.29, 584.0], [457.0, 551.5]], "depth": 1260.0, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[745.25, 502.57], [753.91, 507.57], [713.09, 531.14], [704.43, 526.14]], "depth": 1260.71, "tone": "top"}, {"role": "wallFace", "pts": [[358.28, 627.0], [322.77, 606.5], [322.77, 546.5], [358.28, 567.0]], "depth": 1280.5, "tone": "mid"}, {"role": "wallFace", "pts": [[672.26, 614.71], [631.44, 638.29], [631.44, 578.29], [672.26, 554.71]], "depth": 1300.0, "tone": "dark"}, {"role": "wallTop", "pts": [[704.43, 526.14], [713.09, 531.14], [672.26, 554.71], [663.6, 549.71]], "depth": 1307.86, "tone": "top"}, {"role": "furnFace", "pts": [[654.45, 614.0], [539.27, 680.5], [539.27, 643.0], [654.45, 576.5]], "depth": 1319.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[393.78, 647.5], [358.28, 627.0], [358.28, 567.0], [393.78, 587.5]], "depth": 1321.5, "tone": "mid"}, {"role": "furnTop", "pts": [[598.16, 544.0], [654.45, 576.5], [539.27, 643.0], [482.98, 610.5]], "depth": 1324.0, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[322.77, 546.5], [331.43, 541.5], [366.94, 562.0], [358.28, 567.0]], "depth": 1335.5, "tone": "top"}, {"role": "furnFace", "pts": [[471.72, 681.5], [367.8, 621.5], [367.8, 566.5], [471.72, 626.5]], "depth": 1345.0, "tone": "mid", "mat": "wood"}, {"role": "wallFace", "pts": [[631.44, 638.29], [590.61, 661.86], [590.61, 601.86], [631.44, 578.29]], "depth": 1347.14, "tone": "dark"}, {"role": "furnFace", "pts": [[539.27, 680.5], [482.98, 648.0], [482.98, 610.5], [539.27, 643.0]], "depth": 1353.0, "tone": "mid", "mat": "wood"}, {"role": "wallTop", "pts": [[663.6, 549.71], [672.26, 554.71], [631.44, 578.29], [622.78, 573.29]], "depth": 1355.0, "tone": "top"}, {"role": "ao", "pts": [[327.97, 599.5], [512.42, 706.0], [519.35, 702.0], [334.89, 595.5]], "depth": 1357.0, "opacity": 0.14}, {"role": "wallFace", "pts": [[429.29, 668.0], [393.78, 647.5], [393.78, 587.5], [429.29, 608.0]], "depth": 1362.5, "tone": "mid"}, {"role": "wallTop", "pts": [[358.28, 567.0], [366.94, 562.0], [402.44, 582.5], [393.78, 587.5]], "depth": 1376.5, "tone": "top"}, {"role": "furnTop", "pts": [[402.44, 546.5], [506.36, 606.5], [471.72, 626.5], [367.8, 566.5]], "depth": 1380.0, "tone": "top", "mat": "wood"}, {"role": "furnFace", "pts": [[506.36, 661.5], [471.72, 681.5], [471.72, 626.5], [506.36, 606.5]], "depth": 1385.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[590.61, 661.86], [549.79, 685.43], [549.79, 625.43], [590.61, 601.86]], "depth": 1394.29, "tone": "dark"}, {"role": "wallTop", "pts": [[622.78, 573.29], [631.44, 578.29], [590.61, 601.86], [581.95, 596.86]], "depth": 1402.14, "tone": "top"}, {"role": "wallFace", "pts": [[464.79, 688.5], [429.29, 668.0], [429.29, 608.0], [464.79, 628.5]], "depth": 1403.5, "tone": "mid"}, {"role": "wallTop", "pts": [[393.78, 587.5], [402.44, 582.5], [437.95, 603.0], [429.29, 608.0]], "depth": 1417.5, "tone": "top"}, {"role": "wallFace", "pts": [[549.79, 685.43], [508.96, 709.0], [508.96, 649.0], [549.79, 625.43]], "depth": 1441.43, "tone": "dark"}, {"role": "wallFace", "pts": [[500.3, 709.0], [464.79, 688.5], [464.79, 628.5], [500.3, 649.0]], "depth": 1444.5, "tone": "mid"}, {"role": "wallTop", "pts": [[581.95, 596.86], [590.61, 601.86], [549.79, 625.43], [541.13, 620.43]], "depth": 1449.29, "tone": "top"}, {"role": "wallTop", "pts": [[429.29, 608.0], [437.95, 603.0], [473.45, 623.5], [464.79, 628.5]], "depth": 1458.5, "tone": "top"}, {"role": "wallFace", "pts": [[508.96, 709.0], [500.3, 704.0], [500.3, 644.0], [508.96, 649.0]], "depth": 1460.0, "tone": "mid"}, {"role": "wallFace", "pts": [[508.96, 704.0], [500.3, 709.0], [500.3, 649.0], [508.96, 644.0]], "depth": 1460.0, "tone": "dark"}, {"role": "wallTop", "pts": [[541.13, 620.43], [549.79, 625.43], [508.96, 649.0], [500.3, 644.0]], "depth": 1496.43, "tone": "top"}, {"role": "wallTop", "pts": [[464.79, 628.5], [473.45, 623.5], [508.96, 644.0], [500.3, 649.0]], "depth": 1499.5, "tone": "top"}], "decals": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "kind": "light", "rank": 1, "area": "卧室", "x": 243.1, "y": 226.6, "sx": 778.72, "sy": 241.35, "z": 469.7}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "kind": "cover", "rank": 2, "area": "卧室", "x": 249.4, "y": 16.7, "sx": 965.95, "sy": 139.55, "z": 266.1}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "kind": "sensor", "rank": 3, "area": "卧室", "x": 111.4, "y": 325.5, "sx": 579.02, "sy": 224.95, "z": 436.9}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "kind": "switch", "rank": null, "area": "卧室", "x": 363.5, "y": 146.8, "sx": 952.09, "sy": 261.65, "z": 510.3}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "kind": "switch", "rank": null, "area": "卧室", "x": 116.2, "y": 116.3, "sx": 764.34, "sy": 122.75, "z": 232.5}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "kind": "switch", "rank": null, "area": "卧室", "x": 109.9, "y": 290.6, "sx": 607.94, "sy": 206.75, "z": 400.5}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "kind": "light", "rank": 12, "area": "大阳台", "x": 464.4, "y": 304.7, "sx": 902.73, "sy": 391.05, "z": 769.1}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "kind": "sensor", "rank": 14, "area": "大阳台", "x": 512.4, "y": 368.2, "sx": 889.31, "sy": 446.8, "z": 880.6}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "kind": "sensor", "rank": 15, "area": "大阳台", "x": 417.5, "y": 368.8, "sx": 806.6, "sy": 399.65, "z": 786.3}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "kind": "binary_sensor", "rank": null, "area": "大阳台", "x": 500.8, "y": 237.5, "sx": 992.45, "sy": 375.65, "z": 738.3}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "kind": "light", "rank": 4, "area": "客厅", "x": 394.9, "y": 539.8, "sx": 638.95, "sy": 473.85, "z": 934.7}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "kind": "media", "rank": 5, "area": "客厅", "x": 538.6, "y": 461.2, "sx": 831.46, "sy": 506.4, "z": 999.8}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "kind": "pet", "rank": 6, "area": "客厅", "x": 249.4, "y": 504.3, "sx": 543.69, "sy": 383.35, "z": 753.7}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "kind": "switch", "rank": null, "area": "客厅", "x": 250.1, "y": 541.1, "sx": 512.42, "sy": 402.1, "z": 791.2}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "kind": "switch", "rank": null, "area": "客厅", "x": 249.5, "y": 569.8, "sx": 487.05, "sy": 416.15, "z": 819.3}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "kind": "switch", "rank": null, "area": "客厅", "x": 537.6, "y": 505.4, "sx": 792.32, "sy": 528.0, "z": 1043.0}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "kind": "light", "rank": 7, "area": "书房", "x": 440, "y": 745.5, "sx": 499.87, "sy": 599.25, "z": 1185.5}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "kind": "light", "rank": 8, "area": "书房", "x": 513, "y": 689.6, "sx": 611.49, "sy": 607.8, "z": 1202.6}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "kind": "scene", "rank": 9, "area": "书房", "x": 513, "y": 747.2, "sx": 561.61, "sy": 636.6, "z": 1260.2}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "kind": "gateway", "rank": 10, "area": "书房", "x": 514.1, "y": 807, "sx": 510.78, "sy": 667.05, "z": 1321.1}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "kind": "switch", "rank": null, "area": "书房", "x": 537, "y": 777.4, "sx": 556.24, "sy": 663.7, "z": 1314.4}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "kind": "sensor", "rank": 18, "area": "玄关", "x": 310, "y": 828.2, "sx": 315.67, "sy": 575.6, "z": 1138.2}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "kind": "sensor", "rank": 19, "area": "玄关", "x": 260, "y": 827.1, "sx": 273.32, "sy": 550.05, "z": 1087.1}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "kind": "wall_switch", "rank": 20, "area": "浴室", "x": 169.1, "y": 545.9, "sx": 438.12, "sy": 364.0, "z": 715.0}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "kind": "binary_sensor", "rank": null, "area": "浴室", "x": 146, "y": 480.1, "sx": 475.1, "sy": 319.55, "z": 626.1}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "kind": "binary_sensor", "rank": null, "area": "浴室", "x": 124.1, "y": 479.6, "sx": 456.57, "sy": 308.35, "z": 603.7}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "kind": "light", "rank": 16, "area": "小阳台", "x": 50.1, "y": 550, "sx": 331.52, "sy": 306.55, "z": 600.1}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "kind": "sensor", "rank": 17, "area": "小阳台", "x": 77.1, "y": 653.4, "sx": 265.35, "sy": 371.75, "z": 730.5}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "kind": "light", "rank": 11, "area": "厨房", "x": 120, "y": 759.9, "sx": 210.28, "sy": 446.45, "z": 879.9}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "kind": "switch", "rank": null, "area": "厨房", "x": 172.4, "y": 825.2, "sx": 199.11, "sy": 505.3, "z": 997.6}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "kind": "switch", "rank": null, "area": "厨房", "x": 198.9, "y": 825.2, "sx": 222.05, "sy": 518.55, "z": 1024.1}, {"id": "climate_138a_thermostat", "name": "卧室·空调", "kind": "climate", "rank": 21, "area": "卧室", "x": 170.0, "y": 388.0, "sx": 575.64, "sy": 285.5, "z": 558.0}], "layers": [{"type": "floor", "name": "卧室", "points": [[1029.7, 230.56], [995.83, 211.27], [1056.46, 176.76], [902.43, 87.88], [842.66, 122.9], [793.83, 94.33], [500.91, 262.58], [738.38, 399.66]], "z": -9617.0, "shade": 1.0, "poly": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]]}, {"type": "floor", "name": "小阳台", "points": [[487.64, 268.53], [399.78, 217.81], [190.81, 338.47], [278.66, 389.19]], "z": -9406.0, "shade": 1.0, "poly": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]]}, {"type": "floor", "name": "浴室", "points": [[610.55, 329.43], [497.83, 264.35], [280.07, 390.07], [392.79, 455.15]], "z": -9293.5, "shade": 1.0, "poly": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]]}, {"type": "floor", "name": "大阳台", "points": [[1073.76, 376.68], [927.8, 292.4], [740.01, 400.82], [885.97, 485.1]], "z": -9235.5, "shade": 1.0, "poly": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]]}, {"type": "floor", "name": "厨房", "points": [[389.62, 456.33], [188.83, 340.4], [30.76, 431.67], [231.55, 547.6]], "z": -9125.0, "shade": 1.0, "poly": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]]}, {"type": "floor", "name": "客厅", "points": [[883.23, 486.35], [613.14, 330.41], [394.49, 456.65], [664.58, 612.59]], "z": -9070.0, "shade": 1.0, "poly": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]]}, {"type": "floor", "name": "玄关", "points": [[450.24, 566.31], [327.43, 495.4], [234.27, 549.19], [357.08, 620.1]], "z": -8897.5, "shade": 1.0, "poly": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]]}, {"type": "floor", "name": "书房", "points": [[662.5, 613.59], [392.71, 457.86], [328.7, 495.07], [452.27, 567.89], [359.28, 620.59], [504.05, 705.13]], "z": -8860.0, "shade": 1.0, "poly": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]]}, {"type": "ao", "points": [[910.78, 87.0], [843.24, 126.0], [850.16, 130.0], [917.71, 91.0]], "opacity": 0.14, "z": 254.95}, {"type": "wall", "seg": [160.0, 0.0, 160.0, 70.0], "top": [[898.66, 24.0], [907.32, 29.0], [846.7, 64.0], [838.04, 59.0]], "faces": [{"points": [[907.32, 89.0], [846.7, 124.0], [846.7, 64.0], [907.32, 29.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[846.7, 124.0], [838.04, 119.0], [838.04, 59.0], [846.7, 64.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 255.0, "shade": 1.0}, {"type": "ao", "points": [[841.5, 126.0], [785.21, 93.5], [778.29, 97.5], [834.58, 130.0]], "opacity": 0.14, "z": 261.45}, {"type": "wall", "seg": [160.0, 70.0, 103.0, 70.0], "top": [[846.7, 59.0], [838.04, 64.0], [788.68, 35.5], [797.34, 30.5]], "faces": [{"points": [[846.7, 119.0], [838.04, 124.0], [838.04, 64.0], [846.7, 59.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[838.04, 124.0], [788.68, 95.5], [788.68, 35.5], [838.04, 64.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 261.5, "shade": 1.0}, {"type": "ao", "points": [[1058.0, 181.0], [895.2, 87.0], [888.27, 91.0], [1051.08, 185.0]], "opacity": 0.14, "z": 309.95}, {"type": "wall", "seg": [340.0, 0.0, 160.0, 0.0], "top": [[1063.2, 114.0], [1054.54, 119.0], [898.66, 29.0], [907.32, 24.0]], "faces": [{"points": [[1063.2, 174.0], [1054.54, 179.0], [1054.54, 119.0], [1063.2, 114.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1054.54, 179.0], [898.66, 89.0], [898.66, 29.0], [1054.54, 119.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 310.0, "shade": 1.0}, {"type": "furn", "id": "dresser", "name": "梳妆台", "room": "卧室", "material": "wood", "top": [[911.65, 60.0], [1032.89, 130.0], [993.92, 152.5], [872.68, 82.5]], "faces": [{"points": [[1032.89, 167.5], [993.92, 190.0], [993.92, 152.5], [1032.89, 130.0]], "tone": "dark"}, {"points": [[993.92, 190.0], [872.68, 120.0], [872.68, 82.5], [993.92, 152.5]], "tone": "mid"}], "z": 312.0, "base_h": 0.0, "height": 75.0, "height_raw": 75.0, "height_capped": false}, {"type": "ao", "points": [[800.8, 93.5], [499.43, 267.5], [506.36, 271.5], [807.73, 97.5]], "opacity": 0.14, "z": 402.95}, {"type": "wall", "seg": [103.0, 70.0, 103.0, 410.0], "top": [[788.68, 30.5], [797.34, 35.5], [502.9, 205.5], [494.24, 200.5]], "faces": [{"points": [[797.34, 95.5], [502.9, 265.5], [502.9, 205.5], [797.34, 35.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[502.9, 265.5], [494.24, 260.5], [494.24, 200.5], [502.9, 205.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 403.0, "shade": 1.0}, {"type": "ao", "points": [[1058.0, 172.0], [990.46, 211.0], [983.53, 207.0], [1051.08, 168.0]], "opacity": 0.14, "z": 434.95}, {"type": "wall", "seg": [340.0, 0.0, 340.0, 70.0], "top": [[1054.54, 114.0], [1063.2, 119.0], [1002.58, 154.0], [993.92, 149.0]], "faces": [{"points": [[1063.2, 179.0], [1002.58, 214.0], [1002.58, 154.0], [1063.2, 119.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1002.58, 214.0], [993.92, 209.0], [993.92, 149.0], [1002.58, 154.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 435.0, "shade": 1.0}, {"type": "furn", "id": "bed", "name": "双人床", "room": "卧室", "material": "soft", "top": [[823.32, 113.5], [953.22, 188.5], [780.02, 288.5], [650.12, 213.5]], "faces": [{"points": [[953.22, 213.5], [780.02, 313.5], [780.02, 288.5], [953.22, 188.5]], "tone": "dark"}, {"points": [[780.02, 313.5], [650.12, 238.5], [650.12, 213.5], [780.02, 288.5]], "tone": "mid"}], "z": 464.0, "base_h": 0.0, "height": 50.0, "height_raw": 50.0, "height_capped": false}, {"type": "ao", "points": [[1031.16, 235.5], [990.46, 212.0], [983.53, 216.0], [1024.23, 239.5]], "opacity": 0.14, "z": 489.45}, {"type": "wall", "seg": [379.0, 70.0, 340.0, 70.0], "top": [[1036.35, 168.5], [1027.69, 173.5], [993.92, 154.0], [1002.58, 149.0]], "faces": [{"points": [[1036.35, 228.5], [1027.69, 233.5], [1027.69, 173.5], [1036.35, 168.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1027.69, 233.5], [993.92, 214.0], [993.92, 154.0], [1027.69, 173.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 489.5, "shade": 1.0}, {"type": "furn", "id": "rack", "name": "置物架", "room": "小阳台", "material": "wood", "top": [[390.32, 200.5], [424.96, 220.5], [394.65, 238.0], [360.01, 218.0]], "faces": [{"points": [[424.96, 250.5], [394.65, 268.0], [394.65, 238.0], [424.96, 220.5]], "tone": "dark"}, {"points": [[394.65, 268.0], [360.01, 248.0], [360.01, 218.0], [394.65, 238.0]], "tone": "mid"}], "z": 515.5, "base_h": 0.0, "height": 60.0, "height_raw": 60.0, "height_capped": false}, {"type": "ao", "points": [[489.04, 272.5], [392.92, 217.0], [385.99, 221.0], [482.11, 276.5]], "opacity": 0.14, "z": 531.45}, {"type": "wall", "seg": [103.0, 420.0, 0.0, 420.0], "top": [[494.24, 205.5], [485.58, 210.5], [396.38, 159.0], [405.04, 154.0]], "faces": [{"points": [[494.24, 265.5], [485.58, 270.5], [485.58, 210.5], [494.24, 205.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[485.58, 270.5], [396.38, 219.0], [396.38, 159.0], [485.58, 210.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 531.5, "shade": 1.0}, {"type": "furn", "id": "wardrobe", "name": "衣柜", "room": "卧室", "material": "wood", "top": [[560.92, 178.0], [716.8, 268.0], [664.84, 298.0], [508.96, 208.0]], "faces": [{"points": [[716.8, 323.0], [664.84, 353.0], [664.84, 298.0], [716.8, 268.0]], "tone": "dark"}, {"points": [[664.84, 353.0], [508.96, 263.0], [508.96, 208.0], [664.84, 298.0]], "tone": "mid"}], "z": 628.0, "base_h": 0.0, "height": 110.0, "height_raw": 220.0, "height_capped": true}, {"type": "ao", "points": [[920.31, 291.5], [941.09, 303.5], [934.17, 307.5], [913.38, 295.5]], "opacity": 0.14, "z": 636.95}, {"type": "wall", "seg": [379.0, 190.0, 395.0, 190.0], "top": [[923.77, 233.5], [932.43, 228.5], [946.29, 236.5], [937.63, 241.5]], "faces": [{"points": [[946.29, 296.5], [937.63, 301.5], [937.63, 241.5], [946.29, 236.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[937.63, 301.5], [923.77, 293.5], [923.77, 233.5], [937.63, 241.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 637.0, "shade": 1.0}, {"type": "ao", "points": [[490.77, 263.5], [657.48, 359.75], [650.55, 363.75], [483.85, 267.5]], "opacity": 0.14, "z": 665.2}, {"type": "ao", "points": [[499.43, 258.5], [666.14, 354.75], [673.07, 350.75], [506.36, 254.5]], "opacity": 0.14, "z": 665.2}, {"type": "wall", "seg": [103.0, 410.0, 287.5, 410.0], "top": [[494.24, 205.5], [502.9, 200.5], [662.68, 292.75], [654.02, 297.75]], "faces": [{"points": [[662.68, 352.75], [654.02, 357.75], [654.02, 297.75], [662.68, 292.75]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[654.02, 357.75], [494.24, 265.5], [494.24, 205.5], [654.02, 297.75]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 665.25, "shade": 1.0}, {"type": "furn", "id": "shower", "name": "淋浴区", "room": "浴室", "material": "hard", "top": [[498.57, 214.0], [576.51, 259.0], [498.57, 304.0], [420.63, 259.0]], "faces": [{"points": [[576.51, 314.0], [498.57, 359.0], [498.57, 304.0], [576.51, 259.0]], "tone": "dark"}, {"points": [[498.57, 359.0], [420.63, 314.0], [420.63, 259.0], [498.57, 304.0]], "tone": "mid"}], "z": 670.0, "base_h": 0.0, "height": 110.0, "height_raw": 200.0, "height_capped": true}, {"type": "ao", "points": [[1031.16, 226.5], [729.79, 400.5], [722.86, 396.5], [1024.23, 222.5]], "opacity": 0.14, "z": 678.95}, {"type": "ao", "points": [[1039.82, 231.5], [738.45, 405.5], [745.38, 409.5], [1046.75, 235.5]], "opacity": 0.14, "z": 678.95}, {"type": "wall", "seg": [379.0, 70.0, 379.0, 410.0], "top": [[1027.69, 168.5], [1036.35, 173.5], [741.91, 343.5], [733.25, 338.5]], "faces": [{"points": [[1036.35, 233.5], [741.91, 403.5], [741.91, 343.5], [1036.35, 173.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[741.91, 403.5], [733.25, 398.5], [733.25, 338.5], [741.91, 343.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 679.0, "shade": 1.0}, {"type": "furn", "id": "fridge", "name": "冰箱", "room": "小阳台", "material": "wood", "top": [[286.4, 235.5], [334.03, 263.0], [282.07, 293.0], [234.44, 265.5]], "faces": [{"points": [[334.03, 318.0], [282.07, 348.0], [282.07, 293.0], [334.03, 263.0]], "tone": "dark"}, {"points": [[282.07, 348.0], [234.44, 320.5], [234.44, 265.5], [282.07, 293.0]], "tone": "mid"}], "z": 680.5, "base_h": 0.0, "height": 110.0, "height_raw": 145.0, "height_capped": true}, {"type": "ao", "points": [[408.5, 217.0], [29.2, 436.0], [36.12, 440.0], [415.43, 221.0]], "opacity": 0.14, "z": 694.95}, {"type": "wall", "seg": [0.0, 420.0, 0.0, 850.0], "top": [[396.38, 154.0], [405.04, 159.0], [32.66, 374.0], [24.0, 369.0]], "faces": [{"points": [[405.04, 219.0], [32.66, 434.0], [32.66, 374.0], [405.04, 159.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[32.66, 434.0], [24.0, 429.0], [24.0, 369.0], [32.66, 374.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 695.0, "shade": 1.0}, {"type": "ao", "points": [[497.7, 258.5], [269.94, 390.0], [263.02, 386.0], [490.77, 254.5]], "opacity": 0.14, "z": 700.45}, {"type": "ao", "points": [[506.36, 263.5], [278.6, 395.0], [285.53, 399.0], [513.29, 267.5]], "opacity": 0.14, "z": 700.45}, {"type": "wall", "seg": [103.0, 410.0, 103.0, 665.0], "top": [[494.24, 200.5], [502.9, 205.5], [282.07, 333.0], [273.41, 328.0]], "faces": [{"points": [[502.9, 265.5], [282.07, 393.0], [282.07, 333.0], [502.9, 205.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[282.07, 393.0], [273.41, 388.0], [273.41, 328.0], [282.07, 333.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 700.5, "shade": 1.0}, {"type": "furn", "id": "toilet", "name": "马桶", "room": "浴室", "material": "wood", "top": [[412.83, 281.0], [464.79, 311.0], [430.15, 331.0], [378.19, 301.0]], "faces": [{"points": [[464.79, 348.5], [430.15, 368.5], [430.15, 331.0], [464.79, 311.0]], "tone": "dark"}, {"points": [[430.15, 368.5], [378.19, 338.5], [378.19, 301.0], [430.15, 331.0]], "tone": "mid"}], "z": 711.5, "base_h": 0.0, "height": 75.0, "height_raw": 75.0, "height_capped": false}, {"type": "ao", "points": [[612.01, 324.5], [587.77, 338.5], [580.84, 334.5], [605.09, 320.5]], "opacity": 0.14, "z": 714.95}, {"type": "ao", "points": [[620.67, 329.5], [596.43, 343.5], [603.35, 347.5], [627.6, 333.5]], "opacity": 0.14, "z": 714.95}, {"type": "wall", "seg": [235.0, 410.0, 235.0, 430.0], "top": [[608.55, 266.5], [617.21, 271.5], [599.89, 281.5], [591.23, 276.5]], "faces": [{"points": [[617.21, 331.5], [599.89, 341.5], [599.89, 281.5], [617.21, 271.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[599.89, 341.5], [591.23, 336.5], [591.23, 276.5], [599.89, 281.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 715.0, "shade": 1.0}, {"type": "ao", "points": [[1075.32, 381.0], [934.17, 299.5], [927.24, 303.5], [1068.4, 385.0]], "opacity": 0.14, "z": 722.45}, {"type": "wall", "seg": [550.0, 190.0, 395.0, 190.0], "top": [[1080.52, 314.0], [1071.86, 319.0], [937.63, 241.5], [946.29, 236.5]], "faces": [{"points": [[1080.52, 374.0], [1071.86, 379.0], [1071.86, 319.0], [1080.52, 314.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1071.86, 379.0], [937.63, 301.5], [937.63, 241.5], [1071.86, 319.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 722.5, "shade": 1.0}, {"type": "ao", "points": [[180.75, 339.5], [193.74, 347.0], [186.81, 351.0], [173.82, 343.5]], "opacity": 0.14, "z": 728.45}, {"type": "ao", "points": [[189.41, 334.5], [202.4, 342.0], [209.32, 338.0], [196.33, 330.5]], "opacity": 0.14, "z": 728.45}, {"type": "wall", "seg": [0.0, 665.0, 7.0, 665.0], "top": [[184.21, 281.5], [192.87, 276.5], [198.93, 280.0], [190.27, 285.0]], "faces": [{"points": [[198.93, 340.0], [190.27, 345.0], [190.27, 285.0], [198.93, 280.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[190.27, 345.0], [184.21, 341.5], [184.21, 281.5], [190.27, 285.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 728.5, "shade": 1.0}, {"type": "furn", "id": "litter", "name": "猫厕所", "room": "大阳台", "material": "wood", "top": [[993.92, 319.0], [1047.61, 350.0], [1000.85, 377.0], [947.16, 346.0]], "faces": [{"points": [[1047.61, 380.0], [1000.85, 407.0], [1000.85, 377.0], [1047.61, 350.0]], "tone": "dark"}, {"points": [[1000.85, 407.0], [947.16, 376.0], [947.16, 346.0], [1000.85, 377.0]], "tone": "mid"}], "z": 773.0, "base_h": 0.0, "height": 60.0, "height_raw": 60.0, "height_capped": false}, {"type": "furn", "id": "basin", "name": "洗手台", "room": "浴室", "material": "wood", "top": [[356.54, 308.5], [395.51, 331.0], [347.88, 358.5], [308.91, 336.0]], "faces": [{"points": [[395.51, 373.5], [347.88, 401.0], [347.88, 358.5], [395.51, 331.0]], "tone": "dark"}, {"points": [[347.88, 401.0], [308.91, 378.5], [308.91, 336.0], [347.88, 358.5]], "tone": "mid"}], "z": 781.5, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "sink", "name": "水槽", "room": "厨房", "material": "hard", "top": [[164.29, 318.5], [203.26, 341.0], [168.62, 361.0], [129.65, 338.5]], "faces": [{"points": [[203.26, 345.0], [168.62, 365.0], [168.62, 361.0], [203.26, 341.0]], "tone": "dark"}, {"points": [[168.62, 365.0], [129.65, 342.5], [129.65, 338.5], [168.62, 361.0]], "tone": "mid"}], "z": 806.0, "base_h": 85.0, "height": 8.0, "height_raw": 8.0, "height_capped": false}, {"type": "furn", "id": "counter_w", "name": "橱柜台面（西）", "room": "厨房", "material": "wood", "top": [[163.43, 317.0], [211.06, 344.5], [138.31, 386.5], [90.68, 359.0]], "faces": [{"points": [[211.06, 387.0], [138.31, 429.0], [138.31, 386.5], [211.06, 344.5]], "tone": "dark"}, {"points": [[138.31, 429.0], [90.68, 401.5], [90.68, 359.0], [138.31, 386.5]], "tone": "mid"}], "z": 818.0, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "dock", "name": "扫地机基站", "room": "浴室", "material": "wood", "top": [[396.38, 376.5], [431.02, 396.5], [392.05, 419.0], [357.41, 399.0]], "faces": [{"points": [[431.02, 414.0], [392.05, 436.5], [392.05, 419.0], [431.02, 396.5]], "tone": "dark"}, {"points": [[392.05, 436.5], [357.41, 416.5], [357.41, 399.0], [392.05, 419.0]], "tone": "mid"}], "z": 835.0, "base_h": 0.0, "height": 35.0, "height_raw": 35.0, "height_capped": false}, {"type": "ao", "points": [[724.16, 398.25], [736.72, 405.5], [729.79, 409.5], [717.23, 402.25]], "opacity": 0.14, "z": 845.7}, {"type": "ao", "points": [[732.82, 393.25], [745.38, 400.5], [752.31, 396.5], [739.75, 389.25]], "opacity": 0.14, "z": 845.7}, {"type": "wall", "seg": [372.5, 410.0, 379.0, 410.0], "top": [[727.62, 340.25], [736.29, 335.25], [741.91, 338.5], [733.25, 343.5]], "faces": [{"points": [[741.91, 398.5], [733.25, 403.5], [733.25, 343.5], [741.91, 338.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[733.25, 403.5], [727.62, 400.25], [727.62, 340.25], [733.25, 343.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 845.75, "shade": 1.0}, {"type": "ao", "points": [[729.79, 401.5], [741.91, 408.5], [734.99, 412.5], [722.86, 405.5]], "opacity": 0.14, "z": 851.95}, {"type": "ao", "points": [[738.45, 396.5], [750.57, 403.5], [757.5, 399.5], [745.38, 392.5]], "opacity": 0.14, "z": 851.95}, {"type": "wall", "seg": [379.0, 410.0, 385.0, 410.0], "top": [[733.25, 343.5], [741.91, 338.5], [747.11, 341.5], [738.45, 346.5]], "faces": [{"points": [[747.11, 401.5], [738.45, 406.5], [738.45, 346.5], [747.11, 341.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[738.45, 406.5], [733.25, 403.5], [733.25, 343.5], [738.45, 346.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 852.0, "shade": 1.0}, {"type": "ao", "points": [[264.75, 388.0], [391.18, 461.0], [384.26, 465.0], [257.82, 392.0]], "opacity": 0.14, "z": 890.95}, {"type": "ao", "points": [[273.41, 383.0], [399.84, 456.0], [406.77, 452.0], [280.34, 379.0]], "opacity": 0.14, "z": 890.95}, {"type": "wall", "seg": [97.0, 665.0, 235.0, 665.0], "top": [[268.21, 330.0], [276.87, 325.0], [396.38, 394.0], [387.72, 399.0]], "faces": [{"points": [[396.38, 454.0], [387.72, 459.0], [387.72, 399.0], [396.38, 394.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[387.72, 459.0], [268.21, 390.0], [268.21, 330.0], [387.72, 399.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 891.0, "shade": 1.0}, {"type": "furn", "id": "bin", "name": "垃圾桶", "room": "厨房", "material": "wood", "top": [[355.68, 422.5], [379.93, 436.5], [359.14, 448.5], [334.89, 434.5]], "faces": [{"points": [[379.93, 456.5], [359.14, 468.5], [359.14, 448.5], [379.93, 436.5]], "tone": "dark"}, {"points": [[359.14, 468.5], [334.89, 454.5], [334.89, 434.5], [359.14, 448.5]], "tone": "mid"}], "z": 918.0, "base_h": 0.0, "height": 40.0, "height_raw": 40.0, "height_capped": false}, {"type": "furn", "id": "cooktop", "name": "灶台（双眼）", "room": "厨房", "material": "hard", "top": [[97.61, 371.0], [153.9, 403.5], [114.93, 426.0], [58.64, 393.5]], "faces": [{"points": [[153.9, 406.5], [114.93, 429.0], [114.93, 426.0], [153.9, 403.5]], "tone": "dark"}, {"points": [[114.93, 429.0], [58.64, 396.5], [58.64, 393.5], [114.93, 426.0]], "tone": "mid"}], "z": 920.5, "base_h": 85.0, "height": 6.0, "height_raw": 6.0, "height_capped": false}, {"type": "ao", "points": [[525.41, 374.5], [301.99, 503.5], [295.06, 499.5], [518.49, 370.5]], "opacity": 0.14, "z": 929.95}, {"type": "ao", "points": [[534.07, 379.5], [310.65, 508.5], [317.57, 512.5], [541.0, 383.5]], "opacity": 0.14, "z": 929.95}, {"type": "wall", "seg": [235.0, 510.0, 235.0, 760.0], "top": [[521.95, 316.5], [530.61, 321.5], [314.11, 446.5], [305.45, 441.5]], "faces": [{"points": [[530.61, 381.5], [314.11, 506.5], [314.11, 446.5], [530.61, 321.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[314.11, 506.5], [305.45, 501.5], [305.45, 441.5], [314.11, 446.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 930.0, "shade": 1.0}, {"type": "furn", "id": "counter_s", "name": "橱柜台面（南）", "room": "厨房", "material": "wood", "top": [[90.68, 359.0], [283.8, 470.5], [231.84, 500.5], [38.72, 389.0]], "faces": [{"points": [[283.8, 513.0], [231.84, 543.0], [231.84, 500.5], [283.8, 470.5]], "tone": "dark"}, {"points": [[231.84, 543.0], [38.72, 431.5], [38.72, 389.0], [231.84, 500.5]], "tone": "mid"}], "z": 974.0, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "ao", "points": [[873.55, 484.5], [884.8, 491.0], [877.88, 495.0], [866.62, 488.5]], "opacity": 0.14, "z": 1017.45}, {"type": "ao", "points": [[882.21, 479.5], [893.46, 486.0], [900.39, 482.0], [889.13, 475.5]], "opacity": 0.14, "z": 1017.45}, {"type": "wall", "seg": [545.0, 410.0, 550.0, 410.0], "top": [[877.01, 426.5], [885.67, 421.5], [890.0, 424.0], [881.34, 429.0]], "faces": [{"points": [[890.0, 484.0], [881.34, 489.0], [881.34, 429.0], [890.0, 424.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[881.34, 489.0], [877.01, 486.5], [877.01, 426.5], [881.34, 429.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1017.5, "shade": 1.0}, {"type": "furn", "id": "display", "name": "展示柜", "room": "客厅", "material": "wood", "top": [[844.97, 414.0], [875.28, 431.5], [828.51, 458.5], [798.2, 441.0]], "faces": [{"points": [[875.28, 486.5], [828.51, 513.5], [828.51, 458.5], [875.28, 431.5]], "tone": "dark"}, {"points": [[828.51, 513.5], [798.2, 496.0], [798.2, 441.0], [828.51, 458.5]], "tone": "mid"}], "z": 1024.5, "base_h": 0.0, "height": 110.0, "height_raw": 110.0, "height_capped": false}, {"type": "ao", "points": [[29.2, 427.0], [256.95, 558.5], [263.88, 554.5], [36.12, 423.0]], "opacity": 0.14, "z": 1037.45}, {"type": "wall", "seg": [0.0, 850.0, 255.0, 850.0], "top": [[24.0, 374.0], [32.66, 369.0], [253.49, 496.5], [244.83, 501.5]], "faces": [{"points": [[253.49, 556.5], [244.83, 561.5], [244.83, 501.5], [253.49, 496.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[244.83, 561.5], [24.0, 434.0], [24.0, 374.0], [244.83, 501.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1037.5, "shade": 1.0}, {"type": "furn", "id": "sofa", "name": "三人沙发", "room": "客厅", "material": "soft", "top": [[745.38, 429.0], [823.32, 474.0], [664.84, 565.5], [586.9, 520.5]], "faces": [{"points": [[823.32, 516.5], [664.84, 608.0], [664.84, 565.5], [823.32, 474.0]], "tone": "dark"}, {"points": [[664.84, 608.0], [586.9, 563.0], [586.9, 520.5], [664.84, 565.5]], "tone": "mid"}], "z": 1109.0, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "ao", "points": [[1075.32, 372.0], [496.84, 706.0], [489.91, 702.0], [1068.4, 368.0]], "opacity": 0.14, "z": 1129.95}, {"type": "wall", "seg": [550.0, 190.0, 550.0, 850.0], "top": [[1071.86, 314.0], [1080.52, 319.0], [508.96, 649.0], [500.3, 644.0]], "faces": [{"points": [[1080.52, 379.0], [508.96, 709.0], [508.96, 649.0], [1080.52, 319.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[508.96, 709.0], [500.3, 704.0], [500.3, 644.0], [508.96, 649.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1130.0, "shade": 1.0}, {"type": "ao", "points": [[239.63, 539.5], [224.05, 548.5], [217.12, 544.5], [232.71, 535.5]], "opacity": 0.14, "z": 1139.95}, {"type": "ao", "points": [[248.29, 544.5], [232.71, 553.5], [239.63, 557.5], [255.22, 548.5]], "opacity": 0.14, "z": 1139.95}, {"type": "wall", "seg": [235.0, 840.0, 235.0, 850.0], "top": [[236.17, 481.5], [244.83, 486.5], [236.17, 491.5], [227.51, 486.5]], "faces": [{"points": [[244.83, 546.5], [236.17, 551.5], [236.17, 491.5], [244.83, 486.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[236.17, 551.5], [227.51, 546.5], [227.51, 486.5], [236.17, 491.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1140.0, "shade": 1.0}, {"type": "furn", "id": "chair", "name": "人体工学椅", "room": "书房", "material": "wood", "top": [[513.29, 519.0], [569.58, 551.5], [513.29, 584.0], [457.0, 551.5]], "faces": [{"points": [[569.58, 594.0], [513.29, 626.5], [513.29, 584.0], [569.58, 551.5]], "tone": "dark"}, {"points": [[513.29, 626.5], [457.0, 594.0], [457.0, 551.5], [513.29, 584.0]], "tone": "mid"}], "z": 1217.5, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "desk", "name": "书桌", "room": "书房", "material": "wood", "top": [[598.16, 544.0], [654.45, 576.5], [539.27, 643.0], [482.98, 610.5]], "faces": [{"points": [[654.45, 614.0], [539.27, 680.5], [539.27, 643.0], [654.45, 576.5]], "tone": "dark"}, {"points": [[539.27, 680.5], [482.98, 648.0], [482.98, 610.5], [539.27, 643.0]], "tone": "mid"}], "z": 1286.5, "base_h": 0.0, "height": 75.0, "height_raw": 75.0, "height_capped": false}, {"type": "furn", "id": "cube", "name": "格子柜", "room": "书房", "material": "wood", "top": [[402.44, 546.5], [506.36, 606.5], [471.72, 626.5], [367.8, 566.5]], "faces": [{"points": [[506.36, 661.5], [471.72, 681.5], [471.72, 626.5], [506.36, 606.5]], "tone": "dark"}, {"points": [[471.72, 681.5], [367.8, 621.5], [367.8, 566.5], [471.72, 626.5]], "tone": "mid"}], "z": 1325.0, "base_h": 0.0, "height": 110.0, "height_raw": 130.0, "height_capped": true}, {"type": "ao", "points": [[327.97, 599.5], [512.42, 706.0], [519.35, 702.0], [334.89, 595.5]], "opacity": 0.14, "z": 1357.45}, {"type": "wall", "seg": [345.0, 850.0, 550.0, 850.0], "top": [[322.77, 546.5], [331.43, 541.5], [508.96, 644.0], [500.3, 649.0]], "faces": [{"points": [[508.96, 704.0], [500.3, 709.0], [500.3, 649.0], [508.96, 644.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[500.3, 709.0], [322.77, 606.5], [322.77, 546.5], [500.3, 649.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1357.5, "shade": 1.0}], "order": ["floor:卧室", "floor:小阳台", "floor:浴室", "floor:大阳台", "floor:厨房", "floor:客厅", "floor:玄关", "floor:书房", "ao:", "wall:[160.0, 0.0, 160.0, 70.0]", "ao:", "wall:[160.0, 70.0, 103.0, 70.0]", "ao:", "wall:[340.0, 0.0, 160.0, 0.0]", "furn:梳妆台", "ao:", "wall:[103.0, 70.0, 103.0, 410.0]", "ao:", "wall:[340.0, 0.0, 340.0, 70.0]", "furn:双人床", "ao:", "wall:[379.0, 70.0, 340.0, 70.0]", "furn:置物架", "ao:", "wall:[103.0, 420.0, 0.0, 420.0]", "furn:衣柜", "ao:", "wall:[379.0, 190.0, 395.0, 190.0]", "ao:", "ao:", "wall:[103.0, 410.0, 287.5, 410.0]", "furn:淋浴区", "ao:", "ao:", "wall:[379.0, 70.0, 379.0, 410.0]", "furn:冰箱", "ao:", "wall:[0.0, 420.0, 0.0, 850.0]", "ao:", "ao:", "wall:[103.0, 410.0, 103.0, 665.0]", "furn:马桶", "ao:", "ao:", "wall:[235.0, 410.0, 235.0, 430.0]", "ao:", "wall:[550.0, 190.0, 395.0, 190.0]", "ao:", "ao:", "wall:[0.0, 665.0, 7.0, 665.0]", "furn:猫厕所", "furn:洗手台", "furn:水槽", "furn:橱柜台面（西）", "furn:扫地机基站", "ao:", "ao:", "wall:[372.5, 410.0, 379.0, 410.0]", "ao:", "ao:", "wall:[379.0, 410.0, 385.0, 410.0]", "ao:", "ao:", "wall:[97.0, 665.0, 235.0, 665.0]", "furn:垃圾桶", "furn:灶台（双眼）", "ao:", "ao:", "wall:[235.0, 510.0, 235.0, 760.0]", "furn:橱柜台面（南）", "ao:", "ao:", "wall:[545.0, 410.0, 550.0, 410.0]", "furn:展示柜", "ao:", "wall:[0.0, 850.0, 255.0, 850.0]", "furn:三人沙发", "ao:", "wall:[550.0, 190.0, 550.0, 850.0]", "ao:", "ao:", "wall:[235.0, 840.0, 235.0, 850.0]", "furn:人体工学椅", "furn:书桌", "furn:格子柜", "ao:", "wall:[345.0, 850.0, 550.0, 850.0]"]}, "panel": {"pet": {"name": "豆包", "weight": "sensor.dou_bao_last_weight_measurement", "toilet": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_toilet_occupied", "feedCount": "sensor.zhi_neng_wei_shi_qi_solo_times_dispensed", "feedGrams": "sensor.zhi_neng_wei_shi_qi_solo_total_dispensed", "plannedGrams": "sensor.zhi_neng_wei_shi_qi_solo_total_planned", "error": "sensor.zhi_neng_wei_shi_qi_solo_error", "sandLack": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_sand_lack", "wasteFull": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_wastebin_filled", "actions": {"clean": {"label": "清理", "domain": "button", "service": "press", "entity": "button.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_scoop"}, "feed": {"label": "出粮", "domain": "text", "service": "set_value", "entity": "text.zhi_neng_wei_shi_qi_solo_manual_feed", "value": "10"}}, "errorMap": {"Food is too many to block the food door. Please clean it.": "出粮口堵塞，请清理"}}, "vacuumCard": {"name": "扫地机 P20", "entity": "vacuum.wei_sheng_jian_p20", "statusMap": {"docked": "在充电座", "cleaning": "清扫中", "paused": "已暂停", "returning": "返回中", "error": "故障", "idle": "待机"}, "battery": "sensor.wei_sheng_jian_p20_battery", "charging": "binary_sensor.wei_sheng_jian_p20_charging", "progress": "sensor.wei_sheng_jian_p20_cleaning_progress", "area": "sensor.wei_sheng_jian_p20_cleaning_area", "time": "sensor.wei_sheng_jian_p20_cleaning_time", "room": "sensor.wei_sheng_jian_p20_current_room", "lastBegin": "sensor.wei_sheng_jian_p20_last_clean_begin", "lastEnd": "sensor.wei_sheng_jian_p20_last_clean_end", "totalCount": "sensor.wei_sheng_jian_p20_total_cleaning_count", "totalArea": "sensor.wei_sheng_jian_p20_total_cleaning_area", "totalTime": "sensor.wei_sheng_jian_p20_total_cleaning_time", "waterShortage": "binary_sensor.wei_sheng_jian_p20_water_shortage", "vacError": "sensor.wei_sheng_jian_p20_vacuum_error", "dockError": "sensor.p20_dock_dock_error", "consumables": [{"entity": "sensor.wei_sheng_jian_p20_sensor_time_left", "label": "传感器耗材", "warn_le": 10}, {"entity": "sensor.wei_sheng_jian_p20_main_brush_time_left", "label": "主刷", "warn_le": 20}, {"entity": "sensor.wei_sheng_jian_p20_filter_time_left", "label": "滤网", "warn_le": 20}, {"entity": "sensor.wei_sheng_jian_p20_side_brush_time_left", "label": "边刷", "warn_le": 20}], "actions": {"start": {"label": "清扫", "domain": "button", "service": "press", "entity": "button.wei_sheng_jian_p20_quan_wu_qing_ji"}, "dock": {"label": "回充", "domain": "vacuum", "service": "return_to_base", "entity": "vacuum.wei_sheng_jian_p20"}, "pause": {"label": "暂停", "domain": "vacuum", "service": "pause", "entity": "vacuum.wei_sheng_jian_p20"}}}, "media": {"name": "客厅 HomePod", "entity": "media_player.qi_ju_shi_qi_ju_shi"}, "climate": {"name": "卧室·空调", "entity": "climate.ac_controller_138a_thermostat", "roomTemp": "sensor.ac_controller_138a_current_temperature", "humidity": "sensor.ac_controller_138a_humidity_sensor", "modeLabels": {"off": "关", "cool": "制冷", "heat": "制热", "auto": "自动", "dry": "除湿", "fan_only": "送风"}, "fanLabels": {"off": "关", "low": "低", "medium": "中", "high": "高", "auto": "自动", "middle": "中"}, "swingLabels": {"off": "关", "vertical": "垂直", "horizontal": "水平", "both": "全摆"}}}, "batch": [{"label": "全关灯", "icon": "💡", "domain": "light", "service": "turn_off", "targets": ["light.chu_fang_deng", "light.da_yang_tai_deng", "light.ke_ting_deng", "light.liu_guang_yi_cai_luo_di_deng_t1", "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "light.shu_zhuo_deng", "light.wo_shi_deng", "light.xiao_yang_tai_deng"]}, {"label": "关窗帘", "icon": "🪟", "domain": "cover", "service": "open_cover", "targets": ["cover.chuang_lian_ban_lu_wo_shi"]}], "risky": {"switch.qiang_bi_cha_zuo_shu_fang": "书房这台插座供电给电脑和路由器。关闭会立即断网，之后需要重新配置整套系统。"}, "covers": {"cover.chuang_lian_ban_lu_wo_shi": {"invert": true}}, "quickActions": [], "stats": {"rooms": 8, "devices": 32}} 处注入，由 tools/make_card.py 生成
 */
const DATA = {"version": "0.4.0", "units": "cm", "canvas": [560, 860], "colors": {"light": "#ffcd5c", "cover": "#b08aff", "switch": "#5eead4", "wall_switch": "#5eead4", "media_player": "#ff8a5c", "sensor": "#78d18c", "binary_sensor": "#78d18c", "button": "#ff78aa", "scene": "#ff78aa", "vacuum": "#c8c87a", "climate": "#8FD3FF", "gateway": "#8ab4ff", "pet": "#c9a0ff"}, "rooms": [{"name": "卧室", "points": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]], "bbox": [103.0, 0.0, 379.0, 410.0], "label": [242.07, 215.73], "temp": "sensor.wen_kong_ban_lu_w100_wo_shi_wen_du_wen_du"}, {"name": "大阳台", "points": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]], "bbox": [379.0, 190.0, 550.0, 410.0], "label": [464.5, 300.0], "temp": null}, {"name": "客厅", "points": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]], "bbox": [235.0, 410.0, 550.0, 665.0], "label": [392.5, 537.5], "temp": null}, {"name": "书房", "points": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]], "bbox": [235.0, 665.0, 550.0, 850.0], "label": [465.0, 743.0], "temp": null}, {"name": "玄关", "points": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]], "bbox": [235.0, 740.0, 380.0, 850.0], "label": [307.5, 795.0], "temp": "sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_wen_du"}, {"name": "浴室", "points": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]], "bbox": [103.0, 410.0, 235.0, 665.0], "label": [169.0, 537.5], "temp": null}, {"name": "小阳台", "points": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]], "bbox": [0.0, 420.0, 103.0, 665.0], "label": [51.5, 542.5], "temp": null}, {"name": "厨房", "points": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]], "bbox": [0.0, 665.0, 235.0, 850.0], "label": [117.5, 757.5], "temp": null}], "walls": [[340.0, 0.0, 160.0, 0.0], [340.0, 0.0, 340.0, 70.0], [160.0, 0.0, 160.0, 70.0], [379.0, 70.0, 340.0, 70.0], [160.0, 70.0, 103.0, 70.0], [379.0, 70.0, 379.0, 410.0], [103.0, 70.0, 103.0, 410.0], [550.0, 190.0, 395.0, 190.0], [550.0, 190.0, 550.0, 850.0], [0.0, 850.0, 255.0, 850.0], [345.0, 850.0, 550.0, 850.0], [0.0, 420.0, 0.0, 850.0], [103.0, 420.0, 0.0, 420.0], [379.0, 410.0, 385.0, 410.0], [545.0, 410.0, 550.0, 410.0], [103.0, 410.0, 287.5, 410.0], [372.5, 410.0, 379.0, 410.0], [235.0, 410.0, 235.0, 430.0], [235.0, 510.0, 235.0, 760.0], [235.0, 840.0, 235.0, 850.0], [0.0, 665.0, 7.0, 665.0], [97.0, 665.0, 235.0, 665.0], [103.0, 410.0, 103.0, 665.0], [379.0, 190.0, 395.0, 190.0]], "doors": [{"id": "entry", "a": "户外", "b": "玄关", "type": "swing", "axis": "h", "gap": [[255.0, 850.0], [345.0, 850.0]], "w": 90.0, "hinge": [345.0, 850.0], "open": [293.4, 776.3], "closed": [255.0, 850.0]}, {"id": "bedroom", "a": "卧室", "b": "客厅", "type": "swing", "axis": "h", "gap": [[287.5, 410.0], [372.5, 410.0]], "w": 85.0, "hinge": [372.5, 410.0], "open": [323.7, 340.4], "closed": [287.5, 410.0]}, {"id": "bath", "a": "浴室", "b": "客厅", "type": "swing", "axis": "v", "gap": [[235.0, 430.0], [235.0, 510.0]], "w": 80.0, "hinge": [235.0, 430.0], "open": [169.5, 475.9], "closed": [235.0, 510.0]}, {"id": "kitchen", "a": "厨房", "b": "玄关", "type": "swing", "axis": "v", "gap": [[235.0, 760.0], [235.0, 840.0]], "w": 80.0, "hinge": [235.0, 840.0], "open": [169.5, 794.1], "closed": [235.0, 760.0]}, {"id": "balcony", "a": "客厅", "b": "大阳台", "type": "sliding", "axis": "h", "gap": [[385.0, 410.0], [545.0, 410.0]], "w": 160.0, "hinge": null, "open": null, "closed": null}, {"id": "sbalcony", "a": "厨房", "b": "小阳台", "type": "opening", "axis": "h", "gap": [[7.0, 665.0], [97.0, 665.0]], "w": 90.0, "hinge": null, "open": null, "closed": null}], "devices": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "area": "卧室", "kind": "light", "rank": 1, "x": 243.1, "y": 226.6, "gangs": null, "controls": [{"entity_id": "light.wo_shi_deng", "domain": "light", "label": "卧室·主灯"}], "state_entity": null, "battery": null}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "area": "卧室", "kind": "cover", "rank": 2, "x": 249.4, "y": 16.7, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_wo_shi", "domain": "cover", "label": "卧室·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_wo_shi_pei_zhi_zhuang_tai", "battery": null}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "area": "卧室", "kind": "sensor", "rank": 3, "x": 111.4, "y": 325.5, "gangs": null, "controls": [], "state_entity": "sensor.wen_kong_ban_lu_w100_wo_shi_shi_du_shi_du", "battery": null}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "area": "卧室", "kind": "switch", "rank": null, "x": 363.5, "y": 146.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_qian", "domain": "switch", "label": "卧室·插座（床前）"}], "state_entity": null, "battery": null}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "area": "卧室", "kind": "switch", "rank": null, "x": 116.2, "y": 116.3, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_you", "domain": "switch", "label": "卧室·插座（床右）"}], "state_entity": null, "battery": null}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "area": "卧室", "kind": "switch", "rank": null, "x": 109.9, "y": 290.6, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_zuo", "domain": "switch", "label": "卧室·插座（床左）"}], "state_entity": null, "battery": null}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "area": "大阳台", "kind": "light", "rank": 12, "x": 464.4, "y": 304.7, "gangs": null, "controls": [{"entity_id": "light.da_yang_tai_deng", "domain": "light", "label": "大阳台·主灯"}], "state_entity": null, "battery": null}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "area": "大阳台", "kind": "sensor", "rank": 14, "x": 512.4, "y": 368.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_ci_chu_you_ren", "battery": "sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_dian_chi_dian_ya"}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "area": "大阳台", "kind": "sensor", "rank": 15, "x": 417.5, "y": 368.8, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_men", "battery": "sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_dian_chi_dian_ya"}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "area": "大阳台", "kind": "binary_sensor", "rank": null, "x": 500.8, "y": 237.5, "gangs": null, "controls": [{"entity_id": "switch.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_auto_clean", "domain": "switch", "label": "大阳台·猫厕所 MAX2"}], "state_entity": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_frequent_use_detection", "battery": null}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "area": "客厅", "kind": "light", "rank": 4, "x": 394.9, "y": 539.8, "gangs": null, "controls": [{"entity_id": "light.ke_ting_deng", "domain": "light", "label": "客厅·主灯"}], "state_entity": null, "battery": null}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "area": "客厅", "kind": "media", "rank": 5, "x": 538.6, "y": 461.2, "gangs": null, "controls": [{"entity_id": "media_player.qi_ju_shi_qi_ju_shi", "domain": "media_player", "label": "客厅·HomePod mini"}], "state_entity": null, "battery": null}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "area": "客厅", "kind": "pet", "rank": 6, "x": 249.4, "y": 504.3, "gangs": null, "controls": [{"entity_id": "switch.zhi_neng_wei_shi_qi_solo_child_lock", "domain": "switch", "label": "客厅·喂食器 SOLO"}], "state_entity": "binary_sensor.zhi_neng_wei_shi_qi_solo_feeding", "battery": "sensor.zhi_neng_wei_shi_qi_solo_battery_level"}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "area": "客厅", "kind": "switch", "rank": null, "x": 250.1, "y": 541.1, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_you", "domain": "switch", "label": "客厅·插座（右）"}], "state_entity": null, "battery": null}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "area": "客厅", "kind": "switch", "rank": null, "x": 249.5, "y": 569.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_zuo", "domain": "switch", "label": "客厅·插座（左）"}], "state_entity": null, "battery": null}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "area": "客厅", "kind": "switch", "rank": null, "x": 537.6, "y": 505.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_sha_fa_bei", "domain": "switch", "label": "客厅·插座（沙发背）"}], "state_entity": null, "battery": null}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "area": "书房", "kind": "light", "rank": 7, "x": 440, "y": 745.5, "gangs": null, "controls": [{"entity_id": "light.shu_zhuo_deng", "domain": "light", "label": "书房·书桌灯"}], "state_entity": null, "battery": null}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "area": "书房", "kind": "light", "rank": 8, "x": 513, "y": 689.6, "gangs": null, "controls": [{"entity_id": "light.liu_guang_yi_cai_luo_di_deng_t1", "domain": "light", "label": "书房·落地灯 T1"}], "state_entity": null, "battery": null}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "area": "书房", "kind": "scene", "rank": 9, "x": 513, "y": 747.2, "gangs": null, "controls": [], "state_entity": null, "battery": "sensor.mo_fang_kong_zhi_qi_shu_fang_fan_zhuan_90_dian_chi_dian_ya"}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "area": "书房", "kind": "gateway", "rank": 10, "x": 514.1, "y": 807, "gangs": null, "controls": [], "state_entity": null, "battery": null}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "area": "书房", "kind": "switch", "rank": null, "x": 537, "y": 777.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_shu_fang", "domain": "switch", "label": "书房·插座"}], "state_entity": null, "battery": null}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "area": "玄关", "kind": "sensor", "rank": 18, "x": 310, "y": 828.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_ci_chu_you_ren", "battery": null}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "area": "玄关", "kind": "sensor", "rank": 19, "x": 260, "y": 827.1, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_zhuang_tai_chuan_gan_qi_p100_men", "battery": null}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "area": "浴室", "kind": "wall_switch", "rank": 20, "x": 169.1, "y": 545.9, "gangs": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "label": "排气扇", "domain": "light", "endpoint": 40, "key": "键1"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "label": "浴室灯", "domain": "light", "endpoint": 41, "key": "键2"}], "controls": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "domain": "light", "label": "排气扇"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "domain": "light", "label": "浴室灯"}], "state_entity": null, "battery": null}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 146, "y": 480.1, "gangs": null, "controls": [{"entity_id": "switch.wei_sheng_jian_p20_do_not_disturb", "domain": "switch", "label": "浴室·扫地机 P20"}], "state_entity": "binary_sensor.wei_sheng_jian_p20_charging", "battery": "sensor.wei_sheng_jian_p20_battery"}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 124.1, "y": 479.6, "gangs": null, "controls": [{"entity_id": "switch.p20_dock_child_lock", "domain": "switch", "label": "浴室·扫地机基站"}], "state_entity": "binary_sensor.p20_dock_clean_water_box", "battery": null}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "area": "小阳台", "kind": "light", "rank": 16, "x": 50.1, "y": 550, "gangs": null, "controls": [{"entity_id": "light.xiao_yang_tai_deng", "domain": "light", "label": "小阳台·主灯"}], "state_entity": null, "battery": null}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "area": "小阳台", "kind": "sensor", "rank": 17, "x": 77.1, "y": 653.4, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_men", "battery": "sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_dian_chi_dian_ya"}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "area": "厨房", "kind": "light", "rank": 11, "x": 120, "y": 759.9, "gangs": null, "controls": [{"entity_id": "light.chu_fang_deng", "domain": "light", "label": "厨房·主灯"}], "state_entity": null, "battery": null}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "area": "厨房", "kind": "switch", "rank": null, "x": 172.4, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_you", "domain": "switch", "label": "厨房·插座（右）"}], "state_entity": null, "battery": null}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "area": "厨房", "kind": "switch", "rank": null, "x": 198.9, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_zuo", "domain": "switch", "label": "厨房·插座（左）"}], "state_entity": null, "battery": null}, {"id": "climate_138a_thermostat", "name": "卧室·空调", "area": "卧室", "kind": "climate", "rank": 21, "x": 170.0, "y": 388.0, "gangs": null, "controls": [{"entity_id": "climate.ac_controller_138a_thermostat", "domain": "climate", "label": "卧室·空调"}], "state_entity": null, "battery": null}], "topology": [{"target": "书房·书桌灯", "via": "玄关·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键1 → 切换书桌灯"}, {"target": "客厅·主灯", "via": "玄关·墙面开关 Z1", "gang": 2, "note": "Studio 自动化：按键2 → 切换客厅灯"}, {"target": "卧室·主灯", "via": "卧室·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键 → 切换卧室灯"}], "scenes": [{"name": "回家", "icon": "🏠", "entity": "script.hui_jia", "steps": [{"kind": "light", "label": "客厅主灯 60% · 3000K", "expect": {"on": true, "pct": 60, "kelvin": 3000}, "check": [{"e": "light.ke_ting_deng", "on": true, "pct": 60, "kelvin": 3000}]}, {"kind": "cover", "label": "卧室窗帘 打开", "cond": "day", "expect": {"state": "open"}, "check": [{"e": "cover.chuang_lian_ban_lu_wo_shi", "state": "open"}]}]}, {"name": "离家", "icon": "🚪", "entity": "script.li_jia", "steps": [{"kind": "light", "label": "全屋 7 盏灯 关闭", "expect": {"on": false}, "check": [{"e": "light.ke_ting_deng", "on": false}, {"e": "light.wo_shi_deng", "on": false}, {"e": "light.shu_zhuo_deng", "on": false}, {"e": "light.liu_guang_yi_cai_luo_di_deng_t1", "on": false}, {"e": "light.chu_fang_deng", "on": false}, {"e": "light.da_yang_tai_deng", "on": false}, {"e": "light.xiao_yang_tai_deng", "on": false}]}, {"kind": "cover", "label": "卧室窗帘 关闭", "expect": {"state": "closed"}, "check": [{"e": "cover.chuang_lian_ban_lu_wo_shi", "state": "closed"}]}]}, {"name": "睡觉", "icon": "🌙", "entity": "script.shui_jiao", "steps": [{"kind": "light", "label": "客厅 + 书房 3 盏灯 关闭", "expect": {"on": false}, "check": [{"e": "light.ke_ting_deng", "on": false}, {"e": "light.shu_zhuo_deng", "on": false}, {"e": "light.liu_guang_yi_cai_luo_di_deng_t1", "on": false}]}, {"kind": "light", "label": "卧室主灯 20% · 2800K", "expect": {"on": true, "pct": 20, "kelvin": 2800}, "check": [{"e": "light.wo_shi_deng", "on": true, "pct": 20, "kelvin": 2800}]}, {"kind": "cover", "label": "卧室窗帘 关闭", "expect": {"state": "closed"}, "check": [{"e": "cover.chuang_lian_ban_lu_wo_shi", "state": "closed"}]}]}, {"name": "办公", "icon": "💼", "entity": "script.ban_gong", "steps": [{"kind": "light", "label": "关闭其他灯", "expect": {"on": false}, "check": [{"e": "light.ke_ting_deng", "on": false}, {"e": "light.wo_shi_deng", "on": false}, {"e": "light.chu_fang_deng", "on": false}, {"e": "light.da_yang_tai_deng", "on": false}, {"e": "light.xiao_yang_tai_deng", "on": false}, {"e": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "on": false}, {"e": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "on": false}]}, {"kind": "light", "label": "书桌灯 100% · 4000K", "expect": {"on": true, "pct": 100, "kelvin": 4000}, "check": [{"e": "light.shu_zhuo_deng", "on": true, "pct": 100, "kelvin": 4000}]}, {"kind": "light", "label": "落地灯 60% · 3500K", "expect": {"on": true, "pct": 60, "kelvin": 3500}, "check": [{"e": "light.liu_guang_yi_cai_luo_di_deng_t1", "on": true, "pct": 60, "kelvin": 3500}]}]}], "ai": [{"icon": "☀", "entity": "input_text.ai_line_weather"}, {"icon": "🧳", "entity": "input_text.ai_line_trip"}, {"icon": "🌡", "entity": "input_text.ai_line_home"}, {"icon": "⚠", "entity": "input_text.ai_line_cross"}], "aiMeta": "input_text.ai_meta", "aiScript": "script.ai_brief_refresh", "iso": {"viewBox": [0, 0, 1104.52, 733.0], "H": 120.0, "T": 10.0, "tilt": 45.0, "zIso": 0.5, "flip": false, "camera": [1.0, 1.0], "tones": {"dark": {"top": "#728090", "mid": "#4A5F78", "dark": "#3E4A61"}, "light": {"top": "#FAF9F7", "mid": "#E6E1D8", "dark": "#BFB9B6"}, "deltaL": {"dark": {"top_mid": 13.4, "mid_dark": 8.3, "top_dark": 21.7}, "light": {"top_mid": 8.2, "mid_dark": 14.2, "top_dark": 22.4}}}, "floors": [{"type": "floor", "name": "卧室", "points": [[1029.7, 230.56], [995.83, 211.27], [1056.46, 176.76], [902.43, 87.88], [842.66, 122.9], [793.83, 94.33], [500.91, 262.58], [738.38, 399.66]], "z": -9617.0, "shade": 1.0, "poly": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]]}, {"type": "floor", "name": "大阳台", "points": [[1073.76, 376.68], [927.8, 292.4], [740.01, 400.82], [885.97, 485.1]], "z": -9235.5, "shade": 1.0, "poly": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]]}, {"type": "floor", "name": "客厅", "points": [[883.23, 486.35], [613.14, 330.41], [394.49, 456.65], [664.58, 612.59]], "z": -9070.0, "shade": 1.0, "poly": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]]}, {"type": "floor", "name": "书房", "points": [[662.5, 613.59], [392.71, 457.86], [328.7, 495.07], [452.27, 567.89], [359.28, 620.59], [504.05, 705.13]], "z": -8860.0, "shade": 1.0, "poly": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]]}, {"type": "floor", "name": "玄关", "points": [[450.24, 566.31], [327.43, 495.4], [234.27, 549.19], [357.08, 620.1]], "z": -8897.5, "shade": 1.0, "poly": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]]}, {"type": "floor", "name": "浴室", "points": [[610.55, 329.43], [497.83, 264.35], [280.07, 390.07], [392.79, 455.15]], "z": -9293.5, "shade": 1.0, "poly": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]]}, {"type": "floor", "name": "小阳台", "points": [[487.64, 268.53], [399.78, 217.81], [190.81, 338.47], [278.66, 389.19]], "z": -9406.0, "shade": 1.0, "poly": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]]}, {"type": "floor", "name": "厨房", "points": [[389.62, 456.33], [188.83, 340.4], [30.76, 431.67], [231.55, 547.6]], "z": -9125.0, "shade": 1.0, "poly": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]]}], "walls": [{"type": "wall", "seg": [340.0, 0.0, 160.0, 0.0], "top": [[1063.2, 114.0], [1054.54, 119.0], [898.66, 29.0], [907.32, 24.0]], "faces": [{"points": [[1063.2, 174.0], [1054.54, 179.0], [1054.54, 119.0], [1063.2, 114.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1054.54, 179.0], [898.66, 89.0], [898.66, 29.0], [1054.54, 119.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 310.0, "shade": 1.0}, {"type": "wall", "seg": [340.0, 0.0, 340.0, 70.0], "top": [[1054.54, 114.0], [1063.2, 119.0], [1002.58, 154.0], [993.92, 149.0]], "faces": [{"points": [[1063.2, 179.0], [1002.58, 214.0], [1002.58, 154.0], [1063.2, 119.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1002.58, 214.0], [993.92, 209.0], [993.92, 149.0], [1002.58, 154.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 435.0, "shade": 1.0}, {"type": "wall", "seg": [160.0, 0.0, 160.0, 70.0], "top": [[898.66, 24.0], [907.32, 29.0], [846.7, 64.0], [838.04, 59.0]], "faces": [{"points": [[907.32, 89.0], [846.7, 124.0], [846.7, 64.0], [907.32, 29.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[846.7, 124.0], [838.04, 119.0], [838.04, 59.0], [846.7, 64.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 255.0, "shade": 1.0}, {"type": "wall", "seg": [379.0, 70.0, 340.0, 70.0], "top": [[1036.35, 168.5], [1027.69, 173.5], [993.92, 154.0], [1002.58, 149.0]], "faces": [{"points": [[1036.35, 228.5], [1027.69, 233.5], [1027.69, 173.5], [1036.35, 168.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1027.69, 233.5], [993.92, 214.0], [993.92, 154.0], [1027.69, 173.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 489.5, "shade": 1.0}, {"type": "wall", "seg": [160.0, 70.0, 103.0, 70.0], "top": [[846.7, 59.0], [838.04, 64.0], [788.68, 35.5], [797.34, 30.5]], "faces": [{"points": [[846.7, 119.0], [838.04, 124.0], [838.04, 64.0], [846.7, 59.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[838.04, 124.0], [788.68, 95.5], [788.68, 35.5], [838.04, 64.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 261.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 70.0, 379.0, 410.0], "top": [[1027.69, 168.5], [1036.35, 173.5], [741.91, 343.5], [733.25, 338.5]], "faces": [{"points": [[1036.35, 233.5], [741.91, 403.5], [741.91, 343.5], [1036.35, 173.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[741.91, 403.5], [733.25, 398.5], [733.25, 338.5], [741.91, 343.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 679.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 70.0, 103.0, 410.0], "top": [[788.68, 30.5], [797.34, 35.5], [502.9, 205.5], [494.24, 200.5]], "faces": [{"points": [[797.34, 95.5], [502.9, 265.5], [502.9, 205.5], [797.34, 35.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[502.9, 265.5], [494.24, 260.5], [494.24, 200.5], [502.9, 205.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 403.0, "shade": 1.0}, {"type": "wall", "seg": [550.0, 190.0, 395.0, 190.0], "top": [[1080.52, 314.0], [1071.86, 319.0], [937.63, 241.5], [946.29, 236.5]], "faces": [{"points": [[1080.52, 374.0], [1071.86, 379.0], [1071.86, 319.0], [1080.52, 314.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1071.86, 379.0], [937.63, 301.5], [937.63, 241.5], [1071.86, 319.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 722.5, "shade": 1.0}, {"type": "wall", "seg": [550.0, 190.0, 550.0, 850.0], "top": [[1071.86, 314.0], [1080.52, 319.0], [508.96, 649.0], [500.3, 644.0]], "faces": [{"points": [[1080.52, 379.0], [508.96, 709.0], [508.96, 649.0], [1080.52, 319.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[508.96, 709.0], [500.3, 704.0], [500.3, 644.0], [508.96, 649.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1130.0, "shade": 1.0}, {"type": "wall", "seg": [0.0, 850.0, 255.0, 850.0], "top": [[24.0, 374.0], [32.66, 369.0], [253.49, 496.5], [244.83, 501.5]], "faces": [{"points": [[253.49, 556.5], [244.83, 561.5], [244.83, 501.5], [253.49, 496.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[244.83, 561.5], [24.0, 434.0], [24.0, 374.0], [244.83, 501.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1037.5, "shade": 1.0}, {"type": "wall", "seg": [345.0, 850.0, 550.0, 850.0], "top": [[322.77, 546.5], [331.43, 541.5], [508.96, 644.0], [500.3, 649.0]], "faces": [{"points": [[508.96, 704.0], [500.3, 709.0], [500.3, 649.0], [508.96, 644.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[500.3, 709.0], [322.77, 606.5], [322.77, 546.5], [500.3, 649.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1357.5, "shade": 1.0}, {"type": "wall", "seg": [0.0, 420.0, 0.0, 850.0], "top": [[396.38, 154.0], [405.04, 159.0], [32.66, 374.0], [24.0, 369.0]], "faces": [{"points": [[405.04, 219.0], [32.66, 434.0], [32.66, 374.0], [405.04, 159.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[32.66, 434.0], [24.0, 429.0], [24.0, 369.0], [32.66, 374.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 695.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 420.0, 0.0, 420.0], "top": [[494.24, 205.5], [485.58, 210.5], [396.38, 159.0], [405.04, 154.0]], "faces": [{"points": [[494.24, 265.5], [485.58, 270.5], [485.58, 210.5], [494.24, 205.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[485.58, 270.5], [396.38, 219.0], [396.38, 159.0], [485.58, 210.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 531.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 410.0, 385.0, 410.0], "top": [[733.25, 343.5], [741.91, 338.5], [747.11, 341.5], [738.45, 346.5]], "faces": [{"points": [[747.11, 401.5], [738.45, 406.5], [738.45, 346.5], [747.11, 341.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[738.45, 406.5], [733.25, 403.5], [733.25, 343.5], [738.45, 346.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 852.0, "shade": 1.0}, {"type": "wall", "seg": [545.0, 410.0, 550.0, 410.0], "top": [[877.01, 426.5], [885.67, 421.5], [890.0, 424.0], [881.34, 429.0]], "faces": [{"points": [[890.0, 484.0], [881.34, 489.0], [881.34, 429.0], [890.0, 424.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[881.34, 489.0], [877.01, 486.5], [877.01, 426.5], [881.34, 429.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1017.5, "shade": 1.0}, {"type": "wall", "seg": [103.0, 410.0, 287.5, 410.0], "top": [[494.24, 205.5], [502.9, 200.5], [662.68, 292.75], [654.02, 297.75]], "faces": [{"points": [[662.68, 352.75], [654.02, 357.75], [654.02, 297.75], [662.68, 292.75]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[654.02, 357.75], [494.24, 265.5], [494.24, 205.5], [654.02, 297.75]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 665.25, "shade": 1.0}, {"type": "wall", "seg": [372.5, 410.0, 379.0, 410.0], "top": [[727.62, 340.25], [736.29, 335.25], [741.91, 338.5], [733.25, 343.5]], "faces": [{"points": [[741.91, 398.5], [733.25, 403.5], [733.25, 343.5], [741.91, 338.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[733.25, 403.5], [727.62, 400.25], [727.62, 340.25], [733.25, 343.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 845.75, "shade": 1.0}, {"type": "wall", "seg": [235.0, 410.0, 235.0, 430.0], "top": [[608.55, 266.5], [617.21, 271.5], [599.89, 281.5], [591.23, 276.5]], "faces": [{"points": [[617.21, 331.5], [599.89, 341.5], [599.89, 281.5], [617.21, 271.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[599.89, 341.5], [591.23, 336.5], [591.23, 276.5], [599.89, 281.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 715.0, "shade": 1.0}, {"type": "wall", "seg": [235.0, 510.0, 235.0, 760.0], "top": [[521.95, 316.5], [530.61, 321.5], [314.11, 446.5], [305.45, 441.5]], "faces": [{"points": [[530.61, 381.5], [314.11, 506.5], [314.11, 446.5], [530.61, 321.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[314.11, 506.5], [305.45, 501.5], [305.45, 441.5], [314.11, 446.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 930.0, "shade": 1.0}, {"type": "wall", "seg": [235.0, 840.0, 235.0, 850.0], "top": [[236.17, 481.5], [244.83, 486.5], [236.17, 491.5], [227.51, 486.5]], "faces": [{"points": [[244.83, 546.5], [236.17, 551.5], [236.17, 491.5], [244.83, 486.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[236.17, 551.5], [227.51, 546.5], [227.51, 486.5], [236.17, 491.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1140.0, "shade": 1.0}, {"type": "wall", "seg": [0.0, 665.0, 7.0, 665.0], "top": [[184.21, 281.5], [192.87, 276.5], [198.93, 280.0], [190.27, 285.0]], "faces": [{"points": [[198.93, 340.0], [190.27, 345.0], [190.27, 285.0], [198.93, 280.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[190.27, 345.0], [184.21, 341.5], [184.21, 281.5], [190.27, 285.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 728.5, "shade": 1.0}, {"type": "wall", "seg": [97.0, 665.0, 235.0, 665.0], "top": [[268.21, 330.0], [276.87, 325.0], [396.38, 394.0], [387.72, 399.0]], "faces": [{"points": [[396.38, 454.0], [387.72, 459.0], [387.72, 399.0], [396.38, 394.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[387.72, 459.0], [268.21, 390.0], [268.21, 330.0], [387.72, 399.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 891.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 410.0, 103.0, 665.0], "top": [[494.24, 200.5], [502.9, 205.5], [282.07, 333.0], [273.41, 328.0]], "faces": [{"points": [[502.9, 265.5], [282.07, 393.0], [282.07, 333.0], [502.9, 205.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[282.07, 393.0], [273.41, 388.0], [273.41, 328.0], [282.07, 333.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 700.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 190.0, 395.0, 190.0], "top": [[923.77, 233.5], [932.43, 228.5], [946.29, 236.5], [937.63, 241.5]], "faces": [{"points": [[946.29, 296.5], [937.63, 301.5], [937.63, 241.5], [946.29, 236.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[937.63, 301.5], [923.77, 293.5], [923.77, 233.5], [937.63, 241.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 637.0, "shade": 1.0}], "ao": [{"type": "ao", "points": [[1058.0, 181.0], [895.2, 87.0], [888.27, 91.0], [1051.08, 185.0]], "opacity": 0.14, "z": 309.95}, {"type": "ao", "points": [[1058.0, 172.0], [990.46, 211.0], [983.53, 207.0], [1051.08, 168.0]], "opacity": 0.14, "z": 434.95}, {"type": "ao", "points": [[910.78, 87.0], [843.24, 126.0], [850.16, 130.0], [917.71, 91.0]], "opacity": 0.14, "z": 254.95}, {"type": "ao", "points": [[1031.16, 235.5], [990.46, 212.0], [983.53, 216.0], [1024.23, 239.5]], "opacity": 0.14, "z": 489.45}, {"type": "ao", "points": [[841.5, 126.0], [785.21, 93.5], [778.29, 97.5], [834.58, 130.0]], "opacity": 0.14, "z": 261.45}, {"type": "ao", "points": [[1031.16, 226.5], [729.79, 400.5], [722.86, 396.5], [1024.23, 222.5]], "opacity": 0.14, "z": 678.95}, {"type": "ao", "points": [[1039.82, 231.5], [738.45, 405.5], [745.38, 409.5], [1046.75, 235.5]], "opacity": 0.14, "z": 678.95}, {"type": "ao", "points": [[800.8, 93.5], [499.43, 267.5], [506.36, 271.5], [807.73, 97.5]], "opacity": 0.14, "z": 402.95}, {"type": "ao", "points": [[1075.32, 381.0], [934.17, 299.5], [927.24, 303.5], [1068.4, 385.0]], "opacity": 0.14, "z": 722.45}, {"type": "ao", "points": [[1075.32, 372.0], [496.84, 706.0], [489.91, 702.0], [1068.4, 368.0]], "opacity": 0.14, "z": 1129.95}, {"type": "ao", "points": [[29.2, 427.0], [256.95, 558.5], [263.88, 554.5], [36.12, 423.0]], "opacity": 0.14, "z": 1037.45}, {"type": "ao", "points": [[327.97, 599.5], [512.42, 706.0], [519.35, 702.0], [334.89, 595.5]], "opacity": 0.14, "z": 1357.45}, {"type": "ao", "points": [[408.5, 217.0], [29.2, 436.0], [36.12, 440.0], [415.43, 221.0]], "opacity": 0.14, "z": 694.95}, {"type": "ao", "points": [[489.04, 272.5], [392.92, 217.0], [385.99, 221.0], [482.11, 276.5]], "opacity": 0.14, "z": 531.45}, {"type": "ao", "points": [[729.79, 401.5], [741.91, 408.5], [734.99, 412.5], [722.86, 405.5]], "opacity": 0.14, "z": 851.95}, {"type": "ao", "points": [[738.45, 396.5], [750.57, 403.5], [757.5, 399.5], [745.38, 392.5]], "opacity": 0.14, "z": 851.95}, {"type": "ao", "points": [[873.55, 484.5], [884.8, 491.0], [877.88, 495.0], [866.62, 488.5]], "opacity": 0.14, "z": 1017.45}, {"type": "ao", "points": [[882.21, 479.5], [893.46, 486.0], [900.39, 482.0], [889.13, 475.5]], "opacity": 0.14, "z": 1017.45}, {"type": "ao", "points": [[490.77, 263.5], [657.48, 359.75], [650.55, 363.75], [483.85, 267.5]], "opacity": 0.14, "z": 665.2}, {"type": "ao", "points": [[499.43, 258.5], [666.14, 354.75], [673.07, 350.75], [506.36, 254.5]], "opacity": 0.14, "z": 665.2}, {"type": "ao", "points": [[724.16, 398.25], [736.72, 405.5], [729.79, 409.5], [717.23, 402.25]], "opacity": 0.14, "z": 845.7}, {"type": "ao", "points": [[732.82, 393.25], [745.38, 400.5], [752.31, 396.5], [739.75, 389.25]], "opacity": 0.14, "z": 845.7}, {"type": "ao", "points": [[612.01, 324.5], [587.77, 338.5], [580.84, 334.5], [605.09, 320.5]], "opacity": 0.14, "z": 714.95}, {"type": "ao", "points": [[620.67, 329.5], [596.43, 343.5], [603.35, 347.5], [627.6, 333.5]], "opacity": 0.14, "z": 714.95}, {"type": "ao", "points": [[525.41, 374.5], [301.99, 503.5], [295.06, 499.5], [518.49, 370.5]], "opacity": 0.14, "z": 929.95}, {"type": "ao", "points": [[534.07, 379.5], [310.65, 508.5], [317.57, 512.5], [541.0, 383.5]], "opacity": 0.14, "z": 929.95}, {"type": "ao", "points": [[239.63, 539.5], [224.05, 548.5], [217.12, 544.5], [232.71, 535.5]], "opacity": 0.14, "z": 1139.95}, {"type": "ao", "points": [[248.29, 544.5], [232.71, 553.5], [239.63, 557.5], [255.22, 548.5]], "opacity": 0.14, "z": 1139.95}, {"type": "ao", "points": [[180.75, 339.5], [193.74, 347.0], [186.81, 351.0], [173.82, 343.5]], "opacity": 0.14, "z": 728.45}, {"type": "ao", "points": [[189.41, 334.5], [202.4, 342.0], [209.32, 338.0], [196.33, 330.5]], "opacity": 0.14, "z": 728.45}, {"type": "ao", "points": [[264.75, 388.0], [391.18, 461.0], [384.26, 465.0], [257.82, 392.0]], "opacity": 0.14, "z": 890.95}, {"type": "ao", "points": [[273.41, 383.0], [399.84, 456.0], [406.77, 452.0], [280.34, 379.0]], "opacity": 0.14, "z": 890.95}, {"type": "ao", "points": [[497.7, 258.5], [269.94, 390.0], [263.02, 386.0], [490.77, 254.5]], "opacity": 0.14, "z": 700.45}, {"type": "ao", "points": [[506.36, 263.5], [278.6, 395.0], [285.53, 399.0], [513.29, 267.5]], "opacity": 0.14, "z": 700.45}, {"type": "ao", "points": [[920.31, 291.5], [941.09, 303.5], [934.17, 307.5], [913.38, 295.5]], "opacity": 0.14, "z": 636.95}], "furn": [{"type": "furn", "id": "bed", "name": "双人床", "room": "卧室", "material": "soft", "top": [[823.32, 113.5], [953.22, 188.5], [780.02, 288.5], [650.12, 213.5]], "faces": [{"points": [[953.22, 213.5], [780.02, 313.5], [780.02, 288.5], [953.22, 188.5]], "tone": "dark"}, {"points": [[780.02, 313.5], [650.12, 238.5], [650.12, 213.5], [780.02, 288.5]], "tone": "mid"}], "z": 464.0, "base_h": 0.0, "height": 50.0, "height_raw": 50.0, "height_capped": false}, {"type": "furn", "id": "wardrobe", "name": "衣柜", "room": "卧室", "material": "wood", "top": [[560.92, 178.0], [716.8, 268.0], [664.84, 298.0], [508.96, 208.0]], "faces": [{"points": [[716.8, 323.0], [664.84, 353.0], [664.84, 298.0], [716.8, 268.0]], "tone": "dark"}, {"points": [[664.84, 353.0], [508.96, 263.0], [508.96, 208.0], [664.84, 298.0]], "tone": "mid"}], "z": 628.0, "base_h": 0.0, "height": 110.0, "height_raw": 220.0, "height_capped": true}, {"type": "furn", "id": "dresser", "name": "梳妆台", "room": "卧室", "material": "wood", "top": [[911.65, 60.0], [1032.89, 130.0], [993.92, 152.5], [872.68, 82.5]], "faces": [{"points": [[1032.89, 167.5], [993.92, 190.0], [993.92, 152.5], [1032.89, 130.0]], "tone": "dark"}, {"points": [[993.92, 190.0], [872.68, 120.0], [872.68, 82.5], [993.92, 152.5]], "tone": "mid"}], "z": 312.0, "base_h": 0.0, "height": 75.0, "height_raw": 75.0, "height_capped": false}, {"type": "furn", "id": "sofa", "name": "三人沙发", "room": "客厅", "material": "soft", "top": [[745.38, 429.0], [823.32, 474.0], [664.84, 565.5], [586.9, 520.5]], "faces": [{"points": [[823.32, 516.5], [664.84, 608.0], [664.84, 565.5], [823.32, 474.0]], "tone": "dark"}, {"points": [[664.84, 608.0], [586.9, 563.0], [586.9, 520.5], [664.84, 565.5]], "tone": "mid"}], "z": 1109.0, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "display", "name": "展示柜", "room": "客厅", "material": "wood", "top": [[844.97, 414.0], [875.28, 431.5], [828.51, 458.5], [798.2, 441.0]], "faces": [{"points": [[875.28, 486.5], [828.51, 513.5], [828.51, 458.5], [875.28, 431.5]], "tone": "dark"}, {"points": [[828.51, 513.5], [798.2, 496.0], [798.2, 441.0], [828.51, 458.5]], "tone": "mid"}], "z": 1024.5, "base_h": 0.0, "height": 110.0, "height_raw": 110.0, "height_capped": false}, {"type": "furn", "id": "desk", "name": "书桌", "room": "书房", "material": "wood", "top": [[598.16, 544.0], [654.45, 576.5], [539.27, 643.0], [482.98, 610.5]], "faces": [{"points": [[654.45, 614.0], [539.27, 680.5], [539.27, 643.0], [654.45, 576.5]], "tone": "dark"}, {"points": [[539.27, 680.5], [482.98, 648.0], [482.98, 610.5], [539.27, 643.0]], "tone": "mid"}], "z": 1286.5, "base_h": 0.0, "height": 75.0, "height_raw": 75.0, "height_capped": false}, {"type": "furn", "id": "chair", "name": "人体工学椅", "room": "书房", "material": "wood", "top": [[513.29, 519.0], [569.58, 551.5], [513.29, 584.0], [457.0, 551.5]], "faces": [{"points": [[569.58, 594.0], [513.29, 626.5], [513.29, 584.0], [569.58, 551.5]], "tone": "dark"}, {"points": [[513.29, 626.5], [457.0, 594.0], [457.0, 551.5], [513.29, 584.0]], "tone": "mid"}], "z": 1217.5, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "cube", "name": "格子柜", "room": "书房", "material": "wood", "top": [[402.44, 546.5], [506.36, 606.5], [471.72, 626.5], [367.8, 566.5]], "faces": [{"points": [[506.36, 661.5], [471.72, 681.5], [471.72, 626.5], [506.36, 606.5]], "tone": "dark"}, {"points": [[471.72, 681.5], [367.8, 621.5], [367.8, 566.5], [471.72, 626.5]], "tone": "mid"}], "z": 1325.0, "base_h": 0.0, "height": 110.0, "height_raw": 130.0, "height_capped": true}, {"type": "furn", "id": "litter", "name": "猫厕所", "room": "大阳台", "material": "wood", "top": [[993.92, 319.0], [1047.61, 350.0], [1000.85, 377.0], [947.16, 346.0]], "faces": [{"points": [[1047.61, 380.0], [1000.85, 407.0], [1000.85, 377.0], [1047.61, 350.0]], "tone": "dark"}, {"points": [[1000.85, 407.0], [947.16, 376.0], [947.16, 346.0], [1000.85, 377.0]], "tone": "mid"}], "z": 773.0, "base_h": 0.0, "height": 60.0, "height_raw": 60.0, "height_capped": false}, {"type": "furn", "id": "fridge", "name": "冰箱", "room": "小阳台", "material": "wood", "top": [[286.4, 235.5], [334.03, 263.0], [282.07, 293.0], [234.44, 265.5]], "faces": [{"points": [[334.03, 318.0], [282.07, 348.0], [282.07, 293.0], [334.03, 263.0]], "tone": "dark"}, {"points": [[282.07, 348.0], [234.44, 320.5], [234.44, 265.5], [282.07, 293.0]], "tone": "mid"}], "z": 680.5, "base_h": 0.0, "height": 110.0, "height_raw": 145.0, "height_capped": true}, {"type": "furn", "id": "rack", "name": "置物架", "room": "小阳台", "material": "wood", "top": [[390.32, 200.5], [424.96, 220.5], [394.65, 238.0], [360.01, 218.0]], "faces": [{"points": [[424.96, 250.5], [394.65, 268.0], [394.65, 238.0], [424.96, 220.5]], "tone": "dark"}, {"points": [[394.65, 268.0], [360.01, 248.0], [360.01, 218.0], [394.65, 238.0]], "tone": "mid"}], "z": 515.5, "base_h": 0.0, "height": 60.0, "height_raw": 60.0, "height_capped": false}, {"type": "furn", "id": "counter_s", "name": "橱柜台面（南）", "room": "厨房", "material": "wood", "top": [[90.68, 359.0], [283.8, 470.5], [231.84, 500.5], [38.72, 389.0]], "faces": [{"points": [[283.8, 513.0], [231.84, 543.0], [231.84, 500.5], [283.8, 470.5]], "tone": "dark"}, {"points": [[231.84, 543.0], [38.72, 431.5], [38.72, 389.0], [231.84, 500.5]], "tone": "mid"}], "z": 974.0, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "counter_w", "name": "橱柜台面（西）", "room": "厨房", "material": "wood", "top": [[163.43, 317.0], [211.06, 344.5], [138.31, 386.5], [90.68, 359.0]], "faces": [{"points": [[211.06, 387.0], [138.31, 429.0], [138.31, 386.5], [211.06, 344.5]], "tone": "dark"}, {"points": [[138.31, 429.0], [90.68, 401.5], [90.68, 359.0], [138.31, 386.5]], "tone": "mid"}], "z": 818.0, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "cooktop", "name": "灶台（双眼）", "room": "厨房", "material": "hard", "top": [[97.61, 371.0], [153.9, 403.5], [114.93, 426.0], [58.64, 393.5]], "faces": [{"points": [[153.9, 406.5], [114.93, 429.0], [114.93, 426.0], [153.9, 403.5]], "tone": "dark"}, {"points": [[114.93, 429.0], [58.64, 396.5], [58.64, 393.5], [114.93, 426.0]], "tone": "mid"}], "z": 920.5, "base_h": 85.0, "height": 6.0, "height_raw": 6.0, "height_capped": false}, {"type": "furn", "id": "sink", "name": "水槽", "room": "厨房", "material": "hard", "top": [[164.29, 318.5], [203.26, 341.0], [168.62, 361.0], [129.65, 338.5]], "faces": [{"points": [[203.26, 345.0], [168.62, 365.0], [168.62, 361.0], [203.26, 341.0]], "tone": "dark"}, {"points": [[168.62, 365.0], [129.65, 342.5], [129.65, 338.5], [168.62, 361.0]], "tone": "mid"}], "z": 806.0, "base_h": 85.0, "height": 8.0, "height_raw": 8.0, "height_capped": false}, {"type": "furn", "id": "bin", "name": "垃圾桶", "room": "厨房", "material": "wood", "top": [[355.68, 422.5], [379.93, 436.5], [359.14, 448.5], [334.89, 434.5]], "faces": [{"points": [[379.93, 456.5], [359.14, 468.5], [359.14, 448.5], [379.93, 436.5]], "tone": "dark"}, {"points": [[359.14, 468.5], [334.89, 454.5], [334.89, 434.5], [359.14, 448.5]], "tone": "mid"}], "z": 918.0, "base_h": 0.0, "height": 40.0, "height_raw": 40.0, "height_capped": false}, {"type": "furn", "id": "shower", "name": "淋浴区", "room": "浴室", "material": "hard", "top": [[498.57, 214.0], [576.51, 259.0], [498.57, 304.0], [420.63, 259.0]], "faces": [{"points": [[576.51, 314.0], [498.57, 359.0], [498.57, 304.0], [576.51, 259.0]], "tone": "dark"}, {"points": [[498.57, 359.0], [420.63, 314.0], [420.63, 259.0], [498.57, 304.0]], "tone": "mid"}], "z": 670.0, "base_h": 0.0, "height": 110.0, "height_raw": 200.0, "height_capped": true}, {"type": "furn", "id": "toilet", "name": "马桶", "room": "浴室", "material": "wood", "top": [[412.83, 281.0], [464.79, 311.0], [430.15, 331.0], [378.19, 301.0]], "faces": [{"points": [[464.79, 348.5], [430.15, 368.5], [430.15, 331.0], [464.79, 311.0]], "tone": "dark"}, {"points": [[430.15, 368.5], [378.19, 338.5], [378.19, 301.0], [430.15, 331.0]], "tone": "mid"}], "z": 711.5, "base_h": 0.0, "height": 75.0, "height_raw": 75.0, "height_capped": false}, {"type": "furn", "id": "basin", "name": "洗手台", "room": "浴室", "material": "wood", "top": [[356.54, 308.5], [395.51, 331.0], [347.88, 358.5], [308.91, 336.0]], "faces": [{"points": [[395.51, 373.5], [347.88, 401.0], [347.88, 358.5], [395.51, 331.0]], "tone": "dark"}, {"points": [[347.88, 401.0], [308.91, 378.5], [308.91, 336.0], [347.88, 358.5]], "tone": "mid"}], "z": 781.5, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "dock", "name": "扫地机基站", "room": "浴室", "material": "wood", "top": [[396.38, 376.5], [431.02, 396.5], [392.05, 419.0], [357.41, 399.0]], "faces": [{"points": [[431.02, 414.0], [392.05, 436.5], [392.05, 419.0], [431.02, 396.5]], "tone": "dark"}, {"points": [[392.05, 436.5], [357.41, 416.5], [357.41, 399.0], [392.05, 419.0]], "tone": "mid"}], "z": 835.0, "base_h": 0.0, "height": 35.0, "height_raw": 35.0, "height_capped": false}], "doors": [{"id": "entry", "a": "户外", "b": "玄关", "axis": "h", "at": 850.0, "c": 300.0, "w": 90.0, "type": "swing", "gap": [[255.0, 850.0], [345.0, 850.0]], "hinge_pt": [345.0, 850.0], "closed_end": [255.0, 850.0], "open_end": [293.4, 776.3]}, {"id": "bedroom", "a": "卧室", "b": "客厅", "axis": "h", "at": 410.0, "c": 330.0, "w": 85.0, "type": "swing", "gap": [[287.5, 410.0], [372.5, 410.0]], "hinge_pt": [372.5, 410.0], "closed_end": [287.5, 410.0], "open_end": [323.7, 340.4]}, {"id": "bath", "a": "浴室", "b": "客厅", "axis": "v", "at": 235.0, "c": 470.0, "w": 80.0, "type": "swing", "gap": [[235.0, 430.0], [235.0, 510.0]], "hinge_pt": [235.0, 430.0], "closed_end": [235.0, 510.0], "open_end": [169.5, 475.9]}, {"id": "kitchen", "a": "厨房", "b": "玄关", "axis": "v", "at": 235.0, "c": 800.0, "w": 80.0, "type": "swing", "gap": [[235.0, 760.0], [235.0, 840.0]], "hinge_pt": [235.0, 840.0], "closed_end": [235.0, 760.0], "open_end": [169.5, 794.1]}, {"id": "balcony", "a": "客厅", "b": "大阳台", "axis": "h", "at": 410.0, "c": 465.0, "w": 160.0, "type": "sliding", "gap": [[385.0, 410.0], [545.0, 410.0]], "hinge_pt": null, "closed_end": null, "open_end": null}, {"id": "sbalcony", "a": "厨房", "b": "小阳台", "axis": "h", "at": 665.0, "c": 52.0, "w": 90.0, "type": "opening", "gap": [[7.0, 665.0], [97.0, 665.0]], "hinge_pt": null, "closed_end": null, "open_end": null}], "draw": [{"role": "floor", "pts": [[1029.7, 230.56], [995.83, 211.27], [1056.46, 176.76], [902.43, 87.88], [842.66, 122.9], [793.83, 94.33], [500.91, 262.58], [738.38, 399.66]], "depth": -100000.0, "name": "卧室"}, {"role": "floor", "pts": [[1073.76, 376.68], [927.8, 292.4], [740.01, 400.82], [885.97, 485.1]], "depth": -99999.0, "name": "大阳台"}, {"role": "floor", "pts": [[883.23, 486.35], [613.14, 330.41], [394.49, 456.65], [664.58, 612.59]], "depth": -99998.0, "name": "客厅"}, {"role": "floor", "pts": [[662.5, 613.59], [392.71, 457.86], [328.7, 495.07], [452.27, 567.89], [359.28, 620.59], [504.05, 705.13]], "depth": -99997.0, "name": "书房"}, {"role": "floor", "pts": [[450.24, 566.31], [327.43, 495.4], [234.27, 549.19], [357.08, 620.1]], "depth": -99996.0, "name": "玄关"}, {"role": "floor", "pts": [[610.55, 329.43], [497.83, 264.35], [280.07, 390.07], [392.79, 455.15]], "depth": -99995.0, "name": "浴室"}, {"role": "floor", "pts": [[487.64, 268.53], [399.78, 217.81], [190.81, 338.47], [278.66, 389.19]], "depth": -99994.0, "name": "小阳台"}, {"role": "floor", "pts": [[389.62, 456.33], [188.83, 340.4], [30.76, 431.67], [231.55, 547.6]], "depth": -99993.0, "name": "厨房"}, {"role": "wallFace", "pts": [[907.32, 89.0], [877.01, 106.5], [877.01, 46.5], [907.32, 29.0]], "depth": 242.5, "tone": "dark"}, {"role": "wallFace", "pts": [[937.63, 111.5], [898.66, 89.0], [898.66, 29.0], [937.63, 51.5]], "depth": 247.5, "tone": "mid"}, {"role": "wallFace", "pts": [[813.36, 109.75], [788.68, 95.5], [788.68, 35.5], [813.36, 49.75]], "depth": 252.25, "tone": "mid"}, {"role": "ao", "pts": [[910.78, 87.0], [843.24, 126.0], [850.16, 130.0], [917.71, 91.0]], "depth": 254.5, "opacity": 0.14}, {"role": "ao", "pts": [[841.5, 126.0], [785.21, 93.5], [778.29, 97.5], [834.58, 130.0]], "depth": 261.0, "opacity": 0.14}, {"role": "wallFace", "pts": [[797.34, 95.5], [755.28, 119.79], [755.28, 59.79], [797.34, 35.5]], "depth": 262.29, "tone": "dark"}, {"role": "wallFace", "pts": [[877.01, 106.5], [846.7, 124.0], [846.7, 64.0], [877.01, 46.5]], "depth": 277.5, "tone": "dark"}, {"role": "wallFace", "pts": [[838.04, 124.0], [813.36, 109.75], [813.36, 49.75], [838.04, 64.0]], "depth": 280.75, "tone": "mid"}, {"role": "wallFace", "pts": [[846.7, 124.0], [838.04, 119.0], [838.04, 59.0], [846.7, 64.0]], "depth": 290.0, "tone": "mid"}, {"role": "wallFace", "pts": [[846.7, 119.0], [838.04, 124.0], [838.04, 64.0], [846.7, 59.0]], "depth": 290.0, "tone": "dark"}, {"role": "wallFace", "pts": [[976.6, 134.0], [937.63, 111.5], [937.63, 51.5], [976.6, 74.0]], "depth": 292.5, "tone": "mid"}, {"role": "wallTop", "pts": [[898.66, 24.0], [907.32, 29.0], [877.01, 46.5], [868.35, 41.5]], "depth": 297.5, "tone": "top"}, {"role": "wallTop", "pts": [[946.29, 46.5], [937.63, 51.5], [898.66, 29.0], [907.32, 24.0]], "depth": 302.5, "tone": "top"}, {"role": "wallTop", "pts": [[822.02, 44.75], [813.36, 49.75], [788.68, 35.5], [797.34, 30.5]], "depth": 307.25, "tone": "top"}, {"role": "ao", "pts": [[1058.0, 181.0], [895.2, 87.0], [888.27, 91.0], [1051.08, 185.0]], "depth": 309.5, "opacity": 0.14}, {"role": "wallFace", "pts": [[755.28, 119.79], [713.21, 144.07], [713.21, 84.07], [755.28, 59.79]], "depth": 310.86, "tone": "dark"}, {"role": "wallTop", "pts": [[788.68, 30.5], [797.34, 35.5], [755.28, 59.79], [746.62, 54.79]], "depth": 317.29, "tone": "top"}, {"role": "wallTop", "pts": [[868.35, 41.5], [877.01, 46.5], [846.7, 64.0], [838.04, 59.0]], "depth": 332.5, "tone": "top"}, {"role": "furnFace", "pts": [[993.92, 190.0], [872.68, 120.0], [872.68, 82.5], [993.92, 152.5]], "depth": 334.5, "tone": "mid", "mat": "wood"}, {"role": "wallTop", "pts": [[846.7, 59.0], [838.04, 64.0], [813.36, 49.75], [822.02, 44.75]], "depth": 335.75, "tone": "top"}, {"role": "wallFace", "pts": [[1015.57, 156.5], [976.6, 134.0], [976.6, 74.0], [1015.57, 96.5]], "depth": 337.5, "tone": "mid"}, {"role": "wallTop", "pts": [[985.26, 69.0], [976.6, 74.0], [937.63, 51.5], [946.29, 46.5]], "depth": 347.5, "tone": "top"}, {"role": "furnTop", "pts": [[911.65, 60.0], [1032.89, 130.0], [993.92, 152.5], [872.68, 82.5]], "depth": 349.5, "tone": "top", "mat": "wood"}, {"role": "wallFace", "pts": [[713.21, 144.07], [671.15, 168.36], [671.15, 108.36], [713.21, 84.07]], "depth": 359.43, "tone": "dark"}, {"role": "wallTop", "pts": [[746.62, 54.79], [755.28, 59.79], [713.21, 84.07], [704.55, 79.07]], "depth": 365.86, "tone": "top"}, {"role": "furnFace", "pts": [[1032.89, 167.5], [993.92, 190.0], [993.92, 152.5], [1032.89, 130.0]], "depth": 382.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[1054.54, 179.0], [1015.57, 156.5], [1015.57, 96.5], [1054.54, 119.0]], "depth": 382.5, "tone": "mid"}, {"role": "wallTop", "pts": [[1024.23, 91.5], [1015.57, 96.5], [976.6, 74.0], [985.26, 69.0]], "depth": 392.5, "tone": "top"}, {"role": "wallFace", "pts": [[1063.2, 174.0], [1054.54, 179.0], [1054.54, 119.0], [1063.2, 114.0]], "depth": 400.0, "tone": "dark"}, {"role": "ao", "pts": [[800.8, 93.5], [499.43, 267.5], [506.36, 271.5], [807.73, 97.5]], "depth": 402.5, "opacity": 0.14}, {"role": "wallFace", "pts": [[671.15, 168.36], [629.09, 192.64], [629.09, 132.64], [671.15, 108.36]], "depth": 408.0, "tone": "dark"}, {"role": "wallTop", "pts": [[704.55, 79.07], [713.21, 84.07], [671.15, 108.36], [662.49, 103.36]], "depth": 414.43, "tone": "top"}, {"role": "wallFace", "pts": [[1063.2, 179.0], [1032.89, 196.5], [1032.89, 136.5], [1063.2, 119.0]], "depth": 422.5, "tone": "dark"}, {"role": "ao", "pts": [[1058.0, 172.0], [990.46, 211.0], [983.53, 207.0], [1051.08, 168.0]], "depth": 434.5, "opacity": 0.14}, {"role": "wallTop", "pts": [[1063.2, 114.0], [1054.54, 119.0], [1015.57, 96.5], [1024.23, 91.5]], "depth": 437.5, "tone": "top"}, {"role": "wallFace", "pts": [[629.09, 192.64], [587.02, 216.93], [587.02, 156.93], [629.09, 132.64]], "depth": 456.57, "tone": "dark"}, {"role": "wallFace", "pts": [[1032.89, 196.5], [1002.58, 214.0], [1002.58, 154.0], [1032.89, 136.5]], "depth": 457.5, "tone": "dark"}, {"role": "wallTop", "pts": [[662.49, 103.36], [671.15, 108.36], [629.09, 132.64], [620.43, 127.64]], "depth": 463.0, "tone": "top"}, {"role": "wallFace", "pts": [[1002.58, 214.0], [993.92, 209.0], [993.92, 149.0], [1002.58, 154.0]], "depth": 470.0, "tone": "mid"}, {"role": "wallTop", "pts": [[1054.54, 114.0], [1063.2, 119.0], [1032.89, 136.5], [1024.23, 131.5]], "depth": 477.5, "tone": "top"}, {"role": "ao", "pts": [[1031.16, 235.5], [990.46, 212.0], [983.53, 216.0], [1024.23, 239.5]], "depth": 489.0, "opacity": 0.14}, {"role": "furnTop", "pts": [[823.32, 113.5], [953.22, 188.5], [780.02, 288.5], [650.12, 213.5]], "depth": 489.0, "tone": "top", "mat": "soft"}, {"role": "wallFace", "pts": [[1027.69, 233.5], [993.92, 214.0], [993.92, 154.0], [1027.69, 173.5]], "depth": 494.5, "tone": "mid"}, {"role": "wallFace", "pts": [[426.11, 236.17], [396.38, 219.0], [396.38, 159.0], [426.11, 176.17]], "depth": 502.17, "tone": "mid"}, {"role": "wallFace", "pts": [[587.02, 216.93], [544.96, 241.21], [544.96, 181.21], [587.02, 156.93]], "depth": 505.14, "tone": "dark"}, {"role": "wallFace", "pts": [[405.04, 219.0], [363.66, 242.89], [363.66, 182.89], [405.04, 159.0]], "depth": 508.89, "tone": "dark"}, {"role": "wallFace", "pts": [[1036.35, 228.5], [1027.69, 233.5], [1027.69, 173.5], [1036.35, 168.5]], "depth": 509.0, "tone": "dark"}, {"role": "wallTop", "pts": [[620.43, 127.64], [629.09, 132.64], [587.02, 156.93], [578.36, 151.93]], "depth": 511.57, "tone": "top"}, {"role": "wallTop", "pts": [[1024.23, 131.5], [1032.89, 136.5], [1002.58, 154.0], [993.92, 149.0]], "depth": 512.5, "tone": "top"}, {"role": "ao", "pts": [[489.04, 272.5], [392.92, 217.0], [385.99, 221.0], [482.11, 276.5]], "depth": 531.0, "opacity": 0.14}, {"role": "furnFace", "pts": [[394.65, 268.0], [360.01, 248.0], [360.01, 218.0], [394.65, 238.0]], "depth": 533.0, "tone": "mid", "mat": "wood"}, {"role": "furnFace", "pts": [[424.96, 250.5], [394.65, 268.0], [394.65, 238.0], [424.96, 220.5]], "depth": 535.5, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[455.85, 253.33], [426.11, 236.17], [426.11, 176.17], [455.85, 193.33]], "depth": 536.5, "tone": "mid"}, {"role": "wallFace", "pts": [[1036.35, 233.5], [994.29, 257.79], [994.29, 197.79], [1036.35, 173.5]], "depth": 538.29, "tone": "dark"}, {"role": "furnFace", "pts": [[953.22, 213.5], [780.02, 313.5], [780.02, 288.5], [953.22, 188.5]], "depth": 539.0, "tone": "dark", "mat": "soft"}, {"role": "furnTop", "pts": [[390.32, 200.5], [424.96, 220.5], [394.65, 238.0], [360.01, 218.0]], "depth": 545.5, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[1036.35, 168.5], [1027.69, 173.5], [993.92, 154.0], [1002.58, 149.0]], "depth": 549.5, "tone": "top"}, {"role": "wallFace", "pts": [[544.96, 241.21], [502.9, 265.5], [502.9, 205.5], [544.96, 181.21]], "depth": 553.71, "tone": "dark"}, {"role": "wallFace", "pts": [[363.66, 242.89], [322.29, 266.78], [322.29, 206.78], [363.66, 182.89]], "depth": 556.67, "tone": "dark"}, {"role": "wallTop", "pts": [[434.77, 171.17], [426.11, 176.17], [396.38, 159.0], [405.04, 154.0]], "depth": 557.17, "tone": "top"}, {"role": "wallTop", "pts": [[578.36, 151.93], [587.02, 156.93], [544.96, 181.21], [536.3, 176.21]], "depth": 560.14, "tone": "top"}, {"role": "wallTop", "pts": [[396.38, 154.0], [405.04, 159.0], [363.66, 182.89], [355.0, 177.89]], "depth": 563.89, "tone": "top"}, {"role": "furnFace", "pts": [[780.02, 313.5], [650.12, 238.5], [650.12, 213.5], [780.02, 288.5]], "depth": 564.0, "tone": "mid", "mat": "soft"}, {"role": "wallFace", "pts": [[485.58, 270.5], [455.85, 253.33], [455.85, 193.33], [485.58, 210.5]], "depth": 570.83, "tone": "mid"}, {"role": "wallFace", "pts": [[502.9, 265.5], [494.24, 260.5], [494.24, 200.5], [502.9, 205.5]], "depth": 573.0, "tone": "mid"}, {"role": "wallFace", "pts": [[494.24, 265.5], [485.58, 270.5], [485.58, 210.5], [494.24, 205.5]], "depth": 583.0, "tone": "dark"}, {"role": "wallFace", "pts": [[994.29, 257.79], [952.23, 282.07], [952.23, 222.07], [994.29, 197.79]], "depth": 586.86, "tone": "dark"}, {"role": "wallTop", "pts": [[464.51, 188.33], [455.85, 193.33], [426.11, 176.17], [434.77, 171.17]], "depth": 591.5, "tone": "top"}, {"role": "wallTop", "pts": [[1027.69, 168.5], [1036.35, 173.5], [994.29, 197.79], [985.63, 192.79]], "depth": 593.29, "tone": "top"}, {"role": "wallFace", "pts": [[502.9, 265.5], [466.09, 286.75], [466.09, 226.75], [502.9, 205.5]], "depth": 599.25, "tone": "dark"}, {"role": "wallFace", "pts": [[534.18, 288.56], [494.24, 265.5], [494.24, 205.5], [534.18, 228.56]], "depth": 601.06, "tone": "mid"}, {"role": "wallFace", "pts": [[322.29, 266.78], [280.91, 290.67], [280.91, 230.67], [322.29, 206.78]], "depth": 604.44, "tone": "dark"}, {"role": "wallTop", "pts": [[536.3, 176.21], [544.96, 181.21], [502.9, 205.5], [494.24, 200.5]], "depth": 608.71, "tone": "top"}, {"role": "wallTop", "pts": [[355.0, 177.89], [363.66, 182.89], [322.29, 206.78], [313.63, 201.78]], "depth": 611.67, "tone": "top"}, {"role": "wallTop", "pts": [[494.24, 205.5], [485.58, 210.5], [455.85, 193.33], [464.51, 188.33]], "depth": 625.83, "tone": "top"}, {"role": "wallFace", "pts": [[952.23, 282.07], [910.17, 306.36], [910.17, 246.36], [952.23, 222.07]], "depth": 635.43, "tone": "dark"}, {"role": "ao", "pts": [[920.31, 291.5], [941.09, 303.5], [934.17, 307.5], [913.38, 295.5]], "depth": 636.5, "opacity": 0.14}, {"role": "wallFace", "pts": [[466.09, 286.75], [429.29, 308.0], [429.29, 248.0], [466.09, 226.75]], "depth": 641.75, "tone": "dark"}, {"role": "wallTop", "pts": [[985.63, 192.79], [994.29, 197.79], [952.23, 222.07], [943.57, 217.07]], "depth": 641.86, "tone": "top"}, {"role": "wallFace", "pts": [[937.63, 301.5], [923.77, 293.5], [923.77, 233.5], [937.63, 241.5]], "depth": 642.0, "tone": "mid"}, {"role": "wallFace", "pts": [[946.29, 296.5], [937.63, 301.5], [937.63, 241.5], [946.29, 236.5]], "depth": 645.0, "tone": "dark"}, {"role": "wallFace", "pts": [[574.13, 311.62], [534.18, 288.56], [534.18, 228.56], [574.13, 251.62]], "depth": 647.19, "tone": "mid"}, {"role": "wallFace", "pts": [[280.91, 290.67], [239.54, 314.56], [239.54, 254.56], [280.91, 230.67]], "depth": 652.22, "tone": "dark"}, {"role": "wallTop", "pts": [[494.24, 200.5], [502.9, 205.5], [466.09, 226.75], [457.43, 221.75]], "depth": 654.25, "tone": "top"}, {"role": "wallTop", "pts": [[494.24, 205.5], [502.9, 200.5], [542.84, 223.56], [534.18, 228.56]], "depth": 656.06, "tone": "top"}, {"role": "furnFace", "pts": [[664.84, 353.0], [508.96, 263.0], [508.96, 208.0], [664.84, 298.0]], "depth": 658.0, "tone": "mid", "mat": "wood"}, {"role": "wallTop", "pts": [[313.63, 201.78], [322.29, 206.78], [280.91, 230.67], [272.25, 225.67]], "depth": 659.44, "tone": "top"}, {"role": "ao", "pts": [[490.77, 263.5], [657.48, 359.75], [650.55, 363.75], [483.85, 267.5]], "depth": 664.75, "opacity": 0.14}, {"role": "ao", "pts": [[499.43, 258.5], [666.14, 354.75], [673.07, 350.75], [506.36, 254.5]], "depth": 664.75, "opacity": 0.14}, {"role": "wallFace", "pts": [[971.19, 320.88], [937.63, 301.5], [937.63, 241.5], [971.19, 260.88]], "depth": 669.38, "tone": "mid"}, {"role": "ao", "pts": [[1031.16, 226.5], [729.79, 400.5], [722.86, 396.5], [1024.23, 222.5]], "depth": 678.5, "opacity": 0.14}, {"role": "ao", "pts": [[1039.82, 231.5], [738.45, 405.5], [745.38, 409.5], [1046.75, 235.5]], "depth": 678.5, "opacity": 0.14}, {"role": "furnTop", "pts": [[560.92, 178.0], [716.8, 268.0], [664.84, 298.0], [508.96, 208.0]], "depth": 683.0, "tone": "top", "mat": "wood"}, {"role": "wallFace", "pts": [[910.17, 306.36], [868.1, 330.64], [868.1, 270.64], [910.17, 246.36]], "depth": 684.0, "tone": "dark"}, {"role": "wallFace", "pts": [[429.29, 308.0], [392.48, 329.25], [392.48, 269.25], [429.29, 248.0]], "depth": 684.25, "tone": "dark"}, {"role": "wallTop", "pts": [[943.57, 217.07], [952.23, 222.07], [910.17, 246.36], [901.51, 241.36]], "depth": 690.43, "tone": "top"}, {"role": "wallFace", "pts": [[614.07, 334.69], [574.13, 311.62], [574.13, 251.62], [614.07, 274.69]], "depth": 693.31, "tone": "mid"}, {"role": "ao", "pts": [[408.5, 217.0], [29.2, 436.0], [36.12, 440.0], [415.43, 221.0]], "depth": 694.5, "opacity": 0.14}, {"role": "wallTop", "pts": [[457.43, 221.75], [466.09, 226.75], [429.29, 248.0], [420.63, 243.0]], "depth": 696.75, "tone": "top"}, {"role": "wallTop", "pts": [[923.77, 233.5], [932.43, 228.5], [946.29, 236.5], [937.63, 241.5]], "depth": 697.0, "tone": "top"}, {"role": "wallFace", "pts": [[239.54, 314.56], [198.16, 338.44], [198.16, 278.44], [239.54, 254.56]], "depth": 700.0, "tone": "dark"}, {"role": "ao", "pts": [[497.7, 258.5], [269.94, 390.0], [263.02, 386.0], [490.77, 254.5]], "depth": 700.0, "opacity": 0.14}, {"role": "ao", "pts": [[506.36, 263.5], [278.6, 395.0], [285.53, 399.0], [513.29, 267.5]], "depth": 700.0, "opacity": 0.14}, {"role": "wallTop", "pts": [[534.18, 228.56], [542.84, 223.56], [582.79, 246.62], [574.13, 251.62]], "depth": 702.19, "tone": "top"}, {"role": "doorFace", "pts": [[499.51, 327.81], [498.66, 330.59], [498.66, 271.59], [499.51, 268.81]], "depth": 704.4, "tone": "dark", "mat": "door", "door": "bath"}, {"role": "wallTop", "pts": [[272.25, 225.67], [280.91, 230.67], [239.54, 254.56], [230.88, 249.56]], "depth": 707.22, "tone": "top"}, {"role": "furnFace", "pts": [[334.03, 318.0], [282.07, 348.0], [282.07, 293.0], [334.03, 263.0]], "depth": 708.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[1004.74, 340.25], [971.19, 320.88], [971.19, 260.88], [1004.74, 280.25]], "depth": 708.12, "tone": "mid"}, {"role": "furnFace", "pts": [[282.07, 348.0], [234.44, 320.5], [234.44, 265.5], [282.07, 293.0]], "depth": 710.5, "tone": "mid", "mat": "wood"}, {"role": "doorFace", "pts": [[595.98, 337.61], [499.51, 327.81], [499.51, 268.81], [595.98, 278.61]], "depth": 711.41, "tone": "mid", "mat": "door", "door": "bath"}, {"role": "ao", "pts": [[612.01, 324.5], [587.77, 338.5], [580.84, 334.5], [605.09, 320.5]], "depth": 714.5, "opacity": 0.14}, {"role": "ao", "pts": [[620.67, 329.5], [596.43, 343.5], [603.35, 347.5], [627.6, 333.5]], "depth": 714.5, "opacity": 0.14}, {"role": "furnFace", "pts": [[576.51, 314.0], [498.57, 359.0], [498.57, 304.0], [576.51, 259.0]], "depth": 715.0, "tone": "dark", "mat": "hard"}, {"role": "furnFace", "pts": [[498.57, 359.0], [420.63, 314.0], [420.63, 259.0], [498.57, 304.0]], "depth": 715.0, "tone": "mid", "mat": "hard"}, {"role": "furnFace", "pts": [[716.8, 323.0], [664.84, 353.0], [664.84, 298.0], [716.8, 268.0]], "depth": 718.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[617.21, 331.5], [599.89, 341.5], [599.89, 281.5], [617.21, 271.5]], "depth": 720.0, "tone": "dark"}, {"role": "ao", "pts": [[1075.32, 381.0], [934.17, 299.5], [927.24, 303.5], [1068.4, 385.0]], "depth": 722.0, "opacity": 0.14}, {"role": "doorFace", "pts": [[752.38, 338.79], [747.56, 338.31], [747.56, 279.31], [752.38, 279.79]], "depth": 723.1, "tone": "mid", "mat": "door", "door": "bedroom"}, {"role": "wallTop", "pts": [[979.85, 255.88], [971.19, 260.88], [937.63, 241.5], [946.29, 236.5]], "depth": 724.38, "tone": "top"}, {"role": "wallFace", "pts": [[599.89, 341.5], [591.23, 336.5], [591.23, 276.5], [599.89, 281.5]], "depth": 725.0, "tone": "mid"}, {"role": "furnTop", "pts": [[498.57, 214.0], [576.51, 259.0], [498.57, 304.0], [420.63, 259.0]], "depth": 725.0, "tone": "top", "mat": "hard"}, {"role": "wallFace", "pts": [[392.48, 329.25], [355.68, 350.5], [355.68, 290.5], [392.48, 269.25]], "depth": 726.75, "tone": "dark"}, {"role": "ao", "pts": [[180.75, 339.5], [193.74, 347.0], [186.81, 351.0], [173.82, 343.5]], "depth": 728.0, "opacity": 0.14}, {"role": "ao", "pts": [[189.41, 334.5], [202.4, 342.0], [209.32, 338.0], [196.33, 330.5]], "depth": 728.0, "opacity": 0.14}, {"role": "furnFace", "pts": [[430.15, 368.5], [378.19, 338.5], [378.19, 301.0], [430.15, 331.0]], "depth": 731.5, "tone": "mid", "mat": "wood"}, {"role": "wallFace", "pts": [[198.93, 340.0], [190.27, 345.0], [190.27, 285.0], [198.93, 280.0]], "depth": 732.0, "tone": "dark"}, {"role": "wallFace", "pts": [[868.1, 330.64], [826.04, 354.93], [826.04, 294.93], [868.1, 270.64]], "depth": 732.57, "tone": "dark"}, {"role": "wallFace", "pts": [[190.27, 345.0], [184.21, 341.5], [184.21, 281.5], [190.27, 285.0]], "depth": 733.5, "tone": "mid"}, {"role": "furnTop", "pts": [[286.4, 235.5], [334.03, 263.0], [282.07, 293.0], [234.44, 265.5]], "depth": 735.5, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[901.51, 241.36], [910.17, 246.36], [868.1, 270.64], [859.44, 265.64]], "depth": 739.0, "tone": "top"}, {"role": "wallTop", "pts": [[420.63, 243.0], [429.29, 248.0], [392.48, 269.25], [383.82, 264.25]], "depth": 739.25, "tone": "top"}, {"role": "wallFace", "pts": [[654.02, 357.75], [614.07, 334.69], [614.07, 274.69], [654.02, 297.75]], "depth": 739.44, "tone": "mid"}, {"role": "furnFace", "pts": [[464.79, 348.5], [430.15, 368.5], [430.15, 331.0], [464.79, 311.0]], "depth": 741.5, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[1038.3, 359.62], [1004.74, 340.25], [1004.74, 280.25], [1038.3, 299.62]], "depth": 746.88, "tone": "mid"}, {"role": "wallFace", "pts": [[198.16, 338.44], [156.79, 362.33], [156.79, 302.33], [198.16, 278.44]], "depth": 747.78, "tone": "dark"}, {"role": "wallTop", "pts": [[574.13, 251.62], [582.79, 246.62], [622.73, 269.69], [614.07, 274.69]], "depth": 748.31, "tone": "top"}, {"role": "furnTop", "pts": [[412.83, 281.0], [464.79, 311.0], [430.15, 331.0], [378.19, 301.0]], "depth": 749.0, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[230.88, 249.56], [239.54, 254.56], [198.16, 278.44], [189.5, 273.44]], "depth": 755.0, "tone": "top"}, {"role": "wallFace", "pts": [[662.68, 352.75], [654.02, 357.75], [654.02, 297.75], [662.68, 292.75]], "depth": 757.5, "tone": "dark"}, {"role": "wallTop", "pts": [[1013.4, 275.25], [1004.74, 280.25], [971.19, 260.88], [979.85, 255.88]], "depth": 763.12, "tone": "top"}, {"role": "wallFace", "pts": [[355.68, 350.5], [318.87, 371.75], [318.87, 311.75], [355.68, 290.5]], "depth": 769.25, "tone": "dark"}, {"role": "doorTop", "pts": [[595.98, 278.61], [499.51, 268.81], [498.66, 271.59], [595.14, 281.39]], "depth": 773.2, "tone": "top", "mat": "door", "door": "bath"}, {"role": "wallTop", "pts": [[608.55, 266.5], [617.21, 271.5], [599.89, 281.5], [591.23, 276.5]], "depth": 775.0, "tone": "top"}, {"role": "wallFace", "pts": [[826.04, 354.93], [783.98, 379.21], [783.98, 319.21], [826.04, 294.93]], "depth": 781.14, "tone": "dark"}, {"role": "wallTop", "pts": [[383.82, 264.25], [392.48, 269.25], [355.68, 290.5], [347.02, 285.5]], "depth": 781.75, "tone": "top"}, {"role": "doorFace", "pts": [[747.56, 338.31], [729.54, 397.51], [729.54, 338.51], [747.56, 279.31]], "depth": 781.81, "tone": "dark", "mat": "door", "door": "bedroom"}, {"role": "wallFace", "pts": [[1071.86, 379.0], [1038.3, 359.62], [1038.3, 299.62], [1071.86, 319.0]], "depth": 785.62, "tone": "mid"}, {"role": "wallTop", "pts": [[859.44, 265.64], [868.1, 270.64], [826.04, 294.93], [817.38, 289.93]], "depth": 787.57, "tone": "top"}, {"role": "wallTop", "pts": [[184.21, 281.5], [192.87, 276.5], [198.93, 280.0], [190.27, 285.0]], "depth": 788.5, "tone": "top"}, {"role": "wallTop", "pts": [[614.07, 274.69], [622.73, 269.69], [662.68, 292.75], [654.02, 297.75]], "depth": 794.44, "tone": "top"}, {"role": "wallFace", "pts": [[156.79, 362.33], [115.41, 386.22], [115.41, 326.22], [156.79, 302.33]], "depth": 795.56, "tone": "dark"}, {"role": "wallFace", "pts": [[1080.52, 374.0], [1071.86, 379.0], [1071.86, 319.0], [1080.52, 314.0]], "depth": 800.0, "tone": "dark"}, {"role": "furnFace", "pts": [[1000.85, 407.0], [947.16, 376.0], [947.16, 346.0], [1000.85, 377.0]], "depth": 800.0, "tone": "mid", "mat": "wood"}, {"role": "wallTop", "pts": [[1046.96, 294.62], [1038.3, 299.62], [1004.74, 280.25], [1013.4, 275.25]], "depth": 801.88, "tone": "top"}, {"role": "wallTop", "pts": [[189.5, 273.44], [198.16, 278.44], [156.79, 302.33], [148.13, 297.33]], "depth": 802.78, "tone": "top"}, {"role": "furnTop", "pts": [[993.92, 319.0], [1047.61, 350.0], [1000.85, 377.0], [947.16, 346.0]], "depth": 803.0, "tone": "top", "mat": "wood"}, {"role": "furnFace", "pts": [[1047.61, 380.0], [1000.85, 407.0], [1000.85, 377.0], [1047.61, 350.0]], "depth": 804.0, "tone": "dark", "mat": "wood"}, {"role": "furnFace", "pts": [[395.51, 373.5], [347.88, 401.0], [347.88, 358.5], [395.51, 331.0]], "depth": 804.0, "tone": "dark", "mat": "wood"}, {"role": "furnFace", "pts": [[347.88, 401.0], [308.91, 378.5], [308.91, 336.0], [347.88, 358.5]], "depth": 809.0, "tone": "mid", "mat": "wood"}, {"role": "wallFace", "pts": [[318.87, 371.75], [282.07, 393.0], [282.07, 333.0], [318.87, 311.75]], "depth": 811.75, "tone": "dark"}, {"role": "furnTop", "pts": [[356.54, 308.5], [395.51, 331.0], [347.88, 358.5], [308.91, 336.0]], "depth": 824.0, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[347.02, 285.5], [355.68, 290.5], [318.87, 311.75], [310.21, 306.75]], "depth": 824.25, "tone": "top"}, {"role": "wallFace", "pts": [[282.07, 393.0], [273.41, 388.0], [273.41, 328.0], [282.07, 333.0]], "depth": 828.0, "tone": "mid"}, {"role": "wallFace", "pts": [[1080.52, 379.0], [1039.69, 402.57], [1039.69, 342.57], [1080.52, 319.0]], "depth": 828.57, "tone": "dark"}, {"role": "wallFace", "pts": [[783.98, 379.21], [741.91, 403.5], [741.91, 343.5], [783.98, 319.21]], "depth": 829.71, "tone": "dark"}, {"role": "wallFace", "pts": [[530.61, 381.5], [487.31, 406.5], [487.31, 346.5], [530.61, 321.5]], "depth": 835.0, "tone": "dark"}, {"role": "wallTop", "pts": [[817.38, 289.93], [826.04, 294.93], [783.98, 319.21], [775.32, 314.21]], "depth": 836.14, "tone": "top"}, {"role": "wallTop", "pts": [[1080.52, 314.0], [1071.86, 319.0], [1038.3, 299.62], [1046.96, 294.62]], "depth": 840.62, "tone": "top"}, {"role": "doorTop", "pts": [[734.37, 338.99], [752.38, 279.79], [747.56, 279.31], [729.54, 338.51]], "depth": 841.3, "tone": "top", "mat": "door", "door": "bedroom"}, {"role": "wallFace", "pts": [[115.41, 386.22], [74.04, 410.11], [74.04, 350.11], [115.41, 326.22]], "depth": 843.33, "tone": "dark"}, {"role": "ao", "pts": [[724.16, 398.25], [736.72, 405.5], [729.79, 409.5], [717.23, 402.25]], "depth": 845.25, "opacity": 0.14}, {"role": "ao", "pts": [[732.82, 393.25], [745.38, 400.5], [752.31, 396.5], [739.75, 389.25]], "depth": 845.25, "opacity": 0.14}, {"role": "furnFace", "pts": [[211.06, 387.0], [138.31, 429.0], [138.31, 386.5], [211.06, 344.5]], "depth": 845.5, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[741.91, 403.5], [733.25, 398.5], [733.25, 338.5], [741.91, 343.5]], "depth": 849.0, "tone": "mid"}, {"role": "wallFace", "pts": [[741.91, 398.5], [733.25, 403.5], [733.25, 343.5], [741.91, 338.5]], "depth": 849.0, "tone": "dark"}, {"role": "wallFace", "pts": [[308.05, 413.0], [268.21, 390.0], [268.21, 330.0], [308.05, 353.0]], "depth": 850.0, "tone": "mid"}, {"role": "wallTop", "pts": [[148.13, 297.33], [156.79, 302.33], [115.41, 326.22], [106.75, 321.22]], "depth": 850.56, "tone": "top"}, {"role": "wallFace", "pts": [[733.25, 403.5], [727.62, 400.25], [727.62, 340.25], [733.25, 343.5]], "depth": 850.75, "tone": "mid"}, {"role": "ao", "pts": [[729.79, 401.5], [741.91, 408.5], [734.99, 412.5], [722.86, 405.5]], "depth": 851.5, "opacity": 0.14}, {"role": "ao", "pts": [[738.45, 396.5], [750.57, 403.5], [757.5, 399.5], [745.38, 392.5]], "depth": 851.5, "opacity": 0.14}, {"role": "furnTop", "pts": [[164.29, 318.5], [203.26, 341.0], [168.62, 361.0], [129.65, 338.5]], "depth": 852.5, "tone": "top", "mat": "hard"}, {"role": "furnTop", "pts": [[396.38, 376.5], [431.02, 396.5], [392.05, 419.0], [357.41, 399.0]], "depth": 852.5, "tone": "top", "mat": "wood"}, {"role": "wallFace", "pts": [[747.11, 401.5], [738.45, 406.5], [738.45, 346.5], [747.11, 341.5]], "depth": 855.0, "tone": "dark"}, {"role": "furnFace", "pts": [[431.02, 414.0], [392.05, 436.5], [392.05, 419.0], [431.02, 396.5]], "depth": 855.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[738.45, 406.5], [733.25, 403.5], [733.25, 343.5], [738.45, 346.5]], "depth": 857.0, "tone": "mid"}, {"role": "furnFace", "pts": [[392.05, 436.5], [357.41, 416.5], [357.41, 399.0], [392.05, 419.0]], "depth": 857.5, "tone": "mid", "mat": "wood"}, {"role": "furnFace", "pts": [[138.31, 429.0], [90.68, 401.5], [90.68, 359.0], [138.31, 386.5]], "depth": 860.0, "tone": "mid", "mat": "wood"}, {"role": "furnTop", "pts": [[163.43, 317.0], [211.06, 344.5], [138.31, 386.5], [90.68, 359.0]], "depth": 860.5, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[310.21, 306.75], [318.87, 311.75], [282.07, 333.0], [273.41, 328.0]], "depth": 866.75, "tone": "top"}, {"role": "furnFace", "pts": [[168.62, 365.0], [129.65, 342.5], [129.65, 338.5], [168.62, 361.0]], "depth": 868.5, "tone": "mid", "mat": "hard"}, {"role": "furnFace", "pts": [[203.26, 345.0], [168.62, 365.0], [168.62, 361.0], [203.26, 341.0]], "depth": 871.0, "tone": "dark", "mat": "hard"}, {"role": "wallFace", "pts": [[1039.69, 402.57], [998.87, 426.14], [998.87, 366.14], [1039.69, 342.57]], "depth": 875.71, "tone": "dark"}, {"role": "wallTop", "pts": [[1071.86, 314.0], [1080.52, 319.0], [1039.69, 342.57], [1031.03, 337.57]], "depth": 883.57, "tone": "top"}, {"role": "wallTop", "pts": [[775.32, 314.21], [783.98, 319.21], [741.91, 343.5], [733.25, 338.5]], "depth": 884.71, "tone": "top"}, {"role": "wallFace", "pts": [[487.31, 406.5], [444.01, 431.5], [444.01, 371.5], [487.31, 346.5]], "depth": 885.0, "tone": "dark"}, {"role": "wallTop", "pts": [[521.95, 316.5], [530.61, 321.5], [487.31, 346.5], [478.65, 341.5]], "depth": 890.0, "tone": "top"}, {"role": "ao", "pts": [[264.75, 388.0], [391.18, 461.0], [384.26, 465.0], [257.82, 392.0]], "depth": 890.5, "opacity": 0.14}, {"role": "ao", "pts": [[273.41, 383.0], [399.84, 456.0], [406.77, 452.0], [280.34, 379.0]], "depth": 890.5, "opacity": 0.14}, {"role": "wallFace", "pts": [[74.04, 410.11], [32.66, 434.0], [32.66, 374.0], [74.04, 350.11]], "depth": 891.11, "tone": "dark"}, {"role": "wallFace", "pts": [[347.88, 436.0], [308.05, 413.0], [308.05, 353.0], [347.88, 376.0]], "depth": 896.0, "tone": "mid"}, {"role": "doorFace", "pts": [[820.29, 447.25], [744.08, 403.25], [744.08, 344.25], [820.29, 388.25]], "depth": 896.5, "tone": "mid", "mat": "door", "door": "balcony"}, {"role": "wallTop", "pts": [[106.75, 321.22], [115.41, 326.22], [74.04, 350.11], [65.38, 345.11]], "depth": 898.33, "tone": "top"}, {"role": "wallTop", "pts": [[268.21, 330.0], [276.87, 325.0], [316.71, 348.0], [308.05, 353.0]], "depth": 905.0, "tone": "top"}, {"role": "wallTop", "pts": [[727.62, 340.25], [736.29, 335.25], [741.91, 338.5], [733.25, 343.5]], "depth": 905.75, "tone": "top"}, {"role": "wallFace", "pts": [[32.66, 434.0], [24.0, 429.0], [24.0, 369.0], [32.66, 374.0]], "depth": 910.0, "tone": "mid"}, {"role": "wallTop", "pts": [[733.25, 343.5], [741.91, 338.5], [747.11, 341.5], [738.45, 346.5]], "depth": 912.0, "tone": "top"}, {"role": "wallFace", "pts": [[998.87, 426.14], [958.04, 449.71], [958.04, 389.71], [998.87, 366.14]], "depth": 922.86, "tone": "dark"}, {"role": "ao", "pts": [[525.41, 374.5], [301.99, 503.5], [295.06, 499.5], [518.49, 370.5]], "depth": 929.5, "opacity": 0.14}, {"role": "ao", "pts": [[534.07, 379.5], [310.65, 508.5], [317.57, 512.5], [541.0, 383.5]], "depth": 929.5, "opacity": 0.14}, {"role": "furnFace", "pts": [[359.14, 468.5], [334.89, 454.5], [334.89, 434.5], [359.14, 448.5]], "depth": 930.0, "tone": "mid", "mat": "wood"}, {"role": "wallTop", "pts": [[1031.03, 337.57], [1039.69, 342.57], [998.87, 366.14], [990.21, 361.14]], "depth": 930.71, "tone": "top"}, {"role": "furnFace", "pts": [[379.93, 456.5], [359.14, 468.5], [359.14, 448.5], [379.93, 436.5]], "depth": 932.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[444.01, 431.5], [400.71, 456.5], [400.71, 396.5], [444.01, 371.5]], "depth": 935.0, "tone": "dark"}, {"role": "wallFace", "pts": [[60.81, 455.25], [24.0, 434.0], [24.0, 374.0], [60.81, 395.25]], "depth": 936.25, "tone": "mid"}, {"role": "furnTop", "pts": [[355.68, 422.5], [379.93, 436.5], [359.14, 448.5], [334.89, 434.5]], "depth": 938.0, "tone": "top", "mat": "wood"}, {"role": "doorFace", "pts": [[823.75, 445.25], [820.29, 447.25], [820.29, 388.25], [823.75, 386.25]], "depth": 938.5, "tone": "dark", "mat": "door", "door": "balcony"}, {"role": "wallTop", "pts": [[478.65, 341.5], [487.31, 346.5], [444.01, 371.5], [435.35, 366.5]], "depth": 940.0, "tone": "top"}, {"role": "wallFace", "pts": [[387.72, 459.0], [347.88, 436.0], [347.88, 376.0], [387.72, 399.0]], "depth": 942.0, "tone": "mid"}, {"role": "wallTop", "pts": [[65.38, 345.11], [74.04, 350.11], [32.66, 374.0], [24.0, 369.0]], "depth": 946.11, "tone": "top"}, {"role": "wallTop", "pts": [[308.05, 353.0], [316.71, 348.0], [356.54, 371.0], [347.88, 376.0]], "depth": 951.0, "tone": "top"}, {"role": "doorTop", "pts": [[747.54, 342.25], [823.75, 386.25], [820.29, 388.25], [744.08, 344.25]], "depth": 953.5, "tone": "top", "mat": "door", "door": "balcony"}, {"role": "wallFace", "pts": [[396.38, 454.0], [387.72, 459.0], [387.72, 399.0], [396.38, 394.0]], "depth": 960.0, "tone": "dark"}, {"role": "furnTop", "pts": [[97.61, 371.0], [153.9, 403.5], [114.93, 426.0], [58.64, 393.5]], "depth": 966.0, "tone": "top", "mat": "hard"}, {"role": "wallFace", "pts": [[958.04, 449.71], [917.22, 473.29], [917.22, 413.29], [958.04, 389.71]], "depth": 970.0, "tone": "dark"}, {"role": "doorFace", "pts": [[876.58, 486.75], [800.37, 442.75], [800.37, 383.75], [876.58, 427.75]], "depth": 975.5, "tone": "mid", "mat": "door", "door": "balcony"}, {"role": "wallTop", "pts": [[990.21, 361.14], [998.87, 366.14], [958.04, 389.71], [949.38, 384.71]], "depth": 977.86, "tone": "top"}, {"role": "wallFace", "pts": [[97.61, 476.5], [60.81, 455.25], [60.81, 395.25], [97.61, 416.5]], "depth": 978.75, "tone": "mid"}, {"role": "wallFace", "pts": [[400.71, 456.5], [357.41, 481.5], [357.41, 421.5], [400.71, 396.5]], "depth": 985.0, "tone": "dark"}, {"role": "furnFace", "pts": [[114.93, 429.0], [58.64, 396.5], [58.64, 393.5], [114.93, 426.0]], "depth": 985.5, "tone": "mid", "mat": "hard"}, {"role": "wallTop", "pts": [[435.35, 366.5], [444.01, 371.5], [400.71, 396.5], [392.05, 391.5]], "depth": 990.0, "tone": "top"}, {"role": "wallTop", "pts": [[24.0, 374.0], [32.66, 369.0], [69.46, 390.25], [60.81, 395.25]], "depth": 991.25, "tone": "top"}, {"role": "furnFace", "pts": [[153.9, 406.5], [114.93, 429.0], [114.93, 426.0], [153.9, 403.5]], "depth": 995.5, "tone": "dark", "mat": "hard"}, {"role": "wallTop", "pts": [[347.88, 376.0], [356.54, 371.0], [396.38, 394.0], [387.72, 399.0]], "depth": 997.0, "tone": "top"}, {"role": "furnFace", "pts": [[231.84, 543.0], [38.72, 431.5], [38.72, 389.0], [231.84, 500.5]], "depth": 1004.0, "tone": "mid", "mat": "wood"}, {"role": "furnTop", "pts": [[90.68, 359.0], [283.8, 470.5], [231.84, 500.5], [38.72, 389.0]], "depth": 1016.5, "tone": "top", "mat": "wood"}, {"role": "ao", "pts": [[873.55, 484.5], [884.8, 491.0], [877.88, 495.0], [866.62, 488.5]], "depth": 1017.0, "opacity": 0.14}, {"role": "ao", "pts": [[882.21, 479.5], [893.46, 486.0], [900.39, 482.0], [889.13, 475.5]], "depth": 1017.0, "opacity": 0.14}, {"role": "wallFace", "pts": [[917.22, 473.29], [876.39, 496.86], [876.39, 436.86], [917.22, 413.29]], "depth": 1017.14, "tone": "dark"}, {"role": "doorFace", "pts": [[880.04, 484.75], [876.58, 486.75], [876.58, 427.75], [880.04, 425.75]], "depth": 1017.5, "tone": "dark", "mat": "door", "door": "balcony"}, {"role": "wallFace", "pts": [[890.0, 484.0], [881.34, 489.0], [881.34, 429.0], [890.0, 424.0]], "depth": 1020.0, "tone": "dark"}, {"role": "wallFace", "pts": [[134.42, 497.75], [97.61, 476.5], [97.61, 416.5], [134.42, 437.75]], "depth": 1021.25, "tone": "mid"}, {"role": "wallFace", "pts": [[881.34, 489.0], [877.01, 486.5], [877.01, 426.5], [881.34, 429.0]], "depth": 1022.5, "tone": "mid"}, {"role": "doorFace", "pts": [[225.94, 488.05], [221.11, 488.55], [221.11, 429.55], [225.94, 429.05]], "depth": 1022.6, "tone": "dark", "mat": "door", "door": "kitchen"}, {"role": "wallTop", "pts": [[949.38, 384.71], [958.04, 389.71], [917.22, 413.29], [908.56, 408.29]], "depth": 1025.0, "tone": "top"}, {"role": "doorTop", "pts": [[803.83, 381.75], [880.04, 425.75], [876.58, 427.75], [800.37, 383.75]], "depth": 1032.5, "tone": "top", "mat": "door", "door": "balcony"}, {"role": "wallTop", "pts": [[60.81, 395.25], [69.46, 390.25], [106.27, 411.5], [97.61, 416.5]], "depth": 1033.75, "tone": "top"}, {"role": "wallFace", "pts": [[357.41, 481.5], [314.11, 506.5], [314.11, 446.5], [357.41, 421.5]], "depth": 1035.0, "tone": "dark"}, {"role": "ao", "pts": [[29.2, 427.0], [256.95, 558.5], [263.88, 554.5], [36.12, 423.0]], "depth": 1037.0, "opacity": 0.14}, {"role": "wallTop", "pts": [[392.05, 391.5], [400.71, 396.5], [357.41, 421.5], [348.75, 416.5]], "depth": 1040.0, "tone": "top"}, {"role": "furnFace", "pts": [[875.28, 486.5], [828.51, 513.5], [828.51, 458.5], [875.28, 431.5]], "depth": 1042.0, "tone": "dark", "mat": "wood"}, {"role": "furnFace", "pts": [[828.51, 513.5], [798.2, 496.0], [798.2, 441.0], [828.51, 458.5]], "depth": 1051.5, "tone": "mid", "mat": "wood"}, {"role": "wallFace", "pts": [[314.11, 506.5], [305.45, 501.5], [305.45, 441.5], [314.11, 446.5]], "depth": 1055.0, "tone": "mid"}, {"role": "wallFace", "pts": [[171.22, 519.0], [134.42, 497.75], [134.42, 437.75], [171.22, 459.0]], "depth": 1063.75, "tone": "mid"}, {"role": "wallFace", "pts": [[876.39, 496.86], [835.57, 520.43], [835.57, 460.43], [876.39, 436.86]], "depth": 1064.29, "tone": "dark"}, {"role": "wallTop", "pts": [[908.56, 408.29], [917.22, 413.29], [876.39, 436.86], [867.73, 431.86]], "depth": 1072.14, "tone": "top"}, {"role": "wallTop", "pts": [[97.61, 416.5], [106.27, 411.5], [143.07, 432.75], [134.42, 437.75]], "depth": 1076.25, "tone": "top"}, {"role": "wallTop", "pts": [[877.01, 426.5], [885.67, 421.5], [890.0, 424.0], [881.34, 429.0]], "depth": 1077.5, "tone": "top"}, {"role": "doorFace", "pts": [[242.91, 543.75], [225.94, 488.05], [225.94, 429.05], [242.91, 484.75]], "depth": 1077.81, "tone": "mid", "mat": "door", "door": "kitchen"}, {"role": "furnTop", "pts": [[844.97, 414.0], [875.28, 431.5], [828.51, 458.5], [798.2, 441.0]], "depth": 1079.5, "tone": "top", "mat": "wood"}, {"role": "furnFace", "pts": [[283.8, 513.0], [231.84, 543.0], [231.84, 500.5], [283.8, 470.5]], "depth": 1085.5, "tone": "dark", "mat": "wood"}, {"role": "wallTop", "pts": [[348.75, 416.5], [357.41, 421.5], [314.11, 446.5], [305.45, 441.5]], "depth": 1090.0, "tone": "top"}, {"role": "wallFace", "pts": [[208.03, 540.25], [171.22, 519.0], [171.22, 459.0], [208.03, 480.25]], "depth": 1106.25, "tone": "mid"}, {"role": "wallFace", "pts": [[835.57, 520.43], [794.74, 544.0], [794.74, 484.0], [835.57, 460.43]], "depth": 1111.43, "tone": "dark"}, {"role": "wallTop", "pts": [[134.42, 437.75], [143.07, 432.75], [179.88, 454.0], [171.22, 459.0]], "depth": 1118.75, "tone": "top"}, {"role": "wallTop", "pts": [[867.73, 431.86], [876.39, 436.86], [835.57, 460.43], [826.91, 455.43]], "depth": 1119.29, "tone": "top"}, {"role": "doorFace", "pts": [[348.65, 541.6], [343.83, 541.1], [343.83, 482.1], [348.65, 482.6]], "depth": 1128.7, "tone": "mid", "mat": "door", "door": "entry"}, {"role": "ao", "pts": [[1075.32, 372.0], [496.84, 706.0], [489.91, 702.0], [1068.4, 368.0]], "depth": 1129.5, "opacity": 0.14}, {"role": "doorTop", "pts": [[242.91, 484.75], [225.94, 429.05], [221.11, 429.55], [238.09, 485.25]], "depth": 1137.3, "tone": "top", "mat": "door", "door": "kitchen"}, {"role": "ao", "pts": [[239.63, 539.5], [224.05, 548.5], [217.12, 544.5], [232.71, 535.5]], "depth": 1139.5, "opacity": 0.14}, {"role": "ao", "pts": [[248.29, 544.5], [232.71, 553.5], [239.63, 557.5], [255.22, 548.5]], "depth": 1139.5, "opacity": 0.14}, {"role": "wallFace", "pts": [[244.83, 546.5], [236.17, 551.5], [236.17, 491.5], [244.83, 486.5]], "depth": 1145.0, "tone": "dark"}, {"role": "wallFace", "pts": [[236.17, 551.5], [227.51, 546.5], [227.51, 486.5], [236.17, 491.5]], "depth": 1145.0, "tone": "mid"}, {"role": "wallFace", "pts": [[244.83, 561.5], [208.03, 540.25], [208.03, 480.25], [244.83, 501.5]], "depth": 1148.75, "tone": "mid"}, {"role": "furnTop", "pts": [[745.38, 429.0], [823.32, 474.0], [664.84, 565.5], [586.9, 520.5]], "depth": 1151.5, "tone": "top", "mat": "soft"}, {"role": "furnFace", "pts": [[823.32, 516.5], [664.84, 608.0], [664.84, 565.5], [823.32, 474.0]], "depth": 1154.0, "tone": "dark", "mat": "soft"}, {"role": "wallFace", "pts": [[794.74, 544.0], [753.91, 567.57], [753.91, 507.57], [794.74, 484.0]], "depth": 1158.57, "tone": "dark"}, {"role": "wallTop", "pts": [[171.22, 459.0], [179.88, 454.0], [216.68, 475.25], [208.03, 480.25]], "depth": 1161.25, "tone": "top"}, {"role": "wallFace", "pts": [[253.49, 556.5], [244.83, 561.5], [244.83, 501.5], [253.49, 496.5]], "depth": 1165.0, "tone": "dark"}, {"role": "wallTop", "pts": [[826.91, 455.43], [835.57, 460.43], [794.74, 484.0], [786.08, 479.0]], "depth": 1166.43, "tone": "top"}, {"role": "doorFace", "pts": [[343.83, 541.1], [324.69, 603.75], [324.69, 544.75], [343.83, 482.1]], "depth": 1190.86, "tone": "dark", "mat": "door", "door": "entry"}, {"role": "wallTop", "pts": [[236.17, 481.5], [244.83, 486.5], [236.17, 491.5], [227.51, 486.5]], "depth": 1200.0, "tone": "top"}, {"role": "furnFace", "pts": [[664.84, 608.0], [586.9, 563.0], [586.9, 520.5], [664.84, 565.5]], "depth": 1200.5, "tone": "mid", "mat": "soft"}, {"role": "wallTop", "pts": [[208.03, 480.25], [216.68, 475.25], [253.49, 496.5], [244.83, 501.5]], "depth": 1203.75, "tone": "top"}, {"role": "wallFace", "pts": [[753.91, 567.57], [713.09, 591.14], [713.09, 531.14], [753.91, 507.57]], "depth": 1205.71, "tone": "dark"}, {"role": "wallTop", "pts": [[786.08, 479.0], [794.74, 484.0], [753.91, 507.57], [745.25, 502.57]], "depth": 1213.57, "tone": "top"}, {"role": "furnFace", "pts": [[569.58, 594.0], [513.29, 626.5], [513.29, 584.0], [569.58, 551.5]], "depth": 1250.0, "tone": "dark", "mat": "wood"}, {"role": "furnFace", "pts": [[513.29, 626.5], [457.0, 594.0], [457.0, 551.5], [513.29, 584.0]], "depth": 1250.0, "tone": "mid", "mat": "wood"}, {"role": "doorTop", "pts": [[329.51, 545.25], [348.65, 482.6], [343.83, 482.1], [324.69, 544.75]], "depth": 1250.35, "tone": "top", "mat": "door", "door": "entry"}, {"role": "wallFace", "pts": [[713.09, 591.14], [672.26, 614.71], [672.26, 554.71], [713.09, 531.14]], "depth": 1252.86, "tone": "dark"}, {"role": "furnTop", "pts": [[513.29, 519.0], [569.58, 551.5], [513.29, 584.0], [457.0, 551.5]], "depth": 1260.0, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[745.25, 502.57], [753.91, 507.57], [713.09, 531.14], [704.43, 526.14]], "depth": 1260.71, "tone": "top"}, {"role": "wallFace", "pts": [[358.28, 627.0], [322.77, 606.5], [322.77, 546.5], [358.28, 567.0]], "depth": 1280.5, "tone": "mid"}, {"role": "wallFace", "pts": [[672.26, 614.71], [631.44, 638.29], [631.44, 578.29], [672.26, 554.71]], "depth": 1300.0, "tone": "dark"}, {"role": "wallTop", "pts": [[704.43, 526.14], [713.09, 531.14], [672.26, 554.71], [663.6, 549.71]], "depth": 1307.86, "tone": "top"}, {"role": "furnFace", "pts": [[654.45, 614.0], [539.27, 680.5], [539.27, 643.0], [654.45, 576.5]], "depth": 1319.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[393.78, 647.5], [358.28, 627.0], [358.28, 567.0], [393.78, 587.5]], "depth": 1321.5, "tone": "mid"}, {"role": "furnTop", "pts": [[598.16, 544.0], [654.45, 576.5], [539.27, 643.0], [482.98, 610.5]], "depth": 1324.0, "tone": "top", "mat": "wood"}, {"role": "wallTop", "pts": [[322.77, 546.5], [331.43, 541.5], [366.94, 562.0], [358.28, 567.0]], "depth": 1335.5, "tone": "top"}, {"role": "furnFace", "pts": [[471.72, 681.5], [367.8, 621.5], [367.8, 566.5], [471.72, 626.5]], "depth": 1345.0, "tone": "mid", "mat": "wood"}, {"role": "wallFace", "pts": [[631.44, 638.29], [590.61, 661.86], [590.61, 601.86], [631.44, 578.29]], "depth": 1347.14, "tone": "dark"}, {"role": "furnFace", "pts": [[539.27, 680.5], [482.98, 648.0], [482.98, 610.5], [539.27, 643.0]], "depth": 1353.0, "tone": "mid", "mat": "wood"}, {"role": "wallTop", "pts": [[663.6, 549.71], [672.26, 554.71], [631.44, 578.29], [622.78, 573.29]], "depth": 1355.0, "tone": "top"}, {"role": "ao", "pts": [[327.97, 599.5], [512.42, 706.0], [519.35, 702.0], [334.89, 595.5]], "depth": 1357.0, "opacity": 0.14}, {"role": "wallFace", "pts": [[429.29, 668.0], [393.78, 647.5], [393.78, 587.5], [429.29, 608.0]], "depth": 1362.5, "tone": "mid"}, {"role": "wallTop", "pts": [[358.28, 567.0], [366.94, 562.0], [402.44, 582.5], [393.78, 587.5]], "depth": 1376.5, "tone": "top"}, {"role": "furnTop", "pts": [[402.44, 546.5], [506.36, 606.5], [471.72, 626.5], [367.8, 566.5]], "depth": 1380.0, "tone": "top", "mat": "wood"}, {"role": "furnFace", "pts": [[506.36, 661.5], [471.72, 681.5], [471.72, 626.5], [506.36, 606.5]], "depth": 1385.0, "tone": "dark", "mat": "wood"}, {"role": "wallFace", "pts": [[590.61, 661.86], [549.79, 685.43], [549.79, 625.43], [590.61, 601.86]], "depth": 1394.29, "tone": "dark"}, {"role": "wallTop", "pts": [[622.78, 573.29], [631.44, 578.29], [590.61, 601.86], [581.95, 596.86]], "depth": 1402.14, "tone": "top"}, {"role": "wallFace", "pts": [[464.79, 688.5], [429.29, 668.0], [429.29, 608.0], [464.79, 628.5]], "depth": 1403.5, "tone": "mid"}, {"role": "wallTop", "pts": [[393.78, 587.5], [402.44, 582.5], [437.95, 603.0], [429.29, 608.0]], "depth": 1417.5, "tone": "top"}, {"role": "wallFace", "pts": [[549.79, 685.43], [508.96, 709.0], [508.96, 649.0], [549.79, 625.43]], "depth": 1441.43, "tone": "dark"}, {"role": "wallFace", "pts": [[500.3, 709.0], [464.79, 688.5], [464.79, 628.5], [500.3, 649.0]], "depth": 1444.5, "tone": "mid"}, {"role": "wallTop", "pts": [[581.95, 596.86], [590.61, 601.86], [549.79, 625.43], [541.13, 620.43]], "depth": 1449.29, "tone": "top"}, {"role": "wallTop", "pts": [[429.29, 608.0], [437.95, 603.0], [473.45, 623.5], [464.79, 628.5]], "depth": 1458.5, "tone": "top"}, {"role": "wallFace", "pts": [[508.96, 709.0], [500.3, 704.0], [500.3, 644.0], [508.96, 649.0]], "depth": 1460.0, "tone": "mid"}, {"role": "wallFace", "pts": [[508.96, 704.0], [500.3, 709.0], [500.3, 649.0], [508.96, 644.0]], "depth": 1460.0, "tone": "dark"}, {"role": "wallTop", "pts": [[541.13, 620.43], [549.79, 625.43], [508.96, 649.0], [500.3, 644.0]], "depth": 1496.43, "tone": "top"}, {"role": "wallTop", "pts": [[464.79, 628.5], [473.45, 623.5], [508.96, 644.0], [500.3, 649.0]], "depth": 1499.5, "tone": "top"}], "decals": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "kind": "light", "rank": 1, "area": "卧室", "x": 243.1, "y": 226.6, "sx": 778.72, "sy": 241.35, "z": 469.7}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "kind": "cover", "rank": 2, "area": "卧室", "x": 249.4, "y": 16.7, "sx": 965.95, "sy": 139.55, "z": 266.1}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "kind": "sensor", "rank": 3, "area": "卧室", "x": 111.4, "y": 325.5, "sx": 579.02, "sy": 224.95, "z": 436.9}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "kind": "switch", "rank": null, "area": "卧室", "x": 363.5, "y": 146.8, "sx": 952.09, "sy": 261.65, "z": 510.3}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "kind": "switch", "rank": null, "area": "卧室", "x": 116.2, "y": 116.3, "sx": 764.34, "sy": 122.75, "z": 232.5}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "kind": "switch", "rank": null, "area": "卧室", "x": 109.9, "y": 290.6, "sx": 607.94, "sy": 206.75, "z": 400.5}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "kind": "light", "rank": 12, "area": "大阳台", "x": 464.4, "y": 304.7, "sx": 902.73, "sy": 391.05, "z": 769.1}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "kind": "sensor", "rank": 14, "area": "大阳台", "x": 512.4, "y": 368.2, "sx": 889.31, "sy": 446.8, "z": 880.6}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "kind": "sensor", "rank": 15, "area": "大阳台", "x": 417.5, "y": 368.8, "sx": 806.6, "sy": 399.65, "z": 786.3}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "kind": "binary_sensor", "rank": null, "area": "大阳台", "x": 500.8, "y": 237.5, "sx": 992.45, "sy": 375.65, "z": 738.3}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "kind": "light", "rank": 4, "area": "客厅", "x": 394.9, "y": 539.8, "sx": 638.95, "sy": 473.85, "z": 934.7}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "kind": "media", "rank": 5, "area": "客厅", "x": 538.6, "y": 461.2, "sx": 831.46, "sy": 506.4, "z": 999.8}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "kind": "pet", "rank": 6, "area": "客厅", "x": 249.4, "y": 504.3, "sx": 543.69, "sy": 383.35, "z": 753.7}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "kind": "switch", "rank": null, "area": "客厅", "x": 250.1, "y": 541.1, "sx": 512.42, "sy": 402.1, "z": 791.2}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "kind": "switch", "rank": null, "area": "客厅", "x": 249.5, "y": 569.8, "sx": 487.05, "sy": 416.15, "z": 819.3}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "kind": "switch", "rank": null, "area": "客厅", "x": 537.6, "y": 505.4, "sx": 792.32, "sy": 528.0, "z": 1043.0}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "kind": "light", "rank": 7, "area": "书房", "x": 440, "y": 745.5, "sx": 499.87, "sy": 599.25, "z": 1185.5}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "kind": "light", "rank": 8, "area": "书房", "x": 513, "y": 689.6, "sx": 611.49, "sy": 607.8, "z": 1202.6}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "kind": "scene", "rank": 9, "area": "书房", "x": 513, "y": 747.2, "sx": 561.61, "sy": 636.6, "z": 1260.2}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "kind": "gateway", "rank": 10, "area": "书房", "x": 514.1, "y": 807, "sx": 510.78, "sy": 667.05, "z": 1321.1}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "kind": "switch", "rank": null, "area": "书房", "x": 537, "y": 777.4, "sx": 556.24, "sy": 663.7, "z": 1314.4}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "kind": "sensor", "rank": 18, "area": "玄关", "x": 310, "y": 828.2, "sx": 315.67, "sy": 575.6, "z": 1138.2}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "kind": "sensor", "rank": 19, "area": "玄关", "x": 260, "y": 827.1, "sx": 273.32, "sy": 550.05, "z": 1087.1}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "kind": "wall_switch", "rank": 20, "area": "浴室", "x": 169.1, "y": 545.9, "sx": 438.12, "sy": 364.0, "z": 715.0}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "kind": "binary_sensor", "rank": null, "area": "浴室", "x": 146, "y": 480.1, "sx": 475.1, "sy": 319.55, "z": 626.1}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "kind": "binary_sensor", "rank": null, "area": "浴室", "x": 124.1, "y": 479.6, "sx": 456.57, "sy": 308.35, "z": 603.7}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "kind": "light", "rank": 16, "area": "小阳台", "x": 50.1, "y": 550, "sx": 331.52, "sy": 306.55, "z": 600.1}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "kind": "sensor", "rank": 17, "area": "小阳台", "x": 77.1, "y": 653.4, "sx": 265.35, "sy": 371.75, "z": 730.5}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "kind": "light", "rank": 11, "area": "厨房", "x": 120, "y": 759.9, "sx": 210.28, "sy": 446.45, "z": 879.9}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "kind": "switch", "rank": null, "area": "厨房", "x": 172.4, "y": 825.2, "sx": 199.11, "sy": 505.3, "z": 997.6}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "kind": "switch", "rank": null, "area": "厨房", "x": 198.9, "y": 825.2, "sx": 222.05, "sy": 518.55, "z": 1024.1}, {"id": "climate_138a_thermostat", "name": "卧室·空调", "kind": "climate", "rank": 21, "area": "卧室", "x": 170.0, "y": 388.0, "sx": 575.64, "sy": 285.5, "z": 558.0}], "layers": [{"type": "floor", "name": "卧室", "points": [[1029.7, 230.56], [995.83, 211.27], [1056.46, 176.76], [902.43, 87.88], [842.66, 122.9], [793.83, 94.33], [500.91, 262.58], [738.38, 399.66]], "z": -9617.0, "shade": 1.0, "poly": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]]}, {"type": "floor", "name": "小阳台", "points": [[487.64, 268.53], [399.78, 217.81], [190.81, 338.47], [278.66, 389.19]], "z": -9406.0, "shade": 1.0, "poly": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]]}, {"type": "floor", "name": "浴室", "points": [[610.55, 329.43], [497.83, 264.35], [280.07, 390.07], [392.79, 455.15]], "z": -9293.5, "shade": 1.0, "poly": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]]}, {"type": "floor", "name": "大阳台", "points": [[1073.76, 376.68], [927.8, 292.4], [740.01, 400.82], [885.97, 485.1]], "z": -9235.5, "shade": 1.0, "poly": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]]}, {"type": "floor", "name": "厨房", "points": [[389.62, 456.33], [188.83, 340.4], [30.76, 431.67], [231.55, 547.6]], "z": -9125.0, "shade": 1.0, "poly": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]]}, {"type": "floor", "name": "客厅", "points": [[883.23, 486.35], [613.14, 330.41], [394.49, 456.65], [664.58, 612.59]], "z": -9070.0, "shade": 1.0, "poly": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]]}, {"type": "floor", "name": "玄关", "points": [[450.24, 566.31], [327.43, 495.4], [234.27, 549.19], [357.08, 620.1]], "z": -8897.5, "shade": 1.0, "poly": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]]}, {"type": "floor", "name": "书房", "points": [[662.5, 613.59], [392.71, 457.86], [328.7, 495.07], [452.27, 567.89], [359.28, 620.59], [504.05, 705.13]], "z": -8860.0, "shade": 1.0, "poly": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]]}, {"type": "ao", "points": [[910.78, 87.0], [843.24, 126.0], [850.16, 130.0], [917.71, 91.0]], "opacity": 0.14, "z": 254.95}, {"type": "wall", "seg": [160.0, 0.0, 160.0, 70.0], "top": [[898.66, 24.0], [907.32, 29.0], [846.7, 64.0], [838.04, 59.0]], "faces": [{"points": [[907.32, 89.0], [846.7, 124.0], [846.7, 64.0], [907.32, 29.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[846.7, 124.0], [838.04, 119.0], [838.04, 59.0], [846.7, 64.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 255.0, "shade": 1.0}, {"type": "ao", "points": [[841.5, 126.0], [785.21, 93.5], [778.29, 97.5], [834.58, 130.0]], "opacity": 0.14, "z": 261.45}, {"type": "wall", "seg": [160.0, 70.0, 103.0, 70.0], "top": [[846.7, 59.0], [838.04, 64.0], [788.68, 35.5], [797.34, 30.5]], "faces": [{"points": [[846.7, 119.0], [838.04, 124.0], [838.04, 64.0], [846.7, 59.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[838.04, 124.0], [788.68, 95.5], [788.68, 35.5], [838.04, 64.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 261.5, "shade": 1.0}, {"type": "ao", "points": [[1058.0, 181.0], [895.2, 87.0], [888.27, 91.0], [1051.08, 185.0]], "opacity": 0.14, "z": 309.95}, {"type": "wall", "seg": [340.0, 0.0, 160.0, 0.0], "top": [[1063.2, 114.0], [1054.54, 119.0], [898.66, 29.0], [907.32, 24.0]], "faces": [{"points": [[1063.2, 174.0], [1054.54, 179.0], [1054.54, 119.0], [1063.2, 114.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1054.54, 179.0], [898.66, 89.0], [898.66, 29.0], [1054.54, 119.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 310.0, "shade": 1.0}, {"type": "furn", "id": "dresser", "name": "梳妆台", "room": "卧室", "material": "wood", "top": [[911.65, 60.0], [1032.89, 130.0], [993.92, 152.5], [872.68, 82.5]], "faces": [{"points": [[1032.89, 167.5], [993.92, 190.0], [993.92, 152.5], [1032.89, 130.0]], "tone": "dark"}, {"points": [[993.92, 190.0], [872.68, 120.0], [872.68, 82.5], [993.92, 152.5]], "tone": "mid"}], "z": 312.0, "base_h": 0.0, "height": 75.0, "height_raw": 75.0, "height_capped": false}, {"type": "ao", "points": [[800.8, 93.5], [499.43, 267.5], [506.36, 271.5], [807.73, 97.5]], "opacity": 0.14, "z": 402.95}, {"type": "wall", "seg": [103.0, 70.0, 103.0, 410.0], "top": [[788.68, 30.5], [797.34, 35.5], [502.9, 205.5], [494.24, 200.5]], "faces": [{"points": [[797.34, 95.5], [502.9, 265.5], [502.9, 205.5], [797.34, 35.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[502.9, 265.5], [494.24, 260.5], [494.24, 200.5], [502.9, 205.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 403.0, "shade": 1.0}, {"type": "ao", "points": [[1058.0, 172.0], [990.46, 211.0], [983.53, 207.0], [1051.08, 168.0]], "opacity": 0.14, "z": 434.95}, {"type": "wall", "seg": [340.0, 0.0, 340.0, 70.0], "top": [[1054.54, 114.0], [1063.2, 119.0], [1002.58, 154.0], [993.92, 149.0]], "faces": [{"points": [[1063.2, 179.0], [1002.58, 214.0], [1002.58, 154.0], [1063.2, 119.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1002.58, 214.0], [993.92, 209.0], [993.92, 149.0], [1002.58, 154.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 435.0, "shade": 1.0}, {"type": "furn", "id": "bed", "name": "双人床", "room": "卧室", "material": "soft", "top": [[823.32, 113.5], [953.22, 188.5], [780.02, 288.5], [650.12, 213.5]], "faces": [{"points": [[953.22, 213.5], [780.02, 313.5], [780.02, 288.5], [953.22, 188.5]], "tone": "dark"}, {"points": [[780.02, 313.5], [650.12, 238.5], [650.12, 213.5], [780.02, 288.5]], "tone": "mid"}], "z": 464.0, "base_h": 0.0, "height": 50.0, "height_raw": 50.0, "height_capped": false}, {"type": "ao", "points": [[1031.16, 235.5], [990.46, 212.0], [983.53, 216.0], [1024.23, 239.5]], "opacity": 0.14, "z": 489.45}, {"type": "wall", "seg": [379.0, 70.0, 340.0, 70.0], "top": [[1036.35, 168.5], [1027.69, 173.5], [993.92, 154.0], [1002.58, 149.0]], "faces": [{"points": [[1036.35, 228.5], [1027.69, 233.5], [1027.69, 173.5], [1036.35, 168.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1027.69, 233.5], [993.92, 214.0], [993.92, 154.0], [1027.69, 173.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 489.5, "shade": 1.0}, {"type": "furn", "id": "rack", "name": "置物架", "room": "小阳台", "material": "wood", "top": [[390.32, 200.5], [424.96, 220.5], [394.65, 238.0], [360.01, 218.0]], "faces": [{"points": [[424.96, 250.5], [394.65, 268.0], [394.65, 238.0], [424.96, 220.5]], "tone": "dark"}, {"points": [[394.65, 268.0], [360.01, 248.0], [360.01, 218.0], [394.65, 238.0]], "tone": "mid"}], "z": 515.5, "base_h": 0.0, "height": 60.0, "height_raw": 60.0, "height_capped": false}, {"type": "ao", "points": [[489.04, 272.5], [392.92, 217.0], [385.99, 221.0], [482.11, 276.5]], "opacity": 0.14, "z": 531.45}, {"type": "wall", "seg": [103.0, 420.0, 0.0, 420.0], "top": [[494.24, 205.5], [485.58, 210.5], [396.38, 159.0], [405.04, 154.0]], "faces": [{"points": [[494.24, 265.5], [485.58, 270.5], [485.58, 210.5], [494.24, 205.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[485.58, 270.5], [396.38, 219.0], [396.38, 159.0], [485.58, 210.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 531.5, "shade": 1.0}, {"type": "furn", "id": "wardrobe", "name": "衣柜", "room": "卧室", "material": "wood", "top": [[560.92, 178.0], [716.8, 268.0], [664.84, 298.0], [508.96, 208.0]], "faces": [{"points": [[716.8, 323.0], [664.84, 353.0], [664.84, 298.0], [716.8, 268.0]], "tone": "dark"}, {"points": [[664.84, 353.0], [508.96, 263.0], [508.96, 208.0], [664.84, 298.0]], "tone": "mid"}], "z": 628.0, "base_h": 0.0, "height": 110.0, "height_raw": 220.0, "height_capped": true}, {"type": "ao", "points": [[920.31, 291.5], [941.09, 303.5], [934.17, 307.5], [913.38, 295.5]], "opacity": 0.14, "z": 636.95}, {"type": "wall", "seg": [379.0, 190.0, 395.0, 190.0], "top": [[923.77, 233.5], [932.43, 228.5], [946.29, 236.5], [937.63, 241.5]], "faces": [{"points": [[946.29, 296.5], [937.63, 301.5], [937.63, 241.5], [946.29, 236.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[937.63, 301.5], [923.77, 293.5], [923.77, 233.5], [937.63, 241.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 637.0, "shade": 1.0}, {"type": "ao", "points": [[490.77, 263.5], [657.48, 359.75], [650.55, 363.75], [483.85, 267.5]], "opacity": 0.14, "z": 665.2}, {"type": "ao", "points": [[499.43, 258.5], [666.14, 354.75], [673.07, 350.75], [506.36, 254.5]], "opacity": 0.14, "z": 665.2}, {"type": "wall", "seg": [103.0, 410.0, 287.5, 410.0], "top": [[494.24, 205.5], [502.9, 200.5], [662.68, 292.75], [654.02, 297.75]], "faces": [{"points": [[662.68, 352.75], [654.02, 357.75], [654.02, 297.75], [662.68, 292.75]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[654.02, 357.75], [494.24, 265.5], [494.24, 205.5], [654.02, 297.75]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 665.25, "shade": 1.0}, {"type": "furn", "id": "shower", "name": "淋浴区", "room": "浴室", "material": "hard", "top": [[498.57, 214.0], [576.51, 259.0], [498.57, 304.0], [420.63, 259.0]], "faces": [{"points": [[576.51, 314.0], [498.57, 359.0], [498.57, 304.0], [576.51, 259.0]], "tone": "dark"}, {"points": [[498.57, 359.0], [420.63, 314.0], [420.63, 259.0], [498.57, 304.0]], "tone": "mid"}], "z": 670.0, "base_h": 0.0, "height": 110.0, "height_raw": 200.0, "height_capped": true}, {"type": "ao", "points": [[1031.16, 226.5], [729.79, 400.5], [722.86, 396.5], [1024.23, 222.5]], "opacity": 0.14, "z": 678.95}, {"type": "ao", "points": [[1039.82, 231.5], [738.45, 405.5], [745.38, 409.5], [1046.75, 235.5]], "opacity": 0.14, "z": 678.95}, {"type": "wall", "seg": [379.0, 70.0, 379.0, 410.0], "top": [[1027.69, 168.5], [1036.35, 173.5], [741.91, 343.5], [733.25, 338.5]], "faces": [{"points": [[1036.35, 233.5], [741.91, 403.5], [741.91, 343.5], [1036.35, 173.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[741.91, 403.5], [733.25, 398.5], [733.25, 338.5], [741.91, 343.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 679.0, "shade": 1.0}, {"type": "furn", "id": "fridge", "name": "冰箱", "room": "小阳台", "material": "wood", "top": [[286.4, 235.5], [334.03, 263.0], [282.07, 293.0], [234.44, 265.5]], "faces": [{"points": [[334.03, 318.0], [282.07, 348.0], [282.07, 293.0], [334.03, 263.0]], "tone": "dark"}, {"points": [[282.07, 348.0], [234.44, 320.5], [234.44, 265.5], [282.07, 293.0]], "tone": "mid"}], "z": 680.5, "base_h": 0.0, "height": 110.0, "height_raw": 145.0, "height_capped": true}, {"type": "ao", "points": [[408.5, 217.0], [29.2, 436.0], [36.12, 440.0], [415.43, 221.0]], "opacity": 0.14, "z": 694.95}, {"type": "wall", "seg": [0.0, 420.0, 0.0, 850.0], "top": [[396.38, 154.0], [405.04, 159.0], [32.66, 374.0], [24.0, 369.0]], "faces": [{"points": [[405.04, 219.0], [32.66, 434.0], [32.66, 374.0], [405.04, 159.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[32.66, 434.0], [24.0, 429.0], [24.0, 369.0], [32.66, 374.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 695.0, "shade": 1.0}, {"type": "ao", "points": [[497.7, 258.5], [269.94, 390.0], [263.02, 386.0], [490.77, 254.5]], "opacity": 0.14, "z": 700.45}, {"type": "ao", "points": [[506.36, 263.5], [278.6, 395.0], [285.53, 399.0], [513.29, 267.5]], "opacity": 0.14, "z": 700.45}, {"type": "wall", "seg": [103.0, 410.0, 103.0, 665.0], "top": [[494.24, 200.5], [502.9, 205.5], [282.07, 333.0], [273.41, 328.0]], "faces": [{"points": [[502.9, 265.5], [282.07, 393.0], [282.07, 333.0], [502.9, 205.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[282.07, 393.0], [273.41, 388.0], [273.41, 328.0], [282.07, 333.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 700.5, "shade": 1.0}, {"type": "furn", "id": "toilet", "name": "马桶", "room": "浴室", "material": "wood", "top": [[412.83, 281.0], [464.79, 311.0], [430.15, 331.0], [378.19, 301.0]], "faces": [{"points": [[464.79, 348.5], [430.15, 368.5], [430.15, 331.0], [464.79, 311.0]], "tone": "dark"}, {"points": [[430.15, 368.5], [378.19, 338.5], [378.19, 301.0], [430.15, 331.0]], "tone": "mid"}], "z": 711.5, "base_h": 0.0, "height": 75.0, "height_raw": 75.0, "height_capped": false}, {"type": "ao", "points": [[612.01, 324.5], [587.77, 338.5], [580.84, 334.5], [605.09, 320.5]], "opacity": 0.14, "z": 714.95}, {"type": "ao", "points": [[620.67, 329.5], [596.43, 343.5], [603.35, 347.5], [627.6, 333.5]], "opacity": 0.14, "z": 714.95}, {"type": "wall", "seg": [235.0, 410.0, 235.0, 430.0], "top": [[608.55, 266.5], [617.21, 271.5], [599.89, 281.5], [591.23, 276.5]], "faces": [{"points": [[617.21, 331.5], [599.89, 341.5], [599.89, 281.5], [617.21, 271.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[599.89, 341.5], [591.23, 336.5], [591.23, 276.5], [599.89, 281.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 715.0, "shade": 1.0}, {"type": "ao", "points": [[1075.32, 381.0], [934.17, 299.5], [927.24, 303.5], [1068.4, 385.0]], "opacity": 0.14, "z": 722.45}, {"type": "wall", "seg": [550.0, 190.0, 395.0, 190.0], "top": [[1080.52, 314.0], [1071.86, 319.0], [937.63, 241.5], [946.29, 236.5]], "faces": [{"points": [[1080.52, 374.0], [1071.86, 379.0], [1071.86, 319.0], [1080.52, 314.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1071.86, 379.0], [937.63, 301.5], [937.63, 241.5], [1071.86, 319.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 722.5, "shade": 1.0}, {"type": "ao", "points": [[180.75, 339.5], [193.74, 347.0], [186.81, 351.0], [173.82, 343.5]], "opacity": 0.14, "z": 728.45}, {"type": "ao", "points": [[189.41, 334.5], [202.4, 342.0], [209.32, 338.0], [196.33, 330.5]], "opacity": 0.14, "z": 728.45}, {"type": "wall", "seg": [0.0, 665.0, 7.0, 665.0], "top": [[184.21, 281.5], [192.87, 276.5], [198.93, 280.0], [190.27, 285.0]], "faces": [{"points": [[198.93, 340.0], [190.27, 345.0], [190.27, 285.0], [198.93, 280.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[190.27, 345.0], [184.21, 341.5], [184.21, 281.5], [190.27, 285.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 728.5, "shade": 1.0}, {"type": "furn", "id": "litter", "name": "猫厕所", "room": "大阳台", "material": "wood", "top": [[993.92, 319.0], [1047.61, 350.0], [1000.85, 377.0], [947.16, 346.0]], "faces": [{"points": [[1047.61, 380.0], [1000.85, 407.0], [1000.85, 377.0], [1047.61, 350.0]], "tone": "dark"}, {"points": [[1000.85, 407.0], [947.16, 376.0], [947.16, 346.0], [1000.85, 377.0]], "tone": "mid"}], "z": 773.0, "base_h": 0.0, "height": 60.0, "height_raw": 60.0, "height_capped": false}, {"type": "furn", "id": "basin", "name": "洗手台", "room": "浴室", "material": "wood", "top": [[356.54, 308.5], [395.51, 331.0], [347.88, 358.5], [308.91, 336.0]], "faces": [{"points": [[395.51, 373.5], [347.88, 401.0], [347.88, 358.5], [395.51, 331.0]], "tone": "dark"}, {"points": [[347.88, 401.0], [308.91, 378.5], [308.91, 336.0], [347.88, 358.5]], "tone": "mid"}], "z": 781.5, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "sink", "name": "水槽", "room": "厨房", "material": "hard", "top": [[164.29, 318.5], [203.26, 341.0], [168.62, 361.0], [129.65, 338.5]], "faces": [{"points": [[203.26, 345.0], [168.62, 365.0], [168.62, 361.0], [203.26, 341.0]], "tone": "dark"}, {"points": [[168.62, 365.0], [129.65, 342.5], [129.65, 338.5], [168.62, 361.0]], "tone": "mid"}], "z": 806.0, "base_h": 85.0, "height": 8.0, "height_raw": 8.0, "height_capped": false}, {"type": "furn", "id": "counter_w", "name": "橱柜台面（西）", "room": "厨房", "material": "wood", "top": [[163.43, 317.0], [211.06, 344.5], [138.31, 386.5], [90.68, 359.0]], "faces": [{"points": [[211.06, 387.0], [138.31, 429.0], [138.31, 386.5], [211.06, 344.5]], "tone": "dark"}, {"points": [[138.31, 429.0], [90.68, 401.5], [90.68, 359.0], [138.31, 386.5]], "tone": "mid"}], "z": 818.0, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "dock", "name": "扫地机基站", "room": "浴室", "material": "wood", "top": [[396.38, 376.5], [431.02, 396.5], [392.05, 419.0], [357.41, 399.0]], "faces": [{"points": [[431.02, 414.0], [392.05, 436.5], [392.05, 419.0], [431.02, 396.5]], "tone": "dark"}, {"points": [[392.05, 436.5], [357.41, 416.5], [357.41, 399.0], [392.05, 419.0]], "tone": "mid"}], "z": 835.0, "base_h": 0.0, "height": 35.0, "height_raw": 35.0, "height_capped": false}, {"type": "ao", "points": [[724.16, 398.25], [736.72, 405.5], [729.79, 409.5], [717.23, 402.25]], "opacity": 0.14, "z": 845.7}, {"type": "ao", "points": [[732.82, 393.25], [745.38, 400.5], [752.31, 396.5], [739.75, 389.25]], "opacity": 0.14, "z": 845.7}, {"type": "wall", "seg": [372.5, 410.0, 379.0, 410.0], "top": [[727.62, 340.25], [736.29, 335.25], [741.91, 338.5], [733.25, 343.5]], "faces": [{"points": [[741.91, 398.5], [733.25, 403.5], [733.25, 343.5], [741.91, 338.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[733.25, 403.5], [727.62, 400.25], [727.62, 340.25], [733.25, 343.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 845.75, "shade": 1.0}, {"type": "ao", "points": [[729.79, 401.5], [741.91, 408.5], [734.99, 412.5], [722.86, 405.5]], "opacity": 0.14, "z": 851.95}, {"type": "ao", "points": [[738.45, 396.5], [750.57, 403.5], [757.5, 399.5], [745.38, 392.5]], "opacity": 0.14, "z": 851.95}, {"type": "wall", "seg": [379.0, 410.0, 385.0, 410.0], "top": [[733.25, 343.5], [741.91, 338.5], [747.11, 341.5], [738.45, 346.5]], "faces": [{"points": [[747.11, 401.5], [738.45, 406.5], [738.45, 346.5], [747.11, 341.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[738.45, 406.5], [733.25, 403.5], [733.25, 343.5], [738.45, 346.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 852.0, "shade": 1.0}, {"type": "ao", "points": [[264.75, 388.0], [391.18, 461.0], [384.26, 465.0], [257.82, 392.0]], "opacity": 0.14, "z": 890.95}, {"type": "ao", "points": [[273.41, 383.0], [399.84, 456.0], [406.77, 452.0], [280.34, 379.0]], "opacity": 0.14, "z": 890.95}, {"type": "wall", "seg": [97.0, 665.0, 235.0, 665.0], "top": [[268.21, 330.0], [276.87, 325.0], [396.38, 394.0], [387.72, 399.0]], "faces": [{"points": [[396.38, 454.0], [387.72, 459.0], [387.72, 399.0], [396.38, 394.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[387.72, 459.0], [268.21, 390.0], [268.21, 330.0], [387.72, 399.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 891.0, "shade": 1.0}, {"type": "furn", "id": "bin", "name": "垃圾桶", "room": "厨房", "material": "wood", "top": [[355.68, 422.5], [379.93, 436.5], [359.14, 448.5], [334.89, 434.5]], "faces": [{"points": [[379.93, 456.5], [359.14, 468.5], [359.14, 448.5], [379.93, 436.5]], "tone": "dark"}, {"points": [[359.14, 468.5], [334.89, 454.5], [334.89, 434.5], [359.14, 448.5]], "tone": "mid"}], "z": 918.0, "base_h": 0.0, "height": 40.0, "height_raw": 40.0, "height_capped": false}, {"type": "furn", "id": "cooktop", "name": "灶台（双眼）", "room": "厨房", "material": "hard", "top": [[97.61, 371.0], [153.9, 403.5], [114.93, 426.0], [58.64, 393.5]], "faces": [{"points": [[153.9, 406.5], [114.93, 429.0], [114.93, 426.0], [153.9, 403.5]], "tone": "dark"}, {"points": [[114.93, 429.0], [58.64, 396.5], [58.64, 393.5], [114.93, 426.0]], "tone": "mid"}], "z": 920.5, "base_h": 85.0, "height": 6.0, "height_raw": 6.0, "height_capped": false}, {"type": "ao", "points": [[525.41, 374.5], [301.99, 503.5], [295.06, 499.5], [518.49, 370.5]], "opacity": 0.14, "z": 929.95}, {"type": "ao", "points": [[534.07, 379.5], [310.65, 508.5], [317.57, 512.5], [541.0, 383.5]], "opacity": 0.14, "z": 929.95}, {"type": "wall", "seg": [235.0, 510.0, 235.0, 760.0], "top": [[521.95, 316.5], [530.61, 321.5], [314.11, 446.5], [305.45, 441.5]], "faces": [{"points": [[530.61, 381.5], [314.11, 506.5], [314.11, 446.5], [530.61, 321.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[314.11, 506.5], [305.45, 501.5], [305.45, 441.5], [314.11, 446.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 930.0, "shade": 1.0}, {"type": "furn", "id": "counter_s", "name": "橱柜台面（南）", "room": "厨房", "material": "wood", "top": [[90.68, 359.0], [283.8, 470.5], [231.84, 500.5], [38.72, 389.0]], "faces": [{"points": [[283.8, 513.0], [231.84, 543.0], [231.84, 500.5], [283.8, 470.5]], "tone": "dark"}, {"points": [[231.84, 543.0], [38.72, 431.5], [38.72, 389.0], [231.84, 500.5]], "tone": "mid"}], "z": 974.0, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "ao", "points": [[873.55, 484.5], [884.8, 491.0], [877.88, 495.0], [866.62, 488.5]], "opacity": 0.14, "z": 1017.45}, {"type": "ao", "points": [[882.21, 479.5], [893.46, 486.0], [900.39, 482.0], [889.13, 475.5]], "opacity": 0.14, "z": 1017.45}, {"type": "wall", "seg": [545.0, 410.0, 550.0, 410.0], "top": [[877.01, 426.5], [885.67, 421.5], [890.0, 424.0], [881.34, 429.0]], "faces": [{"points": [[890.0, 484.0], [881.34, 489.0], [881.34, 429.0], [890.0, 424.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[881.34, 489.0], [877.01, 486.5], [877.01, 426.5], [881.34, 429.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1017.5, "shade": 1.0}, {"type": "furn", "id": "display", "name": "展示柜", "room": "客厅", "material": "wood", "top": [[844.97, 414.0], [875.28, 431.5], [828.51, 458.5], [798.2, 441.0]], "faces": [{"points": [[875.28, 486.5], [828.51, 513.5], [828.51, 458.5], [875.28, 431.5]], "tone": "dark"}, {"points": [[828.51, 513.5], [798.2, 496.0], [798.2, 441.0], [828.51, 458.5]], "tone": "mid"}], "z": 1024.5, "base_h": 0.0, "height": 110.0, "height_raw": 110.0, "height_capped": false}, {"type": "ao", "points": [[29.2, 427.0], [256.95, 558.5], [263.88, 554.5], [36.12, 423.0]], "opacity": 0.14, "z": 1037.45}, {"type": "wall", "seg": [0.0, 850.0, 255.0, 850.0], "top": [[24.0, 374.0], [32.66, 369.0], [253.49, 496.5], [244.83, 501.5]], "faces": [{"points": [[253.49, 556.5], [244.83, 561.5], [244.83, 501.5], [253.49, 496.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[244.83, 561.5], [24.0, 434.0], [24.0, 374.0], [244.83, 501.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1037.5, "shade": 1.0}, {"type": "furn", "id": "sofa", "name": "三人沙发", "room": "客厅", "material": "soft", "top": [[745.38, 429.0], [823.32, 474.0], [664.84, 565.5], [586.9, 520.5]], "faces": [{"points": [[823.32, 516.5], [664.84, 608.0], [664.84, 565.5], [823.32, 474.0]], "tone": "dark"}, {"points": [[664.84, 608.0], [586.9, 563.0], [586.9, 520.5], [664.84, 565.5]], "tone": "mid"}], "z": 1109.0, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "ao", "points": [[1075.32, 372.0], [496.84, 706.0], [489.91, 702.0], [1068.4, 368.0]], "opacity": 0.14, "z": 1129.95}, {"type": "wall", "seg": [550.0, 190.0, 550.0, 850.0], "top": [[1071.86, 314.0], [1080.52, 319.0], [508.96, 649.0], [500.3, 644.0]], "faces": [{"points": [[1080.52, 379.0], [508.96, 709.0], [508.96, 649.0], [1080.52, 319.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[508.96, 709.0], [500.3, 704.0], [500.3, 644.0], [508.96, 649.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1130.0, "shade": 1.0}, {"type": "ao", "points": [[239.63, 539.5], [224.05, 548.5], [217.12, 544.5], [232.71, 535.5]], "opacity": 0.14, "z": 1139.95}, {"type": "ao", "points": [[248.29, 544.5], [232.71, 553.5], [239.63, 557.5], [255.22, 548.5]], "opacity": 0.14, "z": 1139.95}, {"type": "wall", "seg": [235.0, 840.0, 235.0, 850.0], "top": [[236.17, 481.5], [244.83, 486.5], [236.17, 491.5], [227.51, 486.5]], "faces": [{"points": [[244.83, 546.5], [236.17, 551.5], [236.17, 491.5], [244.83, 486.5]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[236.17, 551.5], [227.51, 546.5], [227.51, 486.5], [236.17, 491.5]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1140.0, "shade": 1.0}, {"type": "furn", "id": "chair", "name": "人体工学椅", "room": "书房", "material": "wood", "top": [[513.29, 519.0], [569.58, 551.5], [513.29, 584.0], [457.0, 551.5]], "faces": [{"points": [[569.58, 594.0], [513.29, 626.5], [513.29, 584.0], [569.58, 551.5]], "tone": "dark"}, {"points": [[513.29, 626.5], [457.0, 594.0], [457.0, 551.5], [513.29, 584.0]], "tone": "mid"}], "z": 1217.5, "base_h": 0.0, "height": 85.0, "height_raw": 85.0, "height_capped": false}, {"type": "furn", "id": "desk", "name": "书桌", "room": "书房", "material": "wood", "top": [[598.16, 544.0], [654.45, 576.5], [539.27, 643.0], [482.98, 610.5]], "faces": [{"points": [[654.45, 614.0], [539.27, 680.5], [539.27, 643.0], [654.45, 576.5]], "tone": "dark"}, {"points": [[539.27, 680.5], [482.98, 648.0], [482.98, 610.5], [539.27, 643.0]], "tone": "mid"}], "z": 1286.5, "base_h": 0.0, "height": 75.0, "height_raw": 75.0, "height_capped": false}, {"type": "furn", "id": "cube", "name": "格子柜", "room": "书房", "material": "wood", "top": [[402.44, 546.5], [506.36, 606.5], [471.72, 626.5], [367.8, 566.5]], "faces": [{"points": [[506.36, 661.5], [471.72, 681.5], [471.72, 626.5], [506.36, 606.5]], "tone": "dark"}, {"points": [[471.72, 681.5], [367.8, 621.5], [367.8, 566.5], [471.72, 626.5]], "tone": "mid"}], "z": 1325.0, "base_h": 0.0, "height": 110.0, "height_raw": 130.0, "height_capped": true}, {"type": "ao", "points": [[327.97, 599.5], [512.42, 706.0], [519.35, 702.0], [334.89, 595.5]], "opacity": 0.14, "z": 1357.45}, {"type": "wall", "seg": [345.0, 850.0, 550.0, 850.0], "top": [[322.77, 546.5], [331.43, 541.5], [508.96, 644.0], [500.3, 649.0]], "faces": [{"points": [[508.96, 704.0], [500.3, 709.0], [500.3, 649.0], [508.96, 644.0]], "tone": "dark", "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[500.3, 709.0], [322.77, 606.5], [322.77, 546.5], [500.3, 649.0]], "tone": "mid", "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1357.5, "shade": 1.0}], "order": ["floor:卧室", "floor:小阳台", "floor:浴室", "floor:大阳台", "floor:厨房", "floor:客厅", "floor:玄关", "floor:书房", "ao:", "wall:[160.0, 0.0, 160.0, 70.0]", "ao:", "wall:[160.0, 70.0, 103.0, 70.0]", "ao:", "wall:[340.0, 0.0, 160.0, 0.0]", "furn:梳妆台", "ao:", "wall:[103.0, 70.0, 103.0, 410.0]", "ao:", "wall:[340.0, 0.0, 340.0, 70.0]", "furn:双人床", "ao:", "wall:[379.0, 70.0, 340.0, 70.0]", "furn:置物架", "ao:", "wall:[103.0, 420.0, 0.0, 420.0]", "furn:衣柜", "ao:", "wall:[379.0, 190.0, 395.0, 190.0]", "ao:", "ao:", "wall:[103.0, 410.0, 287.5, 410.0]", "furn:淋浴区", "ao:", "ao:", "wall:[379.0, 70.0, 379.0, 410.0]", "furn:冰箱", "ao:", "wall:[0.0, 420.0, 0.0, 850.0]", "ao:", "ao:", "wall:[103.0, 410.0, 103.0, 665.0]", "furn:马桶", "ao:", "ao:", "wall:[235.0, 410.0, 235.0, 430.0]", "ao:", "wall:[550.0, 190.0, 395.0, 190.0]", "ao:", "ao:", "wall:[0.0, 665.0, 7.0, 665.0]", "furn:猫厕所", "furn:洗手台", "furn:水槽", "furn:橱柜台面（西）", "furn:扫地机基站", "ao:", "ao:", "wall:[372.5, 410.0, 379.0, 410.0]", "ao:", "ao:", "wall:[379.0, 410.0, 385.0, 410.0]", "ao:", "ao:", "wall:[97.0, 665.0, 235.0, 665.0]", "furn:垃圾桶", "furn:灶台（双眼）", "ao:", "ao:", "wall:[235.0, 510.0, 235.0, 760.0]", "furn:橱柜台面（南）", "ao:", "ao:", "wall:[545.0, 410.0, 550.0, 410.0]", "furn:展示柜", "ao:", "wall:[0.0, 850.0, 255.0, 850.0]", "furn:三人沙发", "ao:", "wall:[550.0, 190.0, 550.0, 850.0]", "ao:", "ao:", "wall:[235.0, 840.0, 235.0, 850.0]", "furn:人体工学椅", "furn:书桌", "furn:格子柜", "ao:", "wall:[345.0, 850.0, 550.0, 850.0]"]}, "panel": {"pet": {"name": "豆包", "weight": "sensor.dou_bao_last_weight_measurement", "toilet": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_toilet_occupied", "feedCount": "sensor.zhi_neng_wei_shi_qi_solo_times_dispensed", "feedGrams": "sensor.zhi_neng_wei_shi_qi_solo_total_dispensed", "plannedGrams": "sensor.zhi_neng_wei_shi_qi_solo_total_planned", "error": "sensor.zhi_neng_wei_shi_qi_solo_error", "sandLack": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_sand_lack", "wasteFull": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_wastebin_filled", "actions": {"clean": {"label": "清理", "domain": "button", "service": "press", "entity": "button.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_scoop"}, "feed": {"label": "出粮", "domain": "text", "service": "set_value", "entity": "text.zhi_neng_wei_shi_qi_solo_manual_feed", "value": "10"}}, "errorMap": {"Food is too many to block the food door. Please clean it.": "出粮口堵塞，请清理"}}, "vacuumCard": {"name": "扫地机 P20", "entity": "vacuum.wei_sheng_jian_p20", "statusMap": {"docked": "在充电座", "cleaning": "清扫中", "paused": "已暂停", "returning": "返回中", "error": "故障", "idle": "待机"}, "battery": "sensor.wei_sheng_jian_p20_battery", "charging": "binary_sensor.wei_sheng_jian_p20_charging", "progress": "sensor.wei_sheng_jian_p20_cleaning_progress", "area": "sensor.wei_sheng_jian_p20_cleaning_area", "time": "sensor.wei_sheng_jian_p20_cleaning_time", "room": "sensor.wei_sheng_jian_p20_current_room", "lastBegin": "sensor.wei_sheng_jian_p20_last_clean_begin", "lastEnd": "sensor.wei_sheng_jian_p20_last_clean_end", "totalCount": "sensor.wei_sheng_jian_p20_total_cleaning_count", "totalArea": "sensor.wei_sheng_jian_p20_total_cleaning_area", "totalTime": "sensor.wei_sheng_jian_p20_total_cleaning_time", "waterShortage": "binary_sensor.wei_sheng_jian_p20_water_shortage", "vacError": "sensor.wei_sheng_jian_p20_vacuum_error", "dockError": "sensor.p20_dock_dock_error", "consumables": [{"entity": "sensor.wei_sheng_jian_p20_sensor_time_left", "label": "传感器耗材", "warn_le": 10}, {"entity": "sensor.wei_sheng_jian_p20_main_brush_time_left", "label": "主刷", "warn_le": 20}, {"entity": "sensor.wei_sheng_jian_p20_filter_time_left", "label": "滤网", "warn_le": 20}, {"entity": "sensor.wei_sheng_jian_p20_side_brush_time_left", "label": "边刷", "warn_le": 20}], "actions": {"start": {"label": "清扫", "domain": "button", "service": "press", "entity": "button.wei_sheng_jian_p20_quan_wu_qing_ji"}, "dock": {"label": "回充", "domain": "vacuum", "service": "return_to_base", "entity": "vacuum.wei_sheng_jian_p20"}, "pause": {"label": "暂停", "domain": "vacuum", "service": "pause", "entity": "vacuum.wei_sheng_jian_p20"}}}, "media": {"name": "客厅 HomePod", "entity": "media_player.qi_ju_shi_qi_ju_shi"}, "climate": {"name": "卧室·空调", "entity": "climate.ac_controller_138a_thermostat", "roomTemp": "sensor.ac_controller_138a_current_temperature", "humidity": "sensor.ac_controller_138a_humidity_sensor", "modeLabels": {"off": "关", "cool": "制冷", "heat": "制热", "auto": "自动", "dry": "除湿", "fan_only": "送风"}, "fanLabels": {"off": "关", "low": "低", "medium": "中", "high": "高", "auto": "自动", "middle": "中"}, "swingLabels": {"off": "关", "vertical": "垂直", "horizontal": "水平", "both": "全摆"}}}, "batch": [{"label": "全关灯", "icon": "💡", "domain": "light", "service": "turn_off", "targets": ["light.chu_fang_deng", "light.da_yang_tai_deng", "light.ke_ting_deng", "light.liu_guang_yi_cai_luo_di_deng_t1", "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "light.shu_zhuo_deng", "light.wo_shi_deng", "light.xiao_yang_tai_deng"]}, {"label": "关窗帘", "icon": "🪟", "domain": "cover", "service": "open_cover", "targets": ["cover.chuang_lian_ban_lu_wo_shi"]}], "risky": {"switch.qiang_bi_cha_zuo_shu_fang": "书房这台插座供电给电脑和路由器。关闭会立即断网，之后需要重新配置整套系统。"}, "covers": {"cover.chuang_lian_ban_lu_wo_shi": {"invert": true}}, "quickActions": [], "stats": {"rooms": 8, "devices": 32}};

const NS = "http://www.w3.org/2000/svg";

const BASE_R = 11;
const BASE_R_MULTI = 15;
const TARGET_PIN_R = 9;
const BADGE_H = 36;
const TARGET_BADGE_H = 50;

// 触控设备（挂墙平板 / 手机）：徽标整体放大，让 ⏻ 按钮达到 ≥44px。
// 换算：按钮设计直径 = BADGE_H×0.52 = 18.72；目标 44px ⇒ 徽标高 ≈ 86。
const IS_COARSE = () => {
  try { return !!(window.matchMedia && window.matchMedia("(pointer: coarse)").matches); }
  catch (e) { return false; }
};
const COARSE_BADGE_H = 86;
const COARSE_PIN_R = 14;

const WX = {
  "sunny":"晴","clear-night":"晴","partlycloudy":"局部多云","cloudy":"多云",
  "rainy":"小雨","pouring":"大雨","snowy":"雪","snowy-rainy":"雨夹雪",
  "fog":"雾","hail":"冰雹","lightning":"雷阵雨","windy":"大风",
  "windy-variant":"大风","exceptional":"异常","clear-day":"晴"
};

/* ---------------------------------------------------------------- 主题
 * 颜色全部走 token：CSS 里用 ${T.xxx}，JS 里读 T.xxx。
 * 深浅两套必须保持同一组 key（缺一个会渲染成 undefined）。
 */
const THEMES = {
  dark: {
  cardBg: "#0b1119",
  panelTop: "#0c141d",
  panelBot: "#0a1119",
  pinHalo: "#0a0f15",
  isoFloorStroke: "#0a1017",
  surfaceBtn: "#13202b",
  surfaceHover: "#16232f",
  surfaceHover2: "#1d3242",
  surfaceMenu: "#111c26",
  surfaceCap: "#0f1a24",
  isoFloor: "#141d27",
  roomGradIn: "#1d2836",
  roomGradOut: "#0f1720",
  isoFloorHover: "#18232f",
  roomFill: "#171f29",
  surfaceActive: "#0d3a52",
  surfaceSceneHover: "#16283a",
  alertBg: "#14100a",
  warnBtnBg: "#241a10",
  lineMain: "#1b2530",
  lineCol: "#16212c",
  lineBtn: "#24384a",
  lineScene: "#22333f",
  lineCap: "#1a2836",
  lineBadge: "#2a3d4f",
  lineDashed: "#2b3d4f",
  linePwr: "#2f4356",
  lineWarm: "#5a4322",
  lineWarm2: "#2a2318",
  accentLine: "#1d6f96",
  ringOn: "#33506a",
  alertCapHover: "#a2752f",
  wallLine: "#33475c",
  wallBand: "#46596e",
  wallEdge: "#7590a8",
  textBase: "#e8f2fb",
  textBadgeName: "#dbe8f4",
  textBtn: "#cfe3f2",
  textVal: "#cfe0ef",
  textEllipsis: "#cfdeeb",
  textAi: "#b9cddd",
  textRow: "#a9bccd",
  textDimRow: "#a9bfd2",
  textHud: "#9fb4c8",
  dimStats: "#93a9bd",
  dimModeBar: "#8fa6ba",
  dimPin: "#8aa0b4",
  dimLabel: "#7f94a8",
  dimDate: "#7e93a8",
  dimFoot: "#5f7386",
  dimUnavail: "#5a6b7a",
  dimRoomName: "#96a9be",
  accentBright: "#58c7ff",
  accentSoft: "#9fd2ef",
  accentPale: "#bfe9ff",
  lightOn: "#ffcd5c",
  lightOnStroke: "#b98f2e",
  onLightText: "#241a08",
  warmText2: "#f0c37a",
  alertItemText: "#d7c4a6",
  warn: "#ff9f43",
  danger: "#f85149",
  bubbleStrong: "#fff",
  overlayHud: "rgba(11,17,25,.86)",
  overlayBubble: "rgba(12,20,28,.95)",
  overlayBadge: "rgba(16,26,36,.85)",
  overlayModeBar: "rgba(17,28,38,.92)",
  overlayBadgeHover: "rgba(20,34,46,.92)",
  isoTopStroke: "rgba(150,178,205,.34)",
  // 立面/地板描边与顶面同宽同色系：剪影才成立（只有顶面有描边 = 贴纸感）
  isoFaceStroke: "rgba(150,178,205,.26)",
  // 三色调（等距插画铁律：每种材质恰好三阶，全图共用，不靠明暗系数）
  toneWall:     ["#6E7F93", "#4A5F78", "#415067"],
  toneFurnSoft: ["#6B625A", "#544C45", "#423C37"],
  toneFurnWood: ["#6E6052", "#574B40", "#443A31"],
  toneFurnHard: ["#7C8794", "#5A6673", "#444E5A"],
  shadowSoft: "#000a",
  shadowMenu: "#000b",
  lineRing: "#2a3a4a",
  unavailFill: "#2f3a45",
  rangeTrack: "#2b3f52",
  rangeFill: "#3f5a72",
  "floorTop": "#1b2634", "floorBot": "#111922", "aoOp": ".42", "vigOp": "0.5",
  "wallShadeLo": [40,56,72],
  wallShadeHi: [126,152,178],
  wallGradTop: "#68829e",
  wallGradMid: "#4b6278",
  wallGradBot: "#2f4054",
  glass1: "#9fb8d0",
  glass2: "#6d8aa6",
  glass3: "#41586f",
  glass4: "#2b3d4f",
  lamp1: "#ffd98a",
  lamp2: "#ffbe55",
  lamp3: "#ff9f2e",
  lampOp1: ".60",
  lampOp2: ".26",
  lampOp3: ".08",
  badgeOn: "#ffcd5c",
  badgeOnText: "#ffcd5c",
  badgeOff: "#6b7f92",
  menuDotOn: "#58c7ff",
  menuDotOff: "#455a6e",
  wallShadow: "rgba(0,0,0,.55)",
  nightFilter: "brightness(.74) saturate(.88)",
  aoEdge: "#000",
  vigEdge: "#000000",
  okAccent: "#3fb950",
  riskScrim: "rgba(3,6,10,.72)",
  riskBg: "#131c26",
  riskBorder: "#33465c",
  riskAccent: "#e5533d",
  riskShadow: "0 18px 48px rgba(0,0,0,.6)",
  petToilet: "#5eead4",
  petFeed: "#ffcd5c",
  petWeight: "#8ab4ff",
  petAxis: "#7d8d9e",

},
  light: {
  cardBg: "#FBFAF7",
  panelTop: "#FFFFFF",
  panelBot: "#F7F5F2",
  pinHalo: "#F2F0EC",
  isoFloorStroke: "#DCD7CF",
  surfaceBtn: "#FBFAF7",
  surfaceHover: "#F1EEE8",
  surfaceHover2: "#E8E4DC",
  surfaceMenu: "#FFFFFF",
  surfaceCap: "#F7F5F2",
  isoFloor: "#EFEBE4",
  roomGradIn: "#FFFFFF",
  roomGradOut: "#E8E4DC",
  isoFloorHover: "#E2DED5",
  roomFill: "#EDEAE4",
  surfaceActive: "#DCEBF6",
  surfaceSceneHover: "#EDEAE4",
  alertBg: "#FFF6E8",
  warnBtnBg: "#FFEFDC",
  lineMain: "#DCD7CF",
  lineCol: "#DCD7CF",
  lineBtn: "#CFC8BE",
  lineScene: "#D9D3CA",
  lineCap: "#D3CDC4",
  lineBadge: "#C9C2B8",
  lineDashed: "#CFC8BE",
  linePwr: "#C9C2B8",
  lineWarm: "#E3C08A",
  lineWarm2: "#EAD9C0",
  accentLine: "#2A7FB8",
  ringOn: "#9DB6C9",
  alertCapHover: "#C08A2E",
  wallLine: "#B9B2A6",
  wallBand: "#CFC8BE",
  wallEdge: "#A89F92",
  textBase: "#1F2429",
  textBadgeName: "#1F2429",
  textBtn: "#2A3038",
  textVal: "#2A3038",
  textEllipsis: "#2A3038",
  textAi: "#4A5460",
  textRow: "#4A5460",
  textDimRow: "#55606C",
  textHud: "#55606C",
  dimStats: "#6B7280",
  dimModeBar: "#5F6773",
  dimPin: "#5F6773",
  dimLabel: "#5F6773",
  dimDate: "#5F6773",
  dimFoot: "#66707C",
  dimUnavail: "#66707C",
  dimRoomName: "#5F6773",
  accentBright: "#0E6FA8",
  accentSoft: "#1B6FA8",
  accentPale: "#0B5C8A",
  lightOn: "#E08A00",
  lightOnStroke: "#A96900",
  onLightText: "#FFFFFF",
  warmText2: "#A9681A",
  alertItemText: "#7A5A2A",
  warn: "#C2410C",
  danger: "#D93A2B",
  bubbleStrong: "#1F2429",
  overlayHud: "rgba(255,255,255,.92)",
  overlayBubble: "rgba(255,255,255,.97)",
  overlayBadge: "rgba(255,255,255,.92)",
  overlayModeBar: "rgba(255,255,255,.94)",
  overlayBadgeHover: "rgba(255,255,255,.98)",
  isoTopStroke: "rgba(31,36,41,.28)",
  isoFaceStroke: "rgba(31,36,41,.22)",
  toneWall:     ["#FFFFFF", "#E4DED4", "#CFC8BC"],
  toneFurnSoft: ["#FFFFFF", "#E9E2D8", "#D5CEC3"],
  toneFurnWood: ["#F0E2CE", "#D9C0A0", "#C0A47F"],
  toneFurnHard: ["#FFFFFF", "#E2E6EA", "#C9CFD6"],
  shadowSoft: "rgba(31,36,41,.12)",
  shadowMenu: "rgba(31,36,41,.14)",
  lineRing: "#C9C2B8",
  unavailFill: "#D8D3CA",
  rangeTrack: "#DCD7CF",
  rangeFill: "#2A7FB8",
  "floorTop": "#F1EEE7", "floorBot": "#E2DCD2", "aoOp": ".20", "vigOp": "0.08",
  "wallShadeLo": [178,170,158],
  wallShadeHi: [255,255,255],
  // 渐变方向修正（2026-11-08）：linearGradient 的 0% 在**顶部**，
  // 原来浅色写成 上暗下亮，等于"地面反光"，与单一光源矛盾。改成上亮下暗，与深色一致。
  wallGradTop: "#EAE5DC",
  wallGradMid: "#DBD5CA",
  wallGradBot: "#C9C2B6",
  glass1: "#E9E4DB",
  glass2: "#D9D3C9",
  glass3: "#C9C2B8",
  glass4: "#B9B2A6",
  lamp1: "#F2B23A",
  lamp2: "#E08A00",
  lamp3: "#E08A00",
  lampOp1: ".30",
  lampOp2: ".16",
  lampOp3: ".05",
  badgeOn: "#E08A00",
  badgeOnText: "#9C5A00",
  badgeOff: "#6A7078",
  menuDotOn: "#0E6FA8",
  menuDotOff: "#C9C2B8",
  wallShadow: "rgba(31,36,41,.18)",
  nightFilter: "brightness(.97) saturate(.99)",
  aoEdge: "#1F2429",
  vigEdge: "#1F2429",
  // 危险操作确认框（浅色）,
  okAccent: "#2E8B57",
  riskScrim: "rgba(31,36,41,.28)",
  riskBg: "#FFFFFF",
  riskBorder: "#DCD7CF",
  riskAccent: "#C4392A",
  riskShadow: "0 18px 48px rgba(31,36,41,.18)",
  petToilet: "#0F8F88",
  petFeed: "#E08A00",
  petWeight: "#3C6FD9",
  petAxis: "#6B7280",

}
};
let T = THEMES.dark;

const cssFor = (T) => `
:host{display:block}
ha-card{overflow:hidden;background:${T.cardBg};border:1px solid ${T.lineMain};border-radius:16px;
        color:${T.textBase};font-family:-apple-system,"Segoe UI","Microsoft YaHei",sans-serif}
.shell{display:grid;grid-template-columns:288px minmax(0,1fr) 320px;
       height:min(78vh,840px);min-height:420px}
.left{display:flex;flex-direction:column;gap:12px;padding:16px 14px;min-height:0;
      overflow-y:auto;overflow-x:hidden;
      position:relative;border-right:1px solid ${T.lineCol};
      background:linear-gradient(180deg,${T.panelTop},${T.panelBot})}
.right{display:flex;flex-direction:column;gap:12px;padding:14px 12px;min-height:0;
      overflow-y:auto;overflow-x:hidden;
      border-left:1px solid ${T.lineCol};background:linear-gradient(180deg,${T.panelTop},${T.panelBot})}
.center{position:relative;min-width:0;min-height:0;overflow:hidden;background:${T.cardBg}}
.center svg{width:100%;height:100%;display:block;touch-action:manipulation;max-height:none}

/* ---------- 左栏 ---------- */
.clock .t{font-size:36px;font-weight:700;letter-spacing:1.5px;line-height:1.05;color:${T.textBase};
          font-variant-numeric:tabular-nums}
.clock .d{font-size:12px;color:${T.dimDate};margin-top:3px}
.clock .w{font-size:12px;color:${T.accentSoft};margin-top:7px;display:flex;align-items:center;gap:6px}
.ai{flex:0 1 auto;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:9px;
    padding-right:2px}
.ai-row{display:flex;gap:8px;font-size:12px;line-height:1.5;color:${T.textAi}}
.ai-row .ic{flex:0 0 16px;text-align:center;opacity:.85}
.ai-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;
         font-size:10px;color:${T.dimFoot};min-height:18px}
.ai-refresh{width:22px;height:22px;border-radius:50%;border:1px solid ${T.lineBtn};background:${T.surfaceBtn};
            color:${T.accentSoft};font-size:12px;line-height:1;cursor:pointer;padding:0;
            display:flex;align-items:center;justify-content:center;font-family:inherit}
.ai-refresh:hover{border-color:${T.accentLine};background:${T.surfaceHover}}
.dimv{color:${T.dimFoot};font-weight:400}
.pets{display:flex;flex-direction:column;margin-top:12px}
.petcard{padding:12px;border-radius:12px;background:${T.panelTop};border:1px solid ${T.lineMain}}
.petcard+.petcard{margin-top:10px}
.pc-head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:8px}
.pc-name{font-size:11.5px;font-weight:700;color:${T.textBase}}
.pc-status{font-size:10px;font-weight:600;color:${T.dimFoot}}
.pc-row{display:flex;align-items:baseline;justify-content:space-between;height:22px}
.pc-label{font-size:11px;font-weight:400;color:${T.dimLabel}}
.pc-val{font-size:11px;font-weight:600;color:${T.textBase}}
.pc-val.warn{color:${T.riskAccent}}
.ptl{padding:12px;border-radius:12px;background:${T.panelTop};border:1px solid ${T.lineMain}}
.ptl-head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:6px}
.ptl-name{font-size:12px;font-weight:700;color:${T.textBase}}
.ptl-w{font-size:12px;font-weight:700;color:${T.textBase}}
.ptl-sum{font-size:10.5px;color:${T.dimLabel};margin-bottom:7px;line-height:1.5}
.ptl-svg{width:100%;height:96px;display:block;overflow:visible}
.ptl-cap{font-size:10px;color:${T.dimFoot};height:14px;margin-top:2px}
.ptl-warn{font-size:10.5px;color:${T.riskAccent};font-weight:600;margin-top:8px;line-height:1.5}
.ptl-act{display:flex;gap:8px;margin-top:10px}
.ptl-act button{flex:1;height:34px;border-radius:9px;font-size:12px;font-weight:600;cursor:pointer;
  border:1px solid ${T.lineMain};background:${T.cardBg};color:${T.textBase}}
.ptl-act button:active{opacity:.7}
.vcard{margin-top:10px;padding:12px;border-radius:12px;background:${T.panelTop};border:1px solid ${T.lineMain}}
.vc-head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:8px}
.vc-name{font-size:11.5px;font-weight:700;color:${T.textBase}}
.vc-state{font-size:10px;font-weight:600;color:${T.dimFoot}}
.vc-row{display:flex;align-items:baseline;justify-content:space-between;height:20px}
.vc-row .k{font-size:10.5px;color:${T.dimLabel}}
.vc-row .v{font-size:10.5px;font-weight:600;color:${T.textBase}}
.vc-alert{font-size:10.5px;font-weight:600;color:${T.riskAccent};line-height:1.6}
.vc-hint{font-size:10px;color:${T.dimFoot};margin-top:4px}
.vc-act{display:flex;gap:7px;margin-top:10px}
.vc-act button{flex:1;height:32px;border-radius:8px;font-size:11.5px;font-weight:600;cursor:pointer;
  border:1px solid ${T.lineMain};background:${T.cardBg};color:${T.textBase}}
.vc-act button:disabled{opacity:.35;cursor:not-allowed}
.acd{margin-top:10px;padding:12px;border-radius:12px;background:${T.panelTop};border:1px solid ${T.lineMain}}
.ac-head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:6px}
.ac-name{font-size:11.5px;font-weight:700;color:${T.textBase}}
.ac-mode{font-size:10px;font-weight:600;color:${T.dimFoot}}
.ac-info{font-size:10.5px;color:${T.dimLabel};margin-bottom:9px}
.ac-modes{display:flex;gap:7px}
.ac-modes button{flex:1;height:30px;border-radius:8px;font-size:11.5px;font-weight:600;cursor:pointer;
  border:1px solid ${T.lineMain};background:${T.cardBg};color:${T.textBase}}
.ac-temp{display:flex;align-items:center;gap:8px;margin-top:10px}
.ac-lb{font-size:10.5px;color:${T.dimLabel};flex:0 0 auto;min-width:44px}
.ac-temp button{width:30px;height:30px;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;
  border:1px solid ${T.lineMain};background:${T.cardBg};color:${T.textBase}}
.ac-tv{flex:1;text-align:center;font-size:15px;font-weight:700;color:${T.textBase}}
.ac-row{display:flex;align-items:center;gap:8px;margin-top:8px}
.ac-btns{display:flex;gap:6px;flex:1;flex-wrap:wrap}
.ac-btns button{flex:1;min-width:40px;height:26px;border-radius:7px;font-size:10.5px;font-weight:600;cursor:pointer;
  border:1px solid ${T.lineMain};background:${T.cardBg};color:${T.dimLabel}}
.ac-modes button.on,.ac-btns button.on{background:${T.petFeed};border-color:${T.petFeed};color:${T.cardBg}}
.ac-hint{font-size:10px;color:${T.dimFoot};margin-top:9px;line-height:1.5}
.petrow{display:flex;align-items:center;gap:8px;font-size:11.5px;color:${T.textRow}}
.petrow .pn{color:${T.dimLabel};flex:0 0 auto}
.petrow .pm{color:${T.textVal};margin-left:auto;display:flex;gap:8px}
.petrow .pm .warn{color:${T.warn}}
.vac{display:flex;align-items:center;gap:8px;font-size:11.5px;margin-top:8px;color:${T.textRow}}
.vac .pn{color:${T.dimLabel}}
.vac .pv{color:${T.textVal};margin-left:auto}
.risk-ov{position:absolute;inset:0;z-index:40;display:flex;align-items:center;justify-content:center;
  background:${T.riskScrim}}
.risk-box{width:min(320px,84%);padding:20px 18px 16px;border-radius:14px;background:${T.riskBg};
  border:1px solid ${T.riskBorder};box-shadow:${T.riskShadow};text-align:center}
.risk-ico{font-size:26px;line-height:1;margin-bottom:8px}
.risk-title{font-size:15px;font-weight:700;color:${T.textBase};margin-bottom:6px}
.risk-name{font-size:13px;font-weight:600;color:${T.riskAccent};margin-bottom:10px}
.risk-msg{font-size:12px;line-height:1.6;color:${T.dimLabel};margin-bottom:16px;text-align:left}
.risk-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.risk-btns button{height:40px;border-radius:9px;font-size:13px;font-weight:600;cursor:pointer;
  border:1px solid ${T.lineMain};background:${T.panelTop};color:${T.textBase}}
.risk-btns .risk-yes{background:${T.riskAccent};border-color:${T.riskAccent};color:#fff}
.batchrow{display:grid;grid-template-columns:repeat(auto-fit,minmax(88px,1fr));gap:7px;margin-top:12px}
.batchrow .qbtn{padding:9px 2px;font-size:11px}
.quick{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:7px}
.media{display:flex;align-items:center;gap:6px;margin-top:10px;font-size:11.5px;color:${T.textRow}}
.media .pn{color:${T.dimLabel};flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mbtn{width:30px;height:30px;border-radius:8px;border:1px solid ${T.lineBtn};background:${T.surfaceHover};
      color:${T.textBtn};font-size:12px;line-height:1;cursor:pointer;padding:0;font-family:inherit;
      display:flex;align-items:center;justify-content:center}
.mbtn:hover{border-color:${T.accentLine};background:${T.surfaceHover2}}
.mbtn.off{opacity:.45}
.acph{margin-top:10px;height:42px;display:flex;align-items:center;justify-content:center;
      border:1px dashed ${T.lineDashed};border-radius:9px;color:${T.dimFoot};font-size:11.5px;opacity:.5;
      pointer-events:none}
.stats{display:none}
.srow{display:flex;gap:9px;font-size:11.5px;line-height:1.5}
.srow .k{color:${T.dimFoot};flex:0 0 32px}
.srow .v{color:${T.textRow};flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.srow .v.warn{color:${T.lightOn}}
.quick{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}
.qbtn{display:flex;align-items:center;justify-content:center;gap:5px;padding:9px 4px;
      font-size:11.5px;background:${T.surfaceHover};border:1px solid ${T.lineBtn};border-radius:9px;
      color:${T.textBtn};cursor:pointer;font-family:inherit;white-space:nowrap;overflow:hidden}
.qbtn:hover{background:${T.surfaceHover2};border-color:${T.accentLine}}
.qbtn.act{background:${T.surfaceActive};border-color:${T.accentLine};color:${T.accentPale}}
.alerts{margin-top:12px}
.alert-cap{display:none;align-items:center;gap:7px;padding:8px 12px;border-radius:11px;
           background:${T.warnBtnBg};border:1px solid ${T.lineWarm};color:${T.warmText2};font-size:12px;cursor:pointer}
.alert-cap.on{display:flex}
.alert-cap:hover{border-color:${T.alertCapHover}}
/* 展开态要盖住整个左栏：定位锚点必须是 .left（.alerts 只有胶囊那么高，踩过） */
.alert-list{display:none;position:absolute;left:14px;right:14px;bottom:14px;z-index:12;
            max-height:62%;overflow:auto;background:${T.alertBg};border:1px solid ${T.lineWarm};
            border-radius:12px;padding:10px;box-shadow:0 10px 30px ${T.shadowMenu}}
.alert-list.on{display:block}
.alert-list h4{margin:0 0 8px;font-size:12px;color:${T.warmText2};font-weight:700}
.alert-list .it{font-size:11px;color:${T.alertItemText};padding:4px 0;border-bottom:1px solid ${T.lineWarm2};
                display:flex;justify-content:space-between;gap:8px}
.alert-list .it:last-child{border-bottom:none}

/* ---------- 中栏 ---------- */
.room{fill:${T.roomFill};stroke:${T.lineMain};stroke-width:.6;transition:opacity .3s;cursor:pointer}
.room:hover{fill:${T.lineMain}}
/* 墙不再是一条细线，而是有厚度的填充带 + 一条亮边，看起来像实体墙 */
.wallband{fill:${T.wallBand};stroke:none;pointer-events:none}
.walledge{fill:none;stroke:${T.wallEdge};stroke-width:.9;opacity:.9;pointer-events:none;
          vector-effect:non-scaling-stroke}
/* ---------- 2D 平面层：细墙线（原始设计，不许加厚） ---------- */
.wallline{fill:none;stroke:${T.wallLine};stroke-width:9;stroke-linecap:square;pointer-events:none}
.doorleaf{stroke:${T.wallLine};stroke-width:2.4;stroke-linecap:round;pointer-events:none;opacity:.85}
.doorarc{fill:none;stroke:${T.wallLine};stroke-width:1.1;stroke-dasharray:4 3;pointer-events:none;opacity:.55}
.iso-door{stroke:${T.wallLine};stroke-width:.6}
/* ---------- 2.5D 等距层 ---------- */
.iso-floor{fill:${T.isoFloor};stroke:${T.isoFloorStroke};stroke-width:1;cursor:pointer;transition:fill .18s}
.iso-floor:hover{fill:${T.isoFloorHover}}
/* 立面描边：剪影与内缝同宽（1.0），粗外轮廓会变成"贴纸" */
.iso-face{stroke:${T.isoFaceStroke};stroke-width:1;stroke-linejoin:round;pointer-events:none}
.iso-top{stroke:${T.isoTopStroke};stroke-width:1;stroke-linejoin:round;pointer-events:none}
.iso-furn-top{stroke:${T.isoFaceStroke};stroke-width:1;stroke-linejoin:round;pointer-events:none}
.iso-furn-face{stroke:${T.isoFaceStroke};stroke-width:1;stroke-linejoin:round;pointer-events:none}
.modebar{position:absolute;right:14px;bottom:12px;z-index:8;display:flex;gap:2px;
         background:${T.overlayModeBar};border:1px solid ${T.lineBtn};border-radius:9px;padding:3px;
         backdrop-filter:blur(6px)}
.modebar button{border:none;background:transparent;color:${T.dimModeBar};font-size:11px;padding:4px 11px;
                border-radius:6px;cursor:pointer;font-family:inherit;line-height:1}
.modebar button.on{background:${T.surfaceHover2};color:${T.textBtn}}
.roomname{fill:${T.dimRoomName};font-size:13px;font-weight:600;text-anchor:middle;
          dominant-baseline:central;pointer-events:none;letter-spacing:.5px}

.pin{cursor:pointer}
.pin.no{cursor:default}
.pin .ring{fill:none;stroke:${T.lineRing};stroke-width:1.5;vector-effect:non-scaling-stroke}
.pin .body{stroke:${T.pinHalo};stroke-width:1.4;vector-effect:non-scaling-stroke}
/* 可调光灯的旋钮环：单独成类，不吃 .body 的描边规则（踩过：被覆盖成细线） */
.pin .dial{fill:none}
.pin .tick{stroke:${T.pinHalo};stroke-width:1.6;vector-effect:non-scaling-stroke;stroke-linecap:round}
/* 双层光晕：只在"开"的时候出现，灭的不发光 */
.pin .glow{stroke:none;opacity:0;transition:opacity .25s;pointer-events:none}
.pin .slash{stroke:${T.dimPin};stroke-width:2;vector-effect:non-scaling-stroke;display:none}
.pin text{font-size:12px;font-weight:700;fill:${T.pinHalo};text-anchor:middle;
          dominant-baseline:central;pointer-events:none}

.pin.on .glow.g2{opacity:.16}
.pin.on .glow.g1{opacity:.28}
.pin.on .ring{stroke:${T.ringOn}}
.pin.off .body{opacity:.30}
/* 空调图钉：多元素 + 常被关掉，若也压到 30% 会几乎看不见，单独提到 0.8 */
.pin.climate.off .body{opacity:.95}
.pin.climate .body{stroke-width:1.6}
.pin.off .dial{opacity:.32}
.pin.off .tick{opacity:.30}
.pin.off text{opacity:.55}
.pin.sensor .body{opacity:.85}
.pin.sensor .ring{stroke:${T.lineBtn}}
.pin.unavail .body{fill:${T.unavailFill};opacity:.55}
.pin.unavail .dial{stroke:${T.unavailFill};opacity:.55}
.pin.unavail .ring{stroke:${T.dimUnavail};stroke-dasharray:3 3}
.pin.unavail .slash{display:block}
.pin.unavail text{opacity:.4}
.pin.dimmed .body{opacity:1}

.badge{cursor:pointer}
.badge rect{fill:${T.overlayBadge};stroke:${T.lineBadge};stroke-width:1}
.badge:hover rect{stroke:${T.accentLine};fill:${T.overlayBadgeHover}}
.badge .b-name{font-size:10px;font-weight:700;fill:${T.textBadgeName};text-anchor:middle;
               dominant-baseline:central;pointer-events:none}
.badge .b-stats{font-size:8.5px;font-weight:600;fill:${T.dimStats};text-anchor:middle;
                dominant-baseline:central;pointer-events:none}
/* 徽标右侧的一键开关：只有"该房间恰好一盏可控灯"时才出现 */
.badge .pwr{display:none;cursor:pointer}
.badge .pwr.on{display:block}
.badge .pwr circle{fill:${T.surfaceHover};stroke:${T.linePwr};stroke-width:1}
.badge .pwr text{font-size:11px;fill:${T.dimDate};text-anchor:middle;
                 dominant-baseline:central;pointer-events:none}
.badge .pwr.lit circle{fill:${T.lightOn};stroke:${T.lightOnStroke}}
.badge .pwr.lit text{fill:${T.onLightText}}
.badge .pwr.dead{opacity:.35;cursor:not-allowed}
.badge .alertdot{fill:${T.warn};stroke:${T.cardBg};stroke-width:1.6;pointer-events:none}
.badge .alertdot.bad{fill:${T.danger}}
ha-card.night{filter:${T.nightFilter}}

.back{position:absolute;left:14px;top:12px;z-index:8;display:none;align-items:center;gap:6px;
      background:${T.overlayModeBar};border:1px solid ${T.lineBtn};border-radius:9px;
      padding:6px 12px 6px 9px;color:${T.textBtn};font-size:12px;cursor:pointer;
      font-family:inherit;backdrop-filter:blur(6px)}
.back:hover{border-color:${T.accentLine};background:${T.surfaceHover}}
.back .arw{font-size:15px;line-height:1;color:${T.accentBright}}

.hud{position:absolute;right:12px;top:12px;font-size:11px;color:${T.dimStats};pointer-events:none;
     background:${T.overlayHud};border:1px solid ${T.lineMain};border-radius:8px;
     padding:3px 9px;backdrop-filter:blur(4px)}

.bubble{position:absolute;z-index:9;background:${T.overlayBubble};border:1px solid ${T.accentLine};
        border-radius:8px;padding:5px 10px;font-size:12px;color:${T.accentPale};white-space:nowrap;
        transform:translate(-50%,-140%);pointer-events:none;display:none}
.bubble b{color:${T.bubbleStrong};font-weight:700}

.menu{position:absolute;z-index:9;background:${T.surfaceMenu};border:1px solid ${T.accentLine};
      border-radius:10px;padding:6px;display:flex;flex-direction:column;gap:4px;
      box-shadow:0 8px 24px ${T.shadowSoft}}
.menu button{background:${T.surfaceHover};color:${T.textBtn};border:1px solid ${T.lineBtn};border-radius:7px;
             padding:7px 12px;font-size:12px;cursor:pointer;text-align:left;
             font-family:inherit;white-space:nowrap}
.menu button:hover{background:${T.surfaceHover2};border-color:${T.accentLine}}
.menu button .dot{display:inline-block;width:7px;height:7px;border-radius:50%;
                  margin-right:7px;vertical-align:middle}

/* ---------- 右栏 ---------- */
.scene-ov{position:absolute;inset:0;z-index:41;display:flex;align-items:center;justify-content:center;
  background:${T.riskScrim}}
.scene-box{width:min(360px,88%);border-radius:14px;background:${T.riskBg};border:1px solid ${T.riskBorder};
  box-shadow:${T.riskShadow};padding:16px 16px 13px}
.scene-hd{display:flex;align-items:center;justify-content:space-between;font-size:14px;font-weight:700;
  color:${T.textBase};margin-bottom:11px}
.scene-x{cursor:pointer;color:${T.dimLabel};font-size:13px;padding:0 3px}
.scene-rows{display:flex;flex-direction:column;gap:2px}
.scene-row{display:flex;gap:9px;align-items:flex-start;font-size:12px;line-height:1.55;padding:4px 0;
  color:${T.dimLabel}}
.scene-row .st{width:14px;flex:none;text-align:center;font-weight:700;color:${T.dimFoot}}
.scene-row.ok .st{color:${T.textBase}}
.scene-row.ok .tx{color:${T.textBase}}
.scene-row.bad .st{color:${T.riskAccent}}
.scene-row.bad .tx{color:${T.riskAccent}}
.scene-row .ac{margin-left:auto;flex:none;font-size:11px;color:${T.dimFoot}}
.scene-row.skip{opacity:.55}
.scene-row.skip .ac{color:${T.dimFoot}}
.scene-row.ok .st{color:${T.okAccent}}
.scene-row.ok .ac{color:${T.okAccent}}
.scene-row.wait .st{animation:scenepulse 1.1s ease-in-out infinite}
@keyframes scenepulse{0%,100%{opacity:.35}50%{opacity:1}}

.scene-ft{margin-top:10px;padding-top:9px;border-top:1px solid ${T.lineMain};font-size:11px;
  color:${T.dimLabel};text-align:center}
.scene-ft.bad{color:${T.riskAccent}}
.scenes{display:flex;flex-direction:column;gap:8px}
.scene{display:flex;align-items:center;gap:10px;height:56px;padding:0 14px;border-radius:12px;
       background:${T.surfaceBtn};border:1px solid ${T.lineScene};color:${T.textBadgeName};font-size:14px;font-weight:600;
       cursor:pointer;font-family:inherit;text-align:left;transition:.15s}
.scene .ic{font-size:18px;line-height:1}
.scene:hover{border-color:${T.accentLine};background:${T.surfaceSceneHover}}
.scene.dis{opacity:.34;cursor:not-allowed}
.sec-title{font-size:11px;color:${T.dimDate};margin:2px 0 0;letter-spacing:.3px}
.devlist{flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:6px;
         padding-right:2px}
.empty{font-size:11px;color:${T.dimFoot};padding:10px 2px}
.dev{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:9px;
     background:${T.surfaceCap};border:1px solid ${T.lineCap}}
.dev .nm{flex:1;min-width:0;font-size:12px;white-space:nowrap;overflow:hidden;
         text-overflow:ellipsis;color:${T.textEllipsis}}
.dev .st{font-size:11px;color:${T.dimModeBar};font-variant-numeric:tabular-nums}
.dev button{border:1px solid ${T.lineBtn};background:${T.surfaceHover};color:${T.textBtn};border-radius:7px;
            padding:4px 10px;font-size:11px;cursor:pointer;font-family:inherit}
.dev button:hover{border-color:${T.accentLine};background:${T.surfaceHover2}}

/* 亮度/色温块（仅房间视图、且该房间有可调光灯时出现） */
.dims{display:none;flex-direction:column;gap:8px;padding:10px;border-radius:11px;
      background:${T.surfaceCap};border:1px solid ${T.lineCap}}
.dims.on{display:flex}
.dims .d-row{display:flex;flex-direction:column;gap:5px}
.dims .d-head{display:flex;justify-content:space-between;gap:8px;font-size:11px;color:${T.textDimRow}}
.dims .d-head b{color:${T.textBase};font-weight:600;font-variant-numeric:tabular-nums}
.dims input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:14px;
                         background:transparent;cursor:pointer;margin:0}
.dims input[type=range]::-webkit-slider-runnable-track{height:4px;border-radius:2px;
                         background:linear-gradient(90deg,${T.rangeTrack},${T.rangeFill})}
.dims input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;
                         border-radius:50%;background:${T.lightOn};margin-top:-4px;
                         border:1px solid ${T.pinHalo}}
.dims input[type=range].kel::-webkit-slider-thumb{background:${T.accentSoft}}
.dims input[type=range]::-moz-range-track{height:4px;border-radius:2px;background:${T.rangeTrack}}
.dims input[type=range]::-moz-range-thumb{width:12px;height:12px;border:none;border-radius:50%;
                         background:${T.lightOn}}

/* ---------- 窄屏 ---------- */
.topbar{display:none;position:absolute;left:12px;top:10px;z-index:8;gap:9px;align-items:baseline;
        font-size:12px;color:${T.textHud};pointer-events:none}
.topbar b{font-size:17px;color:${T.textBase};font-variant-numeric:tabular-nums}
@media (min-width:1000px) and (max-width:1279px){
  .shell{grid-template-columns:236px minmax(0,1fr) 272px}
  .clock .t{font-size:30px}
  .scene{height:48px;font-size:13px;padding:0 12px}
  .left{padding:14px 11px}
  .right{padding:12px 10px}
}
@media (max-width:999px){
  .shell{grid-template-columns:minmax(0,1fr);height:min(66vh,560px)}
  .left,.right{display:none}
  .topbar{display:flex}
  .hud{top:auto;bottom:10px}
}
`;

class SpaceMapCard extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:"open"});
    this._built = false;
    this._pins = new Map();
    this._badges = new Map();
    this._rooms = [];
    this._view = {type:"plan"};
    this._anim = null;
    this._menu = null;
    this._dim = null;
    this._press = null;
    this._suppressClick = false;
    this._alertOpen = false;
    this._dimRows = new Map();
    this._dimKey = "";
    // 视角：2d（细墙线正交俯视）/ 2.5d（等距挤出 + 光影）。默认 2D，localStorage 记忆
    let saved = "2d";
    try { saved = localStorage.getItem("space-map-mode") || "2d"; } catch (e) {}
    this._mode = saved === "2.5d" ? "2.5d" : "2d";
    this._planMode = this._mode;

    // 主题：dark / light。默认深色，localStorage 记忆。切换后整卡重建。
    let th = "dark";
    try { th = localStorage.getItem("space-map-theme") || "dark"; } catch (e) {}
    this._theme = (th === "light") ? "light" : "dark";
    T = THEMES[this._theme];
  }

  setConfig(config){
    this._config = config || {};
    this._built = false;
    if (this._hass) this._render();
  }

  set hass(hass){
    this._hass = hass;
    if (!this._built) this._render();
    else this._sync();
  }

  getCardSize(){ return 10; }

  getGridOptions(){
    return { columns: "full", rows: 8, min_columns: 6, min_rows: 4 };
  }

  connectedCallback(){
    if (this._timer) clearInterval(this._timer);
    this._timer = setInterval(() => this._syncChrome(), 20000);
  }

  disconnectedCallback(){
    if (this._timer) { clearInterval(this._timer); this._timer = null; }
  }

  /* ------------------------------------------------------------------ 构建 */
  _render(){
    if (!this._hass || this._built) return;
    this._built = true;

    const root = this.shadowRoot;
    root.innerHTML = `<style>${cssFor(T)}</style>
      <ha-card><div class="shell">
        <aside class="left" id="left">
          <div class="clock">
            <div class="t" id="c-time">--:--</div>
            <div class="d" id="c-date"></div>
            <div class="w" id="c-wx"></div>
          </div>
          <div class="ai" id="ai"></div>
          <div class="ai-foot">
            <span id="ai-meta"></span>
            <button class="ai-refresh" id="ai-refresh" title="刷新简报">↻</button>
          </div>
          <div class="pets" id="pets"></div>
              <div class="alerts" id="alerts">
            <div class="alert-cap" id="alert-cap"></div>
            <div class="alert-list" id="alert-list"></div>
          </div>
        </aside>

        <div class="center" id="center">
          <div class="topbar" id="topbar"><b id="tb-time">--:--</b><span id="tb-wx"></span></div>
          <div class="modebar" id="modetoggle">
            <button data-m="2d">平面</button><button data-m="2.5d">立体</button>
            <button id="themebtn" title="切换深浅主题">${this._theme === "light" ? "🌙" : "☀"}</button>
          </div>
          <div class="back" id="back"><span class="arw">‹</span><span>返回</span></div>
          <div class="hud" id="hud"></div>
          <div class="bubble" id="bubble"></div>
          <svg id="svg" viewBox="0 0 ${DATA.canvas[0]} ${DATA.canvas[1]}"
               preserveAspectRatio="xMidYMid meet"></svg>
        </div>

        <aside class="right" id="right">
          <div class="scenes" id="scenes"></div>
          <div class="batchrow" id="batch"></div>
          <div class="quick" id="quicks"></div>
          <div class="accard" id="accard"></div>
      <div class="vaccard" id="vaccard"></div>
      <div class="media" id="media"></div>
              <div class="dims" id="dims"></div>
          <div class="sec-title" id="sec-title">点中间的房间查看设备</div>
          <div class="devlist" id="devlist"></div>
        </aside>
      </div></ha-card>`;

    this._svg = root.getElementById("svg");
    this._hud = root.getElementById("hud");
    this._bubble = root.getElementById("bubble");
    this._wrap = root.getElementById("center");

    // ---- 材质与光影：一次性注入 SVG defs ----
    const defs = document.createElementNS(NS, "defs");
    defs.innerHTML = `
      <radialGradient id="roomGrad" cx="50%" cy="42%" r="78%">
        <stop offset="0%" stop-color="${T.roomGradIn}"/>
        <stop offset="68%" stop-color="${T.isoFloor}"/>
        <stop offset="100%" stop-color="${T.roomGradOut}"/>
      </radialGradient>
      <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${T.wallGradTop}"/>
        <stop offset="42%" stop-color="${T.wallGradMid}"/>
        <stop offset="100%" stop-color="${T.wallGradBot}"/>
      </linearGradient>
      <filter id="softShadow" x="-35%" y="-35%" width="170%" height="170%">
        <feGaussianBlur stdDeviation="3.4"/>
      </filter>
      <filter id="glowBlur" x="-150%" y="-150%" width="400%" height="400%">
        <feGaussianBlur stdDeviation="2.6"/>
      </filter>
      <radialGradient id="lampPool" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stop-color="${T.lamp1}" stop-opacity="${T.lampOp1}"/>
        <stop offset="38%"  stop-color="${T.lamp2}" stop-opacity="${T.lampOp2}"/>
        <stop offset="72%"  stop-color="${T.lamp3}" stop-opacity="${T.lampOp3}"/>
        <stop offset="100%" stop-color="${T.lamp3}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="wallGlass" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="${T.glass1}" stop-opacity=".92"/>
        <stop offset="26%"  stop-color="${T.glass2}" stop-opacity=".88"/>
        <stop offset="68%"  stop-color="${T.glass3}" stop-opacity=".86"/>
        <stop offset="100%" stop-color="${T.glass4}" stop-opacity=".90"/>
      </linearGradient>
      <filter id="grain" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="11" result="n"/>
        <feColorMatrix in="n" type="saturate" values="0"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.055"/></feComponentTransfer>
      </filter>
      <clipPath id="roomsClip"></clipPath>`;
    // 房间联合剪裁：灯光不能穿墙漏到屋外
    // 房间联合剪裁：用 DOM 构建，避免字符串拼引号（拼坏过一次，语法直接崩）
    const clipEl = defs.querySelector("#roomsClip");
    if (clipEl){
      for (const r of DATA.rooms){
        const cp = document.createElementNS(NS, "polygon");
        cp.setAttribute("points", r.points.map(q => q.join(",")).join(" "));
        clipEl.appendChild(cp);
      }
    }
    this._svg.appendChild(defs);

    // 房间裁剪：灯光必须被墙裁住，否则光会透到隔壁和户外（物理上不可能）
    this._roomClip = new Map();
    DATA.rooms.forEach((r, i) => {
      const cp = document.createElementNS(NS, "clipPath");
      cp.setAttribute("id", "rclip-" + i);
      cp.setAttribute("clipPathUnits", "userSpaceOnUse");
      const poly = document.createElementNS(NS, "polygon");
      poly.setAttribute("points", r.points.map(q => q.join(",")).join(" "));
      cp.appendChild(poly);
      defs.appendChild(cp);
      this._roomClip.set(r.name, "rclip-" + i);
    });

    // 暗角渐变：房子中间亮、四周沉下去
    const vigG = document.createElementNS(NS, "radialGradient");
    vigG.setAttribute("id", "vigGrad");
    vigG.setAttribute("cx", "50%");
    vigG.setAttribute("cy", "46%");
    vigG.setAttribute("r", "74%");
    vigG.innerHTML = '';
    const vS1 = document.createElementNS(NS, "stop");
    vS1.setAttribute("offset", "55%");
    vS1.setAttribute("stop-color", T.vigEdge);
    vS1.setAttribute("stop-opacity", "0");
    const vS2 = document.createElementNS(NS, "stop");
    vS2.setAttribute("offset", "100%");
    vS2.setAttribute("stop-color", T.vigEdge);
    vS2.setAttribute("stop-opacity", T.vigOp);
    vigG.appendChild(vS1);
    vigG.appendChild(vS2);
    defs.appendChild(vigG);

    // ---- 两层几何：2D 平面（细墙线） / 2.5D 等距（挤出 + 光影） ----
    this._gFlat = document.createElementNS(NS, "g");
    this._gFlat.setAttribute("id", "gFlat");
    this._svg.appendChild(this._gFlat);

    this._gIso = document.createElementNS(NS, "g");
    this._gIso.setAttribute("id", "gIso");
    this._svg.appendChild(this._gIso);

    this._buildFlat();
    this._buildIso();

    this._buildBadges();
    this._buildPins();

    const backEl = root.getElementById("back");
    if (backEl) backEl.addEventListener("click", () => this._backToPlan());
    const centerEl = root.getElementById("center");
    if (centerEl) centerEl.addEventListener("click", () => this._closeMenu());

    this._buildChrome();

    const modeBar = root.getElementById("modetoggle");
    if (modeBar){
      for (const mb of modeBar.querySelectorAll("button")){
        mb.addEventListener("click", ev => {
          ev.stopPropagation();
          if (mb.id === "themebtn"){ this._setTheme(this._theme === "dark" ? "light" : "dark"); return; }
          this._setMode(mb.dataset.m);
        });
      }
    }
    this._applyView();
    this._sync();
  }

  _buildChrome(){
    const root = this.shadowRoot;

    const refresh = root.getElementById("ai-refresh");
    if (refresh) refresh.addEventListener("click", () => {
      if (this._hass.states[DATA.aiScript]) {
        this._hass.callService("script", "turn_on", { entity_id: DATA.aiScript });
      }
    });

    const cap = root.getElementById("alert-cap");
    if (cap) cap.addEventListener("click", () => {
      this._alertOpen = !this._alertOpen;
      const list = root.getElementById("alert-list");
      if (list) list.classList.toggle("on", this._alertOpen);
    });

    // 场景按钮
    const box = root.getElementById("scenes");
    box.innerHTML = "";
    for (const s of (DATA.scenes || [])){
      const b = document.createElement("button");
      b.className = "scene";
      b.innerHTML = `<span class="ic">${s.icon}</span><span>${s.name}</span>`;
      b.addEventListener("click", () => this._runScene(s, b));
      box.appendChild(b);
    }
  }

  _runScene(s, btn){
    const st = this._hass.states[s.entity];
    if (!st) return;
    if (this._sceneBusy) return;
    this._sceneBusy = true;

    const rows = (s.steps || []).map(x => ({
      label: x.label || "", kind: x.kind || "light",
      check: x.check || [], cond: x.cond || null,
      st: "wait", actual: ""
    }));
    const ov = this._openSceneModal(s, rows);

    const dom = s.entity.split(".")[0];
    this._hass.callService(dom, "turn_on", { entity_id: s.entity });
    if (btn && btn.animate) btn.animate([{opacity:.5},{opacity:1}], {duration:220});

    // 400ms 轮询；8s 未达标判失败；全部有结果后 2.5s 自动关闭
    const t0 = Date.now();
    const tick = () => {
      if (!ov.isConnected){ this._stopSceneTimers(); return; }
      const el = Date.now() - t0;
      let resolved = 0;
      rows.forEach((r, i2) => {
        if (r.st === "ok" || r.st === "fail" || r.st === "skip"){ resolved++; return; }
        if (r.cond === "day" && this._stateOf("sun.sun") !== "above_horizon"){
          r.st = "skip"; r.actual = "夜间不执行";
          this._paintSceneRow(ov, i2, r); resolved++; return;
        }
        const res = this._checkRow(r);
        if (res.ok){ r.st = "ok"; resolved++; }
        else if (el > 8000){ r.st = "fail"; }
        r.actual = res.actual;
        this._paintSceneRow(ov, i2, r);
      });
      this._paintSceneFoot(ov, rows);
      if (resolved === rows.length){
        this._stopSceneTimers();
        // 注意：_stopSceneTimers 会把数组置 null，这里必须重新建一个，
        // 否则 push 会抛异常，导致"全部完成后自动关闭"永远不触发（踩过）。
        this._sceneTimers = [];
        this._sceneTimers.push(setTimeout(() => this._fadeScene(ov), 2500));
      }
    };
    this._sceneTimers = [];
    this._sceneTimers.push(setInterval(tick, 400));
    tick();
  }

  /* 逐条核对：一行可挂多个实体，全部达标才算 ok */
  _checkRow(r){
    let ok = true, actual = "";
    for (const c of r.check){
      const st = this._hass.states[c.e];
      if (!st){ ok = false; actual = "实体不存在"; continue; }
      if (c.on === true){
        if (st.state !== "on"){ ok = false; actual = "未开"; continue; }
        if (typeof c.pct === "number"){
          const b = st.attributes.brightness;
          const p = (typeof b === "number") ? Math.round(b / 255 * 100) : null;
          if (p === null || Math.abs(p - c.pct) > 8){ ok = false; actual = (p === null ? "无亮度" : p + "%"); }
        }
        if (typeof c.kelvin === "number"){
          const k = st.attributes.color_temp_kelvin;
          if (typeof k !== "number" || Math.abs(k - c.kelvin) > 250){ ok = false; actual = (k || "?") + "K"; }
        }
      } else if (c.on === false){
        if (st.state !== "off"){ ok = false; actual = "仍开"; }
      }
      if (c.state){
        if (st.state === "opening" || st.state === "closing"){ ok = false; actual = "进行中"; }
        else if (c.e.indexOf("cover.") === 0){
          // 窗帘按【物理位置】判定，不能看 open/closed 字面（这两个是反向的）
          const phys = this._coverPhys(c.e);
          if (phys !== c.state){
            ok = false;
            actual = phys === "open" ? "打开" : phys === "closed" ? "关闭" : (phys || "未知");
          }
        }
        else if (st.state !== c.state){ ok = false; actual = st.state; }
      }
    }
    return { ok, actual };
  }

  _openSceneModal(s, rows){
    this._closeSceneModal();
    const ov = document.createElement("div");
    ov.className = "scene-ov";
    const html = rows.map((r, i) =>
      '<div class="scene-row wait" data-i="' + i + '"><span class="st">⏳</span>' +
      '<span class="tx">' + this._esc(r.label) + '</span>' +
      '<span class="ac"></span></div>').join("");
    ov.innerHTML =
      '<div class="scene-box">' +
        '<div class="scene-hd"><span>' + s.icon + " " + this._esc(s.name) + '</span>' +
          '<span class="scene-x">✕</span></div>' +
        '<div class="scene-rows">' + html + '</div>' +
        '<div class="scene-ft">执行中…</div>' +
      '</div>';
    ov.querySelector(".scene-x").onclick = ev => { ev.stopPropagation(); this._closeSceneModal(); };
    ov.onclick = ev => { if (ev.target === ov) this._closeSceneModal(); };
    this._wrap.appendChild(ov);
    return ov;
  }

  _paintSceneRow(ov, i, r){
    const row = ov.querySelector('.scene-row[data-i="' + i + '"]');
    if (!row) return;
    row.classList.remove("wait", "ok", "bad", "skip");
    const ic = row.querySelector(".st"), ac = row.querySelector(".ac");
    if (r.st === "ok"){ row.classList.add("ok"); ic.textContent = "✓"; ac.textContent = ""; }
    else if (r.st === "skip"){ row.classList.add("skip"); ic.textContent = "–";
      ac.textContent = r.actual || "跳过"; }
    else if (r.st === "fail"){ row.classList.add("bad"); ic.textContent = "✕";
      ac.textContent = r.actual ? "实际 " + r.actual : ""; }
    else { row.classList.add("wait"); ic.textContent = "⏳";
      ac.textContent = r.actual || ""; }
  }

  _paintSceneFoot(ov, rows){
    const ft = ov.querySelector(".scene-ft");
    if (!ft) return;
    const done = rows.filter(r => r.st === "ok" || r.st === "skip").length;
    const bad = rows.filter(r => r.st === "fail").length;
    ft.classList.toggle("bad", bad > 0);
    ft.textContent = done + " / " + rows.length + " 已完成" + (bad ? " \u00b7 " + bad + " 项未到位" : "");
  }

  _fadeScene(ov){
    if (!ov || !ov.isConnected) return;
    ov.style.transition = "opacity .35s ease";
    ov.style.opacity = "0";
    this._sceneTimers.push(setTimeout(() => this._closeSceneModal(), 360));
  }

  _stopSceneTimers(){
    if (!this._sceneTimers) return;
    for (const t of this._sceneTimers){ clearInterval(t); clearTimeout(t); }
    this._sceneTimers = null;
  }

  _closeSceneModal(){
    this._stopSceneTimers();
    const old = this._wrap && this._wrap.querySelector(".scene-ov");
    if (old) old.remove();
    this._sceneBusy = false;
  }

  /* ------------------------------------------------------------------ 图钉 */
  _pinType(d){
    if (Array.isArray(d.gangs) && d.gangs.length >= 2) return "multi";
    // 设备类型本身是只读的（传感器/场景按键/网关），即使挂着"免打扰"这类设置开关，
    // 也不该画成可点开关 —— 扫地机、猫厕所、喂食器都踩过这条
    const k = d.kind || "";
    if (k === "sensor" || k === "binary_sensor" || k === "scene" || k === "gateway") return "sensor";
    const c = this._controlsOf(d);
    if (!c.length) return "sensor";
    const dom = c[0].domain;
    if (dom === "cover") return "cover";
    if (dom === "climate") return "climate";
    // 扫地机/媒体这类没有"开/关"语义的，按只读处理（菱形，不响应点击）
    if (dom === "vacuum" || dom === "media_player") return "sensor";
    if (dom === "light"){
      const a = this._attrsOf(c[0].entity_id);
      const modes = a.supported_color_modes || [];
      const dim = (typeof a.brightness === "number") ||
                  (modes.length > 0 && !(modes.length === 1 && modes[0] === "onoff"));
      return dim ? "dimmable" : "onoff";
    }
    return "onoff";
  }

  _buildBadges(){
    for (const r of DATA.rooms){
      const g = document.createElementNS(NS, "g");
      g.setAttribute("class", "badge");
      g.setAttribute("transform", `translate(${r.label[0]},${r.label[1]})`);

      const rect = document.createElementNS(NS, "rect");
      rect.setAttribute("rx", "9");
      rect.setAttribute("height", String(BADGE_H));
      rect.setAttribute("y", String(-BADGE_H / 2));
      rect.setAttribute("x", "-44");
      rect.setAttribute("width", "88");

      const name = document.createElementNS(NS, "text");
      name.setAttribute("class", "b-name");
      name.setAttribute("y", "-7");
      name.textContent = r.name;

      const stats = document.createElementNS(NS, "text");
      stats.setAttribute("class", "b-stats");
      stats.setAttribute("y", "7.5");

      g.appendChild(rect); g.appendChild(name); g.appendChild(stats);

      // 一键开关：只有"该房间恰好一盏可控灯"时才出现（0 盏没得开，多盏必须进去选）
      const pwr = document.createElementNS(NS, "g");
      pwr.setAttribute("class", "pwr");
      // 不可见热区：视觉按钮约 26px，热区做到 44px 直径（原则 3）。
      // 必须用透明填充而不是 fill:none —— none 收不到点击。
      const pwrHit = document.createElementNS(NS, "circle");
      pwrHit.setAttribute("r", "22");
      pwrHit.setAttribute("cy", "0");
      // 用内联样式而不是属性/CSS 类：样式表里 .badge .pwr circle 会覆盖 presentation 属性，
      // 之前因此把透明热区染成了可见大圆；内联 style 优先级高于样式表，且被重写后不易丢。
      pwrHit.setAttribute("pointer-events", "all");
      // 用 !important 内联：样式表里 `.badge .pwr.lit circle{fill:…}` 会把普通内联样式压过去，
      // 于是这个不可见热区被染成一个可见大圆，把徽标撑破（用户反馈"off 凸出来"就是这个）。
      pwrHit.style.setProperty("fill", "none", "important");
      pwrHit.style.setProperty("stroke", "none", "important");
      pwrHit.setAttribute("aria-hidden", "true");
      const pwrC = document.createElementNS(NS, "circle");
      pwrC.setAttribute("r", String((BADGE_H * 0.52) / 2));
      pwrC.setAttribute("cy", "0");
      const pwrT = document.createElementNS(NS, "text");
      pwrT.textContent = "⏻";
      pwr.appendChild(pwrHit); pwr.appendChild(pwrC); pwr.appendChild(pwrT);
      g.appendChild(pwr);

      // 告警角点：门/窗开着（琥珀）或设备离线（红）。落在房间上 = 空间优先。
      const alertDot = document.createElementNS(NS, "circle");
      alertDot.setAttribute("class", "alertdot");
      alertDot.setAttribute("r", "4.2");
      alertDot.style.display = "none";
      g.appendChild(alertDot);

      const entry = {el:g, rect, name, stats, def:r, w:88, key:"", pwr, pwrC, light:null, alertDot};

      pwr.addEventListener("click", ev => {
        ev.stopPropagation();
        if (!entry.light) return;
        const st = this._stateOf(entry.light);
        if (st === "unavailable" || st === "unknown") return;
        this._hass.callService("light", "toggle", { entity_id: entry.light });
      });

      g.addEventListener("click", ev => { ev.stopPropagation(); this.openRoom(r.name); });
      this._svg.appendChild(g);
      this._badges.set(r.name, entry);
    }
  }

  _buildPins(){
    for (const d of DATA.devices){
      const type = this._pinType(d);
      const multi = type === "multi";
      const r = multi ? BASE_R_MULTI : BASE_R;
      const color = DATA.colors[d.kind] || T.dimPin;

      const g = document.createElementNS(NS, "g");
      g.setAttribute("class", "pin" + (type === "sensor" || type === "cover" ? "" : ""));
      g.setAttribute("transform", `translate(${d.x},${d.y})`);
      if (type === "sensor") g.classList.add("no");
      if (type === "climate") g.classList.add("climate");

      // 双层光晕：亮的时候才有，灭的时候不发光（原来是一层 halo，太弱看不出"亮着"）
      const glow2 = document.createElementNS(NS, "circle");
      glow2.setAttribute("r", String(r * 2.4));
      glow2.setAttribute("class", "glow g2");
      glow2.setAttribute("fill", color);
      g.appendChild(glow2);

      const glow1 = document.createElementNS(NS, "circle");
      glow1.setAttribute("r", String(r * 1.7));
      glow1.setAttribute("class", "glow g1");
      glow1.setAttribute("fill", color);
      g.appendChild(glow1);

      if (type !== "sensor"){
        const ring = document.createElementNS(NS, "circle");
        ring.setAttribute("r", r + 4); ring.setAttribute("class", "ring");
        g.appendChild(ring);
      }

      if (multi){
        const left = document.createElementNS(NS, "path");
        left.setAttribute("d", `M0,${-r} A${r},${r} 0 0 0 0,${r} Z`);
        left.setAttribute("fill", color); left.setAttribute("class", "body");
        const right = document.createElementNS(NS, "path");
        right.setAttribute("d", `M0,${-r} A${r},${r} 0 0 1 0,${r} Z`);
        right.setAttribute("fill", color); right.setAttribute("class", "body");
        right.setAttribute("opacity", "0.55");
        const div = document.createElementNS(NS, "line");
        div.setAttribute("x1", 0); div.setAttribute("y1", -r);
        div.setAttribute("x2", 0); div.setAttribute("y2", r);
        div.setAttribute("stroke", T.pinHalo); div.setAttribute("stroke-width", "1.6");
        g.appendChild(left); g.appendChild(right); g.appendChild(div);

      } else if (type === "sensor"){
        const half = r * 0.80;
        const dia = document.createElementNS(NS, "path");
        dia.setAttribute("d", `M0,${-half} L${half},0 L0,${half} L${-half},0 Z`);
        dia.setAttribute("fill", color);
        dia.setAttribute("class", "body");
        g.appendChild(dia);

      } else if (type === "cover"){
        // 横向双条：像拉开的窗帘
        for (const dy of [-r * 0.42, r * 0.42]){
          const bar = document.createElementNS(NS, "rect");
          bar.setAttribute("x", -r * 0.92); bar.setAttribute("y", dy - r * 0.28);
          bar.setAttribute("width", r * 1.84); bar.setAttribute("height", r * 0.56);
          bar.setAttribute("rx", r * 0.28);
          bar.setAttribute("fill", color); bar.setAttribute("class", "body");
          g.appendChild(bar);
        }

      } else if (type === "climate"){
        // 壁挂式内机：横向圆角矩形 + 下方两道风向波纹
        // 视觉尺寸与灯图钉对齐（灯是半径 r 的实心圆，这里整体放大 1.12 倍）
        const K = 1.12;
        const box = document.createElementNS(NS, "rect");
        box.setAttribute("x", -r * 1.05 * K); box.setAttribute("y", -r * 0.74 * K);
        box.setAttribute("width", r * 2.1 * K); box.setAttribute("height", r * 0.78 * K);
        box.setAttribute("rx", r * 0.22);
        box.setAttribute("fill", color); box.setAttribute("class", "body");
        g.appendChild(box);
        [0.32, 0.74].forEach((yy, idx) => {
          const wave = document.createElementNS(NS, "path");
          const y0 = r * yy * K;
          wave.setAttribute("d", `M${-r * 0.8 * K},${y0} q${r * 0.4 * K},${-r * 0.26} ${r * 0.8 * K},0 q${r * 0.4 * K},${r * 0.26} ${r * 0.8 * K},0`);
          wave.setAttribute("fill", "none");
          wave.setAttribute("stroke", color);
          wave.setAttribute("stroke-width", String(r * 0.18));
          wave.setAttribute("stroke-linecap", "round");
          wave.setAttribute("opacity", idx === 0 ? "1" : "0.85");
          g.appendChild(wave);
        });

      } else if (type === "dimmable"){
        // 旋钮感：一圈厚环 + 中心实心 + 顶部刻度
        const ring = document.createElementNS(NS, "circle");
        ring.setAttribute("r", r * 0.92);
        ring.setAttribute("class", "dial");
        ring.setAttribute("stroke", color);
        ring.setAttribute("stroke-width", String(r * 0.34));
        g.appendChild(ring);

        const core = document.createElementNS(NS, "circle");
        core.setAttribute("r", r * 0.34);
        core.setAttribute("fill", color);
        g.appendChild(core);

        const tick = document.createElementNS(NS, "line");
        tick.setAttribute("x1", 0); tick.setAttribute("y1", -r * 0.98);
        tick.setAttribute("x2", 0); tick.setAttribute("y2", -r * 0.70);
        tick.setAttribute("class", "dial");
        tick.setAttribute("stroke", color);
        tick.setAttribute("stroke-width", String(r * 0.20));
        tick.setAttribute("stroke-linecap", "round");
        g.appendChild(tick);

      } else {
        const c = document.createElementNS(NS, "circle");
        c.setAttribute("r", r); c.setAttribute("fill", color);
        c.setAttribute("class", "body");
        g.appendChild(c);
      }

      const slash = document.createElementNS(NS, "line");
      slash.setAttribute("x1", -r * 0.72); slash.setAttribute("y1", -r * 0.72);
      slash.setAttribute("x2", r * 0.72); slash.setAttribute("y2", r * 0.72);
      slash.setAttribute("class", "slash");
      g.appendChild(slash);

      if (type !== "sensor" && type !== "cover"){
        const t = document.createElementNS(NS, "text");
        t.textContent = d.rank;
        g.appendChild(t);
      }

      if (type !== "sensor"){
        g.addEventListener("click", ev => {
          ev.stopPropagation();
          if (this._suppressClick){ this._suppressClick = false; return; }
          this._onPin(d);
        });
        g.addEventListener("pointerdown", ev => this._startPress(d, ev));
      }

      this._svg.appendChild(g);
      this._pins.set(d.id, {el:g, def:d, color, type});
    }
  }

  /* ------------------------------------------------------------------ 两种视角 */
  _buildFlat(){
    const g = this._gFlat;
    if (!g) return;
    while (g.firstChild) g.removeChild(g.firstChild);
    this._rooms = [];
    for (const r of DATA.rooms){
      const p = document.createElementNS(NS, "polygon");
      p.setAttribute("points", r.points.map(q => q.join(",")).join(" "));
      p.setAttribute("class", "room");
      p.addEventListener("click", () => this.openRoom(r.name));
      g.appendChild(p);
      this._rooms.push({name:r.name, el:p, def:r});

      const t = document.createElementNS(NS, "text");
      t.setAttribute("x", String(r.label[0]));
      t.setAttribute("y", String(r.label[1] - 26));
      t.setAttribute("class", "roomname");
      t.textContent = r.name;
      t.style.display = "none";
      g.appendChild(t);
      r._labelEl = t;
    }
    // 墙：原始设计——细线，不加厚、不填充、不带投影
    for (const w of DATA.walls){
      const l = document.createElementNS(NS, "line");
      l.setAttribute("x1", w[0]); l.setAttribute("y1", w[1]);
      l.setAttribute("x2", w[2]); l.setAttribute("y2", w[3]);
      l.setAttribute("class", "wallline");
      g.appendChild(l);
    }

    // 门：平开门 = 门扇线 + 开启弧；推拉/垭口只留缺口（洞口已由墙体分段切出）
    for (const dr of (DATA.doors || [])){
      if (!dr.hinge || !dr.open || !dr.closed) continue;
      const hx = dr.hinge[0], hy = dr.hinge[1];
      const ox = dr.open[0], oy = dr.open[1];
      const cxp = dr.closed[0], cyp = dr.closed[1];
      const r = Math.hypot(ox - hx, oy - hy);

      const leaf = document.createElementNS(NS, "line");
      leaf.setAttribute("x1", hx); leaf.setAttribute("y1", hy);
      leaf.setAttribute("x2", ox); leaf.setAttribute("y2", oy);
      leaf.setAttribute("class", "doorleaf");
      g.appendChild(leaf);

      const a0 = Math.atan2(cyp - hy, cxp - hx);
      const a1 = Math.atan2(oy - hy, ox - hx);
      let sweep = a1 - a0;
      while (sweep > Math.PI) sweep -= 2 * Math.PI;
      while (sweep < -Math.PI) sweep += 2 * Math.PI;
      const x1 = hx + r * Math.cos(a0), y1 = hy + r * Math.sin(a0);
      const x2 = hx + r * Math.cos(a1), y2 = hy + r * Math.sin(a1);
      const arc = document.createElementNS(NS, "path");
      arc.setAttribute("d",
        "M " + x1.toFixed(1) + " " + y1.toFixed(1) +
        " A " + r.toFixed(1) + " " + r.toFixed(1) + " 0 0 " +
        (sweep > 0 ? 1 : 0) + " " + x2.toFixed(1) + " " + y2.toFixed(1));
      arc.setAttribute("class", "doorarc");
      g.appendChild(arc);
    }
  }

  _wallColor(shade){
    const a = T.wallShadeLo, b = T.wallShadeHi;
    const t = Math.max(0, Math.min(1, shade == null ? 0.8 : shade));
    const c = a.map((v, i) => Math.round(v + (b[i] - v) * t));
    return `rgb(${c[0]},${c[1]},${c[2]})`;
  }

  _buildIso(){
    const g = this._gIso;
    if (!g) return;
    while (g.firstChild) g.removeChild(g.firstChild);
    const iso = DATA.iso;
    if (!iso) return;
    const defs = this._svg.querySelector("defs");

    // 墙角环境遮蔽渐变
    if (defs && !defs.querySelector("#aoGrad")){
      const ao = document.createElementNS(NS, "radialGradient");
      ao.setAttribute("id", "aoGrad");
      ao.setAttribute("cx", "50%"); ao.setAttribute("cy", "50%"); ao.setAttribute("r", "62%");
      const s1 = document.createElementNS(NS, "stop");
      s1.setAttribute("offset", "52%"); s1.setAttribute("stop-color", T.aoEdge);
      s1.setAttribute("stop-opacity", "0");
      const s2 = document.createElementNS(NS, "stop");
      s2.setAttribute("offset", "100%"); s2.setAttribute("stop-color", T.aoEdge);
      s2.setAttribute("stop-opacity", T.aoOp);
      ao.appendChild(s1); ao.appendChild(s2);
      defs.appendChild(ao);

      // 地板材质：每间房沿左上→右下微渐变，避免纯色块
      const fg = document.createElementNS(NS, "linearGradient");
      fg.setAttribute("id", "floorGrad");
      fg.setAttribute("x1", "0"); fg.setAttribute("y1", "0");
      fg.setAttribute("x2", "0.45"); fg.setAttribute("y2", "1");
      const f1 = document.createElementNS(NS, "stop");
      f1.setAttribute("offset", "0%"); f1.setAttribute("stop-color", T.floorTop);
      const f2 = document.createElementNS(NS, "stop");
      f2.setAttribute("offset", "100%"); f2.setAttribute("stop-color", T.floorBot);
      fg.appendChild(f1); fg.appendChild(f2);
      defs.appendChild(fg);
    }

    // === 统一按面绘制（新契约 iso.draw，已按 x+y+z 升序）===
    // 旧实现把墙、家具分成两组分别追加，家具永远压在墙上。
    // 改为单趟顺序绘制后，远侧家具会被近侧墙正确遮挡。
    if (Array.isArray(iso.draw) && iso.draw.length){
      const dclip = document.createElementNS(NS, "clipPath");
      dclip.setAttribute("id", "isoClip");
      dclip.setAttribute("clipPathUnits", "userSpaceOnUse");
      for (const f of (iso.floors || [])){
        const cp = document.createElementNS(NS, "polygon");
        cp.setAttribute("points", f.points.map(q => q.join(",")).join(" "));
        dclip.appendChild(cp);
      }
      if (defs) defs.appendChild(dclip);

      const lampG = document.createElementNS(NS, "g");
      lampG.setAttribute("pointer-events", "none");
      lampG.setAttribute("clip-path", "url(#isoClip)");
      lampG.style.mixBlendMode = "screen";
      this._lampG = lampG;

      const drawG = document.createElementNS(NS, "g");
      g.appendChild(drawG);
      let lampDone = false;
      const wood = T.toneFurnWood;

      for (const e of iso.draw){
        if (!lampDone && e.role !== "floor"){
          drawG.appendChild(lampG);
          lampDone = true;
        }
        const poly = document.createElementNS(NS, "polygon");
        poly.setAttribute("points", e.pts.map(q => q.join(",")).join(" "));

        if (e.role === "floor"){
          poly.setAttribute("class", "iso-floor");
          poly.style.fill = "url(#floorGrad)";
          poly.addEventListener("click", () => this.openRoom(e.name));
        } else if (e.role === "ao"){
          poly.setAttribute("fill", T.aoEdge);
          poly.setAttribute("opacity", String(e.opacity != null ? e.opacity : 0.14));
          poly.setAttribute("pointer-events", "none");
        } else if (e.role === "wallFace"){
          poly.setAttribute("class", "iso-face");
          poly.setAttribute("fill", this._toneColor(e.tone, T.toneWall));
          poly.style.stroke = "none";       // 分段描边会出现"分格"，靠 tone 区分即可
          poly.setAttribute("pointer-events", "none");
        } else if (e.role === "wallTop"){
          poly.setAttribute("class", "iso-top");
          poly.setAttribute("fill", T.toneWall[0]);
          poly.style.stroke = "none";
          poly.setAttribute("pointer-events", "none");
        } else if (e.role === "furnFace" || e.role === "furnTop"){
          const set = this._furnToneSet(e.mat);
          poly.setAttribute("class", "iso-furn");
          poly.setAttribute("fill", e.role === "furnTop" ? set[0] : this._toneColor(e.tone, set));
          poly.setAttribute("pointer-events", "none");
        } else if (e.role === "doorFace" || e.role === "doorTop"){
          poly.setAttribute("class", "iso-door");
          poly.setAttribute("fill", e.role === "doorTop" ? wood[0] : this._toneColor(e.tone, wood));
          poly.setAttribute("pointer-events", "none");
        } else {
          continue;
        }
        drawG.appendChild(poly);
      }
      if (!lampDone) drawG.appendChild(lampG);
      return;
    }

    const floors = iso.floors || [];

    // 1) 地板
    for (const f of floors){
      const p = document.createElementNS(NS, "polygon");
      p.setAttribute("points", f.points.map(q => q.join(",")).join(" "));
      p.setAttribute("class", "iso-floor");
      p.style.fill = "url(#floorGrad)";
      p.addEventListener("click", () => this.openRoom(f.name));
      g.appendChild(p);
    }

    // 2) 墙角 AO
    //    新契约：烘焙好的 ao 多边形（带各自 opacity）；旧契约：按地板套径向渐变。
    const aoList = iso.ao || [];
    if (aoList.length){
      for (const a of aoList){
        if (!a || !a.points) continue;
        const p = document.createElementNS(NS, "polygon");
        p.setAttribute("points", a.points.map(q => q.join(",")).join(" "));
        p.setAttribute("fill", T.aoEdge);
        p.setAttribute("opacity", String(a.opacity != null ? a.opacity : 0.14));
        p.setAttribute("pointer-events", "none");
        g.appendChild(p);
      }
    } else {
      for (const f of floors){
        const ao = document.createElementNS(NS, "polygon");
        ao.setAttribute("points", f.points.map(q => q.join(",")).join(" "));
        ao.setAttribute("fill", "url(#aoGrad)");
        ao.setAttribute("pointer-events", "none");
        g.appendChild(ao);
      }
    }

    // 3) 光池层（地板之上、墙之下），clip 到地板并集，光不会漏到屋外
    const clip = document.createElementNS(NS, "clipPath");
    clip.setAttribute("id", "isoClip");
    clip.setAttribute("clipPathUnits", "userSpaceOnUse");
    for (const f of floors){
      const cp = document.createElementNS(NS, "polygon");
      cp.setAttribute("points", f.points.map(q => q.join(",")).join(" "));
      clip.appendChild(cp);
    }
    if (defs) defs.appendChild(clip);

    this._lampG = document.createElementNS(NS, "g");
    this._lampG.setAttribute("pointer-events", "none");
    this._lampG.setAttribute("clip-path", "url(#isoClip)");
    this._lampG.style.mixBlendMode = "screen";
    g.appendChild(this._lampG);

    // 4) 墙：按 layers 的 z 升序（远→近），整组挂投影
    const wallG = document.createElementNS(NS, "g");
    wallG.style.filter = "drop-shadow(0 4px 10px " + T.wallShadow + ")";
    g.appendChild(wallG);

    // 5) 家具：单独一组，画在墙之后（家具矮于剖切墙，压在上面读起来更清楚）
    const furnG = document.createElementNS(NS, "g");
    g.appendChild(furnG);

    const layers = iso.layers || [];
    for (const layer of layers){
      if (!layer || !layer.type) continue;

      if (layer.type === "ao"){
        // layers 里也可能带 ao（与顶层 ao 数组二选一，前者优先画在墙上层序里）
        if (!aoList.length && layer.points){
          const p = document.createElementNS(NS, "polygon");
          p.setAttribute("points", layer.points.map(q => q.join(",")).join(" "));
          p.setAttribute("fill", T.aoEdge);
          p.setAttribute("opacity", String(layer.opacity != null ? layer.opacity : 0.14));
          p.setAttribute("pointer-events", "none");
          g.appendChild(p);
        }
        continue;
      }

      if (layer.type === "wall"){
        const useTone = (layer.faces || []).some(f => f && f.tone);
        for (const face of (layer.faces || [])){
          if (!face || !face.points) continue;
          const p = document.createElementNS(NS, "polygon");
          p.setAttribute("points", face.points.map(q => q.join(",")).join(" "));
          p.setAttribute("class", "iso-face");
          p.setAttribute("fill", face.tone
            ? this._toneColor(face.tone, T.toneWall)
            : this._wallColor(face.shade != null ? face.shade : layer.shade));
          wallG.appendChild(p);
        }
        if (layer.top){
          const t = document.createElementNS(NS, "polygon");
          t.setAttribute("points", layer.top.map(q => q.join(",")).join(" "));
          t.setAttribute("class", "iso-top");
          t.setAttribute("fill", useTone ? T.toneWall[0] : this._wallColor(0.92));
          wallG.appendChild(t);
        }
        continue;
      }

      if (layer.type === "furn"){
        const set = this._furnToneSet(layer.material);
        for (const face of (layer.faces || [])){
          if (!face || !face.points) continue;
          const p = document.createElementNS(NS, "polygon");
          p.setAttribute("points", face.points.map(q => q.join(",")).join(" "));
          p.setAttribute("class", "iso-furn-face");
          p.setAttribute("fill", this._toneColor(face.tone, set));
          furnG.appendChild(p);
        }
        if (layer.top){
          const t = document.createElementNS(NS, "polygon");
          t.setAttribute("points", layer.top.map(q => q.join(",")).join(" "));
          t.setAttribute("class", "iso-furn-top");
          t.setAttribute("fill", set[0]);
          furnG.appendChild(t);
        }
        continue;
      }
    }

    // 顶层 furn 数组（新契约里与 layers 二选一）：layers 里没有 furn 时才用
    const hasFurnLayer = layers.some(l => l && l.type === "furn");
    if (!hasFurnLayer){
      for (const f of (iso.furn || [])){
        if (!f || !f.top) continue;
        const set = this._furnToneSet(f.material);
        for (const face of (f.faces || [])){
          if (!face || !face.points) continue;
          const p = document.createElementNS(NS, "polygon");
          p.setAttribute("points", face.points.map(q => q.join(",")).join(" "));
          p.setAttribute("class", "iso-furn-face");
          p.setAttribute("fill", this._toneColor(face.tone, set));
          furnG.appendChild(p);
        }
        const t = document.createElementNS(NS, "polygon");
        t.setAttribute("points", f.top.map(q => q.join(",")).join(" "));
        t.setAttribute("class", "iso-furn-top");
        t.setAttribute("fill", set[0]);
        furnG.appendChild(t);
      }
    }
  }

  /* 三色调 → 颜色。缺 theme token 时退回墙的色阶，保证不出现 undefined */
  _toneColor(tone, set){
    const arr = (set && set.length === 3) ? set : (T.toneWall || ["#6E7F93", "#4A5F78", "#415067"]);
    if (tone === "top") return arr[0];
    if (tone === "dark") return arr[2];
    return arr[1];
  }

  _furnToneSet(material){
    if (material === "wood") return T.toneFurnWood;
    if (material === "hard") return T.toneFurnHard;
    return T.toneFurnSoft;   // soft / 未标注 → 暖灰
  }

  _isoRoomCenters(){
    const out = {};
    for (const f of ((DATA.iso && DATA.iso.floors) || [])){
      let sx = 0, sy = 0;
      for (const p of f.points){ sx += p[0]; sy += p[1]; }
      const n = f.points.length || 1;
      out[f.name] = [sx / n, sy / n];
    }
    return out;
  }

  /* ---------------- 徽标锚点：房间内侧角 ---------------- */
  /* 用户改口：徽标不再占房间中心 —— 中心是最该留给人点的区域，
   * 各家产品的房间标签都贴内侧/角落。约束：
   *   ① 离墙 ≥ 徽标高的一半 + 余量（不压墙）
   *   ② 离房间中心 ≥ 徽标宽的一半（真的把中心让出来）
   *   ③ 优先靠上（读起来像标签）
   *   ④ 必须落在多边形内
   * 单位与传入的多边形一致：2D 传 cm，2.5D 传等距单位。
   */
  _polyBBox(poly){
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const p of poly){
      if (p[0] < x0) x0 = p[0];
      if (p[0] > x1) x1 = p[0];
      if (p[1] < y0) y0 = p[1];
      if (p[1] > y1) y1 = p[1];
    }
    return [x0, y0, x1, y1];
  }

  _pointInPoly(x, y, poly){
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++){
      const xi = poly[i][0], yi = poly[i][1];
      const xj = poly[j][0], yj = poly[j][1];
      if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / ((yj - yi) || 1e-9) + xi)){
        inside = !inside;
      }
    }
    return inside;
  }

  _segDist(px, py, x1, y1, x2, y2){
    const dx = x2 - x1, dy = y2 - y1;
    const L2 = dx * dx + dy * dy;
    let t = L2 > 1e-9 ? ((px - x1) * dx + (py - y1) * dy) / L2 : 0;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
  }

  _distToPoly(x, y, poly){
    let d = Infinity;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++){
      const dd = this._segDist(x, y, poly[j][0], poly[j][1], poly[i][0], poly[i][1]);
      if (dd < d) d = dd;
    }
    return d;
  }

  _cornerAnchor(poly, bw, bh){
    if (!poly || poly.length < 3) return null;
    const [x0, y0, x1, y1] = this._polyBBox(poly);
    const w = x1 - x0, h = y1 - y0;
    if (!(w > 0) || !(h > 0)) return null;
    const cxc = x0 + w / 2, cyc = y0 + h / 2;
    const hw = bw * 0.5, hh = bh * 0.5;

    // 硬约束：徽标**四角**必须都落在多边形内 —— 只测"离墙距离"会让它钻进
    // 比徽标还窄的凹口（卧室顶部那个缺口踩过，徽标跑到屋外）。
    const fits = (x, y) => {
      if (!this._pointInPoly(x - hw, y - hh, poly)) return false;
      if (!this._pointInPoly(x + hw, y - hh, poly)) return false;
      if (!this._pointInPoly(x + hw, y + hh, poly)) return false;
      if (!this._pointInPoly(x - hw, y + hh, poly)) return false;
      return true;
    };

    const nx = Math.max(16, Math.min(72, Math.round(w / 4)));
    const ny = Math.max(16, Math.min(72, Math.round(h / 4)));
    const sx = w / nx, sy = h / ny;

    // 单轮评分：几何可行性（四角在内）是硬约束，其余都是软权重。
    // 注意不要把"让开中心"做成硬门槛——那样它会压过"靠上"，把徽标推到房间下方（踩过）。
    let best = null, bestScore = -Infinity;
    for (let j = 0; j <= ny; j++){
      const y = y0 + j * sy;
      for (let i = 0; i <= nx; i++){
        const x = x0 + i * sx;
        if (!fits(x, y)) continue;
        const d = this._distToPoly(x, y, poly);
        if (d < bh * 0.30) continue;                 // 不贴墙
        const dc = Math.hypot(x - cxc, y - cyc);
        if (dc < bw * 0.22) continue;                // 硬下限：别骑在中心
        const up    = 1 - (y - y0) / h;              // 越靠上越像标签（主导项）
        const edge  = Math.min(1, d / (bw * 0.5));   // 越贴内侧越好
        const clear = Math.min(1, dc / (bw * 1.1));  // 中心让得越开越好
        const score = 1.30 * up + 0.50 * edge + 0.80 * clear;
        if (score > bestScore){ bestScore = score; best = [x, y]; }
      }
    }
    return best;
  }

  /* 锚点缓存：避免每次 resize 都扫一遍多边形 */
  _anchorOf(mode, name, poly, bw, bh){
    if (!this._anchorCache) this._anchorCache = new Map();
    const key = `${mode}|${name}|${bw.toFixed(1)}|${bh.toFixed(1)}`;
    if (this._anchorCache.has(key)) return this._anchorCache.get(key);
    const a = this._cornerAnchor(poly, bw, bh);
    this._anchorCache.set(key, a);
    return a;
  }

  /* 2.5D：按房间名取投影后的地板多边形（徽标锚点要在同一坐标系里算） */
  _isoFloorByName(){
    const out = {};
    for (const f of ((DATA.iso && DATA.iso.floors) || [])) out[f.name] = f.points;
    return out;
  }

  _setMode(m){
    this._mode = (m === "2.5d" && DATA.iso) ? "2.5d" : "2d";
    this._planMode = this._mode;
    try { localStorage.setItem("space-map-mode", this._mode); } catch (e) {}
    this._applyMode();
    this._syncLamps();
    this._syncBadges();
  }

  /* 主题切换：颜色分两处生效——CSS（styles 字符串）与 JS 建的 SVG 元素。
   * 前者需要换 <style>，后者需要在建元素时读到新 T，所以最简单可靠的办法是整卡重建。 */
  _setTheme(name){
    const next = (name === "light") ? "light" : "dark";
    if (next === this._theme && this._built) return;
    this._theme = next;
    T = THEMES[next];
    try { localStorage.setItem("space-map-theme", next); } catch (e) {}
    const prev = this._view;
    this._rebuild();
    if (prev && prev.type === "room" && prev.name) this.openRoom(prev.name);
    this._applyMode();
  }

  _rebuild(){
    this._badges = new Map();
    this._pins = new Map();
    this._rooms = [];
    this._dimRows = new Map();
    this._dimKey = "";
    this._menu = null;
    this._view = {type:"plan"};
    this._press = null;
    this._suppressClick = false;
    this._built = false;
    const root = this.shadowRoot;
    if (root) root.innerHTML = "";
    if (this._hass) this._render();
  }

  _applyMode(){
    const isoOn = !!DATA.iso;
    const m = (this._mode === "2.5d" && isoOn) ? "2.5d" : "2d";
    if (this._gFlat) this._gFlat.style.display = m === "2d" ? "" : "none";
    if (this._gIso)  this._gIso.style.display  = m === "2.5d" ? "" : "none";

    const bar = this.shadowRoot && this.shadowRoot.getElementById("modetoggle");
    if (bar){
      bar.style.display = (this._view.type === "room") ? "none" : "flex";
      for (const b of bar.querySelectorAll("button")){
        b.classList.toggle("on", b.dataset.m === m);
      }
    }

    // 徽标跟着视角换位置：等距下用房间地板质心
    const centers = m === "2.5d" ? this._isoRoomCenters() : null;
    for (const [name, b] of this._badges){
      const p = (centers && centers[name]) ? centers[name] : b.def.label;
      b.el.setAttribute("transform", `translate(${p[0]},${p[1]})`);
    }

    if (this._view.type === "plan"){
      const vb = (m === "2.5d" && isoOn) ? DATA.iso.viewBox
                                         : [0, 0, DATA.canvas[0], DATA.canvas[1]];
      this._svg.setAttribute("viewBox", `${vb[0]} ${vb[1]} ${vb[2]} ${vb[3]}`);
    }
    this._fitPins();
  }

  /* ------------------------------------------------------------------ 视图 */
  openRoom(name){
    const r = DATA.rooms.find(x => x.name === name);
    if (!r) return;
    // 房间视图始终用 2D 正交放大：等距下再放大会穿帮
    this._planMode = this._mode;
    this._mode = "2d";
    this._applyMode();
    this._view = {type:"room", name};
    this._closeMenu();
    this._alertOpen = false;
    const list = this.shadowRoot.getElementById("alert-list");
    if (list) list.classList.remove("on");
    this._applyView();

    const [x0, y0, x1, y1] = r.bbox;
    const w = (x1 - x0) * 1.16;
    const h = (y1 - y0) * 1.16;

    const shown = [];
    for (const [, p] of this._pins){
      if (p.el.style.display !== "none"){ p.el.style.opacity = "0"; shown.push(p.el); }
    }

    this._animateTo({x: (x0 + x1) / 2 - w / 2, y: (y0 + y1) / 2 - h / 2, w, h}, 420, (p) => {
      for (const el of shown) el.style.opacity = String(p);
    });
  }

  _backToPlan(){
    this._view = {type:"plan"};
    this._mode = this._planMode || "2d";
    this._closeMenu();
    this._applyView();
    this._applyMode();
    this._syncLamps();
    // 动画目标要跟着视角走：2.5D 下若还朝 2D 画布动，viewBox 会被拉错
    const vb = (this._mode === "2.5d" && DATA.iso) ? DATA.iso.viewBox
                                                    : [0, 0, DATA.canvas[0], DATA.canvas[1]];
    this._animateTo({x:vb[0], y:vb[1], w:vb[2], h:vb[3]}, 380);
  }

  _applyView(){
    const inRoom = this._view.type === "room";
    const back = this.shadowRoot.getElementById("back");
    if (back) back.style.display = inRoom ? "flex" : "none";

    for (const [, b] of this._badges) b.el.style.display = inRoom ? "none" : "";
    for (const [, p] of this._pins){
      const show = inRoom ? p.def.area === this._view.name : false;
      p.el.style.display = show ? "" : "none";
      if (!show) p.el.style.opacity = "0";
    }
    for (const r of this._rooms){
      r.el.style.opacity = (!inRoom || r.name === this._view.name) ? "1" : "0.32";
      // 房间名只在"进房间"时显示，整屋视图由徽标承担
      if (r.def._labelEl){
        r.def._labelEl.style.display = (inRoom && r.name === this._view.name) ? "" : "none";
      }
    }
    this._hudText();
    this._syncRight();
    this._applyMode();
  }

  _hudText(){
    if (!this._hud) return;
    if (this._view.type === "room"){
      const n = DATA.devices.filter(d => d.area === this._view.name).length;
      this._hud.textContent = `${this._view.name} · ${n} 个点位`;
    } else {
      this._hud.textContent = `${DATA.stats.rooms} 间 · ${DATA.devices.length} 个点位`;
    }
  }

  _animateTo(target, dur, onProgress){
    const svg = this._svg;
    if (!svg) return;
    const vb = svg.viewBox.baseVal;
    const from = {x:vb.x, y:vb.y, w:vb.width, h:vb.height};
    const D = dur || 420;
    const t0 = performance.now();
    const total = Math.max(1, Math.round(D / 16));
    const progress = onProgress || function(){};

    const token = (this._animToken || 0) + 1;
    this._animToken = token;
    if (this._anim) cancelAnimationFrame(this._anim);
    if (this._endTimer) clearTimeout(this._endTimer);

    const apply = (p) => {
      const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      const x = from.x + (target.x - from.x) * e;
      const y = from.y + (target.y - from.y) * e;
      const w = from.w + (target.w - from.w) * e;
      const h = from.h + (target.h - from.h) * e;
      svg.setAttribute("viewBox", `${x} ${y} ${w} ${h}`);
      progress(e);
    };

    const finish = () => {
      if (token !== this._animToken) return;
      if (this._anim) cancelAnimationFrame(this._anim);
      this._anim = null;
      if (this._endTimer) clearTimeout(this._endTimer);
      apply(1);
      this._fitPins();
    };

    this._endTimer = setTimeout(finish, D + 80);

    let frames = 0;
    const step = () => {
      if (token !== this._animToken) return;
      frames++;
      const elapsed = performance.now() - t0;
      const p = Math.min(1, elapsed > 0 ? elapsed / D : frames / total);
      apply(p);
      this._fitPins();
      if (p < 1){
        this._anim = requestAnimationFrame(step);
      } else {
        finish();
      }
    };
    this._anim = requestAnimationFrame(step);
  }

  _fitPins(){
    const svg = this._svg;
    if (!svg) return;
    const vb = svg.viewBox.baseVal;
    const cw = svg.clientWidth || 620;
    const ch = svg.clientHeight || 720;
    const upp = Math.max(vb.width / cw, vb.height / ch);   // user units per screen px
    const coarse = IS_COARSE();
    const pinR = coarse ? COARSE_PIN_R : TARGET_PIN_R;
    const k = Math.max(0.2, Math.min(4, (pinR * upp) / BASE_R));
    const kk = k.toFixed(4);
    for (const [, p] of this._pins){
      if (p.el.style.display === "none") continue;
      p.el.setAttribute("transform", `translate(${p.def.x},${p.def.y}) scale(${kk})`);
    }
    // 等距视角：徽标要小一号、位置换成房间地板质心、不做 2D 的房间宽度夹取
    const isoMode = this._mode === "2.5d" && !!DATA.iso;
    const centers = isoMode ? this._isoRoomCenters() : null;
    // 视觉尺寸保持统一（用户明确要求）；触控可用性靠"不可见热区"解决，不靠放大徽标
    // —— 放大徽标会让放不下的房间被夹取，尺寸就又不统一了（试过，被否）。
    const tgtB = isoMode ? 46 : TARGET_BADGE_H;
    const kb = (tgtB * upp) / BADGE_H;

    // 统一缩放：用户要求各房间徽标大小一致。
    // 只按"高度"定系数 —— 宽度差异由徽标自身的紧凑版（窄房间单行）解决。
    // 注意：不要取"所有房间都能放下的最小值"，那会被最窄的小阳台拉到极小，
    // 导致全部徽标一起缩成看不清（踩过）。
    let kShared = Math.max(0.35, Math.min(3, kb));

    const isoFloors = isoMode ? this._isoFloorByName() : null;
    for (const [name, b] of this._badges){
      if (b.el.style.display === "none") continue;
      // 正常房间统一用 kShared；只有徽标宽于房间的窄房间（小阳台）才单独缩，
      // 否则它会压在隔壁房间的徽标上。
      let k2 = kShared;
      if (!isoMode){
        const cwB = b.w || 88;
        const [x0, , x1] = b.def.bbox;
        const roomW = x1 - x0;
        if (roomW > 0) k2 = Math.min(k2, (roomW * 0.9) / cwB);
      }
      k2 = Math.max(0.3, Math.min(3, k2));
      // 锚点分视角（用户要求）：
      //   平面 —— 回到房间中心（b.def.label 是面积质心，书房有 LABEL_OVERRIDE 手工修正）
      //   立体 —— 内侧角，把中心让给"点房间"
      const bw = (b.w || 88) * k2;
      const bh = BADGE_H * k2;
      let pos;
      if (isoMode){
        const poly = isoFloors[name] || null;
        const anchor = poly ? this._anchorOf("iso", name, poly, bw, bh) : null;
        pos = anchor || (centers && centers[name]) || b.def.label;
      } else {
        pos = b.def.label;
      }
      b.el.setAttribute("transform",
        `translate(${pos[0]},${pos[1]}) scale(${k2.toFixed(3)})`);
    }
  }

  /* ------------------------------------------------------------------ 状态 */
  _stateOf(entityId){
    const s = this._hass.states[entityId];
    return s ? s.state : "unavailable";
  }

  _attrsOf(entityId){
    const s = this._hass.states[entityId];
    return (s && s.attributes) || {};
  }

  _controlsOf(d){
    return (d.controls || []).filter(e =>
      ["light","switch","cover","fan","climate"].includes(e.domain));
  }

  /* ---- 窗帘方向修正 ----
     这两个 Aqara 窗帘的 open/close 与实物相反（实测：open_cover → current_position=100 且实物为"关"）。
     标记放在 DATA.covers[entity_id].invert，不在代码里硬编码 entity_id。 */
  _coverInvert(eid){
    const m = (DATA.covers || {})[eid];
    return !!(m && m.invert);
  }

  _coverPhys(eid){
    // 返回 "open" | "closed" | "moving" | null（无数据）
    const st = this._hass && this._hass.states ? this._hass.states[eid] : null;
    if (!st) return null;
    const raw = st.state;
    if (!raw || raw === "unavailable" || raw === "unknown") return null;
    if (raw === "opening" || raw === "closing") return "moving";
    const a = st.attributes || {};
    let pos = (typeof a.current_position === "number") ? a.current_position : null;
    if (pos == null){
      if (raw === "open") return this._coverInvert(eid) ? "closed" : "open";
      if (raw === "closed") return this._coverInvert(eid) ? "open" : "closed";
      return null;
    }
    if (this._coverInvert(eid)) pos = 100 - pos;
    return pos > 50 ? "open" : "closed";
  }

  _coverService(eid, wantOpen){
    // wantOpen 指"想让实物打开"。反向窗帘要把服务名对调。
    const inv = this._coverInvert(eid);
    if (wantOpen) return inv ? "close_cover" : "open_cover";
    return inv ? "open_cover" : "close_cover";
  }

  _devState(d){
    const c = this._controlsOf(d);
    if (!c.length) return "sensor";
    const sts = c.map(x => this._stateOf(x.entity_id));
    if (sts.some(s => s === "unavailable" || s === "unknown")) return "unavail";
    // 窗帘按物理位置判断，不能看 open/closed 字面
    const covers = c.filter(x => x.domain === "cover");
    if (covers.length){
      const phys = covers.map(x => this._coverPhys(x.entity_id));
      if (phys.some(p => p === "open")) return "on";
      if (phys.some(p => p === "closed")) return "off";
    }
    if (sts.some(s => s === "on" || s === "open")) return "on";
    if (sts.some(s => s === "off" || s === "closed")) return "off";
    return "sensor";
  }

  _sync(){
    if (!this._built) return;
    // 夜间（22:00–07:00）整体压暗：挂墙屏夜里不该像一块发光的板子。
    // 依据 Timeframe 十年经验（e-paper 之所以胜出，就是"夜里不刺眼"）+ NeonPlan3D 的 night 配置。
    const card = this.shadowRoot && this.shadowRoot.querySelector("ha-card");
    if (card){
      const h = new Date().getHours();
      card.classList.toggle("night", h >= 22 || h < 7);
    }
    for (const [, p] of this._pins){
      p.el.classList.remove("on", "off", "sensor", "unavail");
      p.el.classList.add(this._devState(p.def));
    }
    this._syncBadges();
    this._syncLamps();
    this._syncChrome();
    this._syncRight();
    this._fitPins();
  }

  /* 亮着的灯在地板上投一层暖色光池。只有 on 才画，且亮度越高光池越大越亮。 */
  _syncLamps(){
    const g = this._lampG;
    if (!g) return;
    const want = [];
    for (const d of DATA.devices){
      const ctl = this._controlsOf(d);
      const lights = ctl.filter(c => c.domain === "light");
      if (!lights.length) continue;
      // 多键面板不是照明，不投影
      if (d.gangs && d.gangs.length > 1) continue;
      let onCount = 0, bright = 0, n = 0;
      for (const c of lights){
        if (this._stateOf(c.entity_id) === "on"){
          onCount++;
          const b = this._attrsOf(c.entity_id).brightness;
          if (typeof b === "number"){ bright += b; n++; }
        }
      }
      if (!onCount) continue;
      const ratio = n ? Math.min(1, (bright / n) / 255) : 0.8;
      want.push([d, ratio]);
    }

    // 复用已有椭圆，而不是每次删光重建 —— 删了重建就没有过渡，
    // 开灯会"啪"地出现。参考市面实操：常态变化用 transition（0.3~0.8s），
    // 只有异常才用持续 animation。
    if (!this._lampEls) this._lampEls = new Map();
    const keep = new Set();

    // 光场：不给整间房平铺颜色（那会把地板染成泥棕），改用大半径径向衰减——
    // 从灯位往外自然变暗，才像"光落在屋里"。
    for (const [d, ratio] of want){
      const r = 95 + 120 * ratio;             // cm，覆盖大半个房间
      // 等距视角下灯位要换成投影坐标，否则光池会落错房间
      let px = d.x, py = d.y, rr = r;
      if (this._mode === "2.5d" && DATA.iso && DATA.iso.decals){
        const dec = DATA.iso.decals.find(x => x.id === d.id);
        if (dec){ px = dec.sx; py = dec.sy; rr = r * 0.92; }
      }

      let e = this._lampEls.get(d.id);
      if (!e){
        e = document.createElementNS(NS, "ellipse");
        e.setAttribute("fill", "url(#lampPool)");
        e.setAttribute("opacity", "0");
        e.style.transition = "opacity .5s ease, rx .5s ease, ry .5s ease";
        g.appendChild(e);
        this._lampEls.set(d.id, e);
      }
      e.setAttribute("cx", String(px));
      e.setAttribute("cy", String(py));
      e.setAttribute("rx", String(rr));
      e.setAttribute("ry", String(rr * 0.86));
      // 先落地坐标、下一帧再抬不透明度，浏览器才会真的做过渡
      requestAnimationFrame(() => e.setAttribute("opacity", String(0.72 + 0.28 * ratio)));
      keep.add(d.id);
    }

    // 关掉的灯：先淡出，过渡结束再移除
    for (const [id, e] of Array.from(this._lampEls)){
      if (keep.has(id)) continue;
      e.setAttribute("opacity", "0");
      this._lampEls.delete(id);
      setTimeout(() => { if (e.parentNode) e.parentNode.removeChild(e); }, 560);
    }
  }

  _syncBadges(){
    for (const [name, b] of this._badges){
      let on = 0, total = 0, devCount = 0, deadCnt = 0, openCnt = 0;
      const lights = [];
      for (const d of DATA.devices){
        if (d.area !== name) continue;
        devCount++;
        for (const c of this._controlsOf(d)){
          if (c.domain !== "light") continue;
          lights.push(c.entity_id);
          total++;
          if (this._stateOf(c.entity_id) === "on") on++;
          const cs = this._stateOf(c.entity_id);
          if (cs === "unavailable" || cs === "unknown") deadCnt++;
        }
        // 门窗类传感器：on = 开着（device_class door/window）
        if (d.state_entity){
          const st = this._stateOf(d.state_entity);
          if (st === "unavailable" || st === "unknown") deadCnt++;
          else if (st === "on" && /men|door|chuang|window|window/i.test(d.state_entity)) openCnt++;
        }
      }

      // ---- 一键开关（只有恰好一盏可控灯时可用）----
      const sole = lights.length === 1 ? lights[0] : null;
      b.light = sole;
      if (sole){
        const st = this._stateOf(sole);
        const dead = (st === "unavailable" || st === "unknown");
        b.pwr.classList.add("on");
        b.pwr.classList.toggle("lit", st === "on");
        b.pwr.classList.toggle("dead", dead);
        b.pwrT = b.pwrT || b.pwr.querySelector("text");
        if (b.pwrT) b.pwrT.textContent = dead ? "⏻" : (st === "on" ? "⏻" : "⏻");
      } else {
        b.pwr.classList.remove("on", "lit", "dead");
      }

      // 灯的表述要区分三种情况：
      //  0 盏灯（玄关只有传感器）→ 不写灯，只写设备数
      //  1 盏灯 → 只写亮/灭，避免"1/1 盏亮"这种废话
      //  ≥2 盏灯 → 同时给出"亮几盏"和"共几盏"，因为只写"1 盏亮"会让人以为房间只有一盏
      // 文案用 ON / OFF，不用"亮/灭"。
      // 视觉区分靠三件事：暖色/暗灰、ON 时前置同色圆点、温度永远中性色。
      // 灯的表述：
      //  0 盏灯（玄关只有传感器）→ 不提灯，只显示温度
      //  1 盏灯 → 只写 ON/OFF，避免"1/1 盏亮"这种废话
      //  ≥2 盏灯 → 给出"亮几盏/共几盏"
      // 文案用 ON / OFF，不用"亮/灭"。
      let mainTxt = null, tempTxt = null;
      // 窄房间（宽 < 170cm，如玄关/小阳台）用单行徽标：只留房间名 + ⏻。
      // 否则居中后会和相邻房间的徽标叠在一起（书房 × 玄关 踩过）。
      const roomW = (b.def.bbox && (b.def.bbox[2] - b.def.bbox[0])) || 999;
      const narrow = roomW < 120;
      if (!narrow){
        if (total === 1) mainTxt = on ? "ON" : "OFF";
        else if (total > 1) mainTxt = `${on}/${total} ON`;
        // total === 0 → mainTxt 保持 null，这一行只留给温度
      }

      const lit = total > 0 && on > 0;
      const mainColor = lit ? T.badgeOnText : T.badgeOff;
      const prefix = (total > 0 && lit) ? "● " : "";

      if (!narrow && b.def.temp){
        const s = this._stateOf(b.def.temp);
        if (s && s !== "unavailable" && s !== "unknown"){
          const v = parseFloat(s);
          if (!isNaN(v)) tempTxt = `${v.toFixed(1)}°C`;
        }
      }

      // 电源键位置跟着徽标宽度走（即使文字没变也要摆正）
      this._placePwr(b);

      const key = name + "|" + mainTxt + "|" + (tempTxt || "") + "|" + mainColor + "|" + (lit ? 1 : 0);
      if (b.key === key) continue;
      b.key = key;
      b.name.textContent = name;

      b.stats.textContent = "";
      if (mainTxt){
        const s1 = document.createElementNS(NS, "tspan");
        s1.textContent = prefix + mainTxt;
        s1.setAttribute("fill", mainColor);
        s1.setAttribute("font-weight", "700");
        b.stats.appendChild(s1);
      }
      if (tempTxt){
        const s2 = document.createElementNS(NS, "tspan");
        s2.textContent = (mainTxt ? " · " : "") + tempTxt;
        s2.setAttribute("fill", T.dimStats);
        s2.setAttribute("font-weight", "600");
        b.stats.appendChild(s2);
      }

      // 量文字宽：getBBox 在某些字体/时机下会偏小，导致字顶出圆角框。
      // 三重取最大：getBBox ／ getComputedTextLength ／ 按字数估（中文按 1em、ASCII 按 0.62em）。
      function measureWidth(node, text, em){
        let w = 0;
        try { w = Math.max(w, node.getBBox().width); } catch (e) {}
        try { w = Math.max(w, node.getComputedTextLength ? node.getComputedTextLength() : 0); } catch (e) {}
        let est = 0;
        for (const ch of String(text || "")){
          est += (ch.charCodeAt(0) > 0x2E80 ? em : em * 0.62);
        }
        return Math.max(w, est);
      }
      const FS_NAME = 10, FS_STATS = 8.5;
      const w1 = measureWidth(b.name, b.name.textContent, FS_NAME);
      const w2 = measureWidth(b.stats, b.stats.textContent, FS_STATS);

      // 电源键放徽标内部右端。宽度必须由按钮直径反推，否则文字一长按钮就顶出边框。
      const btnD = BADGE_H * 0.52;
      const pad = sole ? (btnD + 14) : 0;
      const cw = Math.max(66, Math.max(w1, w2) + 30 + pad);
      b.w = cw;
      b.btnD = btnD;
      b.rect.setAttribute("x", String(-cw / 2));
      b.rect.setAttribute("width", String(cw));
      b.name.setAttribute("x", String(-pad / 2));
      b.stats.setAttribute("x", String(-pad / 2));
      this._placePwr(b);

      // 告警角点：优先红（离线），其次琥珀（门窗开着）。落在房间徽标右上角。
      if (b.alertDot){
        if (deadCnt > 0 || openCnt > 0){
          b.alertDot.style.display = "";
          b.alertDot.setAttribute("class", "alertdot" + (deadCnt > 0 ? " bad" : ""));
          b.alertDot.setAttribute("cx", String(cw / 2 - 4));
          b.alertDot.setAttribute("cy", String(-BADGE_H / 2 + 4));
        } else {
          b.alertDot.style.display = "none";
        }
      }
    }
  }

  _placePwr(b){
    if (!b.pwr) return;
    const w = b.w || 88;
    const d = b.btnD || (BADGE_H * 0.52);
    // 右边缘留 7 个单位，保证圆形完整落在圆角矩形内部
    b.pwr.setAttribute("transform",
      `translate(${(w / 2 - d / 2 - 7).toFixed(2)},0)`);
  }

  /* ------------------------------------------------------------------ 左右栏刷新 */
  /* ================= 豆包时间轴 =================
     数据全部来自 history/history_during_period（不吃"当前值"，看时间分布）。
     限流：60 秒最多一次；hass 每次更新不触发查询。 */
  _T(){ return (typeof THEMES !== "undefined" && THEMES[this._theme]) || THEMES.dark; }

  _petEnts(){
    const p = (DATA.panel && DATA.panel.pet) || {};
    return [p.toilet, p.feedCount, p.feedGrams, p.weight].filter(Boolean);
  }

  _petMaybeFetch(){
    const now = Date.now();
    if (this._petBusy) return;
    if (this._petLast && now - this._petLast < 60000) return;
    this._petLast = now;
    this._petBusy = true;
    const d = new Date(); d.setHours(0, 0, 0, 0);
    let pr;
    try {
      pr = this._hass.callWS({
        type: "history/history_during_period",
        start_time: d.toISOString(),
        end_time: new Date().toISOString(),
        entity_ids: this._petEnts(),
        minimal_response: true,
        no_attributes: true,
      });
    } catch (e){ pr = Promise.reject(e); }
    Promise.resolve(pr).then(res => {
      this._petHist = this._petNorm(res);
      this._petErr = null;
    }).catch(err => {
      this._petHist = null;
      this._petErr = String((err && err.message) || err);
    }).then(() => {
      this._petBusy = false;
      const root = this.shadowRoot;
      const el = root && root.getElementById("pets");
      if (el) this._renderPet(el);
    });
  }

  _petNorm(res){
    const out = {};
    if (!res) return out;
    if (Array.isArray(res)){
      for (const g of res){
        const arr = Array.isArray(g) ? g : ((g && g.value) || []);
        if (!arr || !arr.length) continue;
        const eid = arr[0].entity_id;
        if (eid) out[eid] = arr;
      }
    } else if (typeof res === "object"){
      for (const k of Object.keys(res)) out[k] = res[k];
    }
    return out;
  }

  _petTime(it){
    const t = it.last_changed || it.last_updated || it.lc || it.lu;
    return t ? Date.parse(t) : NaN;
  }

  _petCompute(){
    const p = (DATA.panel && DATA.panel.pet) || {};
    const H = this._petHist || {};
    const eps = [], feeds = [], wts = [];

    // 如厕：on → off 配对
    const toi = H[p.toilet] || [];
    let openAt = null;
    for (const it of toi){
      const t = this._petTime(it);
      const st = it.state || it.s;
      if (!t) continue;
      if (st === "on") openAt = t;
      else if (st === "off" && openAt != null){ eps.push({ a: openAt, b: t }); openAt = null; }
    }

    // 投喂：累计次数变大 = 一次；克数用"该时刻累计 - 上一次累计"
    const cs = H[p.feedCount] || [];
    const gs = (H[p.feedGrams] || []).map(x => ({ t: this._petTime(x), v: parseFloat(x.state != null ? x.state : x.s) }))
      .filter(x => !isNaN(x.t) && !isNaN(x.v));
    const gBefore = (t, strict) => {
      let v = null;
      for (const x of gs){ if (strict ? x.t < t : x.t <= t) v = x.v; }
      return v;
    };
    let prev = null;
    for (const it of cs){
      const t = this._petTime(it);
      const v = parseFloat(it.state != null ? it.state : it.s);
      if (isNaN(t) || isNaN(v)) continue;
      if (prev != null && v > prev){
        const gNow = gBefore(t, false), gPrev = gBefore(t, true);
        const dg = (gNow != null && gPrev != null && gNow >= gPrev) ? (gNow - gPrev) : null;
        feeds.push({ t: t, g: dg });
      }
      prev = v;
    }

    // 体重
    for (const it of (H[p.weight] || [])){
      const t = this._petTime(it);
      const v = parseFloat(it.state != null ? it.state : it.s);
      if (!isNaN(t) && !isNaN(v)) wts.push({ t: t, v: v });
    }
    return { eps: eps, feeds: feeds, wts: wts };
  }

  _renderPet(el){
    const p = (DATA.panel && DATA.panel.pet) || {};
    const esc = v => this._esc(v);
    const d = this._petCompute();

    const mins = t => { const x = new Date(t); return x.getHours() * 60 + x.getMinutes() + x.getSeconds() / 60; };
    const X0 = 6, X1 = 258, W = X1 - X0;
    const px = m => X0 + Math.max(0, Math.min(1440, m)) / 1440 * W;
    const hhmm = t => { const x = new Date(t); return String(x.getHours()).padStart(2, "0") + ":" + String(x.getMinutes()).padStart(2, "0"); };

    const wNow = wtsLast(this._hass.states[p.weight]);
    function wtsLast(st){ if (!st) return null; const v = parseFloat(st.state); return isNaN(v) ? null : v; }

    // ---- 汇总行 ----
    const nToi = d.eps.length;
    const gToday = (() => {
      const st = this._hass.states[p.feedGrams];
      const v = st ? parseFloat(st.state) : NaN;
      return isNaN(v) ? null : Math.round(v);
    })();
    const sums = [];
    if (d.eps.length || nToi) sums.push(`如厕 ${nToi} 次`);
    if (gToday != null) sums.push(`投喂 ${gToday}g`);

    // ---- 体重变化 ----
    let dw = null;
    if (d.wts.length >= 2) dw = d.wts[d.wts.length - 1].v - d.wts[0].v;

    // ---- SVG ----
    const lanes = [];
    // 轴
    for (const h of [0, 6, 12, 18, 24]){
      const x = px(h * 60);
      lanes.push(`<line x1="${x.toFixed(1)}" y1="10" x2="${x.toFixed(1)}" y2="80" stroke="currentColor" stroke-opacity=".12" stroke-width="1"/>`);
      lanes.push(`<text x="${x.toFixed(1)}" y="92" font-size="6.5" fill="currentColor" fill-opacity=".45" text-anchor="${h === 0 ? "start" : h === 24 ? "end" : "middle"}">${h}</text>`);
    }
    lanes.push(`<line x1="${X0}" y1="80" x2="${X1}" y2="80" stroke="currentColor" stroke-opacity=".25" stroke-width="1"/>`);

    // 如厕条
    for (const e of d.eps){
      const a = px(mins(e.a)), b = px(mins(e.b));
      const w = Math.max(3.5, b - a);
      const secs = Math.round((e.b - e.a) / 1000);
      lanes.push(`<rect x="${a.toFixed(1)}" y="14" width="${w.toFixed(1)}" height="10" rx="3.5" fill="${this._T().petToilet}" ><title>${hhmm(e.a)}–${hhmm(e.b)} · ${secs} 秒</title></rect>`);
    }
    // 投喂点
    for (const f of d.feeds){
      const x = px(mins(f.t));
      const g = f.g != null ? ` · ${f.g}g` : "";
      lanes.push(`<circle cx="${x.toFixed(1)}" cy="38" r="4" fill="${this._T().petFeed}"><title>${hhmm(f.t)}${g}</title></circle>`);
    }
    // 体重折线
    if (d.wts.length){
      const vs = d.wts.map(x => x.v);
      const vmin = Math.min(...vs), vmax = Math.max(...vs);
      const span = Math.max(0.05, vmax - vmin);
      const yOf = v => 72 - ((v - vmin) / span) * 16;
      const pts = d.wts.map(x => `${px(mins(x.t)).toFixed(1)},${yOf(x.v).toFixed(1)}`).join(" ");
      lanes.push(`<polyline points="${pts}" fill="none" stroke="${this._T().petWeight}" stroke-width="1.2" stroke-opacity=".75"/>`);
      for (const x of d.wts){
        lanes.push(`<circle cx="${px(mins(x.t)).toFixed(1)}" cy="${yOf(x.v).toFixed(1)}" r="2.2" fill="${this._T().petWeight}"><title>${hhmm(x.t)} · ${x.v.toFixed(2)} kg</title></circle>`);
      }
    }

    // ---- 异常 ----
    const errs = [];
    const eSt = this._hass.states[p.error];
    if (eSt && eSt.state && !["unknown", "unavailable", "No error", "none"].includes(eSt.state)){
      errs.push((p.errorMap && p.errorMap[eSt.state]) || eSt.state);
    }
    for (const [key, txt] of [[p.sandLack, "猫砂不足"], [p.wasteFull, "垃圾箱已满"]]){
      const st = this._hass.states[key];
      if (st && st.state === "on") errs.push(txt);
    }

    const hasHist = d.eps.length || d.feeds.length || d.wts.length;
    const svg = hasHist ? `<svg class="ptl-svg" viewBox="0 0 264 96" preserveAspectRatio="none" style="color:${this._T().petAxis}">${lanes.join("")}</svg>` : "";

    const html =
      `<div class="ptl">` +
        `<div class="ptl-head"><span class="ptl-name">${esc(p.name || "豆包")}</span>` +
          `<span class="ptl-w">${wNow != null ? wNow.toFixed(2) + " kg" : ""}</span></div>` +
        (sums.length ? `<div class="ptl-sum">今日 ${sums.join(" · ")}${dw != null && Math.abs(dw) >= 0.01 ? ` · 体重 ${dw > 0 ? "↑+" : "↓"}${dw.toFixed(2)}kg` : ""}</div>` : "") +
        svg +
        (hasHist ? `<div class="ptl-cap" id="ptl-cap"></div>` : `<div class="ptl-cap">今天还没有记录</div>`) +
        (errs.length ? `<div class="ptl-warn">⚠ ${esc(errs.join("；"))}</div>` : "") +
        `<div class="ptl-act">` +
          `<button data-a="clean">${esc((p.actions.clean || {}).label || "清理")}</button>` +
          `<button data-a="feed">${esc((p.actions.feed || {}).label || "出粮")}</button>` +
        `</div>` +
      `</div>`;

    if (el.dataset.k !== html){
      el.dataset.k = html;
      el.innerHTML = html;
      const cap = el.querySelector("#ptl-cap");
      if (cap){
        el.querySelectorAll("rect,circle").forEach(node => {
          node.addEventListener("click", ev => {
            ev.stopPropagation();
            const t = node.querySelector("title");
            if (t) cap.textContent = t.textContent;
          });
        });
      }
      el.querySelectorAll(".ptl-act button").forEach(b => {
        b.addEventListener("click", ev => {
          ev.stopPropagation();
          const a = b.dataset.a;
          if (a === "clean"){
            const spec = p.actions.clean;
            if (spec) this._hass.callService(spec.domain, spec.service, { entity_id: spec.entity });
          } else if (a === "feed"){
            const spec = p.actions.feed;
            if (!spec) return;
            const feedEntity = spec.entity;
            const curVal = (this._hass.states[feedEntity] || {}).state;
            this._confirmRisky(
              { entity_id: feedEntity, domain: spec.domain, label: "手动出粮 · 最小一档" },
              "出粮一档，份量以设备为准（HA 读不到具体克数）。确认现在出粮？",
              spec.service, { value: spec.value }, "确认出粮？", "确认出粮",
              () => {
                // 为什么先归零再发目标值：
                // text.set_value 只在**值发生变化**时才触发设备动作。若上一次出粮后
                // 实体停在 "10"（不自动归零），第二次再发 "10" 值没变 → 设备不动，
                // 界面上也完全看不出异常（静默失效）。
                // 所以先写 "0" 确保下次有变化；当前已是 "0" 则省掉这一步。
                const send = v => this._hass.callService(
                  spec.domain, spec.service, { entity_id: feedEntity, value: v });
                if (String(curVal) === "0"){
                  setTimeout(() => send(spec.value), 400);
                } else {
                  send("0");
                  setTimeout(() => send(spec.value), 400);
                }
              });
          }
        });
      });
    }
  }

  /* ---------------- 右栏 · 扫地机卡片 ---------------- */
  _renderVac(root){
    const el = root && root.getElementById("vaccard");
    if (!el) return;
    const v = DATA.panel && DATA.panel.vacuumCard;
    if (!v){ el.innerHTML = ""; return; }
    const esc = x => this._esc(x);
    const st = this._stateOf(v.entity);
    const off = (!st || st === "unavailable");

    const rows = [];
    const alerts = [];

    if (!off){
      const bat = parseFloat(this._stateOf(v.battery));
      const charging = this._stateOf(v.charging) === "on";
      if (!isNaN(bat)){
        rows.push(`<div class="vc-row"><span class="k">电量</span><span class="v">${Math.round(bat)}%${charging ? " · 充电中" : ""}</span></div>`);
      }

      // 本次清扫（只在清扫/暂停且有进度时出现）
      const prog = parseFloat(this._stateOf(v.progress));
      if ((st === "cleaning" || st === "paused") && !isNaN(prog) && prog > 0){
        const area = parseFloat(this._stateOf(v.area));
        const tmin = parseFloat(this._stateOf(v.time));
        const room = this._stateOf(v.room);
        const bits = [`${Math.round(prog)}%`];
        if (room && room !== "unknown" && room !== "Room") bits.push(room);
        if (!isNaN(area) && area > 0) bits.push(`${Math.round(area)} m²`);
        if (!isNaN(tmin) && tmin > 0) bits.push(tmin >= 60 ? `${(tmin / 60).toFixed(1)} h` : `${Math.round(tmin)} 分钟`);
        rows.push(`<div class="vc-row"><span class="k">本次</span><span class="v">${esc(bits.join(" · "))}</span></div>`);
      }

      // 异常：逐条
      if (this._stateOf(v.waterShortage) === "on") alerts.push("清水箱缺水");
      const ve = this._stateOf(v.vacError);
      if (ve && !["none", "unknown", "unavailable", ""].includes(ve)) alerts.push(ve);
      const de = this._stateOf(v.dockError);
      if (de && !["ok", "unknown", "unavailable", ""].includes(de)) alerts.push("基站 " + de);
      for (const c of (v.consumables || [])){
        const h = parseFloat(this._stateOf(c.entity));
        if (!isNaN(h) && h <= (c.warn_le != null ? c.warn_le : 20)){
          alerts.push(`${c.label} ${h < 1 ? Math.round(h * 60) + " 分钟" : h.toFixed(1) + " h"}（该换了）`);
        }
      }

      // 上次清扫：< 60 秒 判为自检，不当作一次清扫
      const b = Date.parse(this._stateOf(v.lastBegin)), e = Date.parse(this._stateOf(v.lastEnd));
      if (!isNaN(b) && !isNaN(e) && e > b){
        const secs = Math.round((e - b) / 1000);
        const d = new Date(e);
        const md = String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
        const hm = String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
        rows.push(`<div class="vc-row"><span class="k">上次</span><span class="v">${md} ${hm} · ${secs < 60 ? "自检" : "清扫"} ${secs} 秒</span></div>`);
      }

      // 累计
      const cnt = parseFloat(this._stateOf(v.totalCount));
      const ta = parseFloat(this._stateOf(v.totalArea));
      const tt = parseFloat(this._stateOf(v.totalTime));
      const tb = [];
      if (!isNaN(cnt)) tb.push(`${Math.round(cnt)} 次`);
      if (!isNaN(ta)) tb.push(`${Math.round(ta)} m²`);
      if (!isNaN(tt)) tb.push(tt >= 1 ? `${tt.toFixed(1)} h` : `${Math.round(tt * 60)} 分钟`);
      if (tb.length) rows.push(`<div class="vc-row"><span class="k">累计</span><span class="v">${esc(tb.join(" · "))}</span></div>`);
    }

    const title = off ? "不可用" : ((v.statusMap && v.statusMap[st]) || st);
    const busy = this._vacBusyUntil && Date.now() < this._vacBusyUntil;
    const canPause = (st === "cleaning" || st === "returning");
    const canStart = !off && !busy && st !== "cleaning";
    const canDock = !off && st !== "docked";

    const html =
      `<div class="vcard">` +
        `<div class="vc-head"><span class="vc-name">${esc(v.name)}</span>` +
          `<span class="vc-state">${esc(title)}</span></div>` +
        rows.join("") +
        alerts.map(a => `<div class="vc-alert">⚠ ${esc(a)}</div>`).join("") +
        (this._vacHint ? `<div class="vc-hint">${esc(this._vacHint)}</div>` : "") +
        `<div class="vc-act">` +
          `<button data-a="start"${canStart ? "" : " disabled"}>${esc(v.actions.start.label)}</button>` +
          `<button data-a="dock"${canDock ? "" : " disabled"}>${esc(v.actions.dock.label)}</button>` +
          `<button data-a="pause"${canPause ? "" : " disabled"}>${esc(v.actions.pause.label)}</button>` +
        `</div>` +
      `</div>`;

    if (el.dataset.k === html) return;
    el.dataset.k = html;
    el.innerHTML = html;

    el.querySelectorAll(".vc-act button").forEach(b => {
      b.addEventListener("click", ev => {
        ev.stopPropagation();
        const a = b.dataset.a, spec = v.actions[a];
        if (!spec) return;
        if (a === "start"){
          // 防连点：1.5 秒内禁用；1.5 秒后读一次状态，没进入 cleaning 就提示并恢复可点
          this._vacBusyUntil = Date.now() + 1500;
          this._vacHint = "";
          this._hass.callService(spec.domain, spec.service, { entity_id: spec.entity });
          setTimeout(() => {
            const now = this._stateOf(v.entity);
            if (now !== "cleaning"){
              this._vacBusyUntil = 0;
              this._vacHint = "启动未确认，请稍后重试";
            }
            this._renderVac(this.shadowRoot);
          }, 1500);
        } else {
          this._hass.callService(spec.domain, spec.service, { entity_id: spec.entity });
        }
        this._renderVac(this.shadowRoot);
      });
    });
  }

  /* ---------------- 右栏 · 空调卡片 ---------------- */
  _renderAC(root){
    const el = root && root.getElementById("accard");
    if (!el) return;
    const c = DATA.panel && DATA.panel.climate;
    if (!c){ el.innerHTML = ""; return; }
    const esc = x => this._esc(x);
    const st = this._stateOf(c.entity);
    const a = this._attrsOf(c.entity);

    if (!st || st === "unavailable"){
      el.innerHTML = `<div class="acd"><div class="ac-head"><span class="ac-name">${esc(c.name)}</span><span class="ac-mode">不可用</span></div></div>`;
      return;
    }

    const isOff = (st === "off");
    const modeLabel = (c.modeLabels && c.modeLabels[st]) || st;
    const rt = parseFloat(this._stateOf(c.roomTemp));
    const rh = parseFloat(this._stateOf(c.humidity));
    const temp = (typeof a.temperature === "number") ? a.temperature : null;
    const minT = (typeof a.min_temp === "number") ? a.min_temp : 16;
    const maxT = (typeof a.max_temp === "number") ? a.max_temp : 30;
    const stepT = (typeof a.target_temp_step === "number") ? a.target_temp_step : 1;

    const allModes = (a.hvac_modes || []);
    const modes = allModes.filter(m => m !== "off");
    const modeBtns = modes.map(m =>
      `<button data-kind="mode" data-v="${m}" class="${st === m ? "on" : ""}">${esc((c.modeLabels || {})[m] || m)}</button>`).join("")
      + (allModes.includes("off")
          ? `<button data-kind="mode" data-v="off" class="${isOff ? "on" : ""}">${esc((c.modeLabels || {}).off || "关")}</button>` : "");

    const fanBtns = (a.fan_modes || []).map(m =>
      `<button data-kind="fan" data-v="${m}" class="${a.fan_mode === m ? "on" : ""}">${esc((c.fanLabels || {})[m] || m)}</button>`).join("");
    const swingBtns = (a.swing_modes || []).map(m =>
      `<button data-kind="swing" data-v="${m}" class="${a.swing_mode === m ? "on" : ""}">${esc((c.swingLabels || {})[m] || m)}</button>`).join("");

    const info = [];
    if (!isNaN(rt)) info.push(`室温 ${rt.toFixed(1)}°C`);
    if (!isNaN(rh)) info.push(`湿度 ${Math.round(rh)}%`);

    const html = `<div class="acd">` +
      `<div class="ac-head"><span class="ac-name">${esc(c.name)}</span><span class="ac-mode">${esc(modeLabel)}</span></div>` +
      (info.length ? `<div class="ac-info">${esc(info.join(" · "))}</div>` : "") +
      `<div class="ac-modes">${modeBtns}</div>` +
      (temp != null ? `<div class="ac-temp"><span class="ac-lb">目标温度</span>` +
          `<button data-kind="t-" data-v="-1">−</button>` +
          `<span class="ac-tv">${Math.round(temp)}°C</span>` +
          `<button data-kind="t+" data-v="1">＋</button></div>` : "") +
      (fanBtns ? `<div class="ac-row"><span class="ac-lb">风速</span><div class="ac-btns">${fanBtns}</div></div>` : "") +
      (swingBtns ? `<div class="ac-row"><span class="ac-lb">摆风</span><div class="ac-btns">${swingBtns}</div></div>` : "") +
      (isOff ? `<div class="ac-hint">空调关着，调整温度或风速会连带开机</div>` : "") +
      `</div>`;

    if (el.dataset.k === html) return;
    el.dataset.k = html;
    el.innerHTML = html;

    el.querySelectorAll("button[data-kind]").forEach(b => {
      b.addEventListener("click", ev => {
        ev.stopPropagation();
        const kind = b.dataset.kind, v = b.dataset.v, eid = c.entity;
        if (kind === "mode"){
          if (v === "off") this._hass.callService("climate", "turn_off", { entity_id: eid });
          else this._hass.callService("climate", "set_hvac_mode", { entity_id: eid, hvac_mode: v });
        } else if (kind === "t-" || kind === "t+"){
          if (temp == null) return;
          const next = Math.min(maxT, Math.max(minT, temp + (kind === "t+" ? stepT : -stepT)));
          this._hass.callService("climate", "set_temperature", { entity_id: eid, temperature: next });
        } else if (kind === "fan"){
          this._hass.callService("climate", "set_fan_mode", { entity_id: eid, fan_mode: v });
        } else if (kind === "swing"){
          this._hass.callService("climate", "set_swing_mode", { entity_id: eid, swing_mode: v });
        }
        setTimeout(() => this._renderAC(this.shadowRoot), 200);
      });
    });
  }

  _syncChrome(){
    if (!this._built) return;
    const root = this.shadowRoot;
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const tstr = `${hh}:${mm}`;
    const weeks = "日一二三四五六";
    const dstr = `${now.getMonth() + 1}月${now.getDate()}日 周${weeks[now.getDay()]}`;

    const elT = root.getElementById("c-time");
    if (elT) elT.textContent = tstr;
    const elD = root.getElementById("c-date");
    if (elD) elD.textContent = dstr;
    const tbT = root.getElementById("tb-time");
    if (tbT) tbT.textContent = tstr;

    // 天气
    let wxText = "";
    const wxId = Object.keys(this._hass.states).find(k => k.startsWith("weather."));
    if (wxId){
      const s = this._hass.states[wxId];
      const label = WX[s.state] || s.state;
      const t = s.attributes && s.attributes.temperature;
      wxText = (typeof t === "number") ? `${label} ${Math.round(t)}°C` : label;
    }
    const elW = root.getElementById("c-wx");
    if (elW) elW.textContent = wxText;
    const tbW = root.getElementById("tb-wx");
    if (tbW) tbW.textContent = wxText;

    // AI 简报
    const ai = root.getElementById("ai");
    if (ai){
      const rows = [];
      for (const line of (DATA.ai || [])){
        const s = this._hass.states[line.entity];
        if (!s) continue;
        const txt = (s.state || "").trim();
        if (!txt || txt === "unknown" || txt === "unavailable") continue;
        rows.push(`<div class="ai-row"><span class="ic">${line.icon}</span><span>${this._esc(txt)}</span></div>`);
      }
      ai.innerHTML = rows.join("");
    }
    const meta = root.getElementById("ai-meta");
    if (meta){
      const s = this._hass.states[DATA.aiMeta];
      meta.textContent = (s && s.state && s.state !== "unknown") ? s.state : "";
    }
    const rf = root.getElementById("ai-refresh");
    if (rf) rf.style.display = this._hass.states[DATA.aiScript] ? "flex" : "none";

    // ---- 左栏 · 豆包时间轴 ----
    const petsEl = root.getElementById("pets");
    if (petsEl && DATA.panel && DATA.panel.pet){
      this._petMaybeFetch();
      this._renderPet(petsEl);
    }

    this._renderVac(root);

    // ---- 右栏 · 三个批量按钮 + 两个宠物/扫地机快捷（一次构建）----
    const bindBtn = (btn, spec) => {
      btn.onclick = ev => {
        ev.stopPropagation();
        const data = spec.targets ? { entity_id: spec.targets }
                                  : (spec.entity ? { entity_id: spec.entity } : {});
        this._hass.callService(spec.domain, spec.service, data);
        btn.classList.add("act");
        setTimeout(() => btn.classList.remove("act"), 700);
      };
    };

    const bEl = root.getElementById("batch");
    if (bEl && !bEl.dataset.built){
      bEl.dataset.built = "1";
      bEl.innerHTML = (DATA.batch || []).map((k, i) =>
        `<button class="qbtn" data-i="${i}" title="${this._esc(k.label)}"><span>${k.icon}</span><span>${this._esc(k.label)}</span></button>`
      ).join("");
      bEl.querySelectorAll(".qbtn").forEach(btn => bindBtn(btn, DATA.batch[+btn.dataset.i]));
    }

    const qEl = root.getElementById("quicks");
    if (qEl && !qEl.dataset.built){
      qEl.dataset.built = "1";
      qEl.innerHTML = (DATA.quickActions || []).map((k, i) =>
        `<button class="qbtn" data-i="${i}"><span>${k.icon}</span><span>${this._esc(k.label)}</span></button>`
      ).join("");
      qEl.querySelectorAll(".qbtn").forEach(btn => bindBtn(btn, DATA.quickActions[+btn.dataset.i]));
    }

    // ---- 右栏 · 媒体（播放/暂停 + 音量）----
    const mdEl = root.getElementById("media");
    if (mdEl && DATA.panel && DATA.panel.media){
      const m = DATA.panel.media;
      const st = this._stateOf(m.entity);
      if (!st || st === "unavailable"){
        mdEl.innerHTML = "";
      } else {
        const dim = (st === "idle" || st === "off") ? "off" : "";
        const html =
          `<span class="pn">${this._esc(m.name)}</span>` +
          `<button class="mbtn ${dim}" data-s="media_play_pause">⏯</button>` +
          `<button class="mbtn" data-s="volume_down">−</button>` +
          `<button class="mbtn" data-s="volume_up">＋</button>`;
        if (mdEl.dataset.k !== html){
          mdEl.dataset.k = html;
          mdEl.innerHTML = html;
          mdEl.querySelectorAll(".mbtn").forEach(b => {
            b.onclick = ev => {
              ev.stopPropagation();
              this._hass.callService("media_player", b.dataset.s, { entity_id: m.entity });
            };
          });
        }
      }
    }

    this._renderAC(root);

    // 告警
    const probs = this._problems();
    const cap = root.getElementById("alert-cap");
    if (cap){
      cap.classList.toggle("on", probs.length > 0);
      cap.textContent = probs.length ? `⚠ ${probs.length} 项异常` : "";
    }
    const list = root.getElementById("alert-list");
    if (list){
      list.innerHTML = probs.length
        ? `<h4>需要留意</h4>` + probs.map(p =>
            `<div class="it"><span>${this._esc(p.name)}</span><span>${this._esc(p.why)}</span></div>`).join("")
        : "";
    }
  }

  _problems(){
    const out = [];
    for (const d of DATA.devices){
      const c = this._controlsOf(d);
      const ids = c.map(x => x.entity_id);
      if (d.state_entity) ids.push(d.state_entity);
      if (d.battery) ids.push(d.battery);

      let un = false;
      for (const id of ids){
        const s = this._stateOf(id);
        if (s === "unavailable" || s === "unknown"){ un = true; break; }
      }
      if (un){ out.push({name: d.name, why: "不可用"}); continue; }

      if (d.battery){
        const v = parseFloat(this._stateOf(d.battery));
        if (!isNaN(v) && v < 20) out.push({name: d.name, why: `电量 ${Math.round(v)}%`});
      }
    }
    return out;
  }

  _syncRight(){
    if (!this._built) return;
    const root = this.shadowRoot;

    this._syncDims();

    // 场景可用性
    const box = root.getElementById("scenes");
    if (box){
      const btns = box.querySelectorAll(".scene");
      (DATA.scenes || []).forEach((s, i) => {
        const b = btns[i];
        if (!b) return;
        b.classList.toggle("dis", !this._hass.states[s.entity]);
      });
    }

    const title = root.getElementById("sec-title");
    const listEl = root.getElementById("devlist");
    if (!listEl) return;

    if (this._view.type !== "room"){
      if (title) title.textContent = "点中间的房间查看设备";
      listEl.innerHTML = `<div class="empty">进入任一房间后，这里列出该房间的窗帘、插座、传感器等非灯设备。</div>`;
      return;
    }

    const room = this._view.name;
    if (title) title.textContent = `${room} · 其他设备`;

    const rows = DATA.devices.filter(d => {
      if (d.area !== room) return false;
      if (Array.isArray(d.gangs) && d.gangs.length >= 2) return false;
      const cs = this._controlsOf(d);
      if (cs.some(c => c.domain === "light")) return false;
      return true;
    });

    if (!rows.length){
      listEl.innerHTML = `<div class="empty">这个房间没有其他设备。</div>`;
      return;
    }

    const html = rows.map((d, i) => {
      const cs = this._controlsOf(d);
      let stateTxt = "", btn = "";
      if (cs.length){
        const c = cs[0];
        const st = this._stateOf(c.entity_id);
        if (c.domain === "cover"){
          const phys = this._coverPhys(c.entity_id);
          stateTxt = phys === "open" ? "打开" : phys === "closed" ? "关闭" : phys === "moving" ? "运行中" : st;
          btn = `<button data-i="${i}">${phys === "open" ? "关" : "开"}</button>`;
        } else {
          stateTxt = st === "on" ? "开" : st === "off" ? "关" : st;
          const isOn = (st === "on");
          btn = `<button data-i="${i}">${isOn ? "关" : "开"}</button>`;
        }
      } else {
        const st = d.state_entity ? this._stateOf(d.state_entity) : "—";
        stateTxt = st === "unavailable" ? "不可用" : st;
      }
      return `<div class="dev"><span class="nm">${this._esc(d.name)}</span>` +
             `<span class="st">${this._esc(String(stateTxt))}</span>${btn}</div>`;
    }).join("");

    listEl.innerHTML = html;
    listEl.querySelectorAll("button[data-i]").forEach(b => {
      b.addEventListener("click", ev => {
        ev.stopPropagation();
        const d = rows[+b.dataset.i];
        const c = this._controlsOf(d)[0];
        if (!c) return;
        if (c.domain === "cover"){
          const phys = this._coverPhys(c.entity_id);
          this._call(c, this._coverService(c.entity_id, phys !== "open"));
        } else {
          this._call(c, "toggle");
        }
      });
    });
  }

  /* 房间视图里的亮度/色温：精确调节走滑块，不走图上长按 */
  _syncDims(){
    const box = this.shadowRoot.getElementById("dims");
    if (!box) return;

    if (this._view.type !== "room"){
      box.classList.remove("on");
      if (this._dimKey){ box.innerHTML = ""; this._dimRows = new Map(); this._dimKey = ""; }
      return;
    }

    const room = this._view.name;
    const lights = [];
    for (const d of DATA.devices){
      if (d.area !== room) continue;
      for (const c of this._controlsOf(d)){
        if (c.domain !== "light") continue;
        const a = this._attrsOf(c.entity_id);
        const modes = a.supported_color_modes || [];
        const dim = (typeof a.brightness === "number") ||
                    (modes.length > 0 && !(modes.length === 1 && modes[0] === "onoff"));
        if (dim) lights.push({eid: c.entity_id, name: d.name, attrs: a});
      }
    }

    if (!lights.length){
      box.classList.remove("on");
      if (this._dimKey){ box.innerHTML = ""; this._dimRows = new Map(); this._dimKey = ""; }
      return;
    }

    box.classList.add("on");
    const key = room + "|" + lights.map(l => l.eid).join(",");

    if (key !== this._dimKey){
      this._dimKey = key;
      this._dimRows = new Map();
      box.innerHTML = lights.map(l => {
        const a = l.attrs;
        const minK = a.min_color_temp_kelvin || 2700;
        const maxK = a.max_color_temp_kelvin || 6500;
        return `<div class="d-row" data-eid="${this._esc(l.eid)}">
          <div class="d-head"><span>${this._esc(l.name)}</span><b>—</b></div>
          <input class="bri" type="range" min="1" max="100" step="1">
          <input class="kel" type="range" min="${minK}" max="${maxK}" step="50">
        </div>`;
      }).join("");

      box.querySelectorAll(".d-row").forEach(row => {
        const eid = row.dataset.eid;
        const bri = row.querySelector(".bri");
        const kel = row.querySelector(".kel");
        const label = row.querySelector(".d-head b");
        this._dimRows.set(eid, {row, bri, kel, label});

        const paint = () => { label.textContent = `${bri.value}% · ${kel.value}K`; };
        bri.addEventListener("input", paint);
        kel.addEventListener("input", paint);

        // 只有松手（change）才发服务，拖动过程中不发
        const commit = () => {
          this._hass.callService("light", "turn_on", {
            entity_id: eid,
            brightness: Math.max(1, Math.round((+bri.value * 255) / 100)),
            color_temp_kelvin: Math.round(+kel.value),
          });
        };
        bri.addEventListener("change", commit);
        kel.addEventListener("change", commit);
      });
    }

    // 外部状态变化时同步数值；正在拖的那根不要动，否则会跳
    const ae = this.shadowRoot.activeElement;
    for (const [eid, r] of this._dimRows){
      if (ae === r.bri || ae === r.kel) continue;
      const a = this._attrsOf(eid);
      if (typeof a.brightness === "number"){
        r.bri.value = String(Math.max(1, Math.round((a.brightness * 100) / 255)));
      }
      if (typeof a.color_temp_kelvin === "number"){
        r.kel.value = String(Math.round(a.color_temp_kelvin));
      }
      r.label.textContent = `${r.bri.value}% · ${r.kel.value}K`;
    }
  }

  _esc(s){
    return String(s).replace(/[&<>"']/g, c =>
      ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  /* ------------------------------------------------------------------ 交互 */
  _onPin(d){
    const c = this._controlsOf(d);
    if (!c.length) return;
    if (c.length === 1){
      this._call(c[0], "toggle");
      this._closeMenu();
      return;
    }
    this._openMenu(d, c);
  }

  _openMenu(d, controls){
    this._closeMenu();
    const menu = document.createElement("div");
    menu.className = "menu";

    const pt = this._svg.createSVGPoint();
    pt.x = d.x; pt.y = d.y;
    const scr = pt.matrixTransform(this._svg.getScreenCTM());
    const box = this._wrap.getBoundingClientRect();
    menu.style.left = Math.max(8, Math.min(box.width - 160, scr.x - box.left + 14)) + "px";
    menu.style.top = Math.max(8, scr.y - box.top - 12) + "px";

    for (const c of controls){
      const b = document.createElement("button");
      const on = this._stateOf(c.entity_id) === "on";
      b.innerHTML = `<span class="dot" style="background:${on ? T.menuDotOn : T.menuDotOff}"></span>` +
                    `${c.label || c.entity_id}`;
      b.onclick = ev => { ev.stopPropagation(); this._call(c, "toggle"); this._closeMenu(); };
      menu.appendChild(b);
    }
    this._wrap.appendChild(menu);
    this._menu = menu;
  }

  _closeMenu(){
    if (this._menu && this._menu.parentNode) this._menu.parentNode.removeChild(this._menu);
    this._menu = null;
  }

  _call(ctrl, service, extra){
    if (!this._hass) return;
    // 危险设备二次确认：只拦"关"这个方向，开是安全的
    const riskyMsg = (DATA.risky || {})[ctrl.entity_id];
    const turningOff = (service === "turn_off") ||
      (service === "toggle" && this._stateOf(ctrl.entity_id) === "on");
    if (riskyMsg && turningOff){
      this._confirmRisky(ctrl, riskyMsg, service, extra);
      return;
    }
    const data = Object.assign({ entity_id: ctrl.entity_id }, extra || {});
    this._hass.callService(ctrl.domain, service, data);
  }

  /* ---- 危险操作二次确认 ---- */
  _confirmRisky(ctrl, msg, service, extra, title, confirmText, onConfirm){
    this._closeRisky();
    const ov = document.createElement("div");
    ov.className = "risk-ov";
    const name = (ctrl.label || ctrl.entity_id);
    ov.innerHTML =
      '<div class="risk-box">' +
        '<div class="risk-ico">⚠</div>' +
        '<div class="risk-title">' + this._esc(title || "确认关闭？") + '</div>' +
        '<div class="risk-name">' + this._esc(name) + '</div>' +
        '<div class="risk-msg">' + this._esc(msg) + '</div>' +
        '<div class="risk-btns">' +
          '<button class="risk-no">取消</button>' +
          '<button class="risk-yes">' + this._esc(confirmText || "确认关闭") + '</button>' +
        '</div>' +
      '</div>';
    const close = () => this._closeRisky();
    ov.querySelector(".risk-no").onclick = ev => { ev.stopPropagation(); close(); };
    ov.onclick = ev => { if (ev.target === ov) close(); };
    ov.querySelector(".risk-yes").onclick = ev => {
      ev.stopPropagation();
      close();
      if (typeof onConfirm === "function"){ onConfirm(); return; }
      const data = Object.assign({ entity_id: ctrl.entity_id }, extra || {});
      this._hass.callService(ctrl.domain, service, data);
    };
    this._wrap.appendChild(ov);
  }

  _closeRisky(){
    const old = this._wrap && this._wrap.querySelector(".risk-ov");
    if (old) old.remove();
  }

  /* ---- 长按调光 ---- */
  _startPress(d, ev){
    const c = this._controlsOf(d);
    if (c.length !== 1 || c[0].domain !== "light") return;
    const a = this._attrsOf(c[0].entity_id);
    const modes = a.supported_color_modes || [];
    const dimmable = (typeof a.brightness === "number") ||
                     (modes.length > 0 && !(modes.length === 1 && modes[0] === "onoff"));
    if (!dimmable) return;

    clearTimeout(this._pressTimer);
    const startX = ev.clientX, startY = ev.clientY;
    this._press = {d, ctrl: c[0], x: startX, y: startY};

    this._pressTimer = setTimeout(() => {
      this._beginDim(d, c[0], startX, startY);
    }, 800);

    const cancel = (e) => {
      if (this._dim) return;
      if (Math.abs(e.clientX - startX) > 10 || Math.abs(e.clientY - startY) > 10){
        clearTimeout(this._pressTimer);
        this._press = null;
        window.removeEventListener("pointermove", cancel);
        window.removeEventListener("pointerup", up);
      }
    };
    const up = () => {
      clearTimeout(this._pressTimer);
      if (!this._dim) this._press = null;
      window.removeEventListener("pointermove", cancel);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", cancel);
    window.addEventListener("pointerup", up);
  }

  _beginDim(d, ctrl, x, y){
    const a = this._attrsOf(ctrl.entity_id);
    const b0 = typeof a.brightness === "number" ? a.brightness : 128;
    const k0 = typeof a.color_temp_kelvin === "number" ? a.color_temp_kelvin : 3800;
    const minK = a.min_color_temp_kelvin || 2700;
    const maxK = a.max_color_temp_kelvin || 6500;

    this._suppressClick = true;
    this._dim = {d, ctrl, x, y, b0, k0, minK, maxK, b: b0, k: k0, moved: false};

    const pin = this._pins.get(d.id);
    if (pin) pin.el.classList.add("dimmed");
    this._showBubble(x, y, `亮度 ${Math.round(b0 / 255 * 100)}% · ${Math.round(k0)}K`);

    window.addEventListener("pointermove", this._onDimMove);
    window.addEventListener("pointerup", this._onDimUp);
    window.addEventListener("pointercancel", this._onDimUp);
  }

  _onDimMove = (ev) => {
    const s = this._dim;
    if (!s) return;
    const dx = ev.clientX - s.x;
    const dy = ev.clientY - s.y;
    s.b = Math.max(1, Math.min(255, Math.round(s.b0 + dx * 1.1)));
    s.k = Math.max(s.minK, Math.min(s.maxK, Math.round(s.k0 - dy * 16)));
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) s.moved = true;
    this._showBubble(ev.clientX, ev.clientY,
      `亮度 ${Math.round(s.b / 255 * 100)}% · ${s.k}K`);
    ev.preventDefault();
  };

  _onDimUp = () => {
    const s = this._dim;
    if (!s) return;
    const pin = this._pins.get(s.d.id);
    if (pin) pin.el.classList.remove("dimmed");
    this._hideBubble();
    window.removeEventListener("pointermove", this._onDimMove);
    window.removeEventListener("pointerup", this._onDimUp);
    window.removeEventListener("pointercancel", this._onDimUp);

    if (s.moved){
      this._call(s.ctrl, "turn_on", { brightness: s.b, color_temp_kelvin: s.k });
    }
    this._dim = null;
    this._press = null;
    setTimeout(() => { this._suppressClick = false; }, 60);
  };

  _showBubble(clientX, clientY, text){
    const box = this._wrap.getBoundingClientRect();
    this._bubble.textContent = text;
    this._bubble.style.display = "block";
    this._bubble.style.left = (clientX - box.left) + "px";
    this._bubble.style.top = (clientY - box.top) + "px";
  }

  _hideBubble(){ this._bubble.style.display = "none"; }
}

if (!customElements.get("space-map")){
  customElements.define("space-map", SpaceMapCard);
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "space-map",
  name: "空间地图",
  description: "把设备投影到户型平面的控制面板",
});
