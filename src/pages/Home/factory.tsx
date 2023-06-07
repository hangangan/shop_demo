/**
 * 设计的设计模式1:简单工厂模式
 * 通过简单工厂选择当前所需要的饮料/配料类别，对用户而言，屏蔽掉了不同饮料/配料的差异，用户只需通过接口ProjectType、SelelctKey即可
 */

interface ProjectType {
	addPro: () => void;
	removePro: () => void;
	getPayPrice: () => number;
	getNum: () => number;
}

function Coca(): ProjectType {
	let num = 0;
	const price = 3.5;

	function addPro() {
		num++;
	}
	function removePro() {
		if (num <= 0) return;
		num--;
	}
	function getPayPrice() {
		return num * price;
	}
	function getNum() {
		return num;
	}
	return {
		addPro,
		removePro,
		getPayPrice,
		getNum
	};
}

function Coffee(): ProjectType {
	let num = 0;
	const price = 10.5;

	function addPro() {
		num++;
	}
	function removePro() {
		if (num <= 0) return;
		num--;
	}
	function getPayPrice() {
		return num * price;
	}
	function getNum() {
		return num;
	}
	return {
		addPro,
		removePro,
		getPayPrice,
		getNum
	};
}

function Milk(): ProjectType {
	let num = 0;
	const price = 1.5;

	function addPro() {
		num++;
	}
	function removePro() {
		if (num <= 0) return;
		num--;
	}
	function getPayPrice() {
		return num * price;
	}
	function getNum() {
		return num;
	}
	return {
		addPro,
		removePro,
		getPayPrice,
		getNum
	};
}

function Ice(): ProjectType {
	let num = 0;
	const price = 0.5;

	function addPro() {
		num++;
	}
	function removePro() {
		if (num <= 0) return;
		num--;
	}
	function getPayPrice() {
		return num * price;
	}
	function getNum() {
		return num;
	}
	return {
		addPro,
		removePro,
		getPayPrice,
		getNum
	};
}

type SelectKey = 'coca' | 'coffee' | 'milk' | 'ice';
export function selectProFactory(selectKey: SelectKey): ProjectType {
	switch (selectKey) {
		case 'coca':
			return Coca();
		case 'coffee':
			return Coffee();
		case 'milk':
			return Milk();
		case 'ice':
			return Ice();
		default:
			return Coca();
	}
}
