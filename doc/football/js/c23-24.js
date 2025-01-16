createCharts(document.getElementById('c23-24'),
[
    {
        name: '16. 皇马',
        explain: '1:1',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        }
    },{
        name: '16. 莱比锡红牛',
        explain: '0:1',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '16. 曼城',
        explain: '3:1',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '16. 哥本哈根',
        explain: '1:3',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '16. 拉齐奥',
        explain: '1:0',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '16. 拜仁',
        explain: '3:0',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '16. 巴黎圣日尔曼',
        explain: '2:0',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '16. 皇家社会',
        explain: '1:2',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '16. 国际米兰',
        explain: '1:0',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '16. 马竞',
        explain: '2:1',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '16. 埃因霍温',
        explain: '1:1',
        itemStyle: {
            normal: {
                color: '#2061b7'
            }
        }
    },{
        name: '16. 多特蒙德',
        explain: '2:0',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 80
    },{
        name: '16. 那不勒斯',
        explain: '1:1',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        },
        symbolSize: 80
    },{
        name: '16. 巴萨',
        explain: '3:1',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '16. 波尔图',
        explain: '1:0',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },{
        name: '16. 阿森纳',
        explain: '1:0',
        itemStyle: {
            normal: {
                color: '#2da2b7'
            }
        }
    },
    // -------- 8强
    {
        name: '8. 皇马',
        explain: '3:3',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        },
        symbolSize: 60
    },{
        name: '8. 曼城',
        explain: '1:1',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '8. 拜仁',
        explain: '1:0',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '8. 巴黎圣日尔曼',
        explain: '4:1',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '8. 马竞',
        explain: '2:1',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '8. 多特蒙德',
        explain: '4:2',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 80
    },{
        name: '8. 巴萨',
        explain: '3:2',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },{
        name: '8. 阿森纳',
        explain: '2:2',
        itemStyle: {
            normal: {
                color: '#5cb85c'
            }
        },
        symbolSize: 60
    },
    // --------------- 4强
    {
        name: '4. 拜仁',
        explain: '2:2',
        itemStyle: {
            normal: {
                color: '#C36328FF'
            }
        }
    },{
        name: '4. 皇马',
        explain: '2:1',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        }
    },{
        name: '4. 多特蒙德',
        explain: '1:0',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 80
    },{
        name: '4. 巴黎圣日尔曼',
        explain: '0:1',
        itemStyle: {
            normal: {
                color: '#C36328FF'
            }
        }
    },
    // ---------------- 2强
    {
        name: '2. 皇马',
        explain: '2:0',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        }
    },{
        name: '2. 多特蒙德',
        explain: '0:2',
        itemStyle: {
            normal: {
                color: '#b83fb4'
            }
        },
        symbolSize: 80
    },{
        name: '1. 皇家马德里',
        explain: '冠军',
        itemStyle: {
            normal: {
                color: '#f0ad4e'
            }
        },
        symbolSize: 90
    }],
    [{
        source: '16. 皇马',
        target: '8. 皇马',
        name: '胜出'
    },{
        source: '16. 莱比锡红牛',
        target: '8. 皇马',
        name: '淘汰'
    },{
        source: '16. 曼城',
        target: '8. 曼城',
        name: '胜出'
    },{
        source: '16. 哥本哈根',
        target: '8. 曼城',
        name: '淘汰',
    },{
        source: '16. 拜仁',
        target: '8. 拜仁',
        name: '胜出',
    },{
        source: '16. 拉齐奥',
        target: '8. 拜仁',
        name: '淘汰',
    },{
        source: '16. 巴黎圣日尔曼',
        target: '8. 巴黎圣日尔曼',
        name: '胜出',
    },{
        source: '16. 皇家社会',
        target: '8. 巴黎圣日尔曼',
        name: '淘汰',
    },{
        source: '16. 马竞',
        target: '8. 马竞',
        name: '胜出',
    },{
        source: '16. 国际米兰',
        target: '8. 马竞',
        name: '淘汰'
    },{
        source: '16. 多特蒙德',
        target: '8. 多特蒙德',
        name: 'next'
    },{
        source: '16. 埃因霍温',
        target: '8. 多特蒙德',
        name: '淘汰'
    },{
        source: '16. 巴萨',
        target: '8. 巴萨',
        name: '胜出'
    },{
        source: '16. 那不勒斯',
        target: '8. 巴萨',
        name: '淘汰'
    },{
        source: '16. 阿森纳',
        target: '8. 阿森纳',
        name: '胜出',
    },{
        source: '16. 波尔图',
        target: '8. 阿森纳',
        name: '淘汰'
    },{
        source: '8. 拜仁',
        target: '4. 拜仁',
        name: '胜出'
    },{
        source: '8. 阿森纳',
        target: '4. 拜仁',
        name: '淘汰'
    },{
        source: '8. 皇马',
        target: '4. 皇马',
        name: '胜出'
    },{
        source: '8. 曼城',
        target: '4. 皇马',
        name: '淘汰'
    },{
        source: '8. 多特蒙德',
        target: '4. 多特蒙德',
        name: '胜出'
    },{
        source: '8. 马竞',
        target: '4. 多特蒙德',
        name: '淘汰'
    },{
        source: '8. 巴黎圣日尔曼',
        target: '4. 巴黎圣日尔曼',
        name: '胜出'
    },{
        source: '8. 巴萨',
        target: '4. 巴黎圣日尔曼',
        name: '淘汰'
    },{
        source: '4. 皇马',
        target: '2. 皇马',
        name: '胜出'
    },{
        source: '4. 拜仁',
        target: '2. 皇马',
        name: '淘汰'
    },{
        source: '4. 多特蒙德',
        target: '2. 多特蒙德',
        name: '胜出'
    },{
        source: '4. 巴黎圣日尔曼',
        target: '2. 多特蒙德',
        name: '淘汰'
    },{
        source: '2. 皇马',
        target: '1. 皇家马德里',
        name: '冠军'
    },{
        source: '2. 多特蒙德',
        target: '1. 皇家马德里',
        name: '亚军'
    }
]);

