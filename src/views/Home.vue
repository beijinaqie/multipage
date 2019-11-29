<template>
	<div id="pc">
		<v-header></v-header>
		<swiper class="content" :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide>
				<div id="page1">
					<div class="page1_content">
						<!-- <p><img src="@/assets/img/webimg/banner_dccy.png" alt=""></p> -->
						<p>打造去中心化金融解决方案  </p>
						<a class="activity">市场活动</a>
						<div class="page1_list">
							<div class="list list1">
								<div class="hide">
									开发者>
								</div>
								<div class="show">
									<p>开发者</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div id="page2">
					<vContract></vContract>
				</div>
			</swiper-slide>
			<swiper-slide>
				333
			</swiper-slide>
			<!-- Optional controls -->
			<!-- <div class="swiper-pagination"  slot="pagination"></div> -->
			<!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
			<!-- <div class="swiper-button-next" slot="button-next"></div> -->
			<!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
		</swiper>
		<vFooter></vFooter>
	</div>
</template>

<script>
import VHeader from '@/components/componentsWeb/Header.vue'
import VFooter from '@/components/componentsWeb/Footer.vue'
import VContract from '@/components/componentsWeb/Contract.vue'
export default {
	components: {
		VHeader,
		VFooter,
		VContract
	},
	data () {
		let that = this;
		return {
			// swiper 索引
			swiperIndex: 0,
			// 所有的参数同 swiper 官方 api 参数
			swiperOption: {
				//是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，
				//也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
				notNextTick: true,
				//设定初始化时slide的索引
				initialSlide: 0,
				//分页器设置
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
					type: "progressbar"
				},
				// 设置轮播切换效果 slide, cube, coverflow, flip, fade(有问题，慎用)
				effect: "slide",
				//循环
				loop: false,
				//自动播放
				// autoplay: {
				//   delay: 1500,
				//   stopOnLastSlide: false,
				//   /* 触摸滑动后是否继续轮播 */
				//   disableOnInteraction: false
				// },
				//滑动速度
				speed: 1000,
				on: {
					//滑动之后回调函数
					slideChange: function() {
						// console.log(this.activeIndex)
						/* activeIndex为滚动到当前的slide索引值 */
						that.swiperIndex = this.activeIndex;
					}
				},
				//左右点击
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				//小手掌抓取滑动
				grabCursor: true,
				//滑动方向 horizontal(水平) vertical(竖直)
				direction: "vertical",
			}
		}
	},
	computed: {
		//获取swiper实例
		swiper() {
			return this.$refs.mySwiper.swiper;
		}
	},
	methods: {
		//获取菜单点击的swiper索引
		changeSwiperIndex(index) {
			this.swiper.slideTo(index, 1000, false);
		}
	}
}
</script>
<style lang="scss">
@import '@/assets/css/common/common.scss';
@import '@/assets/css/home/home.scss';
#pc {
	width: 100%;
	height: 100%;
	.content {
		width: 100%;
		height: 100%;
	}
}
#Hope {
  width: 100%;
  height: 100%;
}
#page1 {
  background: url('~@/assets/img/webimg/bg1.png') no-repeat center;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
#page2 {
  background: url('~@/assets/img/webimg/banner_2.png') no-repeat center;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.list {
  background: url('~@/assets/img/webimg/page1_1.png') no-repeat center;
}
</style>
