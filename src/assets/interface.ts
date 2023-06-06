export interface UserItem {
	id?: number | string;
	name: string;
	password?: string;
	sex?: '男' | '女' | '保密';
	age?: string;
	isLogin: boolean;
}
