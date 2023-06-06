import { type } from 'os';
import axiosInstance from './request';

// 登陆
export interface LoginParams {
	name: string;
	password: string;
}
export const loginApi = (params: LoginParams) => {
	return new Promise((resolve) => {
		resolve('登陆成功！');
	});
};

// 获取用户基本信息
export interface userInfo {
	name: string;
	sex: '男' | '女' | '保密';
	birthday: string;
	like: string[]; //用户喜欢的电影类型
}
export const getUserInfoApi = () => {
	return new Promise((resolve) => {
		resolve('获取用户信息成功！');
	});
};

// 更新用户基本信息
export interface setUserIndfoParams {
	name?: string;
	sex?: '男' | '女' | '保密';
	birthday?: string;
	like?: string[]; //用户喜欢的电影类型
}
export const setUserInfoApi = (params: setUserIndfoParams) => {
	return new Promise((resolve) => {
		resolve('更新用户信息成功！');
	});
};

// 获取所有的电影类型
export interface movieItem {
	title: string;
	class: string[];
	desc: string;
	star: number;
	userStar: number;
}
export const getMovieClassesApi = () => {
	return new Promise((resolve) => {
		resolve('获取信息成功！');
	});
};

// 获取推荐列表
export interface GetRcmdMovieParams {
	id: string | number;
}
export const getRcmdMovieListApi = (params: GetRcmdMovieParams) => {
	return new Promise((resolve) => {
		resolve('获取信息成功！');
	});
};

//用户点赞
export interface StarMovieParams {
	movieId: string | number;
	score: number;
}
export const starMovieApi = (params: StarMovieParams) => {
	return new Promise((resolve) => {
		resolve('点赞成功！');
	});
};
