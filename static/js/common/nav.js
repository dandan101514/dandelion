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
          
          $(".imgcontent").eq(i).append('<img class="imgblock" src="'+vle.detailurl+'" style="width:380px;display:none;" alt="">')
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
    if(k == 0 || k == 4){
      $(".nav_content").hide();
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
    $(".nav_content").fadeOut(500).stop().stop();
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
    "id":"index",
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
      {"id":"1","secondtext":"技术咨询","detailurl":"http://via.placeholder.com/380x245"},
      {"id":"2","secondtext":"技术服务","detailurl":"http://via.placeholder.com/380x235"},
      {"id":"3","secondtext":"软件开发","detailurl":"http://via.placeholder.com/380x245"},
      {"id":"4","secondtext":"服务特点","detailurl":"http://via.placeholder.com/380x225"},
      {"id":"5","secondtext":"核心特点","detailurl":"http://via.placeholder.com/380x245"}
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
      {"title":"技术服务","text":"企业信息化，是利用IT技术来实施企业的管理，优化内部流程，提高企业的生产力和运行效率，从而提升企业的核心竞争力。"},
      {"title":"软件开发","text":"企业信息化，是利用IT技术来实施企业的管理，优化内部流程，提高企业的生产力和运行效率，从而提升企业的核心竞争力。"},
      {"title":"服务特点","text":"企业信息化，是利用IT技术来实施企业的管理，优化内部流程，提高企业的生产力和运行效率，从而提升企业的核心竞争力。"},
      {"title":"核心特点","text":"企业信息化，是利用IT技术来实施企业的管理，优化内部流程，提高企业的生产力和运行效率，从而提升企业的核心竞争力。"},
    ]}
},
  {
    "id":"templates/outsource/human.outsource",
    "indexs":"1",
    "menuNav":{
    "firstMenu":"软件外包",
    "secondNav":[
      {"id":"1","secondtext":"技术人才外包","detailurl":"http://via.placeholder.com/380x245"},
      {"id":"2","secondtext":"业务外包","detailurl":"http://via.placeholder.com/380x245"},
      {"id":"3","secondtext":"项目开发服务","detailurl":"http://via.placeholder.com/380x245"}
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
      {"title":"什么是技术人才外包？","text":"'外包'一词英文名'outsourcing'，直译意思为'外部寻源'，是指在组织外部寻找资源来完成组织内部工作。"},
      {"title":"什么是业务外包？","text":"'外包'一词英文名'outsourcing'，直译意思为'外部寻源'，是指在组织外部寻找资源来完成组织内部工作。"},
      {"title":"什么是项目开发服务？","text":"'外包'一词英文名'outsourcing'，直译意思为'外部寻源'，是指在组织外部寻找资源来完成组织内部工作。"},
      {"title":"什么是技术人才外包？","text":"'外包'一词英文名'outsourcing'，直译意思为'外部寻源'，是指在组织外部寻找资源来完成组织内部工作。"},
      {"title":"什么是技术外包流程？","text":"'外包'一词英文名'outsourcing'，直译意思为'外部寻源'，是指在组织外部寻找资源来完成组织内部工作。"},
    ]}
},
  {
    "id":"templates/solution/solution",
    "indexs":"2",
    "menuNav":{
    "firstMenu":"解决方案",
    "secondNav":[
      {"id":"1","secondtext":"金融银行","detailurl":"http://via.placeholder.com/380x245"},
      {"id":"2","secondtext":"证券保险","detailurl":"http://via.placeholder.com/380x245"},
      {"id":"3","secondtext":"移动互联网","detailurl":"http://via.placeholder.com/380x245"},
      {"id":"4","secondtext":"教育行业","detailurl":"http://via.placeholder.com/380x235"},
      {"id":"5","secondtext":"企事/制造业","detailurl":"http://via.placeholder.com/380x225"},
      {"id":"6","secondtext":"云计算","detailurl":"http://via.placeholder.com/380x245"},
      {"id":"7","secondtext":"大数据","detailurl":"http://via.placeholder.com/380x235"},
      {"id":"8","secondtext":"商业智能","detailurl":"http://via.placeholder.com/380x245"},
      {"id":"9","secondtext":"数据迁移","detailurl":"http://via.placeholder.com/380x235"},
      {"id":"10","secondtext":"测试服务","detailurl":"http://via.placeholder.com/380x245"}
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
        {"Id":"templates/solution/big.data/big.data002  ","detailstexts":"大数据集成开发平台"}
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
      {"title":"广亿风险解决方案能够协助银行建立整套的量化分析模型以及精细化的风险规避策略，包括：","text":"健全和完善内部信用评级体系。建立健全信用风险管理的组织体系和管理机制，加强对信用风险的全程动态监控。改建信用风险分析方法和技术，建立信用风险评估体系和定价模型。"},
      {"title":"广亿风险解决方案能够协助银行建立整套的量化分析模型以及精细化的风险规避策略，包括：","text":"健全和完善内部信用评级体系。建立健全信用风险管理的组织体系和管理机制，加强对信用风险的全程动态监控。改建信用风险分析方法和技术，建立信用风险评估体系和定价模型。"},
      {"title":"广亿风险解决方案能够协助银行建立整套的量化分析模型以及精细化的风险规避策略，包括：","text":"健全和完善内部信用评级体系。建立健全信用风险管理的组织体系和管理机制，加强对信用风险的全程动态监控。改建信用风险分析方法和技术，建立信用风险评估体系和定价模型。"},
      {"title":"广亿风险解决方案能够协助银行建立整套的量化分析模型以及精细化的风险规避策略，包括：","text":"健全和完善内部信用评级体系。建立健全信用风险管理的组织体系和管理机制，加强对信用风险的全程动态监控。改建信用风险分析方法和技术，建立信用风险评估体系和定价模型。"},
      {"title":"广亿风险解决方案能够协助银行建立整套的量化分析模型以及精细化的风险规避策略，包括：","text":"健全和完善内部信用评级体系。建立健全信用风险管理的组织体系和管理机制，加强对信用风险的全程动态监控。改建信用风险分析方法和技术，建立信用风险评估体系和定价模型。"},
      {"title":"广亿风险解决方案能够协助银行建立整套的量化分析模型以及精细化的风险规避策略，包括：","text":"健全和完善内部信用评级体系。建立健全信用风险管理的组织体系和管理机制，加强对信用风险的全程动态监控。改建信用风险分析方法和技术，建立信用风险评估体系和定价模型。"},
      {"title":"广亿风险解决方案能够协助银行建立整套的量化分析模型以及精细化的风险规避策略，包括：","text":"健全和完善内部信用评级体系。建立健全信用风险管理的组织体系和管理机制，加强对信用风险的全程动态监控。改建信用风险分析方法和技术，建立信用风险评估体系和定价模型。"},
      {"title":"广亿风险解决方案能够协助银行建立整套的量化分析模型以及精细化的风险规避策略，包括：","text":"健全和完善内部信用评级体系。建立健全信用风险管理的组织体系和管理机制，加强对信用风险的全程动态监控。改建信用风险分析方法和技术，建立信用风险评估体系和定价模型。"},
      {"title":"广亿风险解决方案能够协助银行建立整套的量化分析模型以及精细化的风险规避策略，包括：","text":"健全和完善内部信用评级体系。建立健全信用风险管理的组织体系和管理机制，加强对信用风险的全程动态监控。改建信用风险分析方法和技术，建立信用风险评估体系和定价模型。"},
      {"title":"广亿风险解决方案能够协助银行建立整套的量化分析模型以及精细化的风险规避策略，包括：","text":"健全和完善内部信用评级体系。建立健全信用风险管理的组织体系和管理机制，加强对信用风险的全程动态监控。改建信用风险分析方法和技术，建立信用风险评估体系和定价模型。"},
    ]}
},
  {
    "id":"templates/jobRecruit/job.recruit",
    "indexs":"3",
    "menuNav":{
    "firstMenu":"人才招聘",
    "secondNav":"",
    "thirdNav":"",
    "title":"",
    "text":""
  }
},
  {
    "id":"templates/aboutUs/company.profile",
    "indexs":"4",
    "menuNav":{
    "firstMenu":"关于我们",
    "secondNav":[
      {"id":"1","secondtext":"公司简介","detailurl":"http://via.placeholder.com/380x245"},
      {"id":"2","secondtext":"员工风采","detailurl":"http://via.placeholder.com/380x245"},
      {"id":"3","secondtext":"竞争优势","detailurl":"http://via.placeholder.com/380x235"},
      {"id":"4","secondtext":"负责说明","detailurl":"http://via.placeholder.com/380x225"},
      {"id":"5","secondtext":"合作伙伴","detailurl":"http://via.placeholder.com/380x245"},
    ],
    "thirdNav":[
      {"thirdtext":[
        {"Id":"templates/aboutUs/company.profile","detailstexts":"公司简介"}
      ]},
      {"thirdtext":[
        {"Id":"templates/aboutUs/staff.style","detailstexts":"员工风采"}
      ]},
      {"thirdtext":[
        {"Id":"templates/aboutUs/competitive.edge","detailstexts":"竞争优势"}
      ]},
      {"thirdtext":[
        {"Id":"templates/aboutUs/statement","detailstexts":"负责说明"}
      ]},
      {"thirdtext":[
        {"Id":"templates/aboutUs/cooperative.partner","detailstexts":"合作伙伴"}
      ]}
    ],
    "rightDetail":[
      {"title":"公司简介","text":"上海广亿信息技术有限公司，是一家信息技术服务提供商及软件研发的高科技公司。"},
      {"title":"员工风采","text":"上海广亿信息技术有限公司，是一家信息技术服务提供商及软件研发的高科技公司。"},
      {"title":"竞争优势","text":"上海广亿信息技术有限公司，是一家信息技术服务提供商及软件研发的高科技公司。"},
      {"title":"负责说明","text":"上海广亿信息技术有限公司，是一家信息技术服务提供商及软件研发的高科技公司。"},
      {"title":"合作伙伴","text":"上海广亿信息技术有限公司，是一家信息技术服务提供商及软件研发的高科技公司。"},
    ]}
}]
