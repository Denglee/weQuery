<template>
	<div>
		<!--<iframe src="http://www.jierong123.com/dist/other/creditAddress.html"
				  frameborder="0" style="display: block;height: 100vh;width: 100%;"></iframe>-->
		<div id="addlist">
			
			
			<div class="block" v-for="(item,i) in bankdata">
				<div class="itemcl">
					<div class="result_list" data-lng='" + bankdata[i]["longitude"] + "'
					     data-lat='" + bankdata[i]["latitude"] + "'>
						<div class="item_div">
							<div class="logo">
								<img src=' "http://file.jingyanit.com/loanlogo/" + bankdata[i][logo] + '></div>
							<div class="list_info">
								<p>{{ item.bankname }}</p>
								<!--                                <div>-->
								<!--                                    <span>{{bankdata[i]["address"]}}</span>-->
								<!--                                    <span style='font-size: 12px;'>{{bankdata[i]["phone"]}}</span>-->
								<!--                                </div>-->
							</div>
							<!--                            <div class='daohang' data-bankname='" + bankdata[i]["bankname"] + "' data-lng='" + bankdata[i]["longitude"] + "'-->
							<!--                                 data-lat='" + bankdata[i]["latitude"] + "' data-address='" + bankdata[i]["address"] + "' >-->
							<!--                                <i class='fa fa-paper-plane-o'></i>&nbsp;导航-->
							<!--                            </div>-->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "address",
	data() {
		return {
			bankdata: [
				{
					"bkn": "建设银行-英龙支行",
					"bankname": "建设银行-英龙支行（自助查询机）",
					"address": "深圳市福田区车公庙英龙大厦首层",
					"phone": "0755-83479481",
					"longitude": "22.534844",
					"latitude": "114.022569",
					"logo": "jsyh.png"
				},
				{
					"bkn": "招商银行-罗湖中心",
					"bankname": "招商银行-罗湖中心（自助查询机）",
					"address": "深圳市福田区深南中路1002新闻大厦一楼",
					"phone": "0755-82098610",
					"longitude": "22.541219",
					"latitude": "114.102675",
					"logo": "zsyh.png"
				},
				{
					"bkn": "建设银行-光明支行",
					"bankname": "建设银行-光明支行（自助查询机）",
					"address": "深圳市光明新区光明新地中央办公楼01号",
					"phone": "0755-27405118",
					"longitude": "22.761283",
					"latitude": "113.942775",
					"logo": "jsyh.png"
				},
				{
					"bkn": "珠江村镇银行",
					"bankname": "珠江村镇银行（自助查询机）",
					"address": "深圳市坪山区坪山街道六和商业广场一期165号",
					"phone": "0755-32833071",
					"longitude": "22.693634",
					"latitude": "114.339012",
					"logo": "zjcz.png"
				},
				{
					"bkn": "建设银行-民治支行",
					"bankname": "建设银行-民治支行（自助查询机）",
					"address": "深圳市龙华新区民治大道58号恒勤大厦一楼",
					"phone": "0755-29439266",
					"longitude": "22.610869",
					"latitude": "114.044656",
					"logo": "jsyh.png"
				},
				{
					"bkn": "招商银行",
					"bankname": "招商银行（柜台查询/自助查询机）",
					"address": "深圳市宝安区九区宝民一路广场大厦6楼601号",
					"phone": "0755-27875080",
					"longitude": "22.56333",
					"latitude": "113.900986",
					"logo": "zsyh.png"
				},
				{
					"bkn": "建设银行-吉华支行",
					"bankname": "建设银行-吉华支行（自助查询机）",
					"address": "深圳市龙岗区布吉街道中心花园商铺1楼",
					"phone": "0755-84275123",
					"longitude": "22.608747",
					"latitude": "114.130341",
					"logo": "jsyh.png"
				},
				{
					"bkn": "招商银行",
					"bankname": "招商银行（柜台查询/自助查询机）",
					"address": "深圳市龙岗区天安数码创业园三期二单元首层",
					"phone": "0755-28452668",
					"longitude": "22.722964",
					"latitude": "114.217589",
					"logo": "zsyh.png"
				},
				{
					"bkn": "建设银行-盐田支行",
					"bankname": "建设银行-盐田支行（自助查询机）",
					"address": "深圳市盐田区深盐路壹海城一楼",
					"phone": "0755-25360662",
					"longitude": "22.554524",
					"latitude": "114.237322",
					"logo": "jsyh.png"
				},
				{
					"bkn": "建设银行-华侨城支行",
					"bankname": "建设银行-华侨城支行（自助查询机）",
					"address": "深圳市南山区华侨城湖滨花园裙楼建行",
					"phone": "0755-26606412",
					"longitude": "22.536049",
					"latitude": "113.98468",
					"logo": "jsyh.png"
				},
				{
					"bkn": "建设银行-蛇口支行",
					"bankname": "建设银行-蛇口支行（自助查询机）",
					"address": "深圳市南山区蛇口太子路18号海景广场一楼",
					"phone": "0755-26826276",
					"longitude": "22.483244",
					"latitude": "113.914485",
					"logo": "jsyh.png"
				},
				{
					"bkn": "招商银行",
					"bankname": "招商银行（柜台查询/自助查询机）",
					"address": "深圳市南山区高新南七道德维森大厦一楼",
					"phone": "0755-26695077",
					"longitude": "22.534117",
					"latitude": "113.946638",
					"logo": "zsyh.png"
				},
				{
					"bkn": "江苏银行-福田支行",
					"bankname": "江苏银行-福田支行（自助查询机）",
					"address": "深圳市福田区深南大道4011号港中旅大厦首层",
					"phone": "0755-22660721",
					"longitude": "22.538692",
					"latitude": "114.055634",
					"logo": "jsyh2.png"
				},
				{
					"bkn": "招商银行",
					"bankname": "招商银行（柜台查询/自助查询机）",
					"address": "深圳市福田区金田路3038号现代国际大厦1A",
					"phone": "0755-83663163",
					"longitude": "22.534241",
					"latitude": "114.06374",
					"logo": "zsyh.png"
				},
				{
					"bkn": "江苏银行-罗湖支行",
					"bankname": "江苏银行-罗湖支行（自助查询机）",
					"address": "深圳市罗湖区红宝路京基一百D栋金龙大厦一层",
					"phone": "0755-22915150",
					"longitude": "22.545201",
					"latitude": "114.107026",
					"logo": "jsyh2.png"
				},
				
				{
					"bkn": "深圳农村商业银行",
					"bankname": "深圳农村商业银行-营业部",
					"address": "深圳市罗湖区深南东路3038号合作金融大厦一层",
					"phone": "0755-25473807",
					"longitude": "22.543477",
					"latitude": "114.117408",
					"logo": "szncsyyh.png"
				},
				{
					"bkn": "中信银行-罗湖支行",
					"bankname": "中信银行-罗湖支行",
					"address": "深圳市罗湖区南湖路兴隆大厦首层",
					"phone": "0755-25186163",
					"longitude": "22.542619",
					"latitude": "114.119933",
					"logo": "zxyy.png"
				},
				{
					"bkn": "民生银行",
					"bankname": "民生银行-分行营业部",
					"address": "深圳市罗湖区南湖路兴隆大厦首层",
					"phone": "0755-82806340",
					"longitude": "22.542438",
					"latitude": "114.065143",
					"logo": "zgmsyy.png"
				},
				{
					"bkn": "中信银行",
					"bankname": "中信银行-分行营业部",
					"address": "深圳市福田区中心三路8号卓越时代广场二期北座",
					"phone": "0755-23610522",
					"longitude": "22.534121",
					"latitude": "114.057131",
					"logo": "zxyy.png"
				},
				{
					"bkn": "交通银行",
					"bankname": "交通银行-分行营业部",
					"address": "深圳市福田区深南中路世纪汇一楼",
					"phone": "0755-88020813",
					"longitude": "22.540916",
					"latitude": "114.083884",
					"logo": "zgjtyy.png"
				},
				{
					"bkn": "光大银行",
					"bankname": "光大银行-分行营业部",
					"address": "深圳市福田区竹子林思路紫竹七道18号光大大厦",
					"phone": "0755-88337039",
					"longitude": "22.534331",
					"latitude": "114.008348",
					"logo": "zggdyy.png"
				},
				{
					"bkn": "建设银行",
					"bankname": "建设银行-住房城市建设支行",
					"address": "深圳市福田区红岭中路银荔大厦一楼建行",
					"phone": "0755-25950825",
					"longitude": "22.547862",
					"latitude": "114.104144",
					"logo": "jsyh.png"
				},
				{
					"bkn": "珠海华润银行",
					"bankname": "珠海华润银行-华润城支行",
					"address": "深圳市南山区大冲商务中心C座101、102",
					"phone": "0755-86565867",
					"longitude": "22.541066",
					"latitude": "113.952959",
					"logo": "zghryy.png"
				},
				{
					"bkn": "邮政储蓄银行",
					"bankname": "邮政储蓄银行-西丽支行",
					"address": "深圳市南山区西丽南路47号一楼",
					"phone": "0755-86113873",
					"longitude": "22.575143",
					"latitude": "113.95298",
					"logo": "zgyzcxyy.png"
				},
				{
					"bkn": "兴业银行-宝安支行",
					"bankname": "兴业银行-宝安支行",
					"address": "深圳市宝安区裕安一路尚都花园2栋173-178号",
					"phone": "0755-29665617",
					"longitude": "22.559907",
					"latitude": "113.887273",
					"logo": "xyyy.png"
				},
				{
					"bkn": "中国银行-宝安支行",
					"bankname": "中国银行-宝安支行营业部",
					"address": "深圳市宝安中心区宝兴路21号万骏经贸大厦首层",
					"phone": "0755-22336882",
					"longitude": "22.549325",
					"latitude": "113.880493",
					"logo": "zgyy.png"
				},
				{
					"bkn": "中国银行-福永支行",
					"bankname": "中国银行-福永支行营业部",
					"address": "深圳市福永大道9号",
					"phone": "0755-22335037",
					"longitude": "22.671823",
					"latitude": "113.825364",
					"logo": "zgyy.png"
				},
				{
					"bkn": "江苏银行-沙井支行",
					"bankname": "江苏银行-沙井支行",
					"address": "深圳市宝安区沙井街道宝安大道鸿荣源禧园2栋",
					"phone": "0755-23299107",
					"longitude": "22.731328",
					"latitude": "113.825247",
					"logo": "jsyh2.png"
				},
				{
					"bkn": "民生银行-龙岗支行",
					"bankname": "民生银行-龙岗支行",
					"address": "深圳市龙岗区中心城俪景中心首层",
					"phone": "0755-28920561",
					"longitude": "22.712308",
					"latitude": "114.240785",
					"logo": "zgmsyy.png"
				},
				{
					"bkn": "民生银行-龙华支行",
					"bankname": "民生银行-龙华支行",
					"address": "深圳市龙华区梅龙路民治世纪春城四期首层",
					"phone": "0755-23070419",
					"longitude": "22.627663",
					"latitude": "114.031351",
					"logo": "zgmsyy.png"
				},
				{
					"bkn": "中国银行-东部支行",
					"bankname": "中国银行-东部支行营业部",
					"address": "深圳市沙头角公园路59号天富花园大厦首层",
					"phone": "0755-22330326",
					"longitude": "22.548891",
					"latitude": "114.231561",
					"logo": "zgyy.png"
				},
				{
					"bkn": "中国人民银行",
					"bankname": "中国人民银行",
					"address": "深圳市深南东路5006号人民银行大厦南楼二楼",
					"phone": "0755-25590240-183",
					"longitude": "22.542422",
					"latitude": "114.107471",
					"logo": "zgrmyy.png"
				}
			]
		};
	},
	methods: {
		init() {
			let bankdata = this.bankdata;
			var map = new AMap.Map("container", {
				resizeEnable: true,
				center: [114.056489, 22.564602],
				zoom: 11
			});
			
			var marker = new AMap.Marker({
				position: [bankdata[i]["latitude"], bankdata[i]["longitude"]],
				icon: "https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
				offset: new AMap.Pixel(0, 0)
			});
			
			// 设置鼠标划过点标记显示的文字提示
			marker.setTitle(bankdata[i]["bkn"]);
			// 设置label标签
			// label默认蓝框白底左上角显示，样式className为：amap-marker-label
			marker.setLabel({
				offset: new AMap.Pixel(-80, -28),  //设置文本标注偏移量
				content: "<div class='info' style='width:130px;text-align:center; padding:5px;'>" + bankdata[i]["bkn"] + "</div>", //设置文本标注内容
				direction: "right" //设置文本标注方位
			});
			map.add(marker);
		}
	},
	created() {
	
	}
};
</script>

