/* space-map v0.3 · 空间地图 Lovelace 卡片（零构建、单文件、无依赖）
 * 宽屏：左栏信息 / 中栏户型 / 右栏操作；窄屏：只留中栏 + 顶部信息条
 * 数据在 {"version": "0.4.0", "units": "cm", "canvas": [560, 860], "colors": {"light": "#ffcd5c", "cover": "#b08aff", "switch": "#5eead4", "wall_switch": "#5eead4", "media_player": "#ff8a5c", "sensor": "#78d18c", "binary_sensor": "#78d18c", "button": "#ff78aa", "scene": "#ff78aa", "vacuum": "#c8c87a", "gateway": "#8ab4ff", "pet": "#c9a0ff"}, "rooms": [{"name": "卧室", "points": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]], "bbox": [103.0, 0.0, 379.0, 410.0], "label": [242.07, 215.73], "temp": "sensor.wen_kong_ban_lu_w100_wo_shi_wen_du_wen_du"}, {"name": "大阳台", "points": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]], "bbox": [379.0, 190.0, 550.0, 410.0], "label": [464.5, 300.0], "temp": null}, {"name": "客厅", "points": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]], "bbox": [235.0, 410.0, 550.0, 665.0], "label": [392.5, 537.5], "temp": null}, {"name": "书房", "points": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]], "bbox": [235.0, 665.0, 550.0, 850.0], "label": [465.0, 743.0], "temp": null}, {"name": "玄关", "points": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]], "bbox": [235.0, 740.0, 380.0, 850.0], "label": [307.5, 795.0], "temp": "sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_wen_du"}, {"name": "浴室", "points": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]], "bbox": [103.0, 410.0, 235.0, 665.0], "label": [169.0, 537.5], "temp": null}, {"name": "小阳台", "points": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]], "bbox": [0.0, 420.0, 103.0, 665.0], "label": [51.5, 542.5], "temp": null}, {"name": "厨房", "points": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]], "bbox": [0.0, 665.0, 235.0, 850.0], "label": [117.5, 757.5], "temp": null}], "walls": [[340.0, 0.0, 160.0, 0.0], [340.0, 0.0, 340.0, 70.0], [160.0, 0.0, 160.0, 70.0], [379.0, 70.0, 340.0, 70.0], [160.0, 70.0, 103.0, 70.0], [379.0, 70.0, 379.0, 410.0], [103.0, 70.0, 103.0, 410.0], [550.0, 190.0, 395.0, 190.0], [550.0, 190.0, 550.0, 850.0], [550.0, 850.0, 0.0, 850.0], [0.0, 420.0, 0.0, 850.0], [103.0, 420.0, 0.0, 420.0], [550.0, 410.0, 379.0, 410.0], [379.0, 410.0, 103.0, 410.0], [235.0, 410.0, 235.0, 850.0], [235.0, 665.0, 0.0, 665.0], [103.0, 410.0, 103.0, 665.0], [380.0, 740.0, 235.0, 740.0], [380.0, 740.0, 380.0, 850.0], [379.0, 190.0, 395.0, 190.0]], "devices": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "area": "卧室", "kind": "light", "rank": 1, "x": 243.1, "y": 226.6, "gangs": null, "controls": [{"entity_id": "light.wo_shi_deng", "domain": "light", "label": "卧室·主灯"}], "state_entity": null, "battery": null}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "area": "卧室", "kind": "cover", "rank": 2, "x": 249.4, "y": 16.7, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_wo_shi", "domain": "cover", "label": "卧室·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_wo_shi_pei_zhi_zhuang_tai", "battery": null}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "area": "卧室", "kind": "sensor", "rank": 3, "x": 111.4, "y": 325.5, "gangs": null, "controls": [], "state_entity": "sensor.wen_kong_ban_lu_w100_wo_shi_shi_du_shi_du", "battery": null}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "area": "卧室", "kind": "switch", "rank": null, "x": 363.5, "y": 146.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_qian", "domain": "switch", "label": "卧室·插座（床前）"}], "state_entity": null, "battery": null}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "area": "卧室", "kind": "switch", "rank": null, "x": 116.2, "y": 116.3, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_you", "domain": "switch", "label": "卧室·插座（床右）"}], "state_entity": null, "battery": null}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "area": "卧室", "kind": "switch", "rank": null, "x": 109.9, "y": 290.6, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_zuo", "domain": "switch", "label": "卧室·插座（床左）"}], "state_entity": null, "battery": null}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "area": "大阳台", "kind": "light", "rank": 12, "x": 464.4, "y": 304.7, "gangs": null, "controls": [{"entity_id": "light.da_yang_tai_deng", "domain": "light", "label": "大阳台·主灯"}], "state_entity": null, "battery": null}, {"id": "a4dc161a95e44eec9ad78b4d739d8e78", "name": "大阳台·窗帘", "area": "大阳台", "kind": "cover", "rank": 13, "x": 464.1, "y": 406.2, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_da_yang_tai", "domain": "cover", "label": "大阳台·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_da_yang_tai_pei_zhi_zhuang_tai", "battery": null}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "area": "大阳台", "kind": "sensor", "rank": 14, "x": 512.4, "y": 368.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_ci_chu_you_ren", "battery": "sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_dian_chi_dian_ya"}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "area": "大阳台", "kind": "sensor", "rank": 15, "x": 417.5, "y": 368.8, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_men", "battery": "sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_dian_chi_dian_ya"}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "area": "大阳台", "kind": "binary_sensor", "rank": null, "x": 500.8, "y": 237.5, "gangs": null, "controls": [{"entity_id": "switch.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_auto_clean", "domain": "switch", "label": "大阳台·猫厕所 MAX2"}], "state_entity": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_frequent_use_detection", "battery": null}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "area": "客厅", "kind": "light", "rank": 4, "x": 394.9, "y": 539.8, "gangs": null, "controls": [{"entity_id": "light.ke_ting_deng", "domain": "light", "label": "客厅·主灯"}], "state_entity": null, "battery": null}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "area": "客厅", "kind": "media", "rank": 5, "x": 538.6, "y": 461.2, "gangs": null, "controls": [{"entity_id": "media_player.qi_ju_shi_qi_ju_shi", "domain": "media_player", "label": "客厅·HomePod mini"}], "state_entity": null, "battery": null}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "area": "客厅", "kind": "pet", "rank": 6, "x": 249.4, "y": 504.3, "gangs": null, "controls": [{"entity_id": "switch.zhi_neng_wei_shi_qi_solo_child_lock", "domain": "switch", "label": "客厅·喂食器 SOLO"}], "state_entity": "binary_sensor.zhi_neng_wei_shi_qi_solo_feeding", "battery": "sensor.zhi_neng_wei_shi_qi_solo_battery_level"}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "area": "客厅", "kind": "switch", "rank": null, "x": 250.1, "y": 541.1, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_you", "domain": "switch", "label": "客厅·插座（右）"}], "state_entity": null, "battery": null}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "area": "客厅", "kind": "switch", "rank": null, "x": 249.5, "y": 569.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_zuo", "domain": "switch", "label": "客厅·插座（左）"}], "state_entity": null, "battery": null}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "area": "客厅", "kind": "switch", "rank": null, "x": 537.6, "y": 505.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_sha_fa_bei", "domain": "switch", "label": "客厅·插座（沙发背）"}], "state_entity": null, "battery": null}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "area": "书房", "kind": "light", "rank": 7, "x": 440, "y": 745.5, "gangs": null, "controls": [{"entity_id": "light.shu_zhuo_deng", "domain": "light", "label": "书房·书桌灯"}], "state_entity": null, "battery": null}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "area": "书房", "kind": "light", "rank": 8, "x": 513, "y": 689.6, "gangs": null, "controls": [{"entity_id": "light.liu_guang_yi_cai_luo_di_deng_t1", "domain": "light", "label": "书房·落地灯 T1"}], "state_entity": null, "battery": null}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "area": "书房", "kind": "scene", "rank": 9, "x": 513, "y": 747.2, "gangs": null, "controls": [], "state_entity": null, "battery": "sensor.mo_fang_kong_zhi_qi_shu_fang_fan_zhuan_90_dian_chi_dian_ya"}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "area": "书房", "kind": "gateway", "rank": 10, "x": 514.1, "y": 807, "gangs": null, "controls": [], "state_entity": null, "battery": null}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "area": "书房", "kind": "switch", "rank": null, "x": 537, "y": 777.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_shu_fang", "domain": "switch", "label": "书房·插座"}], "state_entity": null, "battery": null}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "area": "玄关", "kind": "sensor", "rank": 18, "x": 310, "y": 828.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_ci_chu_you_ren", "battery": null}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "area": "玄关", "kind": "sensor", "rank": 19, "x": 260, "y": 827.1, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_zhuang_tai_chuan_gan_qi_p100_men", "battery": null}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "area": "浴室", "kind": "wall_switch", "rank": 20, "x": 169.1, "y": 545.9, "gangs": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "label": "排气扇", "domain": "light", "endpoint": 40, "key": "键1"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "label": "浴室灯", "domain": "light", "endpoint": 41, "key": "键2"}], "controls": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "domain": "light", "label": "排气扇"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "domain": "light", "label": "浴室灯"}], "state_entity": null, "battery": null}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 146, "y": 480.1, "gangs": null, "controls": [{"entity_id": "switch.wei_sheng_jian_p20_do_not_disturb", "domain": "switch", "label": "浴室·扫地机 P20"}], "state_entity": "binary_sensor.wei_sheng_jian_p20_charging", "battery": "sensor.wei_sheng_jian_p20_battery"}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 124.1, "y": 479.6, "gangs": null, "controls": [{"entity_id": "switch.p20_dock_child_lock", "domain": "switch", "label": "浴室·扫地机基站"}], "state_entity": "binary_sensor.p20_dock_clean_water_box", "battery": null}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "area": "小阳台", "kind": "light", "rank": 16, "x": 50.1, "y": 550, "gangs": null, "controls": [{"entity_id": "light.xiao_yang_tai_deng", "domain": "light", "label": "小阳台·主灯"}], "state_entity": null, "battery": null}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "area": "小阳台", "kind": "sensor", "rank": 17, "x": 77.1, "y": 653.4, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_men", "battery": "sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_dian_chi_dian_ya"}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "area": "厨房", "kind": "light", "rank": 11, "x": 120, "y": 759.9, "gangs": null, "controls": [{"entity_id": "light.chu_fang_deng", "domain": "light", "label": "厨房·主灯"}], "state_entity": null, "battery": null}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "area": "厨房", "kind": "switch", "rank": null, "x": 172.4, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_you", "domain": "switch", "label": "厨房·插座（右）"}], "state_entity": null, "battery": null}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "area": "厨房", "kind": "switch", "rank": null, "x": 198.9, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_zuo", "domain": "switch", "label": "厨房·插座（左）"}], "state_entity": null, "battery": null}], "topology": [{"target": "书房·书桌灯", "via": "玄关·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键1 → 切换书桌灯"}, {"target": "客厅·主灯", "via": "玄关·墙面开关 Z1", "gang": 2, "note": "Studio 自动化：按键2 → 切换客厅灯"}, {"target": "卧室·主灯", "via": "卧室·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键 → 切换卧室灯"}], "scenes": [{"name": "回家", "icon": "🏠", "entity": "script.hui_jia"}, {"name": "离家", "icon": "🚪", "entity": "script.li_jia"}, {"name": "睡觉", "icon": "🌙", "entity": "script.shui_jiao"}, {"name": "观影", "icon": "🎬", "entity": "script.guan_ying"}], "ai": [{"icon": "☀", "entity": "input_text.ai_line_weather"}, {"icon": "🧳", "entity": "input_text.ai_line_trip"}, {"icon": "🌡", "entity": "input_text.ai_line_home"}, {"icon": "⚠", "entity": "input_text.ai_line_cross"}], "aiMeta": "input_text.ai_meta", "aiScript": "script.ai_brief_refresh", "iso": {"viewBox": [0, 0, 1104.52, 813.0], "H": 280.0, "T": 10.0, "flip": false, "camera": [1.0, 1.0], "floors": [{"type": "floor", "name": "卧室", "points": [[1029.7, 310.56], [995.83, 291.27], [1056.46, 256.76], [902.43, 167.88], [842.66, 202.9], [793.83, 174.33], [500.91, 342.58], [738.38, 479.66]], "z": 383.0, "shade": 1.0}, {"type": "floor", "name": "大阳台", "points": [[1073.76, 456.68], [927.8, 372.4], [740.01, 480.82], [885.97, 565.1]], "z": 764.5, "shade": 1.0}, {"type": "floor", "name": "客厅", "points": [[883.23, 566.35], [613.14, 410.41], [394.49, 536.65], [664.58, 692.59]], "z": 930.0, "shade": 1.0}, {"type": "floor", "name": "书房", "points": [[662.5, 693.59], [392.71, 537.86], [328.7, 575.07], [452.27, 647.89], [359.28, 700.59], [504.05, 785.13]], "z": 1140.0, "shade": 1.0}, {"type": "floor", "name": "玄关", "points": [[450.24, 646.31], [327.43, 575.4], [234.27, 629.19], [357.08, 700.1]], "z": 1102.5, "shade": 1.0}, {"type": "floor", "name": "浴室", "points": [[610.55, 409.43], [497.83, 344.35], [280.07, 470.07], [392.79, 535.15]], "z": 706.5, "shade": 1.0}, {"type": "floor", "name": "小阳台", "points": [[487.64, 348.53], [399.78, 297.81], [190.81, 418.47], [278.66, 469.19]], "z": 594.0, "shade": 1.0}, {"type": "floor", "name": "厨房", "points": [[389.62, 536.33], [188.83, 420.4], [30.76, 511.67], [231.55, 627.6]], "z": 875.0, "shade": 1.0}], "walls": [{"type": "wall", "seg": [340.0, 0.0, 160.0, 0.0], "top": [[1063.2, 114.0], [1054.54, 119.0], [898.66, 29.0], [907.32, 24.0]], "faces": [{"points": [[1063.2, 254.0], [1054.54, 259.0], [1054.54, 119.0], [1063.2, 114.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1054.54, 259.0], [898.66, 169.0], [898.66, 29.0], [1054.54, 119.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 250.0, "shade": 1.0}, {"type": "wall", "seg": [340.0, 0.0, 340.0, 70.0], "top": [[1054.54, 114.0], [1063.2, 119.0], [1002.58, 154.0], [993.92, 149.0]], "faces": [{"points": [[1063.2, 259.0], [1002.58, 294.0], [1002.58, 154.0], [1063.2, 119.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1002.58, 294.0], [993.92, 289.0], [993.92, 149.0], [1002.58, 154.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 375.0, "shade": 1.0}, {"type": "wall", "seg": [160.0, 0.0, 160.0, 70.0], "top": [[898.66, 24.0], [907.32, 29.0], [846.7, 64.0], [838.04, 59.0]], "faces": [{"points": [[907.32, 169.0], [846.7, 204.0], [846.7, 64.0], [907.32, 29.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[846.7, 204.0], [838.04, 199.0], [838.04, 59.0], [846.7, 64.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 195.0, "shade": 1.0}, {"type": "wall", "seg": [379.0, 70.0, 340.0, 70.0], "top": [[1036.35, 168.5], [1027.69, 173.5], [993.92, 154.0], [1002.58, 149.0]], "faces": [{"points": [[1036.35, 308.5], [1027.69, 313.5], [1027.69, 173.5], [1036.35, 168.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1027.69, 313.5], [993.92, 294.0], [993.92, 154.0], [1027.69, 173.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 429.5, "shade": 1.0}, {"type": "wall", "seg": [160.0, 70.0, 103.0, 70.0], "top": [[846.7, 59.0], [838.04, 64.0], [788.68, 35.5], [797.34, 30.5]], "faces": [{"points": [[846.7, 199.0], [838.04, 204.0], [838.04, 64.0], [846.7, 59.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[838.04, 204.0], [788.68, 175.5], [788.68, 35.5], [838.04, 64.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 201.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 70.0, 379.0, 410.0], "top": [[1027.69, 168.5], [1036.35, 173.5], [741.91, 343.5], [733.25, 338.5]], "faces": [{"points": [[1036.35, 313.5], [741.91, 483.5], [741.91, 343.5], [1036.35, 173.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[741.91, 483.5], [733.25, 478.5], [733.25, 338.5], [741.91, 343.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 619.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 70.0, 103.0, 410.0], "top": [[788.68, 30.5], [797.34, 35.5], [502.9, 205.5], [494.24, 200.5]], "faces": [{"points": [[797.34, 175.5], [502.9, 345.5], [502.9, 205.5], [797.34, 35.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[502.9, 345.5], [494.24, 340.5], [494.24, 200.5], [502.9, 205.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 343.0, "shade": 1.0}, {"type": "wall", "seg": [550.0, 190.0, 395.0, 190.0], "top": [[1080.52, 314.0], [1071.86, 319.0], [937.63, 241.5], [946.29, 236.5]], "faces": [{"points": [[1080.52, 454.0], [1071.86, 459.0], [1071.86, 319.0], [1080.52, 314.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1071.86, 459.0], [937.63, 381.5], [937.63, 241.5], [1071.86, 319.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 662.5, "shade": 1.0}, {"type": "wall", "seg": [550.0, 190.0, 550.0, 850.0], "top": [[1071.86, 314.0], [1080.52, 319.0], [508.96, 649.0], [500.3, 644.0]], "faces": [{"points": [[1080.52, 459.0], [508.96, 789.0], [508.96, 649.0], [1080.52, 319.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[508.96, 789.0], [500.3, 784.0], [500.3, 644.0], [508.96, 649.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1070.0, "shade": 1.0}, {"type": "wall", "seg": [550.0, 850.0, 0.0, 850.0], "top": [[508.96, 644.0], [500.3, 649.0], [24.0, 374.0], [32.66, 369.0]], "faces": [{"points": [[508.96, 784.0], [500.3, 789.0], [500.3, 649.0], [508.96, 644.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[500.3, 789.0], [24.0, 514.0], [24.0, 374.0], [500.3, 649.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1125.0, "shade": 1.0}, {"type": "wall", "seg": [0.0, 420.0, 0.0, 850.0], "top": [[396.38, 154.0], [405.04, 159.0], [32.66, 374.0], [24.0, 369.0]], "faces": [{"points": [[405.04, 299.0], [32.66, 514.0], [32.66, 374.0], [405.04, 159.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[32.66, 514.0], [24.0, 509.0], [24.0, 369.0], [32.66, 374.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 635.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 420.0, 0.0, 420.0], "top": [[494.24, 205.5], [485.58, 210.5], [396.38, 159.0], [405.04, 154.0]], "faces": [{"points": [[494.24, 345.5], [485.58, 350.5], [485.58, 210.5], [494.24, 205.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[485.58, 350.5], [396.38, 299.0], [396.38, 159.0], [485.58, 210.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 471.5, "shade": 1.0}, {"type": "wall", "seg": [550.0, 410.0, 379.0, 410.0], "top": [[890.0, 424.0], [881.34, 429.0], [733.25, 343.5], [741.91, 338.5]], "faces": [{"points": [[890.0, 564.0], [881.34, 569.0], [881.34, 429.0], [890.0, 424.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[881.34, 569.0], [733.25, 483.5], [733.25, 343.5], [881.34, 429.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 874.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 410.0, 103.0, 410.0], "top": [[741.91, 338.5], [733.25, 343.5], [494.24, 205.5], [502.9, 200.5]], "faces": [{"points": [[741.91, 478.5], [733.25, 483.5], [733.25, 343.5], [741.91, 338.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[733.25, 483.5], [494.24, 345.5], [494.24, 205.5], [733.25, 343.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 651.0, "shade": 1.0}, {"type": "wall", "seg": [235.0, 410.0, 235.0, 850.0], "top": [[608.55, 266.5], [617.21, 271.5], [236.17, 491.5], [227.51, 486.5]], "faces": [{"points": [[617.21, 411.5], [236.17, 631.5], [236.17, 491.5], [617.21, 271.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[236.17, 631.5], [227.51, 626.5], [227.51, 486.5], [236.17, 491.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 865.0, "shade": 1.0}, {"type": "wall", "seg": [235.0, 665.0, 0.0, 665.0], "top": [[396.38, 394.0], [387.72, 399.0], [184.21, 281.5], [192.87, 276.5]], "faces": [{"points": [[396.38, 534.0], [387.72, 539.0], [387.72, 399.0], [396.38, 394.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[387.72, 539.0], [184.21, 421.5], [184.21, 281.5], [387.72, 399.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 782.5, "shade": 1.0}, {"type": "wall", "seg": [103.0, 410.0, 103.0, 665.0], "top": [[494.24, 200.5], [502.9, 205.5], [282.07, 333.0], [273.41, 328.0]], "faces": [{"points": [[502.9, 345.5], [282.07, 473.0], [282.07, 333.0], [502.9, 205.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[282.07, 473.0], [273.41, 468.0], [273.41, 328.0], [282.07, 333.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 640.5, "shade": 1.0}, {"type": "wall", "seg": [380.0, 740.0, 235.0, 740.0], "top": [[457.0, 504.0], [448.34, 509.0], [322.77, 436.5], [331.43, 431.5]], "faces": [{"points": [[457.0, 644.0], [448.34, 649.0], [448.34, 509.0], [457.0, 504.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[448.34, 649.0], [322.77, 576.5], [322.77, 436.5], [448.34, 509.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1047.5, "shade": 1.0}, {"type": "wall", "seg": [380.0, 740.0, 380.0, 850.0], "top": [[448.34, 504.0], [457.0, 509.0], [361.74, 564.0], [353.08, 559.0]], "faces": [{"points": [[457.0, 649.0], [361.74, 704.0], [361.74, 564.0], [457.0, 509.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[361.74, 704.0], [353.08, 699.0], [353.08, 559.0], [361.74, 564.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1175.0, "shade": 1.0}, {"type": "wall", "seg": [379.0, 190.0, 395.0, 190.0], "top": [[923.77, 233.5], [932.43, 228.5], [946.29, 236.5], [937.63, 241.5]], "faces": [{"points": [[946.29, 376.5], [937.63, 381.5], [937.63, 241.5], [946.29, 236.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[937.63, 381.5], [923.77, 373.5], [923.77, 233.5], [937.63, 241.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 577.0, "shade": 1.0}], "decals": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "kind": "light", "rank": 1, "area": "卧室", "x": 243.1, "y": 226.6, "sx": 778.72, "sy": 321.35, "z": 469.7}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "kind": "cover", "rank": 2, "area": "卧室", "x": 249.4, "y": 16.7, "sx": 965.95, "sy": 219.55, "z": 266.1}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "kind": "sensor", "rank": 3, "area": "卧室", "x": 111.4, "y": 325.5, "sx": 579.02, "sy": 304.95, "z": 436.9}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "kind": "switch", "rank": null, "area": "卧室", "x": 363.5, "y": 146.8, "sx": 952.09, "sy": 341.65, "z": 510.3}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "kind": "switch", "rank": null, "area": "卧室", "x": 116.2, "y": 116.3, "sx": 764.34, "sy": 202.75, "z": 232.5}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "kind": "switch", "rank": null, "area": "卧室", "x": 109.9, "y": 290.6, "sx": 607.94, "sy": 286.75, "z": 400.5}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "kind": "light", "rank": 12, "area": "大阳台", "x": 464.4, "y": 304.7, "sx": 902.73, "sy": 471.05, "z": 769.1}, {"id": "a4dc161a95e44eec9ad78b4d739d8e78", "name": "大阳台·窗帘", "kind": "cover", "rank": 13, "area": "大阳台", "x": 464.1, "y": 406.2, "sx": 814.57, "sy": 521.65, "z": 870.3}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "kind": "sensor", "rank": 14, "area": "大阳台", "x": 512.4, "y": 368.2, "sx": 889.31, "sy": 526.8, "z": 880.6}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "kind": "sensor", "rank": 15, "area": "大阳台", "x": 417.5, "y": 368.8, "sx": 806.6, "sy": 479.65, "z": 786.3}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "kind": "binary_sensor", "rank": null, "area": "大阳台", "x": 500.8, "y": 237.5, "sx": 992.45, "sy": 455.65, "z": 738.3}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "kind": "light", "rank": 4, "area": "客厅", "x": 394.9, "y": 539.8, "sx": 638.95, "sy": 553.85, "z": 934.7}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "kind": "media", "rank": 5, "area": "客厅", "x": 538.6, "y": 461.2, "sx": 831.46, "sy": 586.4, "z": 999.8}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "kind": "pet", "rank": 6, "area": "客厅", "x": 249.4, "y": 504.3, "sx": 543.69, "sy": 463.35, "z": 753.7}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "kind": "switch", "rank": null, "area": "客厅", "x": 250.1, "y": 541.1, "sx": 512.42, "sy": 482.1, "z": 791.2}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "kind": "switch", "rank": null, "area": "客厅", "x": 249.5, "y": 569.8, "sx": 487.05, "sy": 496.15, "z": 819.3}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "kind": "switch", "rank": null, "area": "客厅", "x": 537.6, "y": 505.4, "sx": 792.32, "sy": 608.0, "z": 1043.0}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "kind": "light", "rank": 7, "area": "书房", "x": 440, "y": 745.5, "sx": 499.87, "sy": 679.25, "z": 1185.5}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "kind": "light", "rank": 8, "area": "书房", "x": 513, "y": 689.6, "sx": 611.49, "sy": 687.8, "z": 1202.6}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "kind": "scene", "rank": 9, "area": "书房", "x": 513, "y": 747.2, "sx": 561.61, "sy": 716.6, "z": 1260.2}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "kind": "gateway", "rank": 10, "area": "书房", "x": 514.1, "y": 807, "sx": 510.78, "sy": 747.05, "z": 1321.1}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "kind": "switch", "rank": null, "area": "书房", "x": 537, "y": 777.4, "sx": 556.24, "sy": 743.7, "z": 1314.4}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "kind": "sensor", "rank": 18, "area": "玄关", "x": 310, "y": 828.2, "sx": 315.67, "sy": 655.6, "z": 1138.2}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "kind": "sensor", "rank": 19, "area": "玄关", "x": 260, "y": 827.1, "sx": 273.32, "sy": 630.05, "z": 1087.1}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "kind": "wall_switch", "rank": 20, "area": "浴室", "x": 169.1, "y": 545.9, "sx": 438.12, "sy": 444.0, "z": 715.0}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "kind": "binary_sensor", "rank": null, "area": "浴室", "x": 146, "y": 480.1, "sx": 475.1, "sy": 399.55, "z": 626.1}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "kind": "binary_sensor", "rank": null, "area": "浴室", "x": 124.1, "y": 479.6, "sx": 456.57, "sy": 388.35, "z": 603.7}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "kind": "light", "rank": 16, "area": "小阳台", "x": 50.1, "y": 550, "sx": 331.52, "sy": 386.55, "z": 600.1}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "kind": "sensor", "rank": 17, "area": "小阳台", "x": 77.1, "y": 653.4, "sx": 265.35, "sy": 451.75, "z": 730.5}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "kind": "light", "rank": 11, "area": "厨房", "x": 120, "y": 759.9, "sx": 210.28, "sy": 526.45, "z": 879.9}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "kind": "switch", "rank": null, "area": "厨房", "x": 172.4, "y": 825.2, "sx": 199.11, "sy": 585.3, "z": 997.6}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "kind": "switch", "rank": null, "area": "厨房", "x": 198.9, "y": 825.2, "sx": 222.05, "sy": 598.55, "z": 1024.1}], "layers": [{"type": "wall", "seg": [160.0, 0.0, 160.0, 70.0], "top": [[898.66, 24.0], [907.32, 29.0], [846.7, 64.0], [838.04, 59.0]], "faces": [{"points": [[907.32, 169.0], [846.7, 204.0], [846.7, 64.0], [907.32, 29.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[846.7, 204.0], [838.04, 199.0], [838.04, 59.0], [846.7, 64.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 195.0, "shade": 1.0}, {"type": "wall", "seg": [160.0, 70.0, 103.0, 70.0], "top": [[846.7, 59.0], [838.04, 64.0], [788.68, 35.5], [797.34, 30.5]], "faces": [{"points": [[846.7, 199.0], [838.04, 204.0], [838.04, 64.0], [846.7, 59.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[838.04, 204.0], [788.68, 175.5], [788.68, 35.5], [838.04, 64.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 201.5, "shade": 1.0}, {"type": "wall", "seg": [340.0, 0.0, 160.0, 0.0], "top": [[1063.2, 114.0], [1054.54, 119.0], [898.66, 29.0], [907.32, 24.0]], "faces": [{"points": [[1063.2, 254.0], [1054.54, 259.0], [1054.54, 119.0], [1063.2, 114.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1054.54, 259.0], [898.66, 169.0], [898.66, 29.0], [1054.54, 119.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 250.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 70.0, 103.0, 410.0], "top": [[788.68, 30.5], [797.34, 35.5], [502.9, 205.5], [494.24, 200.5]], "faces": [{"points": [[797.34, 175.5], [502.9, 345.5], [502.9, 205.5], [797.34, 35.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[502.9, 345.5], [494.24, 340.5], [494.24, 200.5], [502.9, 205.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 343.0, "shade": 1.0}, {"type": "wall", "seg": [340.0, 0.0, 340.0, 70.0], "top": [[1054.54, 114.0], [1063.2, 119.0], [1002.58, 154.0], [993.92, 149.0]], "faces": [{"points": [[1063.2, 259.0], [1002.58, 294.0], [1002.58, 154.0], [1063.2, 119.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1002.58, 294.0], [993.92, 289.0], [993.92, 149.0], [1002.58, 154.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 375.0, "shade": 1.0}, {"type": "floor", "name": "卧室", "points": [[1029.7, 310.56], [995.83, 291.27], [1056.46, 256.76], [902.43, 167.88], [842.66, 202.9], [793.83, 174.33], [500.91, 342.58], [738.38, 479.66]], "z": 383.0, "shade": 1.0}, {"type": "wall", "seg": [379.0, 70.0, 340.0, 70.0], "top": [[1036.35, 168.5], [1027.69, 173.5], [993.92, 154.0], [1002.58, 149.0]], "faces": [{"points": [[1036.35, 308.5], [1027.69, 313.5], [1027.69, 173.5], [1036.35, 168.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1027.69, 313.5], [993.92, 294.0], [993.92, 154.0], [1027.69, 173.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 429.5, "shade": 1.0}, {"type": "wall", "seg": [103.0, 420.0, 0.0, 420.0], "top": [[494.24, 205.5], [485.58, 210.5], [396.38, 159.0], [405.04, 154.0]], "faces": [{"points": [[494.24, 345.5], [485.58, 350.5], [485.58, 210.5], [494.24, 205.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[485.58, 350.5], [396.38, 299.0], [396.38, 159.0], [485.58, 210.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 471.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 190.0, 395.0, 190.0], "top": [[923.77, 233.5], [932.43, 228.5], [946.29, 236.5], [937.63, 241.5]], "faces": [{"points": [[946.29, 376.5], [937.63, 381.5], [937.63, 241.5], [946.29, 236.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[937.63, 381.5], [923.77, 373.5], [923.77, 233.5], [937.63, 241.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 577.0, "shade": 1.0}, {"type": "floor", "name": "小阳台", "points": [[487.64, 348.53], [399.78, 297.81], [190.81, 418.47], [278.66, 469.19]], "z": 594.0, "shade": 1.0}, {"type": "wall", "seg": [379.0, 70.0, 379.0, 410.0], "top": [[1027.69, 168.5], [1036.35, 173.5], [741.91, 343.5], [733.25, 338.5]], "faces": [{"points": [[1036.35, 313.5], [741.91, 483.5], [741.91, 343.5], [1036.35, 173.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[741.91, 483.5], [733.25, 478.5], [733.25, 338.5], [741.91, 343.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 619.0, "shade": 1.0}, {"type": "wall", "seg": [0.0, 420.0, 0.0, 850.0], "top": [[396.38, 154.0], [405.04, 159.0], [32.66, 374.0], [24.0, 369.0]], "faces": [{"points": [[405.04, 299.0], [32.66, 514.0], [32.66, 374.0], [405.04, 159.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[32.66, 514.0], [24.0, 509.0], [24.0, 369.0], [32.66, 374.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 635.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 410.0, 103.0, 665.0], "top": [[494.24, 200.5], [502.9, 205.5], [282.07, 333.0], [273.41, 328.0]], "faces": [{"points": [[502.9, 345.5], [282.07, 473.0], [282.07, 333.0], [502.9, 205.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[282.07, 473.0], [273.41, 468.0], [273.41, 328.0], [282.07, 333.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 640.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 410.0, 103.0, 410.0], "top": [[741.91, 338.5], [733.25, 343.5], [494.24, 205.5], [502.9, 200.5]], "faces": [{"points": [[741.91, 478.5], [733.25, 483.5], [733.25, 343.5], [741.91, 338.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[733.25, 483.5], [494.24, 345.5], [494.24, 205.5], [733.25, 343.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 651.0, "shade": 1.0}, {"type": "wall", "seg": [550.0, 190.0, 395.0, 190.0], "top": [[1080.52, 314.0], [1071.86, 319.0], [937.63, 241.5], [946.29, 236.5]], "faces": [{"points": [[1080.52, 454.0], [1071.86, 459.0], [1071.86, 319.0], [1080.52, 314.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1071.86, 459.0], [937.63, 381.5], [937.63, 241.5], [1071.86, 319.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 662.5, "shade": 1.0}, {"type": "floor", "name": "浴室", "points": [[610.55, 409.43], [497.83, 344.35], [280.07, 470.07], [392.79, 535.15]], "z": 706.5, "shade": 1.0}, {"type": "floor", "name": "大阳台", "points": [[1073.76, 456.68], [927.8, 372.4], [740.01, 480.82], [885.97, 565.1]], "z": 764.5, "shade": 1.0}, {"type": "wall", "seg": [235.0, 665.0, 0.0, 665.0], "top": [[396.38, 394.0], [387.72, 399.0], [184.21, 281.5], [192.87, 276.5]], "faces": [{"points": [[396.38, 534.0], [387.72, 539.0], [387.72, 399.0], [396.38, 394.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[387.72, 539.0], [184.21, 421.5], [184.21, 281.5], [387.72, 399.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 782.5, "shade": 1.0}, {"type": "wall", "seg": [235.0, 410.0, 235.0, 850.0], "top": [[608.55, 266.5], [617.21, 271.5], [236.17, 491.5], [227.51, 486.5]], "faces": [{"points": [[617.21, 411.5], [236.17, 631.5], [236.17, 491.5], [617.21, 271.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[236.17, 631.5], [227.51, 626.5], [227.51, 486.5], [236.17, 491.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 865.0, "shade": 1.0}, {"type": "wall", "seg": [550.0, 410.0, 379.0, 410.0], "top": [[890.0, 424.0], [881.34, 429.0], [733.25, 343.5], [741.91, 338.5]], "faces": [{"points": [[890.0, 564.0], [881.34, 569.0], [881.34, 429.0], [890.0, 424.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[881.34, 569.0], [733.25, 483.5], [733.25, 343.5], [881.34, 429.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 874.5, "shade": 1.0}, {"type": "floor", "name": "厨房", "points": [[389.62, 536.33], [188.83, 420.4], [30.76, 511.67], [231.55, 627.6]], "z": 875.0, "shade": 1.0}, {"type": "floor", "name": "客厅", "points": [[883.23, 566.35], [613.14, 410.41], [394.49, 536.65], [664.58, 692.59]], "z": 930.0, "shade": 1.0}, {"type": "wall", "seg": [380.0, 740.0, 235.0, 740.0], "top": [[457.0, 504.0], [448.34, 509.0], [322.77, 436.5], [331.43, 431.5]], "faces": [{"points": [[457.0, 644.0], [448.34, 649.0], [448.34, 509.0], [457.0, 504.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[448.34, 649.0], [322.77, 576.5], [322.77, 436.5], [448.34, 509.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1047.5, "shade": 1.0}, {"type": "wall", "seg": [550.0, 190.0, 550.0, 850.0], "top": [[1071.86, 314.0], [1080.52, 319.0], [508.96, 649.0], [500.3, 644.0]], "faces": [{"points": [[1080.52, 459.0], [508.96, 789.0], [508.96, 649.0], [1080.52, 319.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[508.96, 789.0], [500.3, 784.0], [500.3, 644.0], [508.96, 649.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1070.0, "shade": 1.0}, {"type": "floor", "name": "玄关", "points": [[450.24, 646.31], [327.43, 575.4], [234.27, 629.19], [357.08, 700.1]], "z": 1102.5, "shade": 1.0}, {"type": "wall", "seg": [550.0, 850.0, 0.0, 850.0], "top": [[508.96, 644.0], [500.3, 649.0], [24.0, 374.0], [32.66, 369.0]], "faces": [{"points": [[508.96, 784.0], [500.3, 789.0], [500.3, 649.0], [508.96, 644.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[500.3, 789.0], [24.0, 514.0], [24.0, 374.0], [500.3, 649.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1125.0, "shade": 1.0}, {"type": "floor", "name": "书房", "points": [[662.5, 693.59], [392.71, 537.86], [328.7, 575.07], [452.27, 647.89], [359.28, 700.59], [504.05, 785.13]], "z": 1140.0, "shade": 1.0}, {"type": "wall", "seg": [380.0, 740.0, 380.0, 850.0], "top": [[448.34, 504.0], [457.0, 509.0], [361.74, 564.0], [353.08, 559.0]], "faces": [{"points": [[457.0, 649.0], [361.74, 704.0], [361.74, 564.0], [457.0, 509.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[361.74, 704.0], [353.08, 699.0], [353.08, 559.0], [361.74, 564.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1175.0, "shade": 1.0}], "order": ["wall:[160.0, 0.0, 160.0, 70.0]", "wall:[160.0, 70.0, 103.0, 70.0]", "wall:[340.0, 0.0, 160.0, 0.0]", "wall:[103.0, 70.0, 103.0, 410.0]", "wall:[340.0, 0.0, 340.0, 70.0]", "floor:卧室", "wall:[379.0, 70.0, 340.0, 70.0]", "wall:[103.0, 420.0, 0.0, 420.0]", "wall:[379.0, 190.0, 395.0, 190.0]", "floor:小阳台", "wall:[379.0, 70.0, 379.0, 410.0]", "wall:[0.0, 420.0, 0.0, 850.0]", "wall:[103.0, 410.0, 103.0, 665.0]", "wall:[379.0, 410.0, 103.0, 410.0]", "wall:[550.0, 190.0, 395.0, 190.0]", "floor:浴室", "floor:大阳台", "wall:[235.0, 665.0, 0.0, 665.0]", "wall:[235.0, 410.0, 235.0, 850.0]", "wall:[550.0, 410.0, 379.0, 410.0]", "floor:厨房", "floor:客厅", "wall:[380.0, 740.0, 235.0, 740.0]", "wall:[550.0, 190.0, 550.0, 850.0]", "floor:玄关", "wall:[550.0, 850.0, 0.0, 850.0]", "floor:书房", "wall:[380.0, 740.0, 380.0, 850.0]"]}, "panel": {"pets": [{"name": "猫厕所 MAX2", "metrics": [{"label": "猫砂", "entity": "sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_litter_level", "unit": "%"}, {"label": "除臭剂", "entity": "sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_odor_eliminator_n50_left_days", "unit": "天", "warn_le": 3}]}, {"name": "喂食器 SOLO", "metrics": [{"label": "余粮", "entity": "binary_sensor.zhi_neng_wei_shi_qi_solo_food_level", "map": {"on": "充足", "off": "已空"}}, {"label": "干燥剂", "entity": "sensor.zhi_neng_wei_shi_qi_solo_desiccant_left_days", "unit": "天", "warn_le": 3}]}], "vacuum": {"name": "扫地机 P20", "entity": "vacuum.wei_sheng_jian_p20", "battery": "sensor.wei_sheng_jian_p20_battery", "status": {"docked": "在充电座", "cleaning": "清扫中", "returning": "返回中", "idle": "待机", "paused": "已暂停", "error": "故障"}}, "media": {"name": "客厅 HomePod", "entity": "media_player.qi_ju_shi_qi_ju_shi"}, "acPlaceholder": "空调 · 未接入"}, "batch": [{"label": "全关灯", "icon": "💡", "domain": "light", "service": "turn_off"}, {"label": "全关插座", "icon": "🔌", "domain": "switch", "service": "turn_off", "targets": ["switch.qiang_bi_cha_zuo_chu_fang_you", "switch.qiang_bi_cha_zuo_chu_fang_zuo", "switch.qiang_bi_cha_zuo_chuang_qian", "switch.qiang_bi_cha_zuo_chuang_you", "switch.qiang_bi_cha_zuo_chuang_zuo", "switch.qiang_bi_cha_zuo_ke_ting_you", "switch.qiang_bi_cha_zuo_ke_ting_zuo", "switch.qiang_bi_cha_zuo_sha_fa_bei", "switch.qiang_bi_cha_zuo_shu_fang"]}, {"label": "关窗帘", "icon": "🪟", "domain": "cover", "service": "close_cover", "targets": ["cover.chuang_lian_ban_lu_da_yang_tai", "cover.chuang_lian_ban_lu_wo_shi"]}], "quickActions": [{"label": "扫地机清扫", "icon": "🤖", "domain": "vacuum", "service": "start"}, {"label": "扫地机回充", "icon": "🔋", "domain": "vacuum", "service": "return_to_base"}], "stats": {"rooms": 8, "devices": 32}} 处注入，由 tools/make_card.py 生成
 */
