new Vue({
	el: '#app',
	data: {
		title: '',
		boxShow: false,
		imgArr: [
			'../img/img5.jpg',
			'../img/img2.jpg',
			'../img/img3.jpg',
			'../img/img4.jpg',
		],
		imgSrc: '../img/img1.jpg',
		imgIdx: 0,
	},
	methods: {
		onBtnClick(e) {
			this.boxShow = !this.boxShow; // this를 안써주면 onBtnClick가 디스가 됨. 써줬기때문에 new Vue()가 this 다
		},
		onImgClick(e) {
			this.imgIdx = (this.imgArr.length - 1 == this.imgIdx) ? 0 : this.imgIdx + 1; // 마지막에 와있ㅅ니? 그럼 0으로. 아니면 +1을 더해줘.
			this.imgSrc = this.imgArr[this.imgIdx];
		}
	}
});