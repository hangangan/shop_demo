import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
	Avatar,
	Modal,
	Alert,
	Form,
	Input,
	Radio,
	Select
} from '@arco-design/web-react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginApi, LoginParams } from '../../service/api';
import { JOBLIST } from '../../assets/const';
import styles from './index.module.scss';

const Header: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const [visible1, setVisible1] = useState(false);
	const [form] = Form.useForm<LoginParams>();
	const [form1] = Form.useForm<LoginParams>();
	const FormItem = Form.Item;
	const { isLogin } = useAppSelector((store) => store.userInfo);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const genModal = () => {
		return (
			<>
				<Modal
					title="欢迎登陆"
					visible={visible}
					onCancel={() => {
						setVisible(false);
					}}
					onOk={() => {
						loginApi(form.getFieldsValue() as LoginParams);
					}}
				>
					<Form form={form}>
						<FormItem
							label="用户名"
							field={'name'}
							rules={[{ required: true, message: '用户名必填' }]}
						>
							<Input placeholder="请输入您的账号" />
						</FormItem>
						<FormItem
							label="密码"
							field={'password'}
							rules={[{ required: true, message: '密码必填' }]}
						>
							<Input.Password placeholder="请输入您的密码" />
						</FormItem>
					</Form>
				</Modal>
				<Modal
					title="欢迎注册"
					visible={visible1}
					onCancel={() => {
						setVisible1(false);
					}}
					onOk={() => {
						form1.validate((err) => {
							console.log(form1.getFieldsError());
						});
					}}
				>
					<Form form={form1}>
						<FormItem
							label="用户名"
							field={'name'}
							rules={[{ required: true, message: '用户名必填' }]}
						>
							<Input placeholder="请输入您的账号" />
						</FormItem>
						<FormItem
							label="密码"
							field={'password'}
							rules={[{ required: true, message: '密码必填' }]}
						>
							<Input.Password placeholder="请输入您的密码" />
						</FormItem>
						<FormItem
							label="确认密码"
							field={'password1'}
							rules={[{ required: true, message: '确认密码必填' }]}
						>
							<Input.Password placeholder="请再次确认密码" />
						</FormItem>
						<FormItem
							label="年龄"
							field={'age'}
							rules={[{ required: true, message: '年龄必填' }]}
						>
							<Input.Password placeholder="请输入您的年龄" />
						</FormItem>
						<FormItem
							label="性别"
							field={'sex'}
							rules={[{ required: true, message: '性别必填' }]}
						>
							<Radio.Group options={['男', '女']}></Radio.Group>
						</FormItem>
						<FormItem
							label="职业"
							field={'job'}
							rules={[{ required: true, message: '职业必填' }]}
						>
							<Select placeholder="请选择您的职业">
								{JOBLIST.map((jobItem: string) => (
									<Select.Option key={jobItem} value={jobItem}>
										{jobItem}
									</Select.Option>
								))}
							</Select>
						</FormItem>
					</Form>
				</Modal>
			</>
		);
	};
	const handleLogin = () => {
		setVisible(true);
	};
	const handleRgt = () => {
		setVisible1(true);
	};
	return (
		<div>
			{genModal()}
			<div className={styles.Header}>
				<div className="left flexCenter">
					<img
						src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
						alt="#"
						width="154"
						height="20"
						style={{ marginRight: '30px', cursor: 'pointer' }}
						onClick={() => {
							navigate('/');
						}}
					/>
					<NavLink
						to="/home"
						className={({ isActive }) =>
							isActive ? 'navActive ' + styles.nav : styles.nav
						}
					>
						电影推荐
					</NavLink>
					<NavLink
						to="/recently"
						className={({ isActive }) =>
							isActive ? 'navActive ' + styles.nav : styles.nav
						}
					>
						最近
					</NavLink>
				</div>
				<div className="right flexCenter">
					<Avatar>
						<img
							alt="avatar"
							src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
						/>
					</Avatar>
					<NavLink
						to="/my"
						className={({ isActive }) =>
							isActive ? 'navActive ' + styles.User : styles.User
						}
					>
						游客
					</NavLink>

					<span
						className={styles.Login}
						style={{ marginLeft: '10px', fontSize: '12px' }}
						onClick={handleLogin}
					>
						登陆
					</span>
					<span
						className={styles.Login}
						style={{ marginLeft: '10px', fontSize: '12px' }}
						onClick={handleRgt}
					>
						注册
					</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