<style>
.amap-indoor-map .label-canvas {
	position: absolute;
	top: 0;
	left: 0
}

.amap-indoor-map .highlight-image-con * {
	pointer-events: none
}

.amap-indoormap-floorbar-control {
	position: absolute;
	margin: auto 0;
	bottom: 165px;
	right: 12px;
	width: 35px;
	text-align: center;
	line-height: 1.3em;
	overflow: hidden;
	padding: 0 2px
}

.amap-indoormap-floorbar-control .panel-box {
	background-color: rgba(255, 255, 255, .9);
	border-radius: 3px;
	border: 1px solid #ccc
}

.amap-indoormap-floorbar-control .select-dock {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	box-sizing: border-box;
	height: 30px;
	border: solid #4196ff;
	border-width: 0 2px;
	border-radius: 2px;
	pointer-events: none;
	background: linear-gradient(to bottom, #f6f8f9 0, #e5ebee 50%, #d7dee3 51%, #f5f7f9 100%)
}

.amap-indoor-map .transition {
	transition: opacity .2s
}

.amap-indoormap-floorbar-control .transition {
	transition: top .2s, margin-top .2s
}

.amap-indoormap-floorbar-control .select-dock:after, .amap-indoormap-floorbar-control .select-dock:before {
	content: "";
	position: absolute;
	width: 0;
	height: 0;
	left: 0;
	top: 10px;
	border: solid transparent;
	border-width: 4px;
	border-left-color: #4196ff
}

.amap-indoormap-floorbar-control .select-dock:after {
	right: 0;
	left: auto;
	border-left-color: transparent;
	border-right-color: #4196ff
}

.amap-indoormap-floorbar-control.is-mobile {
	width: 37px
}

.amap-indoormap-floorbar-control.is-mobile .floor-btn {
	height: 35px;
	line-height: 35px
}

.amap-indoormap-floorbar-control.is-mobile .select-dock {
	height: 35px;
	top: 36px
}

.amap-indoormap-floorbar-control.is-mobile .select-dock:after, .amap-indoormap-floorbar-control.is-mobile .select-dock:before {
	top: 13px
}

.amap-indoormap-floorbar-control.is-mobile .floor-list-box {
	height: 105px
}

.amap-indoormap-floorbar-control .floor-list-item .floor-btn {
	color: #555;
	font-family: "Times New Roman", sans-serif, "Microsoft Yahei";
	font-size: 16px
}

.amap-indoormap-floorbar-control .floor-list-item.selected .floor-btn {
	color: #000
}

.amap-indoormap-floorbar-control .floor-btn {
	height: 28px;
	line-height: 28px;
	overflow: hidden;
	cursor: pointer;
	position: relative;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.amap-indoormap-floorbar-control .floor-btn:hover {
	background-color: rgba(221, 221, 221, .4)
}

.amap-indoormap-floorbar-control .floor-minus, .amap-indoormap-floorbar-control .floor-plus {
	position: relative;
	text-indent: -1000em
}

.amap-indoormap-floorbar-control .floor-minus:after, .amap-indoormap-floorbar-control .floor-plus:after {
	content: "";
	position: absolute;
	margin: auto;
	top: 9px;
	left: 0;
	right: 0;
	width: 0;
	height: 0;
	border: solid transparent;
	border-width: 10px 8px;
	border-top-color: #777
}

.amap-indoormap-floorbar-control .floor-minus.disabled, .amap-indoormap-floorbar-control .floor-plus.disabled {
	opacity: .3
}

.amap-indoormap-floorbar-control .floor-plus:after {
	border-bottom-color: #777;
	border-top-color: transparent;
	top: -3px
}

.amap-indoormap-floorbar-control .floor-list-box {
	max-height: 153px;
	position: relative;
	overflow-y: hidden
}

.amap-indoormap-floorbar-control .floor-list {
	margin: 0;
	padding: 0;
	list-style: none
}

.amap-indoormap-floorbar-control .floor-list-item {
	position: relative
}

.amap-indoormap-floorbar-control .floor-btn.disabled, .amap-indoormap-floorbar-control .floor-btn.disabled *, .amap-indoormap-floorbar-control.with-indrm-loader * {
	-webkit-pointer-events: none !important;
	pointer-events: none !important
}

.amap-indoormap-floorbar-control .with-indrm-loader .floor-nonas {
	opacity: .5
}

.amap-indoor-map-moverf-marker {
	color: #555;
	background-color: #FFFEEF;
	border: 1px solid #7E7E7E;
	padding: 3px 6px;
	font-size: 12px;
	white-space: nowrap;
	display: inline-block;
	position: absolute;
	top: 1em;
	left: 1.2em
}

.amap-indoormap-floorbar-control .amap-indrm-loader {
	-moz-animation: amap-indrm-loader 1250ms infinite linear;
	-webkit-animation: amap-indrm-loader 1250ms infinite linear;
	animation: amap-indrm-loader 1250ms infinite linear;
	border: 2px solid #91A3D8;
	border-right-color: transparent;
	box-sizing: border-box;
	display: inline-block;
	overflow: hidden;
	text-indent: -9999px;
	width: 13px;
	height: 13px;
	border-radius: 7px;
	position: absolute;
	margin: auto;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0
}

@-moz-keyframes amap-indrm-loader {
	0% {
		-moz-transform: rotate(0deg);
		transform: rotate(0deg)
	}
	100% {
		-moz-transform: rotate(360deg);
		transform: rotate(360deg)
	}
}

@-webkit-keyframes amap-indrm-loader {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg)
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg)
	}
}

