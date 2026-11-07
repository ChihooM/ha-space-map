/* space-map v0.3 · 空间地图 Lovelace 卡片（零构建、单文件、无依赖）
 * 宽屏：左栏信息 / 中栏户型 / 右栏操作；窄屏：只留中栏 + 顶部信息条
 * 数据在 {"version": "0.3.0", "units": "cm", "canvas": [560, 860], "colors": {"light": "#ffcd5c", "cover": "#b08aff", "switch": "#5eead4", "wall_switch": "#5eead4", "media_player": "#ff8a5c", "sensor": "#78d18c", "binary_sensor": "#78d18c", "button": "#ff78aa", "scene": "#ff78aa", "vacuum": "#c8c87a", "gateway": "#8ab4ff", "pet": "#c9a0ff"}, "rooms": [{"name": "卧室", "points": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]], "bbox": [103.0, 0.0, 379.0, 410.0], "label": [241.0, 182.0], "temp": "sensor.wen_kong_ban_lu_w100_wo_shi_wen_du_wen_du"}, {"name": "大阳台", "points": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]], "bbox": [379.0, 190.0, 550.0, 410.0], "label": [465.0, 276.0], "temp": null}, {"name": "客厅", "points": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]], "bbox": [235.0, 410.0, 550.0, 665.0], "label": [363.0, 538.0], "temp": null}, {"name": "书房", "points": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]], "bbox": [235.0, 665.0, 550.0, 850.0], "label": [465.0, 751.0], "temp": null}, {"name": "玄关", "points": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]], "bbox": [235.0, 740.0, 380.0, 850.0], "label": [289.0, 794.0], "temp": "sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_wen_du"}, {"name": "浴室", "points": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]], "bbox": [103.0, 410.0, 235.0, 665.0], "label": [169.0, 476.0], "temp": null}, {"name": "小阳台", "points": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]], "bbox": [0.0, 420.0, 103.0, 665.0], "label": [52.0, 472.0], "temp": null}, {"name": "厨房", "points": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]], "bbox": [0.0, 665.0, 235.0, 850.0], "label": [92.0, 757.0], "temp": null}], "walls": [[340.0, 0.0, 160.0, 0.0], [340.0, 0.0, 340.0, 70.0], [160.0, 0.0, 160.0, 70.0], [379.0, 70.0, 340.0, 70.0], [160.0, 70.0, 103.0, 70.0], [379.0, 70.0, 379.0, 410.0], [103.0, 70.0, 103.0, 410.0], [550.0, 190.0, 395.0, 190.0], [550.0, 190.0, 550.0, 850.0], [550.0, 850.0, 0.0, 850.0], [0.0, 420.0, 0.0, 850.0], [103.0, 420.0, 0.0, 420.0], [550.0, 410.0, 379.0, 410.0], [379.0, 410.0, 103.0, 410.0], [235.0, 410.0, 235.0, 850.0], [235.0, 665.0, 0.0, 665.0], [103.0, 410.0, 103.0, 665.0], [380.0, 740.0, 235.0, 740.0], [380.0, 740.0, 380.0, 850.0], [379.0, 190.0, 395.0, 190.0]], "devices": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "area": "卧室", "kind": "light", "rank": 1, "x": 243.1, "y": 226.6, "gangs": null, "controls": [{"entity_id": "light.wo_shi_deng", "domain": "light", "label": "卧室·主灯"}], "state_entity": null, "battery": null}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "area": "卧室", "kind": "cover", "rank": 2, "x": 249.4, "y": 16.7, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_wo_shi", "domain": "cover", "label": "卧室·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_wo_shi_pei_zhi_zhuang_tai", "battery": null}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "area": "卧室", "kind": "sensor", "rank": 3, "x": 111.4, "y": 325.5, "gangs": null, "controls": [], "state_entity": "sensor.wen_kong_ban_lu_w100_wo_shi_shi_du_shi_du", "battery": null}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "area": "卧室", "kind": "switch", "rank": null, "x": 363.5, "y": 146.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_qian", "domain": "switch", "label": "卧室·插座（床前）"}], "state_entity": null, "battery": null}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "area": "卧室", "kind": "switch", "rank": null, "x": 116.2, "y": 116.3, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_you", "domain": "switch", "label": "卧室·插座（床右）"}], "state_entity": null, "battery": null}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "area": "卧室", "kind": "switch", "rank": null, "x": 109.9, "y": 290.6, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_zuo", "domain": "switch", "label": "卧室·插座（床左）"}], "state_entity": null, "battery": null}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "area": "大阳台", "kind": "light", "rank": 12, "x": 464.4, "y": 304.7, "gangs": null, "controls": [{"entity_id": "light.da_yang_tai_deng", "domain": "light", "label": "大阳台·主灯"}], "state_entity": null, "battery": null}, {"id": "a4dc161a95e44eec9ad78b4d739d8e78", "name": "大阳台·窗帘", "area": "大阳台", "kind": "cover", "rank": 13, "x": 464.1, "y": 406.2, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_da_yang_tai", "domain": "cover", "label": "大阳台·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_da_yang_tai_pei_zhi_zhuang_tai", "battery": null}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "area": "大阳台", "kind": "sensor", "rank": 14, "x": 512.4, "y": 368.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_ci_chu_you_ren", "battery": null}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "area": "大阳台", "kind": "sensor", "rank": 15, "x": 417.5, "y": 368.8, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_dian_chi", "battery": null}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "area": "大阳台", "kind": "binary_sensor", "rank": null, "x": 500.8, "y": 237.5, "gangs": null, "controls": [{"entity_id": "switch.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_auto_clean", "domain": "switch", "label": "大阳台·猫厕所 MAX2"}], "state_entity": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_frequent_use_detection", "battery": null}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "area": "客厅", "kind": "light", "rank": 4, "x": 394.9, "y": 539.8, "gangs": null, "controls": [{"entity_id": "light.ke_ting_deng", "domain": "light", "label": "客厅·主灯"}], "state_entity": null, "battery": null}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "area": "客厅", "kind": "media", "rank": 5, "x": 538.6, "y": 461.2, "gangs": null, "controls": [{"entity_id": "media_player.qi_ju_shi_qi_ju_shi", "domain": "media_player", "label": "客厅·HomePod mini"}], "state_entity": null, "battery": null}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "area": "客厅", "kind": "pet", "rank": 6, "x": 249.4, "y": 504.3, "gangs": null, "controls": [{"entity_id": "switch.zhi_neng_wei_shi_qi_solo_child_lock", "domain": "switch", "label": "客厅·喂食器 SOLO"}], "state_entity": "binary_sensor.zhi_neng_wei_shi_qi_solo_feeding", "battery": "sensor.zhi_neng_wei_shi_qi_solo_battery_level"}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "area": "客厅", "kind": "switch", "rank": null, "x": 250.1, "y": 541.1, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_you", "domain": "switch", "label": "客厅·插座（右）"}], "state_entity": null, "battery": null}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "area": "客厅", "kind": "switch", "rank": null, "x": 249.5, "y": 569.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_zuo", "domain": "switch", "label": "客厅·插座（左）"}], "state_entity": null, "battery": null}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "area": "客厅", "kind": "switch", "rank": null, "x": 537.6, "y": 505.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_sha_fa_bei", "domain": "switch", "label": "客厅·插座（沙发背）"}], "state_entity": null, "battery": null}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "area": "书房", "kind": "light", "rank": 7, "x": 440, "y": 745.5, "gangs": null, "controls": [{"entity_id": "light.shu_zhuo_deng", "domain": "light", "label": "书房·书桌灯"}], "state_entity": null, "battery": null}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "area": "书房", "kind": "light", "rank": 8, "x": 513, "y": 689.6, "gangs": null, "controls": [{"entity_id": "light.liu_guang_yi_cai_luo_di_deng_t1", "domain": "light", "label": "书房·落地灯 T1"}], "state_entity": null, "battery": null}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "area": "书房", "kind": "scene", "rank": 9, "x": 513, "y": 747.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.mo_fang_kong_zhi_qi_shu_fang_fan_zhuan_90_dian_chi", "battery": null}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "area": "书房", "kind": "gateway", "rank": 10, "x": 514.1, "y": 807, "gangs": null, "controls": [], "state_entity": null, "battery": null}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "area": "书房", "kind": "switch", "rank": null, "x": 537, "y": 777.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_shu_fang", "domain": "switch", "label": "书房·插座"}], "state_entity": null, "battery": null}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "area": "玄关", "kind": "sensor", "rank": 18, "x": 310, "y": 828.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_ci_chu_you_ren", "battery": null}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "area": "玄关", "kind": "sensor", "rank": 19, "x": 260, "y": 827.1, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_zhuang_tai_chuan_gan_qi_p100_men", "battery": null}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "area": "浴室", "kind": "wall_switch", "rank": 20, "x": 169.1, "y": 545.9, "gangs": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "label": "排气扇", "domain": "light", "endpoint": 40, "key": "键1"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "label": "浴室灯", "domain": "light", "endpoint": 41, "key": "键2"}], "controls": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "domain": "light", "label": "排气扇"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "domain": "light", "label": "浴室灯"}], "state_entity": null, "battery": null}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 146, "y": 480.1, "gangs": null, "controls": [{"entity_id": "switch.wei_sheng_jian_p20_do_not_disturb", "domain": "switch", "label": "浴室·扫地机 P20"}], "state_entity": "binary_sensor.wei_sheng_jian_p20_charging", "battery": "sensor.wei_sheng_jian_p20_battery"}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 124.1, "y": 479.6, "gangs": null, "controls": [{"entity_id": "switch.p20_dock_child_lock", "domain": "switch", "label": "浴室·扫地机基站"}], "state_entity": "binary_sensor.p20_dock_clean_water_box", "battery": null}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "area": "小阳台", "kind": "light", "rank": 16, "x": 50.1, "y": 550, "gangs": null, "controls": [{"entity_id": "light.xiao_yang_tai_deng", "domain": "light", "label": "小阳台·主灯"}], "state_entity": null, "battery": null}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "area": "小阳台", "kind": "sensor", "rank": 17, "x": 77.1, "y": 653.4, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_dian_chi", "battery": null}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "area": "厨房", "kind": "light", "rank": 11, "x": 120, "y": 759.9, "gangs": null, "controls": [{"entity_id": "light.chu_fang_deng", "domain": "light", "label": "厨房·主灯"}], "state_entity": null, "battery": null}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "area": "厨房", "kind": "switch", "rank": null, "x": 172.4, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_you", "domain": "switch", "label": "厨房·插座（右）"}], "state_entity": null, "battery": null}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "area": "厨房", "kind": "switch", "rank": null, "x": 198.9, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_zuo", "domain": "switch", "label": "厨房·插座（左）"}], "state_entity": null, "battery": null}], "topology": [{"target": "书房·书桌灯", "via": "玄关·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键1 → 切换书桌灯"}, {"target": "客厅·主灯", "via": "玄关·墙面开关 Z1", "gang": 2, "note": "Studio 自动化：按键2 → 切换客厅灯"}, {"target": "卧室·主灯", "via": "卧室·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键 → 切换卧室灯"}], "scenes": [{"name": "回家", "icon": "🏠", "entity": "script.hui_jia"}, {"name": "离家", "icon": "🚪", "entity": "script.li_jia"}, {"name": "睡觉", "icon": "🌙", "entity": "script.shui_jiao"}, {"name": "观影", "icon": "🎬", "entity": "script.guan_ying"}], "ai": [{"icon": "☀", "entity": "input_text.ai_line_weather"}, {"icon": "🧳", "entity": "input_text.ai_line_trip"}, {"icon": "🌡", "entity": "input_text.ai_line_home"}, {"icon": "⚠", "entity": "input_text.ai_line_cross"}], "aiMeta": "input_text.ai_meta", "aiScript": "script.ai_brief_refresh", "stats": {"rooms": 8, "devices": 32}} 处注入，由 tools/make_card.py 生成
 */
