createCharts(document.getElementById('wuChart'),
    [
        {
            name: '吴本传',
            explain: '',
            itemStyle: {
                normal: {
                    color: '#f0ad4e'
                }
            }
        },{
        name: '史实',
        explain: '',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        }
    },{
        name: 'IF',
        explain: '',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        }
    },{
        name: '襄阳之战',
        explain: '孙策 孙权 孙尚香 韩当\nif:击杀吕公，影响合肥之战、开发凉州之战、孙坚登录吴郡',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '凉州之战',
        explain: '孙坚 孙策 孙权 孙尚香 ',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '吴郡平定战',
        explain: '孙策 周瑜 黄盖 孙坚IF',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '小霸王惨祸',
        explain: '孙策 孙权 周瑜 周泰\n击破夏侯惇、于吉，开放于吉讨伐战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '赤壁之战',
        explain: '鲁肃 韩当 黄盖 孙尚香',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '于吉讨伐战',
        explain: '孙权 周瑜 大乔 太史慈\n打破祭坛，影响合肥之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '南郡之战',
        explain: '鲁肃 周瑜 吕蒙\n1. 诱敌成功，影响合肥之战\n2. 诱敌成功，周瑜登录荆州之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '荆州之战',
        explain: '鲁肃 吕蒙 韩当 周瑜IF\n1. 将鲁肃引入荆州城内',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '合肥之战',
        explain: '孙权 甘宁 凌统 鲁肃IF',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        },
        symbolSize: 80
    },{
        name: '濡须口之战',
        explain: '吕蒙 甘宁 凌统',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '樊城之战',
        explain: '吕蒙 陆逊 练师\n不让吕蒙受伤：从北门进入，登录夷陵之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '夷陵之战',
        explain: '陆逊 凌统 韩当 吕蒙IF\n援救甘宁，击破沙魔柯，开发广陵之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '石亭之战',
        explain: '陆逊 周泰 丁奉 凌统',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '广陵之战',
        explain: '丁奉 凌统 周泰 甘宁',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '合肥新城之战',
        explain: '孙权 陆逊 周泰 练师',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '寿春追击战',
        explain: '周瑜 孙策 太史慈 孙坚\n不让丁奉孤立并击破张辽，丁奉登录江夏防卫战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '江夏防卫战',
        explain: '黄盖 陆逊 练师 韩当\n守住防线开放新野突破战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '汝南之战',
        explain: '陆逊 鲁肃 吕蒙 小乔IF',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '新野突破战',
        explain: '孙尚香 大乔 小乔 练师\n迅速突破，小乔登录汝南之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '许昌攻略战',
        explain: '孙坚 孙策 孙权 孙尚香',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },
    // 五星密武
    {
        name: '孙尚香',
        explain: '强袭任务开始后，2分钟内击破吕公\n按流程走，强袭任务开始后，走最右边小路进入城内击破逃跑的吕公即可',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '孙权',
        explain: '友军无败退情况下，击破马岱、马超、韩遂\n先回头往右走，打倒旅团长，保住一个友军\n去另一边，救出程普，之后按流程击破三将即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '孙策',
        explain: '开局5分钟内，击破太史慈2次\n只击破守门小将到达太史慈处并击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '大乔',
        explain: '开局8分钟内击破于吉两次\n按流程即可',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '黄盖',
        explain: '本阵被侵入前击破所有来袭魏军\n先击破本阵附近的敌将\n再去右边击破司马懿\n最后左边打夏侯敦等',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '周瑜',
        explain: '开局5分钟内救出甘宁\n只打守门的，冲到甘宁处击破附近小将即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '甘宁',
        explain: 'IF路线：识破李典伏兵并击破\n先击破张辽，到合肥城前解决各敌将后\n李典乐进出现袭击我方冲车，冲车破坏前击破二将即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '凌统',
        explain: '开局5分钟内压制据点\n避开敌人，去吊桥处，击破张辽\n按吕蒙要求压制所有据点即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '吕蒙',
        explain: '开局8分钟内，击破关羽\n先击破关银屏开门，然后击破靡芳、谱士人，\n击破关羽即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '陆逊',
        explain: '火计成功并击破刘备\n清理森林之间的敌将小兵，压制右中的据点引诱蜀将来袭\n保护韩当顺利放火，刘备会出现在地图正中间击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '周泰',
        explain: '周舫引诱曹休中计后，2分半内解决曹休、司马师、司马昭\n按流程即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '丁奉',
        explain: '开局9分钟内奇袭成功，并击破司马懿\n按流程完成奇袭后，迅速打倒3个守不同门的将\n依次击破徐晃、庞德、张辽，然后击破司马懿即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '练师',
        explain: '按左线任务前进到新城内后，满宠开门袭击本阵\n立即原路返回去打倒满宠，要在他到本阵前击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '太史慈',
        explain: '先往上走，敌军断桥后，贾诩偷袭本阵\n立即回去拦截，贾诩到本阵前击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '韩当',
        explain: '开局14分钟内，进入白帝城\n先击破关羽张飞，出现敌伏击我方据点\n按左，右，中依次救援，分别击破王异，徐晃，夏侯惇\n守住3个据点即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '鲁肃',
        explain: '开局8分钟内，完成回合并击破王元姬和张春华\n按流程，并清理路上的敌将和团长即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '小乔',
        explain: '开场击破门番，快速击破伏兵张辽和张郃\n在孙权到达第一关前，去救出熊猫即可',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '孙坚',
        explain: '开局8分钟内，使火计成功\n走右边完成任务，最上方要去打开水闸放水\n然后下去走小路进去，击破李典乐进，火计成功即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    }
    ],
    [
    {
        source: '吴本传',
        target: '襄阳之战',
        name: 'start'
    },{
        source: '襄阳之战',
        target: '吴郡平定战',
        name: 'next'
    },{
        source: '襄阳之战',
        target: '凉州之战',
        name: 'if'
    },{
        source: '凉州之战',
        target: '吴郡平定战',
        name: 'next',
    },{
        source: '吴郡平定战',
        target: '小霸王惨祸',
        name: 'next',
    },{
        source: '小霸王惨祸',
        target: '赤壁之战',
        name: 'next',
    },{
        source: '小霸王惨祸',
        target: '于吉讨伐战',
        name: 'if',
    },{
        source: '于吉讨伐战',
        target: '赤壁之战',
        name: 'next',
    },{
        source: '赤壁之战',
        target: '南郡之战',
        name: 'next',
    },{
        source: '南郡之战',
        target: '荆州之战',
        name: 'next'
    },{
        source: '荆州之战',
        target: '合肥之战',
        name: 'next'
    },{
        source: '合肥之战',
        target: '濡须口之战',
        name: ''
    },{
        source: '濡须口之战',
        target: '樊城之战',
        name: 'next'
    },{
        source: '樊城之战',
        target: '夷陵之战',
        name: 'next'
    },{
        source: '夷陵之战',
        target: '石亭之战',
        name: 'next',
    },{
        source: '夷陵之战',
        target: '广陵之战',
        name: 'if'
    },{
        source: '广陵之战',
        target: '石亭之战',
        name: 'next'
    },{
        source: '石亭之战',
        target: '合肥新城之战',
        name: 'next'
    },{
        source: '合肥新城之战',
        target: '史实',
        name: 'end'
    },{
        source: '合肥之战',
        target: '寿春追击战',
        name: '周瑜'
    },{
        source: '寿春追击战',
        target: '江夏防卫战',
        name: 'next'
    },{
        source: '江夏防卫战',
        target: '汝南之战',
        name: 'next'
    },{
        source: '江夏防卫战',
        target: '新野突破战',
        name: 'if'
    },{
        source: '新野突破战',
        target: '汝南之战',
        name: 'next'
    },{
        source: '汝南之战',
        target: '许昌攻略战',
        name: 'next'
    },{
        source: '许昌攻略战',
        target: 'IF',
        name: 'end'
    },
    {
        source: '襄阳之战',
        target: '孙尚香',
        name: '五星'
    },{
        source: '凉州之战',
        target: '孙权',
        name: '五星'
    },{
        source: '吴郡平定战',
        target: '孙策',
        name: '五星'
    },{
        source: '于吉讨伐战',
        target: '大乔',
        name: '五星'
    },{
        source: '赤壁之战',
        target: '黄盖',
        name: '五星'
    },{
        source: '南郡之战',
        target: '周瑜',
        name: '五星'
    },{
        source: '合肥之战',
        target: '甘宁',
        name: '五星'
    },{
        source: '濡须口之战',
        target: '凌统',
        name: '五星'
    },{
        source: '樊城之战',
        target: '吕蒙',
        name: '五星'
    },{
        source: '夷陵之战',
        target: '陆逊',
        name: '五星'
    },{
        source: '石亭之战',
        target: '周泰',
        name: '五星'
    },{
        source: '广陵之战',
        target: '丁奉',
        name: '五星'
    },{
        source: '合肥新城之战',
        target: '练师',
        name: '五星'
    },{
        source: '寿春追击战',
        target: '太史慈',
        name: '五星'
    },{
        source: '江夏防卫战',
        target: '韩当',
        name: '五星'
    },{
        source: '汝南之战',
        target: '鲁肃',
        name: '五星'
    },{
        source: '新野突破战',
        target: '小乔',
        name: '五星'
    },{
        source: '许昌攻略战',
        target: '孙坚',
        name: '五星'
    }
    ]);
