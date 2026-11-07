/* space-map v0.1 · 空间地图 Lovelace 卡片（零构建、单文件、无依赖）
 * 数据在 {"version": "0.1.0", "units": "cm", "canvas": [560, 860], "colors": {"light": "#ffcd5c", "cover": "#b08aff", "switch": "#5eead4", "wall_switch": "#5eead4", "media_player": "#ff8a5c", "sensor": "#78d18c", "binary_sensor": "#78d18c", "button": "#ff78aa", "scene": "#ff78aa", "vacuum": "#c8c87a", "gateway": "#8ab4ff", "pet": "#c9a0ff"}, "rooms": [{"name": "卧室", "points": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]], "bbox": [103.0, 0.0, 379.0, 410.0]}, {"name": "大阳台", "points": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]], "bbox": [379.0, 190.0, 550.0, 410.0]}, {"name": "客厅", "points": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]], "bbox": [235.0, 410.0, 550.0, 665.0]}, {"name": "书房", "points": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]], "bbox": [235.0, 665.0, 550.0, 850.0]}, {"name": "玄关", "points": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]], "bbox": [235.0, 740.0, 380.0, 850.0]}, {"name": "浴室", "points": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]], "bbox": [103.0, 410.0, 235.0, 665.0]}, {"name": "小阳台", "points": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]], "bbox": [0.0, 420.0, 103.0, 665.0]}, {"name": "厨房", "points": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]], "bbox": [0.0, 665.0, 235.0, 850.0]}], "walls": [[340.0, 0.0, 160.0, 0.0], [340.0, 0.0, 340.0, 70.0], [160.0, 0.0, 160.0, 70.0], [379.0, 70.0, 340.0, 70.0], [160.0, 70.0, 103.0, 70.0], [379.0, 70.0, 379.0, 410.0], [103.0, 70.0, 103.0, 410.0], [550.0, 190.0, 395.0, 190.0], [550.0, 190.0, 550.0, 850.0], [550.0, 850.0, 0.0, 850.0], [0.0, 420.0, 0.0, 850.0], [103.0, 420.0, 0.0, 420.0], [550.0, 410.0, 379.0, 410.0], [379.0, 410.0, 103.0, 410.0], [235.0, 410.0, 235.0, 850.0], [235.0, 665.0, 0.0, 665.0], [103.0, 410.0, 103.0, 665.0], [380.0, 740.0, 235.0, 740.0], [380.0, 740.0, 380.0, 850.0], [379.0, 190.0, 395.0, 190.0]], "devices": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "area": "卧室", "kind": "light", "rank": 1, "x": 243.1, "y": 226.6, "gangs": null, "controls": [{"entity_id": "light.wo_shi_deng", "domain": "light", "label": "卧室·主灯"}], "state_entity": null}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "area": "卧室", "kind": "cover", "rank": 2, "x": 249.4, "y": 16.7, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_wo_shi", "domain": "cover", "label": "卧室·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_wo_shi_pei_zhi_zhuang_tai"}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "area": "卧室", "kind": "sensor", "rank": 3, "x": 111.4, "y": 325.5, "gangs": null, "controls": [], "state_entity": "sensor.wen_kong_ban_lu_w100_wo_shi_shi_du_shi_du"}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "area": "卧室", "kind": "switch", "rank": null, "x": 363.5, "y": 146.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_qian", "domain": "switch", "label": "卧室·插座（床前）"}], "state_entity": null}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "area": "卧室", "kind": "switch", "rank": null, "x": 116.2, "y": 116.3, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_you", "domain": "switch", "label": "卧室·插座（床右）"}], "state_entity": null}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "area": "卧室", "kind": "switch", "rank": null, "x": 109.9, "y": 290.6, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_zuo", "domain": "switch", "label": "卧室·插座（床左）"}], "state_entity": null}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "area": "大阳台", "kind": "light", "rank": 12, "x": 464.4, "y": 304.7, "gangs": null, "controls": [{"entity_id": "light.da_yang_tai_deng", "domain": "light", "label": "大阳台·主灯"}], "state_entity": null}, {"id": "a4dc161a95e44eec9ad78b4d739d8e78", "name": "大阳台·窗帘", "area": "大阳台", "kind": "cover", "rank": 13, "x": 464.1, "y": 406.2, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_da_yang_tai", "domain": "cover", "label": "大阳台·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_da_yang_tai_pei_zhi_zhuang_tai"}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "area": "大阳台", "kind": "sensor", "rank": 14, "x": 512.4, "y": 368.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_ci_chu_you_ren"}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "area": "大阳台", "kind": "sensor", "rank": 15, "x": 417.5, "y": 368.8, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_dian_chi"}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "area": "大阳台", "kind": "binary_sensor", "rank": null, "x": 500.8, "y": 237.5, "gangs": null, "controls": [{"entity_id": "switch.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_auto_clean", "domain": "switch", "label": "大阳台·猫厕所 MAX2"}], "state_entity": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_frequent_use_detection"}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "area": "客厅", "kind": "light", "rank": 4, "x": 394.9, "y": 539.8, "gangs": null, "controls": [{"entity_id": "light.ke_ting_deng", "domain": "light", "label": "客厅·主灯"}], "state_entity": null}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "area": "客厅", "kind": "media", "rank": 5, "x": 538.6, "y": 461.2, "gangs": null, "controls": [{"entity_id": "media_player.qi_ju_shi_qi_ju_shi", "domain": "media_player", "label": "客厅·HomePod mini"}], "state_entity": null}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "area": "客厅", "kind": "pet", "rank": 6, "x": 249.4, "y": 504.3, "gangs": null, "controls": [{"entity_id": "switch.zhi_neng_wei_shi_qi_solo_child_lock", "domain": "switch", "label": "客厅·喂食器 SOLO"}], "state_entity": "binary_sensor.zhi_neng_wei_shi_qi_solo_feeding"}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "area": "客厅", "kind": "switch", "rank": null, "x": 250.1, "y": 541.1, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_you", "domain": "switch", "label": "客厅·插座（右）"}], "state_entity": null}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "area": "客厅", "kind": "switch", "rank": null, "x": 249.5, "y": 569.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_zuo", "domain": "switch", "label": "客厅·插座（左）"}], "state_entity": null}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "area": "客厅", "kind": "switch", "rank": null, "x": 537.6, "y": 505.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_sha_fa_bei", "domain": "switch", "label": "客厅·插座（沙发背）"}], "state_entity": null}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "area": "书房", "kind": "light", "rank": 7, "x": 440, "y": 745.5, "gangs": null, "controls": [{"entity_id": "light.shu_zhuo_deng", "domain": "light", "label": "书房·书桌灯"}], "state_entity": null}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "area": "书房", "kind": "light", "rank": 8, "x": 513, "y": 689.6, "gangs": null, "controls": [{"entity_id": "light.liu_guang_yi_cai_luo_di_deng_t1", "domain": "light", "label": "书房·落地灯 T1"}], "state_entity": null}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "area": "书房", "kind": "scene", "rank": 9, "x": 513, "y": 747.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.mo_fang_kong_zhi_qi_shu_fang_fan_zhuan_90_dian_chi"}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "area": "书房", "kind": "gateway", "rank": 10, "x": 514.1, "y": 807, "gangs": null, "controls": [], "state_entity": null}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "area": "书房", "kind": "switch", "rank": null, "x": 537, "y": 777.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_shu_fang", "domain": "switch", "label": "书房·插座"}], "state_entity": null}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "area": "玄关", "kind": "sensor", "rank": 18, "x": 310, "y": 828.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_ci_chu_you_ren"}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "area": "玄关", "kind": "sensor", "rank": 19, "x": 260, "y": 827.1, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_zhuang_tai_chuan_gan_qi_p100_men"}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "area": "浴室", "kind": "wall_switch", "rank": 20, "x": 169.1, "y": 545.9, "gangs": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "label": "排气扇", "domain": "light", "endpoint": 40, "key": "键1"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "label": "浴室灯", "domain": "light", "endpoint": 41, "key": "键2"}], "controls": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "domain": "light", "label": "排气扇"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "domain": "light", "label": "浴室灯"}], "state_entity": null}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 146, "y": 480.1, "gangs": null, "controls": [{"entity_id": "switch.wei_sheng_jian_p20_do_not_disturb", "domain": "switch", "label": "浴室·扫地机 P20"}], "state_entity": "binary_sensor.wei_sheng_jian_p20_charging"}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 124.1, "y": 479.6, "gangs": null, "controls": [{"entity_id": "switch.p20_dock_child_lock", "domain": "switch", "label": "浴室·扫地机基站"}], "state_entity": "binary_sensor.p20_dock_clean_water_box"}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "area": "小阳台", "kind": "light", "rank": 16, "x": 50.1, "y": 550, "gangs": null, "controls": [{"entity_id": "light.xiao_yang_tai_deng", "domain": "light", "label": "小阳台·主灯"}], "state_entity": null}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "area": "小阳台", "kind": "sensor", "rank": 17, "x": 77.1, "y": 653.4, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_dian_chi"}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "area": "厨房", "kind": "light", "rank": 11, "x": 120, "y": 759.9, "gangs": null, "controls": [{"entity_id": "light.chu_fang_deng", "domain": "light", "label": "厨房·主灯"}], "state_entity": null}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "area": "厨房", "kind": "switch", "rank": null, "x": 172.4, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_you", "domain": "switch", "label": "厨房·插座（右）"}], "state_entity": null}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "area": "厨房", "kind": "switch", "rank": null, "x": 198.9, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_zuo", "domain": "switch", "label": "厨房·插座（左）"}], "state_entity": null}], "topology": [{"target": "书房·书桌灯", "via": "玄关·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键1 → 切换书桌灯"}, {"target": "客厅·主灯", "via": "玄关·墙面开关 Z1", "gang": 2, "note": "Studio 自动化：按键2 → 切换客厅灯"}, {"target": "卧室·主灯", "via": "卧室·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键 → 切换卧室灯"}], "stats": {"rooms": 8, "devices": 32}} 处注入，由 tools/make_card.py 生成
 */
