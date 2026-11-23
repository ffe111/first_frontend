# Angular User Management UI

[English](README.md) | ภาษาไทย

โปรเจกต์ฝึก Angular 17 สำหรับดูรายการ เพิ่ม แก้ไข และลบผู้ใช้ เหมาะกับการดูว่า routes และ components ของ Angular เรียก CRUD API ผ่าน HTTP service ที่ใช้ร่วมกันอย่างไร

## เริ่มต้นใช้งาน

ใช้ Node.js 20 พร้อม npm แล้วรันจากไดเรกทอรีหลักของ repo:

```bash
npm ci
npm start
```

เปิด [localhost:4200](http://localhost:4200) หน้าเว็บต้องใช้ backend แยกที่ `http://localhost:5000` ซึ่งรองรับ `/user` และ `/user/:id` โดยไม่ได้รวม backend ไว้ใน repo นี้ ดูรูปแบบ API ที่ [`user.service.ts`](src/app/services/user.service.ts) และเส้นทางหน้าเว็บที่ [`app.routes.ts`](src/app/app.routes.ts) ในการพัฒนาบนเครื่อง backend ต้องอนุญาตให้ origin ของ frontend ส่งคำขอได้

ใช้ `npm run build` เพื่อคอมไพล์แอป หรือ `npm test` เพื่อเรียกตัวรันทดสอบของ Angular หากกำลังเรียน Angular ลองไล่จาก route ของหน้ารายการผู้ใช้ไปจนถึง service
