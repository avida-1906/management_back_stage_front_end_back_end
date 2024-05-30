export function watch_element( x?:any ){
    
    const handleResize = (ResizeObserverEntry: any) => {
        // 遍历ResizeObserverEntry数组
        for (const entry of ResizeObserverEntry) {
            if ( entry ) {
                // 元素entry对象里边有属性contentRect，该属性里边就有我们要的宽和高，解构出来
                const { width, height } = entry.contentRect;
                //获取当前浏览器的高度
                // b = window.innerHeight
                // c = window.innerWidth
                //获取当前设备的宽度和高度
                // screen_width = window.screen.width
                // screen_height = window.screen.height

                // 拿到它的宽和高之后，设置它的外边距进行微调，使它完全在页面居中
                x.style.margin = `-${height/2}px 0 0 -${width/2}px`
            }            
        }
    }
    //定义一个变量，用来接收ResizeObserver实例化之后的对象，给它一个默认值null---onMounted
    let observer: ResizeObserver | null = null;

    // 实例化ResizeObserver这个构造函数，并传一个回调函数给它
    observer = new ResizeObserver(handleResize);

    //开始监听目标元素
    observer.observe(x);

    // 取消所有对目标元素的监听
    // if ( observer === 0 ) {
    //     observer.disconnect()
    // }
}
