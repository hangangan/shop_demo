import { keyType } from './index';

/**
 * 涉及的设计模式3：发布订阅模式
 * 通过消息中心统一订阅和发布消息
 */
export const newsCenter = (() => {
	const actions = new Map();

	const addAction = (key: keyType, action: any) => {
		if (actions.has(key)) {
			actions.set(key, [...actions.get(key), action]);
		} else {
			actions.set(key, [action]);
		}
	};
	const removeAction = (key: keyType, action: any) => {
		if (actions.has(key)) {
			actions.set(
				key,
				actions.get(key).filter((item: any) => item !== action)
			);
		}
	};
	const triggerAction = (key: keyType, params?: any) => {
		if (actions.has(key)) {
			actions.get(key).forEach((item: any) => {
				if (typeof item === 'function') {
					item(params);
				}
			});
		}
	};
	return {
		addAction,
		removeAction,
		triggerAction
	};
})();
