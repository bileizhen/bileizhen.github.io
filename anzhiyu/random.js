var posts=["2024/08/21/hello-world/","2013/12/24/中文測試/","2018/07/24/markdown/","2019/07/25/代码高亮/","2024/09/05/代理工具の机场推荐｜介绍与使用一条龙/","2024/08/21/你好世界/","2013/12/24/元素/","2013/12/26/图像/","2013/12/25/无标题/","2013/12/25/摘录/","2013/12/24/标签/","2013/12/24/日本語テスト/","2013/12/25/画廊帖子/","2013/12/24/类别/","2013/12/24/链接不带标题的帖子/","2013/12/24/链接帖子/","2013/12/24/长标题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"阿玟导航","link":"https://scvo.top/","avatar":"https://scvo.top/wen/favicon.png","descr":"希望可以帮到你","siteshot":"https://pic.imgdb.cn/item/66c757d0d9c307b7e9322388.jpg"},{"name":"bileizhen","link":"https://bileizhen.top","avatar":"https://pic.imgdb.cn/item/66c56083d9c307b7e9ca48fc.webp","descr":"一个毫无存在感的猫娘","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"阿玟","link":"https://aw.scvo.top/","avatar":"https://aw.scvo.top/wp-content/uploads/2024/03/17095539322024030412053291.jpg","descr":"我是一个奇奇怪怪的人，有很多奇奇怪怪的爱好。长期乱点技能书，导致什么都不会，也做不好。悲催。﹏。","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };