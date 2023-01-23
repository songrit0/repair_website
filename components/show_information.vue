<template>
	<div class="">
		<div  class="show-information-B"></div>
	<div  class="show-information">

		<div class="show_i-div">
			<div class="row col-12">
				<br>
				<h2 class="col-12 py-1">ข้อมมูลการแจ้งซ่อม</h2>
				<div class="col-6 py-2">
					<li>ชื้อผู้แจ้งซ่อม:</li>
				</div>
				<div class="col-6 py-2">
					<li>เบอร์โทรศัพท์:</li>
				</div>
				<div class="col-6 py-2">
					<li>กลุ่มงาน:</li>
				</div>
				<div class="col-6 py-2">
					<li>งาน:</li>
				</div>
				<div class="col-6 py-2">
					<li>ต้องการแจ้งซ่อม:</li>
				</div>
				<div class="col-6 py-2">
					<li>ชื่อ คอมพิวเตอร์/อุปกรณ์:</li>
				</div>
				<div class="col-6 py-2">
					<li>รหัสครุภัณฑ์:</li>
				</div>
				<div class="col-6 py-2">
					<li>ip_address:</li>
				</div>
				<div class="col-6 py-2">
					<li>ปัญหา/อาการ:</li>
				</div>
				<div class="col-6 py-2">
					<li>ความเร่งด่วน:</li>
				</div>
				<div class="col-6 py-2">
					<li>อื่นๆ:</li>
				</div>
				<div class="col-6 py-2">
					<li>วัน/เวลาที่แจ้ง:</li>
				</div>
				<div class="col-6 py-2">
					<li>วัน/เวลารับแจ้ง:</li>
				</div>
				<div class="col-6 py-2">
					<li>ผู้ประสานงาน(ผู้รับแจ้งซ่อม):</li>
				</div>

			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.show_i-div {

	display: flex;
	height: auto;
	/* width: 70%; */
	justify-content: center;
	padding: 15px 30px 15px 30px;
	background-color: #ecc6a9;
	z-index: 6;
	border-radius: 12px;
}
.show-information {
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	/* max-height: 19cm; */
	height: 777px;
	padding: 150px;
	justify-content: center;
	z-index: 5;
	/* filter: blur(4px); */
}
.show-information-B {
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	/* max-height: 19cm; */
	height: 777px;
	padding: 150px;
	justify-content: center;
	/* background-color: rgba(9, 9, 9, 0); */
	z-index: 5;
	backdrop-filter: blur(2px);
}
</style>