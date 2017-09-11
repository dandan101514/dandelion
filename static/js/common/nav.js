$(function(){
  // 一级菜单项
  var menu = '<div class="menu">'+
                '<h1 class="logo cl">'+'<a href="http://www.dowebok.com/">'+'</a>'+'上海广亿信息技术有限公司'+'</h1>'+
                '<ul class="nav navAll">'+'</ul>'+
                '<span class="change_language">'+'English'+'</span>'+
             '</div>'
  $(".top").html(menu)

  var navShow = '<div class="row">'+
    '<div class="nav_left col-sm-4">'+'</div>'+
    '<div class="nav_center col-sm-4">'+
      '<div class="nav_third">'+'</div>'+
      '<div class="nav_details">'+'</div>'+
    '</div>'+
    '<div class="nav_right col-sm-4">'+'</div>'+
  '</div>'

  $(".nav_content").html(navShow)



  var data = menus
  // console.log(menus[1].menuNav)
  var path = "/guangyi/guangyi.com/"
  var imgpath = "/guangyi/guangyi.com/static/images/nav/"

    $.each(menus,function(i,v){ 

      var Nav = v.menuNav;
      //  循环添加一级导航
      $(".navAll").append('<li class="navlis">'+'<a class="navlis_text" href="'+path+v.id+'.html">'+Nav.firstMenu+'</a>'+'</li>');
      
        $(".nav_left").append('<ul class="second_nav list-group fr" style="display:none;">'+'</ul>');
        $(".nav_third").append('<div class="sanjiliebiao" style="display:none;">'+'</div>');
        $(".nav_details").append('<div class="details_texts" style="display:none;"></div>');   
        $(".nav_right").append('<div class="imgcontent" style="display:none;"></div>')     

        //  循环添加二级导航
        $.each(Nav.secondNav,function(j,vle){
          $(".second_nav").eq(i).append('<li>'+'<a href="javascript:;">'+vle.secondtext+'</a>'+'<i class="fa" aria-hidden="true">'+'</i>'+'</li>');
          $(".sanjiliebiao").append('<ul class="nav_third_lists" style="display:none;">'+'</ul>');
          
          $(".imgcontent").eq(i).append('<img class="imgblock" src="'+imgpath+vle.detailurl+'" style="width:380px;display:none;" alt="">')
        });

        //  下拉导航右侧内容
        $.each(Nav.rightDetail,function(j,vel){
          $(".details_texts").eq(i).append('<div class="details_texts_ever" style="display:none;">'+'<h3>'+vel.title+'</h3>'+'<p>'+vel.text+'</p>'+'</div>');
        });

        //  循环添加三级导航
        $.each(Nav.thirdNav,function(j,vles){

          $.each(vles.thirdtext,function(k,contents){
            $(".sanjiliebiao").eq(i).find(".nav_third_lists").eq(j).append('<li class="click_third_nav">'+'<a href="'+path+contents.Id+'.html">'+contents.detailstexts+'</a>'+'<i class="fa" aria-hidden="true">'+'</i>'+'</li>');
          });
        });
    });

  // 导航默认样式
  $(".second_nav li:first-child").addClass('hover_second_nav').find("i").addClass('fa-long-arrow-right');

  // 页面跳转后 导航添加样式 通过判断页面打开的路径和点击时href的路径 是否一样
  $(".navlis a").each(function(){
    $this = $(this);
    if($this[0].href == window.location.href){
      $this.addClass('firthNav');
    }
  });

  // 导航下拉内容的显示隐藏
  $(".nav_content").hover(function(){
    $(this).show()
  },function(){
    $(this).fadeOut(400);
    $(".second_nav li").removeClass('hover_second_nav');
    $(".second_nav li i").removeClass('fa-long-arrow-right');
    $(".second_nav li:first-child").addClass('hover_second_nav').find("i").addClass('fa-long-arrow-right');
    $(".nav_third_lists").eq(0).show().siblings().hide()
  })

  $(".nav_third_lists").css({"position":"relative","left":"-250px","z-index":"-2"})
  $(".details_texts_ever").css("opacity","0")
  // $(".imgblock").css("opacity","0")

  // 一级导航的hover事件
  $(".navlis").hover(function(k){
    k = $(this).index()
    if(k == 0 || k == 4 || k == 5){
      $(".nav_content").stop().stop().hide();
    }else{
      $(".nav_content").fadeIn(300);
      $(".details_texts").eq(k).show().siblings().hide();
      $(".second_nav").eq(k).show().siblings().hide();
      $(".sanjiliebiao").eq(k).show().siblings().hide();
      $(".sanjiliebiao").eq(k).find(".nav_third_lists").stop().stop().eq(0).show().animate({left:"0px",zIndex:999},300).siblings().hide().animate({zIndex:-2,left:"-250px"});
      $(".details_texts").eq(k).show();
      $(".details_texts").eq(k).find(".details_texts_ever").stop().stop().eq(0).show().animate({opacity:"1"},1000).siblings().hide().animate({opacity:"0"});
      $(".imgcontent").eq(k).show().siblings().hide();
      $(".imgcontent").eq(k).find(".imgblock").eq(0).show().siblings().hide();
    }
    
  },function(){
    $(".nav_content").stop().stop().hide();
    $(".second_nav li").removeClass('hover_second_nav');
    $(".second_nav li i").removeClass('fa-long-arrow-right');
    $(".second_nav li:first-child").addClass('hover_second_nav').find("i").addClass('fa-long-arrow-right');
  });

  
  // 二级导航的hover事件 并添加点击跳转页面事件
    $(".second_nav li").hover(function(p){
      p = $(this).index()
      pIndex = $(this).parent('.second_nav').index();
      $(this).addClass('hover_second_nav').siblings().removeClass('hover_second_nav');  //添加二级导航样式
      $(".second_nav li i").removeClass('fa-long-arrow-right');
      $(this).find("i").addClass('fa-long-arrow-right');
      $(".sanjiliebiao").eq(pIndex).find(".nav_third_lists").stop().stop().eq(p).show().animate({left:"0px",zIndex:999},300).siblings().hide().animate({zIndex:-2,left:"-250px"});
      $(".details_texts").eq(pIndex).find(".details_texts_ever").stop().stop().eq(p).show().animate({opacity:"1"},1000).siblings().hide().animate({opacity:"0"});
      $(".imgcontent").eq(pIndex).find(".imgblock").eq(p).show().siblings().hide();

    });

    // 鼠标离开下拉内容，三级导航恢复
    $(".nav_content").mouseleave (function() {
      $(".nav_third_lists").hide()
    });

})



