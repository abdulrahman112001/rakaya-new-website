import Container from "@/components/Container";
import Header from "@/components/jobs/Header";
import VisionLayout from "@/components/vision/VisionLayout";
import React from "react";

const Work = () => (
  <>
    <Header text={"كيف تعمل ركايا"} />

    <VisionLayout title={"كيف تعمل ركايا"}>
      <Container className="mt-5 me-0 col-12 col-lg-10">
        <p className="text-justify">
          في كل شركة، توجد هيكلة تنظيمية مصممة لتسهيل الحوكمة. الصفحة التالية
          تقدم شرحًا للتركيب التنظيمي المتبع في شركة ركايا، وذلك بهدف توضيح دور
          ومسؤوليات كل موظف بشكل يسهل فهمه. هذا سيساعد أيضًا الموظفين على معرفة
          المسار الصحيح لتقديم الاستفسارات والتقارير. في ركايا، نحن في مرحلة
          تجريب لعدة آليات مختلفة لتحديد الهيكلة التي تلائمنا بأفضل شكل.
        </p>
        <p className="text-justify">
          من خلال تجاربنا، توصلنا إلى أنه من غير المفيد تبني نظام هيكلي جاهز
          وفرضه بشكل مباشر على شركتنا. أيضًا، لاحظنا أن بعض الأدوار وأساليب
          الترقي في العديد من المؤسسات لا تناسب طبيعة عملنا في ركايا. حتى هذه
          اللحظة، نحن نتبع هيكلًا تنظيميًا مصممًا خصيصًا لتلبية احتياجات ركايا.
        </p>
        <span className="badge bg-forth border-primary py-2 px-3 text-primary fw-bold fs-5 my-2">
          الرئيس التنفيذي
        </span>
        <p className="text-justify">
          يدير شركة ركايا المهندس حاتم باناصر وهدفه بناء ثقافة الشركة وتطوير
          فريق الإدارة العليا. هذا يشمل تحفيز الموظفين وتشجيع الابتكار والإبداع
          داخل الشركة. بالإضافة إلى ذلك، التأكد من أن الشركة تلتزم بالقوانين
          والتنظيمات المعمول بها، وأن تكون مسؤولة اجتماعيًا.
        </p>
        <span className="badge bg-forth border-primary py-2 px-3 text-primary fw-bold fs-5 my-2">
          مدير إدارة تقنية المعلومات
        </span>
        <p className="text-justify">
          يتولى عمر خان في ركايا مهمة إدارة <strong>إتقان الرقمية</strong>، حيث
          يقود فريقه نحو تطوير وتنفيذ المشاريع التقنية المبتكرة. منذ البدايات
          الأولى وحتى الآن، شهد موقع ركايا تطورًا مستمرًا وتحسينًا داخليًا. هذا
          التطوير الذاتي يمكننا من تقديم أحدث التقنيات وأرقى التصاميم لإثراء
          الإبداع الداخلي والخارجي بالشكل الأمثل. بدعم فريق متخصص يضم مطورين
          لنظامي iOS وAndroid، بالإضافة إلى خبراء في مجالات الـBackend
          والـFrontend، ومصممي واجهات المستخدم وتجربة المستخدم، نحن قادرون على
          تصميم وإطلاق مواقع وتطبيقات على أعلى مستوى.
        </p>
      </Container>
    </VisionLayout>
  </>
);

export default Work;
