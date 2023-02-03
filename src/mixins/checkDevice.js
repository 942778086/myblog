/**
 * 此mixin用于检查是否为mobile
 */
export const deviceMixin = {
    data() {
        return {
            isPhone: false
        }
    },
    created() {
        this.isPhone = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    }
}