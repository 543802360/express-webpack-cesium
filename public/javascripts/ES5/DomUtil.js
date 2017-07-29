/**
 * dom操作类
 */
define(function () {

    /**
     * 构造函数
     * @constructor
     */
    function DomUtil() {

    }

    /**
     * 根据id获取元素
     * @param id
     * @returns {HTMLElement}
     */
    DomUtil.prototype.get = function (id) {
        return typeof id === 'string' ? document.getElementById(id) : id;
    };

    /**
     * 创建新元素
     * @param tagName:标签名称
     * @param className：类名称
     * @param container：父容器
     * @returns {HTMLElement}
     */
    DomUtil.prototype.create = function (tagName, className, container, id) {
        var el = document.createElement(tagName);
        el.className = className;
        if (id) {
            el.id = id;
        }
        if (container) {
            container.appendChild(el);
        }
        return el;
    };

    /***
     * 移除元素
     * @param el
     */
    DomUtil.prototype.remove = function (el) {
        var parent = el.parentNode;
        if (parent) {
            parent.removeChild(el);
        }
    };

    /**
     * 设置DOM元素单个样式
     * @param container
     * @param property
     * @param value
     */
    DomUtil.prototype.setSingleStyle = function (container, property, value) {
        container.style[property] = value;
    };

    /**
     * 设置DOM元素样式
     * @param container
     * @param properties
     */
    DomUtil.prototype.setStyle = function (container, properties) {
        for (var property in properties) {
            container.style[property] = properties[property];
        }
    };

    /**
     * 为元素添加类
     * @param selector
     * @param name
     */
    DomUtil.prototype.addClass = function (container, name) {
        container.classList.add(name);
        return container;
    };

    /**
     * 从元素中移除类
     * @param selector
     * @param name
     */
    DomUtil.prototype.removeClass = function (selector, name) {

    };

    /**
     * 获取Dom元素Class
     * @param el
     * @returns {*}
     */
    DomUtil.prototype.getClass = function (el) {
        return el.className.baseVal === undefined ? el.className : el.className.baseVal;
    };

    return new DomUtil();
});