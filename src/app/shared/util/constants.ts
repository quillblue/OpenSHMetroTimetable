import { Station } from '../models/station';
import { LineStationList } from '../models/line-station-list';

export class Constants {
    public static get STATION(): LineStationList[] {
        return [
            {
                lineId: 1,
                stationList: [
                    { stationName: '莘庄', stationId: 111 },
                    { stationName: '外环路', stationId: 112 },
                    { stationName: '莲花路', stationId: 113 },
                    { stationName: '锦江乐园', stationId: 114 },
                    { stationName: '上海南站', stationId: 115 },
                    { stationName: '漕宝路', stationId: 116 },
                    { stationName: '上海体育馆', stationId: 117 },
                    { stationName: '徐家汇', stationId: 118 },
                    { stationName: '衡山路', stationId: 119 },
                    { stationName: '常熟路', stationId: 120 },
                    { stationName: '陕西南路', stationId: 121 },
                    { stationName: '黄陂南路', stationId: 122 },
                    { stationName: '人民广场', stationId: 123 },
                    { stationName: '新闸路', stationId: 124 },
                    { stationName: '汉中路', stationId: 125 },
                    { stationName: '上海火车站', stationId: 126 },
                    { stationName: '中山北路', stationId: 127 },
                    { stationName: '延长路', stationId: 128 },
                    { stationName: '上海马戏城', stationId: 129 },
                    { stationName: '汶水路', stationId: 130 },
                    { stationName: '彭浦新村', stationId: 131 },
                    { stationName: '共康路', stationId: 132 },
                    { stationName: '通河新村', stationId: 133 },
                    { stationName: '呼兰路', stationId: 134 },
                    { stationName: '共富新村', stationId: 135 },
                    { stationName: '宝安公路', stationId: 136 },
                    { stationName: '友谊西路', stationId: 137 },
                    { stationName: '富锦路', stationId: 138 }
                ]
            },
            {
                lineId: 2,
                stationList: [
                    { stationName: '徐泾东', stationId: 234 },
                    { stationName: '虹桥火车站', stationId: 235 },
                    { stationName: '虹桥2号航站楼', stationId: 236 },
                    { stationName: '淞虹路', stationId: 237 },
                    { stationName: '北新泾', stationId: 238 },
                    { stationName: '威宁路', stationId: 239 },
                    { stationName: '娄山关路', stationId: 240 },
                    { stationName: '中山公园', stationId: 241 },
                    { stationName: '江苏路', stationId: 242 },
                    { stationName: '静安寺', stationId: 243 },
                    { stationName: '南京西路', stationId: 244 },
                    { stationName: '人民广场', stationId: 245 },
                    { stationName: '南京东路', stationId: 246 },
                    { stationName: '陆家嘴', stationId: 247 },
                    { stationName: '东昌路', stationId: 248 },
                    { stationName: '世纪大道', stationId: 249 },
                    { stationName: '上海科技馆', stationId: 250 },
                    { stationName: '世纪公园', stationId: 251 },
                    { stationName: '龙阳路', stationId: 252 },
                    { stationName: '张江高科', stationId: 253 },
                    { stationName: '金科路', stationId: 254 },
                    { stationName: '广兰路', stationId: 255 },
                    { stationName: '唐镇', stationId: 256 },
                    { stationName: '创新中路', stationId: 257 },
                    { stationName: '华夏东路', stationId: 258 },
                    { stationName: '川沙', stationId: 259 },
                    { stationName: '凌空路', stationId: 260 },
                    { stationName: '远东大道', stationId: 261 },
                    { stationName: '海天三路', stationId: 262 },
                    { stationName: '浦东国际机场', stationId: 263 }
                ]
            },
            {
                lineId: 3,
                stationList: [
                    { stationName: '上海南站', stationId: 311 },
                    { stationName: '石龙路', stationId: 312 },
                    { stationName: '龙漕路', stationId: 313 },
                    { stationName: '漕溪路', stationId: 314 },
                    { stationName: '宜山路', stationId: 315 },
                    { stationName: '虹桥路', stationId: 316 },
                    { stationName: '延安西路', stationId: 317 },
                    { stationName: '中山公园', stationId: 318 },
                    { stationName: '金沙江路', stationId: 319 },
                    { stationName: '曹杨路', stationId: 320 },
                    { stationName: '镇坪路', stationId: 321 },
                    { stationName: '中潭路', stationId: 322 },
                    { stationName: '上海火车站', stationId: 323 },
                    { stationName: '宝山路', stationId: 324 },
                    { stationName: '东宝兴路', stationId: 325 },
                    { stationName: '虹口足球场', stationId: 326 },
                    { stationName: '赤峰路', stationId: 327 },
                    { stationName: '大柏树', stationId: 328 },
                    { stationName: '江湾镇', stationId: 329 },
                    { stationName: '殷高西路', stationId: 330 },
                    { stationName: '长江南路', stationId: 331 },
                    { stationName: '淞发路', stationId: 332 },
                    { stationName: '张华浜', stationId: 333 },
                    { stationName: '淞滨路', stationId: 334 },
                    { stationName: '水产路', stationId: 335 },
                    { stationName: '宝杨路', stationId: 336 },
                    { stationName: '友谊路', stationId: 337 },
                    { stationName: '铁力路', stationId: 338 },
                    { stationName: '江扬北路', stationId: 339 }
                ]
            },
            {
                lineId: 4,
                stationList: [
                    { stationName: '上海体育馆', stationId: 401 },
                    { stationName: '宜山路', stationId: 402 },
                    { stationName: '虹桥路', stationId: 403 },
                    { stationName: '延安西路', stationId: 404 },
                    { stationName: '中山公园', stationId: 405 },
                    { stationName: '金沙江路', stationId: 406 },
                    { stationName: '曹杨路', stationId: 407 },
                    { stationName: '镇坪路', stationId: 408 },
                    { stationName: '中潭路', stationId: 409 },
                    { stationName: '上海火车站', stationId: 410 },
                    { stationName: '宝山路', stationId: 411 },
                    { stationName: '海伦路', stationId: 412 },
                    { stationName: '临平路', stationId: 413 },
                    { stationName: '大连路', stationId: 414 },
                    { stationName: '杨树浦路', stationId: 415 },
                    { stationName: '浦东大道', stationId: 416 },
                    { stationName: '世纪大道', stationId: 417 },
                    { stationName: '浦电路', stationId: 418 },
                    { stationName: '蓝村路', stationId: 419 },
                    { stationName: '塘桥', stationId: 420 },
                    { stationName: '南浦大桥', stationId: 421 },
                    { stationName: '西藏南路', stationId: 422 },
                    { stationName: '鲁班路', stationId: 423 },
                    { stationName: '大木桥路', stationId: 424 },
                    { stationName: '东安路', stationId: 425 },
                    { stationName: '上海体育场', stationId: 426 }
                ]
            },
            {
                lineId: 5,
                stationList: [
                    { stationName: '莘庄', stationId: 501 },
                    { stationName: '春申路', stationId: 502 },
                    { stationName: '银都路', stationId: 503 },
                    { stationName: '颛桥', stationId: 505 },
                    { stationName: '北桥', stationId: 507 },
                    { stationName: '剑川路', stationId: 508 },
                    { stationName: '东川路', stationId: 509 },
                    { stationName: '金平路', stationId: 510 },
                    { stationName: '华宁路', stationId: 511 },
                    { stationName: '文井路', stationId: 512 },
                    { stationName: '闵行开发区', stationId: 513 },
                    { stationName: '江川路', stationId: 521 },
                    { stationName: '西渡', stationId: 522 },
                    { stationName: '萧塘', stationId: 523 },
                    { stationName: '奉浦大道', stationId: 524 },
                    { stationName: '环城东路', stationId: 525 },
                    { stationName: '望园路', stationId: 526 },
                    { stationName: '金海湖', stationId: 527 },
                    { stationName: '奉贤新城', stationId: 528 }
                ]
            }, {
                lineId: 6,
                stationList: [
                    { stationName: '港城路', stationId: 648 },
                    { stationName: '外高桥保税区北', stationId: 647 },
                    { stationName: '航津路', stationId: 646 },
                    { stationName: '外高桥保税区南', stationId: 645 },
                    { stationName: '洲海路', stationId: 644 },
                    { stationName: '五洲大道', stationId: 643 },
                    { stationName: '东靖路', stationId: 642 },
                    { stationName: '巨峰路', stationId: 641 },
                    { stationName: '五莲路', stationId: 640 },
                    { stationName: '博兴路', stationId: 639 },
                    { stationName: '金桥路', stationId: 638 },
                    { stationName: '云山路', stationId: 637 },
                    { stationName: '德平路', stationId: 636 },
                    { stationName: '北洋泾路', stationId: 635 },
                    { stationName: '民生路', stationId: 634 },
                    { stationName: '源深体育中心', stationId: 633 },
                    { stationName: '世纪大道', stationId: 632 },
                    { stationName: '浦电路', stationId: 631 },
                    { stationName: '蓝村路', stationId: 630 },
                    { stationName: '上海儿童医学中心', stationId: 629 },
                    { stationName: '临沂新村', stationId: 628 },
                    { stationName: '高科西路', stationId: 627 },
                    { stationName: '东明路', stationId: 626 },
                    { stationName: '高青路', stationId: 625 },
                    { stationName: '华夏西路', stationId: 624 },
                    { stationName: '上南路', stationId: 623 },
                    { stationName: '灵岩南路', stationId: 622 },
                    { stationName: '东方体育中心', stationId: 621 }
                ]
            },
            {
                lineId: 7,
                stationList: [
                    { stationName: '美兰湖', stationId: 721 },
                    { stationName: '罗南新村', stationId: 722 },
                    { stationName: '潘广路', stationId: 723 },
                    { stationName: '刘行', stationId: 724 },
                    { stationName: '顾村公园', stationId: 725 },
                    { stationName: '祁华路', stationId: 726 },
                    { stationName: '上海大学', stationId: 727 },
                    { stationName: '南陈路', stationId: 728 },
                    { stationName: '上大路', stationId: 729 },
                    { stationName: '场中路', stationId: 730 },
                    { stationName: '大场镇', stationId: 731 },
                    { stationName: '行知路', stationId: 732 },
                    { stationName: '大华三路', stationId: 733 },
                    { stationName: '新村路', stationId: 734 },
                    { stationName: '岚皋路', stationId: 735 },
                    { stationName: '镇坪路', stationId: 736 },
                    { stationName: '长寿路', stationId: 737 },
                    { stationName: '昌平路', stationId: 738 },
                    { stationName: '静安寺', stationId: 739 },
                    { stationName: '常熟路', stationId: 740 },
                    { stationName: '肇嘉浜路', stationId: 741 },
                    { stationName: '东安路', stationId: 742 },
                    { stationName: '龙华中路', stationId: 743 },
                    { stationName: '后滩', stationId: 744 },
                    { stationName: '长清路', stationId: 745 },
                    { stationName: '耀华路', stationId: 746 },
                    { stationName: '云台路', stationId: 747 },
                    { stationName: '高科西路', stationId: 748 },
                    { stationName: '杨高南路', stationId: 749 },
                    { stationName: '锦绣路', stationId: 750 },
                    { stationName: '芳华路', stationId: 751 },
                    { stationName: '龙阳路', stationId: 752 },
                    { stationName: '花木路', stationId: 753 }
                ]
            }, {
                lineId: 8,
                stationList: [
                    { stationName: '市光路', stationId: 849 },
                    { stationName: '嫩江路', stationId: 848 },
                    { stationName: '翔殷路', stationId: 847 },
                    { stationName: '黄兴公园', stationId: 846 },
                    { stationName: '延吉中路', stationId: 845 },
                    { stationName: '黄兴路', stationId: 844 },
                    { stationName: '江浦路', stationId: 843 },
                    { stationName: '鞍山新村', stationId: 842 },
                    { stationName: '四平路', stationId: 841 },
                    { stationName: '曲阳路', stationId: 840 },
                    { stationName: '虹口足球场', stationId: 839 },
                    { stationName: '西藏北路', stationId: 838 },
                    { stationName: '中兴路', stationId: 837 },
                    { stationName: '曲阜路', stationId: 836 },
                    { stationName: '人民广场', stationId: 835 },
                    { stationName: '大世界', stationId: 834 },
                    { stationName: '老西门', stationId: 833 },
                    { stationName: '陆家浜路', stationId: 832 },
                    { stationName: '西藏南路', stationId: 831 },
                    { stationName: '中华艺术宫', stationId: 830 },
                    { stationName: '耀华路', stationId: 829 },
                    { stationName: '成山路', stationId: 828 },
                    { stationName: '杨思', stationId: 827 },
                    { stationName: '东方体育中心', stationId: 826 },
                    { stationName: '凌兆新村', stationId: 825 },
                    { stationName: '芦恒路', stationId: 824 },
                    { stationName: '浦江镇', stationId: 823 },
                    { stationName: '江月路', stationId: 822 },
                    { stationName: '联航路', stationId: 821 },
                    { stationName: '沈杜公路', stationId: 820 }
                ]
            }, {
                lineId: 9,
                stationList: [
                    { stationName: '松江南站', stationId: 918 },
                    { stationName: '醉白池', stationId: 919 },
                    { stationName: '松江体育中心', stationId: 920 },
                    { stationName: '松江新城', stationId: 921 },
                    { stationName: '松江大学城', stationId: 922 },
                    { stationName: '洞泾', stationId: 923 },
                    { stationName: '佘山', stationId: 924 },
                    { stationName: '泗泾', stationId: 925 },
                    { stationName: '九亭', stationId: 926 },
                    { stationName: '中春路', stationId: 927 },
                    { stationName: '七宝', stationId: 928 },
                    { stationName: '星中路', stationId: 929 },
                    { stationName: '合川路', stationId: 930 },
                    { stationName: '漕河泾开发区', stationId: 931 },
                    { stationName: '桂林路', stationId: 932 },
                    { stationName: '宜山路', stationId: 933 },
                    { stationName: '徐家汇', stationId: 934 },
                    { stationName: '肇嘉浜路', stationId: 935 },
                    { stationName: '嘉善路', stationId: 936 },
                    { stationName: '打浦桥', stationId: 937 },
                    { stationName: '马当路', stationId: 938 },
                    { stationName: '陆家浜', stationId: 939 },
                    { stationName: '小南门', stationId: 940 },
                    { stationName: '商城路', stationId: 941 },
                    { stationName: '世纪大道', stationId: 942 },
                    { stationName: '杨高中路', stationId: 943 },
                    { stationName: '芳甸路', stationId: 944 },
                    { stationName: '蓝天路', stationId: 945 },
                    { stationName: '台儿庄路', stationId: 946 },
                    { stationName: '金桥', stationId: 947 },
                    { stationName: '金吉路', stationId: 948 },
                    { stationName: '金海路', stationId: 949 },
                    { stationName: '顾唐路', stationId: 950 },
                    { stationName: '民雷路', stationId: 951 },
                    { stationName: '曹路', stationId: 952 }
                ]
            }, {
                lineId: 10,
                stationList: [
                    { stationName: '航中路', stationId: 1018 },
                    { stationName: '紫藤路', stationId: 1019 },
                    { stationName: '龙柏新村', stationId: 1020 },
                    { stationName: '虹桥火车站', stationId: 1041 },
                    { stationName: '虹桥2号航站楼', stationId: 1042 },
                    { stationName: '虹桥1号航站楼', stationId: 1043 },
                    { stationName: '上海动物园', stationId: 1044 },
                    { stationName: '龙溪路', stationId: 1045 },
                    { stationName: '水城路', stationId: 1046 },
                    { stationName: '伊犁路', stationId: 1047 },
                    { stationName: '宋园路', stationId: 1048 },
                    { stationName: '虹桥路', stationId: 1049 },
                    { stationName: '交通大学', stationId: 1050 },
                    { stationName: '上海图书馆', stationId: 1051 },
                    { stationName: '陕西南路', stationId: 1052 },
                    { stationName: '新天地', stationId: 1053 },
                    { stationName: '老西门', stationId: 1054 },
                    { stationName: '豫园', stationId: 1055 },
                    { stationName: '南京东路', stationId: 1056 },
                    { stationName: '天潼路', stationId: 1057 },
                    { stationName: '四川北路', stationId: 1058 },
                    { stationName: '海伦路', stationId: 1059 },
                    { stationName: '邮电新村', stationId: 1060 },
                    { stationName: '四平路', stationId: 1061 },
                    { stationName: '同济大学', stationId: 1062 },
                    { stationName: '国权路', stationId: 1063 },
                    { stationName: '五角场', stationId: 1064 },
                    { stationName: '江湾体育场', stationId: 1065 },
                    { stationName: '三门路', stationId: 1066 },
                    { stationName: '殷高东路', stationId: 1067 },
                    { stationName: '新江湾城', stationId: 1068 }
                ]
            }, {
                lineId: 11,
                stationList: [
                    { stationName: '花桥', stationId: 1114 },
                    { stationName: '光明路', stationId: 1115 },
                    { stationName: '兆丰路', stationId: 1116 },
                    { stationName: '安亭', stationId: 1117 },
                    { stationName: '上海汽车城', stationId: 1118 },
                    { stationName: '昌吉东路', stationId: 1119 },
                    { stationName: '上海赛车场', stationId: 1120 },
                    { stationName: '嘉定北站', stationId: 1131 },
                    { stationName: '嘉定西站', stationId: 1132 },
                    { stationName: '白银路', stationId: 1133 },
                    { stationName: '嘉定新城', stationId: 1134 },
                    { stationName: '马陆', stationId: 1135 },
                    // {stationName:'陈翔路', stationId:1136},
                    { stationName: '南翔', stationId: 1137 },
                    { stationName: '桃浦新村', stationId: 1138 },
                    { stationName: '武威路', stationId: 1139 },
                    { stationName: '祁连山路', stationId: 1140 },
                    { stationName: '李子园', stationId: 1141 },
                    { stationName: '上海西站', stationId: 1142 },
                    { stationName: '真如', stationId: 1143 },
                    { stationName: '枫桥路', stationId: 1144 },
                    { stationName: '曹杨路', stationId: 1145 },
                    { stationName: '隆德路', stationId: 1146 },
                    { stationName: '江苏路', stationId: 1147 },
                    { stationName: '交通大学', stationId: 1148 },
                    { stationName: '徐家汇', stationId: 1149 },
                    { stationName: '上海游泳馆', stationId: 1150 },
                    { stationName: '龙华', stationId: 1151 },
                    { stationName: '云锦路', stationId: 1152 },
                    { stationName: '龙耀路', stationId: 1153 },
                    { stationName: '东方体育中心', stationId: 1154 },
                    { stationName: '三林', stationId: 1155 },
                    { stationName: '三林东', stationId: 1156 },
                    { stationName: '浦三路', stationId: 1157 },
                    // {stationName:'严御路', stationId:1158},
                    { stationName: '御桥', stationId: 1159 },
                    { stationName: '罗山路', stationId: 1160 },
                    { stationName: '秀沿路', stationId: 1161 },
                    { stationName: '康新公路', stationId: 1162 },
                    { stationName: '迪士尼', stationId: 1163 }
                ]
            }, {
                lineId: 12,
                stationList: [
                    { stationName: '七莘路', stationId: 1220 },
                    { stationName: '虹莘路', stationId: 1221 },
                    { stationName: '顾戴路', stationId: 1222 },
                    { stationName: '东兰路', stationId: 1223 },
                    { stationName: '虹梅路', stationId: 1224 },
                    { stationName: '虹漕路', stationId: 1225 },
                    { stationName: '桂林公园', stationId: 1226 },
                    { stationName: '漕宝路', stationId: 1227 },
                    { stationName: '龙漕路', stationId: 1228 },
                    { stationName: '龙华', stationId: 1229 },
                    { stationName: '龙华中路', stationId: 1230 },
                    { stationName: '大木桥路', stationId: 1231 },
                    { stationName: '嘉善路', stationId: 1232 },
                    { stationName: '陕西南路', stationId: 1233 },
                    { stationName: '南京西路', stationId: 1234 },
                    { stationName: '汉中路', stationId: 1235 },
                    { stationName: '曲阜路', stationId: 1236 },
                    { stationName: '天潼路', stationId: 1237 },
                    { stationName: '国际客运中心', stationId: 1238 },
                    { stationName: '提篮桥', stationId: 1239 },
                    { stationName: '大连路', stationId: 1240 },
                    { stationName: '江浦公园', stationId: 1241 },
                    { stationName: '宁国路', stationId: 1242 },
                    { stationName: '隆昌路', stationId: 1243 },
                    { stationName: '爱国路', stationId: 1244 },
                    { stationName: '复兴岛', stationId: 1245 },
                    { stationName: '东陆路', stationId: 1246 },
                    { stationName: '巨峰路', stationId: 1247 },
                    { stationName: '杨高北路', stationId: 1248 },
                    { stationName: '金京路', stationId: 1249 },
                    { stationName: '申江路', stationId: 1250 },
                    { stationName: '金海路', stationId: 1251 }
                ]
            }, {
                lineId: 13,
                stationList: [
                    { stationName: '金运路', stationId: 1321 },
                    { stationName: '金沙江西路', stationId: 1322 },
                    { stationName: '丰庄', stationId: 1323 },
                    { stationName: '祁连山南路', stationId: 1324 },
                    { stationName: '真北路', stationId: 1325 },
                    { stationName: '大渡河路', stationId: 1326 },
                    { stationName: '金沙江路', stationId: 1327 },
                    { stationName: '隆德路', stationId: 1328 },
                    { stationName: '武宁路', stationId: 1329 },
                    { stationName: '长寿路', stationId: 1330 },
                    { stationName: '江宁路', stationId: 1331 },
                    { stationName: '汉中路', stationId: 1332 },
                    { stationName: '自然博物馆', stationId: 1333 },
                    { stationName: '南京西路', stationId: 1334 },
                    { stationName: '淮海中路', stationId: 1335 },
                    { stationName: '新天地', stationId: 1336 },
                    { stationName: '马当路', stationId: 1337 },
                    { stationName: '世博会博物馆', stationId: 1338 },
                    { stationName: '世博大道', stationId: 1339 },
                    { stationName: '长清路', stationId: 1340 },
                    { stationName: '成山路', stationId: 1341 },
                    { stationName: '东明路', stationId: 1342 },
                    { stationName: '华鹏路', stationId: 1343 },
                    { stationName: '下南路', stationId: 1344 },
                    { stationName: '北蔡', stationId: 1345 },
                    { stationName: '陈村路', stationId: 1346 },
                    { stationName: '莲溪路', stationId: 1347 },
                    { stationName: '华夏中路', stationId: 1348 },
                    { stationName: '中科路', stationId: 1349 },
                    { stationName: '学林路', stationId: 1350 },
                    { stationName: '张江路', stationId: 1351 }
                ]
            }, {
                lineId: 16,
                stationList: [
                    { stationName: '龙阳路', stationId: 1621 },
                    { stationName: '华夏中路', stationId: 1622 },
                    { stationName: '罗山路', stationId: 1623 },
                    { stationName: '周浦东', stationId: 1624 },
                    { stationName: '鹤沙航城', stationId: 1625 },
                    { stationName: '航头东', stationId: 1626 },
                    { stationName: '新场', stationId: 1627 },
                    { stationName: '野生动物园', stationId: 1628 },
                    { stationName: '惠南', stationId: 1629 },
                    { stationName: '惠南东', stationId: 1630 },
                    { stationName: '书院', stationId: 1631 },
                    { stationName: '临港大道', stationId: 1632 },
                    { stationName: '滴水湖', stationId: 1633 }
                ]
            }, {
                lineId: 17,
                stationList: [
                    { stationName: '东方绿舟', stationId: 1733 },
                    { stationName: '朱家角', stationId: 1732 },
                    { stationName: '淀山湖大道', stationId: 1731 },
                    { stationName: '漕盈路', stationId: 1730 },
                    { stationName: '青浦新城', stationId: 1729 },
                    { stationName: '汇金路', stationId: 1728 },
                    { stationName: '赵巷', stationId: 1727 },
                    { stationName: '嘉松中路', stationId: 1726 },
                    { stationName: '徐泾北城', stationId: 1725 },
                    { stationName: '徐盈路', stationId: 1724 },
                    { stationName: '蟠龙路', stationId: 1723 },
                    { stationName: '诸光路', stationId: 1722 },
                    { stationName: '虹桥火车站', stationId: 1721 }
                ]
            }, {
                lineId: 81,
                stationList: []
            }
        ];
    }
    public static get LINE(): any[] {
        return [
            {
                lineId: 1,
                lineName: '1号线',
                direction: [
                    {
                        directionId: 0,
                        description: '莘庄方向'
                    },
                    {
                        directionId: 1,
                        description: '富锦路方向'
                    }
                ]
            },
            {
                lineId: 2,
                lineName: '2号线',
                direction: [{
                    directionId: 0,
                    description: '徐泾东方向'
                },
                {
                    directionId: 1,
                    description: '浦东国际机场方向'
                }]
            },
            {
                lineId: 3,
                lineName: '3号线',
                direction: [{
                    directionId: 0,
                    description: '上海南站方向'
                },
                {
                    directionId: 1,
                    description: '江杨北路/长江南路方向'
                }]
            },
            {
                lineId: 4,
                lineName: '4号线',
                direction: [{
                    directionId: 0,
                    description: '外圈方向'
                },
                {
                    directionId: 1,
                    description: '内圈方向'
                }]
            },
            {
                lineId: 5,
                lineName: '5号线',
                direction: [
                    {
                        directionId: 0,
                        description: '莘庄方向'
                    },
                    {
                        directionId: 1,
                        description: '奉贤新城/闵行开发区方向'
                    }
                ]
            }, {
                lineId: 6,
                lineName: '6号线',
                direction: [{
                    directionId: 0,
                    description: '港城路方向'
                },
                {
                    directionId: 1,
                    description: '东方体育中心方向'
                }]
            },
            {
                lineId: 7,
                lineName: '7号线',
                direction: [{
                    directionId: 0,
                    description: '美兰湖方向'
                },
                {
                    directionId: 1,
                    description: '花木路方向'
                }]
            }, {
                lineId: 8,
                lineName: '8号线',
                direction: [
                    {
                        directionId: 0,
                        description: '市光路方向'
                    },
                    {
                        directionId: 1,
                        description: '沈杜公路方向'
                    }
                ]
            }, {
                lineId: 9,
                lineName: '9号线',
                direction: [{
                    directionId: 0,
                    description: '松江南站方向'
                },
                {
                    directionId: 1,
                    description: '曹路方向'
                }]
            }, {
                lineId: 10,
                lineName: '10号线',
                direction: [{
                    directionId: 0,
                    description: '虹桥火车站/航中路方向'
                },
                {
                    directionId: 1,
                    description: '新江湾城方向'
                }]
            }, {
                lineId: 11,
                lineName: '11号线',
                direction: [{
                    directionId: 0,
                    description: '嘉定北/花桥方向'
                },
                {
                    directionId: 1,
                    description: '迪士尼方向'
                }]
            }, {
                lineId: 12,
                lineName: '12号线',
                direction: [{
                    directionId: 0,
                    description: '七莘路方向'
                },
                {
                    directionId: 1,
                    description: '金海路方向'
                }]
            }, {
                lineId: 13,
                lineName: '13号线',
                direction: [{
                    directionId: 0,
                    description: '金运路方向'
                },
                {
                    directionId: 1,
                    description: '张江路方向'
                }]
            }, {
                lineId: 16,
                lineName: '16号线',
                direction: [
                    {
                        directionId: 0,
                        description: '龙阳路方向'
                    },
                    {
                        directionId: 1,
                        description: '滴水湖方向'
                    }
                ]
            }, {
                lineId: 17,
                lineName: '17号线',
                direction: [
                    {
                        directionId: 0,
                        description: '东方绿舟方向'
                    },
                    {
                        directionId: 1,
                        description: '虹桥火车站方向'
                    }
                ]
            }, {
                lineId: 81,
                lineName: '浦江线（暂无数据）',
                direction: []
            }
        ];
    }
}
