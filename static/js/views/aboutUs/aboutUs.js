$(function(){
    $(".navlis").eq(5).find("a").addClass("firthNav");  // 当前页面导航添加样式

    $(".about_nav_left").append(
        '<ul class="list-group">'+
            '<li class="lists_li">'+'<a href="company.profile.html">'+'公司简介'+'</a>'+'</li>'+
            '<li class="lists_li">'+'<a href="staff.style.html">'+'员工风采'+'</a>'+'</li>'+
            '<li class="lists_li">'+'<a href="competitive.edge.html">'+'竞争优势'+'</a>'+'</li>'+
            '<li class="lists_li">'+'<a href="statement.html">'+'负责声明'+'</a>'+'</li>'+
            '<li class="lists_li">'+'<a href="cooperative.partner.html">'+'合作伙伴'+'</a>'+'</li>'+
        '</ul>'
    );

    $(".lists_li a").each(function(){  
        $this = $(this);  
        if($this[0].href==window.location.href){  
            $this.addClass("lists_active");
        };
    });
});
