function locale(){
  var css = "<style>";
      css += "body{padding-top:30px;}";
      css += "#totop{position:absolute;top:0px;left:0;}";
      css += "#totop-btn{position:fixed;bottom:30px;right:30px;z-index:99999999;}";
      css += "#c-banner{width:100%;height;30px;position:fixed;top:0;left:0;background-color:#a94442;color:white;z-index:99999999;text-align: center;padding:10px 0;font-weight:bold;}";
      css += "#c-banner a{color:white !important;}";
      css += "</style>";
  var html = "<a name='totop' id='totop'></a><a id='totop-btn' href='#totop' class='btn btn-primary'>top</a>";
      html += "<div id='c-banner'>";
      html += "<a href='/Bootstrap 4/v4-alpha.getbootstrap.com/getting-started/introduction/index.html'>[Offline Documentation]</a>";
      html += "<a style='margin-left:100px;' href='http://v4-alpha.getbootstrap.com/' target='_blank'>Bootstrap 4</a>";
      html += "<a style='margin-left:100px;' href='http://bootstrap3.offline.docs/' target='_blank'>Bootstrap 3 [Offline Documentation]</a>";
      html += "</div>";
  document.write(css+html);
}locale();