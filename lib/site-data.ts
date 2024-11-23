import { 
  Briefcase, ShoppingBag, Coffee, Newspaper, Heart, Sparkles, 
  Utensils, Home, Map, Gamepad, GraduationCap, Camera, Baby,
  Music, Truck, Video, BookOpen, LifeBuoy, Plane
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Site {
  name: string;
  url: string;
  description: string;
}

interface Category {
  id: string;
  name: string;
  Icon: LucideIcon;
  sites: Site[];
}

export const siteCategories: Category[] = [
  {
    id: "work",
    name: "工作助手",
    Icon: Briefcase,
    sites: [
      {
        name: "百度文库",
        url: "https://wenku.baidu.com",
        description: "海量文档资料分享平台"
      },
      {
        name: "文心一言",
        url: "https://yiyan.baidu.com",
        description: "智能AI助手"
      },
      {
        name: "Kimi",
        url: "https://kimi.moonshot.cn",
        description: "AI智能助手"
      },
      {
        name: "网易邮箱",
        url: "https://mail.163.com",
        description: "专业邮箱服务"
      }
    ]
  },
  {
    id: "shopping",
    name: "精选购物",
    Icon: ShoppingBag,
    sites: [
      {
        name: "唯品会",
        url: "https://www.vip.com",
        description: "品牌特卖"
      },
      {
        name: "天猫",
        url: "https://www.tmall.com",
        description: "品牌购物"
      },
      {
        name: "淘宝",
        url: "https://www.taobao.com",
        description: "综合购物平台"
      },
      {
        name: "京东",
        url: "https://www.jd.com",
        description: "正品快递"
      },
      {
        name: "蘑菇街",
        url: "https://www.mogujie.com",
        description: "女性时尚购物"
      }
    ]
  },
  {
    id: "entertainment",
    name: "休闲娱乐",
    Icon: Coffee,
    sites: [
      {
        name: "抖音",
        url: "https://www.douyin.com",
        description: "短视频平台"
      },
      {
        name: "快手",
        url: "https://www.kuaishou.com",
        description: "短视频社区"
      },
      {
        name: "爱奇艺",
        url: "https://www.iqiyi.com",
        description: "在线视频"
      },
      {
        name: "腾讯视频",
        url: "https://v.qq.com",
        description: "视频平台"
      },
      {
        name: "哔哩哔哩",
        url: "https://www.bilibili.com",
        description: "年轻人文化社区"
      },
      {
        name: "芒果TV",
        url: "https://www.mgtv.com",
        description: "视频娱乐平台"
      }
    ]
  },
  {
    id: "news",
    name: "资讯频道",
    Icon: Newspaper,
    sites: [
      {
        name: "新浪网",
        url: "https://www.sina.com.cn",
        description: "综合门户网站"
      },
      {
        name: "微博",
        url: "https://weibo.com",
        description: "社交媒体平台"
      },
      {
        name: "搜狐网",
        url: "https://www.sohu.com",
        description: "新闻资讯门户"
      }
    ]
  },
  {
    id: "health",
    name: "关爱女性",
    Icon: Heart,
    sites: [
      {
        name: "美柚",
        url: "https://www.meiyou.com",
        description: "女性健康助手"
      },
      {
        name: "39健康网",
        url: "https://www.39.net",
        description: "专业健康门户"
      },
      {
        name: "丁香医生",
        url: "https://dxy.com",
        description: "专业医疗平台"
      },
      {
        name: "中华养生网",
        url: "https://www.zhys.com",
        description: "养生健康资讯"
      },
      {
        name: "薄荷网",
        url: "https://www.boohee.com",
        description: "健康生活平台"
      },
      {
        name: "壹心理",
        url: "https://www.xinli001.com",
        description: "心理健康服务"
      }
    ]
  },
  {
    id: "beauty",
    name: "美妆时尚",
    Icon: Sparkles,
    sites: [
      {
        name: "美妆心得",
        url: "https://www.meizhuangxinde.com",
        description: "美妆分享社区"
      },
      {
        name: "科妆网",
        url: "https://www.jeebei.com",
        description: "美妆知识平台"
      },
      {
        name: "太平洋时尚",
        url: "https://www.pclady.com.cn",
        description: "时尚生活门户"
      },
      {
        name: "瑞丽网",
        url: "https://www.rayli.com.cn",
        description: "时尚媒体"
      }
    ]
  },
  {
    id: "food",
    name: "美食烹饪",
    Icon: Utensils,
    sites: [
      {
        name: "下厨房",
        url: "https://www.xiachufang.com",
        description: "美食菜谱社区"
      },
      {
        name: "豆果美食",
        url: "https://www.douguo.com",
        description: "美食菜谱平台"
      },
      {
        name: "美食天下",
        url: "https://www.meishichina.com",
        description: "美食分享社区"
      }
    ]
  },
  {
    id: "life",
    name: "生活服务",
    Icon: LifeBuoy,
    sites: [
      {
        name: "快递查询",
        url: "https://www.kuaidi100.com",
        description: "快递物流查询"
      },
      {
        name: "美团外卖",
        url: "https://waimai.meituan.com",
        description: "在线订餐平台"
      },
      {
        name: "大众点评",
        url: "https://www.dianping.com",
        description: "生活服务点评"
      },
      {
        name: "QQ音乐",
        url: "https://y.qq.com",
        description: "音乐平台"
      },
      {
        name: "网易云音乐",
        url: "https://music.163.com",
        description: "音乐平台"
      }
    ]
  },
  {
    id: "travel",
    name: "出行服务",
    Icon: Plane,
    sites: [
      {
        name: "12306铁路",
        url: "https://www.12306.cn",
        description: "火车票预订"
      },
      {
        name: "携程旅行",
        url: "https://www.ctrip.com",
        description: "在线旅游平台"
      },
      {
        name: "飞猪旅行",
        url: "https://www.fliggy.com",
        description: "综合旅游服务"
      },
      {
        name: "航旅纵横",
        url: "https://www.umetrip.com",
        description: "航班动态查询"
      },
      {
        name: "爱彼迎",
        url: "https://www.airbnb.cn",
        description: "民宿预订平台"
      },
      {
        name: "高德地图",
        url: "https://www.amap.com",
        description: "地图导航服务"
      }
    ]
  },
  {
    id: "home",
    name: "家居生活",
    Icon: Home,
    sites: [
      {
        name: "好好住",
        url: "https://www.haohaozhu.cn",
        description: "家居设计平台"
      },
      {
        name: "一兜糖",
        url: "https://www.yidoutang.com",
        description: "家居灵感社区"
      },
      {
        name: "宜家家居",
        url: "https://www.ikea.cn",
        description: "家具家居商城"
      }
    ]
  },
  {
    id: "job",
    name: "求职招聘",
    Icon: Briefcase,
    sites: [
      {
        name: "前程无忧",
        url: "https://www.51job.com",
        description: "招聘求职平台"
      },
      {
        name: "BOSS直聘",
        url: "https://www.zhipin.com",
        description: "直聘平台"
      },
      {
        name: "猎聘网",
        url: "https://www.liepin.com",
        description: "高端招聘平台"
      },
      {
        name: "应届生求职",
        url: "https://www.yingjiesheng.com",
        description: "应届生求职网"
      },
      {
        name: "拉勾网",
        url: "https://www.lagou.com",
        description: "互联网招聘"
      },
      {
        name: "实习僧",
        url: "https://www.shixiseng.com",
        description: "实习招聘平台"
      }
    ]
  },
  {
    id: "education",
    name: "学习教育",
    Icon: GraduationCap,
    sites: [
      {
        name: "学堂在线",
        url: "https://www.xuetangx.com",
        description: "在线课程平台"
      },
      {
        name: "中国大学MOOC",
        url: "https://www.icourse163.org",
        description: "大学课程平台"
      },
      {
        name: "网易云课堂",
        url: "https://study.163.com",
        description: "在线教育平台"
      },
      {
        name: "沪江网校",
        url: "https://class.hujiang.com",
        description: "在线教育平台"
      },
      {
        name: "英语流利说",
        url: "https://www.liulishuo.com",
        description: "英语学习平台"
      },
      {
        name: "51Talk",
        url: "https://www.51talk.com",
        description: "在线英语教育"
      },
      {
        name: "TED-Ed",
        url: "https://ed.ted.com",
        description: "教育视频平台"
      },
      {
        name: "中国日报网",
        url: "https://www.chinadaily.com.cn",
        description: "英文新闻学习"
      }
    ]
  },
  {
    id: "parenting",
    name: "母婴亲子",
    Icon: Baby,
    sites: [
      {
        name: "宝宝树",
        url: "https://www.babytree.com",
        description: "母婴育儿社区"
      },
      {
        name: "妈妈网",
        url: "https://www.mama.cn",
        description: "母婴育儿平台"
      },
      {
        name: "柚宝宝",
        url: "https://www.youbaobao.com",
        description: "孕育知识平台"
      }
    ]
  }
];

interface TopSite {
  name: string;
  url: string;
  visits: string;
}

export const topSitesData: {
  weekly: TopSite[];
  monthly: TopSite[];
} = {
  weekly: [
    {
      name: "淘宝",
      url: "https://www.taobao.com",
      visits: "2,345,678"
    },
    {
      name: "抖音",
      url: "https://www.douyin.com",
      visits: "1,987,654"
    },
    {
      name: "美柚",
      url: "https://www.meiyou.com",
      visits: "1,234,567"
    },
    {
      name: "唯品会",
      url: "https://www.vip.com",
      visits: "987,654"
    },
    {
      name: "丁香医生",
      url: "https://dxy.com",
      visits: "876,543"
    }
  ],
  monthly: [
    {
      name: "淘宝",
      url: "https://www.taobao.com",
      visits: "8,765,432"
    },
    {
      name: "京东",
      url: "https://www.jd.com",
      visits: "7,654,321"
    },
    {
      name: "抖音",
      url: "https://www.douyin.com",
      visits: "6,543,210"
    },
    {
      name: "美柚",
      url: "https://www.meiyou.com",
      visits: "5,432,109"
    },
    {
      name: "唯品会",
      url: "https://www.vip.com",
      visits: "4,321,098"
    }
  ]
};