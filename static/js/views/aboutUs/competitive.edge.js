$(function(){

  var dataFirst = datas[0].first
  var dataSecond = datas[1].second

  $(".content_title").html(
    '<h2 class="fl">'+dataFirst.title+'</h2>'+
    '<hr class="title_hr fr">'
  )
  $.each(dataSecond,function(i, v) {
    $(".second_content").append(
      '<div class="content_lists">'+
        '<h3>'+v.title+'</h3>'+
      '</div>'
    )
    $.each(v.text,function(){
      $(".content_lists").eq(i).append(
        '<p style="text-indent:2em;padding-bottom:15px;">'+this.detail+'</p>'
      )
    })
  });

  // 服务行业图标
  var icon = dataSecond[0].icons
  $(".content_lists").eq(0).append('<ul class="list-inline">'+'</ul>');
  $.each(icon,function(index, el) {
    $(".content_lists ul").append(
      '<li>'+
        '<img src="'+this.url+'" />'+
        '<p>'+this.text+'</p>'+
      '</li>'
    )
  });


})


var datas = [
  {"first":
    {"title":"竞争优势","text":""}
  },
  {"second":[
    {
      "title":"服务行业",
      "text":"",
      "icons":[
        {"url":"../../static/images/competitive.edge/edgeicon01.png","text":"金融行业"},
        {"url":"../../static/images/competitive.edge/edgeicon02.png","text":"证券保险业"},
        {"url":"../../static/images/competitive.edge/edgeicon03.png","text":"移动电信业"},
        {"url":"../../static/images/competitive.edge/edgeicon04.png","text":"教育行业"},
        {"url":"../../static/images/competitive.edge/edgeicon05.png","text":"企事制造业"},
        {"url":"../../static/images/competitive.edge/edgeicon06.png","text":"零售业"},
        {"url":"../../static/images/competitive.edge/edgeicon07.png","text":"移动互联网"},
        {"url":"../../static/images/competitive.edge/edgeicon08.png","text":"云计算"},
        {"url":"../../static/images/competitive.edge/edgeicon09.png","text":"大数据"},
        {"url":"../../static/images/competitive.edge/edgeicon010.png","text":"软件测试"}
      ]
    },
    {"title":"信息安全","text":[
      {"detail":"信息安全是广亿企业生产的前提。广亿公司以客户利益为重，视信息安全为广亿生产保障的重点。广亿的信息安全覆盖了物理区域安全、网络安全、介质使用、服务器管理、口令管理、个人PC安全、防病毒、业务连续性、开发过程等生产过程的诸多方面。通过严格实施信息安全监察制度的落实和提高员工安全意识的教育，充分保障了广亿在开展各项业务过程中的信息安全。"},
      {"detail":"信息安全管理过程中广亿一直遵循ISO/IEC27001信息安全管理体系标准，为客户的信息开发带来更强大的安全性和稳定性，这标志着广亿的信息安全管理体系已走向成熟。"},
      {"detail":"广亿信息安全管理的有效性和自身的信息安全管理水平的持续提高，是广亿的企业竞争优势最强有力的支柱。"}]
    },
    {"title":"质量管理","text":[
      {"detail":"品质保证是广亿可持续发展的根本。在品质管理方面，广亿根据国际ISO9000质量管理体系标准制定了具有广亿公司特色的质量管理体制，通过CMM2质量管理软件开发流程制定了适合大、中、小各行各业种类的软件开发流程和标准，现已建立了一套完善的、持续有效和便于操作的质量管理体系。"},
      {"detail":"信息安全管理过程中广亿一直遵循ISO/广亿的品质管理重点落实到过程改进，通过深入探讨ISO9000、CMM、TQM等相关质量控制理论，结合国际外包项目的特点和自身管理经验，吸收客户企业优秀的管理思想和方法，不断对建立的标准化流程加以完善、改造，通过控制软件开发过程的品质，实现基于软件过程管理的品质管理创新。"},
      {"detail":"广亿的品质管理重点落实到过程改进，通过深入探讨ISO9000、CMM、TQM等相关质量控制理论，结合国际外包项目的特点和自身管理经验，吸收客户企业优秀的管理思想和方法，不断对建立的标准化流程加以完善、改造，通过控制软件开发过程的品质，实现基于软件过程管理的品质管理创新。"}]
    },
    {"title":"项目管理","text":[
      {"detail":"为客户提供专业、准时、质量一致的软件外包服务是广亿发展的核心竞争力。广亿发展过程中，成功地了完成多家外包开发项目。同时，承接项目的开发范围也从编程、单元测试等低端的开发活动，发展为需求分析、基本设计至综合测试及运营维护等高端工程的开发。"},
      {"detail":"随着项目数量的增加和开发内容的深入，广亿培养出一批优秀的项目管理人才。他们在项目管理、成本控制以及信息安全上精益求精，赢得了众多知名客户的充分信任和全面认可，和客户建立了长期稳固的合作关系，扩大了广亿在国内外市场的信誉和知名度，奠定了广亿在软件外包软件领域的领先地位。同时广亿在项目管理中把生产管理作为信息化建设的核心环节，围绕“工数”、“进度”、“规模”、“质量”等度量单位，进行系统、高效、人性化的数据采集，为项目的管理控制提供了数字化基础。生产管理的应用，增加了项目的可视性，及时发现项目管理中存在的各类问题，达到了项目管理的持续改进的目的。为客户带来更大的利益。"}]
    },
    {"title":"快捷服务","text":[
      {"detail":"专业、灵活、高效的人力服务人员为客户提供最为快捷、好用的服务人员。平均响应时间（第一次候选人客户面试时间）为3个工作日，为长期合作伙伴提供更短、更快捷的响应时间是我们始终为之努力的目标。"},
      {"detail":"广泛的渠道合作，及自行建立的人才储备库确保充足的资源满足客户项目需求。同时拥有紧急需求处理预案，以确保客户紧急需求情况下的项目进度及质量。"}]
    },
    {"title":"人才储备","text":[{"detail":"广亿通过与各人才信息网站及各大公司的长期合作，建立了内部庞大而完善的人才库，保证其人力资源的充足，所有储备人才都有2年以上项目工作经验。从而满足客户日益增加的需求。对用人单位来说“人才不养而用“是上上之策，追求人才‘为我所用’要比“为我所有”有利得多。实行人才派遣制，使用人单位在人才使用上“不求所有、但求所用”这种新的用人理念得以实现。"}]
    }
  ]
}]