@keyframes amap-indrm-loader {
	0% {
		-moz-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg)
	}
	100% {
		-moz-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg)
	}
}

.amap-logo {
	display: block !important;
	pointer-events: none;
}

.vml {
	behavior: url(#default#VML);
	display: inline-block;
	position: absolute
}

.amap-custom {
	top: 0;
	left: 0;
	position: absolute
}

.amap-container img {
	max-width: none !important;
	max-height: none !important
}

.amap-container {
	touch-action: none;
	position: relative;
	overflow: hidden;
	background: #fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);
	-ms-touch-action: none
}

.amap-drags, .amap-layers {
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden
}

.amap-layers canvas {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.amap-layer img {
	pointer-events: none
}

.amap-e, .amap-maps {
	width: 100%;
	height: 100%
}

.amap-maps, .amap-e, .amap-layers, .amap-tile, .amap-tile-container {
	position: absolute;
	left: 0;
	top: 0;
	overflow: hidden
}

.amap-context {
	position: absolute;
	left: 0;
	top: 0
}

.amap-overlays, .amap-markers, .amap-marker {
	position: absolute;
	left: 0;
	top: 0
}

.amap-layers {
	z-index: 0
}

.amap-overlays {
	z-index: 110;
	cursor: default
}

.amap-markers {
	z-index: 120
}

.amap-controls {
	z-index: 150
}

.amap-copyright {
	position: absolute;
	display: block !important;
	left: 77px;
	height: 16px;
	bottom: 0;
	padding-bottom: 3px;
	font-size: 11px;
	font-family: Arial, sans-serif;
	z-index: 160
}

.amap-logo {
	position: absolute;
	bottom: 1px;
	left: 1px;
	z-index: 160;
	height: 20px
}

.amap-logo img {
	width: 73px !important;
	height: 20px !important;
	border: 0;
	vertical-align: baseline !important
}

.amap-icon {
	position: relative;
	z-index: 1
}

.amap-icon img {
	position: absolute;
	z-index: -1
}

.amap-marker-label {
	position: absolute;
	z-index: 2;
	border: 1px solid blue;
	background-color: white;
	white-space: nowrap;
	cursor: default;
	padding: 3px;
	font-size: 12px;
	line-height: 14px
}

.amap-info {
	position: absolute;
	left: 0;
	z-index: 140;
	width: 320px
}

.amap-menu {
	position: absolute;
	z-index: 140;
	_width: 100px
}

.amap-info-close {
	position: absolute;
	right: 5px;
	_right: 12px;
	/*+ right: 11 px;*/
	top: 5px;
	_top: 2px;
	/*+ top: 2 px;*/
	color: #c3c3c3;
	text-decoration: none;
	font: bold 16px/14px Tahoma, Verdana, sans-serif;
	width: 14px;
	height: 14px
}

.amap-info-outer, .amap-menu-outer {
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	background: none repeat scroll 0 0 white;
	border-radius: 2px;
	padding: 1px;
	text-align: left
}

.amap-menu-outer:hover {
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3)
}

.amap-info-contentContainer:hover .amap-info-outer {
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3)
}

