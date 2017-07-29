define(['DomUtil'], function (DomUtil) {

    /**
         * 浮动面板构造封装类
         * @param className
         * @constructor
         */
    function Panel(className) {
        //创建通用panel模板并设置初始化样式
        var that = this;
        this._container = DomUtil.create('div', 'geo-panel ' + className, document.body);
        this
            ._container
            .setAttribute("draggable", "true");

        //设置面板默认样式
        DomUtil.setStyle(this._container, {
            'display': 'block',
            'position': 'absolute',
            '-moz-box-sizing': 'content-box',
            '-webkit-box-sizing': 'content-box',
            'box-sizing': 'content-box',
            'top': '40%',
            'left': '40%',
            'width': 'auto',
            'height': 'auto',
            'max-width': '600px',
            /* Includes space needed for scrollbar */
            'max-height': '650px',
            'margin-top': '5px',
            'background-color': 'rgba(38, 38, 38, 0.85)',
            'color': 'white',
            'border': '1px solid #444',
            'padding': '6px',
            'overflow': 'hidden',
            'border-radius': '10px',
            '-moz-user-select': 'none',
            '-webkit-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none',
            '-webkit-transform': 'translate(0, -20%)',
            '-moz-transform': 'translate(0, -20%)',
            'transform': 'translate(0, -20%)',
            'visibility': 'hidden',
            'opacity': '1',
            '-webkit-transition': 'visibility 0s 0.2s, opacity 0.2s ease-in, -webkit-transform 0.2s ease-in',
            '-moz-transition': 'visibility 0s 0.2s, opacity 0.2s ease-in, -moz-transform 0.2s ease-in',
            'transition': 'visibility 0s 0.2s, opacity 0.2s ease-in, transform 0.2s ease-in',
            '-webkit-transform': 'translate(0, 0)',
            '-moz-transform': 'translate(0, 0)',
            'transform': 'translate(0, 0)',
            '-webkit-transition': 'opacity 0.2s ease-out, -webkit-transform 0.2s ease-out',
            '-moz-transition': 'opacity 0.2s ease-out, -moz-transform 0.2s ease-out',
            'transition': 'opacity 0.2s ease-out, transform 0.2s ease-out',
            'z-index': '1000'
        });
        //添加关闭按钮
        this._closeButton = DomUtil.create('a', 'geo-panel-close-button', this._container);
        DomUtil.setStyle(this._closeButton, {
            'position': 'absolute',
            'top': '0',
            'right': '0',
            'width': 'auto',
            'height': 'auto',
            'font-size': '20px',
            'color': 'white',
            'padding': '2px',
            'margin-right': '6px'
        });
        this._closeButton.innerHTML = '&#215;';
        this
            ._closeButton
            .setAttribute('href', '#close');
        this._closeButton.onclick = function (event) {
            event.target.parentElement.style.visibility = "hidden";
        };

        //添加标题Div
        this._titleContainer = DomUtil.create('div', 'geo-panel-title', this._container);
        DomUtil.setStyle(this._titleContainer, {
            'margin': '3px',
            'width': '100%',
            'max-height': 'auto',
            'text-align': 'left',
            'font-size': '14px',
            'font-weight': 'bolder',
            'padding-left': '13px',
            'padding-right': '25px',
            'padding-bottom': '5px'
        });

        //添加水平分割线
        this._spliter = DomUtil.create('hr', 'geo-panel-spliter', this._container);
        DomUtil.setStyle(this._spliter, {
            'margin-top': '0',
            'margin-bottom': '0'
        });

        //添加面板内容容器
        this._contentContainer = DomUtil.create('div', 'geo-panel-content', this._container);
        DomUtil.setStyle(this._contentContainer, {
            'margin': '5px',
            'width': '100%',
            'height': '100%',
            'padding-left': '10px',
            'padding-right': '10px',
            'padding-top': '10px',
            'padding-bottom': '5px',
            'overflow': 'auto'
        });

        //为面板添加拖拽事件监听
        this
            ._container
            .addEventListener('dragstart', function (event) {
                var style = window.getComputedStyle(event.target, null);
                event
                    .dataTransfer
                    .setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + "," + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + "," + event.target.className);
                /* console.log("拖动对象：");
                 console.log(event.target);*/
                return true;
            }, false);

        this
            ._container
            .addEventListener('dragend', function (event) {
                event
                    .dataTransfer
                    .clearData("text/plain");
                event.target = null;
                return false;
            }, false);
        document
            .body
            .addEventListener("drop", function (event) {
                event.preventDefault();
                var data = event
                    .dataTransfer
                    .getData("text/plain")
                    .split(',');
                var dom = document.getElementsByClassName(data[2])[0];
                dom.style.left = (event.clientX + parseInt(data[0], 10)) + "px";
                dom.style.top = (event.clientY + parseInt(data[1], 10)) + "px";
                /*console.log(data[2]);*/

            }, false);
        document
            .body
            .addEventListener("dragover", function (event) {
                event.preventDefault();
                return false;
            }, false);
    }

    /**
         * 显示面板
         */
    Panel.prototype.show = function () {
        this._container.style.visibility = "visible";
    };
    /**
         * 隐藏面板
         */
    Panel.prototype.close = function () {
        this._container.style.visibility = "hidden";
    };

    /**
         * 设置面板显示位置
         * @param postion:left/top
         */
    Panel.prototype.setPosition = function (postion) {
        this._container.style.left = postion.left;
        this._container.style.top = postion.top;
        return this;
    };

    /**
         * 设置面板标题
         * @param title:面板标题
         */
    Panel.prototype.setTitle = function (title) {
        this._titleContainer.innerHTML = title;
        return this;
    };

    /***
         * 设置面板主题样式.共有黑白两种样式
         * @param style
         */
    Panel.prototype.setTheme = function (style) {
        if (style == 'white') {
            this._container.style['background-color'] = 'white';
            this._container.style['color'] = 'black';
            this._closeButton.style['color'] = 'black';
            this._spliter.style['border-top-color'] = 'black';
        } else if (style == 'black') {

            this._container.style['background-color'] = 'rgba(38, 38, 38, 0.85)';
            this._container.style['color'] = 'white';
            this._closeButton.style['color'] = 'white';
            this._spliter.style['border-top-color'] = 'white';
        }
    };

    /**
         * 设置面板内容
         * @param content:html string或 dom
         */
    Panel.prototype.setContent = function (content) {
        if (typeof content === 'string') {
            this._contentContainer.innerHTML = content;
            return this;
        } else {
            while (this._contentContainer.hasChildNodes()) {
                this
                    ._contentContainer
                    .removeChild(this._contentContainer.firstChild);
            }
            this
                ._contentContainer
                .appendChild(content);
            return this;
        }
    };

    /**
         * 设置面板高度
         * @param height
         */
    Panel.prototype.setHeight = function (height) {

        this._container.style.height = height;
        return this;
    };

    /**
         * 设置面板宽度
         * @param width
         */
    Panel.prototype.setWidth = function (width) {
        this._container.style.width = width;
        return this;
    };

    /**
         * 定义Panel属性
         */
    Object.defineProperties(Panel.prototype, {
        //面板容器
        container: {
            get: function () {
                return this._container;
            }
        },
        //面板内容容器
        contentContainer: {
            get: function () {
                return this._contentContainer;
            }
        },
        //关闭按钮
        closeButton: {
            get: function () {
                return this._closeButton;
            }
        },
        //关闭按钮是否可见
        enableCloseButton: {
            set: function (value) {
                if (value) {
                    //this._closeButton.style.visibility = "visible";
                    this._closeButton.style.display = 'block';
                } else {
                    //this._closeButton.style.visibility = "hidden";
                    this._closeButton.style.display = 'none';
                }
            },
            get: function () {
                return this._closeButton.style.visibility;
            }
        },
        //分割线是否可见
        enableSpliter: {
            set: function (value) {
                if (value) {
                    //this._spliter.style.visibility = 'visible';
                    this._spliter.style.display = 'block';
                } else {
                    //this._spliter.style.visibility = 'hidden';
                    this._spliter.style.display = 'none';
                }

            },
            get: function () {
                return this._spliter.style.visibility;
            }
        },
        //标题是否可见
        enableTitle: {
            set: function (value) {
                if (value) {
                    //this._titleContainer.style.visibility = 'visible';
                    this._titleContainer.style.display = 'block';
                } else {
                    //this._titleContainer.style.visibility = 'hidden';
                    this._titleContainer.style.display = 'none';
                }
            },
            get: function () {
                return this._titleContainer.style.visibility;
            }
        },
        enableBorder: {
            set: function (value) {
                if (!value) {
                    this._container.style.padding = '0';
                    this._container.style['border-radius'] = '0';
                    this._contentContainer.style.padding = '0';
                    this._contentContainer.style.margin = '0';

                }
            }
        },
        draggable: {
            get: function () {
                return this
                    ._container
                    .getAttribute('draggable');
            },
            set: function (value) {
                this
                    ._container
                    .setAttribute("draggable", value);
            }
        },
        theme: {
            set: function (value) {
                this.setTheme(value);
            }
        },
        title: {
            get: function () {
                return this._titleContainer.innerHTML;
            },
            set: function (value) {
                this._titleContainer.innerHTML = value;
            }
        },
        //当前面板是否可见
        visible: {
            set: function (value) {
                if (value) {
                    this._container.style.visibility = 'visible';
                } else {
                    this._container.style.visibility = 'hidden';
                }
            },
            get: function () {
                return this._container.style.visibility == 'visible'
                    ? true
                    : false;
            }
        }
    });
    return {
        'create': function (className) {
            return new Panel(className);
        }
    }
});