var menus = [{
    "id":"templates/index/index",
    "indexs":"0",
    "menuNav":{
      "firstMenu":"首页",
      "secondNav":null,
      "thirdNav":null,
      "title":"",
      "text":""
    }
  },
  {
    "id":"templates/ITservice/technical.consultation",
    "menuNav":{
    "firstMenu":"IT服务",
    "secondNav":[
      {"id":"1","secondtext":"技术咨询","detailurl":"jishuziuxn.jpg"},
      {"id":"2","secondtext":"技术服务","detailurl":"jishufuwu.jpg"},
      {"id":"3","secondtext":"软件开发","detailurl":"ruanjiankaifa.jpg"},
      {"id":"4","secondtext":"服务特点","detailurl":"fuwutedian.jpg"},
      {"id":"5","secondtext":"核心特点","detailurl":"hexintedian.jpg"}
    ],
    "thirdNav":[
      {"thirdtext":[
        {"Id":"templates/ITservice/technical.consultation","detailstexts":"技术咨询"}
      ]},
      {"thirdtext":[
        {"Id":"templates/ITservice/technicalService/technical.service001","detailstexts":"信息系统设计与开发"},
        {"Id":"templates/ITservice/technicalService/technical.service002","detailstexts":"测试"},
        {"Id":"templates/ITservice/technicalService/technical.service003","detailstexts":"业务流程外包(BPO)"},
      ]},
      {"thirdtext":[
        {"Id":"templates/ITservice/software.development","detailstexts":"软件开发"}
      ]},
      {"thirdtext":[
        {"Id":"templates/ITservice/service.feature","detailstexts":"服务特点"}
      ]},
      {"thirdtext":[
        {"Id":"templates/ITservice/core.feature","detailstexts":"核心特点"}
      ]}
    ],
    "rightDetail":[
      {"title":"技术咨询","text":"企业信息化，是利用IT技术来实施企业的管理，优化内部流程，提高企业的生产力和运行效率，从而提升企业的核心竞争力。"},
      {"title":"技术服务","text":"企业应用系统运维的难度和压力也在随之增加。广亿提供客户化应用系统设计、开发服务，并在预算范围内按时按质交付项目。我们能够帮助客户确定对应用系统或产品的具体需求，并管理和维护其整个生命周期。"},
      {"title":"软件开发","text":"1. 金融银行业决策分析管理系统 2. 保险业数据挖掘分析系统 3. 电信业增值业务管理软件"},
      {"title":"服务特点","text":"广亿咨询为客户提供的是涵盖企业运营、绩效考核和业绩提升的综合性整体解决方案，从而实现客户资源的最优化配置和效益的最大化提升。"},
      {"title":"核心特点","text":"一个可执行的外包策略的关键因素之一是确保和客户业务发展目标保持一致，另一个关键因素是需要强有力的治理机制来确保策略的成功执行。一旦确定策略，广亿将与您携手构建为您量身定制的治理和沟通模式。"}
    ]}
},
  {
    "id":"templates/outsource/human.outsource",
    "indexs":"1",
    "menuNav":{
    "firstMenu":"软件外包",
    "secondNav":[
      {"id":"1","secondtext":"技术人才外包","detailurl":"jishurencaiwaibao.jpg"},
      {"id":"2","secondtext":"业务外包","detailurl":"yewuwaibao.jpg"},
      {"id":"3","secondtext":"项目开发服务","detailurl":"xiangmukaifa.jpg"}
    ],
    "thirdNav":[
      {"thirdtext":[
        {"Id":"templates/outsource/human.outsource","detailstexts":"技术人才外包"}
      ]},
      {"thirdtext":[
        {"Id":"templates/outsource/business.outsource","detailstexts":"业务外包"}
      ]},
      {"thirdtext":[
        {"Id":"templates/outsource/development","detailstexts":"项目开发服务"}
      ]}
    ],
    "rightDetail":[
      {"title":"什么是技术人才外包？","text":"人力资源外包就是企业根据需要将某一项或几项人力资源管理工作或职能外包出去，交由其他企业或组织进行管理，以降低人力成本，实现效率最大化。"},
      {"title":"什么是业务外包？","text":"业务外包（Outsourcing），也称资源外包、资源外置，它是指企业整合用其外部最优秀的专业化资源，从而达到降低成本、提高效率、充分发挥自身核心竞争力和增强企业对环境的迅速应变能力的一种管理模式。"},
      {"title":"什么是项目开发服务？","text":"需求分析    总体设计  详细设计  开发编程  系统测试  部署实施"}
    ]}
},
  {
    "id":"templates/solution/solution",
    "indexs":"2",
    "menuNav":{
    "firstMenu":"解决方案",
    "secondNav":[
      {"id":"1","secondtext":"金融银行","detailurl":"jinrongyinghang.jpg"},
      {"id":"2","secondtext":"证券保险","detailurl":"zhengquanbaoxian.jpg"},
      {"id":"3","secondtext":"移动互联网","detailurl":"yidonghulianwang.jpg"},
      {"id":"4","secondtext":"教育行业","detailurl":"jiaoyu.jpg"},
      {"id":"5","secondtext":"企事/制造业","detailurl":"qishizizao.jpg"},
      {"id":"6","secondtext":"云计算","detailurl":"yunjisuan.jpg"},
      {"id":"7","secondtext":"大数据","detailurl":"bigdata.jpg"},
      {"id":"8","secondtext":"商业智能","detailurl":"shangyezhineng.jpg"},
      {"id":"9","secondtext":"数据迁移","detailurl":"shujuqianyi.jpg"},
      {"id":"10","secondtext":"测试服务","detailurl":"test.jpg"}
    ],
    "thirdNav":[
      {"thirdtext":[
        {"Id":"templates/solution/financeBank/finance.bank","detailstexts":"金融授信融资解决方案"},
        {"Id":"templates/solution/financeBank/finance.bank002","detailstexts":"监管报表解决方案"},
        {"Id":"templates/solution/financeBank/finance.bank003","detailstexts":"反洗钱解决方案"},
        {"Id":"templates/solution/financeBank/finance.bank004","detailstexts":"微信银行解决方案"},
        {"Id":"templates/solution/financeBank/finance.bank005","detailstexts":"资产管理解决方案"}
      ]},
      {"thirdtext":[
        {"Id":"templates/solution/securitiesInsurance/securities.insurance001","detailstexts":"财险核心系统解决方案"},
        {"Id":"templates/solution/securitiesInsurance/securities.insurance002","detailstexts":"资产管理系统解决方案"},
        {"Id":"templates/solution/securitiesInsurance/securities.insurance003","detailstexts":"保险监管系统解决方案"},
        {"Id":"templates/solution/securitiesInsurance/securities.insurance004","detailstexts":"保险微信营销服务平台解决方案"}
      ]},
      {"thirdtext":[
        {"Id":"templates/solution/mobileInternet/mobile.internet001","detailstexts":"移动医疗解决方案"},
        {"Id":"templates/solution/mobileInternet/mobile.internet002","detailstexts":"电子商务解决方案"},
        {"Id":"templates/solution/mobileInternet/mobile.internet003","detailstexts":"微商城解决方案"}
      ]},
      {"thirdtext":[
        {"Id":"templates/solution/education/education001","detailstexts":"终身教育学分银行解决方案"},
        {"Id":"templates/solution/education/education002","detailstexts":"智慧校园解决方案"}
      ]},
      {"thirdtext":[
        {"Id":"templates/solution/manufacturing.enterprises/manufacturing.enterprises001","detailstexts":"客户关系系统(CRM)解决方案"},
        {"Id":"templates/solution/manufacturing.enterprises/manufacturing.enterprises002","detailstexts":"企业生产管理系统(MES)解决方案"},
        {"Id":"templates/solution/manufacturing.enterprises/manufacturing.enterprises003","detailstexts":"人事管理解决方案"}
      ]},
      {"thirdtext":[
        {"Id":"templates/solution/cloud.computing/cloud.computing001","detailstexts":"广亿云"},
        {"Id":"templates/solution/cloud.computing/cloud.computing002","detailstexts":"企业云"}
      ]},
      {"thirdtext":[
        {"Id":"templates/solution/big.data/big.data001","detailstexts":"大数据解决方案"},
        {"Id":"templates/solution/big.data/big.data002","detailstexts":"大数据集成开发平台"}
      ]},
      {"thirdtext":[
        {"Id":"templates/solution/business.intelligence/business.intelligence001","detailstexts":"数据仓库（EDW)"},
        {"Id":"templates/solution/business.intelligence/business.intelligence002","detailstexts":"数据挖掘(DM)"}
      ]},
      {"thirdtext":[
        {"Id":"templates/solution/data.migration/data.migration001","detailstexts":"数据迁移"}
      ]},
      {"thirdtext":[
        {"Id":"templates/solution/testing.service/testing.service001","detailstexts":"测试服务"}
      ]}
    ],
    "rightDetail":[
      {"title":"金融银行","text":"以银行、证券为代表的金融行业一直是技术创新和应用创新的高地。在“互联网+”的背景下，围绕客户服务、业务创新、产业升级而展开的新一轮信息技术革命推动着整个金融服务的转型升级。"},
      {"title":"证券保险","text":"广亿财险业务系统基于客户中心理念设计，能够实现业务处理全过程管理，支持多级管理体系架构，支持集中控制、分散展业的业务处理模式，是一套支持财产保险公司业务处理的完美系统。"},
      {"title":"移动互联网","text":"广泛应用于户外大屏显示、楼宇电视广告、银行利率汇率及信息发布、商场广告媒体、酒店多媒体信息发布、社区文化建设、医院排队叫号及播放系统、政务多媒体信息发布、企业电视台、电信或移动营业厅多媒体信息发布等信息传播领域。"},
      {"title":"教育行业","text":"提供决策支持依据：有效保存高校各阶段历史数据，进行一定的统计分析，深度挖掘内在信息，展示高校发展历程，不仅为学校的教学评估工作提供支持，且为高校领导提供决策支持的依据。"},
      {"title":"企事/制造业","text":"OA是办公自动化,又称办公信息系统,是以计算机科学,信息科学,地理空间科学,行为科学和网络通信技术等现代科学技术为支撑,以提高专项和综合业务管理和辅助决策的水平效果为目的的综合性人机信息系统。"},
      {"title":"云计算","text":"广亿有云解决方案可为用户提供业界领先的IaaS层平台服务，秉承开放、模块化、标准化的设计理念，支持多种异构虚拟化平台，实现云数据中心各类异构资源的集中管理、统一监控，实现基础设施的服务化，简化了云数据中心的运维，提高云数据中心的服务水平，浪潮可为用户提供搭建私有云、行业云整体解决方案。"},
      {"title":"大数据","text":"该产品是基于Hadoop为开发者提供应用开发服务的大数据产品。它提供Hadoop组件的数据和操作接口封装，并提供集成第三方组件的接口，以API、SDK、CLT和IDE的方式为开发者提供二次开发服务，通过WEB界面操作提供ETL及数据应用开发服务。"},
      {"title":"商业智能","text":"数据仓库提供用户用于决策支持的当前和历史数据，这些数据在传统的操作型数据库中很难或不能得到。数据仓库技术是为了有效的把操作形数据集成到统一的环境中以提供决策型数据访问，的各种技术和模块的总称。所做的一切都是为了让用户更快更方便查询所需要的信息，提供决策支持。"},
      {"title":"数据迁移","text":"如何让数据更高效帮助业务的发展，快速响应业务需求，在大量数据中及时提供决策分析，提升企业管理者对IT的管理效率，在当前的经济环境下让IT为企业带来更大经济效益，让IT帮助企业未来5-10年的业务发展——所有这些都对企业的数据库系统提出了更高的要求。"},
      {"title":"测试服务","text":"全面的测试，以评估合规性，使开发人员无需跨大量不断变化的平台和终端进行测试。立即获得可快速扩充的项目团队，使产品开发人员能够以更快的速度提供先进的产品，节省宝贵的内部资源。"}
    ]}
},
  {
    "id":"templates/jobRecruit/job.recruit",
    "indexs":"3",
    "menuNav":{
    "firstMenu":"人才招聘",
    "secondNav":null,
    "thirdNav":null,
    "title":null,
    "text":null
  }
},
  {
    "id":"templates/aboutUs/company.profile",
    "indexs":"4",
    "menuNav":{
    "firstMenu":"关于我们",
    "secondNav":null,
    "thirdNav":null,
    "rightDetail":null
  }
}]