createTree(document.getElementById('t23-24'),
{
    name: '皇家马德里',
    explain: '冠军 2:0',
    children: [
        {
            name: '皇家马德里',
            explain: '主2:1 客2:2',
            children: [
                {
                    name: '皇家马德里',
                    explain: '主3:3 客1:1',
                    children: [
                        {
                            name: '皇家马德里',
                            explain: '主1:0 客1:1',
                            children: [
                                {
                                    name: '皇家马德里',
                                    explain: '',
                                }, {
                                    name: '莱比锡红牛',
                                    explain: '',
                                }
                            ]
                        }, {
                            name: '曼城',
                            explain: '主3:1 客3:1',
                            children: [
                                {
                                    name: '曼城',
                                    explain: '',
                                }, {
                                    name: '哥本哈根',
                                    explain: '',
                                }
                            ]
                        }
                    ]
                }, {
                    name: '拜仁',
                    explain: '主2:1 客1:0',
                    children: [
                        {
                            name: '拜仁',
                            explain: '主0:1 客3:0',
                            children: [
                                {
                                    name: '拜仁',
                                    explain: '',
                                }, {
                                    name: '拉齐奥',
                                    explain: '',
                                }
                            ]
                        }, {
                            name: '阿森纳',
                            explain: '主1:0 客0:1',
                            children: [
                                {
                                    name: '阿森纳',
                                    explain: '',
                                }, {
                                    name: '波尔图',
                                    explain: '',
                                }
                            ]
                        }
                    ]
                }
            ]
        }, {
            name: '多特蒙德',
            explain: '主1:0 客1:0',
            children: [
                {
                    name: '多特蒙德',
                    explain: '主1:2 客4:2',
                    children: [
                        {
                            name: '多特蒙德',
                            explain: '主2:0 客1:1',
                            children: [
                                {
                                    name: '多特蒙德',
                                    explain: '',
                                }, {
                                    name: '埃因霍温',
                                    explain: '',
                                }
                            ]
                        }, {
                            name: '马竞',
                            explain: '主2:1 客0:1',
                            children: [
                                {
                                    name: '马竞',
                                    explain: '',
                                }, {
                                    name: '国际米兰',
                                    explain: '',
                                }
                            ]
                        }
                    ]
                }, {
                    name: '巴黎圣日尔曼',
                    explain: '主2:3 客4:1',
                    children: [
                        {
                            name: '巴黎圣日尔曼',
                            explain: '主2:0 客1:2',
                            children: [
                                {
                                    name: '巴黎圣日尔曼',
                                    explain: '',
                                }, {
                                    name: '皇家社会',
                                    explain: '',
                                }
                            ]
                        }, {
                            name: '巴萨',
                            explain: '主3:1 客1:1',
                            children: [
                                {
                                    name: '巴萨',
                                    explain: '',
                                }, {
                                    name: '那不勒斯',
                                    explain: '',
                                }
                            ]
                        }
                    ]
                }

            ]
        }

    ]
})