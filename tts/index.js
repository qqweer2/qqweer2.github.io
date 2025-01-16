
$(function(){
    const BAIDU_API = "https://ss0.baidu.com/6KAZsjip0QIZ8tyhnq/text2audio";

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
            $('#contents').find('p').eq(this.index).removeClass('text-primary');
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
            return true;
        },
        _read : function(){
            $('#contents').find('p').eq(this.index).addClass('text-primary');
            postBaidu(this.list[this.index]);
        },
        end : 0
    };

    var progrer = {
        id : null,
        $div : $('#progress'),
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

    window.add = function(){
        var text = $('#text1').val().trim();
        if (text.length==0) {
            alert('no text to add');
            return;
        }
        let _t = '';
        let total = 0;

        if (text.length <= 300) {
            _t = text;
            $('#text1').val('');
            $('#chatLen').val('0');
        } else
            while (true) {
                var number = text.search(/[。！？]/)+1;
                if (number>300) {
                    alert('一句超过300字，无法加入段落，请修订')
                    return;
                }
                if (number==0 || total+number>300) {
                    $('#text1').val(text);
                    $('#chatLen').val(text.length);
                    break
                }
                if (text.at(number+1)=="\"")
                    number++;
                _t += text.substr(0, number);
                total += number;
                text = text.substr(number)
            }
        _t =_t.replace(/[ \r\n\t]/g, '')
        $('#contents').append('<p class="col-md-12">'+ _t +'</p>');

        player.list.push(_t);
    };

    window.read = function(btn) {
        var _ = player.start();
        $(btn).text(_);
    };
    window.pause = function(btn){
        var _ = player.pause();
        $(btn).text(_);
    };
    window.next2 = function() {
        if(player.playing) player.next();
    };
    window.clear1 = function() {
        $('#text1').val("");
    };
    window.clear2 = function() {
        var _ = player.clear();
        if (_) {
            $('#contents').html("");
            progrer.show(0);
        }
    };

    window.loadTxt = function () {
        $('#txtFile').click()
    };

    $('#txtFile').on('change', function (input) {
        let files = input.target.files;
        if (files.length==0) {
            alert('未选择任何文件')
        } else {
            let reader = new FileReader();
            let encoding = $('#txtType').val();
            reader.readAsText(files[0], encoding);
            reader.onload = function (e) {
                $('#text1').val(e.target.result)
            }
        }
    })
    function postBaidu(content){
        var arg = $('#form').serialize();
        var src = BAIDU_API + "?cuid=dict&lan=ZH&ctp=1&pdt=30&" + arg + '&tex='+content;
        //var src='https://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&spd=6&tex=';
        $audio.attr('src', src);
        audio.play();
    }

})
