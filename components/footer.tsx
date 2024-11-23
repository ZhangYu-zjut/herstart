import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* 联系方式和二维码 */}
        <div className="max-w-3xl mx-auto pb-8 border-b">
          <div className="text-center space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">联系我们</h3>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:597660653@qq.com" className="hover:text-pink-500 transition-colors">
                    597660653@qq.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>QQ: 597660653</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">关注我们</h3>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="bg-white p-2 rounded-lg shadow-sm overflow-hidden">
                    <img
                      src="/qr_person.png"
                      alt="微信号"
                      className="w-28 h-28 object-cover"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-2 block">微信号</span>
                </div>
                <div className="text-center">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <img
                      src="/qr_group_11_30.png"
                      alt="意见反馈"
                      className="w-28 h-28"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-2 block">意见反馈</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 关于我们和版权信息 */}
        <div className="mt-8 text-center space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">关于我们</h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              她的导航致力于为都市女性打造一站式导航平台，涵盖购物、美妆、健康、职场等多个领域的精选网站，
              让每一位都市女性都能便捷地找到所需的优质资源。
            </p>
          </div>
          
          <div className="pt-4 text-sm text-muted-foreground">
            <p>© 2024 她的导航. 保留所有权利.</p>
            <p className="mt-2">
              本站数据来源于公开网络，如有内容侵权请联系我们删除.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}