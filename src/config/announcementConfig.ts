import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	title: "公告", // 公告标题
	content: "本博客已升级使用Astro框架，若您在使用过程中遇到任何问题，请及时联系我们。", // 公告内容
	closable: true, // 允许用户关闭公告
	link: {
		enable: true, // 启用链接
		text: "了解更多", // 链接文本
		url: "/about/", // 链接 URL
		external: false, // 内部链接
	},
};