const DATA = {"version": "0.1.0", "units": "cm", "canvas": [560, 860], "colors": {"light": "#ffcd5c", "cover": "#b08aff", "switch": "#5eead4", "wall_switch": "#5eead4", "media_player": "#ff8a5c", "sensor": "#78d18c", "binary_sensor": "#78d18c", "button": "#ff78aa", "scene": "#ff78aa", "vacuum": "#c8c87a", "gateway": "#8ab4ff", "pet": "#c9a0ff"}, "rooms": [{"name": "卧室", "points": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]], "bbox": [103.0, 0.0, 379.0, 410.0]}, {"name": "大阳台", "points": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]], "bbox": [379.0, 190.0, 550.0, 410.0]}, {"name": "客厅", "points": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]], "bbox": [235.0, 410.0, 550.0, 665.0]}, {"name": "书房", "points": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]], "bbox": [235.0, 665.0, 550.0, 850.0]}, {"name": "玄关", "points": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]], "bbox": [235.0, 740.0, 380.0, 850.0]}, {"name": "浴室", "points": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]], "bbox": [103.0, 410.0, 235.0, 665.0]}, {"name": "小阳台", "points": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]], "bbox": [0.0, 420.0, 103.0, 665.0]}, {"name": "厨房", "points": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]], "bbox": [0.0, 665.0, 235.0, 850.0]}], "walls": [[340.0, 0.0, 160.0, 0.0], [340.0, 0.0, 340.0, 70.0], [160.0, 0.0, 160.0, 70.0], [379.0, 70.0, 340.0, 70.0], [160.0, 70.0, 103.0, 70.0], [379.0, 70.0, 379.0, 410.0], [103.0, 70.0, 103.0, 410.0], [550.0, 190.0, 395.0, 190.0], [550.0, 190.0, 550.0, 850.0], [550.0, 850.0, 0.0, 850.0], [0.0, 420.0, 0.0, 850.0], [103.0, 420.0, 0.0, 420.0], [550.0, 410.0, 379.0, 410.0], [379.0, 410.0, 103.0, 410.0], [235.0, 410.0, 235.0, 850.0], [235.0, 665.0, 0.0, 665.0], [103.0, 410.0, 103.0, 665.0], [380.0, 740.0, 235.0, 740.0], [380.0, 740.0, 380.0, 850.0], [379.0, 190.0, 395.0, 190.0]], "devices": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "area": "卧室", "kind": "light", "rank": 1, "x": 243.1, "y": 226.6, "gangs": null, "controls": [{"entity_id": "light.wo_shi_deng", "domain": "light", "label": "卧室·主灯"}], "state_entity": null}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "area": "卧室", "kind": "cover", "rank": 2, "x": 249.4, "y": 16.7, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_wo_shi", "domain": "cover", "label": "卧室·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_wo_shi_pei_zhi_zhuang_tai"}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "area": "卧室", "kind": "sensor", "rank": 3, "x": 111.4, "y": 325.5, "gangs": null, "controls": [], "state_entity": "sensor.wen_kong_ban_lu_w100_wo_shi_shi_du_shi_du"}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "area": "卧室", "kind": "switch", "rank": null, "x": 363.5, "y": 146.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_qian", "domain": "switch", "label": "卧室·插座（床前）"}], "state_entity": null}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "area": "卧室", "kind": "switch", "rank": null, "x": 116.2, "y": 116.3, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_you", "domain": "switch", "label": "卧室·插座（床右）"}], "state_entity": null}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "area": "卧室", "kind": "switch", "rank": null, "x": 109.9, "y": 290.6, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_zuo", "domain": "switch", "label": "卧室·插座（床左）"}], "state_entity": null}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "area": "大阳台", "kind": "light", "rank": 12, "x": 464.4, "y": 304.7, "gangs": null, "controls": [{"entity_id": "light.da_yang_tai_deng", "domain": "light", "label": "大阳台·主灯"}], "state_entity": null}, {"id": "a4dc161a95e44eec9ad78b4d739d8e78", "name": "大阳台·窗帘", "area": "大阳台", "kind": "cover", "rank": 13, "x": 464.1, "y": 406.2, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_da_yang_tai", "domain": "cover", "label": "大阳台·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_da_yang_tai_pei_zhi_zhuang_tai"}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "area": "大阳台", "kind": "sensor", "rank": 14, "x": 512.4, "y": 368.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_ci_chu_you_ren"}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "area": "大阳台", "kind": "sensor", "rank": 15, "x": 417.5, "y": 368.8, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_dian_chi"}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "area": "大阳台", "kind": "binary_sensor", "rank": null, "x": 500.8, "y": 237.5, "gangs": null, "controls": [{"entity_id": "switch.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_auto_clean", "domain": "switch", "label": "大阳台·猫厕所 MAX2"}], "state_entity": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_frequent_use_detection"}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "area": "客厅", "kind": "light", "rank": 4, "x": 394.9, "y": 539.8, "gangs": null, "controls": [{"entity_id": "light.ke_ting_deng", "domain": "light", "label": "客厅·主灯"}], "state_entity": null}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "area": "客厅", "kind": "media", "rank": 5, "x": 538.6, "y": 461.2, "gangs": null, "controls": [{"entity_id": "media_player.qi_ju_shi_qi_ju_shi", "domain": "media_player", "label": "客厅·HomePod mini"}], "state_entity": null}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "area": "客厅", "kind": "pet", "rank": 6, "x": 249.4, "y": 504.3, "gangs": null, "controls": [{"entity_id": "switch.zhi_neng_wei_shi_qi_solo_child_lock", "domain": "switch", "label": "客厅·喂食器 SOLO"}], "state_entity": "binary_sensor.zhi_neng_wei_shi_qi_solo_feeding"}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "area": "客厅", "kind": "switch", "rank": null, "x": 250.1, "y": 541.1, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_you", "domain": "switch", "label": "客厅·插座（右）"}], "state_entity": null}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "area": "客厅", "kind": "switch", "rank": null, "x": 249.5, "y": 569.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_zuo", "domain": "switch", "label": "客厅·插座（左）"}], "state_entity": null}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "area": "客厅", "kind": "switch", "rank": null, "x": 537.6, "y": 505.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_sha_fa_bei", "domain": "switch", "label": "客厅·插座（沙发背）"}], "state_entity": null}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "area": "书房", "kind": "light", "rank": 7, "x": 440, "y": 745.5, "gangs": null, "controls": [{"entity_id": "light.shu_zhuo_deng", "domain": "light", "label": "书房·书桌灯"}], "state_entity": null}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "area": "书房", "kind": "light", "rank": 8, "x": 513, "y": 689.6, "gangs": null, "controls": [{"entity_id": "light.liu_guang_yi_cai_luo_di_deng_t1", "domain": "light", "label": "书房·落地灯 T1"}], "state_entity": null}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "area": "书房", "kind": "scene", "rank": 9, "x": 513, "y": 747.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.mo_fang_kong_zhi_qi_shu_fang_fan_zhuan_90_dian_chi"}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "area": "书房", "kind": "gateway", "rank": 10, "x": 514.1, "y": 807, "gangs": null, "controls": [], "state_entity": null}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "area": "书房", "kind": "switch", "rank": null, "x": 537, "y": 777.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_shu_fang", "domain": "switch", "label": "书房·插座"}], "state_entity": null}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "area": "玄关", "kind": "sensor", "rank": 18, "x": 310, "y": 828.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_ci_chu_you_ren"}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "area": "玄关", "kind": "sensor", "rank": 19, "x": 260, "y": 827.1, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_zhuang_tai_chuan_gan_qi_p100_men"}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "area": "浴室", "kind": "wall_switch", "rank": 20, "x": 169.1, "y": 545.9, "gangs": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "label": "排气扇", "domain": "light", "endpoint": 40, "key": "键1"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "label": "浴室灯", "domain": "light", "endpoint": 41, "key": "键2"}], "controls": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "domain": "light", "label": "排气扇"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "domain": "light", "label": "浴室灯"}], "state_entity": null}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 146, "y": 480.1, "gangs": null, "controls": [{"entity_id": "switch.wei_sheng_jian_p20_do_not_disturb", "domain": "switch", "label": "浴室·扫地机 P20"}], "state_entity": "binary_sensor.wei_sheng_jian_p20_charging"}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 124.1, "y": 479.6, "gangs": null, "controls": [{"entity_id": "switch.p20_dock_child_lock", "domain": "switch", "label": "浴室·扫地机基站"}], "state_entity": "binary_sensor.p20_dock_clean_water_box"}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "area": "小阳台", "kind": "light", "rank": 16, "x": 50.1, "y": 550, "gangs": null, "controls": [{"entity_id": "light.xiao_yang_tai_deng", "domain": "light", "label": "小阳台·主灯"}], "state_entity": null}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "area": "小阳台", "kind": "sensor", "rank": 17, "x": 77.1, "y": 653.4, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_dian_chi"}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "area": "厨房", "kind": "light", "rank": 11, "x": 120, "y": 759.9, "gangs": null, "controls": [{"entity_id": "light.chu_fang_deng", "domain": "light", "label": "厨房·主灯"}], "state_entity": null}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "area": "厨房", "kind": "switch", "rank": null, "x": 172.4, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_you", "domain": "switch", "label": "厨房·插座（右）"}], "state_entity": null}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "area": "厨房", "kind": "switch", "rank": null, "x": 198.9, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_zuo", "domain": "switch", "label": "厨房·插座（左）"}], "state_entity": null}], "topology": [{"target": "书房·书桌灯", "via": "玄关·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键1 → 切换书桌灯"}, {"target": "客厅·主灯", "via": "玄关·墙面开关 Z1", "gang": 2, "note": "Studio 自动化：按键2 → 切换客厅灯"}, {"target": "卧室·主灯", "via": "卧室·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键 → 切换卧室灯"}], "stats": {"rooms": 8, "devices": 32}};

