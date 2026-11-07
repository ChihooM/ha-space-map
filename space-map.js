/* space-map v0.2 · 空间地图 Lovelace 卡片（零构建、单文件、无依赖）
 * 视图：plan（整屋房间徽标） / room:<名称>（单房间放大 + 设备图钉）
 * 数据在 {"version": "0.2.0", "units": "cm", "canvas": [560, 860], "colors": {"light": "#ffcd5c", "cover": "#b08aff", "switch": "#5eead4", "wall_switch": "#5eead4", "media_player": "#ff8a5c", "sensor": "#78d18c", "binary_sensor": "#78d18c", "button": "#ff78aa", "scene": "#ff78aa", "vacuum": "#c8c87a", "gateway": "#8ab4ff", "pet": "#c9a0ff"}, "rooms": [{"name": "卧室", "points": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]], "bbox": [103.0, 0.0, 379.0, 410.0], "label": [241.0, 182.0], "temp": "sensor.wen_kong_ban_lu_w100_wo_shi_wen_du_wen_du"}, {"name": "大阳台", "points": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]], "bbox": [379.0, 190.0, 550.0, 410.0], "label": [465.0, 276.0], "temp": null}, {"name": "客厅", "points": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]], "bbox": [235.0, 410.0, 550.0, 665.0], "label": [363.0, 538.0], "temp": null}, {"name": "书房", "points": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]], "bbox": [235.0, 665.0, 550.0, 850.0], "label": [465.0, 751.0], "temp": null}, {"name": "玄关", "points": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]], "bbox": [235.0, 740.0, 380.0, 850.0], "label": [289.0, 794.0], "temp": "sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_wen_du"}, {"name": "浴室", "points": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]], "bbox": [103.0, 410.0, 235.0, 665.0], "label": [169.0, 476.0], "temp": null}, {"name": "小阳台", "points": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]], "bbox": [0.0, 420.0, 103.0, 665.0], "label": [52.0, 472.0], "temp": null}, {"name": "厨房", "points": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]], "bbox": [0.0, 665.0, 235.0, 850.0], "label": [92.0, 757.0], "temp": null}], "walls": [[340.0, 0.0, 160.0, 0.0], [340.0, 0.0, 340.0, 70.0], [160.0, 0.0, 160.0, 70.0], [379.0, 70.0, 340.0, 70.0], [160.0, 70.0, 103.0, 70.0], [379.0, 70.0, 379.0, 410.0], [103.0, 70.0, 103.0, 410.0], [550.0, 190.0, 395.0, 190.0], [550.0, 190.0, 550.0, 850.0], [550.0, 850.0, 0.0, 850.0], [0.0, 420.0, 0.0, 850.0], [103.0, 420.0, 0.0, 420.0], [550.0, 410.0, 379.0, 410.0], [379.0, 410.0, 103.0, 410.0], [235.0, 410.0, 235.0, 850.0], [235.0, 665.0, 0.0, 665.0], [103.0, 410.0, 103.0, 665.0], [380.0, 740.0, 235.0, 740.0], [380.0, 740.0, 380.0, 850.0], [379.0, 190.0, 395.0, 190.0]], "devices": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "area": "卧室", "kind": "light", "rank": 1, "x": 243.1, "y": 226.6, "gangs": null, "controls": [{"entity_id": "light.wo_shi_deng", "domain": "light", "label": "卧室·主灯"}], "state_entity": null}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "area": "卧室", "kind": "cover", "rank": 2, "x": 249.4, "y": 16.7, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_wo_shi", "domain": "cover", "label": "卧室·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_wo_shi_pei_zhi_zhuang_tai"}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "area": "卧室", "kind": "sensor", "rank": 3, "x": 111.4, "y": 325.5, "gangs": null, "controls": [], "state_entity": "sensor.wen_kong_ban_lu_w100_wo_shi_shi_du_shi_du"}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "area": "卧室", "kind": "switch", "rank": null, "x": 363.5, "y": 146.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_qian", "domain": "switch", "label": "卧室·插座（床前）"}], "state_entity": null}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "area": "卧室", "kind": "switch", "rank": null, "x": 116.2, "y": 116.3, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_you", "domain": "switch", "label": "卧室·插座（床右）"}], "state_entity": null}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "area": "卧室", "kind": "switch", "rank": null, "x": 109.9, "y": 290.6, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_zuo", "domain": "switch", "label": "卧室·插座（床左）"}], "state_entity": null}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "area": "大阳台", "kind": "light", "rank": 12, "x": 464.4, "y": 304.7, "gangs": null, "controls": [{"entity_id": "light.da_yang_tai_deng", "domain": "light", "label": "大阳台·主灯"}], "state_entity": null}, {"id": "a4dc161a95e44eec9ad78b4d739d8e78", "name": "大阳台·窗帘", "area": "大阳台", "kind": "cover", "rank": 13, "x": 464.1, "y": 406.2, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_da_yang_tai", "domain": "cover", "label": "大阳台·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_da_yang_tai_pei_zhi_zhuang_tai"}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "area": "大阳台", "kind": "sensor", "rank": 14, "x": 512.4, "y": 368.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_ci_chu_you_ren"}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "area": "大阳台", "kind": "sensor", "rank": 15, "x": 417.5, "y": 368.8, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_dian_chi"}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "area": "大阳台", "kind": "binary_sensor", "rank": null, "x": 500.8, "y": 237.5, "gangs": null, "controls": [{"entity_id": "switch.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_auto_clean", "domain": "switch", "label": "大阳台·猫厕所 MAX2"}], "state_entity": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_frequent_use_detection"}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "area": "客厅", "kind": "light", "rank": 4, "x": 394.9, "y": 539.8, "gangs": null, "controls": [{"entity_id": "light.ke_ting_deng", "domain": "light", "label": "客厅·主灯"}], "state_entity": null}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "area": "客厅", "kind": "media", "rank": 5, "x": 538.6, "y": 461.2, "gangs": null, "controls": [{"entity_id": "media_player.qi_ju_shi_qi_ju_shi", "domain": "media_player", "label": "客厅·HomePod mini"}], "state_entity": null}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "area": "客厅", "kind": "pet", "rank": 6, "x": 249.4, "y": 504.3, "gangs": null, "controls": [{"entity_id": "switch.zhi_neng_wei_shi_qi_solo_child_lock", "domain": "switch", "label": "客厅·喂食器 SOLO"}], "state_entity": "binary_sensor.zhi_neng_wei_shi_qi_solo_feeding"}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "area": "客厅", "kind": "switch", "rank": null, "x": 250.1, "y": 541.1, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_you", "domain": "switch", "label": "客厅·插座（右）"}], "state_entity": null}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "area": "客厅", "kind": "switch", "rank": null, "x": 249.5, "y": 569.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_zuo", "domain": "switch", "label": "客厅·插座（左）"}], "state_entity": null}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "area": "客厅", "kind": "switch", "rank": null, "x": 537.6, "y": 505.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_sha_fa_bei", "domain": "switch", "label": "客厅·插座（沙发背）"}], "state_entity": null}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "area": "书房", "kind": "light", "rank": 7, "x": 440, "y": 745.5, "gangs": null, "controls": [{"entity_id": "light.shu_zhuo_deng", "domain": "light", "label": "书房·书桌灯"}], "state_entity": null}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "area": "书房", "kind": "light", "rank": 8, "x": 513, "y": 689.6, "gangs": null, "controls": [{"entity_id": "light.liu_guang_yi_cai_luo_di_deng_t1", "domain": "light", "label": "书房·落地灯 T1"}], "state_entity": null}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "area": "书房", "kind": "scene", "rank": 9, "x": 513, "y": 747.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.mo_fang_kong_zhi_qi_shu_fang_fan_zhuan_90_dian_chi"}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "area": "书房", "kind": "gateway", "rank": 10, "x": 514.1, "y": 807, "gangs": null, "controls": [], "state_entity": null}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "area": "书房", "kind": "switch", "rank": null, "x": 537, "y": 777.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_shu_fang", "domain": "switch", "label": "书房·插座"}], "state_entity": null}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "area": "玄关", "kind": "sensor", "rank": 18, "x": 310, "y": 828.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_ci_chu_you_ren"}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "area": "玄关", "kind": "sensor", "rank": 19, "x": 260, "y": 827.1, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_zhuang_tai_chuan_gan_qi_p100_men"}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "area": "浴室", "kind": "wall_switch", "rank": 20, "x": 169.1, "y": 545.9, "gangs": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "label": "排气扇", "domain": "light", "endpoint": 40, "key": "键1"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "label": "浴室灯", "domain": "light", "endpoint": 41, "key": "键2"}], "controls": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "domain": "light", "label": "排气扇"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "domain": "light", "label": "浴室灯"}], "state_entity": null}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 146, "y": 480.1, "gangs": null, "controls": [{"entity_id": "switch.wei_sheng_jian_p20_do_not_disturb", "domain": "switch", "label": "浴室·扫地机 P20"}], "state_entity": "binary_sensor.wei_sheng_jian_p20_charging"}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 124.1, "y": 479.6, "gangs": null, "controls": [{"entity_id": "switch.p20_dock_child_lock", "domain": "switch", "label": "浴室·扫地机基站"}], "state_entity": "binary_sensor.p20_dock_clean_water_box"}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "area": "小阳台", "kind": "light", "rank": 16, "x": 50.1, "y": 550, "gangs": null, "controls": [{"entity_id": "light.xiao_yang_tai_deng", "domain": "light", "label": "小阳台·主灯"}], "state_entity": null}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "area": "小阳台", "kind": "sensor", "rank": 17, "x": 77.1, "y": 653.4, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_dian_chi"}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "area": "厨房", "kind": "light", "rank": 11, "x": 120, "y": 759.9, "gangs": null, "controls": [{"entity_id": "light.chu_fang_deng", "domain": "light", "label": "厨房·主灯"}], "state_entity": null}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "area": "厨房", "kind": "switch", "rank": null, "x": 172.4, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_you", "domain": "switch", "label": "厨房·插座（右）"}], "state_entity": null}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "area": "厨房", "kind": "switch", "rank": null, "x": 198.9, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_zuo", "domain": "switch", "label": "厨房·插座（左）"}], "state_entity": null}], "topology": [{"target": "书房·书桌灯", "via": "玄关·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键1 → 切换书桌灯"}, {"target": "客厅·主灯", "via": "玄关·墙面开关 Z1", "gang": 2, "note": "Studio 自动化：按键2 → 切换客厅灯"}, {"target": "卧室·主灯", "via": "卧室·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键 → 切换卧室灯"}], "stats": {"rooms": 8, "devices": 32}} 处注入，由 tools/make_card.py 生成
 */
