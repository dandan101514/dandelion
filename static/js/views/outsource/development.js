$(function(){

  var dataFirst = datas[0].first
  var dataSecond = datas[1].second

  $(".content_title").html(
    '<h2 class="fl">'+dataFirst.title+'</h2>'+
    '<hr class="title_hr fr" style="width:83%;">'
  );

  $.each(dataSecond,function(i, el) {
    if(this.url != null){
      $(".second_content").append(
        '<div class="content_lists">'+
          '<img src="'+this.url+'" />'+
          '<ul style="padding-bottom:100px;">'+'</ul>'+
        '</div>'
      );
    };
    
    $.each(this.text,function(index,v){
      if(v.detail != null ){
        $(".content_lists ul").append(
          '<li style="padding-top:35px;">'+
            '<h4>'+v.secondTitle+'</h4>'+
            '<p>'+v.detail+'</p>'+
          '</li>'
        );
      };
    });

  });

});


var datas = [
  {"first":
    {"title":"项目开发服务","text":null}
  },
  {"second":[
    {"title":"软件外包项目流程：",
     "url":"../../static/images/outsource/liuchen.png",
     "text":[
      {"secondTitle":"","detail":null,},
      {"secondTitle":"需求分析","detail":"建立合作意向后，我们首先会对客户要求有详尽的了解，准确知道客户需求、客户的商业模式和业务流程，并结合自身的经验，为客户提出改进建议。"},
      {"secondTitle":"总体设计","detail":"在需求确定并获得客户认可后，由系统设计师进行系统架构设计，并与客户一起制定项目实施计划。"},
      {"secondTitle":"详细设计","detail":"由程序设计人员根据系统架构，针对不同模块的功能和规格进行详细设计。"},
      {"secondTitle":"开发编码","detail":"由程序员根据详细设计及计划，进行软件程序代码的编写。"},
      {"secondTitle":"系统测试","detail":"不同模块的编程工作完成后，经过测试，并进行系统的整合。"},
      {"secondTitle":"部署实施","detail":"软件系统开发最终完成后，到客户现场进行安装、调试、培训。"}
    ]}
  ]}
]