const NS = "http://www.w3.org/2000/svg";

const CSS = `
:host{display:block}
ha-card{overflow:hidden;background:#0b1119;border:1px solid #1b2530;border-radius:16px}
.wrap{position:relative;padding:10px}
svg{width:100%;height:auto;display:block;touch-action:manipulation}
.room{fill:#101720;stroke:#1b2530;stroke-width:.7}
.wall{stroke:#33475c;stroke-width:9;stroke-linecap:square}
.rname{fill:#7e93a8;font-size:11px;font-weight:700;pointer-events:none;
       font-family:-apple-system,"Segoe UI","Microsoft YaHei",sans-serif}
.pin{cursor:pointer}
.pin .ring{fill:none;stroke:#2a3a4a;stroke-width:1.2}
.pin .body{stroke:#0a0f15;stroke-width:1.6}
.pin text{font-size:9.5px;font-weight:700;fill:#0a0f15;text-anchor:middle;
          dominant-baseline:central;pointer-events:none;
          font-family:-apple-system,"Segoe UI","Microsoft YaHei",sans-serif}
.pin.off .body{opacity:.35}
.pin.off text{opacity:.5}
.pin.unavail .body{fill:#3a4652;opacity:.5}
.pin.sel .ring{stroke:#58c7ff;stroke-width:2}
.menu{position:absolute;z-index:9;background:#111c26;border:1px solid #1d6f96;
      border-radius:10px;padding:6px;display:flex;flex-direction:column;gap:4px;
      box-shadow:0 8px 24px #000a}
.menu button{background:#16232f;color:#cfe3f2;border:1px solid #24384a;border-radius:7px;
             padding:7px 12px;font-size:12px;cursor:pointer;text-align:left;
             font-family:inherit;white-space:nowrap}
.menu button:hover{background:#1d3242;border-color:#1d6f96}
.menu button .dot{display:inline-block;width:7px;height:7px;border-radius:50%;
                  margin-right:7px;vertical-align:middle}
.hud{position:absolute;left:14px;top:12px;font-size:11px;color:#5f7386;
     font-family:-apple-system,"Segoe UI","Microsoft YaHei",sans-serif;pointer-events:none}
`;

