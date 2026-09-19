let categories=[
  {
    "id": "animation",
    "name": "动画",
    "en": "3D / 2D / MOTION GRAPHICS",
    "cover": "tree",
    "desc": "从三维叙事到二维逐帧与动态图形，用不同的视觉语言讲述故事。"
  },
  {
    "id": "ai",
    "name": "AI 全流程动画",
    "en": "AI FILM / COMMERCIAL / GAME PV",
    "cover": "water",
    "desc": "探索 AI 影像的叙事与商业表达，涵盖概念游戏 PV、二维动画、广告和游戏买量视频。"
  },
  {
    "id": "concept",
    "name": "概念设计",
    "en": "CONCEPT ART / 3D STILL",
    "cover": "concept",
    "desc": "从理想中的自然景观，到科幻世界与生命主题的三维静帧。"
  },
  {
    "id": "ip",
    "name": "IP · 吉祥物设计",
    "en": "CHARACTER / IDENTITY / APPLICATION",
    "cover": "yun-cover",
    "desc": "从文化线索出发，建立角色形象与应用场景，并探索 H5 交互中的视觉表达。"
  },
  {
    "id": "film",
    "name": "实拍 · 影像",
    "en": "SHORT FILM / PHOTOGRAPHY",
    "cover": "blind",
    "desc": "用镜头观察日常，也尝试悬疑与意识流的影像表达。"
  },
  {
    "id": "words",
    "name": "文案 · 随笔",
    "en": "WRITING / OBSERVATIONS",
    "cover": "words2",
    "desc": "关于亲情、成长、城市与日常的文字。在影像之外，保留细腻的感受。"
  }
];
let projects=[
  {
    "id": "tree",
    "cat": "animation",
    "title": "树欲静，而风恰止",
    "type": "三维动画 · 叙事短片",
    "images": [
      "/assets/tree.jpg",
      "/assets/tree2.jpg",
      "/assets/tree3.jpg"
    ],
    "intro": "以外婆与外孙女的日常为线索，讲述成长、离别与陪伴。片名借“树欲静而风不止，子欲养而亲不待”展开对亲情的思考。",
    "idea": "通过普通家庭的生活片段，提醒身处异乡、忙于学业与工作的人珍惜当下的陪伴；让温暖的记忆成为继续生活的力量。",
    "award": "全国高校数字艺术设计大赛 · 区域赛二等奖",
    "cover": "/assets/tree.jpg",
    "video": ""
  },
  {
    "id": "life",
    "cat": "animation",
    "title": "生生不息",
    "type": "三维动画 · 超现实叙事",
    "images": [
      "/assets/life.jpg",
      "/assets/life2.jpg",
      "/assets/life3.jpg"
    ],
    "intro": "从童年、校园到更广阔的世界，将人生阶段转化为场景与意象，讨论生命的延续，以及在迷茫中寻找自身意义。",
    "idea": "融合意识流、梦境与超现实表达，以场景中的主体与符号串联人生。作品希望传递：在有限的生命里，依然能够创造与生长。",
    "award": "中国大学生计算机博弈大赛 · 全国二等奖",
    "cover": "/assets/life.jpg",
    "video": ""
  },
  {
    "id": "light",
    "cat": "animation",
    "title": "曙光",
    "type": "三维动画 · 动作捕捉",
    "images": [
      "/assets/light.jpg",
      "/assets/light2.jpg",
      "/assets/light3.jpg"
    ],
    "intro": "以相框串联成长故事：一位听力障碍女孩，从孤独与无助走向校园生活，逐渐建立自信。",
    "idea": "围绕社会关怀与特殊教育，通过女孩的成长呈现理解与支持带来的改变。",
    "tools": "Maya、MotionBuilder、Unreal Engine",
    "process": "使用 Maya 进行模型与蒙皮制作，借助 MotionBuilder 处理动作捕捉与修正，再进入 Unreal Engine 完成场景、灯光和渲染。",
    "award": "全国高校数字艺术设计大赛 · 区域赛三等奖",
    "cover": "/assets/light.jpg",
    "video": ""
  },
  {
    "id": "island",
    "cat": "animation",
    "title": "小小世界 · 加油，加加油！",
    "type": "三维动画 · 个人练习",
    "images": [
      "/assets/island.jpg",
      "/assets/island2.jpg",
      "/assets/island3.jpg"
    ],
    "intro": "把加油站、水族箱与休憩空间组合成一座悬浮的小岛，想象忙碌生活中能够短暂停靠的地方。",
    "idea": "以舒适的光线、轻盈的水体和植物元素，营造一个与日常压力拉开距离的平衡点。",
    "role": "个人练习作品",
    "cover": "/assets/island.jpg",
    "video": ""
  },
  {
    "id": "seasons",
    "cat": "animation",
    "title": "二十四节气",
    "type": "三维动画",
    "images": [
      "/assets/seasons.jpg",
      "/assets/seasons2.jpg",
      "/assets/seasons3.jpg"
    ],
    "intro": "以三维场景呈现节气主题，将传统时间意象转化为动态视觉。",
    "cover": "/assets/seasons.jpg",
    "video": ""
  },
  {
    "id": "ice",
    "cat": "animation",
    "title": "冰淇淋",
    "type": "三维动画",
    "images": [
      "/assets/ice.jpg",
      "/assets/ice2.jpg",
      "/assets/ice3.jpg"
    ],
    "intro": "围绕冰淇淋与甜品场景展开的三维动画作品。",
    "cover": "/assets/ice.jpg",
    "video": ""
  },
  {
    "id": "war",
    "cat": "animation",
    "title": "战争",
    "type": "片头设计",
    "images": [
      "/assets/war.jpg",
      "/assets/war2.jpg",
      "/assets/war3.jpg"
    ],
    "intro": "以科幻城市、飞行器与太空画面构成片头视觉。",
    "cover": "/assets/war.jpg",
    "video": ""
  },
  {
    "id": "hair",
    "cat": "animation",
    "title": "百年润发",
    "type": "广告类作品",
    "images": [
      "/assets/hair.jpg",
      "/assets/hair2.jpg",
      "/assets/hair3.jpg"
    ],
    "intro": "以产品与自然场景呈现洗护主题的广告视觉。",
    "cover": "/assets/hair.jpg",
    "video": ""
  },
  {
    "id": "pop",
    "cat": "animation",
    "title": "POP MART",
    "type": "三维动画广告作品",
    "images": [
      "/assets/pop.jpg",
      "/assets/pop2.jpg",
      "/assets/pop3.jpg"
    ],
    "intro": "以角色在城市与公交车中的片段，展开三维动画广告表达。",
    "cover": "/assets/pop.jpg",
    "video": ""
  },
  {
    "id": "frame",
    "cat": "animation",
    "title": "我本任何，拘于尘世",
    "type": "二维逐帧动画",
    "images": [
      "/assets/frame.jpg",
      "/assets/frame2.jpg",
      "/assets/frame3.jpg"
    ],
    "intro": "以手绘线条和二维逐帧画面展开的动画作品。",
    "cover": "/assets/frame.jpg",
    "video": ""
  },
  {
    "id": "night",
    "cat": "animation",
    "title": "night",
    "type": "MG 动画",
    "images": [
      "/assets/night.jpg",
      "/assets/night2.jpg",
      "/assets/night3.jpg"
    ],
    "intro": "以简洁的线条、人物与夜晚意象构成动态图形作品。",
    "cover": "/assets/night.jpg",
    "video": ""
  },
  {
    "id": "zebra",
    "cat": "animation",
    "title": "斑马",
    "type": "MG 动画",
    "images": [
      "/assets/zebra.jpg",
      "/assets/zebra2.jpg",
      "/assets/zebra3.jpg"
    ],
    "intro": "将条码般的斑马纹理与自然背景结合，探索图形与角色的趣味。",
    "cover": "/assets/zebra.jpg",
    "video": ""
  },
  {
    "id": "ready",
    "cat": "animation",
    "title": "好了没有",
    "type": "MG 动画",
    "images": [
      "/assets/ready.jpg",
      "/assets/ready2.jpg",
      "/assets/ready3.jpg"
    ],
    "intro": "以高饱和色彩与抽象图形展开节奏鲜明的视觉表达。",
    "cover": "/assets/ready.jpg",
    "video": ""
  },
  {
    "id": "food",
    "cat": "animation",
    "title": "食物",
    "type": "MG 动画",
    "images": [
      "/assets/food.jpg",
      "/assets/food2.jpg",
      "/assets/food3.jpg"
    ],
    "intro": "以食物为主题，用明亮配色与图形化角色构成动画画面。",
    "cover": "/assets/food.jpg",
    "video": ""
  },
  {
    "id": "cord-storyboard",
    "cat": "animation",
    "title": "脐带 · 分镜草稿",
    "type": "二维动画 · 动态分镜",
    "images": [
      "/assets/cord-storyboard1.jpg",
      "/assets/cord-storyboard2.jpg",
      "/assets/cord-storyboard3.jpg"
    ],
    "intro": "一根红线牵引人物，也串联镜头。以保留手绘笔触的动态分镜，探索人物动作、镜头衔接与情绪节奏，呈现故事从构想到影像的早期形态。",
    "idea": "以蓝灰色线稿概括人物和空间，让红色线条成为贯穿画面的视觉线索。面部特写与动作镜头交替，突出牵引、挣脱与连接的情绪张力。",
    "role": "分镜草稿 / 前期探索",
    "cover": "/assets/cord-storyboard1.jpg",
    "video": ""
  },
  {
    "id": "water",
    "cat": "ai",
    "title": "水位线以下",
    "type": "AIGC 全流程 · 场景概念游戏 PV",
    "images": [
      "/assets/water.jpg",
      "/assets/water2.jpg",
      "/assets/water3.jpg"
    ],
    "intro": "以水下街巷与沉浸式场景构建游戏概念影像，探索环境氛围与视觉叙事。",
    "cover": "/assets/water.jpg",
    "video": ""
  },
  {
    "id": "camera",
    "cat": "ai",
    "title": "运动相机",
    "type": "AIGC 全流程 · 广告",
    "images": [
      "/assets/camera.jpg",
      "/assets/camera2.jpg",
      "/assets/camera3.jpg"
    ],
    "intro": "围绕运动相机的使用场景，以雨水、潜水和运动画面传达产品体验。",
    "cover": "/assets/camera.jpg",
    "video": ""
  },
  {
    "id": "game",
    "cat": "ai",
    "title": "游戏买量视频",
    "type": "AIGC 全流程 · 游戏广告",
    "images": [
      "/assets/game.jpg",
      "/assets/game2.jpg",
      "/assets/game3.jpg"
    ],
    "portrait": true,
    "intro": "通过角色、奇幻场景与特效画面，探索面向游戏传播的竖屏视频表达。",
    "cover": "/assets/game.jpg",
    "video": ""
  },
  {
    "id": "temu",
    "cat": "ai",
    "title": "TEMU 产品出海广告",
    "type": "AIGC 全流程 · 产品广告",
    "images": [
      "/assets/temu.jpg",
      "/assets/temu2.jpg",
      "/assets/temu3.jpg"
    ],
    "portrait": true,
    "intro": "围绕居家场景与产品体验，制作面向海外语境的广告影像。",
    "cover": "/assets/temu.jpg",
    "video": ""
  },
  {
    "id": "concept",
    "cat": "concept",
    "title": "理想国度",
    "type": "概念美术 · 个人练习",
    "images": [
      "/assets/concept.jpg",
      "/assets/concept3.jpg",
      "/assets/concept2.jpg"
    ],
    "intro": "峡谷、山川、湖泊与天空，构成对理想自然空间的想象。",
    "role": "个人练习作品",
    "cover": "/assets/concept.jpg",
    "video": ""
  },
  {
    "id": "peace",
    "cat": "concept",
    "title": "融入 · 和平",
    "type": "三维静帧 · 系列海报",
    "images": [
      "/assets/peace.jpg",
      "/assets/peace2.jpg",
      "/assets/peace3.jpg"
    ],
    "intro": "以架空的未来世界为主体，用战斗机、宇宙与火光讨论科技发展中的矛盾，以及对和平的向往。",
    "idea": "将“integrate”与“peace”的中英文语义融入视觉表达，让文字与科幻画面共同承载主题。",
    "award": "四川省大学生原创动漫大赛 · 二等奖",
    "cover": "/assets/peace.jpg",
    "video": ""
  },
  {
    "id": "cord",
    "cat": "concept",
    "title": "脐带",
    "type": "三维静帧 · 个人练习",
    "images": [
      "/assets/cord.jpg"
    ],
    "portrait": true,
    "intro": "以婴儿、脐带与光线表现生命的连接。绿色脐带象征希望与生机，环绕的形态承载依恋与安全感。",
    "tools": "Maya、Blender",
    "role": "个人练习作品",
    "process": "通过建模、绑定与渲染完成三维画面。",
    "cover": "/assets/cord.jpg",
    "video": ""
  },
  {
    "id": "prehistoric",
    "cat": "concept",
    "title": "史前文明",
    "type": "三维静帧 · 科幻机械",
    "images": [
      "/assets/prehistoric3.jpg",
      "/assets/prehistoric2.jpg",
      "/assets/prehistoric1.jpg"
    ],
    "intro": "当机械造物走入荒野，文明的时间线被重新想象。系列以武装机器人为视觉中心，在旷野、幽暗空间与燃烧的天际之间，构建带有遗迹感的科幻图景。",
    "idea": "硬朗的机械结构与粗粝地表形成质感对照，蓝色能量光与橙红火光交替塑造场景气氛。不同视角与光照共同呈现同一角色的体量、结构和环境关系。",
    "cover": "/assets/prehistoric3.jpg",
    "video": ""
  },
  {
    "id": "angel",
    "cat": "concept",
    "title": "天使",
    "type": "三维静帧 · 角色叙事",
    "images": [
      "/assets/angel3.jpg",
      "/assets/angel1.jpg",
      "/assets/angel2.jpg"
    ],
    "intro": "金属也可以承载温柔。手捧花束的机械天使，在落日与星光之间独自旅行；光环、羽翼与微微低垂的姿态，为坚硬外壳赋予柔软的情绪。",
    "idea": "以圆润的机械轮廓、磨损的表面与鲜活的花束形成对照。夕阳的暖金色和星空的青绿色营造不同情绪，让角色从造型展示延伸为关于陪伴、思念与独行的视觉叙事。",
    "cover": "/assets/angel3.jpg",
    "video": ""
  },
  {
    "id": "hell-messenger",
    "cat": "concept",
    "title": "地狱使者",
    "type": "概念美术 · 场景叙事",
    "images": [
      "/assets/hell3.jpg",
      "/assets/hell2.jpg",
      "/assets/hell1.jpg"
    ],
    "intro": "熔岩照亮深处的楼阁，幽绿的门后藏着未知。使者穿行于悬桥与灯笼之间，以一个人物的行进串联危险、神秘的地下世界。",
    "idea": "以大面积暗红建立炽热而压抑的环境，再用门内的青绿色光强调人物与叙事入口。远景交代空间尺度，较近的视角聚焦角色，使三幅画面形成逐步靠近的观看节奏。",
    "cover": "/assets/hell3.jpg",
    "video": ""
  },
  {
    "id": "lychee-ip",
    "cat": "ip",
    "title": "“AI＋IP”双擎赋能柏桥荔枝产业发展路径探析",
    "type": "IP 盲盒 · 农产品品牌视觉",
    "portrait": true,
    "images": [
      "/assets/lychee-ip3.png",
      "/assets/lychee-ip1.png",
      "/assets/lychee-ip2.png",
      "/assets/lychee-ip4.png",
      "/assets/lychee-ip5.png",
      "/assets/lychee-ip6.png"
    ],
    "cover": "/assets/lychee-ip3.png",
    "video": "",
    "intro": "以柏桥荔枝产业为背景，围绕历史人物 IP 盲盒展开品牌视觉设计。选取杨玉环等多位人物原型，用 Q 版年轻化的形象连接荔枝文化与消费场景，探索农产品品牌传播的新表达。",
    "tools": "ChatGPT · 即梦 · 腾讯混元 3D · Blender",
    "contribution": "设计方向负责人。主导历史人物 IP 盲盒方向，负责角色设定、概念形象与三维模型优化，并输出宣传海报、表情包及文创周边。",
    "idea": "将历史人物的服饰、姿态与荔枝元素结合，以统一的 Q 版比例和鲜明的角色差异建立系列辨识度。通过盲盒形象与品牌视觉延展，让荔枝文化转化为可感知、可传播的年轻化内容。",
    "process": "1. 借助 ChatGPT 完成角色设定，选取杨玉环等多位人物原型。\n2. 使用即梦生成角色概念图，探索 Q 版造型与视觉风格。\n3. 通过腾讯混元 3D 将概念图转为三维模型。\n4. 在 Blender 中进行拓扑调优。\n5. 延展盲盒形象、宣传海报、表情包与文创周边，用于农产品品牌传播。",
    "award": "暨南大学挑战杯创业计划竞赛 · 二等奖"
  },
  {
    "id": "yun",
    "cat": "ip",
    "title": "云蛋宝",
    "type": "蓝桥杯大赛 · 吉祥物设计",
    "images": [
      "/assets/yun.jpg"
    ],
    "portrait": true,
    "intro": "以“云淡风轻近午天，傍花随柳过前川”为文化线索，以蛋为原型，表达年轻人的成长潜力与探索精神。",
    "idea": "结合“云”与“蛋”的形象与谐音，建立亲切的角色性格，并延展至姿态与周边应用。",
    "tools": "Maya、Blender、Photoshop",
    "process": "从三维 IP 形象建模、蒙皮与姿态制作，到材质、渲染合成及最终版式整理。",
    "award": "第十四届蓝桥杯大赛 · 三等奖",
    "cover": "/assets/yun.jpg",
    "video": ""
  },
  {
    "id": "bao",
    "cat": "ip",
    "title": "包小天",
    "type": "廉洁主题 IP 形象设计 · 练习作品",
    "images": [
      "/assets/bao.jpg"
    ],
    "portrait": true,
    "intro": "将包拯的清廉意象与熊猫形象结合，用“廉”字肚兜、手持匾牌和头部轮廓表达角色性格。",
    "idea": "通过亲切的动物造型和文化符号，传达清廉自律、正直坦荡的主题，并延展角色动作与应用。",
    "role": "练习作品",
    "cover": "/assets/bao.jpg",
    "video": ""
  },
  {
    "id": "h5",
    "cat": "ip",
    "title": "蜀衣游四川",
    "type": "H5 非遗项目 · 角色与视觉展示",
    "images": [
      "/assets/h5-full.jpg"
    ],
    "portrait": true,
    "intro": "围绕四川服饰与非遗文化，以角色、服装与地图页面构成互动项目的视觉内容。",
    "cover": "/assets/h5-full.jpg",
    "video": ""
  },
  {
    "id": "personality",
    "cat": "ip",
    "title": "性格测试 H5",
    "type": "H5 交互设计 · 角色与个性海报",
    "images": [
      "/assets/personality-full.jpg",
      "/assets/personality-cover.jpg",
      "/assets/personality-avatar.jpg",
      "/assets/personality-question.jpg",
      "/assets/personality-result.jpg"
    ],
    "portrait": true,
    "intro": "从选择形象、回答问题到生成专属海报，把日常偏好转化为轻松有趣的自我表达。项目以角色插画和蓝紫渐变界面，串联完整的性格测试体验。",
    "idea": "用网格、几何图形与漂浮的小图标建立轻快的视觉节奏，角色形象贯穿开场、答题与结果页面。将抽象的性格标签转化为可视化海报，让结果具有保存与分享的吸引力。",
    "process": "页面流程：进入测试 → 选择角色形象 → 回答偏好问题 → 生成性格海报。站内视频展示交互流程，图片展示页面与海报设计。",
    "cover": "/assets/personality-full.jpg",
    "video": ""
  },
  {
    "id": "404",
    "cat": "film",
    "title": "404 NOT FOUND",
    "type": "实拍短片 · 悬疑",
    "images": [
      "/assets/404.jpg",
      "/assets/4042.jpg",
      "/assets/4043.jpg"
    ],
    "intro": "通过屏幕、人物与空间的关系，展开悬疑短片表达。",
    "cover": "/assets/404.jpg",
    "video": ""
  },
  {
    "id": "blind",
    "cat": "film",
    "title": "群体色盲症",
    "type": "实拍短片 · 意识流",
    "images": [
      "/assets/blind.jpg",
      "/assets/blind2.jpg",
      "/assets/blind3.jpg"
    ],
    "intro": "以城市行走与人群为线索，在彩色与黑白画面的对照中展开意识流表达。",
    "cover": "/assets/blind.jpg",
    "video": ""
  },
  {
    "id": "photo",
    "cat": "film",
    "title": "用镜头捕捉美好瞬间",
    "type": "摄影作品",
    "images": [
      "/assets/photo.jpg",
      "/assets/photo2.jpg",
      "/assets/photo3.jpg"
    ],
    "portrait": true,
    "intro": "记录街道、行人与日常中的光影，让微小的生活片段留在画面里。",
    "cover": "/assets/photo.jpg",
    "video": ""
  },
  {
    "id": "essay1",
    "cat": "words",
    "title": "摘录 / 野蛮生长",
    "type": "图文随笔",
    "images": [
      "/assets/essay1.jpg"
    ],
    "portrait": true,
    "intro": "“若你渴望浪漫，就随着春光，野蛮生长。”",
    "cover": "/assets/essay1.jpg",
    "video": ""
  },
  {
    "id": "essay2",
    "cat": "words",
    "title": "摘录 / 平庸也不错",
    "type": "生活随笔",
    "images": [
      "/assets/essay2.jpg"
    ],
    "portrait": true,
    "intro": "“或许接受自己的平庸也不错，菜秧就菜秧，鱼肉就鱼肉。从某个角度看来，尘埃可以舞，春风吹又生。”",
    "cover": "/assets/essay2.jpg",
    "video": ""
  },
  {
    "id": "essay3",
    "cat": "words",
    "title": "摘录 / 气味与记忆",
    "type": "记忆随笔",
    "images": [
      "/assets/essay3.jpg"
    ],
    "portrait": true,
    "intro": "“气味很神奇，能让失去的种种闪回。”从熟悉的香味写起，回望成长中的家庭与校园记忆。",
    "cover": "/assets/essay3.jpg",
    "video": ""
  },
  {
    "id": "essay4",
    "cat": "words",
    "title": "摘录 / 季节",
    "type": "成长随笔",
    "images": [
      "/assets/essay4.jpg"
    ],
    "portrait": true,
    "intro": "从少年时偏爱的夏夜，到后来喜欢的明媚阳光，记录随年龄变化的感受。",
    "cover": "/assets/essay4.jpg",
    "video": ""
  },
  {
    "id": "essay5",
    "cat": "words",
    "title": "摘录 / 下雨的成都",
    "type": "城市随笔",
    "images": [
      "/assets/essay5.jpg"
    ],
    "portrait": true,
    "intro": "“每一滴雨水落在地上，都一定有思念的回音吧。”",
    "cover": "/assets/essay5.jpg",
    "video": ""
  },
  {
    "id": "essay6",
    "cat": "words",
    "title": "摘录 / 离开与归来",
    "type": "城市与旅途",
    "images": [
      "/assets/essay6.jpg"
    ],
    "portrait": true,
    "intro": "记录离开成都与再次归来的心境，在熟悉的城市里辨认变化中的自己。",
    "cover": "/assets/essay6.jpg",
    "video": ""
  },
  {
    "id": "essay7",
    "cat": "words",
    "title": "摘录 / 日子有盼头",
    "type": "生活随笔",
    "images": [
      "/assets/essay7.jpg"
    ],
    "portrait": true,
    "intro": "“日子还是有盼头比较好。”在日常的期待里，积攒继续向前的力量。",
    "cover": "/assets/essay7.jpg",
    "video": ""
  },
  {
    "id": "essay8",
    "cat": "words",
    "title": "摘录 / 广州的秋天",
    "type": "城市随笔",
    "images": [
      "/assets/essay8.jpg"
    ],
    "portrait": true,
    "intro": "从广州的第一个中秋写起，记录漫长夏日里的漂泊、成长与自我体察。",
    "cover": "/assets/essay8.jpg",
    "video": ""
  },
  {
    "id": "essay9",
    "cat": "words",
    "title": "摘录 / 地铁上的人们",
    "type": "观察与散文诗",
    "images": [
      "/assets/essay9.jpg"
    ],
    "portrait": true,
    "intro": "在拥挤的车厢里观察陌生人，也从具体的生活中看见自己的牵挂。",
    "cover": "/assets/essay9.jpg",
    "video": ""
  },
  {
    "id": "essay10",
    "cat": "words",
    "title": "一通电话",
    "type": "亲情随笔",
    "images": [
      "/assets/essay10.jpg"
    ],
    "portrait": true,
    "intro": "从与奶奶的一通电话写起，记录祖孙之间的依恋，以及成长与衰老带来的复杂心情。",
    "cover": "/assets/essay10.jpg",
    "video": ""
  }
];
