import axios, {
	AxiosInstance,
	InternalAxiosRequestConfig,
	AxiosResponse
} from 'axios';
import { BASE_URL } from '../assets/const';
import qs from 'qs';

// 返回res.data的interface
export interface IResponse {
	code: number | string;
	data: any;
	msg: string;
}

const axiosInstance: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	transformRequest: [
		function (data) {
			//由于使用的 form-data传数据所以要格式化
			delete data.Authorization;
			data = qs.stringify(data);
			return data;
		}
	]
});

// axios实例拦截响应
axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => {
		if (response.headers.authorization) {
			localStorage.setItem('app_token', response.headers.authorization);
		} else {
			if (response.data && response.data.token) {
				localStorage.setItem('app_token', response.data.token);
			}
		}

		if (response.status === 200) {
			return response;
		} else {
			return response;
		}
	},
	// 请求失败
	(error: any) => {
		const { response } = error;
		if (response) {
			// 请求已发出，但是不在2xx的范围
			return Promise.reject(response.data);
		} else {
			console.error('网络连接异常,请稍后再试!');
		}
	}
);

// axios实例拦截请求
axiosInstance.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const token = localStorage.getItem('app_token');
		if (token && config.headers) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error: any) => {
		return Promise.reject(error);
	}
);

export default axiosInstance;

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const Login = (params: any): Promise<IResponse> => {
	return axiosInstance.post('user/login', params).then((res) => res.data);
};

/**
 * @description: 通过id获取用户
 * @params {IUser} params
 * @return {Promise}
 */
export const getUserInfo = (params: any): Promise<IResponse> => {
	return axiosInstance.post('user/getInfo', params).then((res) => res.data);
};
