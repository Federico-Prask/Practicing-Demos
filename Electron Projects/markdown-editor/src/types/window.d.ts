// TS 要求扩展也需要作为模块加载
export {};

// 声明对全局的指定类型进行扩展
declare global {
  // interface 是 Typescript 的类型声明符
  /*
  Window 是 TS 标准库中的一个类型。具有类似如下的声明：
  interface Window {
    document: Document;
    location: Location;
    // 还有很多其他属性和方法
  }

  declare var window: Window & typeof globalThis;

  这里的属性声明方式为：
  name: class;
  就是名字与它的类型。class 部分也可以用大括号包括多个子属性。
  */
  interface Window {
    // 这个 windowControls 是我们手动新加的一个属性。
    windowControls: {
      // () 表示这是个方法，而它也说明了这个方法不含参数
      // void 说明了这个方法的（返回值）类型为 void。
      minimize: () => void;
      toggleMaximize: () => void;
      close: () => void;
    };
  }
}