.amap-info-content {
	position: relative;
	background: #fff;
	padding: 10px 18px 10px 10px;
	line-height: 1.4;
	overflow: auto
}

.amap-marker-content {
	position: relative
}

.amap-info {
	_width: 320px
}

.amap-menu {
	_width: 100px
}

.amap-info-sharp-old {
	overflow: hidden;
	position: absolute;
	background-image: url(http://webapi.amap.com/images/arrows.png)
}

.bottom-center .amap-info-sharp-old {
	height: 12px;
	margin: 0 auto;
	width: 20px;
	background-position: center 12px;
	top: 100%;
	margin-top: -9px;
	left: 50%;
	margin-left: -10px
}

.bottom-left .amap-info-sharp-old {
	height: 12px;
	width: 13px;
	background-position: -16px -46px;
	top: 100%;
	margin-top: -9px
}

.bottom-right .amap-info-sharp-old {
	height: 12px;
	width: 13px;
	top: -1px;
	background-position: -56px -46px;
	left: 100%;
	margin-left: -13px;
	top: 100%;
	margin-top: -9px
}

.middle-left .amap-info-sharp-old {
	height: 20px;
	width: 12px;
	background-position: left;
	top: 50%;
	margin-top: -10px;
	margin-left: -11px
}

.center .amap-info-sharp-old {
	display: none
}

.middle-right .amap-info-sharp-old {
	height: 20px;
	margin-right: 0;
	width: 12px;
	background-position: right;
	left: 100%;
	margin-left: -9px;
	top: 50%;
	margin-top: -10px
}

.top-center .amap-info-sharp-old {
	height: 12px;
	margin: 0 auto;
	width: 20px;
	background-position: top;
	top: 0;
	margin-top: -3px;
	left: 50%;
	margin-left: -10px
}

.top-left .amap-info-sharp-old {
	height: 12px;
	width: 13px;
	background-position: -16px -3px;
	top: 0;
	margin-top: -3px
}

.top-right .amap-info-sharp-old {
	height: 12px;
	width: 13px;
	background-position: -56px -3px;
	left: 100%;
	margin-left: -13px;
	top: 0;
	margin-top: -3px
}

.amap-info-sharp {
	position: absolute
}

.bottom-center .amap-info-sharp {
	bottom: 0;
	left: 50%;
	margin-left: -8px;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-top: 8px solid #fff
}

.bottom-center .amap-info-sharp:after {
	position: absolute;
	content: "";
	margin-left: -8px;
	margin-top: -7px;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-top: 8px solid rgba(0, 0, 0, 0.3);
	filter: blur(2px);
	z-index: -1
}

.amap-info-contentContainer:hover.bottom-center .amap-info-sharp:after {
	border-top: 8px solid rgba(0, 0, 0, 0.5)
}

.bottom-left .amap-info-sharp {
	border-color: transparent #fff;
	border-width: 0 0 10px 10px;
	border-style: solid
}

.bottom-left .amap-info-sharp:after {
	position: absolute;
	content: "";
	margin-left: -10px;
	border-color: transparent rgba(0, 0, 0, 0.3);
	border-width: 0 0 10px 10px;
	border-style: solid;
	filter: blur(1px);
	z-index: -1
}

.amap-info-contentContainer:hover.bottom-left .amap-info-sharp:after {
	border-color: transparent rgba(0, 0, 0, 0.5)
}

.bottom-left .amap-info-content {
	border-radius: 2px 2px 2px 0
}

.bottom-right .amap-info-sharp {
	right: 0;
	border-top: 10px solid #fff;
	border-left: 10px solid transparent
}

.bottom-right .amap-info-sharp:after {
	position: absolute;
	margin-top: -9px;
	margin-left: -10px;
	content: "";
	border-top: 10px solid rgba(0, 0, 0, 0.3);
	border-left: 10px solid transparent;
	filter: blur(1px);
	z-index: -1
}

.amap-info-contentContainer:hover.bottom-right .amap-info-sharp:after {
	border-top: 10px solid rgba(0, 0, 0, 0.5)
}

.bottom-right .amap-info-content {
	border-radius: 2px 2px 0 2px
}

.top-center .amap-info-sharp {
	top: 0;
	left: 50%;
	margin-left: -8px;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-bottom: 8px solid #fff
}

.top-center .amap-info-sharp:after {
	position: absolute;
	content: "";
	margin-top: 0;
	margin-left: -8px;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-bottom: 8px solid rgba(0, 0, 0, 0.3);
	filter: blur(1px);
	z-index: -1
}

.top-left .amap-info-sharp {
	left: 0;
	top: 0;
	border-bottom: 10px solid #fff;
	border-right: 10px solid transparent
}

.top-left .amap-info-sharp:after {
	position: absolute;
	content: "";
	margin-top: 0;
	margin-left: 0;
	border-bottom: 10px solid rgba(0, 0, 0, 0.3);
	border-right: 10px solid transparent;
	filter: blur(1px);
	z-index: -1
}

.top-right .amap-info-sharp {
	right: 0;
	top: 0;
	border-bottom: 10px solid #fff;
	border-left: 10px solid transparent
}

.top-right .amap-info-sharp:after {
	position: absolute;
	content: "";
	margin-top: 0;
	margin-left: -10px;
	border-bottom: 10px solid rgba(0, 0, 0, 0.3);
	border-left: 10px solid transparent;
	filter: blur(1px);
	z-index: -1
}

.middle-right .amap-info-sharp {
	right: 0;
	top: 50%;
	margin-top: -8px;
	border-top: 8px solid transparent;
	border-left: 8px solid #fff;
	border-bottom: 8px solid transparent
}

.middle-right .amap-info-sharp:after {
	position: absolute;
	content: "";
	margin-top: -8px;
	margin-left: -8px;
	border-top: 8px solid transparent;
	border-left: 8px solid rgba(0, 0, 0, 0.3);
	border-bottom: 8px solid transparent;
	filter: blur(1px);
	z-index: -1
}

.amap-info-contentContainer:hover.middle-right .amap-info-sharp:after {
	border-left: 8px solid rgba(0, 0, 0, 0.5)
}

.middle-left .amap-info-sharp {
	left: 0;
	top: 50%;
	margin-top: -8px;
	border-top: 8px solid transparent;
	border-right: 8px solid #fff;
	border-bottom: 8px solid transparent
}

.middle-left .amap-info-sharp:after {
	position: absolute;
	content: "";
	margin-top: -8px;
	margin-left: 0;
	border-top: 8px solid transparent;
	border-right: 8px solid rgba(0, 0, 0, 0.3);
	border-bottom: 8px solid transparent;
	filter: blur(1px);
	z-index: -1
}

.amap-info-contentContainer:hover.middle-left .amap-info-sharp:after {
	border-right: 8px solid rgba(0, 0, 0, 0.5)
}

.amap-info-contentContainer.top-left, .amap-info-contentContainer.top-center, .amap-info-contentContainer.top-right {
	padding-top: 8px
}

.amap-info-contentContainer.bottom-left, .amap-info-contentContainer.bottom-center, .amap-info-contentContainer.bottom-right {
	padding-bottom: 8px
}

.amap-info-contentContainer.middle-right {
	padding-right: 8px
}

.amap-info-contentContainer.middle-left {
	padding-left: 8px
}

.amap-menu-outer {
	margin: 0;
	padding: 0;
	list-style-type: none
}

ul.amap-menu-outer li {
	cursor: pointer;
	height: 35px;
	line-height: 35px;
	word-break: break-all;
	padding: 0 10px;
	font-size: 12px;
	white-space: nowrap
}

ul.amap-menu-outer li a {
	text-decoration: none;
	font-size: 13px;
	margin: 0 5px;
	color: #000;
	padding: 5px 5px
}

ul.amap-menu-outer li:hover {
	background-color: #f3f3ee
}

.amap-overlay-text-container {
	display: block;
	width: auto;
	word-break: keep-all;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	background: #fff;
	padding: 2px 3px;
	border: 1px solid #ccc;
	border-radius: 3px
}

.amap-overlay-text-container.amap-overlay-text-empty {
	display: none
}

.amap-info-content-ie8 {
	border: 1px solid #9c9c9c
}

html, body {
	height: 100%;
	width: 100%;
	background-color: #F5F5F5;
}

.amap-icon img {
	width: 25px;
	height: 34px;
}

.amap-marker-label {
	border: 0;
	background-color: transparent;
}

.info {
	position: relative;
	top: 0;
	right: 0;
	min-width: 0;
}

#container {
	height: 58%;
	border-bottom: solid #F5F5F5 4px;
}

