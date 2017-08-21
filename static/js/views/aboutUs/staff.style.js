// 员工风采
$(function(){

  var dataFirst = datas[0].first
  var dataSecond = datas[1].second

  console.log(dataFirst)
  $(".content_title").html(
    '<h2 class="fl">'+dataFirst.title+'</h2>'+
    '<hr class="title_hr fr">'
  )

  $.each(dataSecond,function(i, v) {
    $(".second_content").append(
      '<div class="content_lists clearfix">'+
        '<div class="content_img fl">'+'</div>'+
        '<div class="content_texts fl">'+
          '<h3 style="padding-top:80px;">'+this.day+'</h3>'+
          '<h4>'+this.title+'</h4>'+
          '<p>'+this.text[0].detail+'</p>'+
        '</div>'+
      '</div>'
    )
    $.each(this.url,function(index, v) {
      $(".content_img").eq(i).append(
        '<img src="'+v+'" />'
      )
    });
  });

})


var datas = [
  {"first":
    {"title":"员工风采","text":""}
  },
  {"second":[
    {"day":"2013年8月16号","title":"集思“广亿”",
     "text":[{"detail":"我们尽心做好每一项任务，站好每一段岗位。我们精益求精，严格要求自己，只为有个更好的作品。"}],
     "url":["../../static/images/competitive.edge/staffshow01.png"]},
    {"day":"2014年8月16号","title":"集思“广亿”",
      "text":[{"detail":"我们尽心做好每一项任务，站好每一段岗位。我们精益求精，严格要求自己，只为有个更好的作品。"}],
      "url":["../../static/images/competitive.edge/staffshow02.png",
             "../../static/images/competitive.edge/staffshow03.png",
             "../../static/images/competitive.edge/staffshow04.png"
           ]
     },
    {"day":"2015年8月16号","title":"集思“广亿”",
      "text":[{"detail":"我们尽心做好每一项任务，站好每一段岗位。我们精益求精，严格要求自己，只为有个更好的作品。"}],
      "url":["../../static/images/competitive.edge/staffshow05.png"]},
    {"day":"2016年8月16号","title":"集思“广亿”",
      "text":[{"detail":"我们尽心做好每一项任务，站好每一段岗位。我们精益求精，严格要求自己，只为有个更好的作品。"}],
      "url":["../../static/images/competitive.edge/staffshow06.png"]}
  ]}
]