class SpaceMapCard extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:"open"});
    this._built = false;
    this._pins = new Map();
    this._menu = null;
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

  _render(){
    if (!this._hass || this._built) return;
    this._built = true;

    const root = this.shadowRoot;
    root.innerHTML = `<style>${CSS}</style>
      <ha-card><div class="wrap" id="wrap">
        <div class="hud">${DATA.stats.rooms} 间 · ${DATA.devices.length} 个点位</div>
        <svg id="svg" viewBox="0 0 ${DATA.canvas[0]} ${DATA.canvas[1]}"
             preserveAspectRatio="xMidYMid meet"></svg>
      </div></ha-card>`;

    const svg = root.getElementById("svg");

    // 房间
    for (const r of DATA.rooms){
      const p = document.createElementNS(NS, "polygon");
      p.setAttribute("points", r.points.map(q => q.join(",")).join(" "));
      p.setAttribute("class", "room");
      svg.appendChild(p);
    }
    // 墙
    for (const w of DATA.walls){
      const l = document.createElementNS(NS, "line");
      l.setAttribute("x1", w[0]); l.setAttribute("y1", w[1]);
      l.setAttribute("x2", w[2]); l.setAttribute("y2", w[3]);
      l.setAttribute("class", "wall");
      svg.appendChild(l);
    }
    // 房间名
    for (const r of DATA.rooms){
      const t = document.createElementNS(NS, "text");
      t.setAttribute("x", r.bbox[0] + 6);
      t.setAttribute("y", r.bbox[1] + 14);
      t.setAttribute("class", "rname");
      t.textContent = r.name;
      svg.appendChild(t);
    }

    // 图钉
    this._pins.clear();
    for (const d of DATA.devices){
      const g = document.createElementNS(NS, "g");
      g.setAttribute("class", "pin");
      g.setAttribute("transform", `translate(${d.x},${d.y})`);

      const multi = Array.isArray(d.gangs) && d.gangs.length >= 2;
      const r = multi ? 11 : 8.5;
      const color = DATA.colors[d.kind] || "#8aa0b4";

      const ring = document.createElementNS(NS, "circle");
      ring.setAttribute("r", r + 3.2);
      ring.setAttribute("class", "ring");
      g.appendChild(ring);

      if (multi){
        const left = document.createElementNS(NS, "path");
        left.setAttribute("d", `M0,${-r} A${r},${r} 0 0 0 0,${r} Z`);
        left.setAttribute("fill", color);
        left.setAttribute("class", "body");
        const right = document.createElementNS(NS, "path");
        right.setAttribute("d", `M0,${-r} A${r},${r} 0 0 1 0,${r} Z`);
        right.setAttribute("fill", color);
        right.setAttribute("class", "body");
        const div = document.createElementNS(NS, "line");
        div.setAttribute("x1", 0); div.setAttribute("y1", -r);
        div.setAttribute("x2", 0); div.setAttribute("y2", r);
        div.setAttribute("stroke", "#0a0f15"); div.setAttribute("stroke-width", "1.6");
        g.appendChild(left); g.appendChild(right); g.appendChild(div);
      } else {
        const c = document.createElementNS(NS, "circle");
        c.setAttribute("r", r);
        c.setAttribute("fill", color);
        c.setAttribute("class", "body");
        g.appendChild(c);
      }

      const t = document.createElementNS(NS, "text");
      t.textContent = d.rank;
      g.appendChild(t);

      g.addEventListener("click", ev => {
        ev.stopPropagation();
        this._onPin(d, g);
      });

      svg.appendChild(g);
      this._pins.set(d.id, {el: g, def: d});
    }

    root.getElementById("wrap").addEventListener("click", () => this._closeMenu());
    this._sync();
  }

  _stateOf(entityId){
    const s = this._hass.states[entityId];
    return s ? s.state : "unavailable";
  }

  _primaryEntity(d){
    const c = d.controls || [];
    const act = c.filter(e => ["light","switch","cover","fan","climate"].includes(e.domain));
    return (act[0] || c[0] || {}).entity_id || null;
  }

  _sync(){
    if (!this._built) return;
    for (const [, {el, def}] of this._pins){
      const eid = this._primaryEntity(def);
      el.classList.remove("off", "unavail");
      if (!eid){ continue; }
      const st = this._stateOf(eid);
      if (st === "unavailable" || st === "unknown") el.classList.add("unavail");
      else if (st === "off") el.classList.add("off");
    }
  }

  _onPin(d, g){
    const controls = (d.controls || []).filter(e =>
      ["light","switch","cover","fan","climate"].includes(e.domain));
    if (!controls.length) return;

    if (controls.length === 1){
      this._call(controls[0], "toggle");
      this._closeMenu();
      return;
    }

    // 多路：弹一个小菜单
    this._closeMenu();
    const wrap = this.shadowRoot.getElementById("wrap");
    const menu = document.createElement("div");
    menu.className = "menu";
    const svg = this.shadowRoot.getElementById("svg");
    const pt = svg.createSVGPoint();
    pt.x = d.x; pt.y = d.y;
    const scr = pt.matrixTransform(svg.getScreenCTM());
    const box = wrap.getBoundingClientRect();
    menu.style.left = Math.max(8, Math.min(box.width - 150, scr.x - box.left + 12)) + "px";
    menu.style.top = Math.max(8, scr.y - box.top - 10) + "px";

    for (const c of controls){
      const b = document.createElement("button");
      const on = this._stateOf(c.entity_id) === "on";
      b.innerHTML = `<span class="dot" style="background:${on ? "#58c7ff" : "#455a6e"}"></span>` +
                    `${c.label || c.entity_id}`;
      b.onclick = ev => { ev.stopPropagation(); this._call(c, "toggle"); this._closeMenu(); };
      menu.appendChild(b);
    }
    wrap.appendChild(menu);
    this._menu = menu;
  }

  _closeMenu(){
    if (this._menu && this._menu.parentNode) this._menu.parentNode.removeChild(this._menu);
    this._menu = null;
  }

  _call(ctrl, service){
    if (!this._hass) return;
    this._hass.callService(ctrl.domain, service, { entity_id: ctrl.entity_id });
  }
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
