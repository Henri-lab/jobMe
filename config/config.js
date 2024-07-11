var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "王海峰",
    sex: "男",
    age: "25",
    phone: "17519497189",
    email: "1842208351@qq.com",
    address: "现居湖北省武汉市",
    qq: "1842208351",
    log: "@henriFox",
    excpect_work: "webGIS前端开发",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "在每一个挑战面前，生命总会找到出路",
        "无论前路多么艰难，生命总会找到出路。",
        "坚持信念，因为生命总会找到出路。!",
        "勇敢前行，生命总会找到出路。",
        "在困境中，记住：生命总会找到出路。",
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "烟雨如梦，情意如歌<br>" +
        "为你执着，至今未改<br>" +
        "你好，我是王海峰~<br>" +
        "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫王海峰，性别男，来自中国地质大学（武汉）。我期望的工作岗位是WbgGIS、Cesium前端开发。</p>" +
        "<p>我热爱技术，重视理论基础，喜欢尝试各种新花样。能够高效地完成各项任务。我对工作充满热情，具有很强的团队协作能力，同时也具备独立开发和解决问题的能力。我具备较高的执行力和责任心，重视团队的荣誉，愿意承担各种任务。</p>" +
        "<p>对计算几何和计算机网络有较深的兴趣。未来希望深入学习机器学习相关知识，并将其与前端技术和网络技术相结合，致力于开发出更优质的产品。我相信，通过不断学习和实践，我能够在Cesium工程师岗位上发挥自己的专长，为团队和项目带来更多价值</p>" +
        "<p>十分期待与您的联系!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */
    skills: [
        ["JavaScript/TypeScript", 90, "yellow"],
        ["HTML5", 90, "	#FF8C00"],
        ["CSS3", 90, "red"],
        ["Vue3", 90, "green"],
        ["Cesium", 90, "#00FF00"],
        ["Three", 80, "	#48D1CC"],
        ["Openlayer", 70, "#1abc9c"],
        ["webGL/shader", 60, "#FF00FF"],
        ["React", 40, "blue"],
        ["Java/spring框架", 30, "#D2691E"],
        ["C++", 10, "#E6E6FA"],
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>熟悉web的前端开发，尤其是GIS的大屏可视化项目。</li>" +
        "     <li>掌握Vue3.x全家桶，能够使用Vue进行单页面应用程序的开发。</li>" +
        "     <li>熟悉Cesium，能够进行三维地球和地图可视化开发。</li>" +
        "     <li>熟悉Three.js，能够进行3D图形和动画的开发。</li>" +
        "     <li>熟悉OpenLayer，能够进行Web地图应用的开发。</li>" +
        "     <li>熟悉Express框架，能够进行Node.js的后端开发。</li>" +
        "     <li>掌握Vite，能够进行快速和现代化的前端项目构建。</li>" +
        "     <li>熟练使用Git进行版本控制，能够进行团队协作和代码管理。</li>" +
        "     <li>了解基本数据结构和算法,计算机网络</li>" +
        "     <li>了解Java的Spring和Ruoyi框架</li>" +
        "     <li>了解Python，能够进行数据处理、分析和自动化脚本开发 </li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/czmtool.png", "https://github.com/Henri-lab/czm_dev_helper", "Cesium二次开发框架", "智慧项目常用功能的系统性封装,采用ES6模式<br>刚开坑"],
        ["./images/metro.png", "https://github.com/Henri-lab/cesiumMetroWuhan", "智慧地铁项目", "采用Cesium+Vue3编写的小型前后端分离项目"],
        ["./images/weather.png", "https://github.com/Henri-lab/openLayer-weather", "天气查询项目", "采用Openlayer+Vue3编写的天气查询项目"],
        ["./images/weather.png", "https://github.com/Henri-lab/smart-traffic-usermanageReact", "智慧交通用户管理", "采用Openlayer+React编写的用户地图管理项目"],
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2023/09 — 2024/06", "<br>前端开发",
            "<p><strong>陕西河汉九天科技有限公司</strong></p>" +
            "<p>编写Python脚本，使用Pandas和NumPy库进行数据清洗和预处理，使用ArcGIS API、MongoDB进行地理空间数据的处理和分析。</p> " +
            "<p>参与设计和优化数据库结构。</p>" +
            "<p>通过Vue前端框架和Cesium、Three等WebGL可视化库进行3D渲染。</p>" +
            "<p>利用Element、ECharts，DataV等UI库创建交互式界面，将复杂的数据分析结果以直观的形式展示给业务团队，支持公司的战略决策。</p>"
        ],
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ['2018/11', '在入学期间，主导了学校年度班级汇报表演的筹备和组织工作，从联系演出团队到策划活动流程，再到现场的管理和协调，我全程参与并确保活动顺利进行', '这次经历让我学会了如何在高压环境下有效组织和管理团队，也让我对活动策划和执行有了更深的理解'],
        ['2019/10', '志愿参加学院教授组织的野外研究活动,研究目标区域的地层概况和历史气候，还亲手挖到了许多古生物化石', '这个项目让我了解人工智能在古生物领域的无限潜力'],
        ['2021/03', '参与了一个关于环境法的线上研究项目。我们主要研究了环境法在不同国家的实施情况，并撰写了一份详细的研究报告。尽管这份报告未发表，但我在此过程中学到了很多关于环境保护和法律执行的知识', '不仅拓宽了我的法律视野，也让我结识了许多志同道合的朋友。']
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/github.svg", "https://github.com/Henri-lab", "我的GitHub主页"],
        ["./svg/LeetCode.svg", "https://leetcode.com/u/Henri-lab/", "我的力扣主页"],
        ["./svg/csdn.png", "https://blog.csdn.net/m0_46543935", "我的CSDN主页"],
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}
