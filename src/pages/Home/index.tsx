import React, { useEffect, useState } from 'react';
import { Button, Image, Message } from '@arco-design/web-react';
import machineImg from '../../assets/imgs/97cfbe9b-3c67-47cb-ab26-69356ee02ae0.png';
import cocaImg from '../../assets/imgs/b8817722-f129-4764-8620-11c4da11414d.png';
import coffeeImg from '../../assets/imgs/b9564324-c938-4641-a9de-4163e96cb32b.png';
import milkImg from '../../assets/imgs/b005301a-604c-4370-85be-3918be9c6e91.png';
import IceImg from '../../assets/imgs/0c1d53cc-672a-4a49-a41f-157492239bd6.png';
import billImg from '../../assets/imgs/8c7289b5-54d3-481e-805c-d6a3a0234b22.png';
import buyImg from '../../assets/imgs/2b58132c-6b58-48e7-8e2d-d1d3fd2f06cb.png';
import styles from './index.module.scss';
import { selectProFactory } from './factory';
import { newsCenter } from './pubsub';

const cocaPro = selectProFactory('coca');
const coffeePro = selectProFactory('coffee');
const milkPro = selectProFactory('milk');
const icePro = selectProFactory('ice');

const keyMap = {
	Coca: cocaPro,
	Coffee: coffeePro,
	Milk: milkPro,
	Ice: icePro
};
export type keyType = 'Coca' | 'Coffee' | 'Ice' | 'Milk';
const Home: React.FC = () => {
	const getStateFac = (key: keyType) => {
		const curPro = keyMap[key];
		return {
			num: curPro.getNum(),
			price: curPro.getPayPrice()
		};
	};
	const [cocaState, setCocaState] = useState(getStateFac('Coca'));
	const [coffeeState, setCoffeState] = useState(getStateFac('Coffee'));
	const [milkState, setMilkState] = useState(getStateFac('Milk'));
	const [iceState, setIceState] = useState(getStateFac('Ice'));
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const cocaAction = () => {
			setCocaState(getStateFac('Coca'));
		};
		const coffeeAction = () => {
			setCoffeState(getStateFac('Coffee'));
		};
		const milkAction = () => {
			setMilkState(getStateFac('Milk'));
		};
		const iceAction = () => {
			setIceState(getStateFac('Ice'));
		};
		// 订阅事件
		newsCenter.addAction('Coca', cocaAction);
		newsCenter.addAction('Coffee', coffeeAction);
		newsCenter.addAction('Milk', milkAction);
		newsCenter.addAction('Ice', iceAction);
		return () => {
			// 取消订阅事件
			newsCenter.removeAction('Coca', cocaAction);
			newsCenter.removeAction('Coffee', coffeeAction);
			newsCenter.removeAction('Milk', milkAction);
			newsCenter.removeAction('Ice', iceAction);
		};
	}, []);

	const getNEle = (n: number, ele: any, width = 50, height = 80) => {
		const elements = [];
		for (let i = 0; i < n; i++) {
			elements.push(
				<Image
					preview={false}
					src={ele}
					width={width}
					height={height}
					style={{ padding: '10px', paddingLeft: '0' }}
				/>
			);
		}
		return elements;
	};

	const getProEle = (key: keyType) => {
		const imgMap = {
			Coca: cocaImg,
			Coffee: coffeeImg,
			Milk: milkImg,
			Ice: IceImg
		};
		const curPro = keyMap[key];
		const curImg = imgMap[key];
		return (
			<>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div>{getNEle(8, curImg)}</div>
					<div style={{ width: '80px' }}>
						<Button
							style={{ width: '80px', marginBottom: '8px' }}
							onClick={() => {
								if (
									(key === 'Coca' &&
										(coffeeState.num > 0 || cocaState.num > 0)) ||
									(key === 'Coffee' &&
										(coffeeState.num > 0 || cocaState.num > 0))
								) {
									Message.error('售货机一次仅能制作一份饮料！');
									return;
								}
								curPro.addPro();
								Message.info(
									`购买成功！当前购买${key}共${curPro.getNum()}件，总计购买${key}共${curPro.getPayPrice()}元。`
								);
								// 发布事件
								newsCenter.triggerAction(key);
							}}
						>
							+ {key}
						</Button>
						<Button
							style={{ width: '80px' }}
							onClick={() => {
								curPro.removePro();
								Message.info(
									`取消购买成功！当前购买${key}共${curPro.getNum()}件，总计购买${key}共${curPro.getPayPrice()}元。`
								);
								// 发布事件
								newsCenter.triggerAction(key);
							}}
						>
							- {key}
						</Button>
					</div>
				</div>
				<div className={styles.divider}></div>
			</>
		);
	};

	const getProsEle = () => {
		const coca = getProEle('Coca');
		const coffee = getProEle('Coffee');
		const milk = getProEle('Milk');
		const ice = getProEle('Ice');
		return [coca, coffee, milk, ice];
	};

	const getBillItem = (key: keyType) => {
		const stateMap = {
			Coca: cocaState,
			Coffee: coffeeState,
			Milk: milkState,
			Ice: iceState
		};
		const curState = stateMap[key];
		return (
			<div
				className="flexCenter"
				style={{ justifyContent: 'space-around', width: '230px' }}
			>
				<span>{key}</span>
				<span>{curState.num}件</span>
				<span>{curState.price}元</span>
			</div>
		);
	};
	const getTotalNum = () => {
		return (
			cocaPro.getNum() + coffeePro.getNum() + milkPro.getNum() + icePro.getNum()
		);
	};
	const getTotaPrice = () => {
		return (
			cocaPro.getPayPrice() +
			coffeePro.getPayPrice() +
			milkPro.getPayPrice() +
			icePro.getPayPrice()
		);
	};
	/**
	 * 涉及的设计模式2：门面模式
	 * 先获取商品a的UI，再获取商品b的UI...,此处通过门面模式向调用者屏蔽了整个商品账单UI以及汇总UI的创建流程
	 */
	const getBillEle = () => {
		const coca = getBillItem('Coca');
		const coffee = getBillItem('Coffee');
		const milk = getBillItem('Milk');
		const ice = getBillItem('Ice');
		const total = (
			<div
				className="flexCenter"
				style={{ justifyContent: 'space-around', width: '230px' }}
			>
				<span>总计</span>
				<span>{getTotalNum()}件</span>
				<span>{getTotaPrice()}元</span>
			</div>
		);
		return [coca, coffee, milk, ice, visible ? total : ''];
	};

	return (
		<div className={styles.Content}>
			<Image src={machineImg} height={560} />
			<div className={styles.projects}>
				<div>{getProsEle()}</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						position: 'relative'
					}}
				>
					<Image
						preview={false}
						src={billImg}
						width="300px"
						height="500px"
						style={{ padding: '10px' }}
					/>
					<div className={styles.billText}>{getBillEle()}</div>
					<Image
						preview={false}
						src={buyImg}
						width="200px"
						height="50px"
						className={styles.buyImg}
						onClick={() => {
							Message.info('购买成功，请在账单中进行确认！');
							setVisible(true);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
