(function($) {
  $(function() {
    var clipboard = new ClipboardJS('.copy');

    clipboard.on('success', function() {
      UIkit.notification('クリップボードにコピーしました。', {
        status: 'success'
      });
    });

    $('a[href^="https://"], a[href^="http://"]').attr('target', '_blank');

    $.getScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');

    if (!navigator.doNotTrack) {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-110783772-1', 'yuki.co');
      ga('set', 'anonymizeIp', true);
      ga('send', 'pageview');
    }

    if (!navigator.doNotTrack) {
      $.getScript('https://platform.twitter.com/widgets.js');
      $.getScript('https://connect.facebook.net/ja_JP/sdk.js');
      $.getScript('https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js');
    }

    if (!navigator.doNotTrack) {
      window.fbAsyncInit = function() {
        FB.init({
          version: 'v3.0',
          xfbml: true
        });
      };
    }
  });
})(jQuery);
