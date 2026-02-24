// مصفوفة الولايات الـ 58 كاملة مرتبة حسب الرقم الإداري
const algeriaProvinces = [
    "01- أدرار", "02- الشلف", "03- الأغواط", "04- أم البواقي", "05- باتنة", 
    "06- بجاية", "07- بسكرة", "08- بشار", "09- البليدة", "10- البويرة", 
    "11- تمنراست", "12- تبسة", "13- تلمسان", "14- تيارت", "15- تيزي وزو", 
    "16- الجزائر العاصمة", "17- الجلفة", "18- جيجل", "19- سطيف", "20- سعيدة", 
    "21- سكيكدة", "22- سيدي بلعباس", "23- عنابة", "24- قالمة", "25- قسنطينة", 
    "26- المدية", "27- مستغانم", "28- المسيلة", "29- معسكر", "30- ورقلة", 
    "31- وهران", "32- البيض", "33- إليزي", "34- برج بوعريريج", "35- بومرداس", 
    "36- الطارف", "37- تيندوف", "38- تسمسيلت", "39- الوادي", "40- خنشلة", 
    "41- سوق أهراس", "42- تيبازة", "43- ميلة", "44- عين الدفلى", "45- النعامة", 
    "46- عين تموشنت", "47- غرداية", "48- غليزان", "49- تيميمون", "50- برج باجي مختار", 
    "51- أولاد جلال", "52- بني عباس", "53- عين صالح", "54- عين قزام", "55- تقرت", 
    "56- جانت", "57- المغير", "58- المنيعة"
];

// دالة لتعبئة قائمة الولايات عند تحميل الصفحة
window.onload = function() {
    const provinceSelect = document.getElementById("province");
    algeriaProvinces.forEach(province => {
        let option = document.createElement("option");
        option.value = province;
        option.text = province;
        provinceSelect.appendChild(option);
    });
};

// دالة تحديث البلديات (نظام ذكي مبدئي)
function updateCities() {
    const provinceSelect = document.getElementById("province");
    const citySelect = document.getElementById("city");
    const selectedProvince = provinceSelect.value;

    // مسح الخيارات القديمة
    citySelect.innerHTML = '<option value="">اختر البلدية</option>';

    if (selectedProvince !== "") {
        // هنا يمكنك إضافة مصفوفات لكل بلدية، حالياً سنضع "مركز الولاية" و "توصيل للمنزل" كأمثلة
        const defaultCities = ["مركز الولاية", "توصيل للمنزل / مكتب البريد"];
        defaultCities.forEach(city => {
            let option = document.createElement("option");
            option.value = city;
            option.text = city;
            citySelect.appendChild(option);
        });
    }
}

// 3. الكود الجديد للربط مع Google Sheets والواتساب
document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // جمع البيانات من الاستمارة
    const formData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        province: document.getElementById("province").value,
        city: document.getElementById("city").value,
        size: document.getElementById("size").value
    };

    // الرابط الذي حصلت عليه من Google Apps Script
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzoNv3B8bPH3Emd3HSJNeG1vRJtJKtH_WGW1hQKrovOEog52k0TpXt8u8hdnGnX0AAm/exec'; // <--- ضع رابطك هنا

    // إظهار تنبيه بسيط للمستخدم
    alert("جاري تسجيل طلبك...");

    // إرسال البيانات للجدول
    fetch(scriptURL, { 
        method: 'POST', 
        mode: 'no-cors', 
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(() => {
    