!function(a){window.APP={},$materialBoard=a("#material-board");var b=["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];a.each(b,function(a,c){b[a]}),a("[data-key-label]").on("touchstart",function(){var b=a(this),c=b.parent();b.addClass("is-active"),c.addClass("is-active")}),a("[data-key-label]").on("touchend",function(){var b=a(this),c=b.parent();b.removeClass("is-active"),c.removeClass("is-active")}),a(document).on("keydown",function(b){var c=String.fromCharCode(b.keyCode).toLowerCase(),d=a('[data-key-label="'+c+'"]'),e=d.parent();return d.addClass("is-active").delay(200).queue(function(){a(this).removeClass("is-active"),a(this).dequeue()}),e.addClass("is-active").delay(200).queue(function(){a(this).removeClass("is-active"),a(this).dequeue()}),!1})}(jQuery);