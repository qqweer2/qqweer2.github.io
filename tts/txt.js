$(function(){
    const LEN = 300;
    var $audio = $('#audio'), audio = $audio.get(0);
    audio.onended = function(){
        player.next();
        progrer.stop();
    }

    audio.onloadedmetadata = function() {
        player.duration = this.duration;
    }

    audio.onplaying = function() {
        player.playing = true;
        player.pauseing = false;
        progrer.start();
    };
    audio.onpause = function() {
        player.pauseing = true;
    };
    var player = {
        list : [],
        playing : false,
        pauseing : false,
        index : 0,
        duration : 0,
        $contents : null,
        init : function (contents) {
            this.index = 0;
            this.list.length = 0;
            this.$contents = contents;
        },
        start : function() {
            if (this.playing) {
                this.index = 0;
                audio.pause();
                this.playing = false;
                return '朗读';
            } else {
                this.index = 0;
                if(this.list.length==0){
                    alert('没有内容了')
                    return '朗读';
                }
                this._read();
                return '停止';
            };
              
        },
        next : function(){
            this.$contents.find('p').eq(this.index).removeClass('text-primary');
            this.index++;
            if (this.list.length == this.index) {
                alert('没有更多内容了');
                this.playing = false;
                this.index = 0;
                $('#read-btn').text('朗读');
                return;
            };
            this._read();
        },
        pause : function (){
            if (!this.playing) {
                return '暂停';
            };
            if(this.pauseing) {
                audio.play();
                return '暂停';
            } else {
                audio.pause();
                return '继续';
            }
            
        },
        clear : function(){
            if (this.playing) {
                alert('先点击停止')
                return false;
            }
            this.index = 0;
            this.list.length =0;
            this.duration = 0;
            this.$contents.html('');
            return true;
        }, 
        addContent : function(text) {
            this.$contents.append('<p class="col-md-12">'+ text +'</p>');
            this.list.push(text);
        },
        _read : function(){
            this.$contents.find('p').eq(this.index).addClass('text-primary');
            postBaidu(this.list[this.index]);
        },
        end : 0
    };

    var progrer = {
        id : null,
        $div : null,
        init : function (div){
            this.$div = div;
        },
        show : function(bit) {
            this.$div.css('width',bit + "%");     
        },
        start :function() {
            var _that = this;
            this.id = setInterval(function(){
                var _ = 100 * audio.currentTime / player.duration + 0.1;
                _that.show(_.toFixed(1))
            }, 100);
        },
        stop : function () {
            clearInterval(this.id);
            var _ = 100 * audio.currentTime / player.duration;
            this.show(_.toFixed(1)) 
        }
    };

    window.read = function(btn) {
        var _ = player.start();
        $(btn).text(_);
    }
    window.pause = function(btn){
        var _ = player.pause();
        $(btn).text(_);
    }
    window.next2 = function() {
        if(player.playing) player.next();
    }
    window.clear2 = function() {
        var _ = player.clear();
        if (_) {
            player.$contents.html(""); 
            progrer.show(0);
        }
    }
    window.getStory = function(){
        var _url = $('#storyurl').val();
        if (!_url) {
            return;
        };
        player.clear();
        $.ajax({
            url: _url,
            type: 'GET',
            dataType: 'text',
            data: {},
            success:function(data) {
                var i = 0;
                for (; i < Math.floor(data.length / LEN); i++) {
                    player.addContent(data.substr(i*LEN, LEN));
                };
                if (i*LEN < data.length) {
                    player.addContent(data.substr(i*LEN));
                };
            }
        });

        
    }
    player.init($('#contents'));
    progrer.init($('#progress'));
    function postBaidu(content){
        var arg = $('#form').serialize();
        var src="https://ss0.baidu.com/6KAZsjip0QIZ8tyhnq/text2audio?cuid=dict&lan=ZH&ctp=1&pdt=30&"+arg +'&tex='+content;
        //var src='https://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&spd=6&tex=';
        $audio.attr('src', src);
        audio.play();
    }

})