const DATA = {"version": "0.2.0", "units": "cm", "canvas": [560, 860], "colors": {"light": "#ffcd5c", "cover": "#b08aff", "switch": "#5eead4", "wall_switch": "#5eead4", "media_player": "#ff8a5c", "sensor": "#78d18c", "binary_sensor": "#78d18c", "button": "#ff78aa", "scene": "#ff78aa", "vacuum": "#c8c87a", "gateway": "#8ab4ff", "pet": "#c9a0ff"}, "rooms": [{"name": "卧室", "points": [[379.0, 70.0], [340.0, 70.0], [340.0, 0.0], [160.0, 0.0], [160.0, 70.0], [103.0, 70.0], [103.0, 410.0], [379.0, 410.0]], "bbox": [103.0, 0.0, 379.0, 410.0], "label": [241.0, 182.0], "temp": "sensor.wen_kong_ban_lu_w100_wo_shi_wen_du_wen_du"}, {"name": "大阳台", "points": [[550.0, 190.0], [379.0, 190.0], [379.0, 410.0], [550.0, 410.0]], "bbox": [379.0, 190.0, 550.0, 410.0], "label": [465.0, 276.0], "temp": null}, {"name": "客厅", "points": [[550.0, 410.0], [235.0, 410.0], [235.0, 665.0], [550.0, 665.0]], "bbox": [235.0, 410.0, 550.0, 665.0], "label": [363.0, 538.0], "temp": null}, {"name": "书房", "points": [[550.0, 665.0], [235.0, 665.0], [235.0, 740.0], [380.0, 740.0], [380.0, 850.0], [550.0, 850.0]], "bbox": [235.0, 665.0, 550.0, 850.0], "label": [465.0, 751.0], "temp": null}, {"name": "玄关", "points": [[380.0, 740.0], [235.0, 740.0], [235.0, 850.0], [380.0, 850.0]], "bbox": [235.0, 740.0, 380.0, 850.0], "label": [289.0, 794.0], "temp": "sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_wen_du"}, {"name": "浴室", "points": [[235.0, 410.0], [103.0, 410.0], [103.0, 665.0], [235.0, 665.0]], "bbox": [103.0, 410.0, 235.0, 665.0], "label": [169.0, 476.0], "temp": null}, {"name": "小阳台", "points": [[103.0, 420.0], [0.0, 420.0], [0.0, 665.0], [103.0, 665.0]], "bbox": [0.0, 420.0, 103.0, 665.0], "label": [52.0, 472.0], "temp": null}, {"name": "厨房", "points": [[235.0, 665.0], [0.0, 665.0], [0.0, 850.0], [235.0, 850.0]], "bbox": [0.0, 665.0, 235.0, 850.0], "label": [92.0, 757.0], "temp": null}], "walls": [[340.0, 0.0, 160.0, 0.0], [340.0, 0.0, 340.0, 70.0], [160.0, 0.0, 160.0, 70.0], [379.0, 70.0, 340.0, 70.0], [160.0, 70.0, 103.0, 70.0], [379.0, 70.0, 379.0, 410.0], [103.0, 70.0, 103.0, 410.0], [550.0, 190.0, 395.0, 190.0], [550.0, 190.0, 550.0, 850.0], [550.0, 850.0, 0.0, 850.0], [0.0, 420.0, 0.0, 850.0], [103.0, 420.0, 0.0, 420.0], [550.0, 410.0, 379.0, 410.0], [379.0, 410.0, 103.0, 410.0], [235.0, 410.0, 235.0, 850.0], [235.0, 665.0, 0.0, 665.0], [103.0, 410.0, 103.0, 665.0], [380.0, 740.0, 235.0, 740.0], [380.0, 740.0, 380.0, 850.0], [379.0, 190.0, 395.0, 190.0]], "devices": [{"id": "ff7fade407d57e89edb581497f044a06", "name": "卧室·主灯", "area": "卧室", "kind": "light", "rank": 1, "x": 243.1, "y": 226.6, "gangs": null, "controls": [{"entity_id": "light.wo_shi_deng", "domain": "light", "label": "卧室·主灯"}], "state_entity": null}, {"id": "4007e516fb9d485361b04dd5c498edd6", "name": "卧室·窗帘", "area": "卧室", "kind": "cover", "rank": 2, "x": 249.4, "y": 16.7, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_wo_shi", "domain": "cover", "label": "卧室·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_wo_shi_pei_zhi_zhuang_tai"}, {"id": "ad3ec979798114adae08d0d0c7577cbd", "name": "卧室·温湿度 W100", "area": "卧室", "kind": "sensor", "rank": 3, "x": 111.4, "y": 325.5, "gangs": null, "controls": [], "state_entity": "sensor.wen_kong_ban_lu_w100_wo_shi_shi_du_shi_du"}, {"id": "8b9820181959ca31db32535753b2fe70", "name": "卧室·插座（床前）", "area": "卧室", "kind": "switch", "rank": null, "x": 363.5, "y": 146.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_qian", "domain": "switch", "label": "卧室·插座（床前）"}], "state_entity": null}, {"id": "edd0ea37114bc19c4d355cb10fe377a1", "name": "卧室·插座（床右）", "area": "卧室", "kind": "switch", "rank": null, "x": 116.2, "y": 116.3, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_you", "domain": "switch", "label": "卧室·插座（床右）"}], "state_entity": null}, {"id": "f1ad918b7483a2d56fb21f02bdc7b735", "name": "卧室·插座（床左）", "area": "卧室", "kind": "switch", "rank": null, "x": 109.9, "y": 290.6, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chuang_zuo", "domain": "switch", "label": "卧室·插座（床左）"}], "state_entity": null}, {"id": "97fe1bcbd4d4d92c8cbd1bb64f6a3711", "name": "大阳台·主灯", "area": "大阳台", "kind": "light", "rank": 12, "x": 464.4, "y": 304.7, "gangs": null, "controls": [{"entity_id": "light.da_yang_tai_deng", "domain": "light", "label": "大阳台·主灯"}], "state_entity": null}, {"id": "a4dc161a95e44eec9ad78b4d739d8e78", "name": "大阳台·窗帘", "area": "大阳台", "kind": "cover", "rank": 13, "x": 464.1, "y": 406.2, "gangs": null, "controls": [{"entity_id": "cover.chuang_lian_ban_lu_da_yang_tai", "domain": "cover", "label": "大阳台·窗帘"}], "state_entity": "binary_sensor.chuang_lian_ban_lu_da_yang_tai_pei_zhi_zhuang_tai"}, {"id": "423c971c749041aa8c48fbee7999b842", "name": "大阳台·人体传感器", "area": "大阳台", "kind": "sensor", "rank": 14, "x": 512.4, "y": 368.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ren_ti_chuan_gan_qi_e1_da_yang_tai_ren_ci_chu_you_ren"}, {"id": "adc5a8df8794715f16132d2a31fb379b", "name": "大阳台·门窗传感器", "area": "大阳台", "kind": "sensor", "rank": 15, "x": 417.5, "y": 368.8, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_da_yang_tai_dian_chi"}, {"id": "9f39c0684b08c541f5fa29a7891265c9", "name": "大阳台·猫厕所 MAX2", "area": "大阳台", "kind": "binary_sensor", "rank": null, "x": 500.8, "y": 237.5, "gangs": null, "controls": [{"entity_id": "switch.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_auto_clean", "domain": "switch", "label": "大阳台·猫厕所 MAX2"}], "state_entity": "binary_sensor.xiao_pei_zhi_neng_quan_zi_dong_mao_ce_suo_max2_frequent_use_detection"}, {"id": "66fc6938448c0ad8e4b9ccfec87d2788", "name": "客厅·主灯", "area": "客厅", "kind": "light", "rank": 4, "x": 394.9, "y": 539.8, "gangs": null, "controls": [{"entity_id": "light.ke_ting_deng", "domain": "light", "label": "客厅·主灯"}], "state_entity": null}, {"id": "fb0320b98acb38c57b81cccf3af3d47b", "name": "客厅·HomePod mini", "area": "客厅", "kind": "media", "rank": 5, "x": 538.6, "y": 461.2, "gangs": null, "controls": [{"entity_id": "media_player.qi_ju_shi_qi_ju_shi", "domain": "media_player", "label": "客厅·HomePod mini"}], "state_entity": null}, {"id": "fd9f10aef94a2d3b9246e93a2a8dcb8d", "name": "客厅·喂食器 SOLO", "area": "客厅", "kind": "pet", "rank": 6, "x": 249.4, "y": 504.3, "gangs": null, "controls": [{"entity_id": "switch.zhi_neng_wei_shi_qi_solo_child_lock", "domain": "switch", "label": "客厅·喂食器 SOLO"}], "state_entity": "binary_sensor.zhi_neng_wei_shi_qi_solo_feeding"}, {"id": "698d691fe171e97a443e58b50a0565d3", "name": "客厅·插座（右）", "area": "客厅", "kind": "switch", "rank": null, "x": 250.1, "y": 541.1, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_you", "domain": "switch", "label": "客厅·插座（右）"}], "state_entity": null}, {"id": "375d8da12c25634cdd1a2da25b93b2c4", "name": "客厅·插座（左）", "area": "客厅", "kind": "switch", "rank": null, "x": 249.5, "y": 569.8, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_ke_ting_zuo", "domain": "switch", "label": "客厅·插座（左）"}], "state_entity": null}, {"id": "5894c96471507bfde2782d4cfe9163ce", "name": "客厅·插座（沙发背）", "area": "客厅", "kind": "switch", "rank": null, "x": 537.6, "y": 505.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_sha_fa_bei", "domain": "switch", "label": "客厅·插座（沙发背）"}], "state_entity": null}, {"id": "09b680427b812cb650adf19848ddbccf", "name": "书房·书桌灯", "area": "书房", "kind": "light", "rank": 7, "x": 440, "y": 745.5, "gangs": null, "controls": [{"entity_id": "light.shu_zhuo_deng", "domain": "light", "label": "书房·书桌灯"}], "state_entity": null}, {"id": "596fce71fe6f7f0f9b0fad4fefdbabf3", "name": "书房·落地灯 T1", "area": "书房", "kind": "light", "rank": 8, "x": 513, "y": 689.6, "gangs": null, "controls": [{"entity_id": "light.liu_guang_yi_cai_luo_di_deng_t1", "domain": "light", "label": "书房·落地灯 T1"}], "state_entity": null}, {"id": "9e5dd2e7d059b604cbbe60fe1286ba17", "name": "书房·魔方控制器", "area": "书房", "kind": "scene", "rank": 9, "x": 513, "y": 747.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.mo_fang_kong_zhi_qi_shu_fang_fan_zhuan_90_dian_chi"}, {"id": "e0a3d7647646e8eca04f516f077460a2", "name": "中枢·M300 网关", "area": "书房", "kind": "gateway", "rank": 10, "x": 514.1, "y": 807, "gangs": null, "controls": [], "state_entity": null}, {"id": "9c9cd3b78a8b1319202fb7d39b835e6a", "name": "书房·插座", "area": "书房", "kind": "switch", "rank": null, "x": 537, "y": 777.4, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_shu_fang", "domain": "switch", "label": "书房·插座"}], "state_entity": null}, {"id": "4924080c0ddd6bda52b7ce427fea47b2", "name": "玄关·人在传感器 FP310", "area": "玄关", "kind": "sensor", "rank": 18, "x": 310, "y": 828.2, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_ren_zai_chuan_gan_qi_fp310_ci_chu_you_ren"}, {"id": "22eb566921aef0f3f1e0709cb69f64d7", "name": "玄关·门窗传感器 P100", "area": "玄关", "kind": "sensor", "rank": 19, "x": 260, "y": 827.1, "gangs": null, "controls": [], "state_entity": "binary_sensor.ai_duo_wei_zhuang_tai_chuan_gan_qi_p100_men"}, {"id": "049336a35d4579631fd76b18d86fa881", "name": "浴室·墙面开关 Z1", "area": "浴室", "kind": "wall_switch", "rank": 20, "x": 169.1, "y": 545.9, "gangs": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "label": "排气扇", "domain": "light", "endpoint": 40, "key": "键1"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "label": "浴室灯", "domain": "light", "endpoint": 41, "key": "键2"}], "controls": [{"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu", "domain": "light", "label": "排气扇"}, {"entity_id": "light.qia_nong_zhi_neng_qiang_bi_kai_guan_z1_yu_2", "domain": "light", "label": "浴室灯"}], "state_entity": null}, {"id": "0b8ff5852ef9dc1f9ec9d4d336e09c6d", "name": "浴室·扫地机 P20", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 146, "y": 480.1, "gangs": null, "controls": [{"entity_id": "switch.wei_sheng_jian_p20_do_not_disturb", "domain": "switch", "label": "浴室·扫地机 P20"}], "state_entity": "binary_sensor.wei_sheng_jian_p20_charging"}, {"id": "61d8bd52d0a88008ec04bfc7c9377e6d", "name": "浴室·扫地机基站", "area": "浴室", "kind": "binary_sensor", "rank": null, "x": 124.1, "y": 479.6, "gangs": null, "controls": [{"entity_id": "switch.p20_dock_child_lock", "domain": "switch", "label": "浴室·扫地机基站"}], "state_entity": "binary_sensor.p20_dock_clean_water_box"}, {"id": "d9bf92e660552daafed3219236016c29", "name": "小阳台·主灯", "area": "小阳台", "kind": "light", "rank": 16, "x": 50.1, "y": 550, "gangs": null, "controls": [{"entity_id": "light.xiao_yang_tai_deng", "domain": "light", "label": "小阳台·主灯"}], "state_entity": null}, {"id": "0b534cf739f7e91789d82a5951505014", "name": "小阳台·门窗传感器", "area": "小阳台", "kind": "sensor", "rank": 17, "x": 77.1, "y": 653.4, "gangs": null, "controls": [], "state_entity": "binary_sensor.men_chuang_chuan_gan_qi_e1_xiao_yang_tai_dian_chi"}, {"id": "9fdf8c4a39d44aa3d58626fb37444950", "name": "厨房·主灯", "area": "厨房", "kind": "light", "rank": 11, "x": 120, "y": 759.9, "gangs": null, "controls": [{"entity_id": "light.chu_fang_deng", "domain": "light", "label": "厨房·主灯"}], "state_entity": null}, {"id": "11718e1c7dd841f8f670ead0d41cada9", "name": "厨房·插座（右）", "area": "厨房", "kind": "switch", "rank": null, "x": 172.4, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_you", "domain": "switch", "label": "厨房·插座（右）"}], "state_entity": null}, {"id": "49a3b69908da27b42c121a2d36e57cf6", "name": "厨房·插座（左）", "area": "厨房", "kind": "switch", "rank": null, "x": 198.9, "y": 825.2, "gangs": null, "controls": [{"entity_id": "switch.qiang_bi_cha_zuo_chu_fang_zuo", "domain": "switch", "label": "厨房·插座（左）"}], "state_entity": null}], "topology": [{"target": "书房·书桌灯", "via": "玄关·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键1 → 切换书桌灯"}, {"target": "客厅·主灯", "via": "玄关·墙面开关 Z1", "gang": 2, "note": "Studio 自动化：按键2 → 切换客厅灯"}, {"target": "卧室·主灯", "via": "卧室·墙面开关 Z1", "gang": 1, "note": "Studio 自动化：按键 → 切换卧室灯"}], "stats": {"rooms": 8, "devices": 32}};

const NS = "http://www.w3.org/2000/svg";

const BASE_R = 11;        // 图钉基准半径（user units）
const BASE_R_MULTI = 15;  // 多键基准半径
const TARGET_PIN_R = 9;   // 目标屏幕半径（px）≈ 18px 直径
const BADGE_H = 36;       // 徽标基准高度（user units，两行）
const TARGET_BADGE_H = 48; // 徽标目标屏幕高度（px），宽屏下不低于 44px

const CSS = `
:host{display:block}
ha-card{overflow:hidden;background:#0b1119;border:1px solid #1b2530;border-radius:16px}
.wrap{position:relative;padding:10px;overflow:hidden}
/* 宽度自适应、高度封顶：宽屏左右留白，手机占满，不产生滚动条 */
svg{width:100%;height:auto;display:block;touch-action:manipulation;
    max-height:min(76vh,900px);
    font-family:-apple-system,"Segoe UI","Microsoft YaHei",sans-serif}
.room{fill:#101720;stroke:#1b2530;stroke-width:.7;transition:opacity .3s;cursor:pointer}
.room:hover{fill:#131c26}
.wall{stroke:#33475c;stroke-width:9;stroke-linecap:square;pointer-events:none}
.rname{fill:#7e93a8;font-size:11px;font-weight:700;pointer-events:none}

.pin{cursor:pointer}
.pin .ring{fill:none;stroke:#2a3a4a;stroke-width:1.5;vector-effect:non-scaling-stroke}
.pin .body{stroke:#0a0f15;stroke-width:1.4;vector-effect:non-scaling-stroke}
.pin .halo{fill:none;stroke:none;opacity:0;transition:opacity .2s}
.pin .slash{stroke:#8aa0b4;stroke-width:2;vector-effect:non-scaling-stroke;display:none}
.pin text{font-size:12px;font-weight:700;fill:#0a0f15;text-anchor:middle;
          dominant-baseline:central;pointer-events:none}

/* 状态：亮 = 高饱和 + 外发光；灭 = 低饱和；传感器 = 中性；不可用 = 灰环 + 斜线 */
.pin.on .halo{opacity:.30}
.pin.on .ring{stroke:#33506a}
.pin.off .body{opacity:.30}
.pin.off text{opacity:.55}
.pin.sensor .body{opacity:.85}
.pin.sensor .ring{stroke:#24384a}
.pin.unavail .body{fill:#2f3a45;opacity:.55}
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

  /* ------------------------------------------------------------------ 构建 */
  _render(){
    if (!this._hass || this._built) return;
    this._built = true;

    const root = this.shadowRoot;
    root.innerHTML = `<style>${CSS}</style>
      <ha-card><div class="wrap" id="wrap">
        <div class="back" id="back"><span class="arw">‹</span><span>返回</span></div>
        <div class="hud" id="hud"></div>
        <div class="bubble" id="bubble"></div>
        <svg id="svg" viewBox="0 0 ${DATA.canvas[0]} ${DATA.canvas[1]}"
             preserveAspectRatio="xMidYMid meet"></svg>
      </div></ha-card>`;

    this._svg = root.getElementById("svg");
    this._hud = root.getElementById("hud");
    this._bubble = root.getElementById("bubble");
    this._wrap = root.getElementById("wrap");

    // 房间层
    for (const r of DATA.rooms){
      const p = document.createElementNS(NS, "polygon");
      p.setAttribute("points", r.points.map(q => q.join(",")).join(" "));
      p.setAttribute("class", "room");
      p.addEventListener("click", () => this.openRoom(r.name));
      this._svg.appendChild(p);
      this._rooms.push({name:r.name, el:p, def:r});
    }

    // 墙
    for (const w of DATA.walls){
      const l = document.createElementNS(NS, "line");
      l.setAttribute("x1", w[0]); l.setAttribute("y1", w[1]);
      l.setAttribute("x2", w[2]); l.setAttribute("y2", w[3]);
      l.setAttribute("class", "wall");
      this._svg.appendChild(l);
    }

    // 房间名不再单独画：整屋视图由徽标承担，单房间视图由 HUD 承担，
    // 否则会和徽标重复、并在单房间视图里压住左上角返回按钮。
    this._buildBadges();
    this._buildPins();

    const backEl = root.getElementById("back");
    if (backEl) backEl.addEventListener("click", () => this._backToPlan());
    const wrapEl = root.getElementById("wrap");
    if (wrapEl) wrapEl.addEventListener("click", () => this._closeMenu());

    this._applyView();
    this._sync();
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

      g.appendChild(rect);
      g.appendChild(name);
      g.appendChild(stats);
      g.addEventListener("click", ev => { ev.stopPropagation(); this.openRoom(r.name); });
      this._svg.appendChild(g);
      this._badges.set(r.name, {el:g, rect, name, stats, def:r, w:88, key:""});
    }
  }

  _buildPins(){
    for (const d of DATA.devices){
      const multi = Array.isArray(d.gangs) && d.gangs.length >= 2;
      const r = multi ? BASE_R_MULTI : BASE_R;
      const color = DATA.colors[d.kind] || "#8aa0b4";

      const g = document.createElementNS(NS, "g");
      g.setAttribute("class", "pin");
      g.setAttribute("transform", `translate(${d.x},${d.y})`);

      const halo = document.createElementNS(NS, "circle");
      halo.setAttribute("r", r + 6); halo.setAttribute("class", "halo");
      halo.setAttribute("fill", color);
      g.appendChild(halo);

      const ring = document.createElementNS(NS, "circle");
      ring.setAttribute("r", r + 4); ring.setAttribute("class", "ring");
      g.appendChild(ring);

      if (multi){
        const left = document.createElementNS(NS, "path");
        left.setAttribute("d", `M0,${-r} A${r},${r} 0 0 0 0,${r} Z`);
        left.setAttribute("fill", color); left.setAttribute("class", "body");
        const right = document.createElementNS(NS, "path");
        right.setAttribute("d", `M0,${-r} A${r},${r} 0 0 1 0,${r} Z`);
        right.setAttribute("fill", color); right.setAttribute("class", "body");
        const div = document.createElementNS(NS, "line");
        div.setAttribute("x1", 0); div.setAttribute("y1", -r);
        div.setAttribute("x2", 0); div.setAttribute("y2", r);
        div.setAttribute("stroke", "#0a0f15");
        div.setAttribute("stroke-width", "1.6");
        g.appendChild(left); g.appendChild(right); g.appendChild(div);
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

      const t = document.createElementNS(NS, "text");
      t.textContent = d.rank;
      g.appendChild(t);

      g.addEventListener("click", ev => {
        ev.stopPropagation();
        if (this._suppressClick){ this._suppressClick = false; return; }
        this._onPin(d);
      });
      g.addEventListener("pointerdown", ev => this._startPress(d, ev));

      this._svg.appendChild(g);
      this._pins.set(d.id, {el:g, def:d, color});
    }
  }

  /* ------------------------------------------------------------------ 视图 */
  openRoom(name){
    const r = DATA.rooms.find(x => x.name === name);
    if (!r) return;
    this._view = {type:"room", name};
    this._closeMenu();
    this._applyView();

    const [x0, y0, x1, y1] = r.bbox;
    const w = (x1 - x0) * 1.16;
    const h = (y1 - y0) * 1.16;

    // 只对这一间的图钉做淡入
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
    this.shadowRoot.getElementById("back").style.display = inRoom ? "flex" : "none";

    for (const [, b] of this._badges){
      b.el.style.display = inRoom ? "none" : "";
    }
    for (const [, p] of this._pins){
      const show = inRoom ? p.def.area === this._view.name : false;
      p.el.style.display = show ? "" : "none";
      if (!show) p.el.style.opacity = "0";
    }
    for (const r of this._rooms){
      r.el.style.opacity = (!inRoom || r.name === this._view.name) ? "1" : "0.32";
    }
    this._hudText();
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

    // 兜底：某些环境（无头/虚拟时钟）rAF 时间戳不前进，动画会卡在第 0 帧
    this._endTimer = setTimeout(finish, D + 80);

    let frames = 0;
    const step = () => {
      if (token !== this._animToken) return;
      frames++;
      const elapsed = performance.now() - t0;
      // 时间戳冻结（elapsed 恒为 0）时退回按帧数推进，保证一定能收敛
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
    const cw = svg.clientWidth || 520;
    const ch = svg.clientHeight || 800;
    const upp = Math.max(vb.width / cw, vb.height / ch);   // user units per screen px
    const k = Math.max(0.2, Math.min(4, (TARGET_PIN_R * upp) / BASE_R));
    const kk = k.toFixed(4);
    for (const [, p] of this._pins){
      if (p.el.style.display === "none") continue;
      p.el.setAttribute("transform", `translate(${p.def.x},${p.def.y}) scale(${kk})`);
    }
    // 徽标：按屏幕像素放大（宽屏可读），但不得超过所属房间宽度
    const kb = (TARGET_BADGE_H * upp) / BADGE_H;
    for (const [, b] of this._badges){
      if (b.el.style.display === "none") continue;
      const cwB = b.w || 88;
      const [x0, , x1] = b.def.bbox;
      const roomW = x1 - x0;
      let k = kb;
      if (roomW > 0) k = Math.min(k, (roomW * 0.96) / cwB);
      k = Math.max(0.35, Math.min(3, k));

      const half = (cwB * k) / 2;
      let lx = b.def.label[0];
      if (roomW > cwB * k + 6){
        lx = Math.max(x0 + half + 3, Math.min(x1 - half - 3, lx));
      }
      b.el.setAttribute("transform",
        `translate(${lx},${b.def.label[1]}) scale(${k.toFixed(3)})`);
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
    this._fitPins();
  }

  _syncBadges(){
    for (const [name, b] of this._badges){
      let on = 0;
      for (const d of DATA.devices){
        if (d.area !== name) continue;
        for (const c of this._controlsOf(d)){
          if (c.domain === "light" && this._stateOf(c.entity_id) === "on") on++;
        }
      }
      let stats = `${on} 盏亮`;
      if (b.def.temp){
        const s = this._stateOf(b.def.temp);
        if (s && s !== "unavailable" && s !== "unknown"){
          const v = parseFloat(s);
          if (!isNaN(v)) stats += ` · ${v.toFixed(1)}°C`;
        }
      }

      const key = name + "|" + stats;
      if (b.key === key) continue;   // 文本没变就不重新测量，避免每帧抖动
      b.key = key;
      b.name.textContent = name;
      b.stats.textContent = stats;

      let w1 = 60, w2 = 60;
      try {
        w1 = b.name.getBBox().width;
        w2 = b.stats.getBBox().width;
      } catch (e) { /* 未渲染时忽略 */ }
      const cw = Math.max(64, Math.max(w1, w2) + 20);
      b.w = cw;
      b.rect.setAttribute("x", String(-cw / 2));
      b.rect.setAttribute("width", String(cw));
    }
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
        window.removeEventListener("pointerup", cancel);
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

    this._pins.get(d.id).el.classList.add("dimmed");
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
