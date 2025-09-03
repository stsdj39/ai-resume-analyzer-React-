import { title } from 'process';
import React from 'react'
export const meta: () => { title: string; name: string; content: string }[] = () => {
    [
        { title: "Resumind | Auth" },
        { name: "description", content: "Login or Signup to Resumind" },
    ]
}
const auth = () => {
    return (
        // main 标签
        // <main> 标签用于呈现文档的主要内容
        // 一个页面中应该只有一个 main 标签
        // 主要内容应该是当前文档独有的内容，不包括在多个文档中重复的内容（如导航栏、页脚等）
        // section 标签
        // <section> 标签表示文档中的一个独立部分
        // 通常包含一个标题（heading）
        // 用于将相关内容组织在一起
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-centers justify-center">
            <div className='gradient-border shadow-lg'>
                <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
                    <div className='flex flex-col items-center gap-2 text-center'>
                        <h1>Welcome</h1>
                        <h2>Log In to Continue Your Job</h2>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default auth