$(function(){

  var dataFirst = datas[0].first
  var dataSecond = datas[1].second

// 公司简介
  $(".content_title").html(
    '<h2 class="fl">'+dataFirst.title+'</h2>'+
    '<hr class="title_hr fr">'
  )
  $.each(dataFirst.text,function(i) {
    $(".content_text").append('<p>'+this.detail+'</p>')
  });

// 管理理念  竞争优势
  $.each(dataSecond,function(i, el) {
    $(".second_content").append(
      '<div class="content_lists">'+
        '<h3 style="margin-top:70px;padding-bottom:40px;">'+this.title+'</h3>'+
      '</div>'
    )
    $.each(this.text,function(index, v) {
      console.log(v)
      $(".content_lists").eq(i).append(
        '<h4 style="margin-top:40px;margin-bottom:10px;">'+v.detail.name+'</h4>'+
        '<p>'+v.detail.content+'</p>'
      )
    });
  });
})

var datas = [
  {"first":
    {"title":"公司简介","text":[
      {"detail":"上海广亿信息技术有限公司，是一家信息技术服务提供商及软件研发的高科技公司。"},
      {"detail":"广亿在高科技行业、电信业、金融服务业、制造业、零售与分销业等领域都拥有丰富的行业经验，具备全面的IT专业服务能力，为客户提供研究及开发、 企业解决方案、 应用软件开发和维护、 质量保证和测试、本地化和全球化、基础设施外包以及业务流程外包等服务，帮助客户实现投资收益最大化，并使之更专注于自身核心业务。"},
      {"detail":"广亿信息技术有限公司立足于“以人为本，客户至上”的经营理念，为了满足客户的各种需求，为客户提供一站式的实时服务。广亿以其坚实的行业领先地位、明晰的业务方向、先进的管理制度得到了客户高度的评价，有效地满足了客户的需求，并得到了广大客户的认可。"},
      {"detail":"广亿信息技术有限公司立足于“以人为本，客户至上”的经营理念，为了满足客户的各种需求，为客户提供一站式的实时服务。广亿以其坚实的行业领先地位、明晰的业务方向、先进的管理制度得到了客户高度的评价，有效地满足了客户的需求，并得到了广大客户的认可。"},
      {"detail":"广亿信息技术自成立之日起，就将增强公司的技术实力列为公司发展的首要前提，注重员工的培训，不断提高员工的整体素质和专业技能，以满足员工在知识、技能、观念上的不断进步的需求。公司在技术水平上，长期密切跟踪世界计算机科技发展的先进技术，定期和不定期地组织技术培训技术交流活动，以保证技术人员的水平始终处于IT技术的前沿。"}
    ]}
  },
  {"second":[
    {"title":"管理理念","text":[
      {"detail":
        {"name":"我们的经营理念：因势而变，因您而变","content":"“因您而变”：是广亿自我定位，是一个目标追求，还是一种思想方法。体现了广亿根据客户需求提供产品和服务，并永远贯彻始终。"}},
      {"detail":
        {"name":"企业文化","content":"质量、服务、效益在经营管理中是有机统一的整体。质量是前提，服务是核心，效益是目的，三者必须保持动态的协调发展"}}
    ]},
    {"title":"竞争优势","text":[
      {"detail":{"name":"","content":"我们了解市场：我们聚焦中国市场，时刻处于市场最前沿。"}},
      {"detail":{"name":"","content":"我们提供最好的产品和服务：我们提供顶尖的产品资源满足广大市场的客户需求。"}},
      {"detail":{"name":"","content":"我们能为您增值：我们为供货商、中间商提供增值服务，使他们能够有效管理业务。"}},
      {"detail":{"name":"","content":"我们能为您增值：我们为供货商、中间商提供增值服务，使他们能够有效管理业务。"}}
    ]}
  ]
}]
