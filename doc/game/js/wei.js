createCharts(document.getElementById('weiChart'),
    [
        {
            name: '魏本传',
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
        name: '洛阳脱逃战',
        explain: '曹操 夏侯惇 夏侯渊\nif:击杀吕布，吕布在虎牢关的台词有所不同',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '虎牢关之战',
        explain: '夏侯惇 乐进 李典',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '兖州之战',
        explain: '典韦 乐进 李典',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '徐州之战',
        explain: '典韦 许褚 曹仁\n击破陶谦，开放濮阳之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '濮阳之战',
        explain: '夏侯惇 夏侯渊 乐进',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '献帝护卫战',
        explain: '曹操 夏侯渊 李典 徐晃',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '宛城之战',
        explain: '曹操 典韦\n1.救出曹昂、曹安民，影响赤壁之战\n2. 未救出二将，开放下邳之战\n3. 典韦存活，影响赤壁之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '下邳之战',
        explain: '夏侯惇 贾诩 郭嘉',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '官渡之战',
        explain: '曹丕 乐进 郭嘉 典韦IF',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '白狼山之战',
        explain: '曹操 张辽 贾诩\n援救郭嘉，影响赤壁之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '新野之战',
        explain: '夏侯惇 张郃 李典 郭嘉IF\n援救曹仁前击破徐庶',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '赤壁之战',
        explain: '曹操 张辽 许昌 典韦IF',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        },
        symbolSize: 80
    },{
        name: '潼关之战',
        explain: '王异 夏侯渊 许褚',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '合肥之战',
        explain: '张辽 乐进 李典',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '定军山之战',
        explain: '夏侯渊 张郃 王异\n击破黄忠援救夏侯渊，夏侯渊会在樊城之战登场',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '樊城之战',
        explain: '夏侯惇 曹丕 徐晃 夏侯渊IF\n援救庞德，庞德会出现胜利画面',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '建业压制战',
        explain: '张辽 典韦 张郃 蔡文姬\n让5名敌将投降派',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '许昌政变战',
        explain: '曹丕 甄姬 夏侯惇 夏侯渊',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '南郡追击战',
        explain: '郭嘉 庞德 王异',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '白帝城之战',
        explain: '曹操 曹丕 夏侯惇 夏侯渊',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },
    // 五星密武
    {
        name: '夏侯渊',
        explain: '开局3分钟内，陈宫出城。\n先击破3个守门，直奔陈宫处，连弩位置，吕布撤退即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '李典',
        explain: '友军无败退情况下，冲到吕布处，动画完。\n按流程走，无须连弩，投石，到虎牢关引出吕布即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '乐进',
        explain: '开局5分钟内，击破许褚，吊桥放下来，从左边过河即可。\n按流程走即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '曹仁',
        explain: '投石车夺取，击破赵云，张飞。\n1. 开场解决一个小将，无视第二个小将，往糜芳处赶路\n2. 击破糜芳后使用投石破坏三个龙头\n3. 识破森林伏兵，有两处\n4. 进城击杀敌将，陶谦放火并逃跑，出城击破赵云、张飞',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '徐晃',
        explain: '开局5分钟内击破伏兵郭汜\n击破带任务提示的小将，回到马车出击破伏兵郭汜，并到达提示处即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '典韦',
        explain: '开局8分钟内出城即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '贾诩',
        explain: '友军无败退击破陈宫\n先击破宋宪，保住夏侯敦，按提示走，击破张辽打开水门，即可进城击破陈宫即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '曹丕',
        explain: '友军无败退乌巢起火。\n按照流程使士气高即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '郭嘉',
        explain: '开局8分钟内，击破徐庶。\n按流程即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '许褚',
        explain: '史实路线：开局7分钟内，击破偷袭的甘宁。\n先击破太史慈，回到曹操所在的小船，船移动后甘宁偷袭，击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '王异',
        explain: '马超突袭本阵动画后8分钟内突破到敌本阵。\n先保护曹操到右中，是否劝降韩遂无关，\n马超消失后，回本阵，路上先把两个连弩解决了\n回本阵出动画后，解决马超等敌人。然后保护冲车攻击城门\n两次后破门即可',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '张辽',
        explain: '开局12分钟内击破吕蒙、周泰。\n按提示击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '夏侯惇',
        explain: '阻止于禁叛变\n击破于禁附件敌将，阻止于禁叛变即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '甄姬',
        explain: '遇到左慈后，8分钟内击破魏蜀吴他各路名将，到达左慈大殿\n根据流程即可',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '庞德',
        explain: '开局8分钟内，顺序击破赵云，张飞，关羽\n根据流程即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '曹操',
        explain: '开局14分钟内，进入白帝城\n根据流程即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '蔡文姬',
        explain: '陆逊和吕蒙奇袭到达本阵前击破\n先压制左路的两个据点，后面可以拖延住陆逊和吕蒙,击破即可',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    }
    ],
    [
        {
            source: '魏本传',
            target: '洛阳脱逃战',
            name: 'start'
        },{
        source: '洛阳脱逃战',
        target: '虎牢关之战',
        name: 'next'
    },{
        source: '虎牢关之战',
        target: '兖州之战',
        name: 'next'
    },{
        source: '兖州之战',
        target: '徐州之战',
        name: 'next',
    },{
        source: '徐州之战',
        target: '献帝护卫战',
        name: 'next',
    },{
        source: '徐州之战',
        target: '濮阳之战',
        name: 'if',
    },{
        source: '濮阳之战',
        target: '献帝护卫战',
        name: 'next',
    },{
        source: '献帝护卫战',
        target: '宛城之战',
        name: 'next',
    },{
        source: '宛城之战',
        target: '官渡之战',
        name: 'next'
    },{
        source: '宛城之战',
        target: '下邳之战',
        name: 'if'
    },{
        source: '下邳之战',
        target: '官渡之战',
        name: 'next'
    },{
        source: '官渡之战',
        target: '白狼山之战',
        name: 'next'
    },{
        source: '白狼山之战',
        target: '新野之战',
        name: 'next'
    },{
        source: '新野之战',
        target: '赤壁之战',
        name: 'next',
    },{
        source: '赤壁之战',
        target: '潼关之战',
        name: 'next'
    },{
        source: '潼关之战',
        target: '合肥之战',
        name: 'next'
    },{
        source: '合肥之战',
        target: '定军山之战',
        name: 'next'
    },{
        source: '定军山之战',
        target: '樊城之战',
        name: 'next'
    },{
        source: '樊城之战',
        target: '史实',
        name: 'end'
    },{
        source: '赤壁之战',
        target: '建业压制战',
        name: 'if'
    },{
        source: '建业压制战',
        target: '许昌政变战',
        name: 'next'
    },{
        source: '许昌政变战',
        target: '南郡追击战',
        name: 'next'
    },{
        source: '南郡追击战',
        target: '白帝城之战',
        name: 'next'
    },{
        source: '白帝城之战',
        target: 'IF',
        name: 'end'
    },
        {
            source: '洛阳脱逃战',
            target: '夏侯渊',
            name: '五星'
        },{
        source: '虎牢关之战',
        target: '李典',
        name: '五星'
    },{
        source: '兖州之战',
        target: '乐进',
        name: '五星'
    },{
        source: '徐州之战',
        target: '曹仁',
        name: '五星'
    },{
        source: '献帝护卫战',
        target: '徐晃',
        name: '五星'
    },{
        source: '宛城之战',
        target: '典韦',
        name: '五星'
    },{
        source: '下邳之战',
        target: '贾诩',
        name: '五星'
    },{
        source: '官渡之战',
        target: '曹丕',
        name: '五星'
    },{
        source: '新野之战',
        target: '郭嘉',
        name: '五星'
    },{
        source: '赤壁之战',
        target: '许褚',
        name: '五星'
    },{
        source: '潼关之战',
        target: '王异',
        name: '五星'
    },{
        source: '合肥之战',
        target: '张辽',
        name: '五星'
    },{
        source: '樊城之战',
        target: '夏侯惇',
        name: '五星'
    },{
        source: '许昌政变战',
        target: '甄姬',
        name: '五星'
    },{
        source: '南郡追击战',
        target: '庞德',
        name: '五星'
    },{
        source: '白帝城之战',
        target: '曹操',
        name: '五星'
    },{
        source: '建业压制战',
        target: '蔡文姬',
        name: '五星'
    }
    ]);
createCharts(document.getElementById('wei2Chart'),
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