#addlist {
	height: 40%;
	width: 100%;
	background-color: #F5F5F5;
	overflow-y: scroll;
	overflow-x: scroll;
	-webkit-overflow-scrolling: touch;
}

#addlist ul, li {
	margin: 0px;
	padding: 0px;
	list-style: none;
}

.itemcl {
	text-align: center;
}

.itemcl .result_list {
	width: 95%;
	background-color: #fff;
	border-radius: 8px;
	display: inline-block;
	margin-top: 10px;
}

.result_list .item_div {
	position: relative;
	width: 100%;
	height: 68px;
	display: inline-block;
	text-align: left;
}

.result_list .logo {
	width: 60px;
	float: left;
	height: 60px;
	display: inline-block;
	position: absolute;
	z-index: 1;
	top: 8px;
	left: 5px;
}

.result_list img {
	width: 56px;
	height: 56px;
	border-radius: 8px;
	border: solid #f5f5f5 2px;
}

.result_list .list_info {
	width: 100%;
	padding-left: 70px;
	float: left;
	box-sizing: border-box;
	height: 60px;
	display: inline-block;
	position: absolute;
	top: 5px;
}

.result_list .item_div p {
	font-size: 14px;
	font-weight: bold;
	color: #282a2f;
	margin-bottom: 2px;
	margin-top: 2px;
}

.list_info span {
	display: block;
	margin-right: 5px;
	border-radius: 6px;
	font-size: 10px;
	color: #000;
}

.daohang {
	position: absolute;
	right: 10px;
	top: 23px;
	width: 50px;
	background-color: #78CD51;
	color: #fff;
	border-radius: 4px;
	padding: 3px;
	text-align: center;
}

.copyright {
	width: 100%;
	text-align: center;
	padding-top: 10px;
	padding-bottom: 20px;
	box-sizing: border-box;
	font-size: 14px;
	color: #bbb;
}

.amap-container {
	cursor: url(https://webapi.amap.com/theme/v1.3/openhand.cur), default;
}

.amap-drag {
	cursor: url(https://webapi.amap.com/theme/v1.3/closedhand.cur), default;
}
</style>
