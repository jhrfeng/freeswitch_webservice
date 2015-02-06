
<!-- saved from url=(0039)http://www.getuikit.net/docs/js/docs.js -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=GBK"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">(function($){

    var root = $('script[src$="js/docs.js"]')[0].src.replace('js/docs.js', '..');

    // update dynamically version and download url in docs
    $.get(root+"/package.json", {nocache: Math.random()}, function(data){

        $(function(){
            $("[data-uikit-download]").attr("href", "https://github.com/uikit/uikit/releases/download/v"+data.version+"/uikit-"+data.version+".zip")
            $("[data-uikit-version]").text("Version "+data.version);
        });

    }, 'json');

    $(function() {

        if (window.hljs) {
            $('pre &gt; code').each(function(i, e) { hljs.highlightBlock(e); });
        }

        $('article').on('click', '[href="#"], [href=""]', function (e) {
            e.preventDefault();
        });

    });

})(jQuery);</pre></body></html>