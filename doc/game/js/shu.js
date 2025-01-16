createCharts(document.getElementById('shuChart'),
[
    {
        name: '蜀本传',
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
        name: '黄巾起义',
        explain: '刘备 关羽 张飞\n救助村民，影响樊城之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '虎牢关之战',
        explain: '赵云 关羽 张飞',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '徐州防御战',
        explain: '刘备 关羽 张飞\n1. 击破逃跑中的敌将，影响樊城之战\n2. 让敌将逃跑，开放官渡扰乱战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '官渡扰乱战',
        explain: '刘备 张飞 赵云',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '新野之战',
        explain: '徐庶 刘备 关羽',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '长版之战',
        explain: '诸葛亮 赵云 张飞',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '赤壁之战',
        explain: '赵云 诸葛亮 刘备\n火计成功后与徐庶对话，影响樊城之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '成都之战',
        explain: '庞统 黄忠 魏延 徐庶IF\n阻止庞统被杀，影响樊城之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '定军山之战',
        explain: '黄忠 马超 马岱 庞统IF\n击破曹休，影响樊城之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '樊城之战',
        explain: '关羽 关兴 关索 关银屏',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        },
        symbolSize: 80
    },{
        name: '夷陵之战',
        explain: '张苞 关系 赵云',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '天水之战',
        explain: '诸葛亮 刘禅 星彩 赵云',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '街亭之战',
        explain: '姜维 月英 张苞 关兴\n受困前救助马谡，开发陈仓之战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '陈仓之战',
        explain: '张苞 关兴 星彩\n识破伏兵：使用张苞开投石车从左上角破城墙进入',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '五丈原之战',
        explain: '姜维 马岱 星彩 魏延\n阻止敌人增援，可以听到诸葛亮对话',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '陆口之战',
        explain: '张苞 关兴 星彩 诸葛亮\n识破吕蒙与陆逊计谋，二人出现长安：绕道后面击吕蒙',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '长安奇袭战',
        explain: '魏延 徐庶 马超 庞统\n在夏侯楙逃跑前击破，开发南中平定战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '南中平定战',
        explain: '关索 鲍三娘 关银屏 关平\n击破祝融三次',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '洛阳侵功战',
        explain: '关兴 张苞 马岱 姜维',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '魏攻略战',
        explain: '刘备 刘禅 诸葛亮 赵云',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },
    // 五星密武
    {
        name: '黄忠',
        explain: '开局15分钟内，曹操到来之前，击破杜袭、曹彰、徐晃、王异、曹真。\n先封两个据点，然后走左路攻上去即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '马超',
        explain: '开局5分钟内，找到宫女妹妹。\n按流程走，击破张颌即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '姜维',
        explain: '开局9分钟内，与关兴在中央回合。\n按流程走，成功汇合后说已全部逃出即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '关平',
        explain: '开局5分钟内，击破杨峰。\n开场击破孟获、然后击破杨峰即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '关索',
        explain: '史实路线：等吴国军团出现后全部击破\n根据流程等吴国军团出现后击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '关兴',
        explain: '进城前，走右边城墙外，击破拦路的夏侯威即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '关银屏',
        explain: 'IF路线：等吴国军团出现后全部击破\n根据流程等吴国军团出现后击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '刘禅',
        explain: '开局9分钟内，击破张辽、乐进、李典。\n走右边阻止援兵，然后爬梯子进入中央广场',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '赵云',
        explain: '开局9分钟内，击破韩当阻止火计，击破周泰、甘宁、凌统。\n先搜索刘备引出伏兵，击破后韩当准备放火，击破，\n找到刘备后击破陆逊，然后击破三人',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '关羽',
        explain: '开局14分钟内，击破华雄、吕布。\n先援救孙坚和袁术，然后等华雄出现将其击破，到达虎牢关击破吕布',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '张飞',
        explain: '村名全部存活，击破贾诩。\n先救出民，清光桥前几个小将，撤到桥位置，等待赵云撤回后，\n现弓箭部队偷袭民，要离开桥去打，会出现伏兵。\n再回来桥前，打到贾诩出阵，张辽出现袭击民时，快速解决贾诩即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '刘备',
        explain: '阻止火计。\n先清空城内敌将，击破张辽、徐晃后，出现两个火计部队，分别击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '鲍三娘',
        explain: '开局14分钟内，击破第二次出现的孟获\n根据流程即可',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '张苞',
        explain: '开局7分钟内，阻止三次火计\n根据流程即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '星彩',
        explain: '在姜维到达安定和南安前成功压制\n根据流程即可',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '徐庶',
        explain: '开局8分钟内，突破八门金锁阵，击破曹仁、乐进、李典、张郃\n根据流程即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '诸葛亮',
        explain: '祈祷成功前，阻止魏军武将侵入祈祷所\n击破进入祈祷所的武将即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '黄月英',
        explain: '开局5分钟内，救出向朗，高翔，廖化，击破300人\n走右路去救人即可',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '魏延',
        explain: '开局12分钟内，击破司马师、司马昭\n按照流程完成挑衅司马懿后，击破2个传令兵，\n回到中央等待开门并击破二将即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '庞统',
        explain: '开局5分钟内，奇袭成功\n先爬梯子识破伏击的张任，然后走右路完成奇袭即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '马岱',
        explain: '全员健在完成撤退\n先救援前线的2个，然后去右边救出高翔，再按任务走右路打上去。\n之后解决两个传令兵后，司马懿要求司马师和司马昭进军即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },
    ],
    [
        {
            source: '蜀本传',
            target: '黄巾起义',
            name: 'start'
        },{
        source: '黄巾起义',
        target: '虎牢关之战',
        name: 'next'
    },{
        source: '虎牢关之战',
        target: '徐州防御战',
        name: 'next'
    },{
        source: '徐州防御战',
        target: '新野之战',
        name: 'next',
    },{
        source: '徐州防御战',
        target: '官渡扰乱战',
        name: 'if',
    },{
        source: '官渡扰乱战',
        target: '新野之战',
        name: 'next',
    },{
        source: '新野之战',
        target: '长版之战',
        name: 'next'
    },{
        source: '长版之战',
        target: '赤壁之战',
        name: 'next'
    },{
        source: '赤壁之战',
        target: '成都之战',
        name: 'next',
    },{
        source: '成都之战',
        target: '定军山之战',
        name: 'next'
    },{
        source: '定军山之战',
        target: '樊城之战',
        name: 'next'
    },{
        source: '樊城之战',
        target: '夷陵之战',
        name: '关平'
    },{
        source: '夷陵之战',
        target: '天水之战',
        name: 'next'
    },{
        source: '天水之战',
        target: '街亭之战',
        name: 'next'
    },{
        source: '街亭之战',
        target: '陈仓之战',
        name: 'if',
    },{
        source: '街亭之战',
        target: '五丈原之战',
        name: 'end'
    },{
        source: '陈仓之战',
        target: '五丈原之战',
        name: 'next'
    },{
        source: '五丈原之战',
        target: '史实',
        name: 'end'
    },{
        source: '樊城之战',
        target: '陆口之战',
        name: '徐庶'
    },{
        source: '陆口之战',
        target: '长安奇袭战',
        name: 'next'
    },{
        source: '长安奇袭战',
        target: '南中平定战',
        name: 'if'
    },{
        source: '南中平定战',
        target: '洛阳侵功战',
        name: 'next'
    },{
        source: '长安奇袭战',
        target: '洛阳侵功战',
        name: 'next'
    },{
        source: '洛阳侵功战',
        target: '魏攻略战',
        name: 'next'
    },{
        source: '魏攻略战',
        target: 'IF',
        name: 'end'
    },
        {
            source: '定军山之战',
            target: '黄忠',
            name: '五星'
        },{
        source: '长安奇袭战',
        target: '马超',
        name: '五星'
    },{
        source: '洛阳侵功战',
        target: '姜维',
        name: '五星'
    },{
        source: '南中平定战',
        target: '关平',
        name: '五星'
    },{
        source: '魏攻略战',
        target: '刘禅',
        name: '五星'
    },{
        source: '夷陵之战',
        target: '赵云',
        name: '五星'
    },{
        source: '虎牢关之战',
        target: '关羽',
        name: '五星'
    },{
        source: '长版之战',
        target: '张飞',
        name: '五星'
    },{
        source: '徐州防御战',
        target: '刘备',
        name: '五星'
    },{
        source: '虎牢关之战',
        target: '关羽',
        name: '五星'
    },{
        source: '长版之战',
        target: '张飞',
        name: '五星'
    },{
        source: '樊城之战',
        target: '关索',
        name: '五星'
    },{
        source: '樊城之战',
        target: '关银屏',
        name: '五星'
    },{
        source: '陆口之战',
        target: '张苞',
        name: '五星'
    },{
        source: '南中平定战',
        target: '鲍三娘',
        name: '五星'
    },{
        source: '陈仓之战',
        target: '关兴',
        name: '五星'
    },{
        source: '天水之战',
        target: '星彩',
        name: '五星'
    },{
        source: '新野之战',
        target: '徐庶',
        name: '五星'
    },{
        source: '赤壁之战',
        target: '诸葛亮',
        name: '五星'
    },{
        source: '街亭之战',
        target: '黄月英',
        name: '五星'
    },{
        source: '五丈原之战',
        target: '魏延',
        name: '五星'
    },{
        source: '五丈原之战',
        target: '马岱',
        name: '五星'
    },{
        source: '成都之战',
        target: '庞统',
        name: '五星'
    },
    ]);
