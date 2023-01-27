<template>
	<div class="">
		<div class="page_pages">
			<br>
			<div class="row col-12">
				<div class="col-4">งานเทคโนโลยีสารสนเทศ</div>
				<div class="col-8 text-end">
					<div class="form-check form-check-inline">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
							class="bi bi-check-square" viewBox="0 0 16 16">
							<path
								d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
						</svg>
						<label class="form-check-label" for="inlineCheckbox1">HOSxP</label>
					</div>
					<div class="form-check form-check-inline">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
							class="bi bi-check-square" viewBox="0 0 16 16">
							<path
								d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
						</svg>
						<label class="form-check-label">Back Office</label>
					</div>
					<div class="form-check form-check-inline">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
							class="bi bi-check-square" viewBox="0 0 16 16">
							<path
								d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
						</svg>
						<label class="form-check-label">เร่งด่วน</label>
					</div>
					<div class="form-check form-check-inline">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
							class="bi bi-check-square" viewBox="0 0 16 16">
							<path
								d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
						</svg>
						<label class="form-check-label">ปกติ</label>
					</div>
				</div>
			</div>
			<div class="row col-12">
				<p>เลขที่............................</p>
			</div>
			<div class="row col-12 justify-content-center">
				<p class="col-7 text-center" style="font-size: 18px;">ใบส่งช่อมครุภัณฑคอมพิวเตอร์และอุปกรณ์ต่อพ่วง</p>
			</div>
			<div class="row col-12">
				<li class="text-decoration">ส่วนที่ 1 สำหรับผู้แจ้งซ่อม</li>
			</div>
			<div class="row col-12">
				<div class="name-main col-8">
					<li style="width: 40px;">วันที่.</li>
					<li class="name-item-dot" style="width: 140px;"><b>{{ setdays(GETBYID?.date_repair,'D') }}</b></li>
					<li style="width: 40px;">เดือน</li>
					<li class="name-item-dot" style="width: 150px;"><b>{{ setdays(GETBYID?.date_repair,'MO') }}</b></li>
					<li style="width: 40px;">พ.ศ.</li>
					<li class="name-item-dot" style="width: 150px;"><b>{{ setdays(GETBYID?.date_repair,'Y') }}</b></li>
					<li style="width: 70px;">เวลา.</li>
					<li class="name-item-dot" style="width: 150px;"><b>{{ setdays(GETBYID?.date_repair,'T') }}</b></li>
				</div>
			</div>
			<div class="row col-12">
				<div class="col-4 row">
					<li class="col-4" style="width: 61px;">กลุ่มงาน.</li>
					<li class=" col name-item-dot"><b>{{ GETBYID?.work_group }}</b></li>
				</div>
				<div class="row col-4">
					<li class="col-1" style="width: 40px;">งาน.</li>
					<li class="col name-item-dot"><b>{{ GETBYID?.work }}</b></li>
				</div>
				<div class="col-4 row">
					<li class="col-1">โทร. </li>
					<li class="col name-item-dot">
						<b>{{ GETBYID?.phone }}</b>
					</li>
				</div>
			</div>
			<div class="row col-12">
				<div class="col-6 row">
					<li class="" style="width: 88px;">ชื่อคอมพิวเตอร์.</li>
					<li class=" col name-item-dot" style="width: 80%;"><b>{{
						GETBYID?.computer_name
					}}</b>
					</li>
				</div>
				<div class="col-6 row">
					<li class="" style="width: 88px;">ชื่อผู้รับผิดชอบ.</li>
					<li class=" col name-item-dot" style="width: 80%;"><b>{{
						GETBYID?.name_sender
					}}</b>
					</li>
				</div>

			</div>
			<div class="row col-12">
				<div class="col-6 row">
					<li class="" style="width: 88px;">รหัสครุภัณฑ์.</li>
					<li class=" col name-item-dot" style="width: 80%;"><b>{{
						GETBYID?.commodity_code
					}}</b>
					</li>
				</div>
				<div class="col-6 row">
					<li class="" style="width: 88px;">Ip Address.</li>
					<li class=" col name-item-dot" style="width: 80%;"><b>{{
						GETBYID?.ip_address
					}}</b>
					</li>
				</div>

			</div>
			<div class="row col-12">
				<li class="text-decoration">อุปกรณ์ในการส่งซ่อมคอมพิวเตอร์</li>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-6">
						<div class="form-check form-check-inline">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								class="bi bi-check-square" viewBox="0 0 16 16">
								<path
									d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
								<path v-if="GETBYID?.equipment == 'คอมพิวเตอร์แม่ข่าย'"
									d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
							</svg>
							<label class="form-check-label" for="inlineCheckbox1">คอมพิวเตอร์แม่ข่าย</label>
						</div>
					</div>
					<div class="col-6">
						<div class="form-check form-check-inline">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								class="bi bi-check-square" viewBox="0 0 16 16">
								<path
									d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
								<path v-if="GETBYID?.equipment == 'คอมพิวเตอร์ตั้งโต๊ะ(pc)'"
									d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
							</svg>
							<label class="form-check-label" for="inlineCheckbox1">คอมพิวเตอร์ตั้งโต๊ะ(pc)</label>
						</div>
					</div>
					<div class="col-6">
						<div class="form-check form-check-inline">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								class="bi bi-check-square" viewBox="0 0 16 16">
								<path
									d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
								<path v-if="GETBYID?.equipment == 'คอมพิวเตอร์พกพา(NoteBook)'"
									d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
							</svg>
							<label class="form-check-label" for="inlineCheckbox1">คอมพิวเตอร์พกพา(NoteBook)</label>
						</div>
					</div>
					<div class="col-6">
						<div class="form-check form-check-inline">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								class="bi bi-check-square" viewBox="0 0 16 16">
								<path
									d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
								<path v-if="GETBYID?.equipment == 'เครื่องสแกนเนอร์(Scnner)'"
									d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
							</svg>
							<label class="form-check-label" for="inlineCheckbox1">เครื่องสแกนเนอร์(Scnner)</label>
						</div>
					</div>
					<div class="col-6">
						<div class="form-check form-check-inline">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								class="bi bi-check-square" viewBox="0 0 16 16">
								<path
									d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
								<path v-if="GETBYID?.equipment == 'ครื่องพิมพ์(printer)'"
									d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
							</svg>
							<label class="form-check-label" for="inlineCheckbox1">ครื่องพิมพ์(printer)</label>
						</div>
					</div>
					<div class="col-6">
						<div class="form-check form-check-inline">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								class="bi bi-check-square" viewBox="0 0 16 16">
								<path
									d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
								<path v-if="GETBYID?.equipment == 'แป้นพิมพ์(KeyBoard)'"
									d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
							</svg>
							<label class="form-check-label" for="inlineCheckbox1">แป้นพิมพ์(KeyBoard)</label>
						</div>
					</div>
					<div class="col-6">
						<div class="form-check form-check-inline">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								class="bi bi-check-square" viewBox="0 0 16 16">
								<path
									d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
								<path v-if="GETBYID?.equipment == 'เม้าส์usb(mouseusb)'"
									d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
							</svg>
							<label class="form-check-label" for="inlineCheckbox1">เม้าส์usb(mouseusb)</label>
						</div>
					</div>
					<div class="col-6">
						<div class="form-check form-check-inline">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								class="bi bi-check-square" viewBox="0 0 16 16">
								<path
									d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
								<path
									v-if="GETBYID?.equipment == 'อินเทอร์เน็ต(Internet)' || GETBYID?.equipment === 'อื่นๆ'"
									d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
							</svg>

							<label class="form-check-label" for="inlineCheckbox1">อื่นๆ.......................</label>
						</div>
					</div>
				</div>
			</div>
			<div class="row col-12">
				<li class="">ปัญหา/อาการ</li>
			</div>
			<br>
			<div class="row col-12">

				<ul>
					<li class="name-item-dot" style="width: 50%;"> <b style="margin-top: -18px;">ช้า</b></li>
				</ul>
			</div>
			<div class="row col-12 justify-content-end">
				<div class="name-main col-4">
					<li class="col">(ลงชื่อ)</li>
					<li class="name-item-dot"></li>
					<li class="col-4">ผู้ส่งซ่อม</li>
				</div>
			</div>
			<div class="row col-12 justify-content-end">
				<div class="name-main col-4 justify-content-center">
					<li class="col px-2">(</li>
					<li class="name-item-dot">
						<b>{{ check(GETBYID?.name_sender) }}</b>

					</li>
					<li class="col-4 px-2">)</li>

				</div>
			</div>
			<div class="row col-12">
				<li class="text-decoration">ส่วนที่ 2 สำหลับเจ้าหน้าที่ประสานงานซ่อม</li>
			</div>
			<div class="row col-12">
				<div class="name-main col-8">
					<li style="width: 40px;">วันที่.</li>
					<li class="name-item-dot" style="width: 140px;"><b>{{ setdays(GETBYID?.date_receive,'D') }}</b></li>
					<li style="width: 40px;">เดือน</li>
					<li class="name-item-dot" style="width: 150px;"><b>{{ setdays(GETBYID?.date_receive,'MO') }}</b>
					</li>
					<li style="width: 40px;">พ.ศ.</li>
					<li class="name-item-dot" style="width: 150px;"><b>{{ setdays(GETBYID?.date_receive,'Y') }}</b></li>
					<li style="width: 70px;">เวลา.</li>
					<li class="name-item-dot" style="width: 150px;"><b>{{ setdays(GETBYID?.date_receive,'T') }}</b></li>
				</div>
			</div>
			<div class="row col-12">
				<li class="">ผู้ประสานงาน/ผู้รับผิดชอบ</li>
			</div>
			<div class="row justify-content-end">
				<div class="row col-12 justify-content-center">
					<div class="form-check form-check-inline" v-for="item in Coordinator  " :key="item">
						<svg xmlns="http://www.w3.org/2000/svg" width="15" fill="currentColor" class="bi bi-app"
							viewBox="0 0 16 16">
							<path
								d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
						</svg>
						<label class="form-check-label col-3 px-2"> {{ item.recipients }}</label>
						<label class="form-check-label col-3"> {{ item.positions }}</label>
						<label
							class="form-check-label col-5">วันที่รับเรื่อง.............เดือน............พ.ศ.............</label>
					</div>
				</div>
			</div>
			<br>
			<div class="row col-12">
				<li class="text-decoration">ส่วนที่ 3 สำหลับเจ้าหน้าที่รับหมายและผู้ตรวจงาน</li>
			</div>

			<div class="row col-12">
				<div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="15" fill="currentColor"
						class="bi bi-app" viewBox="0 0 16 16">
						<path
							d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
					</svg>ส่งซ่อม</div>
				<div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="15" fill="currentColor"
						class="bi bi-app" viewBox="0 0 16 16">
						<path
							d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
					</svg>ซ่อมได้</div>
				<div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="15" fill="currentColor"
						class="bi bi-app" viewBox="0 0 16 16">
						<path
							d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
					</svg>เบิกอะไหล่</div>
				<div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="15" fill="currentColor"
						class="bi bi-app" viewBox="0 0 16 16">
						<path
							d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
					</svg>ซ่อมไม่คุ้มค่า</div>
			</div>

			<div class="row col-12">
				<li class="">รายการสิ่งที่ต้องการเบิก/จัดซื้อ</li>
			</div>
			<div class="row col-12">
				<table class="">
					<tr>
						<th style="width: 1cm;">ลำดับ</th>
						<th style="width: 3cm;">รายการ</th>
						<th style="width: 1cm;">จำนวน</th>
						<th style="width: 1cm;">ราคาต่อหน่วย</th>
						<th style="width: 1cm;">ราคารวม</th>
						<th style="width: 2cm;">วันทีส่งเบิก</th>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>

					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>

					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>

					</tr>
				</table>


			</div>
			<br>
			<div class="row col-12">
				<div class="name-main col-6">
					<li class="col">(ลงชื่อ)</li>
					<li class="name-item-dot"></li>
					<li class="col-4">ช่างผู้ซ่อม</li>
				</div>
				<div class="name-main col-6">
					<li class="col">(ลงชื่อ)</li>
					<li class="name-item-dot"></li>
					<li class="col-4">ผู้ตรวจงานซ้อม</li>
				</div>
				<div class="d-main col-6">
					<li style="width: 50px;">(ลง ว/ด/ป)</li>
					<li class="d-item-dot"></li>
				</div>
				<div class="d-main col-6">
					<li style="width: 50px;">(ลง ว/ด/ป)</li>
					<li class="d-item-dot"></li>
				</div> <br>
				<div class="name-main col-6">
					<li class="col">(ลงชื่อ)</li>
					<li class="name-item-dot"></li>
					<li class="col-4">ผู้เบิกจ่ายของจากคลัง</li>
				</div>
				<div class="name-main col-6">
					<li class="col">(ลงชื่อ)</li>
					<li class="name-item-dot"></li>
					<li class="col-4">ผู้รับงาน</li>
				</div>
				<div class="d-main col-6">
					<li style="width: 50px;">(ลง ว/ด/ป)</li>
					<li class="d-item-dot"></li>
				</div>
				<div class="d-main col-5">
					<li style="width: 50px;">(ลง ว/ด/ป)</li>
					<li class="d-item-dot"></li>
				</div>
			</div>
		</div>


		<!-- <div class="show-information">
			
			<div class="show_i-div2">
				<div class="row col-12">
					
					<h2 class="col-12 py-1">ข้อมมูลการแจ้งซ่อม</h2>
					<div class="col-6 py-2">
						<li><b>ชื้อผู้แจ้งซ่อม: </b>{{ check(GETBYID?.name_sender) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>เบอร์โทรศัพท์: </b>{{ check(GETBYID?.phone) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>กลุ่มงาน: </b>{{ check(GETBYID?.work_group) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>งาน: </b>{{ check(GETBYID?.work) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>ต้องการแจ้งซ่อม: </b>{{ check(GETBYID?.equipment) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>ชื่อ คอมพิวเตอร์/อุปกรณ์: </b>{{ check(GETBYID?.computer_name) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>รหัสครุภัณฑ์: </b>{{ check(GETBYID?.commodity_code) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>ip_address: </b>{{ check(GETBYID?.ip_address) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>ปัญหา/อาการ: </b>{{ check(GETBYID?.problem_symptom) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>ความเร่งด่วน: </b>{{ check(GETBYID?.requirements) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>อื่นๆ: </b>{{ check(GETBYID?.other) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>วัน/เวลาที่แจ้ง:</b>{{ setday(GETBYID?.date_repair) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>วัน/เวลารับแจ้ง:</b> {{ setday(GETBYID?.date_receive) }}</li>
					</div>
					<div class="col-6 py-2">
						<li><b>ผู้ประสานงาน(ผู้รับแจ้งซ่อม):</b> {{ check(GETBYID?.name_responsible) }}</li>
					</div>
				

				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
import axios from 'axios'
import { URL_IP, URL_PUT_GET_BY_ID, URL_PUT_PROCESS } from '../constants'
import Swal from 'sweetalert2'
export default {
	data() {
		return {
			ID: 2,
			GETBYID: '',
			Coordinator: ''

		}
	},
	methods: {
		Showformitem(payload) {
			$nuxt.$store.commit('setShowformitem', payload)
		},
		check(item) {
			if (item) {
				return item
			} else {
				return 'ยังไม่มีข้อมูล'
			}
		},
		// ${this.$store.state.showformitem.id}
		GET_by_id() {
			axios.get(`${URL_PUT_GET_BY_ID}/1`).then(response => {
				this.GETBYID = response.data.results
			})
		},
		GET_coordinator() {
			axios.get(`${URL_IP}/Getall_recipient`).then(response => {
				this.Coordinator = response.data.results
			})
		},
		setday(item) {
			if (item) {
				var H = new Date(item).getHours()
				var Ms = new Date(item).getMinutes()
				var D = new Date(item).getDate()
				var M = new Date(item).getMonth() + 1
				var Y = new Date(item).getFullYear()
				return ` ${D} / ${M} / ${Y} เวลา ${H}:${Ms} น.`
			}

		},
		setdays(item, key) {
			if (item) {
				if (key == 'D') {
					return new Date(item).getDate()
				}
				if (key == 'MO') {
					var MOset = new Date(item).getMonth() + 1
					var MOget = (MOset == '1' ? 'มกราคม' :
						MOset == '2' ? 'กุมภาพันธ์' :
							MOset == '3' ? 'มีนาคม' :
								MOset == '4' ? 'เมษายน' :
									MOset == '5' ? 'พฤษภาคม' :
										MOset == '6' ? 'มิถุนายน' :
											MOset == '7' ? 'กรกฎาคม' :
												MOset == '8' ? 'สิงหาคม' :
													MOset == '9' ? 'กันยายน' :
														MOset == '10' ? 'ตุลาคม' :
															MOset == '11' ? 'พฤศจิกายน ' :
																MOset == '12' ? 'ธันวาคม' : 'null')
					return MOget
				}
				if (key == 'Y') {
					return new Date(item).getFullYear() + 543
				}
				if (key == 'T') {
					var H = new Date(item).getHours()
					var Ms = new Date(item).getMinutes()
					return ` ${H}:${Ms} น.`
				}
			} else {
				return ''
			}

		}

	},
	mounted() {
		this.GET_coordinator()
		this.GET_by_id()
		console.log(this.GETBYID);

	}


}
</script>

<style>
@page {
	size: A4;
	margin: 0;
	/* font-size: 1px; */
}

.page_pages svg {
	margin: 0px 0px 3px 0px;
}

.show_i-div2 {
	display: flex;
	height: auto;
	/* width: 70%;  */
	justify-content: center;
	/* padding: 15px 30px 15px 30px; */
	/* background-color: #d4d4d4; */
	z-index: 6;
	border-radius: 12px;

}

.form-check {
	padding-left: 10px;
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


.back-button {
	display: flex;
	justify-content: flex-end;
}

.page_pages {
	display: flex;
	position: fixed;
	padding: 30px 55px 20px 55px;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: azure;
	z-index: 10;
	flex-direction: column;
	font-size: 10px;
	align-items: center;
	row-gap: 5px;
}

.text-decoration {
	text-decoration: underline;
}

table,
td,
th {
	border-collapse: collapse;
	border: 1px solid #000000;
	text-align: center;
}

table td {
	height: 35px;
}

.dottext {
	width: 250px;
	display: inline-block;
	white-space: nowrap;
	overflow: hidden !important;
	text-overflow: ellipsis;
}

.name-main {
	display: flex;
	justify-content: space-between;
}

.name-item-dot {
	border-bottom: 1px dotted #000000;
	width: 100%;
	padding: 0px 5px 0px 15px;
	margin: -5px 0px 3px 0px;
}

.d-main {
	display: flex;
	justify-content: flex-start;
}

.d-item-dot {
	border-bottom: 0.5px dotted #000000;
	width: 40%;
	padding: 0px 5px 0px 7px;
	margin: -5px 0px 3px 0px;
}

.d-item-dot b {
	position: fixed;
	padding: 5px 0px 0px 0px;
}

.name-item-dot b {
	position: fixed;
	padding: 4px 0px 0px 0px;
}
</style>