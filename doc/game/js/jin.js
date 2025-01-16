createCharts(document.getElementById('jinChart'),
[
    {
        name: '晋本传',
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
        name: '五丈原追击战',
        explain: '司马懿 司马昭 司马师 张春华',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '襄平之战',
        explain: '司马懿 司马昭 司马师 王元姬',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '兴势山之战',
        explain: '司马师 司马昭 贾充 张春华',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '正始之变',
        explain: '孙策 孙权 周瑜 周泰\n击破槽训、曹义、何晏、曹爽，开放夏侯霸千里行',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '东关之役',
        explain: '司马昭 诸葛诞 王元姬 夏侯霸IF\n所有人建在，开放合肥新城之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '夏侯霸千里行',
        explain: '司马昭 王元姬 郭淮\n在夏侯霸会面前击破姜维，影响许昌之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '铁笼山之战',
        explain: '司马昭 邓艾 钟会 贾充\n成功救出郭淮，影响许昌之战\n成功救出，郭淮登录二将之乱',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '合肥新城之战',
        explain: '司马师 诸葛诞 郭淮\n1. 成功守备大门，影响许昌之战，诸葛诞登录许昌之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '毌丘俭文钦之乱',
        explain: '司马师 邓艾 贾充 郭淮IF\n文钦孤立击破文鸯，影响许昌之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        },
        symbolSize: 80
    },{
        name: '许昌之战',
        explain: '司马昭 王元姬 贾充 郭淮IF',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        },
        symbolSize: 80
    },{
        name: '诸葛诞之乱',
        explain: '司马昭 王元姬 钟会 贾充',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '皇帝发难',
        explain: '司马昭 王元姬 钟会',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '洮阳之战',
        explain: '司马昭 贾充 钟会',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '剑阁之战',
        explain: '邓艾 王元姬 文鸯',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '成都之战',
        explain: '司马昭 王元姬 贾充',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '成都攻略战',
        explain: '司马师 郭淮 邓艾夏侯霸\n击破所有敌将后击破刘禅开放逆贼讨伐战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '建业之战',
        explain: '司马昭 王元姬 诸葛诞 贾充',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '逆贼讨伐战',
        explain: '司马懿 张春华\n胜利后，成都防卫战出现钟会援军',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '成都防卫战',
        explain: '司马师 夏侯霸 文鸯',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '赤壁决战',
        explain: '司马师 夏侯霸 文鸯',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },
    // 五星密武
    {
        name: '司马懿',
        explain: '击破趙直，張嶷，社督在内蜀军300人\n按流程走即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '郭淮',
        explain: '4分钟内完成2次阻挡\n走右边，解决小将开门，再解决一个夺取弩炮，射击落石，阻挡\n跳过石柱区，解决马岱开门后，打倒树木，完成2次阻挡即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '诸葛诞',
        explain: '开局5分钟内，把諸葛恪诱出本阵\n按流程即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '司马师',
        explain: '文鸯奇袭后，1分钟赶路本阵\n按流程即可',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '钟会',
        explain: '本阵被侵入前击破所有来袭魏军\n先击破本阵附近的敌将\n再去右边击破司马懿\n最后左边打夏侯敦等',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '邓艾',
        explain: '开局8分钟内计策成功，击破姜维\n按流程即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '司马昭',
        explain: '刘禅撤退后，7分内击破敌本阵附近的关索和姜维\n先走右边，先解决伏兵关银屏，再解决月英\n成都城开门后击破二将即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '夏侯霸',
        explain: '姜维撤退前，进成都城，诱发关索和关银屏偷袭本阵，\n快速解决姜维出城，在2人到本阵前击破',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '张春华',
        explain: '开局5分钟内，击破钟辿和钟繇',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '王元姬',
        explain: '去右边建业南城被包围，解决伏兵后\n在建业南城开门后8分钟内到达敌总大将孙休的身边即可',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '文鸯',
        explain: '不进入中央孟获据点，解决外围所有敌将，然后解决出来的孟获\n按流程即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '贾充',
        explain: '在魏军武将因为连合军的弩砲败阵前将其夺取\n按流程即可',
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
        source: '晋本传',
        target: '五丈原追击战',
        name: 'start'
    },{
        source: '五丈原追击战',
        target: '襄平之战',
        name: 'next'
    },{
        source: '襄平之战',
        target: '兴势山之战',
        name: 'next'
    },{
        source: '兴势山之战',
        target: '正始之变',
        name: 'next',
    },{
        source: '正始之变',
        target: '东关之役',
        name: 'next',
    },{
        source: '正始之变',
        target: '夏侯霸千里行',
        name: 'if',
    },{
        source: '夏侯霸千里行',
        target: '东关之役',
        name: 'next',
    },{
        source: '东关之役',
        target: '铁笼山之战',
        name: 'next',
    },{
        source: '东关之役',
        target: '合肥新城之战',
        name: 'if',
    },{
        source: '合肥新城之战',
        target: '铁笼山之战',
        name: 'next'
    },{
        source: '铁笼山之战',
        target: '毌丘俭文钦之乱',
        name: 'next'
    },{
        source: '毌丘俭文钦之乱',
        target: '许昌之战',
        name: 'next'
    },{
        source: '许昌之战',
        target: '诸葛诞之乱',
        name: ''
    },{
        source: '诸葛诞之乱',
        target: '皇帝发难',
        name: 'next'
    },{
        source: '皇帝发难',
        target: '洮阳之战',
        name: 'next',
    },{
        source: '洮阳之战',
        target: '剑阁之战',
        name: 'next'
    },{
        source: '剑阁之战',
        target: '成都之战',
        name: 'next'
    },{
        source: '成都之战',
        target: '史实',
        name: 'end'
    },{
        source: '许昌之战',
        target: '成都攻略战',
        name: '文鸯'
    },{
        source: '成都攻略战',
        target: '建业之战',
        name: 'next'
    },{
        source: '成都攻略战',
        target: '逆贼讨伐战',
        name: 'if'
    },{
        source: '逆贼讨伐战',
        target: '建业之战',
        name: 'next'
    },{
        source: '建业之战',
        target: '成都防卫战',
        name: 'next'
    },{
        source: '成都防卫战',
        target: '赤壁决战',
        name: 'next'
    },{
        source: '赤壁决战',
        target: 'IF',
        name: 'end'
    },
    {
        source: '五丈原追击战',
        target: '司马懿',
        name: '五星'
    },{
        source: '夏侯霸千里行',
        target: '郭淮',
        name: '五星'
    },{
        source: '合肥新城之战',
        target: '诸葛诞',
        name: '五星'
    },{
        source: '毌丘俭文钦之乱',
        target: '司马师',
        name: '五星'
    },{
        source: '洮阳之战',
        target: '钟会',
        name: '五星'
    },{
        source: '剑阁之战',
        target: '邓艾',
        name: '五星'
    },{
        source: '成都之战',
        target: '司马昭',
        name: '五星'
    },{
        source: '成都攻略战',
        target: '夏侯霸',
        name: '五星'
    },{
        source: '逆贼讨伐战',
        target: '张春华',
        name: '五星'
    },{
        source: '建业之战',
        target: '王元姬',
        name: '五星'
    },{
        source: '成都防卫战',
        target: '文鸯',
        name: '五星'
    },{
        source: '赤壁决战',
        target: '贾充',
        name: '五星'
    }
    ]);
createCharts(document.getElementById('jin2Chart'),
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