createCharts(document.getElementById('wu2Chart'),
    [
        {
            name: '官渡决战',
            explain: '曹丕 李典 张辽',
            itemStyle: {
                normal: {
                    color: '#f0ad4e'
                }
            }
        },{
        name: '长安防卫战',
        explain: '贾诩 徐晃 王异',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        },
        symbolSize: 72
    },{
        name: '定军山救援战',
        explain: '郭嘉 曹操 典韦',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        },
        symbolSize: 86
    },{
        name: '樊城防卫战',
        explain: '曹仁 庞德 于禁\n保护魏将免受水计开发荆州平定战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        },
        symbolSize: 72
    },{
        name: '荆州平定战',
        explain: '曹操 于禁 夏侯惇',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        },
        symbolSize: 72
    },{
        name: '新野防卫战',
        explain: '于禁 庞德',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        },
        symbolSize: 72
    },{
        name: '梓潼之战',
        explain: '夏侯渊 张郃 王异',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '丽人探索战',
        explain: '夏侯渊 乐进 李典 于禁',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        },
        symbolSize: 72
    },
        // 六星密武
        {
            name: '曹丕',
            explain: '开局9分钟内，击破甄姬\n先南寨附近的敌将，然后走左边到乌巢，\n压制乌巢后甄姬就会出击，击破即可',
            itemStyle: {
                normal: {
                    color: '#5cb85c'
                }
            },
            symbolSize: 60
        },{
        name: '徐晃',
        explain: '开局4分钟内，击破成宜、张横、韩遂\n成宜和张横会从下方进攻，韩遂在城内的中间',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '贾诩',
        explain: '开局7分钟内，曹军援军到达\n先快速击破下路几位武将，然后去打倒韩遂压制武器库\n再去去右下角击破张卫让妖术停止\n快速去左边将封锁援军据点的武将打倒即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '郭嘉',
        explain: '令发现弩砲部队后3分钟内击破张苞\n先把定军山本阵附近的敌人全部打败\n然后走地图的右边道路等传令出来后，到中央高台去击破张苞',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '典韦',
        explain: '摧毁全部的弩砲和虎战车且法正开始投石3分钟内击破法正\n靠近蜀军本阵的路上，法正会开始投石，击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '曹仁',
        explain: '开局11分钟内，水计成功\n先出城击破蜀将，吴军会开始攻击樊城\n将发光的吴将引入城内\n击破关羽的三个传令兵,继续引武将\n关平放弃水计，回本阵找关羽讨论\n前往水车处击破关索',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '曹操',
        explain: '开局6分钟内，击破吕蒙、陆逊\n从右路往左下杀到中央，击破关索\n下方吴军出现，并架好桥要突袭本阵\n回本阵击破二将即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '夏侯惇',
        explain: '开局9分钟内，击破关平、关索、关兴\n同曹操,之后回到中央爬上梯子击破关平\n等待左上方关兴出现后，击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '于禁',
        explain: '开局8分钟内，击破赵云、张飞\n同曹操,之后回到中央爬上梯子击破关平\n击破西北方的赵云，西南方的张飞即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '庞德',
        explain: '成功救援满宠后，击破廖化\n根据流程即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '许褚',
        explain: '开局8分钟内，击破廖化\n根据流程即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '夏侯渊',
        explain: '黄忠弓箭齐射事件后 5分钟内击破严顏和黄忠\n先击破本阵附近敌将\n然后去地图左边偷袭兵粮库，将兵粮库里的张苞击破\n之后引发黄忠齐射事件，击破二将即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '王异',
        explain: '马超出现后 4分钟内击破马超和马岱\n先击破本阵附近敌将\n然后去地图左边偷袭兵粮库，再沿著兵粮库的后门往下走，\n途中马超出现，击破二将即可',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '张郃',
        explain: '开局6分钟内，确保前线且压制兵粮库\n先击破本阵附近敌将\n然后去地图左边偷袭兵粮库，击破张苞和马良即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '蔡文姬',
        explain: '发现全部丽人\n根据流程，速度快即可',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '李典',
        explain: '发现7位以上的丽人\n根据流程',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '乐进',
        explain: '发现9位以上的丽人\n根据流程',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    }
    ],
    [
        {
            source: '官渡决战',
            target: '长安防卫战',
            name: 'next'
        },{
        source: '长安防卫战',
        target: '定军山救援战',
        name: 'next',
    },{
        source: '定军山救援战',
        target: '樊城防卫战',
        name: 'next',
    },{
        source: '樊城防卫战',
        target: '荆州平定战',
        name: 'if',
    },{
        source: '樊城防卫战',
        target: '新野防卫战',
        name: 'next'
    },{
        source: '新野防卫战',
        target: '梓潼之战',
        name: 'next'
    },{
        source: '梓潼之战',
        target: '丽人探索战',
        name: 'next',
    },
        {
            source: '官渡决战',
            target: '曹丕',
            name: '六星'
        },{
        source: '长安防卫战',
        target: '徐晃',
        name: '六星'
    },{
        source: '长安防卫战',
        target: '贾诩',
        name: '六星'
    },{
        source: '定军山救援战',
        target: '郭嘉',
        name: '六星'
    },{
        source: '定军山救援战',
        target: '典韦',
        name: '六星'
    },{
        source: '樊城防卫战',
        target: '曹仁',
        name: '六星'
    },{
        source: '荆州平定战',
        target: '曹操',
        name: '六星'
    },{
        source: '荆州平定战',
        target: '夏侯惇',
        name: '六星'
    },{
        source: '荆州平定战',
        target: '于禁',
        name: '六星'
    },{
        source: '新野防卫战',
        target: '庞德',
        name: '六星'
    },{
        source: '新野防卫战',
        target: '许褚',
        name: '五星'
    },{
        source: '梓潼之战',
        target: '夏侯渊',
        name: '六星'
    },{
        source: '梓潼之战',
        target: '王异',
        name: '六星'
    },{
        source: '梓潼之战',
        target: '张郃',
        name: '六星'
    },{
        source: '丽人探索战',
        target: '李典',
        name: '六星'
    },{
        source: '丽人探索战',
        target: '乐进',
        name: '六星'
    },{
        source: '丽人探索战',
        target: '蔡文姬',
        name: '六星'
    }
    ]);