const DATA = {"version": "0.3.0", "units": "cm", "canvas": [560, 860], "colors": {"light": "#ffcd5c", "cover": "#b08aff", "switch": "#5eead4", "wall_switch": "#5eead4", "media_player": "#ff8a5c", "sensor": "#78d18c", "binary_sensor": "#78d18c", "button": "#ff78aa", "scene": "#ff78aa", "vacuum": "#c8c87a", "gateway": "#8ab4ff", "pet": "#c9a0ff"}, "rooms": [{"name": "卧室", "points": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]], "bbox": [103.0, 0.0, 379.0, 410.0], "label": [241.0, 182.0], "temp": "sensor.wen_kong_ban_lu_w100_wo_shi_wen_du_wen_du"}, {"name": "大阳台", "points": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]], "bbox": [379.0, 190.0, 550.0, 410.0], "label": [465.0, 276.0], "temp": null}, {"name": "客厅", "points": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]], "bbox": [235.0, 410.0, 550.0, 665.0], "label": [363.0, 538.0], "temp": null}, {"name": "书房", "points": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]], "bbox": [235.0, 665.0, 550.0, 850.0], "label": [465.0, 751.0], "temp": null}, {"name": "玄关", "points": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]], "bbox": [235.0, 740.0, 380.0, 850.0], "label": [289.0, 794.0], "temp": "sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_wen_du"}, {"name": "浴室", "points": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]], "bbox": [103.0, 410.0, 235.0, 665.0], "label": [169.0, 476.0], "temp": null}, {"name": "小阳台", "points": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]], "bbox": [0.0, 420.0, 103.0, 665.0], "label": [52.0, 472.0], "temp": null}, {"name": "厨房", "points": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]], "bbox": [0.0, 665.0, 235.0, 850.0], "label": [92.0, 757.0], "temp": null}], "walls": [[340.0, 0.0, 160.0, 0.0], [340.0, 0.0, 340.0, 70.0], [160.0, 0.0, 160.0, 70.0], [379.0, 70.0, 340.0, 70.0], [160.0, 70.0, 103.0, 70.0], [379.0, 70.0, 379.0, 410.0], [103.0, 70.0, 103.0, 410.0], [550.0, 190.0, 395.0, 190.0], [550.0, 190.0, 550.0, 850.0], [550.0, 850.0, 0.0, 850.0], [0.0, 420.0, 0.0, 850.0], [103.0, 420.0, 0.0, 420.0], [550.0, 410.0, 379.0, 410.0], [379.0, 410.0, 103.0, 410.0], [235.0, 410.0, 235.0, 850.0], [235.0, 665.0, 0.0, 665.0], [103.0, 410.0, 103.0, 665.0], [380.0, 740.0, 235.0, 740.0], [380.0, 740.0, 380.0, 850.0], [379.0, 190.0, 395.0, 190.0]], "devices": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "area": "卧室", "kind": "light", "rank": 1, "x": 243.1, "y": 226.6, "gangs": null, "controls": [{"entity_id": "light.wo_shi_deng", "domain": "light", "label": "卧室·主灯"}], "state_entity": null, "battery": null}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "area": "卧室", "kind": "cover", "rank": 2, "x": 249.4, "y": 16.7, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_wo_shi", "domain": "cover", "label": "卧室·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_wo_shi_pei_zhi_zhuang_tai", "battery": null}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "area": "卧室", "kind": "sensor", "rank": 3, "x": 111.4, "y": 325.5, "gangs": null, "controls": [], "state_entity": "sensor.wen_kong_ban_lu_w100_wo_shi_shi_du_shi_du", "battery": null}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "area": "卧室", "kind": "switch", "rank": null, "x": 363.5, "y": 146.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_qian", "domain": "switch", "label": "卧室·插座（床前）"}], "state_entity": null, "battery": null}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "area": "卧室", "kind": "switch", "rank": null, "x": 116.2, "y": 116.3, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_you", "domain": "switch", "label": "卧室·插座（床右）"}], "state_entity": null, "battery": null}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "area": "卧室", "kind": "switch", "rank": null, "x": 109.9, "y": 290.6, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_zuo", "domain": "switch", "label": "卧室·插座（床左）"}], "state_entity": null, "battery": null}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "area": "大阳台", "kind": "light", "rank": 12, "x": 464.4, "y": 304.7, "gangs": null, "controls": [{"entity_id": "light.da_yang_tai_deng", "domain": "light", "label": "大阳台·主灯"}], "state_entity": null, "battery": null}, {"id": "a4dc161a95e44eec9ad78b4d739d8e78", "name": "大阳台·窗帘", "area": "大阳台", "kind": "cover", "rank": 13, "x": 464.1, "y": 406.2, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_da_yang_tai", "domain": "cover", "label": "大阳台·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_da_yang_tai_pei_zhi_zhuang_tai", "battery": null}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "area": "大阳台", "kind": "sensor", "rank": 14, "x": 512.4, "y": 368.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_ci_chu_you_ren", "battery": null}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "area": "大阳台", "kind": "sensor", "rank": 15, "x": 417.5, "y": 368.8, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_dian_chi", "battery": null}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "area": "大阳台", "kind": "binary_sensor", "rank": null, "x": 500.8, "y": 237.5, "gangs": null, "controls": [{"entity_id": "switch.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_auto_clean", "domain": "switch", "label": "大阳台·猫厕所 MAX2"}], "state_entity": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_frequent_use_detection", "battery": null}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "area": "客厅", "kind": "light", "rank": 4, "x": 394.9, "y": 539.8, "gangs": null, "controls": [{"entity_id": "light.ke_ting_deng", "domain": "light", "label": "客厅·主灯"}], "state_entity": null, "battery": null}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "area": "客厅", "kind": "media", "rank": 5, "x": 538.6, "y": 461.2, "gangs": null, "controls": [{"entity_id": "media_player.qi_ju_shi_qi_ju_shi", "domain": "media_player", "label": "客厅·HomePod mini"}], "state_entity": null, "battery": null}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "area": "客厅", "kind": "pet", "rank": 6, "x": 249.4, "y": 504.3, "gangs": null, "controls": [{"entity_id": "switch.zhi_neng_wei_shi_qi_solo_child_lock", "domain": "switch", "label": "客厅·喂食器 SOLO"}], "state_entity": "binary_sensor.zhi_neng_wei_shi_qi_solo_feeding", "battery": "sensor.zhi_neng_wei_shi_qi_solo_battery_level"}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "area": "客厅", "kind": "switch", "rank": null, "x": 250.1, "y": 541.1, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_you", "domain": "switch", "label": "客厅·插座（右）"}], "state_entity": null, "battery": null}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "area": "客厅", "kind": "switch", "rank": null, "x": 249.5, "y": 569.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_zuo", "domain": "switch", "label": "客厅·插座（左）"}], "state_entity": null, "battery": null}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "area": "客厅", "kind": "switch", "rank": null, "x": 537.6, "y": 505.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_sha_fa_bei", "domain": "switch", "label": "客厅·插座（沙发背）"}], "state_entity": null, "battery": null}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "area": "书房", "kind": "light", "rank": 7, "x": 440, "y": 745.5, "gangs": null, "controls": [{"entity_id": "light.shu_zhuo_deng", "domain": "light", "label": "书房·书桌灯"}], "state_entity": null, "battery": null}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "area": "书房", "kind": "light", "rank": 8, "x": 513, "y": 689.6, "gangs": null, "controls": [{"entity_id": "light.liu_guang_yi_cai_luo_di_deng_t1", "domain": "light", "label": "书房·落地灯 T1"}], "state_entity": null, "battery": null}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "area": "书房", "kind": "scene", "rank": 9, "x": 513, "y": 747.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.mo_fang_kong_zhi_qi_shu_fang_fan_zhuan_90_dian_chi", "battery": null}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "area": "书房", "kind": "gateway", "rank": 10, "x": 514.1, "y": 807, "gangs": null, "controls": [], "state_entity": null, "battery": null}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "area": "书房", "kind": "switch", "rank": null, "x": 537, "y": 777.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_shu_fang", "domain": "switch", "label": "书房·插座"}], "state_entity": null, "battery": null}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "area": "玄关", "kind": "sensor", "rank": 18, "x": 310, "y": 828.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_ci_chu_you_ren", "battery": null}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "area": "玄关", "kind": "sensor", "rank": 19, "x": 260, "y": 827.1, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_zhuang_tai_chuan_gan_qi_p100_men", "battery": null}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "area": "浴室", "kind": "wall_switch", "rank": 20, "x": 169.1, "y": 545.9, "gangs": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "label": "排气扇", "domain": "light", "endpoint": 40, "key": "键1"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "label": "浴室灯", "domain": "light", "endpoint": 41, "key": "键2"}], "controls": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "domain": "light", "label": "排气扇"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "domain": "light", "label": "浴室灯"}], "state_entity": null, "battery": null}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 146, "y": 480.1, "gangs": null, "controls": [{"entity_id": "switch.wei_sheng_jian_p20_do_not_disturb", "domain": "switch", "label": "浴室·扫地机 P20"}], "state_entity": "binary_sensor.wei_sheng_jian_p20_charging", "battery": "sensor.wei_sheng_jian_p20_battery"}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 124.1, "y": 479.6, "gangs": null, "controls": [{"entity_id": "switch.p20_dock_child_lock", "domain": "switch", "label": "浴室·扫地机基站"}], "state_entity": "binary_sensor.p20_dock_clean_water_box", "battery": null}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "area": "小阳台", "kind": "light", "rank": 16, "x": 50.1, "y": 550, "gangs": null, "controls": [{"entity_id": "light.xiao_yang_tai_deng", "domain": "light", "label": "小阳台·主灯"}], "state_entity": null, "battery": null}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "area": "小阳台", "kind": "sensor", "rank": 17, "x": 77.1, "y": 653.4, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_dian_chi", "battery": null}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "area": "厨房", "kind": "light", "rank": 11, "x": 120, "y": 759.9, "gangs": null, "controls": [{"entity_id": "light.chu_fang_deng", "domain": "light", "label": "厨房·主灯"}], "state_entity": null, "battery": null}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "area": "厨房", "kind": "switch", "rank": null, "x": 172.4, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_you", "domain": "switch", "label": "厨房·插座（右）"}], "state_entity": null, "battery": null}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "area": "厨房", "kind": "switch", "rank": null, "x": 198.9, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_zuo", "domain": "switch", "label": "厨房·插座（左）"}], "state_entity": null, "battery": null}], "topology": [{"target": "书房·书桌灯", "via": "玄关·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键1 → 切换书桌灯"}, {"target": "客厅·主灯", "via": "玄关·墙面开关 Z1", "gang": 2, "note": "Studio 自动化：按键2 → 切换客厅灯"}, {"target": "卧室·主灯", "via": "卧室·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键 → 切换卧室灯"}], "scenes": [{"name": "回家", "icon": "🏠", "entity": "script.hui_jia"}, {"name": "离家", "icon": "🚪", "entity": "script.li_jia"}, {"name": "睡觉", "icon": "🌙", "entity": "script.shui_jiao"}, {"name": "观影", "icon": "🎬", "entity": "script.guan_ying"}], "ai": [{"icon": "☀", "entity": "input_text.ai_line_weather"}, {"icon": "🧳", "entity": "input_text.ai_line_trip"}, {"icon": "🌡", "entity": "input_text.ai_line_home"}, {"icon": "⚠", "entity": "input_text.ai_line_cross"}], "aiMeta": "input_text.ai_meta", "aiScript": "script.ai_brief_refresh", "stats": {"rooms": 8, "devices": 32}};

