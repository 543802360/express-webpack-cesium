/**
 * Dom操作类
 */
class DomUtil {
    constructor() {

        }
        /**
         *根据id获取元素
         * @param {*} id 
         */
    get(id) {
            return typeof id === 'string' ? document.getElementById(id) : id;

        }
        /**
         * 创建新元素
         * @param tagName:标签名称
         * @param className：类名称
         * @param container：父容器
         * @param id:id
         * @returns {HTMLElement}
         */
    create(tagName, className, container, id) {
            let el = document.createElement(tagName);
            el.className = className;
            if (id) {
                el.id = id;
            }
            if (container) {
                container.appendChild(el);
            }
            return el;
        }
        /**
         * 
         * @param {*} el 
         */
    remove(el) {
            let parent = el.parentNode;
            if (parent) {
                parent.removeChild(el);
            }
        }
        /**
         * 设置Dom元素样式（多个）
         * @param {*} container 
         * @param {*} properties 
         */
    setStyle(container, properties) {
            for (let property in properties) {
                container.style[property] = properties[property];
            }
        }
        /**
         * 
         * @param {*} container 
         * @param {*} property 
         * @param {*} value 
         */
    setSingleStyle(container, property, value) {
        container.style[property] = value;

    }
    addClass(container, name) {
        container.classList.add(name);
    }
    getClass(el) {
        return el.className.baseVal === undefined ? el.className : el.className.baseVal;

    }
}

export default new DomUtil();