class Vue {
    constructor(option) {

        this.$option = option
        this.$watchEvent = {}

        if (typeof option.beforeCreate == 'function') {
            option.beforeCreate.bind(this)()
        }

        //这是data
        this.$data = option.data
        this.proxyData()
        this.observe()

        if (typeof option.Create == 'function') {
            option.Create.bind(this)()
        }

        if (typeof option.beforeMount == 'function') {
            option.beforeMount.bind(this)()
        }

        //这是节点
        this.$el = document.querySelector(option.el)

        //模板解析
        this.compile(this.$el)

        if (typeof option.Mounted == 'function') {
            option.Mounted.bind(this)()
        }

    }

    //1、给Vue大对象赋值属性，来自于data中
    //2、data中的属性值和Vue大对象的属性保持双向（劫持）
    proxyData () {
        for (let key in this.$data) {
            Object.defineProperty(this, key, {
                get () {
                    return this.$data[key]
                },
                set (val) {
                    this.$data[key] = val
                }
            })
        }
    }

    //触发data中的数据发生变化来执行watch中的updata
    observe () {
        for (let key in this.$data) {
            let value = this.$data[key]
            let that = this
            Object.defineProperty(this.$data, key, {
                get () {
                    return value
                },
                set (val) {
                    value = val
                    console.log('改变了')
                    if (that.$watchEvent[key]) {
                        that.$watchEvent[key].forEach((item, index) => {
                            item.updata()
                        })
                    }
                }
            })
        }
    }

    compile (node) {
        node.childNodes.forEach((item, index) => {

            //当节点为元素节点时
            if (item.nodeType === 1) {
                console.log(item)
                //判断元素节点是否绑定了@click
                if (item.hasAttribute('@click')) {
                    let fun = item.getAttribute('@click').trim()

                    item.addEventListener('click', () => {
                        let thisFun = this.$option.methods[fun].bind(this)
                        thisFun()
                    })
                }

                //判断元素节点是否绑定了v-model属性
                if (item.hasAttribute('v-model')) {
                    let attrVal = item.getAttribute('v-model').trim()
                    if (this.hasOwnProperty(attrVal)) {

                        item.value = this[attrVal]

                        if (this.hasOwnProperty(attrVal)) {
                            //收集依赖
                            let watcher = new Watch(this, attrVal, item, 'value')
                            if (this.$watchEvent[attrVal]) {
                                this.$watchEvent[attrVal].push(watcher)
                            } else {
                                this.$watchEvent[attrVal] = []
                                this.$watchEvent[attrVal].push(watcher)
                            }
                        }

                        item.addEventListener('input', () => {
                            this[attrVal] = item.value
                        })
                    }
                }

                if (item.childNodes.length > 0) {
                    this.compile(item)
                }
            }

            //console.log(item.nodeType)
            //这是文本节点，如果有{{}}就替换成数据
            if (item.nodeType === 3) {
                //正则匹配{{}}
                let reg = /\{\{(.*?)\}\}/g
                let text = item.textContent
                //给节点赋值
                item.textContent = text.replace(reg, (match, vmkey) => {
                    vmkey = vmkey.trim()
                    if (this.hasOwnProperty(vmkey)) {

                        //收集依赖
                        let watcher = new Watch(this, vmkey, item, 'textContent')
                        if (this.$watchEvent[vmkey]) {
                            this.$watchEvent[vmkey].push(watcher)
                        } else {
                            this.$watchEvent[vmkey] = []
                            this.$watchEvent[vmkey].push(watcher)
                        }
                    }
                    return this.$data[vmkey]
                })
            }


        })
    }
}

class Watch {
    constructor(vm, key, node, attr) {
        //对象
        this.vm = vm
        //属性名称
        this.key = key
        //节点
        this.node = node
        //改变文本节点内容的字符串
        this.attr = attr
    }

    //执行改变（updata）操作
    updata () {
        this.node[this.attr] = this.vm[this.key]
    }
}
