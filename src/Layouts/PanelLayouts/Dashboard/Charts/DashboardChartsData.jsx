// ===========================================Bar Chart======================================

export const DashboardBarChartData = {
     labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
     datasets: [
          {
               label: "monthly my sells",
               data: [1200, 800, 200, 230, 210, 1000, 900, 400, 1100, 450],
               backgroundColor: "#7376AA",
               // backgroundColor: "#0f1021",
               borderWidth: 3,
               borderRadius: 12,
          },
     ],
};

export const DashboardBarChartOption = {
     responsive: true,
     plugins: {
          legend: {
               position: "top",
          },
          title: {
               display: true,
               text: "sell",
          },
     },
};

// ===========================================Line Chart======================================

export const DashboardLineChartData = {
     labels: ["Jan", "Feb", "Mar", "Apr", "May"],
     datasets: [
          {
               label: "New Clients",
               data: [25, 60, 20, 90, 45], // داده‌های تقریبی برای شبیه‌سازی موج
               borderColor: "#7376AA", // رنگ آبی خط نمودار
               backgroundColor: "transparent", // پس‌زمینه باید شفاف باشد
               borderWidth: 4, // ضخامت خط
               pointRadius: 2, // **حذف نقاط داده (Point)**
               pointHoverRadius: 8, // نمایش نقاط هنگام هاور
               tension: 0.5, // **تنظیم کشیدگی برای خطوط نرم و منحنی**
          },
     ],
};

export const DashboardLineChartOption = {
     responsive: true,
     // حذف تمام تعاملات اضافی
     plugins: {
          legend: { display: true }, // پنهان کردن Legend
          tooltip: { enabled: true },
          title: {
               display: true,
               text: "New Clients", // عنوان بالای نمودار
               color: "white",
               align: "start", // تراز به چپ
               font: {
                    size: 20,
                    weight: "bold",
               },
          },
     },

     // تنظیمات خطوط نرم
     elements: {
          line: {
               tension: 0.4, // تکرار tension برای اطمینان از اعمال منحنی
          },
     },

     // 🔴 تنظیمات محورها (Scales) برای ظاهر تیره و نقطه‌چین
     scales: {
          x: {
               // حذف خط عمودی اصلی (محور X)
               border: {
                    display: false,
               },
               // پنهان کردن خطوط گرید عمودی
               grid: {
                    display: false,
               },
               // تنظیمات برچسب‌های ماه‌ها
               ticks: {
                    color: "white",
                    font: { size: 14 },
               },
          },
          y: {
               // پنهان کردن اعداد (تیک‌ها) محور Y
               ticks: {
                    display: false,
               },
               // حذف خط افقی اصلی (محور Y)
               border: {
                    display: false,
               },
               // 🚨 تنظیم خطوط گرید افقی
               grid: {
                    color: "rgba(255, 255, 255, 0.2)", // رنگ خطوط (روشن و شفاف)
                    lineWidth: 1,
                    borderDash: [5, 5], // **ایجاد خطوط نقطه‌چین** (5px خط، 5px فاصله)
                    drawBorder: false, // جلوگیری از رسم خط مرزی بیرونی نمودار
               },
          },
     },
};

// ===========================================Pie Chart======================================