const DATA = {"version": "0.4.0", "units": "cm", "canvas": [560, 860], "colors": {"light": "#ffcd5c", "cover": "#b08aff", "switch": "#5eead4", "wall_switch": "#5eead4", "media_player": "#ff8a5c", "sensor": "#78d18c", "binary_sensor": "#78d18c", "button": "#ff78aa", "scene": "#ff78aa", "vacuum": "#c8c87a", "gateway": "#8ab4ff", "pet": "#c9a0ff"}, "rooms": [{"name": "卧室", "points": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]], "bbox": [103.0, 0.0, 379.0, 410.0], "label": [242.07, 215.73], "temp": "sensor.wen_kong_ban_lu_w100_wo_shi_wen_du_wen_du"}, {"name": "大阳台", "points": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]], "bbox": [379.0, 190.0, 550.0, 410.0], "label": [464.5, 300.0], "temp": null}, {"name": "客厅", "points": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]], "bbox": [235.0, 410.0, 550.0, 665.0], "label": [392.5, 537.5], "temp": null}, {"name": "书房", "points": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]], "bbox": [235.0, 665.0, 550.0, 850.0], "label": [465.0, 743.0], "temp": null}, {"name": "玄关", "points": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]], "bbox": [235.0, 740.0, 380.0, 850.0], "label": [307.5, 795.0], "temp": "sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_wen_du"}, {"name": "浴室", "points": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]], "bbox": [103.0, 410.0, 235.0, 665.0], "label": [169.0, 537.5], "temp": null}, {"name": "小阳台", "points": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]], "bbox": [0.0, 420.0, 103.0, 665.0], "label": [51.5, 542.5], "temp": null}, {"name": "厨房", "points": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]], "bbox": [0.0, 665.0, 235.0, 850.0], "label": [117.5, 757.5], "temp": null}], "walls": [[340.0, 0.0, 160.0, 0.0], [340.0, 0.0, 340.0, 70.0], [160.0, 0.0, 160.0, 70.0], [379.0, 70.0, 340.0, 70.0], [160.0, 70.0, 103.0, 70.0], [379.0, 70.0, 379.0, 410.0], [103.0, 70.0, 103.0, 410.0], [550.0, 190.0, 395.0, 190.0], [550.0, 190.0, 550.0, 850.0], [550.0, 850.0, 0.0, 850.0], [0.0, 420.0, 0.0, 850.0], [103.0, 420.0, 0.0, 420.0], [550.0, 410.0, 379.0, 410.0], [379.0, 410.0, 103.0, 410.0], [235.0, 410.0, 235.0, 850.0], [235.0, 665.0, 0.0, 665.0], [103.0, 410.0, 103.0, 665.0], [380.0, 740.0, 235.0, 740.0], [380.0, 740.0, 380.0, 850.0], [379.0, 190.0, 395.0, 190.0]], "devices": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "area": "卧室", "kind": "light", "rank": 1, "x": 243.1, "y": 226.6, "gangs": null, "controls": [{"entity_id": "light.wo_shi_deng", "domain": "light", "label": "卧室·主灯"}], "state_entity": null, "battery": null}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "area": "卧室", "kind": "cover", "rank": 2, "x": 249.4, "y": 16.7, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_wo_shi", "domain": "cover", "label": "卧室·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_wo_shi_pei_zhi_zhuang_tai", "battery": null}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "area": "卧室", "kind": "sensor", "rank": 3, "x": 111.4, "y": 325.5, "gangs": null, "controls": [], "state_entity": "sensor.wen_kong_ban_lu_w100_wo_shi_shi_du_shi_du", "battery": null}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "area": "卧室", "kind": "switch", "rank": null, "x": 363.5, "y": 146.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_qian", "domain": "switch", "label": "卧室·插座（床前）"}], "state_entity": null, "battery": null}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "area": "卧室", "kind": "switch", "rank": null, "x": 116.2, "y": 116.3, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_you", "domain": "switch", "label": "卧室·插座（床右）"}], "state_entity": null, "battery": null}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "area": "卧室", "kind": "switch", "rank": null, "x": 109.9, "y": 290.6, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_zuo", "domain": "switch", "label": "卧室·插座（床左）"}], "state_entity": null, "battery": null}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "area": "大阳台", "kind": "light", "rank": 12, "x": 464.4, "y": 304.7, "gangs": null, "controls": [{"entity_id": "light.da_yang_tai_deng", "domain": "light", "label": "大阳台·主灯"}], "state_entity": null, "battery": null}, {"id": "a4dc161a95e44eec9ad78b4d739d8e78", "name": "大阳台·窗帘", "area": "大阳台", "kind": "cover", "rank": 13, "x": 464.1, "y": 406.2, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_da_yang_tai", "domain": "cover", "label": "大阳台·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_da_yang_tai_pei_zhi_zhuang_tai", "battery": null}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "area": "大阳台", "kind": "sensor", "rank": 14, "x": 512.4, "y": 368.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_ci_chu_you_ren", "battery": "sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_dian_chi_dian_ya"}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "area": "大阳台", "kind": "sensor", "rank": 15, "x": 417.5, "y": 368.8, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_men", "battery": "sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_dian_chi_dian_ya"}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "area": "大阳台", "kind": "binary_sensor", "rank": null, "x": 500.8, "y": 237.5, "gangs": null, "controls": [{"entity_id": "switch.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_auto_clean", "domain": "switch", "label": "大阳台·猫厕所 MAX2"}], "state_entity": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_frequent_use_detection", "battery": null}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "area": "客厅", "kind": "light", "rank": 4, "x": 394.9, "y": 539.8, "gangs": null, "controls": [{"entity_id": "light.ke_ting_deng", "domain": "light", "label": "客厅·主灯"}], "state_entity": null, "battery": null}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "area": "客厅", "kind": "media", "rank": 5, "x": 538.6, "y": 461.2, "gangs": null, "controls": [{"entity_id": "media_player.qi_ju_shi_qi_ju_shi", "domain": "media_player", "label": "客厅·HomePod mini"}], "state_entity": null, "battery": null}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "area": "客厅", "kind": "pet", "rank": 6, "x": 249.4, "y": 504.3, "gangs": null, "controls": [{"entity_id": "switch.zhi_neng_wei_shi_qi_solo_child_lock", "domain": "switch", "label": "客厅·喂食器 SOLO"}], "state_entity": "binary_sensor.zhi_neng_wei_shi_qi_solo_feeding", "battery": "sensor.zhi_neng_wei_shi_qi_solo_battery_level"}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "area": "客厅", "kind": "switch", "rank": null, "x": 250.1, "y": 541.1, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_you", "domain": "switch", "label": "客厅·插座（右）"}], "state_entity": null, "battery": null}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "area": "客厅", "kind": "switch", "rank": null, "x": 249.5, "y": 569.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_zuo", "domain": "switch", "label": "客厅·插座（左）"}], "state_entity": null, "battery": null}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "area": "客厅", "kind": "switch", "rank": null, "x": 537.6, "y": 505.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_sha_fa_bei", "domain": "switch", "label": "客厅·插座（沙发背）"}], "state_entity": null, "battery": null}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "area": "书房", "kind": "light", "rank": 7, "x": 440, "y": 745.5, "gangs": null, "controls": [{"entity_id": "light.shu_zhuo_deng", "domain": "light", "label": "书房·书桌灯"}], "state_entity": null, "battery": null}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "area": "书房", "kind": "light", "rank": 8, "x": 513, "y": 689.6, "gangs": null, "controls": [{"entity_id": "light.liu_guang_yi_cai_luo_di_deng_t1", "domain": "light", "label": "书房·落地灯 T1"}], "state_entity": null, "battery": null}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "area": "书房", "kind": "scene", "rank": 9, "x": 513, "y": 747.2, "gangs": null, "controls": [], "state_entity": null, "battery": "sensor.mo_fang_kong_zhi_qi_shu_fang_fan_zhuan_90_dian_chi_dian_ya"}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "area": "书房", "kind": "gateway", "rank": 10, "x": 514.1, "y": 807, "gangs": null, "controls": [], "state_entity": null, "battery": null}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "area": "书房", "kind": "switch", "rank": null, "x": 537, "y": 777.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_shu_fang", "domain": "switch", "label": "书房·插座"}], "state_entity": null, "battery": null}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "area": "玄关", "kind": "sensor", "rank": 18, "x": 310, "y": 828.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_ci_chu_you_ren", "battery": null}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "area": "玄关", "kind": "sensor", "rank": 19, "x": 260, "y": 827.1, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_zhuang_tai_chuan_gan_qi_p100_men", "battery": null}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "area": "浴室", "kind": "wall_switch", "rank": 20, "x": 169.1, "y": 545.9, "gangs": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "label": "排气扇", "domain": "light", "endpoint": 40, "key": "键1"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "label": "浴室灯", "domain": "light", "endpoint": 41, "key": "键2"}], "controls": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "domain": "light", "label": "排气扇"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "domain": "light", "label": "浴室灯"}], "state_entity": null, "battery": null}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 146, "y": 480.1, "gangs": null, "controls": [{"entity_id": "switch.wei_sheng_jian_p20_do_not_disturb", "domain": "switch", "label": "浴室·扫地机 P20"}], "state_entity": "binary_sensor.wei_sheng_jian_p20_charging", "battery": "sensor.wei_sheng_jian_p20_battery"}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 124.1, "y": 479.6, "gangs": null, "controls": [{"entity_id": "switch.p20_dock_child_lock", "domain": "switch", "label": "浴室·扫地机基站"}], "state_entity": "binary_sensor.p20_dock_clean_water_box", "battery": null}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "area": "小阳台", "kind": "light", "rank": 16, "x": 50.1, "y": 550, "gangs": null, "controls": [{"entity_id": "light.xiao_yang_tai_deng", "domain": "light", "label": "小阳台·主灯"}], "state_entity": null, "battery": null}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "area": "小阳台", "kind": "sensor", "rank": 17, "x": 77.1, "y": 653.4, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_men", "battery": "sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_dian_chi_dian_ya"}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "area": "厨房", "kind": "light", "rank": 11, "x": 120, "y": 759.9, "gangs": null, "controls": [{"entity_id": "light.chu_fang_deng", "domain": "light", "label": "厨房·主灯"}], "state_entity": null, "battery": null}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "area": "厨房", "kind": "switch", "rank": null, "x": 172.4, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_you", "domain": "switch", "label": "厨房·插座（右）"}], "state_entity": null, "battery": null}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "area": "厨房", "kind": "switch", "rank": null, "x": 198.9, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_zuo", "domain": "switch", "label": "厨房·插座（左）"}], "state_entity": null, "battery": null}], "topology": [{"target": "书房·书桌灯", "via": "玄关·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键1 → 切换书桌灯"}, {"target": "客厅·主灯", "via": "玄关·墙面开关 Z1", "gang": 2, "note": "Studio 自动化：按键2 → 切换客厅灯"}, {"target": "卧室·主灯", "via": "卧室·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键 → 切换卧室灯"}], "scenes": [{"name": "回家", "icon": "🏠", "entity": "script.hui_jia"}, {"name": "离家", "icon": "🚪", "entity": "script.li_jia"}, {"name": "睡觉", "icon": "🌙", "entity": "script.shui_jiao"}, {"name": "观影", "icon": "🎬", "entity": "script.guan_ying"}], "ai": [{"icon": "☀", "entity": "input_text.ai_line_weather"}, {"icon": "🧳", "entity": "input_text.ai_line_trip"}, {"icon": "🌡", "entity": "input_text.ai_line_home"}, {"icon": "⚠", "entity": "input_text.ai_line_cross"}], "aiMeta": "input_text.ai_meta", "aiScript": "script.ai_brief_refresh", "iso": {"viewBox": [0, 0, 1104.52, 813.0], "H": 280.0, "T": 10.0, "flip": false, "camera": [1.0, 1.0], "floors": [{"type": "floor", "name": "卧室", "points": [[1029.7, 310.56], [995.83, 291.27], [1056.46, 256.76], [902.43, 167.88], [842.66, 202.9], [793.83, 174.33], [500.91, 342.58], [738.38, 479.66]], "z": 383.0, "shade": 1.0}, {"type": "floor", "name": "大阳台", "points": [[1073.76, 456.68], [927.8, 372.4], [740.01, 480.82], [885.97, 565.1]], "z": 764.5, "shade": 1.0}, {"type": "floor", "name": "客厅", "points": [[883.23, 566.35], [613.14, 410.41], [394.49, 536.65], [664.58, 692.59]], "z": 930.0, "shade": 1.0}, {"type": "floor", "name": "书房", "points": [[662.5, 693.59], [392.71, 537.86], [328.7, 575.07], [452.27, 647.89], [359.28, 700.59], [504.05, 785.13]], "z": 1140.0, "shade": 1.0}, {"type": "floor", "name": "玄关", "points": [[450.24, 646.31], [327.43, 575.4], [234.27, 629.19], [357.08, 700.1]], "z": 1102.5, "shade": 1.0}, {"type": "floor", "name": "浴室", "points": [[610.55, 409.43], [497.83, 344.35], [280.07, 470.07], [392.79, 535.15]], "z": 706.5, "shade": 1.0}, {"type": "floor", "name": "小阳台", "points": [[487.64, 348.53], [399.78, 297.81], [190.81, 418.47], [278.66, 469.19]], "z": 594.0, "shade": 1.0}, {"type": "floor", "name": "厨房", "points": [[389.62, 536.33], [188.83, 420.4], [30.76, 511.67], [231.55, 627.6]], "z": 875.0, "shade": 1.0}], "walls": [{"type": "wall", "seg": [340.0, 0.0, 160.0, 0.0], "top": [[1063.2, 114.0], [1054.54, 119.0], [898.66, 29.0], [907.32, 24.0]], "faces": [{"points": [[1063.2, 254.0], [1054.54, 259.0], [1054.54, 119.0], [1063.2, 114.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1054.54, 259.0], [898.66, 169.0], [898.66, 29.0], [1054.54, 119.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 250.0, "shade": 1.0}, {"type": "wall", "seg": [340.0, 0.0, 340.0, 70.0], "top": [[1054.54, 114.0], [1063.2, 119.0], [1002.58, 154.0], [993.92, 149.0]], "faces": [{"points": [[1063.2, 259.0], [1002.58, 294.0], [1002.58, 154.0], [1063.2, 119.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1002.58, 294.0], [993.92, 289.0], [993.92, 149.0], [1002.58, 154.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 375.0, "shade": 1.0}, {"type": "wall", "seg": [160.0, 0.0, 160.0, 70.0], "top": [[898.66, 24.0], [907.32, 29.0], [846.7, 64.0], [838.04, 59.0]], "faces": [{"points": [[907.32, 169.0], [846.7, 204.0], [846.7, 64.0], [907.32, 29.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[846.7, 204.0], [838.04, 199.0], [838.04, 59.0], [846.7, 64.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 195.0, "shade": 1.0}, {"type": "wall", "seg": [379.0, 70.0, 340.0, 70.0], "top": [[1036.35, 168.5], [1027.69, 173.5], [993.92, 154.0], [1002.58, 149.0]], "faces": [{"points": [[1036.35, 308.5], [1027.69, 313.5], [1027.69, 173.5], [1036.35, 168.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1027.69, 313.5], [993.92, 294.0], [993.92, 154.0], [1027.69, 173.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 429.5, "shade": 1.0}, {"type": "wall", "seg": [160.0, 70.0, 103.0, 70.0], "top": [[846.7, 59.0], [838.04, 64.0], [788.68, 35.5], [797.34, 30.5]], "faces": [{"points": [[846.7, 199.0], [838.04, 204.0], [838.04, 64.0], [846.7, 59.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[838.04, 204.0], [788.68, 175.5], [788.68, 35.5], [838.04, 64.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 201.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 70.0, 379.0, 410.0], "top": [[1027.69, 168.5], [1036.35, 173.5], [741.91, 343.5], [733.25, 338.5]], "faces": [{"points": [[1036.35, 313.5], [741.91, 483.5], [741.91, 343.5], [1036.35, 173.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[741.91, 483.5], [733.25, 478.5], [733.25, 338.5], [741.91, 343.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 619.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 70.0, 103.0, 410.0], "top": [[788.68, 30.5], [797.34, 35.5], [502.9, 205.5], [494.24, 200.5]], "faces": [{"points": [[797.34, 175.5], [502.9, 345.5], [502.9, 205.5], [797.34, 35.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[502.9, 345.5], [494.24, 340.5], [494.24, 200.5], [502.9, 205.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 343.0, "shade": 1.0}, {"type": "wall", "seg": [550.0, 190.0, 395.0, 190.0], "top": [[1080.52, 314.0], [1071.86, 319.0], [937.63, 241.5], [946.29, 236.5]], "faces": [{"points": [[1080.52, 454.0], [1071.86, 459.0], [1071.86, 319.0], [1080.52, 314.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1071.86, 459.0], [937.63, 381.5], [937.63, 241.5], [1071.86, 319.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 662.5, "shade": 1.0}, {"type": "wall", "seg": [550.0, 190.0, 550.0, 850.0], "top": [[1071.86, 314.0], [1080.52, 319.0], [508.96, 649.0], [500.3, 644.0]], "faces": [{"points": [[1080.52, 459.0], [508.96, 789.0], [508.96, 649.0], [1080.52, 319.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[508.96, 789.0], [500.3, 784.0], [500.3, 644.0], [508.96, 649.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1070.0, "shade": 1.0}, {"type": "wall", "seg": [550.0, 850.0, 0.0, 850.0], "top": [[508.96, 644.0], [500.3, 649.0], [24.0, 374.0], [32.66, 369.0]], "faces": [{"points": [[508.96, 784.0], [500.3, 789.0], [500.3, 649.0], [508.96, 644.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[500.3, 789.0], [24.0, 514.0], [24.0, 374.0], [500.3, 649.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1125.0, "shade": 1.0}, {"type": "wall", "seg": [0.0, 420.0, 0.0, 850.0], "top": [[396.38, 154.0], [405.04, 159.0], [32.66, 374.0], [24.0, 369.0]], "faces": [{"points": [[405.04, 299.0], [32.66, 514.0], [32.66, 374.0], [405.04, 159.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[32.66, 514.0], [24.0, 509.0], [24.0, 369.0], [32.66, 374.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 635.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 420.0, 0.0, 420.0], "top": [[494.24, 205.5], [485.58, 210.5], [396.38, 159.0], [405.04, 154.0]], "faces": [{"points": [[494.24, 345.5], [485.58, 350.5], [485.58, 210.5], [494.24, 205.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[485.58, 350.5], [396.38, 299.0], [396.38, 159.0], [485.58, 210.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 471.5, "shade": 1.0}, {"type": "wall", "seg": [550.0, 410.0, 379.0, 410.0], "top": [[890.0, 424.0], [881.34, 429.0], [733.25, 343.5], [741.91, 338.5]], "faces": [{"points": [[890.0, 564.0], [881.34, 569.0], [881.34, 429.0], [890.0, 424.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[881.34, 569.0], [733.25, 483.5], [733.25, 343.5], [881.34, 429.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 874.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 410.0, 103.0, 410.0], "top": [[741.91, 338.5], [733.25, 343.5], [494.24, 205.5], [502.9, 200.5]], "faces": [{"points": [[741.91, 478.5], [733.25, 483.5], [733.25, 343.5], [741.91, 338.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[733.25, 483.5], [494.24, 345.5], [494.24, 205.5], [733.25, 343.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 651.0, "shade": 1.0}, {"type": "wall", "seg": [235.0, 410.0, 235.0, 850.0], "top": [[608.55, 266.5], [617.21, 271.5], [236.17, 491.5], [227.51, 486.5]], "faces": [{"points": [[617.21, 411.5], [236.17, 631.5], [236.17, 491.5], [617.21, 271.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[236.17, 631.5], [227.51, 626.5], [227.51, 486.5], [236.17, 491.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 865.0, "shade": 1.0}, {"type": "wall", "seg": [235.0, 665.0, 0.0, 665.0], "top": [[396.38, 394.0], [387.72, 399.0], [184.21, 281.5], [192.87, 276.5]], "faces": [{"points": [[396.38, 534.0], [387.72, 539.0], [387.72, 399.0], [396.38, 394.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[387.72, 539.0], [184.21, 421.5], [184.21, 281.5], [387.72, 399.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 782.5, "shade": 1.0}, {"type": "wall", "seg": [103.0, 410.0, 103.0, 665.0], "top": [[494.24, 200.5], [502.9, 205.5], [282.07, 333.0], [273.41, 328.0]], "faces": [{"points": [[502.9, 345.5], [282.07, 473.0], [282.07, 333.0], [502.9, 205.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[282.07, 473.0], [273.41, 468.0], [273.41, 328.0], [282.07, 333.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 640.5, "shade": 1.0}, {"type": "wall", "seg": [380.0, 740.0, 235.0, 740.0], "top": [[457.0, 504.0], [448.34, 509.0], [322.77, 436.5], [331.43, 431.5]], "faces": [{"points": [[457.0, 644.0], [448.34, 649.0], [448.34, 509.0], [457.0, 504.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[448.34, 649.0], [322.77, 576.5], [322.77, 436.5], [448.34, 509.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1047.5, "shade": 1.0}, {"type": "wall", "seg": [380.0, 740.0, 380.0, 850.0], "top": [[448.34, 504.0], [457.0, 509.0], [361.74, 564.0], [353.08, 559.0]], "faces": [{"points": [[457.0, 649.0], [361.74, 704.0], [361.74, 564.0], [457.0, 509.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[361.74, 704.0], [353.08, 699.0], [353.08, 559.0], [361.74, 564.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1175.0, "shade": 1.0}, {"type": "wall", "seg": [379.0, 190.0, 395.0, 190.0], "top": [[923.77, 233.5], [932.43, 228.5], [946.29, 236.5], [937.63, 241.5]], "faces": [{"points": [[946.29, 376.5], [937.63, 381.5], [937.63, 241.5], [946.29, 236.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[937.63, 381.5], [923.77, 373.5], [923.77, 233.5], [937.63, 241.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 577.0, "shade": 1.0}], "decals": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "kind": "light", "rank": 1, "area": "卧室", "x": 243.1, "y": 226.6, "sx": 778.72, "sy": 321.35, "z": 469.7}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "kind": "cover", "rank": 2, "area": "卧室", "x": 249.4, "y": 16.7, "sx": 965.95, "sy": 219.55, "z": 266.1}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "kind": "sensor", "rank": 3, "area": "卧室", "x": 111.4, "y": 325.5, "sx": 579.02, "sy": 304.95, "z": 436.9}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "kind": "switch", "rank": null, "area": "卧室", "x": 363.5, "y": 146.8, "sx": 952.09, "sy": 341.65, "z": 510.3}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "kind": "switch", "rank": null, "area": "卧室", "x": 116.2, "y": 116.3, "sx": 764.34, "sy": 202.75, "z": 232.5}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "kind": "switch", "rank": null, "area": "卧室", "x": 109.9, "y": 290.6, "sx": 607.94, "sy": 286.75, "z": 400.5}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "kind": "light", "rank": 12, "area": "大阳台", "x": 464.4, "y": 304.7, "sx": 902.73, "sy": 471.05, "z": 769.1}, {"id": "a4dc161a95e44eec9ad78b4d739d8e78", "name": "大阳台·窗帘", "kind": "cover", "rank": 13, "area": "大阳台", "x": 464.1, "y": 406.2, "sx": 814.57, "sy": 521.65, "z": 870.3}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "kind": "sensor", "rank": 14, "area": "大阳台", "x": 512.4, "y": 368.2, "sx": 889.31, "sy": 526.8, "z": 880.6}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "kind": "sensor", "rank": 15, "area": "大阳台", "x": 417.5, "y": 368.8, "sx": 806.6, "sy": 479.65, "z": 786.3}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "kind": "binary_sensor", "rank": null, "area": "大阳台", "x": 500.8, "y": 237.5, "sx": 992.45, "sy": 455.65, "z": 738.3}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "kind": "light", "rank": 4, "area": "客厅", "x": 394.9, "y": 539.8, "sx": 638.95, "sy": 553.85, "z": 934.7}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "kind": "media", "rank": 5, "area": "客厅", "x": 538.6, "y": 461.2, "sx": 831.46, "sy": 586.4, "z": 999.8}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "kind": "pet", "rank": 6, "area": "客厅", "x": 249.4, "y": 504.3, "sx": 543.69, "sy": 463.35, "z": 753.7}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "kind": "switch", "rank": null, "area": "客厅", "x": 250.1, "y": 541.1, "sx": 512.42, "sy": 482.1, "z": 791.2}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "kind": "switch", "rank": null, "area": "客厅", "x": 249.5, "y": 569.8, "sx": 487.05, "sy": 496.15, "z": 819.3}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "kind": "switch", "rank": null, "area": "客厅", "x": 537.6, "y": 505.4, "sx": 792.32, "sy": 608.0, "z": 1043.0}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "kind": "light", "rank": 7, "area": "书房", "x": 440, "y": 745.5, "sx": 499.87, "sy": 679.25, "z": 1185.5}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "kind": "light", "rank": 8, "area": "书房", "x": 513, "y": 689.6, "sx": 611.49, "sy": 687.8, "z": 1202.6}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "kind": "scene", "rank": 9, "area": "书房", "x": 513, "y": 747.2, "sx": 561.61, "sy": 716.6, "z": 1260.2}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "kind": "gateway", "rank": 10, "area": "书房", "x": 514.1, "y": 807, "sx": 510.78, "sy": 747.05, "z": 1321.1}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "kind": "switch", "rank": null, "area": "书房", "x": 537, "y": 777.4, "sx": 556.24, "sy": 743.7, "z": 1314.4}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "kind": "sensor", "rank": 18, "area": "玄关", "x": 310, "y": 828.2, "sx": 315.67, "sy": 655.6, "z": 1138.2}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "kind": "sensor", "rank": 19, "area": "玄关", "x": 260, "y": 827.1, "sx": 273.32, "sy": 630.05, "z": 1087.1}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "kind": "wall_switch", "rank": 20, "area": "浴室", "x": 169.1, "y": 545.9, "sx": 438.12, "sy": 444.0, "z": 715.0}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "kind": "binary_sensor", "rank": null, "area": "浴室", "x": 146, "y": 480.1, "sx": 475.1, "sy": 399.55, "z": 626.1}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "kind": "binary_sensor", "rank": null, "area": "浴室", "x": 124.1, "y": 479.6, "sx": 456.57, "sy": 388.35, "z": 603.7}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "kind": "light", "rank": 16, "area": "小阳台", "x": 50.1, "y": 550, "sx": 331.52, "sy": 386.55, "z": 600.1}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "kind": "sensor", "rank": 17, "area": "小阳台", "x": 77.1, "y": 653.4, "sx": 265.35, "sy": 451.75, "z": 730.5}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "kind": "light", "rank": 11, "area": "厨房", "x": 120, "y": 759.9, "sx": 210.28, "sy": 526.45, "z": 879.9}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "kind": "switch", "rank": null, "area": "厨房", "x": 172.4, "y": 825.2, "sx": 199.11, "sy": 585.3, "z": 997.6}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "kind": "switch", "rank": null, "area": "厨房", "x": 198.9, "y": 825.2, "sx": 222.05, "sy": 598.55, "z": 1024.1}], "layers": [{"type": "wall", "seg": [160.0, 0.0, 160.0, 70.0], "top": [[898.66, 24.0], [907.32, 29.0], [846.7, 64.0], [838.04, 59.0]], "faces": [{"points": [[907.32, 169.0], [846.7, 204.0], [846.7, 64.0], [907.32, 29.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[846.7, 204.0], [838.04, 199.0], [838.04, 59.0], [846.7, 64.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 195.0, "shade": 1.0}, {"type": "wall", "seg": [160.0, 70.0, 103.0, 70.0], "top": [[846.7, 59.0], [838.04, 64.0], [788.68, 35.5], [797.34, 30.5]], "faces": [{"points": [[846.7, 199.0], [838.04, 204.0], [838.04, 64.0], [846.7, 59.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[838.04, 204.0], [788.68, 175.5], [788.68, 35.5], [838.04, 64.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 201.5, "shade": 1.0}, {"type": "wall", "seg": [340.0, 0.0, 160.0, 0.0], "top": [[1063.2, 114.0], [1054.54, 119.0], [898.66, 29.0], [907.32, 24.0]], "faces": [{"points": [[1063.2, 254.0], [1054.54, 259.0], [1054.54, 119.0], [1063.2, 114.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1054.54, 259.0], [898.66, 169.0], [898.66, 29.0], [1054.54, 119.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 250.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 70.0, 103.0, 410.0], "top": [[788.68, 30.5], [797.34, 35.5], [502.9, 205.5], [494.24, 200.5]], "faces": [{"points": [[797.34, 175.5], [502.9, 345.5], [502.9, 205.5], [797.34, 35.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[502.9, 345.5], [494.24, 340.5], [494.24, 200.5], [502.9, 205.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 343.0, "shade": 1.0}, {"type": "wall", "seg": [340.0, 0.0, 340.0, 70.0], "top": [[1054.54, 114.0], [1063.2, 119.0], [1002.58, 154.0], [993.92, 149.0]], "faces": [{"points": [[1063.2, 259.0], [1002.58, 294.0], [1002.58, 154.0], [1063.2, 119.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1002.58, 294.0], [993.92, 289.0], [993.92, 149.0], [1002.58, 154.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 375.0, "shade": 1.0}, {"type": "floor", "name": "卧室", "points": [[1029.7, 310.56], [995.83, 291.27], [1056.46, 256.76], [902.43, 167.88], [842.66, 202.9], [793.83, 174.33], [500.91, 342.58], [738.38, 479.66]], "z": 383.0, "shade": 1.0}, {"type": "wall", "seg": [379.0, 70.0, 340.0, 70.0], "top": [[1036.35, 168.5], [1027.69, 173.5], [993.92, 154.0], [1002.58, 149.0]], "faces": [{"points": [[1036.35, 308.5], [1027.69, 313.5], [1027.69, 173.5], [1036.35, 168.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1027.69, 313.5], [993.92, 294.0], [993.92, 154.0], [1027.69, 173.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 429.5, "shade": 1.0}, {"type": "wall", "seg": [103.0, 420.0, 0.0, 420.0], "top": [[494.24, 205.5], [485.58, 210.5], [396.38, 159.0], [405.04, 154.0]], "faces": [{"points": [[494.24, 345.5], [485.58, 350.5], [485.58, 210.5], [494.24, 205.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[485.58, 350.5], [396.38, 299.0], [396.38, 159.0], [485.58, 210.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 471.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 190.0, 395.0, 190.0], "top": [[923.77, 233.5], [932.43, 228.5], [946.29, 236.5], [937.63, 241.5]], "faces": [{"points": [[946.29, 376.5], [937.63, 381.5], [937.63, 241.5], [946.29, 236.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[937.63, 381.5], [923.77, 373.5], [923.77, 233.5], [937.63, 241.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 577.0, "shade": 1.0}, {"type": "floor", "name": "小阳台", "points": [[487.64, 348.53], [399.78, 297.81], [190.81, 418.47], [278.66, 469.19]], "z": 594.0, "shade": 1.0}, {"type": "wall", "seg": [379.0, 70.0, 379.0, 410.0], "top": [[1027.69, 168.5], [1036.35, 173.5], [741.91, 343.5], [733.25, 338.5]], "faces": [{"points": [[1036.35, 313.5], [741.91, 483.5], [741.91, 343.5], [1036.35, 173.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[741.91, 483.5], [733.25, 478.5], [733.25, 338.5], [741.91, 343.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 619.0, "shade": 1.0}, {"type": "wall", "seg": [0.0, 420.0, 0.0, 850.0], "top": [[396.38, 154.0], [405.04, 159.0], [32.66, 374.0], [24.0, 369.0]], "faces": [{"points": [[405.04, 299.0], [32.66, 514.0], [32.66, 374.0], [405.04, 159.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[32.66, 514.0], [24.0, 509.0], [24.0, 369.0], [32.66, 374.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 635.0, "shade": 1.0}, {"type": "wall", "seg": [103.0, 410.0, 103.0, 665.0], "top": [[494.24, 200.5], [502.9, 205.5], [282.07, 333.0], [273.41, 328.0]], "faces": [{"points": [[502.9, 345.5], [282.07, 473.0], [282.07, 333.0], [502.9, 205.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[282.07, 473.0], [273.41, 468.0], [273.41, 328.0], [282.07, 333.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 640.5, "shade": 1.0}, {"type": "wall", "seg": [379.0, 410.0, 103.0, 410.0], "top": [[741.91, 338.5], [733.25, 343.5], [494.24, 205.5], [502.9, 200.5]], "faces": [{"points": [[741.91, 478.5], [733.25, 483.5], [733.25, 343.5], [741.91, 338.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[733.25, 483.5], [494.24, 345.5], [494.24, 205.5], [733.25, 343.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 651.0, "shade": 1.0}, {"type": "wall", "seg": [550.0, 190.0, 395.0, 190.0], "top": [[1080.52, 314.0], [1071.86, 319.0], [937.63, 241.5], [946.29, 236.5]], "faces": [{"points": [[1080.52, 454.0], [1071.86, 459.0], [1071.86, 319.0], [1080.52, 314.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[1071.86, 459.0], [937.63, 381.5], [937.63, 241.5], [1071.86, 319.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 662.5, "shade": 1.0}, {"type": "floor", "name": "浴室", "points": [[610.55, 409.43], [497.83, 344.35], [280.07, 470.07], [392.79, 535.15]], "z": 706.5, "shade": 1.0}, {"type": "floor", "name": "大阳台", "points": [[1073.76, 456.68], [927.8, 372.4], [740.01, 480.82], [885.97, 565.1]], "z": 764.5, "shade": 1.0}, {"type": "wall", "seg": [235.0, 665.0, 0.0, 665.0], "top": [[396.38, 394.0], [387.72, 399.0], [184.21, 281.5], [192.87, 276.5]], "faces": [{"points": [[396.38, 534.0], [387.72, 539.0], [387.72, 399.0], [396.38, 394.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[387.72, 539.0], [184.21, 421.5], [184.21, 281.5], [387.72, 399.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 782.5, "shade": 1.0}, {"type": "wall", "seg": [235.0, 410.0, 235.0, 850.0], "top": [[608.55, 266.5], [617.21, 271.5], [236.17, 491.5], [227.51, 486.5]], "faces": [{"points": [[617.21, 411.5], [236.17, 631.5], [236.17, 491.5], [617.21, 271.5]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[236.17, 631.5], [227.51, 626.5], [227.51, 486.5], [236.17, 491.5]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 865.0, "shade": 1.0}, {"type": "wall", "seg": [550.0, 410.0, 379.0, 410.0], "top": [[890.0, 424.0], [881.34, 429.0], [733.25, 343.5], [741.91, 338.5]], "faces": [{"points": [[890.0, 564.0], [881.34, 569.0], [881.34, 429.0], [890.0, 424.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[881.34, 569.0], [733.25, 483.5], [733.25, 343.5], [881.34, 429.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 874.5, "shade": 1.0}, {"type": "floor", "name": "厨房", "points": [[389.62, 536.33], [188.83, 420.4], [30.76, 511.67], [231.55, 627.6]], "z": 875.0, "shade": 1.0}, {"type": "floor", "name": "客厅", "points": [[883.23, 566.35], [613.14, 410.41], [394.49, 536.65], [664.58, 692.59]], "z": 930.0, "shade": 1.0}, {"type": "wall", "seg": [380.0, 740.0, 235.0, 740.0], "top": [[457.0, 504.0], [448.34, 509.0], [322.77, 436.5], [331.43, 431.5]], "faces": [{"points": [[457.0, 644.0], [448.34, 649.0], [448.34, 509.0], [457.0, 504.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[448.34, 649.0], [322.77, 576.5], [322.77, 436.5], [448.34, 509.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1047.5, "shade": 1.0}, {"type": "wall", "seg": [550.0, 190.0, 550.0, 850.0], "top": [[1071.86, 314.0], [1080.52, 319.0], [508.96, 649.0], [500.3, 644.0]], "faces": [{"points": [[1080.52, 459.0], [508.96, 789.0], [508.96, 649.0], [1080.52, 319.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[508.96, 789.0], [500.3, 784.0], [500.3, 644.0], [508.96, 649.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1070.0, "shade": 1.0}, {"type": "floor", "name": "玄关", "points": [[450.24, 646.31], [327.43, 575.4], [234.27, 629.19], [357.08, 700.1]], "z": 1102.5, "shade": 1.0}, {"type": "wall", "seg": [550.0, 850.0, 0.0, 850.0], "top": [[508.96, 644.0], [500.3, 649.0], [24.0, 374.0], [32.66, 369.0]], "faces": [{"points": [[508.96, 784.0], [500.3, 789.0], [500.3, 649.0], [508.96, 644.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[500.3, 789.0], [24.0, 514.0], [24.0, 374.0], [500.3, 649.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1125.0, "shade": 1.0}, {"type": "floor", "name": "书房", "points": [[662.5, 693.59], [392.71, 537.86], [328.7, 575.07], [452.27, 647.89], [359.28, 700.59], [504.05, 785.13]], "z": 1140.0, "shade": 1.0}, {"type": "wall", "seg": [380.0, 740.0, 380.0, 850.0], "top": [[448.34, 504.0], [457.0, 509.0], [361.74, 564.0], [353.08, 559.0]], "faces": [{"points": [[457.0, 649.0], [361.74, 704.0], [361.74, 564.0], [457.0, 509.0]], "shade": 0.44, "normal": [1.0, -0.0]}, {"points": [[361.74, 704.0], [353.08, 699.0], [353.08, 559.0], [361.74, 564.0]], "shade": 0.62, "normal": [0.0, 1.0]}], "z": 1175.0, "shade": 1.0}], "order": ["wall:[160.0, 0.0, 160.0, 70.0]", "wall:[160.0, 70.0, 103.0, 70.0]", "wall:[340.0, 0.0, 160.0, 0.0]", "wall:[103.0, 70.0, 103.0, 410.0]", "wall:[340.0, 0.0, 340.0, 70.0]", "floor:卧室", "wall:[379.0, 70.0, 340.0, 70.0]", "wall:[103.0, 420.0, 0.0, 420.0]", "wall:[379.0, 190.0, 395.0, 190.0]", "floor:小阳台", "wall:[379.0, 70.0, 379.0, 410.0]", "wall:[0.0, 420.0, 0.0, 850.0]", "wall:[103.0, 410.0, 103.0, 665.0]", "wall:[379.0, 410.0, 103.0, 410.0]", "wall:[550.0, 190.0, 395.0, 190.0]", "floor:浴室", "floor:大阳台", "wall:[235.0, 665.0, 0.0, 665.0]", "wall:[235.0, 410.0, 235.0, 850.0]", "wall:[550.0, 410.0, 379.0, 410.0]", "floor:厨房", "floor:客厅", "wall:[380.0, 740.0, 235.0, 740.0]", "wall:[550.0, 190.0, 550.0, 850.0]", "floor:玄关", "wall:[550.0, 850.0, 0.0, 850.0]", "floor:书房", "wall:[380.0, 740.0, 380.0, 850.0]"]}, "panel": {"pets": [{"name": "猫厕所 MAX2", "metrics": [{"label": "猫砂", "entity": "sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_litter_level", "unit": "%"}, {"label": "除臭剂", "entity": "sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_odor_eliminator_n50_left_days", "unit": "天", "warn_le": 3}]}, {"name": "喂食器 SOLO", "metrics": [{"label": "余粮", "entity": "binary_sensor.zhi_neng_wei_shi_qi_solo_food_level", "map": {"on": "充足", "off": "已空"}}, {"label": "干燥剂", "entity": "sensor.zhi_neng_wei_shi_qi_solo_desiccant_left_days", "unit": "天", "warn_le": 3}]}], "vacuum": {"name": "扫地机 P20", "entity": "vacuum.wei_sheng_jian_p20", "battery": "sensor.wei_sheng_jian_p20_battery", "status": {"docked": "在充电座", "cleaning": "清扫中", "returning": "返回中", "idle": "待机", "paused": "已暂停", "error": "故障"}}, "media": {"name": "客厅 HomePod", "entity": "media_player.qi_ju_shi_qi_ju_shi"}, "acPlaceholder": "空调 · 未接入"}, "batch": [{"label": "全关灯", "icon": "💡", "domain": "light", "service": "turn_off"}, {"label": "全关插座", "icon": "🔌", "domain": "switch", "service": "turn_off", "targets": ["switch.qiang_bi_cha_zuo_chu_fang_you", "switch.qiang_bi_cha_zuo_chu_fang_zuo", "switch.qiang_bi_cha_zuo_chuang_qian", "switch.qiang_bi_cha_zuo_chuang_you", "switch.qiang_bi_cha_zuo_chuang_zuo", "switch.qiang_bi_cha_zuo_ke_ting_you", "switch.qiang_bi_cha_zuo_ke_ting_zuo", "switch.qiang_bi_cha_zuo_sha_fa_bei", "switch.qiang_bi_cha_zuo_shu_fang"]}, {"label": "关窗帘", "icon": "🪟", "domain": "cover", "service": "close_cover", "targets": ["cover.chuang_lian_ban_lu_da_yang_tai", "cover.chuang_lian_ban_lu_wo_shi"]}], "quickActions": [{"label": "扫地机清扫", "icon": "🤖", "domain": "vacuum", "service": "start"}, {"label": "扫地机回充", "icon": "🔋", "domain": "vacuum", "service": "return_to_base"}], "stats": {"rooms": 8, "devices": 32}};

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
  badgeOff: "#6b7f92",
  menuDotOn: "#58c7ff",
  menuDotOff: "#455a6e",
  wallShadow: "rgba(0,0,0,.55)",
  aoEdge: "#000",
  vigEdge: "#000000"
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
  dimModeBar: "#6B7280",
  dimPin: "#7A8290",
  dimLabel: "#7A8290",
  dimDate: "#7A8290",
  dimFoot: "#8A94A0",
  dimUnavail: "#8A94A0",
  dimRoomName: "#6B7280",
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
  shadowSoft: "rgba(31,36,41,.12)",
  shadowMenu: "rgba(31,36,41,.14)",
  lineRing: "#C9C2B8",
  unavailFill: "#D8D3CA",
  rangeTrack: "#DCD7CF",
  rangeFill: "#2A7FB8",
  "floorTop": "#F5F2EC", "floorBot": "#EAE6DE", "aoOp": ".12", "vigOp": "0.06",
  "wallShadeLo": [201,194,184],
  wallShadeHi: [255,255,255],
  wallGradTop: "#D8D2C7",
  wallGradMid: "#E3DED5",
  wallGradBot: "#EFEBE4",
  glass1: "#E9E4DB",
  glass2: "#D9D3C9",
  glass3: "#C9C2B8",
  glass4: "#B9B2A6",
  lamp1: "#F2B23A",
  lamp2: "#E08A00",
  lamp3: "#E08A00",
  lampOp1: ".18",
  lampOp2: ".10",
  lampOp3: ".03",
  badgeOn: "#E08A00",
  badgeOff: "#8A8F98",
  menuDotOn: "#0E6FA8",
  menuDotOff: "#C9C2B8",
  wallShadow: "rgba(31,36,41,.10)",
  aoEdge: "#1F2429",
  vigEdge: "#1F2429"
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
.center{position:relative;min-width:0;min-height:0;overflow:hidden}
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
.pets{display:flex;flex-direction:column;gap:7px;margin-top:12px}
.petrow{display:flex;align-items:center;gap:8px;font-size:11.5px;color:${T.textRow}}
.petrow .pn{color:${T.dimLabel};flex:0 0 auto}
.petrow .pm{color:${T.textVal};margin-left:auto;display:flex;gap:8px}
.petrow .pm .warn{color:${T.warn}}
.vac{display:flex;align-items:center;gap:8px;font-size:11.5px;margin-top:8px;color:${T.textRow}}
.vac .pn{color:${T.dimLabel}}
.vac .pv{color:${T.textVal};margin-left:auto}
.batchrow{display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;margin-top:12px}
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
/* ---------- 2.5D 等距层 ---------- */
.iso-floor{fill:${T.isoFloor};stroke:${T.isoFloorStroke};stroke-width:1.1;cursor:pointer;transition:fill .18s}
.iso-floor:hover{fill:${T.isoFloorHover}}
.iso-face{stroke:none;pointer-events:none}
.iso-top{stroke:${T.isoTopStroke};stroke-width:.8;stroke-linejoin:round;pointer-events:none}
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
ha-card.night{filter:brightness(.74) saturate(.88)}

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
          <div class="vac" id="vac"></div>
          <div class="alerts" id="alerts">
            <div class="alert-cap" id="alert-cap"></div>
            <div class="alert-list" id="alert-list"></div>
          </div>
        </aside>

        <div class="center" id="center">
          <div class="topbar" id="topbar"><b id="tb-time">--:--</b><span id="tb-wx"></span></div>
          <div class="modebar" id="modetoggle">
            <button data-m="2d">2D</button><button data-m="2.5d">2.5D</button>
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
          <div class="media" id="media"></div>
          <div class="acph" id="acph"></div>
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
    if (!st){ return; }
    const dom = s.entity.split(".")[0];
    this._hass.callService(dom, "turn_on", { entity_id: s.entity });
    btn.animate ? btn.animate([{opacity:.5},{opacity:1}], {duration:220}) : null;
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
      pwrHit.style.fill = "transparent";
      pwrHit.style.stroke = "none";
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

    // 1) 地板
    for (const f of iso.floors){
      const p = document.createElementNS(NS, "polygon");
      p.setAttribute("points", f.points.map(q => q.join(",")).join(" "));
      p.setAttribute("class", "iso-floor");
      p.style.fill = "url(#floorGrad)";
      p.addEventListener("click", () => this.openRoom(f.name));
      g.appendChild(p);
    }
    // 2) 墙角 AO
    for (const f of iso.floors){
      const ao = document.createElementNS(NS, "polygon");
      ao.setAttribute("points", f.points.map(q => q.join(",")).join(" "));
      ao.setAttribute("fill", "url(#aoGrad)");
      ao.setAttribute("pointer-events", "none");
      g.appendChild(ao);
    }
    // 3) 光池层（地板之上、墙之下），clip 到地板并集，光不会漏到屋外
    const clip = document.createElementNS(NS, "clipPath");
    clip.setAttribute("id", "isoClip");
    clip.setAttribute("clipPathUnits", "userSpaceOnUse");
    for (const f of iso.floors){
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

    for (const layer of iso.layers){
      if (layer.type !== "wall") continue;
      for (const face of (layer.faces || [])){
        const p = document.createElementNS(NS, "polygon");
        p.setAttribute("points", face.points.map(q => q.join(",")).join(" "));
        p.setAttribute("class", "iso-face");
        p.setAttribute("fill", this._wallColor(face.shade != null ? face.shade : layer.shade));
        wallG.appendChild(p);
      }
      if (layer.top){
        const t = document.createElementNS(NS, "polygon");
        t.setAttribute("points", layer.top.map(q => q.join(",")).join(" "));
        t.setAttribute("class", "iso-top");
        t.setAttribute("fill", this._wallColor(0.92));
        wallG.appendChild(t);
      }
    }
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

    for (const [name, b] of this._badges){
      if (b.el.style.display === "none") continue;
      const pos = (centers && centers[name]) ? centers[name] : b.def.label;
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

  _devState(d){
    const c = this._controlsOf(d);
    if (!c.length) return "sensor";
    const sts = c.map(x => this._stateOf(x.entity_id));
    if (sts.some(s => s === "unavailable" || s === "unknown")) return "unavail";
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
      const mainColor = lit ? T.badgeOn : T.badgeOff;
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

    // ---- 左栏 · 宠物状态卡（两行）----
    const petsEl = root.getElementById("pets");
    if (petsEl){
      const rows = [];
      for (const p of ((DATA.panel && DATA.panel.pets) || [])){
        const cells = [];
        for (const m of (p.metrics || [])){
          const raw = this._stateOf(m.entity);
          if (!raw || raw === "unknown" || raw === "unavailable") continue;
          let text;
          if (m.map){ text = `${m.label} ${m.map[raw] || raw}`; }
          else {
            const v = parseFloat(raw);
            text = isNaN(v) ? raw : `${Math.round(v)}${m.unit || ""}`;
            if (m.warn_le != null && !isNaN(v) && v <= m.warn_le){
              cells.push(`<span class="warn">⚠ ${m.label} ${text}</span>`);
              continue;
            }
            text = `${m.label} ${text}`;
          }
          cells.push(`<span>${this._esc(text)}</span>`);
        }
        if (cells.length) rows.push(`<div class="petrow"><span class="pn">${this._esc(p.name)}</span><span class="pm">${cells.join("")}</span></div>`);
      }
      const key = rows.join("|");
      if (petsEl.dataset.k !== key){ petsEl.dataset.k = key; petsEl.innerHTML = rows.join(""); }
    }

    // ---- 左栏 · 扫地机一行 ----
    const vacEl = root.getElementById("vac");
    if (vacEl && DATA.panel && DATA.panel.vacuum){
      const v = DATA.panel.vacuum;
      const st = this._stateOf(v.entity);
      if (!st || st === "unavailable"){
        vacEl.innerHTML = "";
      } else {
        const zh = (v.status && v.status[st]) || st;
        let batt = "";
        if (v.battery){
          const b = parseFloat(this._stateOf(v.battery));
          if (!isNaN(b)) batt = ` · ${Math.round(b)}%`;
        }
        const html = `<span class="pn">${this._esc(v.name)}</span><span class="pv">${this._esc(zh + batt)}</span>`;
        if (vacEl.dataset.k !== html){ vacEl.dataset.k = html; vacEl.innerHTML = html; }
      }
    }

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

    // ---- 右栏 · 空调占位（空态，不可点）----
    const acEl = root.getElementById("acph");
    if (acEl && DATA.panel && DATA.panel.acPlaceholder && !acEl.dataset.built){
      acEl.dataset.built = "1";
      acEl.textContent = DATA.panel.acPlaceholder;
    }

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
        stateTxt = st === "open" ? "打开" : st === "closed" ? "关闭" : st === "on" ? "开" : st === "off" ? "关" : st;
        const isOn = (st === "on" || st === "open");
        btn = `<button data-i="${i}">${isOn ? "关" : "开"}</button>`;
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
        if (c) this._call(c, "toggle");
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
    const data = Object.assign({ entity_id: ctrl.entity_id }, extra || {});
    this._hass.callService(ctrl.domain, service, data);
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