createCharts(document.getElementById('shu2Chart'),
[
    {
        name: '吕布讨伐战',
        explain: '刘备 关羽 张飞',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        }
    },{
        name: '长坂迎击战',
        explain: '赵云 张飞 关平',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '江东脱出战',
        explain: '刘备 赵云',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '定军山防卫战',
        explain: '法正 赵云 星彩\n刘备未受伤，开放夷陵复仇战',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        },
        symbolSize: 86,
    },{
        name: '夷陵复仇战',
        explain: '刘备 法正 关银屏',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '永安防卫战',
        explain: '刘禅 星彩 月英',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '五丈原决战',
        explain: '关羽 马超 黄忠',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '爱马探索战',
        explain: '关银屏 星彩 鲍三娘',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        }
    },
        // 六星密武
        {
            name: '关羽',
            explain: '开局9分钟内，击破张辽、吕玲綺。\n先压制所有外围的据点，然后吴国的好基友们就会开始用投石器攻城，\n然后城上就有人跳下来破坏投石器，将其击破吕布就会打开西门突击，\n从西门进去击破二将即可',
            itemStyle: {
                normal: {
                    color: '#5cb85c'
                }
            },
            symbolSize: 60
        },{
        name: '刘备',
        explain: '开局10分钟内，击破全部袁术的援军\n之前同关羽，吕布打开西门突击不久东边就有袁术的援军，全部后击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '张飞',
        explain: '徐庶计谋成功，击破张辽\n先快速压制所有目标据点，然后等到指示引诱张郃、夏侯渊、许褚让计谋成功\n最后击破张辽即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '徐庶',
        explain: '徐庶计谋成功，击破张辽贾诩\n同张飞',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '关平',
        explain: '徐庶计谋成功，击破曹仁\n同张飞',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '赵云',
        explain: '开局14分钟内，击破韩蒋钦、潘彰、全琮\n根据流程逃出城池，三将以援军出现，击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '庞统',
        explain: '开局10分钟内，击破韩当\n安装流程逃出城池到达桥会遇到韩当，击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '魏延',
        explain: '开局8分钟内，击破丁奉\n按照流程在逃出城池前遇到丁奉，击破即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '星彩',
        explain: '开局7分钟内，击破王异、张郃、郭淮\n走西道去就刘备，途中有王异，在刘备处有张郃，\n郭淮在定军山本阵附近',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '张苞',
        explain: '开局7分钟内，击破夏侯霸和徐晃\n根据流程即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '法正',
        explain: '五星：开局8分钟内，使计谋成功\n西道去就刘备，刘备当诱饵去引诱魏军追，引诱到本阵即可\n六星：开局15分钟内，使计谋成功\n同马岱',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '马岱',
        explain: '开局14分钟内，使法正计谋成功\n先击破八阵图内敌将和门口的丁奉，\n然后去中央偏右的地方阻止火计。\n之后帮鲍三娘、赵云、关兴、关索潜伏\n引诱朱然到放火处即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '关兴',
        explain: '开局8分钟内阻止火计\n先击破八阵图内敌将和门口的丁奉，然后去中央偏右的地方阻止火计。即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '姜维',
        explain: '开局6分钟内，阻止火计\n先击破2火计并，击破全琮和朱桓，\n最后击破火计兵迫使陆逊放弃火计即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '月英',
        explain: '开局9分钟内，阻止吴军入侵本阵，击破朱桓和丁奉\n就将中央的武将和火计工作兵解决，不要远离中央，就算朱桓出现开始在弓兵齐射也不要去杀他\n等到崖上的吴国奇袭武将出现后击破\n再去击破朱桓、丁奉',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '刘禅',
        explain: '开局5分钟内，击破丁奉、练师\n根据流程',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '马超',
        explain: '敌方没侵入本阵前，击破张辽、乐进、李典\n先右边绕去把于禁打败，阻止落石攻击\n再往右上打倒张郃，引发夏侯惇和夏侯渊援军到来\n等待夏侯惇冲下来击破，立即回到中央击破三将即可',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '黄忠',
        explain: '夏侯兄弟以援军身分到达后，3分钟内打败夏侯渊\n同马超',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '诸葛亮',
        explain: '开局5分钟内，我方武器无败走击破于禁\n同马超',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '关银屏',
        explain: '开局10分钟内，击破陆逊和朱然\n击破出现的旅团长',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 60
    },{
        name: '关索',
        explain: '开局8分钟内，击破祝融',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '鲍三娘',
        explain: '开局8分钟内，击破孟获',
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
            source: '吕布讨伐战',
            target: '长坂迎击战',
            name: 'next'
        },{
        source: '长坂迎击战',
        target: '江东脱出战',
        name: 'next',
    },{
        source: '江东脱出战',
        target: '定军山防卫战',
        name: 'next',
    },{
        source: '定军山防卫战',
        target: '夷陵复仇战',
        name: 'if',
    },{
        source: '定军山防卫战',
        target: '永安防卫战',
        name: 'next'
    },{
        source: '永安防卫战',
        target: '五丈原决战',
        name: 'next'
    },{
        source: '五丈原决战',
        target: '爱马探索战',
        name: 'next',
    },
        {
            source: '吕布讨伐战',
            target: '关羽',
            name: '六星'
        },{
        source: '吕布讨伐战',
        target: '刘备',
        name: '六星'
    },{
        source: '长坂迎击战',
        target: '张飞',
        name: '六星'
    },{
        source: '长坂迎击战',
        target: '徐庶',
        name: '六星'
    },{
        source: '长坂迎击战',
        target: '关平',
        name: '六星'
    },{
        source: '江东脱出战',
        target: '赵云',
        name: '六星'
    },{
        source: '江东脱出战',
        target: '庞统',
        name: '六星'
    },{
        source: '江东脱出战',
        target: '魏延',
        name: '六星'
    },{
        source: '定军山防卫战',
        target: '星彩',
        name: '六星'
    },{
        source: '定军山防卫战',
        target: '张苞',
        name: '六星'
    },{
        source: '定军山防卫战',
        target: '法正',
        name: '五星'
    },{
        source: '夷陵复仇战',
        target: '法正',
        name: '六星'
    },{
        source: '夷陵复仇战',
        target: '马岱',
        name: '六星'
    },{
        source: '夷陵复仇战',
        target: '关兴',
        name: '六星'
    },{
        source: '永安防卫战',
        target: '姜维',
        name: '六星'
    },{
        source: '永安防卫战',
        target: '月英',
        name: '六星'
    },{
        source: '永安防卫战',
        target: '刘禅',
        name: '六星'
    },{
        source: '五丈原决战',
        target: '马超',
        name: '六星'
    },{
        source: '五丈原决战',
        target: '黄忠',
        name: '六星'
    },{
        source: '五丈原决战',
        target: '诸葛亮',
        name: '六星'
    },{
        source: '爱马探索战',
        target: '关银屏',
        name: '六星'
    },{
        source: '爱马探索战',
        target: '关索',
        name: '六星'
    },{
        source: '陆口之战',
        target: '张苞',
        name: '六星'
    },{
        source: '爱马探索战',
        target: '鲍三娘',
        name: '六星'
    },{
        source: '陈仓之战',
        target: '关兴',
        name: '六星'
    },
]);