const NS = "http://www.w3.org/2000/svg";

const BASE_R = 11;
const BASE_R_MULTI = 15;
const TARGET_PIN_R = 9;
const BADGE_H = 36;
const TARGET_BADGE_H = 58;

const WX = {
  "sunny":"晴","clear-night":"晴","partlycloudy":"局部多云","cloudy":"多云",
  "rainy":"小雨","pouring":"大雨","snowy":"雪","snowy-rainy":"雨夹雪",
  "fog":"雾","hail":"冰雹","lightning":"雷阵雨","windy":"大风",
  "windy-variant":"大风","exceptional":"异常","clear-day":"晴"
};

const CSS = `
:host{display:block}
ha-card{overflow:hidden;background:#0b1119;border:1px solid #1b2530;border-radius:16px;
        color:#e8f2fb;font-family:-apple-system,"Segoe UI","Microsoft YaHei",sans-serif}
.shell{display:grid;grid-template-columns:288px minmax(0,1fr) 320px;
       height:min(78vh,840px);min-height:420px}
.left{display:flex;flex-direction:column;gap:12px;padding:16px 14px;min-height:0;
      position:relative;border-right:1px solid #16212c;
      background:linear-gradient(180deg,#0c141d,#0a1119)}
.right{display:flex;flex-direction:column;gap:12px;padding:14px 12px;min-height:0;
      border-left:1px solid #16212c;background:linear-gradient(180deg,#0c141d,#0a1119)}
.center{position:relative;min-width:0;min-height:0;overflow:hidden}
.center svg{width:100%;height:100%;display:block;touch-action:manipulation;max-height:none}

/* ---------- 左栏 ---------- */
.clock .t{font-size:36px;font-weight:700;letter-spacing:1.5px;line-height:1.05;color:#e8f2fb;
          font-variant-numeric:tabular-nums}
.clock .d{font-size:12px;color:#7e93a8;margin-top:3px}
.clock .w{font-size:12px;color:#9fd2ef;margin-top:7px;display:flex;align-items:center;gap:6px}
.ai{flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:9px;
    padding-right:2px}
.ai-row{display:flex;gap:8px;font-size:12px;line-height:1.5;color:#b9cddd}
.ai-row .ic{flex:0 0 16px;text-align:center;opacity:.85}
.ai-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;
         font-size:10px;color:#5f7386;min-height:18px}
.ai-refresh{width:22px;height:22px;border-radius:50%;border:1px solid #24384a;background:#13202b;
            color:#9fd2ef;font-size:12px;line-height:1;cursor:pointer;padding:0;
            display:flex;align-items:center;justify-content:center;font-family:inherit}
.ai-refresh:hover{border-color:#1d6f96;background:#16232f}
.alerts{margin-top:auto}
.alert-cap{display:none;align-items:center;gap:7px;padding:8px 12px;border-radius:11px;
           background:#241a10;border:1px solid #5a4322;color:#f0c37a;font-size:12px;cursor:pointer}
.alert-cap.on{display:flex}
.alert-cap:hover{border-color:#a2752f}
/* 展开态要盖住整个左栏：定位锚点必须是 .left（.alerts 只有胶囊那么高，踩过） */
.alert-list{display:none;position:absolute;left:14px;right:14px;bottom:14px;z-index:12;
            max-height:62%;overflow:auto;background:#14100a;border:1px solid #5a4322;
            border-radius:12px;padding:10px;box-shadow:0 10px 30px #000b}
.alert-list.on{display:block}
.alert-list h4{margin:0 0 8px;font-size:12px;color:#f0c37a;font-weight:700}
.alert-list .it{font-size:11px;color:#d7c4a6;padding:4px 0;border-bottom:1px solid #2a2318;
                display:flex;justify-content:space-between;gap:8px}
.alert-list .it:last-child{border-bottom:none}

/* ---------- 中栏 ---------- */
.room{fill:#171f29;stroke:#1b2530;stroke-width:.6;transition:opacity .3s;cursor:pointer}
.room:hover{fill:#1b2530}
/* 墙不再是一条细线，而是有厚度的填充带 + 一条亮边，看起来像实体墙 */
.wallband{fill:#46596e;stroke:none;pointer-events:none}
.walledge{fill:none;stroke:#7590a8;stroke-width:.9;opacity:.9;pointer-events:none;
          vector-effect:non-scaling-stroke}
.roomname{fill:#96a9be;font-size:13px;font-weight:600;text-anchor:middle;
          dominant-baseline:central;pointer-events:none;letter-spacing:.5px}

.pin{cursor:pointer}
.pin.no{cursor:default}
.pin .ring{fill:none;stroke:#2a3a4a;stroke-width:1.5;vector-effect:non-scaling-stroke}
.pin .body{stroke:#0a0f15;stroke-width:1.4;vector-effect:non-scaling-stroke}
/* 可调光灯的旋钮环：单独成类，不吃 .body 的描边规则（踩过：被覆盖成细线） */
.pin .dial{fill:none}
.pin .tick{stroke:#0a0f15;stroke-width:1.6;vector-effect:non-scaling-stroke;stroke-linecap:round}
/* 双层光晕：只在"开"的时候出现，灭的不发光 */
.pin .glow{stroke:none;opacity:0;transition:opacity .25s;pointer-events:none}
.pin .slash{stroke:#8aa0b4;stroke-width:2;vector-effect:non-scaling-stroke;display:none}
.pin text{font-size:12px;font-weight:700;fill:#0a0f15;text-anchor:middle;
          dominant-baseline:central;pointer-events:none}

.pin.on .glow.g2{opacity:.16}
.pin.on .glow.g1{opacity:.28}
.pin.on .ring{stroke:#33506a}
.pin.off .body{opacity:.30}
.pin.off .dial{opacity:.32}
.pin.off .tick{opacity:.30}
.pin.off text{opacity:.55}
.pin.sensor .body{opacity:.85}
.pin.sensor .ring{stroke:#24384a}
.pin.unavail .body{fill:#2f3a45;opacity:.55}
.pin.unavail .dial{stroke:#2f3a45;opacity:.55}
.pin.unavail .ring{stroke:#5a6b7a;stroke-dasharray:3 3}
.pin.unavail .slash{display:block}
.pin.unavail text{opacity:.4}
.pin.dimmed .body{opacity:1}

.badge{cursor:pointer}
.badge rect{fill:rgba(16,26,36,.85);stroke:#2a3d4f;stroke-width:1}
.badge:hover rect{stroke:#1d6f96;fill:rgba(20,34,46,.92)}
.badge .b-name{font-size:10px;font-weight:700;fill:#dbe8f4;text-anchor:middle;
               dominant-baseline:central;pointer-events:none}
.badge .b-stats{font-size:8.5px;font-weight:600;fill:#93a9bd;text-anchor:middle;
                dominant-baseline:central;pointer-events:none}
/* 徽标右侧的一键开关：只有"该房间恰好一盏可控灯"时才出现 */
.badge .pwr{display:none;cursor:pointer}
.badge .pwr.on{display:block}
.badge .pwr circle{fill:#16232f;stroke:#2f4356;stroke-width:1}
.badge .pwr text{font-size:11px;fill:#7e93a8;text-anchor:middle;
                 dominant-baseline:central;pointer-events:none}
.badge .pwr.lit circle{fill:#ffcd5c;stroke:#b98f2e}
.badge .pwr.lit text{fill:#241a08}
.badge .pwr.dead{opacity:.35;cursor:not-allowed}

.back{position:absolute;left:14px;top:12px;z-index:8;display:none;align-items:center;gap:6px;
      background:rgba(17,28,38,.92);border:1px solid #24384a;border-radius:9px;
      padding:6px 12px 6px 9px;color:#cfe3f2;font-size:12px;cursor:pointer;
      font-family:inherit;backdrop-filter:blur(6px)}
.back:hover{border-color:#1d6f96;background:#16232f}
.back .arw{font-size:15px;line-height:1;color:#58c7ff}

.hud{position:absolute;right:12px;top:12px;font-size:11px;color:#93a9bd;pointer-events:none;
     background:rgba(11,17,25,.86);border:1px solid #1b2530;border-radius:8px;
     padding:3px 9px;backdrop-filter:blur(4px)}

.bubble{position:absolute;z-index:9;background:rgba(12,20,28,.95);border:1px solid #1d6f96;
        border-radius:8px;padding:5px 10px;font-size:12px;color:#bfe9ff;white-space:nowrap;
        transform:translate(-50%,-140%);pointer-events:none;display:none}
.bubble b{color:#fff;font-weight:700}

.menu{position:absolute;z-index:9;background:#111c26;border:1px solid #1d6f96;
      border-radius:10px;padding:6px;display:flex;flex-direction:column;gap:4px;
      box-shadow:0 8px 24px #000a}
.menu button{background:#16232f;color:#cfe3f2;border:1px solid #24384a;border-radius:7px;
             padding:7px 12px;font-size:12px;cursor:pointer;text-align:left;
             font-family:inherit;white-space:nowrap}
.menu button:hover{background:#1d3242;border-color:#1d6f96}
.menu button .dot{display:inline-block;width:7px;height:7px;border-radius:50%;
                  margin-right:7px;vertical-align:middle}

/* ---------- 右栏 ---------- */
.scenes{display:flex;flex-direction:column;gap:8px}
.scene{display:flex;align-items:center;gap:10px;height:56px;padding:0 14px;border-radius:12px;
       background:#13202b;border:1px solid #22333f;color:#dbe8f4;font-size:14px;font-weight:600;
       cursor:pointer;font-family:inherit;text-align:left;transition:.15s}
.scene .ic{font-size:18px;line-height:1}
.scene:hover{border-color:#1d6f96;background:#16283a}
.scene.dis{opacity:.34;cursor:not-allowed}
.sec-title{font-size:11px;color:#7e93a8;margin:2px 0 0;letter-spacing:.3px}
.devlist{flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:6px;
         padding-right:2px}
.empty{font-size:11px;color:#5f7386;padding:10px 2px}
.dev{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:9px;
     background:#0f1a24;border:1px solid #1a2836}
.dev .nm{flex:1;min-width:0;font-size:12px;white-space:nowrap;overflow:hidden;
         text-overflow:ellipsis;color:#cfdeeb}
.dev .st{font-size:11px;color:#8fa6ba;font-variant-numeric:tabular-nums}
.dev button{border:1px solid #24384a;background:#16232f;color:#cfe3f2;border-radius:7px;
            padding:4px 10px;font-size:11px;cursor:pointer;font-family:inherit}
.dev button:hover{border-color:#1d6f96;background:#1d3242}

/* 亮度/色温块（仅房间视图、且该房间有可调光灯时出现） */
.dims{display:none;flex-direction:column;gap:8px;padding:10px;border-radius:11px;
      background:#0f1a24;border:1px solid #1a2836}
.dims.on{display:flex}
.dims .d-row{display:flex;flex-direction:column;gap:5px}
.dims .d-head{display:flex;justify-content:space-between;gap:8px;font-size:11px;color:#a9bfd2}
.dims .d-head b{color:#e8f2fb;font-weight:600;font-variant-numeric:tabular-nums}
.dims input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:14px;
                         background:transparent;cursor:pointer;margin:0}
.dims input[type=range]::-webkit-slider-runnable-track{height:4px;border-radius:2px;
                         background:linear-gradient(90deg,#2b3f52,#3f5a72)}
.dims input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;
                         border-radius:50%;background:#ffcd5c;margin-top:-4px;
                         border:1px solid #0a0f15}
.dims input[type=range].kel::-webkit-slider-thumb{background:#9fd2ef}
.dims input[type=range]::-moz-range-track{height:4px;border-radius:2px;background:#2b3f52}
.dims input[type=range]::-moz-range-thumb{width:12px;height:12px;border:none;border-radius:50%;
                         background:#ffcd5c}

/* ---------- 窄屏 ---------- */
.topbar{display:none;position:absolute;left:12px;top:10px;z-index:8;gap:9px;align-items:baseline;
        font-size:12px;color:#9fb4c8;pointer-events:none}
.topbar b{font-size:17px;color:#e8f2fb;font-variant-numeric:tabular-nums}
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
    root.innerHTML = `<style>${CSS}</style>
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
          <div class="alerts" id="alerts">
            <div class="alert-cap" id="alert-cap"></div>
            <div class="alert-list" id="alert-list"></div>
          </div>
        </aside>

        <div class="center" id="center">
          <div class="topbar" id="topbar"><b id="tb-time">--:--</b><span id="tb-wx"></span></div>
          <div class="back" id="back"><span class="arw">‹</span><span>返回</span></div>
          <div class="hud" id="hud"></div>
          <div class="bubble" id="bubble"></div>
          <svg id="svg" viewBox="0 0 ${DATA.canvas[0]} ${DATA.canvas[1]}"
               preserveAspectRatio="xMidYMid meet"></svg>
        </div>

        <aside class="right" id="right">
          <div class="scenes" id="scenes"></div>
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
        <stop offset="0%" stop-color="#1d2836"/>
        <stop offset="68%" stop-color="#141d27"/>
        <stop offset="100%" stop-color="#0f1720"/>
      </radialGradient>
      <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#68829e"/>
        <stop offset="42%" stop-color="#4b6278"/>
        <stop offset="100%" stop-color="#2f4054"/>
      </linearGradient>
      <filter id="softShadow" x="-35%" y="-35%" width="170%" height="170%">
        <feGaussianBlur stdDeviation="3.4"/>
      </filter>
      <filter id="glowBlur" x="-150%" y="-150%" width="400%" height="400%">
        <feGaussianBlur stdDeviation="2.6"/>
      </filter>
      <radialGradient id="lampPool" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stop-color="#ffd98a" stop-opacity=".60"/>
        <stop offset="38%"  stop-color="#ffbe55" stop-opacity=".26"/>
        <stop offset="72%"  stop-color="#ff9f2e" stop-opacity=".08"/>
        <stop offset="100%" stop-color="#ff9f2e" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="wallGlass" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="#9fb8d0" stop-opacity=".92"/>
        <stop offset="26%"  stop-color="#6d8aa6" stop-opacity=".88"/>
        <stop offset="68%"  stop-color="#41586f" stop-opacity=".86"/>
        <stop offset="100%" stop-color="#2b3d4f" stop-opacity=".90"/>
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
    vS1.setAttribute("stop-color", "#000000");
    vS1.setAttribute("stop-opacity", "0");
    const vS2 = document.createElementNS(NS, "stop");
    vS2.setAttribute("offset", "100%");
    vS2.setAttribute("stop-color", "#000000");
    vS2.setAttribute("stop-opacity", "0.5");
    vigG.appendChild(vS1);
    vigG.appendChild(vS2);
    defs.appendChild(vigG);

    for (const r of DATA.rooms){
      const p = document.createElementNS(NS, "polygon");
      p.setAttribute("points", r.points.map(q => q.join(",")).join(" "));
      p.setAttribute("class", "room");
      // 材质：径向渐变模拟室内环境光（中心略亮、靠墙略暗）
      p.style.fill = "url(#roomGrad)";
      // 环境光遮蔽：房间边缘压暗一圈，读起来才有"墙脚"
      p.style.stroke = "#0a1017";
      p.style.strokeWidth = "2.6";
      p.style.strokeLinejoin = "round";
      p.addEventListener("click", () => this.openRoom(r.name));
      this._svg.appendChild(p);
      this._rooms.push({name:r.name, el:p, def:r});

      // 房间名：整屋视图里由徽标承担，这里只在"进房间"时显示在房间中心
      const t = document.createElementNS(NS, "text");
      t.setAttribute("x", String(r.label[0]));
      t.setAttribute("y", String(r.label[1] - 26));
      t.setAttribute("class", "roomname");
      t.textContent = r.name;
      t.style.display = "none";
      this._svg.appendChild(t);
      r._labelEl = t;
    }

    // 灯光层：亮灯在地板上投下暖色光池。必须画在墙之前，才像"光落在屋里"而不是贴在墙上。
    this._lampG = document.createElementNS(NS, "g");
    this._lampG.setAttribute("pointer-events", "none");
    this._lampG.setAttribute("clip-path", "url(#roomsClip)");
    this._lampG.style.mixBlendMode = "screen";
    this._svg.appendChild(this._lampG);

    // 墙：中心线 ±7cm 生成有厚度的填充带
    const T = 14, HALF = T / 2;
    const bands = [];
    for (const w of DATA.walls){
      const [x1, y1, x2, y2] = w;
      const dx = x2 - x1, dy = y2 - y1;
      const L = Math.hypot(dx, dy) || 1;
      const nx = (-dy / L) * HALF, ny = (dx / L) * HALF;
      const pts = [
        [x1 + nx, y1 + ny], [x2 + nx, y2 + ny],
        [x2 - nx, y2 - ny], [x1 - nx, y1 - ny],
      ].map(p => p.map(v => Math.round(v * 100) / 100).join(",")).join(" ");
      bands.push(pts);
    }

    // 1) 投影：整体偏移 + 高斯模糊，制造"墙体立起来"的体量感
    const shadowG = document.createElementNS(NS, "g");
    shadowG.setAttribute("filter", "url(#softShadow)");
    shadowG.setAttribute("transform", "translate(2.6,3.6)");
    shadowG.setAttribute("opacity", "0.62");
    for (const pts of bands){
      const s = document.createElementNS(NS, "polygon");
      s.setAttribute("points", pts);
      s.setAttribute("fill", "#000000");
      s.setAttribute("stroke", "none");
      shadowG.appendChild(s);
    }
    this._svg.appendChild(shadowG);

    // 2) 墙身：竖向渐变（受光面亮、背光面暗），替代原来的纯色填充
    for (const pts of bands){
      const poly = document.createElementNS(NS, "polygon");
      poly.setAttribute("points", pts);
      poly.setAttribute("fill", "url(#wallGlass)");
      poly.setAttribute("stroke", "none");
      this._svg.appendChild(poly);
    }

    // 3) 受光高光边（保留原有亮边，材质感靠它收口）
    for (const pts of bands){
      const edge = document.createElementNS(NS, "polygon");
      edge.setAttribute("points", pts);
      edge.setAttribute("class", "walledge");
      this._svg.appendChild(edge);
    }

    // 4) 表面微纹理：一层极淡的噪点，压掉纯色渐变那种"塑料感"
    const grain = document.createElementNS(NS, "rect");
    grain.setAttribute("x", "-30");
    grain.setAttribute("y", "-30");
    grain.setAttribute("width", "620");
    grain.setAttribute("height", "920");
    grain.setAttribute("fill", "#ffffff");
    grain.setAttribute("filter", "url(#grain)");
    grain.setAttribute("pointer-events", "none");
    grain.style.mixBlendMode = "overlay";
    this._svg.appendChild(grain);

    // 4) 暗角：整张图的四周压暗，视线自然收到房子中间
    let xmin = 1e9, ymin = 1e9, xmax = -1e9, ymax = -1e9;
    for (const r of DATA.rooms){
      for (const p of r.points){
        xmin = Math.min(xmin, p[0]); xmax = Math.max(xmax, p[0]);
        ymin = Math.min(ymin, p[1]); ymax = Math.max(ymax, p[1]);
      }
    }
    const vig = document.createElementNS(NS, "rect");
    vig.setAttribute("x", String(xmin - 80));
    vig.setAttribute("y", String(ymin - 80));
    vig.setAttribute("width", String(xmax - xmin + 160));
    vig.setAttribute("height", String(ymax - ymin + 160));
    vig.setAttribute("fill", "url(#vigGrad)");
    vig.setAttribute("pointer-events", "none");
    this._svg.appendChild(vig);

    this._buildBadges();
    this._buildPins();

    const backEl = root.getElementById("back");
    if (backEl) backEl.addEventListener("click", () => this._backToPlan());
    const centerEl = root.getElementById("center");
    if (centerEl) centerEl.addEventListener("click", () => this._closeMenu());

    this._buildChrome();
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
      const pwrC = document.createElementNS(NS, "circle");
      pwrC.setAttribute("r", String((BADGE_H * 0.52) / 2));
      pwrC.setAttribute("cy", "0");
      const pwrT = document.createElementNS(NS, "text");
      pwrT.textContent = "⏻";
      pwr.appendChild(pwrC); pwr.appendChild(pwrT);
      g.appendChild(pwr);

      const entry = {el:g, rect, name, stats, def:r, w:88, key:"", pwr, pwrC, light:null};

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
      const color = DATA.colors[d.kind] || "#8aa0b4";

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
        div.setAttribute("stroke", "#0a0f15"); div.setAttribute("stroke-width", "1.6");
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

  /* ------------------------------------------------------------------ 视图 */
  openRoom(name){
    const r = DATA.rooms.find(x => x.name === name);
    if (!r) return;
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
    this._closeMenu();
    this._applyView();
    this._animateTo({x:0, y:0, w:DATA.canvas[0], h:DATA.canvas[1]}, 380);
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
    const k = Math.max(0.2, Math.min(4, (TARGET_PIN_R * upp) / BASE_R));
    const kk = k.toFixed(4);
    for (const [, p] of this._pins){
      if (p.el.style.display === "none") continue;
      p.el.setAttribute("transform", `translate(${p.def.x},${p.def.y}) scale(${kk})`);
    }
    const kb = (TARGET_BADGE_H * upp) / BADGE_H;
    for (const [, b] of this._badges){
      if (b.el.style.display === "none") continue;
      const cwB = b.w || 88;
      const [x0, , x1] = b.def.bbox;
      const roomW = x1 - x0;
      let k2 = kb;
      if (roomW > 0) k2 = Math.min(k2, (roomW * 0.96) / cwB);
      k2 = Math.max(0.35, Math.min(3, k2));

      const half = (cwB * k2) / 2;
      let lx = b.def.label[0];
      if (roomW > cwB * k2 + 6){
        lx = Math.max(x0 + half + 3, Math.min(x1 - half - 3, lx));
      }
      b.el.setAttribute("transform",
        `translate(${lx},${b.def.label[1]}) scale(${k2.toFixed(3)})`);
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

    // 重建（数量个位数，成本可忽略），避免累积残留
    while (g.firstChild) g.removeChild(g.firstChild);

    // 第一层：整间房被点亮——面积大、透明度低，才像"光充满房间"，而不是地上一个小光斑
    const byArea = new Map();
    for (const [d, ratio] of want){
      byArea.set(d.area, Math.max(byArea.get(d.area) || 0, ratio));
    }
    for (const r of DATA.rooms){
      const ratio = byArea.get(r.name);
      if (!ratio) continue;
      const p = document.createElementNS(NS, "polygon");
      p.setAttribute("points", r.points.map(q => q.join(",")).join(" "));
      p.setAttribute("fill", "#ffb85c");
      p.setAttribute("opacity", String(0.05 + 0.10 * ratio));
      g.appendChild(p);
    }

    // 第二层：灯位中心的暖色光池（给位置感）
    for (const [d, ratio] of want){
      const r = 32 + 40 * ratio;              // cm：亮度越高，光池越大（但别糊满整屋）
      const e = document.createElementNS(NS, "ellipse");
      e.setAttribute("cx", String(d.x));
      e.setAttribute("cy", String(d.y));
      e.setAttribute("rx", String(r));
      e.setAttribute("ry", String(r * 0.82));
      e.setAttribute("fill", "url(#lampPool)");
      e.setAttribute("opacity", String(0.34 + 0.30 * ratio));
      g.appendChild(e);
    }
  }

  _syncBadges(){
    for (const [name, b] of this._badges){
      let on = 0, total = 0, devCount = 0;
      const lights = [];
      for (const d of DATA.devices){
        if (d.area !== name) continue;
        devCount++;
        for (const c of this._controlsOf(d)){
          if (c.domain !== "light") continue;
          lights.push(c.entity_id);
          total++;
          if (this._stateOf(c.entity_id) === "on") on++;
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
      if (total === 1) mainTxt = on ? "ON" : "OFF";
      else if (total > 1) mainTxt = `${on}/${total} ON`;
      // total === 0 → mainTxt 保持 null，这一行只留给温度

      const lit = total > 0 && on > 0;
      const mainColor = lit ? "#ffcd5c" : "#6b7f92";
      const prefix = (total > 0 && lit) ? "● " : "";

      if (b.def.temp){
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
        s2.setAttribute("fill", "#93a9bd");
        s2.setAttribute("font-weight", "600");
        b.stats.appendChild(s2);
      }

      let w1 = 60, w2 = 60;
      try { w1 = b.name.getBBox().width; w2 = b.stats.getBBox().width; } catch (e) {}
      // 电源键放徽标内部右端。宽度必须由按钮直径反推，否则文字一长按钮就顶出边框。
      const btnD = BADGE_H * 0.52;
      const pad = sole ? (btnD + 14) : 0;
      const cw = Math.max(66, Math.max(w1, w2) + 22 + pad);
      b.w = cw;
      b.btnD = btnD;
      b.rect.setAttribute("x", String(-cw / 2));
      b.rect.setAttribute("width", String(cw));
      b.name.setAttribute("x", String(-pad / 2));
      b.stats.setAttribute("x", String(-pad / 2));
      this._placePwr(b);
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
      b.innerHTML = `<span class="dot" style="background:${on ? "#58c7ff" : "#455a6e"}"></span>` +
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
