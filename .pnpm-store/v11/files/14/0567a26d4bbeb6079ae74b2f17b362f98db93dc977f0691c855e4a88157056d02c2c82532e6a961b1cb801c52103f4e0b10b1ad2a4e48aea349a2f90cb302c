/*!
 * surveyjs - Survey JavaScript library v2.5.33
 * Copyright (c) 2015-2026 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('survey-core')) :
  typeof define === 'function' && define.amd ? define(['survey-core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Survey));
})(this, (function (surveyCore) { 'use strict';

  var arabicSurveyStrings = {
    // "Previous"
    pagePrevText: "السابق",
    // "Next"
    pageNextText: "التالي",
    // "Complete"
    completeText: "إرسال البيانات",
    // "Preview"
    previewText: "معاينة",
    // "Edit"
    editText: "تعديل",
    // "Start"
    startSurveyText: "بداية",
    // [Auto-translated] "Please leave a comment"
    commentText: "الرجاء ترك تعليق",
    // "Other (describe)"
    otherItemText: "نص آخر",
    // "None"
    noneItemText: "لا شيء",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "رفض الإجابة",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "لا أعرف",
    // "Select All"
    selectAllItemText: "اختر الكل",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "إلغاء تحديد الكل",
    // "Page {0} of {1}"
    progressText: "{1} صفحة {0} من",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} من {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "سجل {0} من {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "لوحة {بانل إندكس}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "تمت الإجابة على أسئلة {0} / {1}",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "لا توجد صفحة مرئية أو سؤال في النموذج",
    // "Thank you for completing the survey"
    completingSurvey: "شكرا لكم لاستكمال النموذج!",
    // "You have already completed this survey."
    completingSurveyBefore: "تظهر سجلاتنا أنك قد أكملت هذا الاستطلاع بالفعل.",
    // "Loading Survey..."
    loadingSurvey: "...يتم تحميل النموذج",
    // "Select..."
    placeholder: "...اختر",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "اختار...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "اختار...",
    // "value"
    value: "القيمة",
    // "Response required."
    requiredError: ".يرجى الإجابة على السؤال",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "الرجاء الإجابة على سؤال واحد على الأقل.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "يرجى الإجابة على الأسئلة في جميع الصفوف",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "يجب أن يكون لكل صف قيمة فريدة.",
    // "The value should be numeric."
    numericError: "يجب أن تكون القيمة رقمية.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "يجب ألا تقل القيمة عن {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "الرجاء إدخال قيمة تطابق حجم الخطوة {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "يجب ألا تزيد القيمة عن {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "إدخال غير صالح",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "الأرقام غير مسموح بها.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "يرجى إكمال القيمة لتتناسب مع التنسيق المطلوب.",
    // "Please enter at least {0} character(s)."
    textMinLength: "الرجاء إدخال ما لا يقل عن {0} حروف",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "الرجاء إدخال أقل من {0} حروف",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "يرجى إدخال أكثر من {0} وأقل من {1} حروف",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "يرجى ملء ما لا يقل عن {0} الصفوف",
    // "Please select at least {0} option(s)."
    minSelectError: "يرجى تحديد ما لا يقل عن {0} المتغيرات",
    // "Please select no more than {0} option(s)."
    maxSelectError: "يرجى تحديد ما لا يزيد عن {0} المتغيرات",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "و'{0}' يجب أن تكون مساوية أو أكثر من {1} وتساوي أو أقل من {2}ا",
    // "The '{0}' should be at least {1}"
    numericMin: "و'{0}' يجب أن تكون مساوية أو أكثر من {1}ا",
    // "The '{0}' should be at most {1}"
    numericMax: "و'{0}' يجب أن تكون مساوية أو أقل من {1}ا",
    // "Please enter a valid e-mail address."
    invalidEmail: "الرجاء إدخال بريد الكتروني صحيح",
    // "The expression: {0} should return 'true'."
    invalidExpression: "يجب أن يعرض التعبير: {0} 'صواب'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "طلب إرجاع خطأ '{0}'. {1}ا",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "عاد طلب البيانات فارغ أو 'المسار' غير صحيح ",
    // "The file size should not exceed {0}."
    exceedMaxSize: "ينبغي ألا يتجاوز حجم الملف {0}ا",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "بايت, كيلوبايت, ميب, جيب, تيبرايت",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "الحد الأقصى لعدد الملفات التي يمكنك رفعها هو {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: 'لا يمكن تحميل الملفات. يرجى إضافة معالج لحدث "onUploadFiles".',
    // "Response required: enter another value."
    otherRequiredError: "الرجاء إدخال قيمة أخرى",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "تحميل الملف الخاص بك. يرجى الانتظار عدة ثوان والمحاولة لاحقًا",
    // "Loading..."
    loadingFile: "جار التحميل...",
    // "Choose file(s)..."
    chooseFile: "اختر الملفات...",
    // "No file selected"
    noFileChosen: "لم تقم باختيار ملف",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "اسحب ملفا وأفلته هنا أو انقر فوق الزر أدناه لتحديد ملف لتحميله.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "هل تريد حذف السجل؟",
    // "This value should be unique."
    keyDuplicationError: "يجب أن تكون هذه القيمة فريدة.",
    // "Add Column"
    addColumn: "أضف العمود",
    // "Add Row"
    addRow: "اضافة صف",
    // "Remove"
    removeRow: "إزالة صف",
    // [Auto-translated] "There are no rows."
    noRowsText: "لا توجد صفوف.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "الصف {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "اضف جديد",
    // "Remove"
    removePanel: "إزالة",
    // [Auto-translated] "Show Details"
    showDetails: "اظهر التفاصيل",
    // [Auto-translated] "Hide Details"
    hideDetails: "إخفاء التفاصيل",
    // "item"
    choices_Item: "بند",
    // [Auto-translated] "Choice option"
    choices_Choice: "خيار الاختيار",
    // "Column"
    matrix_column: "عمود",
    // "Row"
    matrix_row: "صف",
    // [Auto-translated] "text"
    multipletext_itemname: "نص",
    // "The results are being saved on the server..."
    savingData: "يتم حفظ النتائج على الخادم ...",
    // "An error occurred and we could not save the results."
    savingDataError: "حدث خطأ ولم نتمكن من حفظ النتائج.",
    // "The results were saved successfully!"
    savingDataSuccess: "تم حفظ النتائج بنجاح!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "ردك يتجاوز 64 كيلوبايت. يرجى تقليل حجم الملف (الملفات) الخاصة بك والمحاولة مرة أخرى أو الاتصال بمالك الاستطلاع.",
    // "Try again"
    saveAgainButton: "حاول مجددا",
    // "min"
    timerMin: "دقيقة",
    // "sec"
    timerSec: "ثانية",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "لقد أنفقت {0} على هذه الصفحة و {1} إجمالاً.",
    // "You have spent {0} on this page."
    timerSpentPage: "لقد أنفقت {0} على هذه الصفحة.",
    // "You have spent {0} in total."
    timerSpentSurvey: "لقد أنفقت {0} إجمالاً.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "لقد أنفقت {0} من {1} في هذه الصفحة و {2} من إجمالي {3}.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "لقد أنفقت {0} من {1} في هذه الصفحة.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "لقد أنفقت {0} من إجمالي {1}.",
    // "Clear"
    clearCaption: "واضح",
    // [Auto-translated] "Select"
    selectCaption: "اختار",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "وقع هنا",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "لا يوجد توقيع",
    // "Select File"
    chooseFileCaption: "اختر ملف",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "التقاط صورة",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "انقر فوق الزر أدناه لالتقاط صورة باستخدام الكاميرا.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "قم بسحب ملف وإفلاته أو تحديده لتحميله أو التقاط صورة باستخدام الكاميرا.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "استبدال الملف",
    // "Remove this file"
    removeFileCaption: "قم بإزالة هذا الملف",
    // "Yes"
    booleanCheckedLabel: "نعم",
    // "No"
    booleanUncheckedLabel: "لا",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "هل أنت متأكد أنك تريد إزالة هذا الملف: {0}؟",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "هل أنت متأكد أنك تريد إزالة كافة الملفات؟",
    // "Question Title"
    questionTitlePatternText: "عنوان السؤال",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "إلغاء الأمر",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "طبق",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "اكتب للبحث...",
    // [Auto-translated] "No data to display"
    emptyMessage: "لا توجد بيانات للعرض",
    // [Auto-translated] "Loading..."
    loadingPage: "تحميل...",
    // [Auto-translated] "Loading..."
    loadingData: "تحميل...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "لا توجد إدخالات بعد.\nانقر فوق الزر أدناه لإضافة إدخال جديد.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "لا توجد إدخالات",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "لوحة جديدة",
    // [Auto-translated] "More"
    more: "أكثر",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "موافق",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "يتم تحديد جميع الخيارات للترتيب",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "اسحب الخيارات هنا لترتيبها",
    // [Auto-translated] "OK"
    ok: "موافق",
    // [Auto-translated] "Cancel"
    cancel: "إلغاء الأمر",
    // "Create \"{0}\" item..."
    createCustomItem: 'قم بإنشاء عنصر "{0}" ...',
    // [Auto-translated] "Table of contents"
    toc: "جدول المحتويات",
    // [Auto-translated] "Progress bar"
    progressbar: "شريط التقدم"
  };
  surveyCore.setupLocale({ localeCode: "ar", strings: arabicSurveyStrings, nativeName: "العربية", englishName: "Arabic", rtl: true });

  var basqueSurveyStrings = {
    // "Previous"
    pagePrevText: "Aurrekoa",
    // "Next"
    pageNextText: "Hurrengoa",
    // "Complete"
    completeText: "Bukatu",
    // "Preview"
    previewText: "Aurrebista",
    // "Edit"
    editText: "Editatu",
    // "Start"
    startSurveyText: "Hasi",
    // [Auto-translated] "Please leave a comment"
    commentText: "Mesedez, utzi iruzkin bat",
    // "Other (describe)"
    otherItemText: "Beste bat (zehaztu)",
    // "None"
    noneItemText: "Bat ere ez",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Erantzuteari uko egin",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Ez dakit",
    // "Select All"
    selectAllItemText: "Guztia hautatu",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Guztiaren aukeraketa bertan behera utzi",
    // "Page {0} of {1}"
    progressText: "{1}-(e)tik {0} orrialde",
    // [Auto-translated] "{0} of {1}"
    indexText: "{1} {0}",
    // "{0} of {1}"
    panelDynamicProgressText: "{0} errigistro {1}-(e)tik",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Erantzundako galderak {0}/{1}",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Ez dago orrialde bistaragarririk edo ez dago galderarik.",
    // "Thank you for completing the survey"
    completingSurvey: "Eskerrik asko galdetegia erantzuteagatik!",
    // "You have already completed this survey."
    completingSurveyBefore: "Gure datuek diote dagoeneko galdetegia erantzun duzula.",
    // "Loading Survey..."
    loadingSurvey: "Galdetegia kargatzen...",
    // "Select..."
    placeholder: "Hautatu...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Aukeratu...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Aukeratu...",
    // "value"
    value: "balioa",
    // "Response required."
    requiredError: "Mesedez, galdera erantzun.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Mesedez, gutxienez galdera bat erantzun.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Mesedez, errenkadako galdera guztiak erantzun.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Ilara bakoitzak balio bakarra izan behar du.",
    // "The value should be numeric."
    numericError: "Estimazioa zenbakizkoa izan behar du.",
    // "The value should not be less than {0}"
    minError: "Balioa ez da {0} baino txikiagoa izan behar",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Sartu {0} urratsaren tamainarekin bat datorren balioa.",
    // "The value should not be greater than {0}"
    maxError: "Balioa ez da {0} baino handiagoa izan behar",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Sarrera baliogabea",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Ezin da zenbakirik egin.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Bete balioa beharrezko formatuarekin bat etortzeko.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Mesedez, gutxienez {0} karaktere erabili behar dira.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Mesedez, gehienez {0} karaktere erabili behar dira.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Mesedez, gehienez {0} eta gutxienez {1} karaktere erabili behar dira.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Mesedez, gutxienez {0} errenkada bete.",
    // "Please select at least {0} option(s)."
    minSelectError: "Mesedez, gutxienez {0} aukera hautatu.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Mesedez, {0} aukera baino gehiago ez hautatu.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "El '{0}' debe de ser igual o más de {1} y igual o menos de {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' {1} baino handiagoa edo berdin izan behar da",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' {1} baino txikiago edo berdin izan behar da",
    // "Please enter a valid e-mail address."
    invalidEmail: "Mesedez, baliozko emaila idatz ezazu.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "{0} adierazpenak 'egiazkoa' itzuli beharko luke.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Eskaerak '{0}' errorea itzuli du. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "La solicitud regresó vacío de data o la propiedad 'trayectoria' no es correcta",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Fitxategiaren tamaina ez da {0} baino handiagoa izan behar.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Byteak, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Igo ditzakezun gehienezko fitxategi kopurua {0} da.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Artxiboak ezin dira kargatu. Gaineratu kontrolatzaile bat 'onUploadFiles' ekitaldirako.",
    // "Response required: enter another value."
    otherRequiredError: "Mesedez, beste estimazioa gehitu.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Zure fitxategia igotzen ari da. Mesedez, segundo batzuk itxaron eta saiatu berriro.",
    // "Loading..."
    loadingFile: "Kargatzen...",
    // "Choose file(s)..."
    chooseFile: "Fitxategia(k) hautatu...",
    // "No file selected"
    noFileChosen: "Ez da inolako fitxategirik hautatu",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Eraman artxibo bat hemen edo egin klik beheko botoian, kargatzeko artxibo bat aukeratzeko.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "¿Erregistroa borratu nahi al duzu?",
    // "This value should be unique."
    keyDuplicationError: "Balio hau bakarra izan behar du.",
    // "Add Column"
    addColumn: "Zutabe bat gehitu",
    // "Add Row"
    addRow: "Errenkada bat gehitu",
    // "Remove"
    removeRow: "Errenkada bat kendu",
    // "There are no rows."
    noRowsText: "Ez dago errenkadarik.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Fila {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Berria gehitu",
    // "Remove"
    removePanel: "Kendu",
    // [Auto-translated] "Show Details"
    showDetails: "Xehetasunak erakutsi",
    // [Auto-translated] "Hide Details"
    hideDetails: "Xehetasunak ezkutatu",
    // "item"
    choices_Item: "artikulua",
    // [Auto-translated] "Choice option"
    choices_Choice: "Aukeratzeko aukera",
    // "Column"
    matrix_column: "Zutabea",
    // "Row"
    matrix_row: "Errenkada",
    // "text"
    multipletext_itemname: "testua",
    // "The results are being saved on the server..."
    savingData: "Erantzunak zerbitzarian gordetzen ari dira...",
    // "An error occurred and we could not save the results."
    savingDataError: "Erroreren bat gertatu eta erantzunak ez dira zerbitzarian gorde ahal izan.",
    // "The results were saved successfully!"
    savingDataSuccess: "Erantzunak egoki gorde dira!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Erantzuna 64 KB-tik gorakoa da. Murriztu artxiboaren tamaina, eta berriro saiatu edo jarri harremanetan inkestaren jabearekin.",
    // "Try again"
    saveAgainButton: "Berriro saiatu.",
    // [Auto-translated] "min"
    timerMin: "min",
    // "sec"
    timerSec: "seg",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "{0} erabili duzu orrialde honetan eta orotara {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "Zuk {0} erabili duzu.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Orotara gastatu duzu.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "{0} gastatu duzu {1}-(e)tik orrialde honetan eta orotara {2} {3}-(e)tik.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "{0} gastatu duzu orrialde honetan {1}-(e)tik.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Zuk orotara {0} gastatu duzu {1}-(e)tik.",
    // "Clear"
    clearCaption: "Hustu",
    // [Auto-translated] "Select"
    selectCaption: "Aukeratu",
    // "Sign here"
    signaturePlaceHolder: "Sinatu hemen",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Sinadurarik gabe",
    // "Select File"
    chooseFileCaption: "Fitxategia hautatu",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Argazkia hartu",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Egin klik beheko botoian, kamerarekin argazki bat hartzeko.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Arrastatu eta askatu artxibo bat kamerarekin argazki bat kargatzeko edo hartzeko.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Artxiboa ordeztu",
    // "Remove this file"
    removeFileCaption: "Fitxategi hau ezabatu",
    // "Yes"
    booleanCheckedLabel: "Bai",
    // "No"
    booleanUncheckedLabel: "Ez",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Ziur zaude hurrengo fitxategia ezabatu nahi duzula: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Ziur al zaude fitxategi guztiak ezabatu nahi dituzula?",
    // "Question Title"
    questionTitlePatternText: "Galderaren izenburua",
    // "Cancel"
    modalCancelButtonText: "Ezeztatu",
    // "Apply"
    modalApplyButtonText: "Ezarri",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Idatzi bila...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Ez daturik erakusteko",
    // [Auto-translated] "Loading..."
    loadingPage: "Karga...",
    // [Auto-translated] "Loading..."
    loadingData: "Karga...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Oraindik ez sarrerarik.\nKlik beheko botoian klik egin sarrera berri bat eransteko.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Ez sarrerarik",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Panel berria",
    // [Auto-translated] "More"
    more: "Gehiago",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "Ados",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Aukera guztiak sailkapenerako aukeratzen dira",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Aukerak hemen dituzu sailkatzeko",
    // [Auto-translated] "OK"
    ok: "Ados",
    // [Auto-translated] "Cancel"
    cancel: "Ezeztatu",
    // "Create \"{0}\" item..."
    createCustomItem: '"{0}" artikulua sortzea...',
    // [Auto-translated] "Table of contents"
    toc: "Edukien taula",
    // [Auto-translated] "Progress bar"
    progressbar: "Aurrerapen barra"
  };
  surveyCore.setupLocale({ localeCode: "eu", strings: basqueSurveyStrings, nativeName: "euskara", englishName: "Basque" });

  var bulgarianStrings = {
    // "Previous"
    pagePrevText: "Назад",
    // "Next"
    pageNextText: "Напред",
    // "Complete"
    completeText: "Край",
    // "Preview"
    previewText: "Визуализация",
    // "Edit"
    editText: "редактиране",
    // "Start"
    startSurveyText: "Начало",
    // [Auto-translated] "Please leave a comment"
    commentText: "Моля, оставете коментар",
    // "Other (describe)"
    otherItemText: "Друго (опишете)",
    // "None"
    noneItemText: "Нито един",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Отказва да отговори",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Не знам",
    // "Select All"
    selectAllItemText: "Всички",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Премахване на избора на всички",
    // "Page {0} of {1}"
    progressText: "стр. {0}, общо стр. {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} на {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Запис {0} от {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Панел {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Отговорени на {0} / {1} въпроса",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Анкетата не съдържа видими страници или въпроси.",
    // "Thank you for completing the survey"
    completingSurvey: "Благодарим ви за участието в анкетата!",
    // "You have already completed this survey."
    completingSurveyBefore: "Изглежда, че вие вече сте попълнили анкетата.",
    // "Loading Survey..."
    loadingSurvey: "Зареждане на анкетата...",
    // "Select..."
    placeholder: "Изберете...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Отбран...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Отбран...",
    // [Auto-translated] "value"
    value: "Стойност",
    // "Response required."
    requiredError: "Моля, отговорете на следния въпрос.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Моля, отговорете поне на един от въпросите.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Моля, отговорете на въпросите на всички редове.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Всеки ред трябва да има уникална стойност.",
    // "The value should be numeric."
    numericError: "Стойността следва да бъде число.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Стойността не трябва да бъде по-малка от {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Моля, въведете стойност, която съответства на размера на стъпката на {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Стойността не трябва да бъде по-голяма от {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Невалиден вход",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Номерата не са позволени.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Моля, попълнете стойността, за да съответствате на необходимия формат.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Моля, използвайте поне {0} символа.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Моля, използвайте не повече от {0} символа.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Моля, използвайте повече от {0} и по-малко от {1} символа.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Моля, попълнете поне {0} реда.",
    // "Please select at least {0} option(s)."
    minSelectError: "Моля, изберете поне {0} варианта.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Моля, изберете не повече от {0} варианта.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "Стойността '{0}' следва да бъде равна или по-голяма от {1} и равна или по-малка от {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "Стойността '{0}' следва да бъде равна или по-голяма от {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "Стойността '{0}' следва да бъде равна или по-малка от {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Моля, въведете валиден адрес на електронна поща.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Изразът: {0} трябва да дава резултат 'true' (истина).",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Заявката води до грешка '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Заявката не връща данни или частта 'path' (път до търсения ресурс на сървъра) е неправилно зададена",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Размерът на файла следва да не превишава {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Байтове, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Максималният брой файлове, които можете да качите, е {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: 'Файловете не могат да бъдат качени. Моля, добавете манипулатор за събитието "onUploadFiles".',
    // "Response required: enter another value."
    otherRequiredError: "Моля, въведете другата стойност.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Вашит файл се зарежда на сървъра. Моля, изчакайте няколко секунди и тогава опитвайте отново.",
    // "Loading..."
    loadingFile: "Зареждане...",
    // "Choose file(s)..."
    chooseFile: "Изберете файл(ове)...",
    // "No file selected"
    noFileChosen: "Няма избран файл",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Плъзнете и пуснете файл тук или щракнете върху бутона по-долу, за да изберете файл за качване.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Желаете ли да изтриете записа?",
    // "This value should be unique."
    keyDuplicationError: "Стойността следва да бъде уникална.",
    // "Add Column"
    addColumn: "Добавяне на колона",
    // "Add Row"
    addRow: "Добавяне на ред",
    // "Remove"
    removeRow: "Премахване на ред",
    // [Auto-translated] "There are no rows."
    noRowsText: "Няма редове.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Ред {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Добавяне на панел",
    // "Remove"
    removePanel: "Премахване на панел",
    // [Auto-translated] "Show Details"
    showDetails: "Показване на подробни данни",
    // [Auto-translated] "Hide Details"
    hideDetails: "Скрий подробните данни",
    // "item"
    choices_Item: "елемент",
    // [Auto-translated] "Choice option"
    choices_Choice: "Опция за избор",
    // "Column"
    matrix_column: "Колона",
    // "Row"
    matrix_row: "Ред",
    // [Auto-translated] "text"
    multipletext_itemname: "Текст",
    // "The results are being saved on the server..."
    savingData: "Резултатите се запазват на сървъра...",
    // "An error occurred and we could not save the results."
    savingDataError: "Поради възникнала грешка резултатите не можаха да бъдат запазени.",
    // "The results were saved successfully!"
    savingDataSuccess: "Резултатите бяха запазени успешно!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Вашият отговор надхвърля 64KB. Моля, намалете размера на вашите файлове и опитайте отново или се свържете със собственика на проучването.",
    // "Try again"
    saveAgainButton: "Нов опит",
    // "min"
    timerMin: "мин",
    // "sec"
    timerSec: "сек",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Вие използвахте {0} на тази страница и общо {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "Вие използвахте {0} на тази страница.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Вие използвахте общо {0}.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Вие изпозвахте {0} от {1} на тази страница и общо {2} от {3}.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Вие използвахте {0} от {1} на тази страница.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Вие използвахте общо {0} от {1}.",
    // "Clear"
    clearCaption: "Начално състояние",
    // [Auto-translated] "Select"
    selectCaption: "Отбран",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Подпишете тук",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Няма подпис",
    // "Select File"
    chooseFileCaption: "Изберете файл",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Направете снимка",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Кликнете върху бутона по-долу, за да направите снимка с помощта на камерата.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Плъзнете и пуснете или изберете файл за качване или правене на снимка с помощта на камерата.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Заместване на файл",
    // "Remove this file"
    removeFileCaption: "Премахване на файла",
    // "Yes"
    booleanCheckedLabel: "Да",
    // "No"
    booleanUncheckedLabel: "Не",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Наистина ли искате да премахнете този файл: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Наистина ли искате да премахнете всички файлове?",
    // "Question Title"
    questionTitlePatternText: "Заглавие на въпроса",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Отмени",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Прилагам",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Въведете за търсене...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Няма данни за показване",
    // [Auto-translated] "Loading..."
    loadingPage: "Зареждане...",
    // [Auto-translated] "Loading..."
    loadingData: "Зареждане...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Все още няма записи.\nЩракнете върху бутона по-долу, за да добавите нов запис.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Няма записи",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Нов панел",
    // [Auto-translated] "More"
    more: "Още",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "Добре",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Всички избори се избират за класиране",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Плъзнете изборите тук, за да ги класирате",
    // [Auto-translated] "OK"
    ok: "Добре",
    // [Auto-translated] "Cancel"
    cancel: "Отмени",
    // "Create \"{0}\" item..."
    createCustomItem: 'Създайте елемент "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Съдържание",
    // [Auto-translated] "Progress bar"
    progressbar: "Лента за напредъка"
  };
  surveyCore.setupLocale({ localeCode: "bg", strings: bulgarianStrings, nativeName: "български", englishName: "Bulgarian" });

  var burmeseStrings = {
    // "Previous"
    pagePrevText: "နောက်သို့",
    // "Next"
    pageNextText: "ရှေ့သို့",
    // "Complete"
    completeText: "ပြီးဆုံးပါပြီ",
    // "Preview"
    previewText: "ကြိုတင်ကြည့်ရှုရန်",
    // "Edit"
    editText: "တည်းဖြတ်ရန်",
    // "Start"
    startSurveyText: "စတင်ရန်",
    // "Other (describe)"
    otherItemText: "အခြား (ဖော်ပြပါ)",
    // "None"
    noneItemText: "ဘာမျှမရှိပါ",
    // "Refuse to answer"
    refuseItemText: "ဖြေဆိုရန်ငြင်းဆန်သည်",
    // "Don't know"
    dontKnowItemText: "မသိပါ",
    // "Select All"
    selectAllItemText: "အားလုံးရွေးချယ်ပါ",
    // "Deselect all"
    deselectAllItemText: "အားလုံးမရွေးချယ်ပါ",
    // "Page {0} of {1}"
    progressText: "စာမျက်နှာ {0}/{1}",
    // "{0} of {1}"
    indexText: "{0}/{1}",
    // "{0} of {1}"
    panelDynamicProgressText: "{0}/{1}",
    // "Panel {panelIndex}"
    panelDynamicTabTextFormat: "ပန်းနယ် {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "မေးခွန်းများ {0}/{1} ဖြေဆိုပြီးပြီ",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "ဒီစစ်တမ်းတွင် မြင်သာမေးခွန်းများမရှိပါ။",
    // "Thank you for completing the survey"
    completingSurvey: "စစ်တမ်းကိုပြီးမြောက်စွာဖြေဆိုပေးခဲ့သည့်အတွက်ကျေးဇူးတင်ပါသည်။",
    // "You have already completed this survey."
    completingSurveyBefore: "ဒီစစ်တမ်းကို မျှဝေပြီးသားဖြေဆိုထားပါသည်။",
    // "Loading Survey..."
    loadingSurvey: "စစ်တမ်းကိုလုပ်ဆောင်နေသည်...",
    // "Select..."
    placeholder: "ရွေးချယ်ပါ...",
    // "Select..."
    ratingOptionsCaption: "ရွေးချယ်ပါ...",
    // "value"
    value: "တန်ဖိုး",
    // "Response required."
    requiredError: "ဖြေဆိုရန်လိုအပ်ပါသည်။",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "ဖြေဆိုရန်လိုအပ်ပါသည် - အနည်းဆုံးတစ်ခုကိုဖြေဆိုပါ။",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "အတန်းအားလုံးတွင်ဖြေဆိုရန်လိုအပ်ပါသည်။",
    // "Each row must have a unique value."
    eachRowUniqueError: "အတန်းတိုင်းတွင်ထပ်တူဖြေဆိုမှုမရှိရပါ။",
    // "The value should be numeric."
    numericError: "တန်ဖိုးသည်ကိန်းဂဏန်းဖြစ်ရပါမည်။",
    // "The value should not be less than {0}"
    minError: "တန်ဖိုးသည် {0} ထက်မနည်းရပါ။",
    // "The value should not be greater than {0}"
    maxError: "တန်ဖိုးသည် {0} ထက်မကျော်ရပါ။",
    // "Numbers are not allowed."
    textNoDigitsAllow: "ကိန်းဂဏန်းများကိုခွင့်မပြုပါ။",
    // "Please enter at least {0} character(s)."
    textMinLength: "အနည်းဆုံး {0} လုံးဖြည့်စွက်ပါ။",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "အများဆုံး {0} လုံးထိသာဖြည့်စွက်ပါ။",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "အနည်းဆုံး {0} နှင့်အများဆုံး {1} လုံးဖြည့်စွက်ပါ။",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "အနည်းဆုံး {0} အတန်းဖြည့်စွက်ပါ။",
    // "Please select at least {0} option(s)."
    minSelectError: "အနည်းဆုံး {0} ရွေးချယ်ချက်များရွေးပါ။",
    // "Please select no more than {0} option(s)."
    maxSelectError: "အများဆုံး {0} ရွေးချယ်ချက်များသာရွေးပါ။",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "‘{0}’ သည် {1} နှင့် {2} အကြားဖြစ်ရမည်။",
    // "The '{0}' should be at least {1}"
    numericMin: "‘{0}’ သည် {1} ထက်မနည်းရပါ။",
    // "The '{0}' should be at most {1}"
    numericMax: "‘{0}’ သည် {1} ထက်မကျော်ရပါ။",
    // "Please enter a valid e-mail address."
    invalidEmail: "တရားဝင်သော အီးမေးလ်လိပ်စာကိုရိုက်ထည့်ပါ။",
    // "The expression: {0} should return 'true'."
    invalidExpression: "အထောက်အထား {0} သည် 'true' ပြန်သင့်သည်။",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "တောင်းဆိုမှုတွင် အမှား '{0}' ဖြစ်ခဲ့သည်။ {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "တောင်းဆိုမှုတွင်ဒေတာမရှိပါ။ သို့မဟုတ် 'path' ပိုင်ဆိုင်မှုမှာမှားနေပါသည်။",
    // "The file size should not exceed {0}."
    exceedMaxSize: "ဖိုင်အရွယ်အစားသည် {0} ထက်မကျော်ရပါ။",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "ဖိုင်များကိုအပ်လုဒ်လုပ်၍မရနိုင်ပါ။",
    // "Response required: enter another value."
    otherRequiredError: "ဖြေဆိုရန်လိုအပ်ပါသည်။ တန်ဖိုးတစ်ခုရိုက်ထည့်ပါ။",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "ဖိုင်တင်နေသည်။ မိနစ်ပိုင်းစောင့်ပြီးပြန်ကြိုးစားပါ။",
    // "Loading..."
    loadingFile: "တင်နေသည်...",
    // "Choose file(s)..."
    chooseFile: "ဖိုင်(များ) ရွေးချယ်ပါ...",
    // "No file selected"
    noFileChosen: "ဖိုင်မရွေးရသေးပါ",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "ဖိုင်တစ်ခုအားဤနေရာတွင်ဆွဲချပြီးအောက်တွင်ရှိသောခလုတ်ကိုနှိပ်ပါ။",
    // "Are you sure you want to delete this record?"
    confirmDelete: "ဤမှတ်တမ်းကိုဖျက်မည်မှာ သေချာပါသလား?",
    // "This value should be unique."
    keyDuplicationError: "ဤတန်ဖိုးသည်ထူးခြားဖြစ်ရပါမည်။",
    // "Add Column"
    addColumn: "ကော်လံထည့်ရန်",
    // "Add Row"
    addRow: "တန်းထည့်ရန်",
    // "Remove"
    removeRow: "ဖယ်ရှားရန်",
    // "Add new"
    addPanel: "အသစ်ထည့်ပါ",
    // "Remove"
    removePanel: "ဖယ်ရှားပါ",
    // "Show Details"
    showDetails: "အသေးစိတ်ပြရန်",
    // "Hide Details"
    hideDetails: "အသေးစိတ်ဖျောက်ရန်",
    // "item"
    choices_Item: "အရာ",
    // "Column"
    matrix_column: "ကော်လံ",
    // "Row"
    matrix_row: "တန်း",
    // "text"
    multipletext_itemname: "စာသား",
    // "The results are being saved on the server..."
    savingData: "ရလဒ်များကိုဆာဗာတွင်သိမ်းဆည်းနေသည်...",
    // "An error occurred and we could not save the results."
    savingDataError: "အမှားတစ်ခုဖြစ်ပြီး ရလဒ်များကိုသိမ်းဆည်း၍မရနိုင်ပါ။",
    // "The results were saved successfully!"
    savingDataSuccess: "ရလဒ်များကိုအောင်မြင်စွာသိမ်းဆည်းပြီးပါပြီ။",
    // "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "သင့်ဖြေဆိုမှုသည် 64KB ကျော်နေပါသည်။",
    // "Try again"
    saveAgainButton: "ထပ်ကြိုးစားရန်",
    // "min"
    timerMin: "မိနစ်",
    // "sec"
    timerSec: "စက္ကန့်",
    // "Clear"
    clearCaption: "ရှင်းလင်းရန်",
    // "Sign here"
    signaturePlaceHolder: "ဤနေရာတွင်လက်မှတ်ရေးပါ",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "ဤဖိုင်အားဖယ်ရှားမည်မှာ သေချာပါသလား: {0}?",
    // "OK"
    ok: "အိုကေ",
    // "Cancel"
    cancel: "ပယ်ဖျက်ပါ"
  };
  surveyCore.setupLocale({ localeCode: "mm", strings: burmeseStrings, nativeName: "မြန်မာ", englishName: "Burmese" });

  var catalanSurveyStrings = {
    // "Previous"
    pagePrevText: "Anterior",
    // "Next"
    pageNextText: "Següent",
    // "Complete"
    completeText: "Complet",
    // [Auto-translated] "Preview"
    previewText: "Preestrena",
    // [Auto-translated] "Edit"
    editText: "Editar",
    // [Auto-translated] "Start"
    startSurveyText: "Començar",
    // [Auto-translated] "Please leave a comment"
    commentText: "Si us plau, deixa un comentari",
    // "Other (describe)"
    otherItemText: "Un altre (descrigui)",
    // [Auto-translated] "None"
    noneItemText: "Cap",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Negar-se a respondre",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "No sé",
    // [Auto-translated] "Select All"
    selectAllItemText: "Selecciona-ho tot",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Desselecciona-ho tot",
    // "Page {0} of {1}"
    progressText: "Pàgina {0} de {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} de {1}",
    // [Auto-translated] "{0} of {1}"
    panelDynamicProgressText: "{0} de {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panell {panelIndex}",
    // [Auto-translated] "Answered {0}/{1} questions"
    questionsProgressText: "Respostes {0}/{1} preguntes",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "No hi ha cap pàgina visible o pregunta a l'enquesta.",
    // "Thank you for completing the survey"
    completingSurvey: "Gràcies per completar l'enquesta!",
    // [Auto-translated] "You have already completed this survey."
    completingSurveyBefore: "Ja heu completat aquesta enquesta.",
    // "Loading Survey..."
    loadingSurvey: "L'enquesta s'està carregant ...",
    // "Select..."
    placeholder: "Selecciona ...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Seleccionar...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Seleccionar...",
    // [Auto-translated] "value"
    value: "valor",
    // "Response required."
    requiredError: "Si us plau contesti la pregunta.",
    // [Auto-translated] "Response required: answer at least one question."
    requiredErrorInPanel: "Resposta necessària: respondre almenys una pregunta.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Si us plau contesti les preguntes de cada filera.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Cada fila ha de tenir un valor únic.",
    // "The value should be numeric."
    numericError: "L'estimació ha de ser numèrica.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "El valor no ha de ser inferior a {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Introduïu un valor que coincideixi amb la mida del pas de {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "El valor no ha de ser superior a {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Entrada invàlida",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "No es permeten números.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Si us plau, completeu el valor per ajustar-lo al format requerit.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Si us plau entre almenys {0} símbols.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Si us plau entre menys de {0} símbols.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Si us plau entre més de {0} i menys de {1} símbols.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Si us plau ompli almenys {0} fileres.",
    // "Please select at least {0} option(s)."
    minSelectError: "Si us plau seleccioni almenys {0} variants.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Si us plau seleccioni no més de {0} variants.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "El '{0}' deu ser igual o més de {1} i igual o menys de {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "El '{0}' ha de ser igual o més de {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "El '{0}' ha de ser igual o menys de {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Si us plau afegiu un correu electrònic vàlid.",
    // [Auto-translated] "The expression: {0} should return 'true'."
    invalidExpression: "L'expressió: {0} ha de tornar 'veritable'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "La sol·licitud va tornar error '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "La sol·licitud va tornar buida de dates o la propietat 'trajectòria' no és correcta",
    // "The file size should not exceed {0}."
    exceedMaxSize: "La mida de l'arxiu no pot excedir {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bytes, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "El nombre màxim d'arxius que pots pujar és {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "No es poden carregar fitxers. Afegiu un controlador per a l'esdeveniment 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Si us plau afegiu l'altra estimació.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "El seu arxiu s'està pujant. Si us plau esperi uns segons i intenteu-ho de nou.",
    // [Auto-translated] "Loading..."
    loadingFile: "Càrrega...",
    // [Auto-translated] "Choose file(s)..."
    chooseFile: "Trieu fitxer(s)...",
    // [Auto-translated] "No file selected"
    noFileChosen: "Cap fitxer seleccionat",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Arrossegueu i deixeu anar un fitxer aquí o feu clic al botó següent per seleccionar un fitxer per penjar.",
    // [Auto-translated] "Are you sure you want to delete this record?"
    confirmDelete: "Esteu segur que voleu suprimir aquest registre?",
    // [Auto-translated] "This value should be unique."
    keyDuplicationError: "Aquest valor ha de ser únic.",
    // [Auto-translated] "Add Column"
    addColumn: "Afegeix una columna",
    // "Add Row"
    addRow: "Afegiu una filera",
    // "Remove"
    removeRow: "Eliminar una filera",
    // [Auto-translated] "There are no rows."
    noRowsText: "No hi ha files.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Fila {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // [Auto-translated] "Add new"
    addPanel: "Afegeix un nou",
    // [Auto-translated] "Remove"
    removePanel: "Treure",
    // [Auto-translated] "Show Details"
    showDetails: "Mostra els detalls",
    // [Auto-translated] "Hide Details"
    hideDetails: "Amaga els detalls",
    // [Auto-translated] "item"
    choices_Item: "ítem",
    // [Auto-translated] "Choice option"
    choices_Choice: "Opció d'elecció",
    // "Column"
    matrix_column: "Columna",
    // "Row"
    matrix_row: "Filera",
    // [Auto-translated] "text"
    multipletext_itemname: "SMS",
    // [Auto-translated] "The results are being saved on the server..."
    savingData: "Els resultats s'estan guardant al servidor...",
    // [Auto-translated] "An error occurred and we could not save the results."
    savingDataError: "S'ha produït un error i no hem pogut guardar els resultats.",
    // [Auto-translated] "The results were saved successfully!"
    savingDataSuccess: "Els resultats es van salvar amb èxit!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "La teva resposta supera els 64 KB. Reduïu la mida dels fitxers i torneu-ho a provar o poseu-vos en contacte amb el propietari de l'enquesta.",
    // [Auto-translated] "Try again"
    saveAgainButton: "Prova una altra vegada",
    // [Auto-translated] "min"
    timerMin: "min",
    // [Auto-translated] "sec"
    timerSec: "Seg",
    // [Auto-translated] "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Heu passat {0} en aquesta pàgina i {1} en total.",
    // [Auto-translated] "You have spent {0} on this page."
    timerSpentPage: "Has passat {0} en aquesta pàgina.",
    // [Auto-translated] "You have spent {0} in total."
    timerSpentSurvey: "Has gastat {0} en total.",
    // [Auto-translated] "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Heu passat {0} de {1} en aquesta pàgina i {2} de {3} en total.",
    // [Auto-translated] "You have spent {0} of {1} on this page."
    timerLimitPage: "Has passat {0} de {1} en aquesta pàgina.",
    // [Auto-translated] "You have spent {0} of {1} in total."
    timerLimitSurvey: "Has gastat {0} d'{1} en total.",
    // [Auto-translated] "Clear"
    clearCaption: "Clar",
    // [Auto-translated] "Select"
    selectCaption: "Seleccionar",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Inscriu-te aquí",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Sense signatura",
    // [Auto-translated] "Select File"
    chooseFileCaption: "Seleccioneu Fitxer",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Fer foto",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Feu clic al botó següent per fer una foto amb la càmera.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Arrossegueu i deixeu anar o seleccioneu un fitxer per penjar-lo o fer-ne una foto amb la càmera.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Substitueix el fitxer",
    // [Auto-translated] "Remove this file"
    removeFileCaption: "Suprimeix aquest fitxer",
    // [Auto-translated] "Yes"
    booleanCheckedLabel: "Sí",
    // [Auto-translated] "No"
    booleanUncheckedLabel: "No",
    // [Auto-translated] "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Esteu segur que voleu eliminar aquest fitxer: {0}?",
    // [Auto-translated] "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Esteu segur que voleu eliminar tots els fitxers?",
    // [Auto-translated] "Question Title"
    questionTitlePatternText: "Títol de la pregunta",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Cancel·lar",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Aplicar",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Escriviu per cercar...",
    // [Auto-translated] "No data to display"
    emptyMessage: "No hi ha dades per mostrar",
    // [Auto-translated] "Loading..."
    loadingPage: "Càrrega...",
    // [Auto-translated] "Loading..."
    loadingData: "Càrrega...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Encara no hi ha entrades.\nFeu clic al botó següent per afegir una nova entrada.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "No hi ha entrades",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Nou Panell",
    // [Auto-translated] "More"
    more: "Més",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "D'ACORD",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Totes les opcions estan seleccionades per a la classificació",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Arrossega les opcions aquí per classificar-les",
    // [Auto-translated] "OK"
    ok: "D'ACORD",
    // [Auto-translated] "Cancel"
    cancel: "Cancel·lar",
    // "Create \"{0}\" item..."
    createCustomItem: 'Crea un element "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Taula de continguts",
    // [Auto-translated] "Progress bar"
    progressbar: "Barra de progrés"
  };
  surveyCore.setupLocale({ localeCode: "ca", strings: catalanSurveyStrings, nativeName: "català", englishName: "Catalan" });

  var croatianStrings = {
    // "Previous"
    pagePrevText: "Prethodni",
    // "Next"
    pageNextText: "Sljedeći",
    // "Complete"
    completeText: "Kompletan",
    // "Preview"
    previewText: "Pregled",
    // "Edit"
    editText: "Uređivanje",
    // "Start"
    startSurveyText: "Početak",
    // [Auto-translated] "Please leave a comment"
    commentText: "Molimo ostavite komentar",
    // "Other (describe)"
    otherItemText: "Ostali (opis)",
    // "None"
    noneItemText: "Nitko",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Odbijte odgovoriti",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Ne znam",
    // [Auto-translated] "Select All"
    selectAllItemText: "Odaberi sve",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Poništite odabir svega",
    // "Page {0} of {1}"
    progressText: "Stranica {0} od {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Zapisa {0} od {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Ploča {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Odgovorio na {0}/{1} pitanja",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "U anketi nema vidljive stranice ili pitanja.",
    // "Thank you for completing the survey"
    completingSurvey: "Hvala vam što ste završili anketu!",
    // "You have already completed this survey."
    completingSurveyBefore: "Naši zapisi pokazuju da ste već završili ovu anketu.",
    // "Loading Survey..."
    loadingSurvey: "Anketa o učitavanje...",
    // "Select..."
    placeholder: "Odaberite...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Odabirati...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Odabirati...",
    // "value"
    value: "vrijednost",
    // "Response required."
    requiredError: "Molim vas odgovorite na pitanje.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Molim vas odgovorite na barem jedno pitanje.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Odgovorite na pitanja u svim redovima.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Svaki redak mora imati jedinstvenu vrijednost.",
    // "The value should be numeric."
    numericError: "Vrijednost bi trebala biti brojčana.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Vrijednost ne smije biti manja od {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Unesite vrijednost koja odgovara veličini koraka {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Vrijednost ne smije biti veća od {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Nevažeći ulaz",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Brojevi nisu dopušteni.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Molimo ispunite vrijednost kako bi odgovarala potrebnom formatu.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Unesite najmanje {0} znak(ova).",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Unesite manje od {0} znak(ova).",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Unesite više od {0} i manje od {1} znakova.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Molimo ispunite najmanje {0} redaka.",
    // "Please select at least {0} option(s)."
    minSelectError: "Odaberite barem {0} varijante.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Odaberite ne više od {0} varijanti.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}'bi trebao biti jednak ili više od {1} i jednak ili manji od {2}.",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' bi trebao biti jednak ili više od {1}.",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' bi trebao biti jednak ili manji od {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Unesite valjanu e-mail adresu.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Izraz: {0} treba vratiti 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Zahtjev vratio pogrešku '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Zahtjev je vratio prazne podatke ili je 'path' svojstvo netočna.",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Veličina datoteke ne smije prelaziti {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bajtovi, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Maksimalan broj datoteka koje možete učitati je {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Datoteke se ne mogu prenijeti. Dodajte rukovatelja za događaj 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Unesite drugu vrijednost.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Vaša datoteka se prenosi. Pričekajte nekoliko sekundi i pokušajte ponovno.",
    // "Loading..."
    loadingFile: "Učitavanje...",
    // "Choose file(s)..."
    chooseFile: "Odaberite datoteku...",
    // "No file selected"
    noFileChosen: "Nije odabrana datoteka",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Ovdje povucite i ispustite datoteku ili kliknite gumb u nastavku da biste odabrali datoteku za prijenos.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Želite li izbrisati zapis?",
    // "This value should be unique."
    keyDuplicationError: "Ta bi vrijednost trebala biti jedinstvena.",
    // "Add Column"
    addColumn: "Dodavanje stupca",
    // "Add Row"
    addRow: "Dodavanje redaka",
    // "Remove"
    removeRow: "Ukloniti",
    // [Auto-translated] "There are no rows."
    noRowsText: "Nema redova.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Redak {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Dodavanje novih",
    // "Remove"
    removePanel: "Ukloniti",
    // [Auto-translated] "Show Details"
    showDetails: "Pokaži detalje",
    // [Auto-translated] "Hide Details"
    hideDetails: "Sakrij detalje",
    // "item"
    choices_Item: "stavku",
    // [Auto-translated] "Choice option"
    choices_Choice: "Opcija izbora",
    // "Column"
    matrix_column: "Stupca",
    // "Row"
    matrix_row: "Redak",
    // [Auto-translated] "text"
    multipletext_itemname: "Tekstualna poruka",
    // "The results are being saved on the server..."
    savingData: "Rezultati se spremaju na poslužitelju...",
    // "An error occurred and we could not save the results."
    savingDataError: "Došlo je do pogreške i nismo mogli spremiti rezultate.",
    // "The results were saved successfully!"
    savingDataSuccess: "Rezultati su uspješno spremljeni!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Vaš odgovor premašuje 64 KB. Smanjite veličinu datoteka/datoteka i pokušajte ponovno ili se obratite vlasniku ankete.",
    // "Try again"
    saveAgainButton: "Pokušaj ponovo",
    // [Auto-translated] "min"
    timerMin: "min",
    // [Auto-translated] "sec"
    timerSec: "SEC",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Vi ste proveli {0} na ovoj stranici i {1} ukupno.",
    // "You have spent {0} on this page."
    timerSpentPage: "Potrošili ste {0} na ovu stranicu.",
    // "You have spent {0} in total."
    timerSpentSurvey: "You have spent {0} in total. {0}.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Vi ste proveli {0} od {1} na ovoj stranici i {2} od {3} ukupno.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Potrošio si {0} od {1} na ovoj stranici.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Ukupno ste potrošili {0} od {1}.",
    // "Clear"
    clearCaption: "Očistiti",
    // [Auto-translated] "Select"
    selectCaption: "Odabirati",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Potpiši ovdje",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Bez potpisa",
    // "Select File"
    chooseFileCaption: "Odaberite datoteku",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Snimi fotografiju",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Kliknite donji gumb da biste snimili fotografiju pomoću kamere.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Povucite i ispustite ili odaberite datoteku za prijenos ili snimanje fotografije pomoću kamere.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Zamijeni datoteku",
    // "Remove this file"
    removeFileCaption: "Uklonite ovu datoteku",
    // "Yes"
    booleanCheckedLabel: "Da",
    // "No"
    booleanUncheckedLabel: "Ne",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Jeste li sigurni da želite ukloniti ovu datoteku: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Jeste li sigurni da želite ukloniti sve datoteke?",
    // "Question Title"
    questionTitlePatternText: "Naslov pitanja",
    // "Cancel"
    modalCancelButtonText: "Otkazati",
    // "Apply"
    modalApplyButtonText: "Primijeniti",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Upišite za pretraživanje...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Nema podataka za prikaz",
    // [Auto-translated] "Loading..."
    loadingPage: "Učitavanje...",
    // [Auto-translated] "Loading..."
    loadingData: "Učitavanje...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Još nema unosa.\nKliknite gumb u nastavku da biste dodali novi unos.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Nema unosa",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Nova ploča",
    // [Auto-translated] "More"
    more: "Više",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Svi izbori su odabrani za rangiranje",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Povucite izbore ovdje da biste ih rangirali",
    // [Auto-translated] "OK"
    ok: "OK",
    // [Auto-translated] "Cancel"
    cancel: "Otkazati",
    // "Create \"{0}\" item..."
    createCustomItem: 'Stvorite "{0}" stavku...',
    // [Auto-translated] "Table of contents"
    toc: "Tablica sadržaja",
    // [Auto-translated] "Progress bar"
    progressbar: "Traka napretka"
  };
  surveyCore.setupLocale({ localeCode: "hr", strings: croatianStrings, nativeName: "hrvatski", englishName: "Croatian" });

  var czechSurveyStrings = {
    // "Previous"
    pagePrevText: "Předchozí",
    // "Next"
    pageNextText: "Další",
    // "Complete"
    completeText: "Dokončit",
    // "Preview"
    previewText: "Náhled",
    // "Edit"
    editText: "Upravit",
    // "Start"
    startSurveyText: "Začít",
    // [Auto-translated] "Please leave a comment"
    commentText: "Zanechte prosím komentář",
    // "Other (describe)"
    otherItemText: "Jiná odpověď (napište)",
    // "None"
    noneItemText: "Žádný",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Odmítnout odpovědět",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Nevím",
    // "Select All"
    selectAllItemText: "Vybrat vše",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Zrušit výběr všech",
    // "Page {0} of {1}"
    progressText: "Strana {0} z {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} z {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Záznam {0} z {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Zodpovězené otázky: {0} / {1}",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Průzkum neobsahuje žádné otázky.",
    // "Thank you for completing the survey"
    completingSurvey: "Děkujeme za vyplnění průzkumu!",
    // "You have already completed this survey."
    completingSurveyBefore: "Naše záznamy ukazují, že jste tento průzkum již dokončil/a.",
    // "Loading Survey..."
    loadingSurvey: "Probíhá načítání průzkumu...",
    // "Select..."
    placeholder: "Vyberte...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Vybrat...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Vybrat...",
    // "value"
    value: "hodnota",
    // "Response required."
    requiredError: "Odpovězte prosím na otázku.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Odpovězte prosím alespoň jednu otázku.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Odpovězte prosím na všechny otázky.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Každý řádek musí mít jedinečnou hodnotu.",
    // "The value should be numeric."
    numericError: "V tomto poli lze zadat pouze čísla.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Hodnota by neměla být menší než {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Zadejte hodnotu, která odpovídá velikosti kroku {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Hodnota by neměla být větší než {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Neplatný vstup",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Čísla nejsou povolena.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Prosím, vyplňte hodnotu tak, aby odpovídala požadovanému formátu.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Zadejte prosím alespoň {0} znaků.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Zadejte prosím méně než {0} znaků.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Zadejte prosím více než {0} a méně než {1} znaků.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Vyplňte prosím alespoň {0} řádků.",
    // "Please select at least {0} option(s)."
    minSelectError: "Vyberte prosím alespoň {0} varianty.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Nevybírejte prosím více než {0} variant.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "Odpověď '{0}' by mělo být větší nebo rovno {1} a menší nebo rovno {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "Odpověď '{0}' by mělo být větší nebo rovno {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "Odpověď '{0}' by mělo být menší nebo rovno {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Zadejte prosím platnou e-mailovou adresu.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Výraz: {0} by měl vrátit hodnotu „true“.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Požadavek vrátil chybu '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Požadavek nevrátil data nebo je neplatná vlastnost 'path'",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Velikost souboru by neměla být větší než {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bajty, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Maximální počet souborů, které můžete nahrát, je {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Soubory nelze nahrát. Přidejte obslužnou rutinu pro událost 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Zadejte prosím jinou hodnotu.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Váš soubor se nahrává. Zkuste to prosím za několik sekund.",
    // "Loading..."
    loadingFile: "Načítání...",
    // "Choose file(s)..."
    chooseFile: "Vyberte soubory...",
    // "No file selected"
    noFileChosen: "Není zvolený žádný soubor",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Sem přetáhněte soubor nebo klikněte na tlačítko níže a vyberte soubor, který chcete nahrát.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Chcete záznam smazat?",
    // "This value should be unique."
    keyDuplicationError: "Tato hodnota by měla být unikátní.",
    // "Add Column"
    addColumn: "Přidat sloupec",
    // "Add Row"
    addRow: "Přidat řádek",
    // "Remove"
    removeRow: "Odstranit",
    // [Auto-translated] "There are no rows."
    noRowsText: "Neexistují žádné řádky.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Řádek {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Přidat nový",
    // "Remove"
    removePanel: "Odstranit",
    // [Auto-translated] "Show Details"
    showDetails: "Zobrazit podrobnosti",
    // [Auto-translated] "Hide Details"
    hideDetails: "Skrýt podrobnosti",
    // "item"
    choices_Item: "položka",
    // [Auto-translated] "Choice option"
    choices_Choice: "Možnost volby",
    // "Column"
    matrix_column: "Sloupec",
    // "Row"
    matrix_row: "Řádek",
    // [Auto-translated] "text"
    multipletext_itemname: "Text",
    // "The results are being saved on the server..."
    savingData: "Výsledky se ukládají na server...",
    // "An error occurred and we could not save the results."
    savingDataError: "Došlo k chybě a výsledky jsme nemohli uložit.",
    // "The results were saved successfully!"
    savingDataSuccess: "Výsledky byly úspěšně uloženy!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Vaše odpověď přesahuje 64 kB. Zmenšete prosím velikost svých souborů a zkuste to znovu nebo kontaktujte vlastníka průzkumu.",
    // "Try again"
    saveAgainButton: "Zkuste to znovu",
    // [Auto-translated] "min"
    timerMin: "min",
    // "sec"
    timerSec: "sek",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Na této stránce jste strávil/a celkem {0} z {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "Na této stránce jste strávil/a {0}.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Celkem jste strávil/a {0}.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Na této stránce jste strávil/a {0} z {1} a celkem {2} z {3}.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Na této stránce jste strávil/a {0} z {1}.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Celkově jste strávil/a {0} z {1}.",
    // "Clear"
    clearCaption: "Vymazat",
    // [Auto-translated] "Select"
    selectCaption: "Vybrat",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Podepište se zde",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Bez podpisu",
    // "Select File"
    chooseFileCaption: "Vyberte soubor",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Pořídit fotografii",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Kliknutím na tlačítko níže pořídíte fotografii pomocí fotoaparátu.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Přetáhněte nebo vyberte soubor, který chcete nahrát nebo pořiďte fotografii pomocí fotoaparátu.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Nahradit soubor",
    // "Remove this file"
    removeFileCaption: "Odeberte tento soubor",
    // "Yes"
    booleanCheckedLabel: "Ano",
    // "No"
    booleanUncheckedLabel: "Ne",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Opravdu chcete odebrat tento soubor: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Opravdu chcete odstranit všechny soubory?",
    // "Question Title"
    questionTitlePatternText: "Název otázky",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Zrušit",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Použít",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Zadejte hledaný text...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Žádná data k zobrazení",
    // [Auto-translated] "Loading..."
    loadingPage: "Nakládka...",
    // [Auto-translated] "Loading..."
    loadingData: "Nakládka...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Zatím žádné záznamy.\nKliknutím na tlačítko níže přidáte novou položku.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Žádné vstupy",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Nový panel",
    // [Auto-translated] "More"
    more: "Více",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Všechny možnosti jsou vybrány pro pořadí",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Přetažením voleb sem je seřadíte",
    // [Auto-translated] "OK"
    ok: "OK",
    // [Auto-translated] "Cancel"
    cancel: "Zrušit",
    // "Create \"{0}\" item..."
    createCustomItem: 'Vytvořte položku "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Obsah",
    // [Auto-translated] "Progress bar"
    progressbar: "Indikátor průběhu"
  };
  surveyCore.setupLocale({ localeCode: "cs", strings: czechSurveyStrings, nativeName: "čeština", englishName: "Czech" });

  var danishSurveyStrings = {
    // "Previous"
    pagePrevText: "Tilbage",
    // "Next"
    pageNextText: "Videre",
    // "Complete"
    completeText: "Færdig",
    // "Preview"
    previewText: "Forpremiere",
    // "Edit"
    editText: "Redigér",
    // [Auto-translated] "Start"
    startSurveyText: "Start",
    // [Auto-translated] "Please leave a comment"
    commentText: "Efterlad venligst en kommentar",
    // "Other (describe)"
    otherItemText: "Valgfrit svar...",
    // "None"
    noneItemText: "Ingen",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Nægt at svare",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Ved ikke",
    // "Select All"
    selectAllItemText: "Vælg alle",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Fravælg alle",
    // "Page {0} of {1}"
    progressText: "Side {0} af {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} af {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Optag {0} af {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Besvarede {0} / {1} spørgsmål",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Der er ingen synlige spørgsmål.",
    // "Thank you for completing the survey"
    completingSurvey: "Mange tak for din besvarelse!",
    // "You have already completed this survey."
    completingSurveyBefore: "Vores data viser at du allerede har gennemført dette spørgeskema.",
    // "Loading Survey..."
    loadingSurvey: "Spørgeskemaet hentes fra serveren...",
    // "Select..."
    placeholder: "Vælg...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Markere...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Markere...",
    // "value"
    value: "værdi",
    // "Response required."
    requiredError: "Besvar venligst spørgsmålet.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Besvar venligst mindst ét spørgsmål.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Besvar venligst spørgsmål i alle rækker.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Hver række skal have en entydig værdi.",
    // "The value should be numeric."
    numericError: "Angiv et tal.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Værdien bør ikke være mindre end {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Indtast en værdi, der matcher trinstørrelsen på {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Værdien bør ikke være større end {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Ugyldig input",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Numre er ikke tilladt.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Udfyld venligst værdien for at matche det krævede format.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Angiv mindst {0} tegn.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Please enter less than {0} characters.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Angiv mere end {0} og mindre end {1} tegn.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Udfyld mindst {0} rækker.",
    // "Please select at least {0} option(s)."
    minSelectError: "Vælg venligst mindst {0} svarmulighed(er).",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Vælg venligst færre {0} svarmuligheder(er).",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' skal være lig med eller større end {1} og lig med eller mindre end {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' skal være lig med eller større end {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' skal være lig med eller mindre end {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Angiv venligst en gyldig e-mail adresse.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Udtrykket: {0} skal returnere 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Forespørgslen returnerede fejlen '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Forespørgslen returnerede ingen data eller 'path' parameteren er forkert",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Filstørrelsen må ikke overstige {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bytes, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Det maksimale antal filer, du kan uploade, er {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Filer kan ikke uploades. Tilføj en handler for hændelsen 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Angiv en værdi for dit valgfrie svar.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Din fil bliver uploadet. Vent nogle sekunder og prøv eventuelt igen.",
    // "Loading..."
    loadingFile: "Indlæser...",
    // "Choose file(s)..."
    chooseFile: "Vælg fil(er)...",
    // "No file selected"
    noFileChosen: "Ingen fil er valgt",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Træk og slip en fil her, eller klik på knappen nedenfor for at vælge en fil, der skal uploades.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Vil du fjerne den?",
    // "This value should be unique."
    keyDuplicationError: "Denne værdi skal være unik.",
    // "Add Column"
    addColumn: "Tilføj kolonne",
    // "Add Row"
    addRow: "Tilføj række",
    // "Remove"
    removeRow: "Fjern",
    // [Auto-translated] "There are no rows."
    noRowsText: "Der er ingen rækker.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Række {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Tilføj ny",
    // "Remove"
    removePanel: "Fjern",
    // [Auto-translated] "Show Details"
    showDetails: "Vis detaljer",
    // [Auto-translated] "Hide Details"
    hideDetails: "Skjul detaljer",
    // "item"
    choices_Item: "valg",
    // [Auto-translated] "Choice option"
    choices_Choice: "Valgmulighed",
    // "Column"
    matrix_column: "Kolonne",
    // "Row"
    matrix_row: "Række",
    // [Auto-translated] "text"
    multipletext_itemname: "Tekst",
    // "The results are being saved on the server..."
    savingData: "Resultaterne bliver gemt på serveren...",
    // "An error occurred and we could not save the results."
    savingDataError: "Der opstod en fejl og vi kunne ikke gemme resultatet.",
    // "The results were saved successfully!"
    savingDataSuccess: "Resultatet blev gemt!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Dit svar overstiger 64 KB. Reducer størrelsen på dine filer, og prøv igen, eller kontakt ejeren af undersøgelsen.",
    // "Try again"
    saveAgainButton: "Prøv igen",
    // [Auto-translated] "min"
    timerMin: "Min",
    // "sec"
    timerSec: "sek",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Du har brugt {0} på denne side og {1} i alt.",
    // "You have spent {0} on this page."
    timerSpentPage: "Du har brugt {0} på denne side.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Du har brugt {0} i alt.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Du har brugt {0} af {1} på denne side og {2} af {3} i alt.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Du har brugt {0} af {1} på denne side.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Du har brugt {0} af {1} i alt.",
    // "Clear"
    clearCaption: "Fjern",
    // [Auto-translated] "Select"
    selectCaption: "Markere",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Tilmeld dig her",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Ingen underskrift",
    // "Select File"
    chooseFileCaption: "Vælg fil",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Tag billede",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Klik på knappen nedenfor for at tage et billede med kameraet.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Træk og slip, eller vælg en fil, der skal uploades, eller tag et billede med kameraet.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Erstat fil",
    // "Remove this file"
    removeFileCaption: "Fjern denne fil",
    // "Yes"
    booleanCheckedLabel: "Ja",
    // "No"
    booleanUncheckedLabel: "Ingen",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Er du sikker på, at du vil fjerne denne fil: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Er du sikker på, at du vil fjerne alle filer?",
    // "Question Title"
    questionTitlePatternText: "Spørgsmåls titel",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Aflyse",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Anvende",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Skriv for at søge...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Ingen data at vise",
    // [Auto-translated] "Loading..."
    loadingPage: "Pålæsning...",
    // [Auto-translated] "Loading..."
    loadingData: "Pålæsning...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Ingen tilmeldinger endnu.\nKlik på knappen nedenfor for at tilføje en ny post.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Ingen poster",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Nyt panel",
    // [Auto-translated] "More"
    more: "Mere",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Alle valg er udvalgt til rangering",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Træk valgmuligheder her for at rangere dem",
    // [Auto-translated] "OK"
    ok: "OK",
    // [Auto-translated] "Cancel"
    cancel: "Aflyse",
    // "Create \"{0}\" item..."
    createCustomItem: 'Opret "{0}" element...',
    // [Auto-translated] "Table of contents"
    toc: "Indholdsfortegnelse",
    // [Auto-translated] "Progress bar"
    progressbar: "Statuslinje"
  };
  surveyCore.setupLocale({ localeCode: "da", strings: danishSurveyStrings, nativeName: "dansk", englishName: "Danish" });

  var dutchSurveyStrings = {
    // "Previous"
    pagePrevText: "Vorige",
    // "Next"
    pageNextText: "Volgende",
    // "Complete"
    completeText: "Verzenden",
    // "Preview"
    previewText: "Voorbeeld",
    // "Edit"
    editText: "Bewerk",
    // [Auto-translated] "Start"
    startSurveyText: "Start",
    // [Auto-translated] "Please leave a comment"
    commentText: "Laat een reactie achter",
    // "Other (describe)"
    otherItemText: "Anders, nl.",
    // "None"
    noneItemText: "Geen",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Weiger te antwoorden",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Weet niet",
    // "Select All"
    selectAllItemText: "Selecteer Alles",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Alles deselecteren",
    // "Page {0} of {1}"
    progressText: "Pagina {0} van {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} van {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Record {0} of {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Paneel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Geantwoord {0}/{1} vragen",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Er is geen zichtbare pagina of vraag in deze vragenlijst",
    // "Thank you for completing the survey"
    completingSurvey: "Bedankt voor het invullen van de vragenlijst",
    // "You have already completed this survey."
    completingSurveyBefore: "Onze gegevens tonen aan dat je deze vragenlijst reeds beantwoord hebt.",
    // "Loading Survey..."
    loadingSurvey: "De vragenlijst is aan het laden...",
    // "Select..."
    placeholder: "Kies...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Selecteren...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Selecteren...",
    // "value"
    value: "waarde",
    // "Response required."
    requiredError: "Dit is een vereiste vraag",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Gelieve ten minste een vraag te beantwoorden.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Deze vraag vereist één antwoord per rij",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Elke rij moet een unieke waarde hebben.",
    // "The value should be numeric."
    numericError: "Het antwoord moet een getal zijn",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "De waarde mag niet lager zijn dan {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Voer een waarde in die overeenkomt met de stapgrootte van {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "De waarde mag niet groter zijn dan {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Ongeldige invoer",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Nummers zijn niet toegestaan.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Vul de waarde in om aan het vereiste formaat te voldoen.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Vul minstens {0} karakters in",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Gelieve minder dan {0} karakters in te vullen.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Gelieve meer dan {0} en minder dan {1} karakters in te vullen.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Gelieve ten minste {0} rijen in te vullen.",
    // "Please select at least {0} option(s)."
    minSelectError: "Selecteer minimum {0} antwoorden",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Selecteer niet meer dan {0} antwoorden",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1} en kleiner of gelijk aan {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Vul een geldig e-mailadres in",
    // "The expression: {0} should return 'true'."
    invalidExpression: "De uitdrukking: {0} moet 'waar' teruggeven.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "De vraag keerde een fout terug '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "De vraag gaf een leeg antwoord terug of de 'pad' eigenschap is niet correct",
    // "The file size should not exceed {0}."
    exceedMaxSize: "De grootte van het bestand mag niet groter zijn dan {0}",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bytes, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Het maximale aantal bestanden dat je kunt uploaden is {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Bestanden kunnen niet worden geüpload. Voeg een handler toe voor de gebeurtenis 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Vul het veld 'Anders, nl.' in",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Uw bestand wordt geüpload. Gelieve enkele seconden te wachten en opnieuw te proberen.",
    // "Loading..."
    loadingFile: "Laden...",
    // "Choose file(s)..."
    chooseFile: "Kies uw bestand(en)...",
    // "No file selected"
    noFileChosen: "Geen bestand gekozen",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Sleep het bestand naar hier",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Wilt u deze gegevens verwijderen?",
    // "This value should be unique."
    keyDuplicationError: "Deze waarde moet uniek zijn.",
    // "Add Column"
    addColumn: "Voeg kolom toe",
    // "Add Row"
    addRow: "Voeg rij toe",
    // "Remove"
    removeRow: "Verwijder",
    // [Auto-translated] "There are no rows."
    noRowsText: "Er zijn geen rijen.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Rij {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Nieuwe toevoegen",
    // "Remove"
    removePanel: "Verwijder",
    // [Auto-translated] "Show Details"
    showDetails: "Toon details",
    // [Auto-translated] "Hide Details"
    hideDetails: "Verberg details",
    // "item"
    choices_Item: "onderwerp",
    // [Auto-translated] "Choice option"
    choices_Choice: "Keuze optie",
    // "Column"
    matrix_column: "Kolom",
    // "Row"
    matrix_row: "Rij",
    // [Auto-translated] "text"
    multipletext_itemname: "Tekst",
    // "The results are being saved on the server..."
    savingData: "De resultaten worden bewaard op de server...",
    // "An error occurred and we could not save the results."
    savingDataError: "Er was een probleem en we konden de resultaten niet bewaren.",
    // "The results were saved successfully!"
    savingDataSuccess: "De resultaten werden succesvol bewaard!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Uw antwoord is groter dan 64 kB. Verklein de grootte van uw bestanden en probeer het opnieuw of neem contact op met de eigenaar van de enquête.",
    // "Try again"
    saveAgainButton: "Probeer opnieuw",
    // "min"
    timerMin: "minimum",
    // [Auto-translated] "sec"
    timerSec: "sec",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "U heeft {0} gespendeerd op deze pagina en {1} in totaal.",
    // "You have spent {0} on this page."
    timerSpentPage: "U heeft {0} op deze pagina gespendeerd.",
    // "You have spent {0} in total."
    timerSpentSurvey: "U heeft in totaal {0} gespendeerd.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "U heeft {0} van {1} op deze pagina gespendeerd en {2} van {3} in totaal.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "U heeft {0} van {1} gespendeerd op deze pagina.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "U heeft {0} van {1} in het totaal.",
    // "Clear"
    clearCaption: "Verwijder",
    // [Auto-translated] "Select"
    selectCaption: "Selecteren",
    // "Sign here"
    signaturePlaceHolder: "Hier tekenen",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Geen handtekening",
    // "Select File"
    chooseFileCaption: "Gekozen bestand",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Foto maken",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Klik op de onderstaande knop om een foto te maken met de camera.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Sleep en zet neer of selecteer een bestand om te uploaden of maak een foto met de camera.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Bestand vervangen",
    // "Remove this file"
    removeFileCaption: "Verwijder dit bestand",
    // "Yes"
    booleanCheckedLabel: "Ja",
    // "No"
    booleanUncheckedLabel: "Nee",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Weet u zeker dat u deze file wilt verwijderen: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Weet u zeker dat u al deze files wilt verwijderen?",
    // "Question Title"
    questionTitlePatternText: "Titel van de vraag",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Annuleren",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Toepassen",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Typ om te zoeken...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Geen gegevens om weer te geven",
    // [Auto-translated] "Loading..."
    loadingPage: "Laden...",
    // [Auto-translated] "Loading..."
    loadingData: "Laden...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Nog geen inschrijvingen.\nKlik op de onderstaande knop om een nieuw item toe te voegen.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Geen inzendingen",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Nieuw paneel",
    // [Auto-translated] "More"
    more: "Meer",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Alle keuzes zijn geselecteerd voor rangschikking",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Sleep keuzes hierheen om ze te rangschikken",
    // [Auto-translated] "OK"
    ok: "OK",
    // [Auto-translated] "Cancel"
    cancel: "Annuleren",
    // "Create \"{0}\" item..."
    createCustomItem: 'Maak een "{0}" item...',
    // [Auto-translated] "Table of contents"
    toc: "Inhoudsopgave",
    // [Auto-translated] "Progress bar"
    progressbar: "Voortgangsbalk"
  };
  surveyCore.setupLocale({ localeCode: "nl", strings: dutchSurveyStrings, nativeName: "nederlands", englishName: "Dutch" });

  surveyCore.setupLocale({ localeCode: "nl-BE", strings: dutchSurveyStrings, nativeName: "vlaams", englishName: "Flemish" });

  var estonianSurveyStrings = {
    // "Previous"
    pagePrevText: "Tagasi",
    // "Next"
    pageNextText: "Edasi",
    // "Complete"
    completeText: "Lõpeta",
    // "Preview"
    previewText: "Eelvaade",
    // "Edit"
    editText: "Muuda",
    // "Start"
    startSurveyText: "Alusta",
    // [Auto-translated] "Please leave a comment"
    commentText: "Palun jäta kommentaar",
    // "Other (describe)"
    otherItemText: "Muu (täpsusta)",
    // "None"
    noneItemText: "Mitte midagi",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Keeldu vastamast",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Ei tea",
    // "Select All"
    selectAllItemText: "Vali kõik",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Kõigi valiku tühistamine",
    // "Page {0} of {1}"
    progressText: "Lehekülg {0}/{1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Kirje {0}/{1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Paneel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Vastatud {0} küsimust {1}-st",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Selles uuringus ei ole ühtki nähtavat lehekülge või küsimust.",
    // "Thank you for completing the survey"
    completingSurvey: "Aitäh, et vastasid ankeedile!",
    // "You have already completed this survey."
    completingSurveyBefore: "Meie andmetel oled sa sellele ankeedile juba vastanud.",
    // "Loading Survey..."
    loadingSurvey: "Laen ankeeti...",
    // "Select..."
    placeholder: "Vali...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Valima...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Valima...",
    // "value"
    value: "väärtus",
    // "Response required."
    requiredError: "Palun vasta küsimusele.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Palun vasta vähemalt ühele küsimusele.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Palun anna vastus igal real.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Igal real peab olema kordumatu väärtus.",
    // "The value should be numeric."
    numericError: "See peaks olema numbriline väärtus.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Väärtus ei tohiks olla väiksem kui {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Sisestage väärtus, mis vastab {0} sammu suurusele.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Väärtus ei tohiks olla suurem kui {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Kehtetu sisend",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Numbrid ei ole lubatud.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Palun täida väärtus, et see vastaks nõutud formaadile.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Palun sisesta vähemalt {0} tähemärki.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Palun ära sisesta rohkem kui {0} tähemärki.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Sisesta palun {0} - {1} tähemärki.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Sisesta plaun vähemalt {0} rida.",
    // "Please select at least {0} option(s)."
    minSelectError: "Palun vali vähemalt {0} varianti.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Palun vali kõige rohkem {0} varianti.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' peaks olema võrdne või suurem kui {1} ja võrdne või väiksem kui {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' peaks olema võrdne või suurem kui {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' peaks olema võrnde või väiksem kui {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Sisesta palun korrektne e-posti aadress.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Avaldis: {0} peaks tagastama tõese.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Taotlus tagastas vea „{0}”. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Taotlus tagastas tühjad andmed või atribuut 'path' on vale",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Faili suurus ei tohi ületada {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Baitid, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Maksimaalne failide arv, mida saad üles laadida, on {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: 'Faile ei saa üles laadida. Palun lisage sündmuse "onUploadFiles" jaoks käitleja.',
    // "Response required: enter another value."
    otherRequiredError: "Sisesta palun muu vastus.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Sinu fail laeb üles. Palun oota mõned sekundid ning proovi seejärel uuesti.",
    // "Loading..."
    loadingFile: "Laen...",
    // "Choose file(s)..."
    chooseFile: "Vali fail(id)...",
    // "No file selected"
    noFileChosen: "Faili pole valitud",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Pukseerige fail siia või klõpsake alloleval nupul, et valida üleslaaditav fail.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Kas tahad kirje kustutada?",
    // "This value should be unique."
    keyDuplicationError: "See väärtus peab olema unikaalne.",
    // "Add Column"
    addColumn: "Lisa veerg",
    // "Add Row"
    addRow: "Lisa rida",
    // "Remove"
    removeRow: "Eemalda",
    // [Auto-translated] "There are no rows."
    noRowsText: "Ridu pole.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Rida {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Lisa uus",
    // "Remove"
    removePanel: "Eemalda",
    // [Auto-translated] "Show Details"
    showDetails: "Näita detaile",
    // [Auto-translated] "Hide Details"
    hideDetails: "Peida üksikasjad",
    // "item"
    choices_Item: "üksus",
    // [Auto-translated] "Choice option"
    choices_Choice: "Valiku valik",
    // "Column"
    matrix_column: "Veerg",
    // "Row"
    matrix_row: "Rida",
    // [Auto-translated] "text"
    multipletext_itemname: "Tekst",
    // "The results are being saved on the server..."
    savingData: "Salvestan andmed serveris...",
    // "An error occurred and we could not save the results."
    savingDataError: "Tekkis viga ning me ei saanud vastuseid salvestada.",
    // "The results were saved successfully!"
    savingDataSuccess: "Vastuste salvestamine õnnestus!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Teie vastus ületab 64 KB. Vähendage oma faili(de) mahtu ja proovige uuesti või võtke ühendust uuringu omanikuga.",
    // "Try again"
    saveAgainButton: "Proovi uuesti",
    // [Auto-translated] "min"
    timerMin: "min",
    // "sec"
    timerSec: "sek",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Oled veetnud {0} sellel lehel ning kokku {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "Oled veetnud {0} sellel lehel.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Oled veetnud {0} kokku.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Oled kulutanud {0} võimalikust {1} sellel lehel ning {2} võimalikust {3} kokku.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Oled kulutanud {0} võimalikust {1} sellel lehel.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Oled kulutanud {0} võimalikust {1} koguajast.",
    // "Clear"
    clearCaption: "Puhasta",
    // [Auto-translated] "Select"
    selectCaption: "Valima",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Allkirjasta siin",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Allkiri puudub",
    // "Select File"
    chooseFileCaption: "Vali fail",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Pildistamine",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Kaamera abil pildistamiseks klõpsake allolevat nuppu.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Pukseerige või valige üleslaaditav fail või pildistage seda kaamera abil.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Asenda fail",
    // "Remove this file"
    removeFileCaption: "Eemalda see fail",
    // "Yes"
    booleanCheckedLabel: "Jah",
    // "No"
    booleanUncheckedLabel: "Ei",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Oled sa kindel, et soovid selle faili eemaldada: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Oled sa kindel, et soovid eemaldada kõik failid?",
    // "Question Title"
    questionTitlePatternText: "Küsimuse pealkiri",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Tühistama",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Kohaldata",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Tippige otsimiseks...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Kuvatavaid andmeid pole",
    // [Auto-translated] "Loading..."
    loadingPage: "Laadimise...",
    // [Auto-translated] "Loading..."
    loadingData: "Laadimise...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Sissekandeid veel pole.\nUue kirje lisamiseks klõpsake alloleval nupul.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Sissekandeid pole",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Uus paneel",
    // [Auto-translated] "More"
    more: "Rohkem",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Kõik valikud valitakse järjestamiseks",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Lohistage valikud siia, et neid järjestada",
    // [Auto-translated] "OK"
    ok: "OK",
    // [Auto-translated] "Cancel"
    cancel: "Tühistama",
    // "Create \"{0}\" item..."
    createCustomItem: 'Looge üksus "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Sisukord",
    // [Auto-translated] "Progress bar"
    progressbar: "Edenemisriba"
  };
  surveyCore.setupLocale({ localeCode: "et", strings: estonianSurveyStrings, nativeName: "eesti keel", englishName: "Estonian" });

  var finnishSurveyStrings = {
    // "Previous"
    pagePrevText: "Edellinen",
    // "Next"
    pageNextText: "Seuraava",
    // "Complete"
    completeText: "Valmis",
    // "Preview"
    previewText: "Esikatselu",
    // "Edit"
    editText: "Muokkaa",
    // "Start"
    startSurveyText: "Aloita",
    // [Auto-translated] "Please leave a comment"
    commentText: "Jätä kommentti",
    // "Other (describe)"
    otherItemText: "Muu (tarkenna)",
    // "None"
    noneItemText: "Ei mitään",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Kieltäydy vastaamasta",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Ei tiedä",
    // "Select All"
    selectAllItemText: "Valitse kaikki",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Poista kaikki valinnat",
    // "Page {0} of {1}"
    progressText: "Sivu {0} / {1}",
    // "{0} of {1}"
    indexText: "{0} / {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Osio {0} / {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Paneeli {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Olet vastannut {0} / {1} kysymykseen.",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Tässä kyselyssä ei ole yhtään näkyvillä olevaa sivua tai kysymystä.",
    // "Thank you for completing the survey"
    completingSurvey: "Kiitos kyselyyn vastaamisesta!",
    // "You have already completed this survey."
    completingSurveyBefore: "Tietojemme mukaan olet jo suorittanut tämän kyselyn.",
    // "Loading Survey..."
    loadingSurvey: "Kyselyä ladataan palvelimelta...",
    // "Select..."
    placeholder: "Valitse...",
    // "Select..."
    ratingOptionsCaption: "Arvioi napauttamalla tätä...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Valitse...",
    // "value"
    value: "arvo",
    // "Response required."
    requiredError: "Vastaa kysymykseen, kiitos.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Vastaa ainakin yhteen kysymykseen.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Vastaa kysymyksiin kaikilla riveillä.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Jokaisella rivillä on oltava yksilöllinen arvo.",
    // "The value should be numeric."
    numericError: "Arvon tulee olla numeerinen.",
    // "The value should not be less than {0}"
    minError: "Arvo ei saa olla pienempi kuin {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Syötä arvo, joka vastaa {0} askelkokoa.",
    // "The value should not be greater than {0}"
    maxError: "Arvo ei saa olla suurempi kuin {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Virheellinen syöte",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Numerot eivät ole sallittuja.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Täytäthän arvon vastaamaan vaadittua muotoa.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Syötä vähintään {0} merkkiä.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Älä syötä yli {0} merkkiä.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Syötä vähintään {0} ja enintään {1} merkkiä.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Täytä vähintään {0} riviä.",
    // "Please select at least {0} option(s)."
    minSelectError: "Valitse vähintään {0} vaihtoehtoa.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Valitse enintään {0} vaihtoehtoa.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "Luvun '{0}' tulee olla vähintään {1} ja korkeintaan {2}.",
    // "The '{0}' should be at least {1}"
    numericMin: "Luvun '{0}' tulee olla vähintään {1}.",
    // "The '{0}' should be at most {1}"
    numericMax: "Luvun '{0}' tulee olla korkeintaan {1}.",
    // "Please enter a valid e-mail address."
    invalidEmail: "Syötä validi sähköpostiosoite.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Lausekkeen: {0} pitäisi palauttaa 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Pyyntö palautti virheen {0}. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Pyyntö palautti tyhjän tiedoston tai 'path'-asetus on väärä",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Tiedoston koko ei saa olla suurempi kuin {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Tavut, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Tiedostojen enimmäismäärä, jonka voit ladata, on {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Tiedostoja ei voi ladata. Lisää käsittelijä onUploadFiles-tapahtumalle.",
    // "Response required: enter another value."
    otherRequiredError: "Tarkenna vastaustasi tekstikenttään.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Tiedostoa lähetetään. Odota muutama sekunti ja yritä uudelleen.",
    // "Loading..."
    loadingFile: "Ladataan...",
    // "Choose file(s)..."
    chooseFile: "Valitse tiedosto(t)...",
    // "No file selected"
    noFileChosen: "Ei tiedostoa valittuna",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Pudota tiedosto tähän tai lataa tiedosto napsauttamalla alla olevaa painiketta.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Haluatko poistaa osion?",
    // "This value should be unique."
    keyDuplicationError: "Tämä arvo on jo käytössä. Syötä toinen arvo.",
    // "Add Column"
    addColumn: "Lisää sarake",
    // "Add Row"
    addRow: "Lisää rivi",
    // "Remove"
    removeRow: "Poista",
    // "There are no rows."
    noRowsText: "Ei rivejä",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Rivi {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Lisää uusi",
    // "Remove"
    removePanel: "Poista",
    // [Auto-translated] "Show Details"
    showDetails: "Näytä tiedot",
    // [Auto-translated] "Hide Details"
    hideDetails: "Piilota tiedot",
    // "item"
    choices_Item: "kohde",
    // [Auto-translated] "Choice option"
    choices_Choice: "Valintavaihtoehto",
    // "Column"
    matrix_column: "Sarake",
    // "Row"
    matrix_row: "Rivi",
    // "text"
    multipletext_itemname: "teksti",
    // "The results are being saved on the server..."
    savingData: "Tietoja tallennetaan palvelimelle...",
    // "An error occurred and we could not save the results."
    savingDataError: "Tapahtui virhe, emmekä voineet tallentaa kyselyn tietoja.",
    // "The results were saved successfully!"
    savingDataSuccess: "Tiedot tallennettiin onnistuneesti!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Vastauksesi ylittää 64 kt. Pienennä tiedostojesi kokoa ja yritä uudelleen tai ota yhteyttä kyselyn omistajaan.",
    // "Try again"
    saveAgainButton: "Yritä uudelleen",
    // [Auto-translated] "min"
    timerMin: "min",
    // "sec"
    timerSec: "sek",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Olet käyttänyt {0} tällä sivulla ja yhteensä {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "Olet käyttänyt {0} tällä sivulla.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Olet käyttänyt yhteensä {0}.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Olet käyttänyt tällä sivulla {0} / {1} ja yhteensä {2} / {3}.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Olet käyttänyt {0} / {1} tällä sivulla.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Olet käyttänyt yhteensä {0} / {1}.",
    // "Clear"
    clearCaption: "Tyhjennä",
    // [Auto-translated] "Select"
    selectCaption: "Valikoida",
    // "Sign here"
    signaturePlaceHolder: "Allekirjoita tähän",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Ei allekirjoitusta",
    // "Select File"
    chooseFileCaption: "Valitse tiedosto",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Ota valokuva",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Napsauta alla olevaa painiketta ottaaksesi valokuvan kameralla.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Vedä ja pudota tai valitse ladattava tiedosto tai ota valokuva kameralla.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Korvaa tiedosto",
    // "Remove this file"
    removeFileCaption: "Poista tämä tiedosto",
    // "Yes"
    booleanCheckedLabel: "Kyllä",
    // "No"
    booleanUncheckedLabel: "Ei",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Haluatko varmasti poistaa tämän tiedoston: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Haluatko varmasti poistaa kaikki tiedostot?",
    // "Question Title"
    questionTitlePatternText: "Kysymyksen otsikko",
    // "Cancel"
    modalCancelButtonText: "Peruuta",
    // "Apply"
    modalApplyButtonText: "Käytä",
    // "Type to search..."
    filterStringPlaceholder: "Hae kirjoittamalla...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Ei näytettäviä tietoja",
    // [Auto-translated] "Loading..."
    loadingPage: "Latautuu...",
    // [Auto-translated] "Loading..."
    loadingData: "Latautuu...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Merkintöjä ei ole vielä.\nLisää uusi merkintä napsauttamalla alla olevaa painiketta.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Ei merkintöjä",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Uusi paneeli",
    // [Auto-translated] "More"
    more: "Enemmän",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "Ok",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Kaikki valinnat valitaan paremmuusjärjestykseen",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Vedä valinnat tähän asettaaksesi ne paremmuusjärjestykseen",
    // [Auto-translated] "OK"
    ok: "Ok",
    // [Auto-translated] "Cancel"
    cancel: "Peru",
    // "Create \"{0}\" item..."
    createCustomItem: 'Luo "{0}"-kohde...',
    // [Auto-translated] "Table of contents"
    toc: "Sisällysluettelo",
    // [Auto-translated] "Progress bar"
    progressbar: "Edistymispalkki"
  };
  surveyCore.setupLocale({ localeCode: "fi", strings: finnishSurveyStrings, nativeName: "suomi", englishName: "Finnish" });

  var frenchSurveyStrings = {
    // "Previous"
    pagePrevText: "Précédent",
    // "Next"
    pageNextText: "Suivant",
    // "Complete"
    completeText: "Terminer",
    // "Preview"
    previewText: "Aperçu",
    // "Edit"
    editText: "Modifier",
    // "Start"
    startSurveyText: "Commencer",
    // [Auto-translated] "Please leave a comment"
    commentText: "S'il vous plaît laissez un commentaire",
    // "Other (describe)"
    otherItemText: "Autre (préciser)",
    // "None"
    noneItemText: "Aucun",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Refuser de répondre",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Sais pas",
    // "Select All"
    selectAllItemText: "Tout sélectionner",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Désélectionner tout",
    // "Page {0} of {1}"
    progressText: "Page {0} sur {1}",
    // "{0} of {1}"
    indexText: "{0} sur {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Enregistrement {0} sur {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "{0}/{1} question(s) répondue(s)",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Il n'y a ni page visible ni question visible dans ce questionnaire",
    // "Thank you for completing the survey"
    completingSurvey: "Merci d'avoir répondu au questionnaire !",
    // "You have already completed this survey."
    completingSurveyBefore: "Nos données indiquent que vous avez déjà rempli ce questionnaire.",
    // "Loading Survey..."
    loadingSurvey: "Le questionnaire est en cours de chargement...",
    // "Select..."
    placeholder: "Choisissez...",
    // "Select..."
    ratingOptionsCaption: "Appuyez ici pour noter...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Choisir...",
    // "value"
    value: "valeur",
    // "Response required."
    requiredError: "La réponse à cette question est obligatoire.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Merci de répondre au moins à une question.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Toutes les lignes sont obligatoires",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Chaque ligne doit avoir une valeur unique.",
    // "The value should be numeric."
    numericError: "La réponse doit être un nombre.",
    // "The value should not be less than {0}"
    minError: "La valeur ne doit pas être inférieure à {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Entrez une valeur qui correspond à la taille du pas de {0}.",
    // "The value should not be greater than {0}"
    maxError: "La valeur ne doit pas être supérieure à {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Entrée invalide",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Les numéros ne sont pas autorisés.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Veuillez compléter la valeur pour correspondre au format requis.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Merci de saisir au moins {0} caractères.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Merci de saisir moins de {0} caractères.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Merci de saisir entre {0} et {1} caractères.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Merci de compléter au moins {0} lignes.",
    // "Please select at least {0} option(s)."
    minSelectError: "Merci de sélectionner au minimum {0} réponses.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Merci de sélectionner au maximum {0} réponses.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "Votre réponse '{0}' doit être supérieure ou égale à {1} et inférieure ou égale à {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "Votre réponse '{0}' doit être supérieure ou égale à {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "Votre réponse '{0}' doit être inférieure ou égale à {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Merci d'entrer une adresse mail valide.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "L'expression: {0} doit retourner 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "La requête a renvoyé une erreur '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "La requête a renvoyé des données vides ou la propriété 'path' est incorrecte",
    // "The file size should not exceed {0}."
    exceedMaxSize: "La taille du fichier ne doit pas excéder {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Octets, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Le nombre maximal de fichiers que vous pouvez télécharger est {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Les fichiers ne peuvent pas être téléchargés. Veuillez ajouter un gestionnaire pour l'événement 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Merci de préciser le champ 'Autre'.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Votre fichier est en cours de chargement. Merci d'attendre quelques secondes et de réessayer.",
    // "Loading..."
    loadingFile: "Chargement...",
    // "Choose file(s)..."
    chooseFile: "Ajouter des fichiers...",
    // "No file selected"
    noFileChosen: "Aucun fichier ajouté",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Déposez un fichier ici ou cliquez sur le bouton ci-dessous pour charger le fichier.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Voulez-vous supprimer cet enregistrement ?",
    // "This value should be unique."
    keyDuplicationError: "Cette valeur doit être unique.",
    // "Add Column"
    addColumn: "Ajouter une colonne",
    // "Add Row"
    addRow: "Ajouter une ligne",
    // "Remove"
    removeRow: "Supprimer",
    // "There are no rows."
    noRowsText: "Il n'y a pas de lignes.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Ligne {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Ajouter",
    // "Remove"
    removePanel: "Supprimer",
    // [Auto-translated] "Show Details"
    showDetails: "Afficher les détails",
    // [Auto-translated] "Hide Details"
    hideDetails: "Masquer les détails",
    // [Auto-translated] "item"
    choices_Item: "Item",
    // [Auto-translated] "Choice option"
    choices_Choice: "Option au choix",
    // "Column"
    matrix_column: "Colonne",
    // "Row"
    matrix_row: "Ligne",
    // "text"
    multipletext_itemname: "texte",
    // "The results are being saved on the server..."
    savingData: "Les résultats sont en cours de sauvegarde sur le serveur...",
    // "An error occurred and we could not save the results."
    savingDataError: "Une erreur est survenue et a empêché la sauvegarde des résultats.",
    // "The results were saved successfully!"
    savingDataSuccess: "Les résultats ont bien été enregistrés !",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Votre réponse dépasse 64 Ko. Veuillez réduire la taille de vos fichiers et réessayer ou contacter le propriétaire du sondage.",
    // "Try again"
    saveAgainButton: "Réessayer",
    // [Auto-translated] "min"
    timerMin: "min",
    // [Auto-translated] "sec"
    timerSec: "SEC",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Vous avez passé {0} sur cette page et {1} au total.",
    // "You have spent {0} on this page."
    timerSpentPage: "Vous avez passé {0} sur cette page.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Vous avez passé {0} au total.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Vous avez passé {0} sur {1} sur cette page et {2} sur {3} au total.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Vous avez passé {0} sur {1} sur cette page.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Vous avez passé {0} sur {1} au total.",
    // "Clear"
    clearCaption: "Vider",
    // [Auto-translated] "Select"
    selectCaption: "Choisir",
    // "Sign here"
    signaturePlaceHolder: "Signez ici",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Pas de signature",
    // "Select File"
    chooseFileCaption: "Ajouter un fichier",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Prendre une photo",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Cliquez sur le bouton ci-dessous pour prendre une photo à l'aide de l'appareil photo.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Faites glisser et déposez ou sélectionnez un fichier à télécharger ou à prendre une photo à l’aide de l’appareil photo.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Remplacer le fichier",
    // "Remove this file"
    removeFileCaption: "Enlever ce fichier",
    // "Yes"
    booleanCheckedLabel: "Oui",
    // "No"
    booleanUncheckedLabel: "Non",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Êtes-vous certains de vouloir supprimer ce fichier : {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Êtes-vous certains de vouloir supprimer tous les fichiers?",
    // "Question Title"
    questionTitlePatternText: "Titre de la question",
    // "Cancel"
    modalCancelButtonText: "Annuler",
    // "Apply"
    modalApplyButtonText: "Appliquer",
    // "Type to search..."
    filterStringPlaceholder: "Tapez pour rechercher...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Aucune donnée à afficher",
    // [Auto-translated] "Loading..."
    loadingPage: "Chargement...",
    // [Auto-translated] "Loading..."
    loadingData: "Chargement...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Il n'y a pas encore d'entrées.\nCliquez sur le bouton ci-dessous pour ajouter une nouvelle entrée.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Aucune entrée",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Nouveau panneau",
    // [Auto-translated] "More"
    more: "Plus",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "D’ACCORD",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Tous les choix sont sélectionnés pour le classement",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Faites glisser les choix ici pour les classer",
    // [Auto-translated] "OK"
    ok: "D’ACCORD",
    // [Auto-translated] "Cancel"
    cancel: "Annuler",
    // "Create \"{0}\" item..."
    createCustomItem: 'Créez un élément "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Table des matières",
    // [Auto-translated] "Progress bar"
    progressbar: "Barre de progression"
  };
  surveyCore.setupLocale({ localeCode: "fr", strings: frenchSurveyStrings, nativeName: "français", englishName: "French" });

  var georgianSurveyStrings = {
    // "Previous"
    pagePrevText: "უკან",
    // "Next"
    pageNextText: "შემდეგ",
    // "Complete"
    completeText: "დასრულება",
    // [Auto-translated] "Preview"
    previewText: "გადახედვა",
    // [Auto-translated] "Edit"
    editText: "რედაქტირება",
    // [Auto-translated] "Start"
    startSurveyText: "დაქოქვა",
    // [Auto-translated] "Please leave a comment"
    commentText: "გთხოვთ დატოვოთ კომენტარი",
    // "Other (describe)"
    otherItemText: "სხვა (გთხოვთ მიუთითეთ)",
    // [Auto-translated] "None"
    noneItemText: "არცერთი",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "უარი პასუხზე",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "არ ვიცი",
    // [Auto-translated] "Select All"
    selectAllItemText: "ყველას მონიშნა",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "ყველას არჩევა",
    // "Page {0} of {1}"
    progressText: "გვერდი {0} / {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{1} {0}",
    // [Auto-translated] "{0} of {1}"
    panelDynamicProgressText: "{1} {0}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // [Auto-translated] "Answered {0}/{1} questions"
    questionsProgressText: "უპასუხეთ {0}/{1} კითხვებს",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "არცერთი კითხვა არ არის.",
    // "Thank you for completing the survey"
    completingSurvey: "გმადლობთ კითხვარის შევსებისთვის!",
    // [Auto-translated] "You have already completed this survey."
    completingSurveyBefore: "თქვენ უკვე დაასრულეთ ეს გამოკითხვა.",
    // "Loading Survey..."
    loadingSurvey: "ჩატვირთვა სერვერიდან...",
    // "Select..."
    placeholder: "არჩევა...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "აირჩიეთ...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "აირჩიეთ...",
    // [Auto-translated] "value"
    value: "ღირებულება",
    // "Response required."
    requiredError: "გთხოვთ უპასუხეთ კითხვას.",
    // [Auto-translated] "Response required: answer at least one question."
    requiredErrorInPanel: "საჭიროა პასუხი: უპასუხეთ მინიმუმ ერთ კითხვას.",
    // [Auto-translated] "Response required: answer questions in all rows."
    requiredInAllRowsError: "საჭიროა პასუხი: უპასუხეთ კითხვებს ყველა რიგში.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "თითოეულ რიგს უნდა ჰქონდეს უნიკალური მნიშვნელობა.",
    // "The value should be numeric."
    numericError: "პასუხი უნდა იყოს რიცხვი.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "ღირებულება არ უნდა იყოს ნაკლები {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "გთხოვთ, შეიყვანოთ მნიშვნელობა, რომელიც შეესაბამება ნაბიჯის ზომას {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "ღირებულება არ უნდა იყოს {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "არასწორი შეყვანა",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "ნომრები არ არის დაშვებული.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "გთხოვთ, შეავსოთ მნიშვნელობა საჭირო ფორმატის შესატყვისად.",
    // "Please enter at least {0} character(s)."
    textMinLength: "გთხოვთ შეიყვანეთ არანაკლებ {0} სიმბოლო.",
    // [Auto-translated] "Please enter no more than {0} character(s)."
    textMaxLength: "გთხოვთ, შეიყვანოთ არაუმეტეს {0} სიმბოლო(ებ)ი.",
    // [Auto-translated] "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "გთხოვთ, შეიყვანოთ მინიმუმ {0} და არაუმეტეს {1} სიმბოლო.",
    // [Auto-translated] "Please fill in at least {0} row(s)."
    minRowCountError: "გთხოვთ შეავსოთ მინიმუმ {0} რიგი( ებ)ი.",
    // "Please select at least {0} option(s)."
    minSelectError: "გთხოვთ აირჩიეთ არანაკლებ {0} ვარიანტი.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "გთხოვთ აირჩიეთ არაუმეტეს {0} ვარიანტი.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' უნდა იყოს მეტი ან ტოლი, ვიდრე {1}, და ნაკლები ან ტოლი ვიდრე {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' უნდა იყოს მეტი ან ტოლი ვიდრე {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' უნდა იყოს ნაკლები ან ტოლი ვიდრე {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "გთხოვთ შეიყვანოთ ელ. ფოსტის რეალური მისამართი.",
    // "The expression: {0} should return 'true'."
    invalidExpression: 'გამოთქმა: {0} უნდა დაბრუნდეს "ჭეშმარიტი".',
    // [Auto-translated] "The request returned error '{0}'. {1}"
    urlRequestError: "მოთხოვნა დაუბრუნდა შეცდომას '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: 'მოთხოვნამ დაუბრუნა ცარიელი მონაცემები ან "ბილიკის" ქონება არასწორია',
    // [Auto-translated] "The file size should not exceed {0}."
    exceedMaxSize: "ფაილის ზომა არ უნდა აღემატებოდეს {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "ბაიტი, კბ, მბ, გბ, ტუბერკულოზი",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "ფაილების მაქსიმალური რაოდენობა, რომლის ატვირთვაც შეგიძლიათ, არის {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "ფაილების ატვირთვა შეუძლებელია. გთხოვთ, დაამატოთ დამმუშავებელი 'onUploadFiles' ღონისძიებისთვის.",
    // [Auto-translated] "Response required: enter another value."
    otherRequiredError: "საჭიროა პასუხი: შეიყვანეთ სხვა მნიშვნელობა.",
    // [Auto-translated] "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "თქვენი ფაილი ატვირთვაა. გთხოვთ დაელოდოთ რამდენიმე წამს და კიდევ სცადოთ.",
    // [Auto-translated] "Loading..."
    loadingFile: "იტვირთება...",
    // [Auto-translated] "Choose file(s)..."
    chooseFile: "აირჩიეთ ფაილი...",
    // [Auto-translated] "No file selected"
    noFileChosen: "ფაილი არ არის არჩეული",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "გადაიტანეთ და ჩამოაგდეთ ფაილი აქ ან დააჭირეთ ქვემოთ მოცემულ ღილაკს, რომ აირჩიოთ ფაილი ასატვირთად.",
    // [Auto-translated] "Are you sure you want to delete this record?"
    confirmDelete: "დარწმუნებული ხართ, რომ გსურთ ამ ჩანაწერის წაშლა?",
    // [Auto-translated] "This value should be unique."
    keyDuplicationError: "ეს მნიშვნელობა უნდა იყოს უნიკალური.",
    // [Auto-translated] "Add Column"
    addColumn: "სვეტის დამატება",
    // [Auto-translated] "Add Row"
    addRow: "რიგის დამატება",
    // [Auto-translated] "Remove"
    removeRow: "წაშლა",
    // [Auto-translated] "There are no rows."
    noRowsText: "რიგები არ არის.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Row {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // [Auto-translated] "Add new"
    addPanel: "ახალი დამატება",
    // [Auto-translated] "Remove"
    removePanel: "წაშლა",
    // [Auto-translated] "Show Details"
    showDetails: "დეტალების ჩვენება",
    // [Auto-translated] "Hide Details"
    hideDetails: "დეტალების დამალვა",
    // [Auto-translated] "item"
    choices_Item: "ნივთი",
    // [Auto-translated] "Choice option"
    choices_Choice: "არჩევანის ვარიანტი",
    // [Auto-translated] "Column"
    matrix_column: "სვეტი",
    // [Auto-translated] "Row"
    matrix_row: "რიგი",
    // [Auto-translated] "text"
    multipletext_itemname: "ტექსტი",
    // [Auto-translated] "The results are being saved on the server..."
    savingData: "შედეგები ინახება სერვერზე...",
    // [Auto-translated] "An error occurred and we could not save the results."
    savingDataError: "დაფიქსირდა შეცდომა და შედეგი ვერ შევინახავდით.",
    // [Auto-translated] "The results were saved successfully!"
    savingDataSuccess: "შედეგები წარმატებით გადაარჩინეს!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "თქვენი პასუხი აღემატება 64KB. გთხოვთ, შეამციროთ თქვენი ფაილ(ებ)ის ზომა და სცადოთ ხელახლა ან დაუკავშირდეთ გამოკითხვის მფლობელს.",
    // [Auto-translated] "Try again"
    saveAgainButton: "კიდევ სცადე",
    // [Auto-translated] "min"
    timerMin: "წთ",
    // [Auto-translated] "sec"
    timerSec: "წმ",
    // [Auto-translated] "You have spent {0} on this page and {1} in total."
    timerSpentAll: "თქვენ დახარჯეთ {0} ამ გვერდზე და ჯამში {1}.",
    // [Auto-translated] "You have spent {0} on this page."
    timerSpentPage: "თქვენ {0} დახარჯეთ ამ გვერდზე.",
    // [Auto-translated] "You have spent {0} in total."
    timerSpentSurvey: "თქვენ სულ {0} დახარჯეთ.",
    // [Auto-translated] "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "თქვენ დახარჯეთ {1} {0} ამ გვერდზე და ჯამში {3} {2}.",
    // [Auto-translated] "You have spent {0} of {1} on this page."
    timerLimitPage: "თქვენ ამ გვერდზე {1} {0} დახარჯეთ.",
    // [Auto-translated] "You have spent {0} of {1} in total."
    timerLimitSurvey: "თქვენ სულ {1} {0} დახარჯეთ.",
    // [Auto-translated] "Clear"
    clearCaption: "მოწმენდილი ცა",
    // [Auto-translated] "Select"
    selectCaption: "აირჩიე",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "შესვლა აქ",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "ხელმოწერა არ არის",
    // [Auto-translated] "Select File"
    chooseFileCaption: "აირჩიეთ ფაილი",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "გადაიღეთ ფოტო",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "დააჭირეთ ქვემოთ მოცემულ ღილაკს, რომ გადაიღოთ ფოტო კამერის გამოყენებით.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "გადაიტანეთ და ჩამოაგდეთ ან შეარჩიეთ ფაილი კამერის გამოყენებით ფოტოს ასატვირთად ან გადასაღებად.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "ფაილის შეცვლა",
    // [Auto-translated] "Remove this file"
    removeFileCaption: "ამ ფაილის წაშლა",
    // [Auto-translated] "Yes"
    booleanCheckedLabel: "დიახ",
    // [Auto-translated] "No"
    booleanUncheckedLabel: "არა",
    // [Auto-translated] "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "დარწმუნებული ხართ, რომ გსურთ ამ ფაილის წაშლა: {0}?",
    // [Auto-translated] "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "დარწმუნებული ხართ, რომ გსურთ ყველა ფაილის წაშლა?",
    // [Auto-translated] "Question Title"
    questionTitlePatternText: "კითხვის სათაური",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "გაუქმება",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "მიღება",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "ჩაწერეთ ძებნა...",
    // [Auto-translated] "No data to display"
    emptyMessage: "მონაცემები არ არის საჩვენებლად",
    // [Auto-translated] "Loading..."
    loadingPage: "იტვირთება...",
    // [Auto-translated] "Loading..."
    loadingData: "იტვირთება...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "ჯერ არ არის ჩანაწერები.\nდააჭირეთ ქვემოთ მოცემულ ღილაკს, რომ დაამატოთ ახალი ჩანაწერი.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "ჩანაწერები არ არის",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "ახალი პანელი",
    // [Auto-translated] "More"
    more: "სრულად",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "კარგი",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "ყველა არჩევანი შეირჩევა რეიტინგისთვის",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "გადაიტანეთ არჩევანი აქ, რომ დაასახელოთ ისინი",
    // [Auto-translated] "OK"
    ok: "კარგი",
    // [Auto-translated] "Cancel"
    cancel: "გაუქმება",
    // "Create \"{0}\" item..."
    createCustomItem: 'შექმენით "{0}" ელემენტი...',
    // [Auto-translated] "Table of contents"
    toc: "სარჩევი",
    // [Auto-translated] "Progress bar"
    progressbar: "პროგრესის ბარი"
  };
  surveyCore.setupLocale({ localeCode: "ka", strings: georgianSurveyStrings, nativeName: "ქართული", englishName: "Georgian" });

  var germanSurveyStrings = {
    // "Previous"
    pagePrevText: "Zurück",
    // "Next"
    pageNextText: "Weiter",
    // "Complete"
    completeText: "Abschließen",
    // "Preview"
    previewText: "Vorschau",
    // "Edit"
    editText: "Bearbeiten",
    // [Auto-translated] "Start"
    startSurveyText: "Start",
    // [Auto-translated] "Please leave a comment"
    commentText: "Bitte hinterlassen Sie einen Kommentar",
    // "Other (describe)"
    otherItemText: "Sonstiges (Bitte angeben)",
    // "None"
    noneItemText: "Nichts trifft zu",
    // "Refuse to answer"
    refuseItemText: "Antwort verweigern",
    // "Don't know"
    dontKnowItemText: "Weiß ich nicht",
    // "Select All"
    selectAllItemText: "Alles auswählen",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Alle abwählen",
    // "Page {0} of {1}"
    progressText: "Seite {0} von {1}",
    // "{0} of {1}"
    indexText: "{0} von {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Eintrag {0} von {1}",
    // "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Bereich {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "{0}/{1} Fragen beantwortet",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Es sind keine Fragen vorhanden.",
    // "Thank you for completing the survey"
    completingSurvey: "Vielen Dank, dass Sie die Umfrage abgeschlossen haben!",
    // "You have already completed this survey."
    completingSurveyBefore: "Sie haben diese Umfrage bereits abgeschlossen.",
    // "Loading Survey..."
    loadingSurvey: "Umfrage wird geladen...",
    // "Select..."
    placeholder: "Bitte auswählen...",
    // "Select..."
    ratingOptionsCaption: "Tippen Sie hier, um zu bewerten...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Auswählen...",
    // "value"
    value: "Wert",
    // "Response required."
    requiredError: "Bitte beantworten Sie diese Frage.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Bitte beantworten Sie mindestens eine Frage.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Bitte beantworten Sie alle Fragen.",
    // "Each row must have a unique value."
    eachRowUniqueError: "Jede Zeile muss einen eindeutigen Wert haben.",
    // "The value should be numeric."
    numericError: "Der Wert muss eine Zahl sein.",
    // "The value should not be less than {0}"
    minError: "Der Wert sollte nicht kleiner als {0} sein",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Geben Sie einen Wert ein, der der Schrittweite von {0} entspricht.",
    // "The value should not be greater than {0}"
    maxError: "Der Wert sollte nicht größer als {0} sein",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Ungültige Eingabe",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Zahlen sind nicht erlaubt.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Bitte füllen Sie den Wert aus, um dem erforderlichen Format zu entsprechen.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Bitte geben Sie mindestens {0} Zeichen ein.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Bitte geben Sie nicht mehr als {0} Zeichen ein.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Bitte geben Sie mindestens {0} und maximal {1} Zeichen ein.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Bitte machen Sie in mindestens {0} Zeilen eine Eingabe.",
    // "Please select at least {0} option(s)."
    minSelectError: "Bitte wählen Sie mindestens {0} Antwort(en) aus.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Bitte wählen Sie nicht mehr als {0} Antwort(en) aus.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' muss größer oder gleich {1} und kleiner oder gleich {2} sein",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' muss größer oder gleich {1} sein",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' muss kleiner oder gleich {1} sein",
    // "Please enter a valid e-mail address."
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Der Ausdruck: {0} muss den Wert 'wahr' zurückgeben.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Ein Netzwerkdienst hat folgenden Fehler zurückgegeben '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Eine Netzwerkdienst hat ungültige Daten zurückgegeben",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Die Datei darf nicht größer als {0} sein.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bytes, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Die maximale Anzahl an Dateien, die du hochladen kannst, ist {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Dateien können nicht hochgeladen werden. Fügen Sie einen Handler für das Ereignis 'onUploadFiles' hinzu.",
    // "Response required: enter another value."
    otherRequiredError: "Bitte geben Sie einen Wert an.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Bitte warten Sie bis der Upload Ihrer Dateien abgeschlossen ist.",
    // "Loading..."
    loadingFile: "Wird hochgeladen...",
    // "Choose file(s)..."
    chooseFile: "Datei(en) auswählen...",
    // "No file selected"
    noFileChosen: "Keine Datei ausgewählt",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Legen Sie hier eine Datei ab oder klicken Sie auf die Schaltfläche unten, um die Datei zu laden.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Wollen Sie den Eintrag löschen?",
    // "This value should be unique."
    keyDuplicationError: "Dieser Wert muss einmalig sein.",
    // "Add Column"
    addColumn: "Spalte hinzufügen",
    // "Add Row"
    addRow: "Zeile hinzufügen",
    // "Remove"
    removeRow: "Entfernen",
    // "There are no rows."
    noRowsText: "Es gibt keine Reihen.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Zeile {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Neu hinzufügen",
    // "Remove"
    removePanel: "Entfernen",
    // "Show Details"
    showDetails: "Details anzeigen",
    // "Hide Details"
    hideDetails: "Details ausblenden",
    // "item"
    choices_Item: "Element",
    // [Auto-translated] "Choice option"
    choices_Choice: "Wahlmöglichkeit",
    // "Column"
    matrix_column: "Spalte",
    // "Row"
    matrix_row: "Zeile",
    // "text"
    multipletext_itemname: "Text",
    // "The results are being saved on the server..."
    savingData: "Die Ergebnisse werden auf dem Server gespeichert...",
    // "An error occurred and we could not save the results."
    savingDataError: "Es ist ein Fehler aufgetreten. Die Ergebnisse konnten nicht gespeichert werden.",
    // "The results were saved successfully!"
    savingDataSuccess: "Die Ergebnisse wurden gespeichert!",
    // "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Ihre Antwort überschreitet 64 KB. Reduzieren Sie die Größe Ihrer Datei(en) und versuchen Sie es erneut, oder wenden Sie sich an den Umfragebesitzer.",
    // "Try again"
    saveAgainButton: "Erneut absenden",
    // "min"
    timerMin: "Min.",
    // "sec"
    timerSec: "Sek.",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Sie waren {0} auf dieser Seite und brauchten insgesamt {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "Sie waren {0} auf dieser Seite.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Sie haben insgesamt {0} gebraucht.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Sie waren {0} von {1} auf dieser Seite und brauchten insgesamt {2} von {3}.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Sie waren {0} von {1} auf dieser Seite.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Sie haben insgesamt {0} von {1} gebraucht.",
    // "Clear"
    clearCaption: "Auswahl entfernen",
    // "Select"
    selectCaption: "Auswählen",
    // "Sign here"
    signaturePlaceHolder: "Hier unterschreiben",
    // "No signature"
    signaturePlaceHolderReadOnly: "Keine Unterschrift",
    // "Select File"
    chooseFileCaption: "Datei auswählen",
    // "Take Photo"
    takePhotoCaption: "Foto machen",
    // "Click the button below to take a photo using the camera."
    photoPlaceholder: "Klicken Sie auf die Schaltfläche unten, um ein Foto mit der Kamera aufzunehmen.",
    // "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Ziehen Sie eine Datei per Drag & Drop oder wählen Sie sie aus, um sie hochzuladen oder machen Sie ein Foto mit der Kamera.",
    // "Replace file"
    replaceFileCaption: "Datei ersetzen",
    // "Remove this file"
    removeFileCaption: "Datei löschen",
    // "Yes"
    booleanCheckedLabel: "Ja",
    // "No"
    booleanUncheckedLabel: "Nein",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Sind Sie sicher, dass Sie diese Datei löschen möchten: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Sind Sie sicher, dass Sie alle Dateien löschen möchten?",
    // "Question Title"
    questionTitlePatternText: "Fragentitel",
    // "Cancel"
    modalCancelButtonText: "Abbrechen",
    // "Apply"
    modalApplyButtonText: "Anwenden",
    // "Type to search..."
    filterStringPlaceholder: "Tippen Sie, um zu suchen...",
    // "No data to display"
    emptyMessage: "Es gibt noch keine Daten.",
    // [Auto-translated] "Loading..."
    loadingPage: "Wird hochgeladen...",
    // [Auto-translated] "Loading..."
    loadingData: "Wird hochgeladen...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Es gibt noch keine Einträge.\nKlicken Sie auf die Schaltfläche unten, um einen neuen Eintrag hinzuzufügen.",
    // "No entries"
    noEntriesReadonlyText: "Es gibt keine Einträge.",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Neues Panel",
    // "More"
    more: "Mehr",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Alle Auswahlmöglichkeiten sind in einer Rangfolge angeordnet",
    // "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Ziehen Sie die Auswahl hierher, um sie zu ordnen",
    // [Auto-translated] "OK"
    ok: "OK",
    // "Cancel"
    cancel: "Abbrechen",
    // "Create \"{0}\" item..."
    createCustomItem: '"{0}"-Element erstellen...',
    // [Auto-translated] "Table of contents"
    toc: "Inhaltsverzeichnis",
    // [Auto-translated] "Progress bar"
    progressbar: "Fortschrittsbalken"
  };
  surveyCore.setupLocale({ localeCode: "de", strings: germanSurveyStrings, nativeName: "deutsch", englishName: "German" });

  var greekSurveyStrings = {
    // "Previous"
    pagePrevText: "Προηγούμενο",
    // "Next"
    pageNextText: "Επόμενο",
    // "Complete"
    completeText: "Ολοκλήρωση",
    // "Preview"
    previewText: "Προεπισκόπηση",
    // "Edit"
    editText: "Επεξεργασία",
    // "Start"
    startSurveyText: "Αρχή",
    // [Auto-translated] "Please leave a comment"
    commentText: "Παρακαλώ αφήστε ένα σχόλιο",
    // "Other (describe)"
    otherItemText: "Άλλο (παρακαλώ διευκρινίστε)",
    // "None"
    noneItemText: "Κανένας",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Αρνηθείτε να απαντήσετε",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Δεν ξέρω",
    // "Select All"
    selectAllItemText: "Επιλογή όλων",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Αποεπιλογή όλων",
    // "Page {0} of {1}"
    progressText: "Σελίδα {0} από {1}",
    // "{0} of {1}"
    indexText: "{0} από {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Εγγραφή {0} από {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Πίνακας {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Απαντήθηκαν {0} / {1} ερωτήσεις",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Δεν υπάρχει καμία ορατή σελίδα ή ορατή ερώτηση σε αυτό το ερωτηματολόγιο.",
    // "Thank you for completing the survey"
    completingSurvey: "Ευχαριστούμε για την συμπλήρωση αυτού του ερωτηματολογίου!",
    // "You have already completed this survey."
    completingSurveyBefore: "Τα αρχεία μας δείχνουν ότι έχετε ήδη ολοκληρώσει αυτήν την έρευνα.",
    // "Loading Survey..."
    loadingSurvey: "Το ερωτηματολόγιο φορτώνεται απο το διακομιστή...",
    // "Select..."
    placeholder: "Επιλέξτε...",
    // "Select..."
    ratingOptionsCaption: "Πατήστε για να βαθμολογήσετε εδώ...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Διαλέγω...",
    // "value"
    value: "τιμή",
    // "Response required."
    requiredError: "Παρακαλώ απαντήστε στην ερώτηση.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Απαντήστε σε τουλάχιστον μία ερώτηση.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Παρακαλώ απαντήστε τις ερωτήσεις σε όλες τις γραμμές.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Κάθε γραμμή πρέπει να έχει μια μοναδική τιμή.",
    // "The value should be numeric."
    numericError: "Η τιμή πρέπει να είναι αριθμητική.",
    // "The value should not be less than {0}"
    minError: "Η τιμή δεν πρέπει να είναι μικρότερη από {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Εισαγάγετε μια τιμή που ταιριάζει με το μέγεθος του βήματος του {0}.",
    // "The value should not be greater than {0}"
    maxError: "Η τιμή δεν πρέπει να είναι μεγαλύτερη από {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Μη έγκυρη εισαγωγή",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Οι αριθμοί δεν επιτρέπονται.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Συμπληρώστε την τιμή για να ταιριάζει με την απαιτούμενη μορφή.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Παρακαλώ συμπληρώστε τουλάχιστον {0} χαρακτήρες.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Εισαγάγετε λιγότερους από {0} χαρακτήρες.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Εισαγάγετε περισσότερους από {0} και λιγότερους από {1} χαρακτήρες.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Παρακαλώ συμπληρώστε τουλάχιστον {0} γραμμές.",
    // "Please select at least {0} option(s)."
    minSelectError: "Παρακαλώ επιλέξτε τουλάχιστον {0} παραλλαγές.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Παρακαλώ επιλέξτε όχι παραπάνω απο {0} παραλλαγές.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "Το '{0}' θα πρέπει να είναι ίσο ή μεγαλύτερο απο το {1} και ίσο ή μικρότερο απο το {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "Το '{0}' πρέπει να είναι μεγαλύτερο ή ισο με το {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "Το '{0}' πρέπει να είναι μικρότερο ή ίσο απο το {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Παρακαλώ δώστε μια αποδεκτή διεύθυνση e-mail.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Η έκφραση: {0} θα πρέπει να επιστρέψει 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Η αίτηση επέστρεψε σφάλμα '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Η αίτηση επέστρεψε κενά δεδομένα ή η ιδιότητα 'μονοπάτι/path' είναι εσφαλμένη",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Το μέγεθος του αρχείου δεν μπορεί να υπερβαίνει τα {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Byte, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Ο μέγιστος αριθμός αρχείων που μπορείτε να ανεβάσετε είναι {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Δεν είναι δυνατή η αποστολή αρχείων. Προσθέστε ένα πρόγραμμα χειρισμού για το συμβάν 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Παρακαλώ συμπληρώστε την τιμή για το πεδίο 'άλλο'.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Το αρχείο σας ανεβαίνει. Παρακαλώ περιμένετε μερικά δευτερόλεπτα και δοκιμάστε ξανά.",
    // "Loading..."
    loadingFile: "Φόρτωση...",
    // "Choose file(s)..."
    chooseFile: "Επιλογή αρχείων ...",
    // "No file selected"
    noFileChosen: "Δεν έχει επιλεγεί αρχείο",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Αποθέστε το αρχείο σας εδώ ή κάντε κλικ στο κουμπί παρακάτω για να φορτώσετε το αρχείο.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Θέλετε να διαγράψετε την εγγραφή;",
    // "This value should be unique."
    keyDuplicationError: "Αυτή η τιμή πρέπει να είναι μοναδική.",
    // "Add Column"
    addColumn: "Προσθήκη στήλης",
    // "Add Row"
    addRow: "Προσθήκη γραμμής",
    // "Remove"
    removeRow: "Αφαίρεση",
    // "There are no rows."
    noRowsText: "Δεν υπάρχουν εγγραφές.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Γραμμή {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{σειράΤίτλος}",
    // "Add new"
    addPanel: "Προσθέστε νέο",
    // "Remove"
    removePanel: "Αφαίρεση",
    // [Auto-translated] "Show Details"
    showDetails: "Εμφάνιση λεπτομερειών",
    // [Auto-translated] "Hide Details"
    hideDetails: "Απόκρυψη λεπτομερειών",
    // "item"
    choices_Item: "είδος",
    // [Auto-translated] "Choice option"
    choices_Choice: "Επιλογή επιλογής",
    // "Column"
    matrix_column: "Στήλη",
    // "Row"
    matrix_row: "Γραμμή",
    // "text"
    multipletext_itemname: "κείμενο",
    // "The results are being saved on the server..."
    savingData: "Τα αποτελέσματα αποθηκεύονται στον διακομιστή ...",
    // "An error occurred and we could not save the results."
    savingDataError: "Παρουσιάστηκε σφάλμα και δεν ήταν δυνατή η αποθήκευση των αποτελεσμάτων.",
    // "The results were saved successfully!"
    savingDataSuccess: "Τα αποτελέσματα αποθηκεύτηκαν με επιτυχία!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Η απάντησή σας υπερβαίνει τα 64KB. Μειώστε το μέγεθος των αρχείων σας και προσπαθήστε ξανά ή επικοινωνήστε με τον κάτοχο της έρευνας.",
    // "Try again"
    saveAgainButton: "Προσπάθησε ξανά",
    // "min"
    timerMin: "ελάχ",
    // "sec"
    timerSec: "δευτ",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Έχετε δαπανήσει {0} σε αυτήν τη σελίδα και {1} συνολικά.",
    // "You have spent {0} on this page."
    timerSpentPage: "Έχετε ξοδέψει {0} σε αυτήν τη σελίδα.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Έχετε ξοδέψει συνολικά {0}.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Έχετε δαπανήσει {0} από {1} σε αυτήν τη σελίδα και {2} από {3} συνολικά.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Έχετε ξοδέψει {0} από {1} σε αυτήν τη σελίδα.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Έχετε ξοδέψει {0} από {1} συνολικά.",
    // "Clear"
    clearCaption: "Εκκαθάριση",
    // [Auto-translated] "Select"
    selectCaption: "Διαλέγω",
    // "Sign here"
    signaturePlaceHolder: "Υπογράψτε εδώ",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Χωρίς υπογραφή",
    // "Select File"
    chooseFileCaption: "Επιλέξτε αρχείο",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Λήψη φωτογραφίας",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Κάντε κλικ στο παρακάτω κουμπί για να τραβήξετε μια φωτογραφία χρησιμοποιώντας την κάμερα.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Σύρετε και αποθέστε ή επιλέξτε ένα αρχείο για αποστολή ή λήψη φωτογραφίας χρησιμοποιώντας την κάμερα.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Αντικατάσταση αρχείου",
    // "Remove this file"
    removeFileCaption: "Διαγράψτε αυτό το αρχείο",
    // "Yes"
    booleanCheckedLabel: "Ναι",
    // "No"
    booleanUncheckedLabel: "Όχι",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Είστε βέβαιοι ότι θέλετε να διαγράψετε αυτό το αρχείο: {0};",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Είστε βέβαιοι ότι θέλετε να διαγράψετε όλα τα αρχεία;",
    // "Question Title"
    questionTitlePatternText: "Τίτλος ερώτησης",
    // "Cancel"
    modalCancelButtonText: "Άκυρο",
    // "Apply"
    modalApplyButtonText: "Εφαρμογή",
    // "Type to search..."
    filterStringPlaceholder: "Πληκτρολογήστε για αναζήτηση...",
    // "No data to display"
    emptyMessage: "Δεν υπάρχουν δεδομένα προς εμφάνιση",
    // [Auto-translated] "Loading..."
    loadingPage: "Φόρτωση...",
    // [Auto-translated] "Loading..."
    loadingData: "Φόρτωση...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Δεν υπάρχουν ακόμη εγγραφές.\nΚάντε κλικ στο κουμπί παρακάτω για να προσθέσετε μια νέα εγγραφή.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Δεν υπάρχουν καταχωρήσεις",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Νέο πάνελ",
    // "More"
    more: "Περισσότερα",
    // "OK"
    tagboxDoneButtonCaption: "ΟΚ",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Όλες οι επιλογές επιλέγονται για κατάταξη",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Σύρετε τις επιλογές εδώ για να τις κατατάξετε",
    // [Auto-translated] "OK"
    ok: "OK",
    // [Auto-translated] "Cancel"
    cancel: "Ακυρώνω",
    // "Create \"{0}\" item..."
    createCustomItem: 'Δημιουργία στοιχείου "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Πίνακας περιεχομένων",
    // [Auto-translated] "Progress bar"
    progressbar: "Γραμμή προόδου"
  };
  surveyCore.setupLocale({ localeCode: "el", strings: greekSurveyStrings, nativeName: "ελληνικά", englishName: "Greek" });

  var haitianCreoleStrings = {
    // "Previous"
    pagePrevText: "Anvan",
    // "Next"
    pageNextText: "Pwochen",
    // "Complete"
    completeText: "Ranpli",
    // [Auto-translated] "Preview"
    previewText: "Preview",
    // [Auto-translated] "Edit"
    editText: "modifye",
    // "Start"
    startSurveyText: "Kòmanse",
    // [Auto-translated] "Please leave a comment"
    commentText: "Tanpri kite yon kòmantè",
    // "Other (describe)"
    otherItemText: "Lòt (dekri)",
    // "None"
    noneItemText: "Okenn",
    // "Refuse to answer"
    refuseItemText: "Refize reponn",
    // "Don't know"
    dontKnowItemText: "pa konnen",
    // "Select All"
    selectAllItemText: "Chwazi Tout",
    // "Deselect all"
    deselectAllItemText: "Deseleksyone tout",
    // "Page {0} of {1}"
    progressText: "Paj {0} nan {1}",
    // "{0} of {1}"
    indexText: "{0} nan {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "{0} nan {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Reponn {0}/{1} kesyon",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Sondaj la pa genyen okenn eleman vizib.",
    // "Thank you for completing the survey"
    completingSurvey: "Mèsi paske w fin ranpli sondaj la",
    // "You have already completed this survey."
    completingSurveyBefore: "Ou te deja ranpli sondaj sa a.",
    // "Loading Survey..."
    loadingSurvey: "Chaje sondaj...",
    // "Select..."
    placeholder: "Chwazi...",
    // "Select..."
    ratingOptionsCaption: "Chwazi...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Chwazi ...",
    // "value"
    value: "valè",
    // "Response required."
    requiredError: "Repons obligatwa.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Repons obligatwa: reponn omwen yon kesyon.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Repons obligatwa: reponn kesyon nan tout ranje.",
    // "Each row must have a unique value."
    eachRowUniqueError: "Chak ranje dwe gen yon valè inik.",
    // "The value should be numeric."
    numericError: "Valè a ta dwe nimerik.",
    // "The value should not be less than {0}"
    minError: "Valè a pa ta dwe mwens pase {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Tanpri antre yon valè ki matche ak gwosè a etap nan {0}.",
    // "The value should not be greater than {0}"
    maxError: "Valè a pa ta dwe pi gran pase {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Opinyon envalid",
    // "Numbers are not allowed."
    textNoDigitsAllow: "Nimewo yo pa pèmèt.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Tanpri ranpli valè a matche fòma obligatwa a.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Tanpri antre omwen {0} karaktè (yo).",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Tanpri antre pa plis pase {0} karaktè (yo).",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Tanpri antre omwen {0} e pa plis pase {1} karaktè.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Tanpri ranpli omwen {0} ranje (yo).",
    // "Please select at least {0} option(s)."
    minSelectError: "Tanpri chwazi omwen {0} opsyon (yo).",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Tanpri chwazi pa plis pase {0} opsyon (yo).",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' ta dwe omwen {1} ak pi plis {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' ta dwe omwen {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "' a{0}' ta dwe pi plis {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Tanpri antre yon adrès imel ki valab.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Ekspresyon an: {0} ta dwe retounen 'vre'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Rekèt la te retounen erè '{0}'.{1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Rekèt la te retounen done vid oswa pwopriyete 'chemen' a pa kòrèk",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Gwosè dosye a pa ta dwe depase {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bytes, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Nimewo a maksimòm nan dosye ou ka telechaje se {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Fichye yo pa ka telechaje. Tanpri ajoute yon moun kap okipe evènman 'onUploadFiles' la.",
    // "Response required: enter another value."
    otherRequiredError: "Repons obligatwa: antre yon lòt valè.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Fichye w ap telechaje. Tanpri tann plizyè segonn epi eseye ankò.",
    // "Loading..."
    loadingFile: "Chaje...",
    // "Choose file(s)..."
    chooseFile: "Chwazi fichye (yo)...",
    // "No file selected"
    noFileChosen: "Pa gen fichye chwazi",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Trennen epi depoze yon fichye isit la oswa klike sou bouton ki anba a pou chwazi yon fichye pou w telechaje.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Èske w sèten ou vle efase dosye sa a?",
    // "This value should be unique."
    keyDuplicationError: "Valè sa a ta dwe inik.",
    // "Add Column"
    addColumn: "Ajoute Kolòn",
    // "Add Row"
    addRow: "Ajoute Ranje",
    // "Remove"
    removeRow: "Retire",
    // "There are no rows."
    noRowsText: "Pa gen ranje.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Row {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Ajoute nouvo",
    // "Remove"
    removePanel: "Retire",
    // "Show Details"
    showDetails: "Montre detay",
    // "Hide Details"
    hideDetails: "Kache Detay yo",
    // "item"
    choices_Item: "atik",
    // "Choice option"
    choices_Choice: "Opsyon chwa",
    // "Column"
    matrix_column: "Kolòn",
    // "Row"
    matrix_row: "Ranje",
    // "text"
    multipletext_itemname: "tèks",
    // "The results are being saved on the server..."
    savingData: "Rezilta yo ap sove sou sèvè a...",
    // "An error occurred and we could not save the results."
    savingDataError: "Yon erè te fèt epi nou pa t 'kapab sove rezilta yo.",
    // "The results were saved successfully!"
    savingDataSuccess: "Rezilta yo te sove avèk siksè!",
    // "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Repons ou depase 64KB. Tanpri redwi gwosè fichye w la (yo) epi eseye ankò oswa kontakte pwopriyetè sondaj la.",
    // "Try again"
    saveAgainButton: "Eseye ankò",
    // [Auto-translated] "min"
    timerMin: "min",
    // [Auto-translated] "sec"
    timerSec: "sec",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Ou te depanse {0} sou paj sa a epi {1} an total.",
    // "You have spent {0} on this page."
    timerSpentPage: "Ou te depanse {0} sou paj sa a.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Ou te depanse {0} an total.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Ou te depanse {0} nan {1} sou paj sa a epi {2} nan {3} an total.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Ou te depanse {0} nan {1} sou paj sa a.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Ou te depanse {0} nan {1} an total.",
    // "Clear"
    clearCaption: "Klè",
    // [Auto-translated] "Select"
    selectCaption: "Chwazi",
    // "Sign here"
    signaturePlaceHolder: "Siyen isit la",
    // "No signature"
    signaturePlaceHolderReadOnly: "Pa gen siyati",
    // "Select File"
    chooseFileCaption: "Chwazi File",
    // "Take Photo"
    takePhotoCaption: "Pran Foto",
    // "Click the button below to take a photo using the camera."
    photoPlaceholder: "Klike sou bouton ki anba a pou pran yon foto ak kamera a.",
    // "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Trennen epi depoze oswa chwazi yon dosye pou w telechaje oswa pran yon foto lè l sèvi avèk kamera a.",
    // "Replace file"
    replaceFileCaption: "Ranplase fichye a",
    // "Remove this file"
    removeFileCaption: "Retire fichye sa a",
    // "Yes"
    booleanCheckedLabel: "Wi",
    // "No"
    booleanUncheckedLabel: "Non",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Èske ou sèten ou vle retire dosye sa a: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Èske w sèten ou vle retire tout fichye yo?",
    // "Question Title"
    questionTitlePatternText: "Tit kesyon",
    // "Cancel"
    modalCancelButtonText: "Anile",
    // "Apply"
    modalApplyButtonText: "Aplike",
    // "Type to search..."
    filterStringPlaceholder: "Tape pou chèche...",
    // "No data to display"
    emptyMessage: "Pa gen done pou montre",
    // "Loading..."
    loadingPage: "Chaje...",
    // "Loading..."
    loadingData: "Chaje...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Pa gen okenn antre ankò.\nKlike sou bouton ki anba a pou ajoute yon nouvo antre.",
    // "No entries"
    noEntriesReadonlyText: "Pa gen antre",
    // "New Panel"
    tabTitlePlaceholder: "Nouvo Panel",
    // "More"
    more: "Plis",
    // "OK"
    tagboxDoneButtonCaption: "OKE",
    // "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Tout chwa yo chwazi pou klasman",
    // "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Trennen chwa isit la pou klase yo",
    // "OK"
    ok: "OKE",
    // "Cancel"
    cancel: "Anile",
    // "Create \"{0}\" item..."
    createCustomItem: 'Kreye "{0}" atik ...',
    // [Auto-translated] "Table of contents"
    toc: "Sa ki nan yon tablo",
    // [Auto-translated] "Progress bar"
    progressbar: "ba pwogrè"
  };
  surveyCore.setupLocale({ localeCode: "ht", strings: haitianCreoleStrings, nativeName: "Kreyòl ayisyen", englishName: "Haitian Creole" });

  var hebrewSurveyStrings = {
    // "Previous"
    pagePrevText: "אחורה",
    // "Next"
    pageNextText: "קדימה",
    // "Complete"
    completeText: "סיום",
    // "Preview"
    previewText: "תצוגה מקדימה",
    // "Edit"
    editText: "לַעֲרוֹך",
    // "Start"
    startSurveyText: "הַתחָלָה",
    // [Auto-translated] "Please leave a comment"
    commentText: "אנא השאירו תגובה",
    // "Other (describe)"
    otherItemText: "אחר (נא לתאר)",
    // "None"
    noneItemText: "אף אחד",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "מסרבים לענות",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "לא יודע",
    // "Select All"
    selectAllItemText: "בחר הכל",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "בטל את הבחירה בהכל",
    // "Page {0} of {1}"
    progressText: "דף {0} מתוך {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} מתוך {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "הקלטה {0} מתוך {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "לוח {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "ענה על שאלות",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "אין שאלות",
    // "Thank you for completing the survey"
    completingSurvey: "תודה על מילוי השאלון!",
    // "You have already completed this survey."
    completingSurveyBefore: "הרשומות שלנו מראות שכבר סיימת את הסקר הזה.",
    // "Loading Survey..."
    loadingSurvey: "טעינה מהשרת...",
    // "Select..."
    placeholder: "בחר...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "בחר...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "בחר...",
    // "value"
    value: "ערך",
    // "Response required."
    requiredError: "אנא השב על השאלה",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "אנא ענה לפחות על שאלה אחת.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "אנא ענה על שאלות בכל השורות.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "לכל שורה חייב להיות ערך ייחודי.",
    // "The value should be numeric."
    numericError: "התשובה צריכה להיות מספר.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "הערך לא צריך להיות קטן מ {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "הזן ערך התואם לגודל הצעד של {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "הערך לא צריך להיות גדול מ- {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "קלט שגוי",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "מספרים אינם מותרים.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "אנא מלא את הערך כדי להתאים לפורמט הנדרש.",
    // "Please enter at least {0} character(s)."
    textMinLength: "הזן לפחות {0} תווים.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "הזן פחות מ- {0} תווים.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "הזן יותר מ- {0} ופחות מ- {1} תווים.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "אנא מלא לפחות {0} שורות.",
    // "Please select at least {0} option(s)."
    minSelectError: "בחר לפחות {0} אפשרויות.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "בחר עד {0} אפשרויות.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' חייב להיות שווה או גדול מ {1}, ושווה ל- {2} או פחות מ- {}}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' חייב להיות שווה או גדול מ {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' חייב להיות שווה או קטן מ {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: 'הזן כתובת דוא"ל חוקית.',
    // "The expression: {0} should return 'true'."
    invalidExpression: "הביטוי: {0} צריך להחזיר 'אמת'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "הבקשה החזירה את השגיאה '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "הבקשה החזירה נתונים ריקים או שהמאפיין 'נתיב' שגוי",
    // "The file size should not exceed {0}."
    exceedMaxSize: "גודל הקובץ לא יעלה על {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "בתים, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "המספר המקסימלי של קבצים שאתה יכול להעלות הוא {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "לא ניתן להעלות קבצים. אנא הוסף מטפל לאירוע 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: 'נא להזין נתונים בשדה "אחר"',
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "הקובץ שלך נטען. המתן מספר שניות ונסה שוב.",
    // "Loading..."
    loadingFile: "טוען...",
    // "Choose file(s)..."
    chooseFile: "לבחור קבצים...",
    // "No file selected"
    noFileChosen: "לא נבחר קובץ",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "גרור ושחרר קובץ כאן או לחץ על הכפתור למטה כדי לבחור קובץ להעלאה.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "האם אתה רוצה למחוק את הרשומה?",
    // "This value should be unique."
    keyDuplicationError: "ערך זה צריך להיות ייחודי.",
    // "Add Column"
    addColumn: "הוסף עמודה",
    // "Add Row"
    addRow: "להוסיף שורה",
    // "Remove"
    removeRow: "לְהַסִיר",
    // [Auto-translated] "There are no rows."
    noRowsText: "אין שורות.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "שורה {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{כותרת_שורה}",
    // "Add new"
    addPanel: "הוסף חדש",
    // "Remove"
    removePanel: "לְהַסִיר",
    // [Auto-translated] "Show Details"
    showDetails: "הראה פרטים",
    // [Auto-translated] "Hide Details"
    hideDetails: "הסתר פרטים",
    // "item"
    choices_Item: "פריט",
    // [Auto-translated] "Choice option"
    choices_Choice: "אפשרות בחירה",
    // "Column"
    matrix_column: "טור",
    // "Row"
    matrix_row: "שׁוּרָה",
    // [Auto-translated] "text"
    multipletext_itemname: "טקסט",
    // "The results are being saved on the server..."
    savingData: "התוצאות נשמרות בשרת ...",
    // "An error occurred and we could not save the results."
    savingDataError: "אירעה שגיאה ולא הצלחנו לשמור את התוצאות.",
    // "The results were saved successfully!"
    savingDataSuccess: "התוצאות נשמרו בהצלחה!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "תגובתך עולה על 64KB. אנא הקטן את גודל הקבצים שלך ונסה שוב או צור קשר עם בעל הסקר.",
    // "Try again"
    saveAgainButton: "נסה שוב",
    // "min"
    timerMin: "דקה",
    // "sec"
    timerSec: "שניות",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "הוצאת {0} בדף זה ובסך הכל {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "הוצאת {0} בדף זה.",
    // "You have spent {0} in total."
    timerSpentSurvey: "הוצאת סכום כולל של {0}.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "הוצאת {0} מתוך {1} בדף זה ו- {2} מתוך {3} בסך הכל.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "הוצאת {0} מתוך {1} בדף זה.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "הוצאת סכום כולל של {0} מתוך {1}.",
    // "Clear"
    clearCaption: "לנקות",
    // [Auto-translated] "Select"
    selectCaption: "בחר",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "חתום כאן",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "אין חתימה",
    // "Select File"
    chooseFileCaption: "בחר קובץ",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "צלם תמונה",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "לחץ על הלחצן למטה כדי לצלם תמונה באמצעות המצלמה.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "גרור ושחרר או בחר קובץ כדי להעלות או לצלם תמונה באמצעות המצלמה.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "החלפת קובץ",
    // "Remove this file"
    removeFileCaption: "הסר קובץ זה",
    // "Yes"
    booleanCheckedLabel: "כן",
    // "No"
    booleanUncheckedLabel: "לא",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "האם אתה בטוח שברצונך להסיר קובץ זה: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "האם אתה בטוח שברצונך להסיר את כל הקבצים?",
    // "Question Title"
    questionTitlePatternText: "כותרת שאלה",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "ביטל",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "החל",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "הקלד כדי לחפש...",
    // [Auto-translated] "No data to display"
    emptyMessage: "אין נתונים להצגה",
    // [Auto-translated] "Loading..."
    loadingPage: "טעינת...",
    // [Auto-translated] "Loading..."
    loadingData: "טעינת...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "עדיין אין כניסות.\nלחץ על הכפתור למטה כדי להוסיף ערך חדש.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "אין כניסות",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "פאנל חדש",
    // [Auto-translated] "More"
    more: "עוד",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "אוקיי",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "כל האפשרויות נבחרות לדירוג",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "גרור אפשרויות לכאן כדי לדרג אותן",
    // [Auto-translated] "OK"
    ok: "אוקיי",
    // [Auto-translated] "Cancel"
    cancel: "ביטל",
    // "Create \"{0}\" item..."
    createCustomItem: 'צור פריט "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "תוכן עניינים",
    // [Auto-translated] "Progress bar"
    progressbar: "מד התקדמות"
  };
  surveyCore.setupLocale({ localeCode: "he", strings: hebrewSurveyStrings, nativeName: "עברית", englishName: "Hebrew", rtl: true });

  var hindiStrings = {
    // "Previous"
    pagePrevText: "पिछला",
    // "Next"
    pageNextText: "अगला",
    // "Complete"
    completeText: "पूरा",
    // "Preview"
    previewText: "पूर्वसमीक्षा",
    // "Edit"
    editText: "संपादित",
    // "Start"
    startSurveyText: "शुरू",
    // [Auto-translated] "Please leave a comment"
    commentText: "कृपया एक टिप्पणी छोड़ दो",
    // "Other (describe)"
    otherItemText: "दूसरा (वर्णन करें)",
    // [Auto-translated] "None"
    noneItemText: "कोई नहीं",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "जवाब देने से इनकार",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "नहीं मालूम",
    // "Select All"
    selectAllItemText: "सभी का चयन करें",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "सभी को अचयनित करें",
    // "Page {0} of {1}"
    progressText: "पृष्ठ 1 में से 0",
    // [Auto-translated] "{0} of {1}"
    indexText: "{1} का {0}",
    // "{0} of {1}"
    panelDynamicProgressText: " दस्तावेज {1} के {0}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "पैनल {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "{1} सवालों में से {0} के जवाब दिए",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "सर्वेक्षण में कोई दृश्यमान पृष्ठ या प्रश्न नहीं है",
    // "Thank you for completing the survey"
    completingSurvey: "सर्वेक्षण को पूरा करने के लिए धन्यवाद",
    // "You have already completed this survey."
    completingSurveyBefore: " हमारे रिकॉर्ड बताते हैं कि आप पहले ही इस सर्वेक्षण को पूरा कर चुके हैं",
    // "Loading Survey..."
    loadingSurvey: "सर्वेक्षण खुल रहा है.…",
    // "Select..."
    placeholder: "चुनें",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "चुनना।।।",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "चुनना।।।",
    // "value"
    value: "मूल्य",
    // "Response required."
    requiredError: "कृपया प्रश्न का उत्तर दें",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "कृपया कम से कम एक प्रश्न का उत्तर दें",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "कृपया सभी पंक्तियों में सवालों के जवाब दें",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "प्रत्येक पंक्ति का एक अद्वितीय मान होना चाहिए.",
    // "The value should be numeric."
    numericError: "मूल्य संख्यात्मक होना चाहिए",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "मान {0} से कम नहीं होना चाहिए",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "कृपया कोई मान दर्ज करें जो {0} के चरण आकार से मेल खाता हो.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "मान {0} से अधिक नहीं होना चाहिए",
    // [Auto-translated] "Invalid input"
    invalidInputError: "अमान्य इनपुट",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "संख्या की अनुमति नहीं है।",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "कृपया आवश्यक प्रारूप से मेल खाने के लिए मान को पूरा करें।",
    // "Please enter at least {0} character(s)."
    textMinLength: "कृपया कम से कम {0} वर्ण दर्ज करें",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "कृपया {0} से कम वर्ण दर्ज करें",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "कृपया {0} से अधिक और {1} से कम पात्रों में प्रवेश करें",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "कृपया कम से कम {0} पंक्तियों को भरें",
    // "Please select at least {0} option(s)."
    minSelectError: "कृपया कम से कम {0} विकल्प का चयन करें",
    // "Please select no more than {0} option(s)."
    maxSelectError: "कृपया {0} विकल्पों से अधिक नहीं चुनें",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' {1} से बराबर या अधिक और {2} से बराबर या कम होना चाहिए",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' {1} से बराबर या अधिक होना चाहिए",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' {1} से बराबर या कम होना चाहिए",
    // "Please enter a valid e-mail address."
    invalidEmail: "कृपया एक वैध ईमेल पता दर्ज करें",
    // "The expression: {0} should return 'true'."
    invalidExpression: "अभिव्यक्ति: {0} को ' सच ' लौटना चाहिए",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "अनुरोध लौटाया त्रुटि '{0}' . {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "अनुरोध ने खाली डेटा वापस कर दिया है ",
    // "The file size should not exceed {0}."
    exceedMaxSize: "फ़ाइल का आकार {0} से अधिक नहीं होना चाहिए  या फिर 'पाथ' प्रॉपर्टी गलत है",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "बाइट्स, केबी, एमबी, जीबी, टीबी",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "आपके द्वारा अपलोड की जा सकने वाली फ़ाइलों की अधिकतम संख्या {0} है।",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "फ़ाइलें अपलोड नहीं की जा सकती. कृपया 'onloadFiles' ईवेंट के लिए एक हैंडलर जोड़ें.",
    // "Response required: enter another value."
    otherRequiredError: "कृपया दूसरा मूल्य दर्ज करें",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "आपकी फाइल अपलोड हो रही है। कृपया कई सेकंड इंतजार करें और फिर से प्रयास करें।",
    // "Loading..."
    loadingFile: "लोडिंग",
    // "Choose file(s)..."
    chooseFile: "फ़ाइल चुनें",
    // "No file selected"
    noFileChosen: "कोई फाइल नहीं चुनी गई",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "किसी फ़ाइल को यहाँ खींचें और छोड़ें या अपलोड करने के लिए फ़ाइल का चयन करने के लिए नीचे दिए गए बटन पर क्लिक करें।",
    // "Are you sure you want to delete this record?"
    confirmDelete: "क्या आप रिकॉर्ड हटाना चाहते हैं",
    // "This value should be unique."
    keyDuplicationError: "यह मान अनोखा होना चाहिए",
    // "Add Column"
    addColumn: "कॉलम जोड़ें",
    // "Add Row"
    addRow: "पंक्ति जोड़ें",
    // "Remove"
    removeRow: "हटाए",
    // [Auto-translated] "There are no rows."
    noRowsText: "कोई पंक्तियाँ नहीं हैं.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "पंक्ति {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{पंक्तिशीर्षक}",
    // "Add new"
    addPanel: "नया जोड़ें",
    // "Remove"
    removePanel: "हटाए",
    // [Auto-translated] "Show Details"
    showDetails: "विवरण दिखाएँ",
    // [Auto-translated] "Hide Details"
    hideDetails: "विवरण छुपाएँ",
    // "item"
    choices_Item: "मद",
    // [Auto-translated] "Choice option"
    choices_Choice: "पसंद विकल्प",
    // "Column"
    matrix_column: "कॉलम",
    // "Row"
    matrix_row: "पंक्ति",
    // [Auto-translated] "text"
    multipletext_itemname: "टेक्स्ट",
    // "The results are being saved on the server..."
    savingData: "परिणाम सर्वर पर सेव हो रहे हैं",
    // "An error occurred and we could not save the results."
    savingDataError: "एक त्रुटि हुई और हम परिणामों को नहीं सेव कर सके",
    // "The results were saved successfully!"
    savingDataSuccess: "परिणाम सफलतापूर्वक सेव हो गए",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "आपकी प्रतिक्रिया 64KB से अधिक है। कृपया अपनी फ़ाइल(फ़ाइलों) का आकार घटाएँ और पुन: प्रयास करें या सर्वेक्षण स्वामी से संपर्क करें.",
    // "Try again"
    saveAgainButton: "फिर कोशिश करो",
    // "min"
    timerMin: "मिनट",
    // "sec"
    timerSec: "सेकंड",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "आपने इस पृष्ठ पर {0} खर्च किए हैं और कुल {1}",
    // "You have spent {0} on this page."
    timerSpentPage: "आपने इस पृष्ठ पर {0} खर्च किया है",
    // "You have spent {0} in total."
    timerSpentSurvey: "आपने कुल {0} खर्च किया है",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "आपने इस पृष्ठ पर {1} की {0} और कुल {3} की {2} खर्च की है।",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "आपने इस पृष्ठ पर {1} का {0} खर्च किया है",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "आपने कुल {1} की {0} खर्च की है",
    // "Clear"
    clearCaption: "स्पष्ट",
    // [Auto-translated] "Select"
    selectCaption: "चुनना",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "यहां साइन करें",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "कोई हस्ताक्षर नहीं",
    // "Select File"
    chooseFileCaption: "फ़ाइल चुनें",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "फोटो ले लो",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "कैमरे का उपयोग करके फोटो लेने के लिए नीचे दिए गए बटन पर क्लिक करें।",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "कैमरे का उपयोग करके फ़ोटो अपलोड करने या फ़ोटो लेने के लिए किसी फ़ाइल को खींचें और छोड़ें या चुनें.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "फ़ाइल बदलें",
    // "Remove this file"
    removeFileCaption: "इस फाइल को निकालें",
    // "Yes"
    booleanCheckedLabel: "हाँ",
    // "No"
    booleanUncheckedLabel: "नहीं",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "क्या आप सुनिश्चित हैं कि आप इस फ़ाइल को हटाना चाहते हैं: {0}",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "क्या आप सुनिश्चित हैं कि आप सभी फ़ाइलों को हटाना चाहते हैं",
    // "Question Title"
    questionTitlePatternText: "प्रश्न का शीर्षक",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "रद्द करना",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "लागू करना",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "खोज करने के लिए टाइप करें...",
    // [Auto-translated] "No data to display"
    emptyMessage: "प्रदर्शित करने के लिए कोई डेटा नहीं",
    // [Auto-translated] "Loading..."
    loadingPage: "लोड।।।",
    // [Auto-translated] "Loading..."
    loadingData: "लोड।।।",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "अभी तक कोई प्रविष्टि नहीं।\nनई प्रविष्टि जोड़ने के लिए नीचे दिए गए बटन पर क्लिक करें.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "कोई प्रविष्टि नहीं",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "नया पैनल",
    // [Auto-translated] "More"
    more: "अधिक",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "ठीक है",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "रैंकिंग के लिए सभी विकल्पों का चयन किया जाता है",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "विकल्पों को रैंक करने के लिए यहां खींचें",
    // [Auto-translated] "OK"
    ok: "ठीक है",
    // [Auto-translated] "Cancel"
    cancel: "रद्द करना",
    // "Create \"{0}\" item..."
    createCustomItem: '"{0}" आइटम बनाएँ...',
    // [Auto-translated] "Table of contents"
    toc: "विषय-सूची",
    // [Auto-translated] "Progress bar"
    progressbar: "प्रगति पट्टी"
  };
  surveyCore.setupLocale({ localeCode: "hi", strings: hindiStrings, nativeName: "हिन्दी", englishName: "Hindi" });

  var hungarianSurveyStrings = {
    // "Previous"
    pagePrevText: "Vissza",
    // "Next"
    pageNextText: "Tovább",
    // "Complete"
    completeText: "Kész",
    // "Preview"
    previewText: "Előnézet",
    // "Edit"
    editText: "Szerkesztés",
    // "Start"
    startSurveyText: "Rajt",
    // [Auto-translated] "Please leave a comment"
    commentText: "Kérjük, írjon megjegyzést",
    // "Other (describe)"
    otherItemText: "Egyéb (adja meg)",
    // "None"
    noneItemText: "Egyik sem",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "A válaszadás megtagadása",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Nem tudom",
    // "Select All"
    selectAllItemText: "Mindet kiválaszt",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Az összes kijelölésének megszüntetése",
    // "Page {0} of {1}"
    progressText: "{0}./{1} oldal",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} {1} közül",
    // "{0} of {1}"
    panelDynamicProgressText: "{0} / {1} rekord",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Válaszolt kérdések: {0} / {1}",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    emptySurvey: "A felmérés nem tartalmaz látható elemeket.",
    // "Thank you for completing the survey"
    completingSurvey: "Köszönjük, hogy kitöltötte felmérésünket!",
    // "You have already completed this survey."
    completingSurveyBefore: "Már kitöltötte a felmérést.",
    // "Loading Survey..."
    loadingSurvey: "Felmérés betöltése...",
    // "Select..."
    placeholder: "Válasszon...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Kiválaszt...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Kiválaszt...",
    // "value"
    value: "érték",
    // "Response required."
    requiredError: "Kérjük, válaszolja meg ezt a kérdést!",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Kérjük, válaszoljon legalább egy kérdésre.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Kérjük adjon választ minden sorban!",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Minden sornak egyedi értékkel kell rendelkeznie.",
    // "The value should be numeric."
    numericError: "Az érték szám kell, hogy legyen!",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Az érték nem lehet kisebb, mint {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Kérjük, adjon meg egy értéket, amely megfelel a {0} lépésméretének.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Az érték nem lehet nagyobb, mint {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Érvénytelen bemenet",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Számok nem engedélyezettek.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Kérjük, töltse ki az értéket, hogy megfeleljen a szükséges formátumnak.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Adjon meg legalább {0} karaktert!",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Legfeljebb {0} karaktert adjon meg!",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Adjon meg legalább {0}, de legfeljebb {1} karaktert!",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Töltsön ki minimum {0} sort!",
    // "Please select at least {0} option(s)."
    minSelectError: "Válasszon ki legalább {0} lehetőséget!",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Ne válasszon többet, mint {0} lehetőség!",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' legyen nagyobb, vagy egyenlő, mint {1} és kisebb, vagy egyenlő, mint {2}!",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' legyen legalább {1}!",
    // "The '{0}' should be at most {1}"
    numericMax: "The '{0}' ne legyen nagyobb, mint {1}!",
    // "Please enter a valid e-mail address."
    invalidEmail: "Adjon meg egy valós email címet!",
    // "The expression: {0} should return 'true'."
    invalidExpression: "A következő kifejezés: {0} vissza kell adnia az „igaz” értéket.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "A lekérdezés hibával tért vissza: '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "A lekérdezés üres adattal tért vissza, vagy a 'path' paraméter helytelen.",
    // "The file size should not exceed {0}."
    exceedMaxSize: "A méret nem lehet nagyobb, mint {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bájtok, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "A maximális fájlszám, amit feltölthetsz, {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: 'A fájlok nem tölthetők fel. Adjon hozzá egy kezelőt az "onUploadFiles" eseményhez.',
    // "Response required: enter another value."
    otherRequiredError: "Adja meg az egyéb értéket!",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Feltöltés folyamatban. Várjon pár másodpercet, majd próbálja újra.",
    // "Loading..."
    loadingFile: "Betöltés...",
    // "Choose file(s)..."
    chooseFile: "Fájlok kiválasztása ...",
    // "No file selected"
    noFileChosen: "Nincs kiválasztva fájl",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Dobjon ide egy fájlt, vagy kattintson az alábbi gombra a fájl betöltéséhez.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Törli ezt a rekordot?",
    // "This value should be unique."
    keyDuplicationError: "Az értéknek egyedinek kell lennie.",
    // "Add Column"
    addColumn: "Oszlop hozzáadása",
    // "Add Row"
    addRow: "Sor hozzáadása",
    // "Remove"
    removeRow: "Eltávolítás",
    // [Auto-translated] "There are no rows."
    noRowsText: "Nincsenek sorok.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "{rowIndex} sor",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Új hozzáadása",
    // "Remove"
    removePanel: "Eltávolítás",
    // [Auto-translated] "Show Details"
    showDetails: "Mutasd a részleteket",
    // [Auto-translated] "Hide Details"
    hideDetails: "Részletek elrejtése",
    // "item"
    choices_Item: "elem",
    // [Auto-translated] "Choice option"
    choices_Choice: "Választási lehetőség",
    // "Column"
    matrix_column: "Oszlop",
    // "Row"
    matrix_row: "Sor",
    // [Auto-translated] "text"
    multipletext_itemname: "SMS",
    // "The results are being saved on the server..."
    savingData: "Eredmény mentése a szerverre...",
    // "An error occurred and we could not save the results."
    savingDataError: "Egy hiba folytán nem tudtuk elmenteni az eredményt.",
    // "The results were saved successfully!"
    savingDataSuccess: "Eredmény sikeresen mentve!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "A válasz meghaladja a 64 KB-ot. Kérjük, csökkentse a fájl(ok) méretét, és próbálja újra, vagy lépjen kapcsolatba a felmérés tulajdonosával.",
    // "Try again"
    saveAgainButton: "Próbálja újra",
    // [Auto-translated] "min"
    timerMin: "min",
    // [Auto-translated] "sec"
    timerSec: "SEC",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Ön {0} összeget költött ezen az oldalon, és összesen {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "{0} összeget költött ezen az oldalon.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Összesen {0} költött.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Ön {0} / {1} összeget költött ezen az oldalon, és összesen {2} / {3}.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Ön {0} / {1} összeget költött ezen az oldalon.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Összesen {0} / {1} összeget költött el.",
    // "Clear"
    clearCaption: "Törlés",
    // [Auto-translated] "Select"
    selectCaption: "Kiválaszt",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Írja alá itt",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Nincs aláírás",
    // "Select File"
    chooseFileCaption: "Válassz fájlt",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Fotó készítése",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Kattintson az alábbi gombra, hogy fényképet készítsen a fényképezőgéppel.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Húzzon át vagy válasszon ki egy fájlt, amelyet fel szeretne tölteni vagy fényképet szeretne készíteni a kamerával.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Fájl cseréje",
    // "Remove this file"
    removeFileCaption: "Távolítsa el ezt a fájlt",
    // "Yes"
    booleanCheckedLabel: "Igen",
    // "No"
    booleanUncheckedLabel: "Nem",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Biztosan eltávolítja ezt a fájlt: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Biztosan el akarja távolítani az összes fájlt?",
    // "Question Title"
    questionTitlePatternText: "Kérdés címe",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Érvénytelenít",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Alkalmaz",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Írja be a kereséshez...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Nincs megjeleníthető adat",
    // [Auto-translated] "Loading..."
    loadingPage: "Berakás...",
    // [Auto-translated] "Loading..."
    loadingData: "Berakás...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Még nincs nevezés.\nKattintson az alábbi gombra új bejegyzés hozzáadásához.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Nincs nevezés",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Új panel",
    // [Auto-translated] "More"
    more: "Több",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OKÉ",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Minden választás kiválasztásra kerül a rangsoroláshoz",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Húzza ide a választási lehetőségeket a rangsoroláshoz",
    // [Auto-translated] "OK"
    ok: "OKÉ",
    // [Auto-translated] "Cancel"
    cancel: "Érvénytelenít",
    // "Create \"{0}\" item..."
    createCustomItem: '"{0}" elem létrehozása...',
    // [Auto-translated] "Table of contents"
    toc: "Tartalomjegyzék",
    // [Auto-translated] "Progress bar"
    progressbar: "Folyamatjelző sáv"
  };
  surveyCore.setupLocale({ localeCode: "hu", strings: hungarianSurveyStrings, nativeName: "magyar", englishName: "Hungarian" });

  var icelandicSurveyStrings = {
    // "Previous"
    pagePrevText: "Tilbaka",
    // "Next"
    pageNextText: "Áfram",
    // "Complete"
    completeText: "Lokið",
    // "Preview"
    previewText: "Forskoða",
    // "Edit"
    editText: "Breyta",
    // "Start"
    startSurveyText: "Byrjaðu",
    // [Auto-translated] "Please leave a comment"
    commentText: "Vinsamlegast skildu eftir athugasemd",
    // "Other (describe)"
    otherItemText: "Hinn (skýring)",
    // "None"
    noneItemText: "Enginn",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Neita að svara",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Veit ekki",
    // "Select All"
    selectAllItemText: "Velja allt",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Afveljið allt",
    // "Page {0} of {1}"
    progressText: "Síða {0} of {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} af {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Taka upp {0} af {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Pallborð {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Svarað {0} / {1} spurningum",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Það er enginn síða eða spurningar í þessari könnun.",
    // "Thank you for completing the survey"
    completingSurvey: "Takk fyrir að fyllja út þessa könnun!",
    // "You have already completed this survey."
    completingSurveyBefore: "Skrár okkar sýna að þú hefur þegar lokið þessari könnun.",
    // "Loading Survey..."
    loadingSurvey: "Könnunin er að hlaða...",
    // "Select..."
    placeholder: "Veldu...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Velja...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Velja...",
    // "value"
    value: "gildi",
    // "Response required."
    requiredError: "Vinsamlegast svarið spurningunni.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Vinsamlegast svaraðu að minnsta kosti einni spurningu.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Vinsamlegast svarið spurningum í öllum röðum.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Hver lína verður að hafa einstakt gildi.",
    // "The value should be numeric."
    numericError: "Þetta gildi verður að vera tala.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Gildið má ekki vera lægra en {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Vinsamlegast sláðu inn gildi sem passar við þrepastærð {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Gildið má ekki vera hærra en {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Ógild inntak",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Tölur eru ekki leyfðar.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Vinsamlegast fylltu út gildið til að passa við nauðsynlegt snið.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Það ætti að vera minnst {0} tákn.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Það ætti að vera mest {0} tákn.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Það ætti að vera fleiri en {0} og færri en {1} tákn.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Vinsamlegast fyllið úr að minnsta kosti {0} raðir.",
    // "Please select at least {0} option(s)."
    minSelectError: "Vinsamlegast veljið að minnsta kosti {0} möguleika.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Vinsamlegast veljið ekki fleiri en {0} möguleika.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' ætti að vera meira en eða jafnt og {1} minna en eða jafnt og {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "{0}' ætti að vera meira en eða jafnt og {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' ætti að vera minna en eða jafnt og {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Vinsamlegast sláið inn gilt netfang.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Tjáningin: {0} ætti að skila 'satt'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Beiðninn skilaði eftirfaranadi villu '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Beiðninng skilaði engum gögnum eða slóðinn var röng",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Skráinn skal ekki vera stærri en {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bæti, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Hámarksfjöldi skráa sem þú getur hlaðið upp er {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Ekki er hægt að hlaða upp skrám. Vinsamlegast bættu við rekli fyrir 'onUploadFiles' atvikið.",
    // "Response required: enter another value."
    otherRequiredError: "Vinamlegast fyllið út hitt gildið.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Skráinn þín var send. Vinsamlegast bíðið í nokkrar sekúndur og reynið aftur.",
    // "Loading..."
    loadingFile: "Hleður ...",
    // "Choose file(s)..."
    chooseFile: "Veldu skrár ...",
    // "No file selected"
    noFileChosen: "Engin skrá valin",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Dragðu og slepptu skrá hér eða smelltu á hnappinn hér að neðan til að velja skrá til að hlaða upp.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Viltu eyða skránni?",
    // "This value should be unique."
    keyDuplicationError: "Þetta gildi ætti að vera einstakt.",
    // "Add Column"
    addColumn: "Bæta við dálki",
    // "Add Row"
    addRow: "Bæta við röð",
    // "Remove"
    removeRow: "Fjarlægja",
    // [Auto-translated] "There are no rows."
    noRowsText: "Það eru engar raðir.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Röð {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Bæta við nýju",
    // "Remove"
    removePanel: "Fjarlægðu",
    // [Auto-translated] "Show Details"
    showDetails: "Sýna upplýsingar",
    // [Auto-translated] "Hide Details"
    hideDetails: "Fela upplýsingar",
    // "item"
    choices_Item: "hlutur",
    // [Auto-translated] "Choice option"
    choices_Choice: "Valmöguleiki",
    // "Column"
    matrix_column: "Dálkur",
    // "Row"
    matrix_row: "Röð",
    // [Auto-translated] "text"
    multipletext_itemname: "Texti",
    // "The results are being saved on the server..."
    savingData: "Niðurstöðurnar eru að spara á netþjóninum ... ",
    // "An error occurred and we could not save the results."
    savingDataError: "Villa kom upp og við gátum ekki vistað niðurstöðurnar.",
    // "The results were saved successfully!"
    savingDataSuccess: "Árangurinn var vistaður með góðum árangri!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Svar þitt fer yfir 64KB. Vinsamlegast minnkaðu stærð skráa þinna og reyndu aftur eða hafðu samband við eiganda könnunarinnar.",
    // "Try again"
    saveAgainButton: "Reyndu aftur",
    // "min"
    timerMin: "mín",
    // "sec"
    timerSec: "sek",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Þú hefur eytt {0} á þessari síðu og {1} samtals.",
    // "You have spent {0} on this page."
    timerSpentPage: "Þú hefur eytt {0} á þessari síðu.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Þú hefur eytt {0} samtals.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Þú hefur eytt {0} af {1} á þessari síðu og {2} af {3} samtals.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Þú hefur eytt {0} af {1} á þessari síðu.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Þú hefur eytt {0} af {1} samtals.",
    // "Clear"
    clearCaption: "Hreinsa",
    // [Auto-translated] "Select"
    selectCaption: "Velja",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Kvittađu hér",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Engin undirskrift",
    // "Select File"
    chooseFileCaption: "Veldu skrá",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Taka mynd",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Smelltu á hnappinn hér að neðan til að taka mynd með myndavélinni.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Dragðu og slepptu eða veldu skrá til að hlaða upp eða taka mynd með myndavélinni.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Skipta út skrá",
    // "Remove this file"
    removeFileCaption: "Fjarlægðu þessa skrá",
    // "Yes"
    booleanCheckedLabel: "Já",
    // "No"
    booleanUncheckedLabel: "Nei",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Ertu viss um að þú viljir fjarlægja þessa skrá: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Ertu viss um að þú viljir fjarlægja allar skrár?",
    // "Question Title"
    questionTitlePatternText: "Spurningartitill",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Afturkalla",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Nota",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Sláðu inn til að leita...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Engin gögn til að birta",
    // [Auto-translated] "Loading..."
    loadingPage: "Hleðsla...",
    // [Auto-translated] "Loading..."
    loadingData: "Hleðsla...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Engar færslur ennþá.\nSmelltu á hnappinn hér að neðan til að bæta við nýrri færslu.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Engar færslur",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Nýtt spjald",
    // [Auto-translated] "More"
    more: "Fleiri",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "ÓKEI",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Allir valkostir eru valdir til röðunar",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Dragðu val hér til að raða þeim",
    // [Auto-translated] "OK"
    ok: "ÓKEI",
    // [Auto-translated] "Cancel"
    cancel: "Afturkalla",
    // "Create \"{0}\" item..."
    createCustomItem: 'Búðu til "{0}" hlut...',
    // [Auto-translated] "Table of contents"
    toc: "Efnisyfirlit",
    // [Auto-translated] "Progress bar"
    progressbar: "Framvindustika"
  };
  surveyCore.setupLocale({ localeCode: "is", strings: icelandicSurveyStrings, nativeName: "íslenska", englishName: "Icelandic" });

  var indonesianStrings = {
    // "Previous"
    pagePrevText: "Sebelumnya",
    // "Next"
    pageNextText: "Selanjutnya",
    // "Complete"
    completeText: "Selesai",
    // "Preview"
    previewText: "Pratinjau",
    // "Edit"
    editText: "Sunting",
    // "Start"
    startSurveyText: "Mulai",
    // [Auto-translated] "Please leave a comment"
    commentText: "Silakan tinggalkan komentar",
    // "Other (describe)"
    otherItemText: "Lainnya (jelaskan)",
    // "None"
    noneItemText: "Tidak Ada",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Menolak untuk menjawab",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Tidak tahu",
    // "Select All"
    selectAllItemText: "Pilih Semua",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Batalkan pilihan semua",
    // "Page {0} of {1}"
    progressText: "Halaman {0} dari {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} dari {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Rekam {0} dari {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Menjawab pertanyaan {0} / {1}",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Tidak ada halaman atau pertanyaan dalam survei.",
    // "Thank you for completing the survey"
    completingSurvey: "Terima kasih telah menyelesaikan survei!",
    // "You have already completed this survey."
    completingSurveyBefore: "Catatan kami menunjukkan bahwa Anda telah menyelesaikan survei ini.",
    // "Loading Survey..."
    loadingSurvey: "Memuat survei...",
    // "Select..."
    placeholder: "Pilih...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Pilih...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Pilih...",
    // "value"
    value: "nilai",
    // "Response required."
    requiredError: "Silahkan jawab pertanyaan berikut.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Silahkan jawab setidaknya satu petanyaan.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Silahkan jawab pertanyaan pada semua baris.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Setiap baris harus memiliki nilai unik.",
    // "The value should be numeric."
    numericError: "Nilai harus berupa angka.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Nilainya tidak boleh kurang dari {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Masukkan nilai yang cocok dengan ukuran langkah {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Nilai tidak boleh lebih besar dari {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Masukan tidak valid",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Nomor tidak diperbolehkan.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Lengkapi nilai agar sesuai dengan format yang diperlukan.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Silahkan masukkan setidaknya {0} karakter.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Silahkan masukkan kurang {0} karakter.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "PSilahkan masukkan lebih dari {0} dan kurang dari {1} karakter.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Silahkan isi setidaknya {0} baris.",
    // "Please select at least {0} option(s)."
    minSelectError: "Silahkan pilih setidaknya {0} varian.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Silahkan pilih tidak lebih dari {0} varian.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' harus sama dengan atau lebih dari {1} dan harus sama dengan atau kurang dari {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' harus sama dengan atau lebih dari {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' harus sama dengan atau kurang dari {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Silahkan masukkan e-mail yang benar.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Ekspresi: {0} harus mengembalikan 'benar'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Permintaan mengembalikan kesalahan '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Permintaan mengembalikan data kosong atau properti 'path' salah.",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Ukuran berkas tidak boleh melebihi {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Byte, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Jumlah maksimum file yang dapat Anda unggah adalah {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "File tidak dapat diunggah. Harap tambahkan handler untuk acara 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Silahkan masukkan nilai lainnnya.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Berkas Anda sedang diunggah. Silahkan tunggu beberapa saat atau coba lagi.",
    // "Loading..."
    loadingFile: "Memuat...",
    // "Choose file(s)..."
    chooseFile: "Pilih berkas...",
    // "No file selected"
    noFileChosen: "Tidak ada file yang dipilih",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Seret dan lepas file di sini atau klik tombol di bawah ini untuk memilih file yang akan diunggah.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Apakah Anda ingin menghapus catatan?",
    // "This value should be unique."
    keyDuplicationError: "Nilai harus unik.",
    // "Add Column"
    addColumn: "Tambah kolom",
    // "Add Row"
    addRow: "Tambah baris",
    // "Remove"
    removeRow: "Hapus",
    // [Auto-translated] "There are no rows."
    noRowsText: "Tidak ada baris.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Baris {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Tambah baru",
    // "Remove"
    removePanel: "Hapus",
    // [Auto-translated] "Show Details"
    showDetails: "Tampilkan Detail",
    // [Auto-translated] "Hide Details"
    hideDetails: "Sembunyikan Detail",
    // [Auto-translated] "item"
    choices_Item: "barang",
    // [Auto-translated] "Choice option"
    choices_Choice: "Opsi pilihan",
    // "Column"
    matrix_column: "Kolom",
    // "Row"
    matrix_row: "Baris",
    // [Auto-translated] "text"
    multipletext_itemname: "Teks",
    // "The results are being saved on the server..."
    savingData: "Hasil sedang disimpan pada server...",
    // "An error occurred and we could not save the results."
    savingDataError: "Kesalahan terjadi dan kami tidak dapat menyimpan hasil.",
    // "The results were saved successfully!"
    savingDataSuccess: "Hasil telah sukses disimpan!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Respons Anda melebihi 64KB. Harap kurangi ukuran file Anda dan coba lagi atau hubungi pemilik survei.",
    // "Try again"
    saveAgainButton: "Coba lagi",
    // "min"
    timerMin: "menit",
    // "sec"
    timerSec: "detik",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Anda telah menghabiskan {0} pada halaman ini dan {1} secara keseluruhan.",
    // "You have spent {0} on this page."
    timerSpentPage: "YAnda telah menghabiskan {0} pada halaman ini.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Anda telah menghabiskan {0} secara keseluruhan.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Anda telah menghabiskan {0} dari {1} pada halaman ini dan {2} dari {3} secara keseluruhan.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Anda telah menghabiskan {0} dari {1} pada halaman ini.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Anda telah menghabiskan {0} dari {1} secara keseluruhan.",
    // "Clear"
    clearCaption: "Bersihkan",
    // [Auto-translated] "Select"
    selectCaption: "Pilih",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Tanda tangan di sini",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Tidak ada tanda tangan",
    // "Select File"
    chooseFileCaption: "Pilih File",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Ambil Foto",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Klik tombol di bawah ini untuk mengambil foto menggunakan kamera.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Seret dan lepas atau pilih file untuk diunggah atau mengambil foto menggunakan kamera.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Ganti file",
    // "Remove this file"
    removeFileCaption: "Hapus berkas ini",
    // "Yes"
    booleanCheckedLabel: "Iya",
    // "No"
    booleanUncheckedLabel: "Tidak",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Anda yakin ingin menghapus file ini: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Anda yakin ingin menghapus semua file?",
    // "Question Title"
    questionTitlePatternText: "Judul pertanyaan",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Membatalkan",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Berlaku",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Ketik untuk mencari...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Tidak ada data untuk ditampilkan",
    // [Auto-translated] "Loading..."
    loadingPage: "Loading...",
    // [Auto-translated] "Loading..."
    loadingData: "Loading...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Belum ada entri.\nKlik tombol di bawah ini untuk menambahkan entri baru.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Tidak ada entri",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Panel Baru",
    // [Auto-translated] "More"
    more: "Lebih",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OKE",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Semua pilihan dipilih untuk peringkat",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Seret pilihan di sini untuk memberi peringkat",
    // [Auto-translated] "OK"
    ok: "OKE",
    // [Auto-translated] "Cancel"
    cancel: "Membatalkan",
    // "Create \"{0}\" item..."
    createCustomItem: 'Buat item "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Indeks",
    // [Auto-translated] "Progress bar"
    progressbar: "Bilah kemajuan"
  };
  surveyCore.setupLocale({ localeCode: "id", strings: indonesianStrings, nativeName: "bahasa indonesia", englishName: "Indonesian" });

  var italianSurveyStrings = {
    // "Previous"
    pagePrevText: "Precedente",
    // "Next"
    pageNextText: "Successivo",
    // "Complete"
    completeText: "Salva",
    // "Preview"
    previewText: "Anteprima",
    // "Edit"
    editText: "Modifica",
    // "Start"
    startSurveyText: "Inizio",
    // [Auto-translated] "Please leave a comment"
    commentText: "Si prega di lasciare un commento",
    // "Other (describe)"
    otherItemText: "Altro (descrivi)",
    // "None"
    noneItemText: "Nessuno",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Rifiuta di rispondere",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Non lo so",
    // "Select All"
    selectAllItemText: "Seleziona tutti",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Deseleziona tutto",
    // "Page {0} of {1}"
    progressText: "Pagina {0} di {1}",
    // "{0} of {1}"
    indexText: "{0} da {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Record di {0} di {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Pannello {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Risposte a {0}/{1} domande",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Non ci sono pagine o domande visibili nel questionario.",
    // "Thank you for completing the survey"
    completingSurvey: "Grazie per aver completato il questionario!",
    // "You have already completed this survey."
    completingSurveyBefore: "I nostri records mostrano che hai già completato questo questionario.",
    // "Loading Survey..."
    loadingSurvey: "Caricamento del questionario in corso...",
    // "Select..."
    placeholder: "Scegli...",
    // "Select..."
    ratingOptionsCaption: "Tocca qui per valutare...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Selezionare...",
    // "value"
    value: "valore",
    // "Response required."
    requiredError: "Campo obbligatorio",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Per Favore, rispondi ad almeno una domanda.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Completare tutte le righe",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Ogni riga deve avere un valore univoco.",
    // "The value should be numeric."
    numericError: "Il valore deve essere numerico",
    // "The value should not be less than {0}"
    minError: "Il valore non deve essere inferiore a {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Inserisci un valore che corrisponda alla dimensione del passo di {0}.",
    // "The value should not be greater than {0}"
    maxError: "Il valore non deve essere maggiore di {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Input invalido",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "I numeri non sono ammessi.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Si prega di completare il valore per adattarlo al formato richiesto.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Inserire almeno {0} caratteri",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Lunghezza massima consentita {0} caratteri",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Inserire una stringa con minimo {0} e massimo {1} caratteri",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Completare almeno {0} righe.",
    // "Please select at least {0} option(s)."
    minSelectError: "Selezionare almeno {0} varianti.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Selezionare massimo {0} varianti.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' deve essere uguale o superiore a {1} e uguale o inferiore a {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' deve essere uguale o superiore a {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' deve essere uguale o inferiore a {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Inserire indirizzo mail valido",
    // "The expression: {0} should return 'true'."
    invalidExpression: "L'espressione: {0} dovrebbe tornare 'vero'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "La richiesta ha risposto con un errore '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "La richiesta ha risposto null oppure il percorso non è corretto",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Il file non può eccedere {0}",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bytes, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Il numero massimo di file che puoi caricare è {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "I file non possono essere caricati. Aggiungere un gestore per l'evento 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Inserire il valore 'altro'",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "File in caricamento. Attendi alcuni secondi e riprova",
    // "Loading..."
    loadingFile: "Caricamento...",
    // "Choose file(s)..."
    chooseFile: "Selezionare file(s)...",
    // "No file selected"
    noFileChosen: "Nessun file selezionato",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Trascina un file qui o fai clic sul pulsante in basso per caricare il file.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Sei sicuro di voler elminare il record?",
    // "This value should be unique."
    keyDuplicationError: "Questo valore deve essere univoco.",
    // "Add Column"
    addColumn: "Aggiungi colonna",
    // "Add Row"
    addRow: "Aggiungi riga",
    // "Remove"
    removeRow: "Rimuovi riga",
    // "There are no rows."
    noRowsText: "Non ci sono righe.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Riga {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Aggiungi riga",
    // "Remove"
    removePanel: "Elimina",
    // [Auto-translated] "Show Details"
    showDetails: "Mostra dettagli",
    // [Auto-translated] "Hide Details"
    hideDetails: "Nascondi dettagli",
    // "item"
    choices_Item: "Elemento",
    // [Auto-translated] "Choice option"
    choices_Choice: "Opzione di scelta",
    // "Column"
    matrix_column: "Colonna",
    // "Row"
    matrix_row: "Riga",
    // "text"
    multipletext_itemname: "testo",
    // "The results are being saved on the server..."
    savingData: "Salvataggio dati sul server...",
    // "An error occurred and we could not save the results."
    savingDataError: "Si è verificato un errore e non è stato possibile salvare i risultati.",
    // "The results were saved successfully!"
    savingDataSuccess: "I risultati sono stati salvati con successo!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "La tua risposta supera i 64 KB. Riduci le dimensioni dei file e riprova o contatta il proprietario dell'indagine.",
    // "Try again"
    saveAgainButton: "Riprova",
    // [Auto-translated] "min"
    timerMin: "min",
    // [Auto-translated] "sec"
    timerSec: "SEC",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Hai impiegato {0} su questa pagina e {1} in totale.",
    // "You have spent {0} on this page."
    timerSpentPage: "Hai impiegato {0} su questa pagina.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Hai impiegato {0} in totale.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Hai impiegato {0} di {1} su questa pagina e {2} di {3} in totale.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Hai impiegato {0} di {1} su questa pagina.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Hai impiegato {0} di {1} in totale.",
    // "Clear"
    clearCaption: "Cancella",
    // [Auto-translated] "Select"
    selectCaption: "Selezionare",
    // "Sign here"
    signaturePlaceHolder: "Firmare qui",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Nessuna firma",
    // "Select File"
    chooseFileCaption: "Scegliere il file",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Scatta foto",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Fai clic sul pulsante qui sotto per scattare una foto utilizzando la fotocamera.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Trascina e rilascia o seleziona un file da caricare o scattare una foto utilizzando la fotocamera.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Sostituisci file",
    // "Remove this file"
    removeFileCaption: "Rimuovere questo file",
    // "Yes"
    booleanCheckedLabel: "Sì",
    // [Auto-translated] "No"
    booleanUncheckedLabel: "No",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Sei sicuro di voler elminare questo file: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Sei sicuro di voler elminare tutti i files?",
    // "Question Title"
    questionTitlePatternText: "Titolo della domanda",
    // "Cancel"
    modalCancelButtonText: "Annulla",
    // "Apply"
    modalApplyButtonText: "Applicare",
    // "Type to search..."
    filterStringPlaceholder: "Digita per cercare...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Nessun dato da visualizzare",
    // [Auto-translated] "Loading..."
    loadingPage: "Caricamento...",
    // [Auto-translated] "Loading..."
    loadingData: "Caricamento...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Non ci sono ancora voci.\nFai clic sul pulsante qui sotto per aggiungere una nuova voce.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Nessuna voce",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Nuovo pannello",
    // [Auto-translated] "More"
    more: "Più",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Tutte le scelte sono selezionate per la classificazione",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Trascina qui le scelte per classificarle",
    // [Auto-translated] "OK"
    ok: "OK",
    // [Auto-translated] "Cancel"
    cancel: "Annulla",
    // "Create \"{0}\" item..."
    createCustomItem: 'Crea un articolo "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Sommario",
    // [Auto-translated] "Progress bar"
    progressbar: "Indicatore"
  };
  surveyCore.setupLocale({ localeCode: "it", strings: italianSurveyStrings, nativeName: "italiano", englishName: "Italian" });

  var japaneseSurveyStrings = {
    // "Previous"
    pagePrevText: "前へ",
    // "Next"
    pageNextText: "次へ",
    // "Complete"
    completeText: "完了",
    // "Preview"
    previewText: "プレビュー",
    // "Edit"
    editText: "編集",
    // "Start"
    startSurveyText: "スタート",
    // [Auto-translated] "Please leave a comment"
    commentText: "コメントを残してください",
    // "Other (describe)"
    otherItemText: "その他（説明）",
    // "None"
    noneItemText: "なし",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "回答を拒否する",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "わからない",
    // "Select All"
    selectAllItemText: "すべて選択",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "すべて選択解除",
    // "Page {0} of {1}"
    progressText: "ページ{0}/{1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{1}の{0}",
    // "{0} of {1}"
    panelDynamicProgressText: "{1}の{0}を記録する",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "{0}/{1}問回答済",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "アンケートに表示可能な要素がありません。",
    // "Thank you for completing the survey"
    completingSurvey: "アンケートにご協力いただき、ありがとうございます。",
    // "You have already completed this survey."
    completingSurveyBefore: "このアンケートはすでに回答済みです。",
    // "Loading Survey..."
    loadingSurvey: "アンケートを読み込んでいます...",
    // "Select..."
    placeholder: "選択",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "選択。。。",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "選ぶ。。。",
    // "value"
    value: "値",
    // "Response required."
    requiredError: "回答が必要です",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "回答が必要です：少なくとも1つの質問に答えてください。",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "回答が必要です：すべての行の質問に答えてください。",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "各行に一意の値を入力してください。",
    // "The value should be numeric."
    numericError: "数字でご記入下さい",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "値は {0} 以上である必要があります",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "{0}のステップサイズに一致する値を入力してください。",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "値は {0} 以下である必要があります",
    // [Auto-translated] "Invalid input"
    invalidInputError: "無効な入力",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "数字は使用できません。",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "必要なフォーマットに合うように値を記入してください。",
    // "Please enter at least {0} character(s)."
    textMinLength: "少なくとも {0} 文字を入力してください。",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "{0} 文字以内で入力してください。",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "{0} 文字以上 {1} 文字以内で入力してください。",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "少なくとも {0} 行を入力してください。",
    // "Please select at least {0} option(s)."
    minSelectError: "少なくとも {0} 個のオプションを選択してください。",
    // "Please select no more than {0} option(s)."
    maxSelectError: "{0} 個以下の選択肢を選択してください。",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' は {1} 以上 {2} 以下である必要があります",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' は {1} 以上である必要があります",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' は {1} 以下である必要があります",
    // "Please enter a valid e-mail address."
    invalidEmail: "有効なメールアドレスを入力してください。",
    // "The expression: {0} should return 'true'."
    invalidExpression: "式: {0} は 'true' を返す必要があります。",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "リクエストはエラー '{0}' を返しました。{1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "リクエストが空のデータを返したか、'path' プロパティが正しくありません。",
    // "The file size should not exceed {0}."
    exceedMaxSize: "ファイルのサイズは{0}を超えてはいけません",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "バイト数、KB、MB、GB、TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "アップロードできるファイルの最大数は{0}です。",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "ファイルはアップロードできません。「onUploadFiles」イベントのハンドラーを追加してください。",
    // "Response required: enter another value."
    otherRequiredError: "回答が必要です：他の値を入力してください。",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "ファイルをアップロード中です。しばらくしてから再度お試し下さい",
    // "Loading..."
    loadingFile: "読み込み中",
    // "Choose file(s)..."
    chooseFile: "ファイルを選択",
    // "No file selected"
    noFileChosen: "選択されたファイルはありません",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "ここにファイルをドラッグアンドドロップするか、下のボタンをクリックしてアップロードするファイルを選択します。",
    // "Are you sure you want to delete this record?"
    confirmDelete: "レコードを削除しますか？",
    // "This value should be unique."
    keyDuplicationError: "この値は一意でなければなりません。",
    // "Add Column"
    addColumn: "列の追加",
    // "Add Row"
    addRow: "追加行",
    // "Remove"
    removeRow: "削除",
    // [Auto-translated] "There are no rows."
    noRowsText: "行がありません。",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "行 {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "新規追加",
    // "Remove"
    removePanel: "削除",
    // [Auto-translated] "Show Details"
    showDetails: "詳細を表示",
    // [Auto-translated] "Hide Details"
    hideDetails: "詳細を非表示",
    // "item"
    choices_Item: "項目",
    // [Auto-translated] "Choice option"
    choices_Choice: "選択オプション",
    // "Column"
    matrix_column: "列",
    // "Row"
    matrix_row: "行",
    // [Auto-translated] "text"
    multipletext_itemname: "テキスト",
    // "The results are being saved on the server..."
    savingData: "結果を保存中...。",
    // "An error occurred and we could not save the results."
    savingDataError: "エラーが発生し、結果を保存できませんでした。",
    // "The results were saved successfully!"
    savingDataSuccess: "結果が正常に保存されました",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "回答が64KBを超えています。ファイルのサイズを小さくして、もう一度やり直すか、アンケートの所有者にお問い合わせください。",
    // "Try again"
    saveAgainButton: "もう一度試してみてください。",
    // "min"
    timerMin: "僅少",
    // "sec"
    timerSec: "セック",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "あなたはこのページに{0}を費やし、合計で{1}を費やしました。",
    // "You have spent {0} on this page."
    timerSpentPage: "あなたはこのページに{0}を費やしました。",
    // "You have spent {0} in total."
    timerSpentSurvey: "合計で{0}を使ったことになります。",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "このページに{1}のうち{0}を費やし、{3}のうち{2}を合計で費やしました。",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "このページで{1}の{0}を使ったことがあります。",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "合計で{1}の{0}を使ったことがあります。",
    // "Clear"
    clearCaption: "空白",
    // [Auto-translated] "Select"
    selectCaption: "選ぶ",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "ここに署名",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "署名なし",
    // "Select File"
    chooseFileCaption: "ファイルを選択",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "写真を撮る",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "下のボタンをクリックしてカメラで写真を撮影してください。",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "ファイルをドラッグ＆ドロップまたは選択してアップロードするか、カメラで写真を撮影してください。",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "ファイルを置換",
    // "Remove this file"
    removeFileCaption: "このファイルを削除",
    // "Yes"
    booleanCheckedLabel: "はい",
    // "No"
    booleanUncheckedLabel: "いいえ",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "このファイルを削除してもよろしいですか？{0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "すべてのファイルを削除してもよろしいですか？",
    // "Question Title"
    questionTitlePatternText: "質問のタイトル",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "キャンセル",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "申し込む",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "検索するタイプ...",
    // [Auto-translated] "No data to display"
    emptyMessage: "表示するデータがありません",
    // [Auto-translated] "Loading..."
    loadingPage: "積載。。。",
    // [Auto-translated] "Loading..."
    loadingData: "積載。。。",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "まだエントリーはありません。\n下のボタンをクリックして、新しいエントリを追加します。",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "エントリなし",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "新しいパネル",
    // [Auto-translated] "More"
    more: "続きを見る",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "わかりました",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "すべての選択肢がランキング用に選択されます",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "選択肢をここにドラッグしてランク付けします",
    // [Auto-translated] "OK"
    ok: "わかりました",
    // [Auto-translated] "Cancel"
    cancel: "キャンセル",
    // "Create \"{0}\" item..."
    createCustomItem: "「{0}」アイテムを作成...",
    // [Auto-translated] "Table of contents"
    toc: "目次",
    // [Auto-translated] "Progress bar"
    progressbar: "進行状況バー"
  };
  surveyCore.setupLocale({ localeCode: "ja", strings: japaneseSurveyStrings, nativeName: "日本語", englishName: "Japanese" });

  var kazakhStrings = {
    // "Previous"
    pagePrevText: "Артқа",
    // "Next"
    pageNextText: "Келесі",
    // "Complete"
    completeText: "Дайын",
    // "Preview"
    previewText: "Алдын ала қарау",
    // "Edit"
    editText: "Редакциялау",
    // "Start"
    startSurveyText: "Бастау",
    // [Auto-translated] "Please leave a comment"
    commentText: "Түсініктемені қалдыруыңызды сұраймын",
    // "Other (describe)"
    otherItemText: "Басқа (өтінеміз, жазыңыз)",
    // "None"
    noneItemText: "Жоқ",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Жауап беруден бас тарту",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Білмеймін",
    // "Select All"
    selectAllItemText: "Барлығын таңдау",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Барлығын жоққа шығару",
    // "Page {0} of {1}"
    progressText: "{0} ден {1} бет ",
    // [Auto-translated] "{0} of {1}"
    indexText: "{1} {0}",
    // "{0} of {1}"
    panelDynamicProgressText: "{0} ден {1} жазба",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Панель {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "{0}/{1} сұрақтарға жауап",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Бір де бір сұрақ жоқ.",
    // "Thank you for completing the survey"
    completingSurvey: "Сауалнаманы толтырғаныңыз үшін рахмет!",
    // "You have already completed this survey."
    completingSurveyBefore: "Сіз бұл сауалнаманы өтіп қойдыңыз.",
    // "Loading Survey..."
    loadingSurvey: "Серверден жүктеу...",
    // "Select..."
    placeholder: "Таңдау...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Таңдау...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Таңдау...",
    // "value"
    value: "мәні",
    // "Response required."
    requiredError: "Өтінеміз, сұраққа жауап беріңіз.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Өтінеміз, кем дегенде бір сұраққа жауап беріңіз.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Өтінеміз, әрбір жолдың сұрағаны жауап беріңіз.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Әр жолдың бірегей мәні болуы тиіс.",
    // "The value should be numeric."
    numericError: "Жауап сан түрінде болуы керек.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Мәні {0} кем болмауы тиіс",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Қадам өлшеміне сәйкес келетін мәнді {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Мән {0} артық болмауы тиіс",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Жарамсыз енгізу",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Нөмірлерді беруге жол берілмейді.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Қажетті форматқа сәйкес мәнді толтырыңыз.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Өтінеміз, {0} ден көп таңба енгізіңіз.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Өтінеміз, {0} ден аз таңба енгізіңіз.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Өтінеміз, {0} аз және {1} көп таңба енгізіңіз.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Өтінеміз, {0} ден кем емес жол толтырыңыз.",
    // "Please select at least {0} option(s)."
    minSelectError: "Өтінеміз, тым болмаса {0} нұсқа таңдаңыз.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Өтінеміз, {0} нұсқадан көп таңдамаңыз.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' {1} ден кем емес және {2} ден көп емес болу керек",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' {1} ден кем емес болу керек",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' {1} ден көп емес болу керек",
    // "Please enter a valid e-mail address."
    invalidEmail: "Өтінеміз, жарамды электрондық поштаңызды енгізіңіз.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "{0} өрнегі  'true' қайтару керек.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Сұратым қателікті қайтарды'{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Сұратымға жауап бос келді немесе 'path' қасиеті қате көрсетілген ",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Файлдың мөлшері {0} аспау керек.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Байттар, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Жүктей алатын файлдардың ең көп саны {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Файлдарды кері жүктеу мүмкін емес. 'OnUploadFiles' оқиғасына өңдеушіні қосуыңызды сұраймыз.",
    // "Response required: enter another value."
    otherRequiredError: "Өтінеміз, “Басқа” жолына деректі енгізіңіз",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Сіздің файлыңыз жүктеліп жатыр. Бірнеше секунд тосып, қайтадан байқап көріңіз.",
    // "Loading..."
    loadingFile: "Жүктеу...",
    // "Choose file(s)..."
    chooseFile: "Файлдарды таңдаңыз...",
    // "No file selected"
    noFileChosen: "Файл таңдалынбады",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Файлды осы жерге апарып тастаңыз немесе кері жүктеу үшін файлды таңдау үшін төмендегі батырманың астын басыңыз.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Сіз жазбаны жоятыныңызға сенімдісіз бе?",
    // "This value should be unique."
    keyDuplicationError: "Бұл мән бірегей болу керек.",
    // "Add Column"
    addColumn: "Бағана қосу",
    // "Add Row"
    addRow: "Жолды қосу",
    // "Remove"
    removeRow: "Өшіру",
    // [Auto-translated] "There are no rows."
    noRowsText: "Қатарлар жоқ.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Жол {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Жаңа қосу",
    // "Remove"
    removePanel: "Өшіру",
    // [Auto-translated] "Show Details"
    showDetails: "Егжей-тегжейін көрсету",
    // [Auto-translated] "Hide Details"
    hideDetails: "Егжей- тегжейін жасы",
    // "item"
    choices_Item: "Нұсқа",
    // [Auto-translated] "Choice option"
    choices_Choice: "Таңдау параметрі",
    // "Column"
    matrix_column: "Бағана",
    // "Row"
    matrix_row: "Жол",
    // [Auto-translated] "text"
    multipletext_itemname: "мәтін",
    // "The results are being saved on the server..."
    savingData: "Нәтижелер серверде сақталады...",
    // "An error occurred and we could not save the results."
    savingDataError: "Қателік туындады, нәтиже сақталынбады.",
    // "The results were saved successfully!"
    savingDataSuccess: "Нәтиже ойдағыдай сақталды!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Сіздің жауабыңыз 64КБ-тан асады. Файлдың өлшемін азайтып, қайталап көріңіз немесе сауалнама иесіне хабарласыңыз.",
    // "Try again"
    saveAgainButton: "Қайтадан байқап көру",
    // "min"
    timerMin: "мин",
    // "sec"
    timerSec: "сек",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Сіз бұл бетте {0} кетірдіңіз және барлығы {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "Сіз бұл бетте {0} кетірдіңіз.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Сіз сауалнама кезінде {0} кетірдіңіз.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Сіз бұл бетте {0} ден {1} кетірдіңіз және {2} ден {3} бүкіл сауалнама үшін.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Сіз бұл бетте {0} ден {1} кетірдіңіз.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Сіз бүкіл сауалнама үшін {0} ден {1} кетірдіңіз ",
    // "Clear"
    clearCaption: "Тазалау",
    // [Auto-translated] "Select"
    selectCaption: "Таңдау",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Осында кіру",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Қолдың No",
    // "Select File"
    chooseFileCaption: "Файл таңдаңыз",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Фотосуретке түсу",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Камераны пайдаланып суретке түсу үшін төмендегі түймені басыңыз.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Фотоаппаратты пайдаланып кері жүктеу немесе суретке түсіру үшін файлды апарып тастаыңыз немесе таңдаңыз.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Файлды ауыстыру",
    // "Remove this file"
    removeFileCaption: "Файлды жойыңыз",
    // "Yes"
    booleanCheckedLabel: "Иә",
    // "No"
    booleanUncheckedLabel: "Жоқ",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Сіз бұл файлды жоятыныңызға сенімдісіз бе: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Сіз барлық файлдарды жоятыныңызға сенімдісіз бе?",
    // "Question Title"
    questionTitlePatternText: "Сұрақтың атауы",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Болдырмау",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Қолдану",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Іздеу үшін теріңіз...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Көрсетілетін деректер жоқ",
    // [Auto-translated] "Loading..."
    loadingPage: "Жүктеу...",
    // [Auto-translated] "Loading..."
    loadingData: "Жүктеу...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Әзірге жазбалар жоқ.\nЖаңа жазбаны қосу үшін төмендегі түймешігіңді басыңыз.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Жазбалар жоқ",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Жаңа панель",
    // [Auto-translated] "More"
    more: "Қосымша",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "ЖАҚСЫ",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Барлық таңдаулар рейтингке таңдалады",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Таңдаулар санын осында апарыңыз",
    // [Auto-translated] "OK"
    ok: "ЖАҚСЫ",
    // [Auto-translated] "Cancel"
    cancel: "Болдырмау",
    // "Create \"{0}\" item..."
    createCustomItem: "«{0}» элементін жасау...",
    // [Auto-translated] "Table of contents"
    toc: "Мазмұн кестесі",
    // [Auto-translated] "Progress bar"
    progressbar: "Прогресс тақтасы"
  };
  surveyCore.setupLocale({ localeCode: "kk", strings: kazakhStrings, nativeName: "kazakh", englishName: "Kazakh" });

  var koreanStrings = {
    // "Previous"
    pagePrevText: "이전",
    // "Next"
    pageNextText: "다음",
    // "Complete"
    completeText: "완료",
    // "Preview"
    previewText: "미리보기",
    // "Edit"
    editText: "수정",
    // "Start"
    startSurveyText: "시작",
    // [Auto-translated] "Please leave a comment"
    commentText: "코멘트를 남겨주세요",
    // "Other (describe)"
    otherItemText: "기타 (설명)",
    // "None"
    noneItemText: "없음",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "대답 거부",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "모르다",
    // "Select All"
    selectAllItemText: "모두 선택",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "모두 선택 해제",
    // "Page {0} of {1}"
    progressText: "페이지 {1} / {0}",
    // "{0} of {1}"
    indexText: "{0} / {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "{0} / {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "패널 {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "{0} / {1} 개의 질문에 답변함",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "설문지에 보여지는 페이지나 질문이 없습니다.",
    // "Thank you for completing the survey"
    completingSurvey: "설문조사를 완료해 주셔서 감사합니다.",
    // "You have already completed this survey."
    completingSurveyBefore: "기록에 따르면 이미 설문 조사를 마치셨습니다.",
    // "Loading Survey..."
    loadingSurvey: "설문조사가 로드중입니다...",
    // "Select..."
    placeholder: "선택...",
    // "Select..."
    ratingOptionsCaption: "등급을 매기려면 누르세요.",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "고르다...",
    // "value"
    value: "값",
    // "Response required."
    requiredError: "질문에 답하시오.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "하나 이상의 질문에 답하십시오.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "모든 행에 있는 질문에 답하십시오.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "각 행에는 고유한 값이 있어야 합니다.",
    // "The value should be numeric."
    numericError: "값은 숫자여야 합니다.",
    // "The value should not be less than {0}"
    minError: "값은 {0}보다 작으면 안됩니다.",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "{0}의 스텝 크기와 일치하는 값을 입력하십시오.",
    // "The value should not be greater than {0}"
    maxError: "값은 {0}보다 클 수 없습니다.",
    // [Auto-translated] "Invalid input"
    invalidInputError: "잘못된 입력",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "숫자는 허용되지 않습니다.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "필요한 형식에 맞게 값을 작성해 주세요.",
    // "Please enter at least {0} character(s)."
    textMinLength: "답변의 길이는 최소 {0}자여야 입니다.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "답변의 길이는 {0}자를 초과 할 수 없습니다.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "답변의 길이는 {0} - {1}자 사이여야 합니다.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "최소 {0}개의 행을 채우십시오",
    // "Please select at least {0} option(s)."
    minSelectError: "최소 {0}개의 변수를 선택하십시오.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "최대 {0}개의 변수를 선택하십시오.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}'은 {1}보다 크거나 같고 {2}보다 작거나 같아야합니다.",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}'은 {1}보다 크거나 같아야합니다.",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}'은 {1}보다 작거나 같아야합니다.",
    // "Please enter a valid e-mail address."
    invalidEmail: "올바른 이메일 주소를 입력하십시오.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "표현식: {0}은 '참'이어야 합니다.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "'{0}'으로 잘못된 요청입니다. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "비어있는 데이터를 요청했거나 잘못된 속성의 경로입니다.",
    // "The file size should not exceed {0}."
    exceedMaxSize: "파일 크기가 {0}을 초과 할 수 없습니다.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "바이트, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "업로드할 수 있는 최대 파일 수는 {0}입니다.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "파일을 업로드할 수 없습니다. 'onUploadFiles'이벤트에 대한 핸들러를 추가하십시오.",
    // "Response required: enter another value."
    otherRequiredError: "다른 질문을 작성하십시오.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "파일 업로드 중입니다. 잠시 후 다시 시도하십시오.",
    // "Loading..."
    loadingFile: "로드 중...",
    // "Choose file(s)..."
    chooseFile: "파일 선택...",
    // "No file selected"
    noFileChosen: "선택된 파일이 없습니다.",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "파일을 여기에 놓거나 아래 버튼을 클릭하여 파일을 불러오세요.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "기록을 삭제하시겠습니까?",
    // "This value should be unique."
    keyDuplicationError: " 이 값은 고유해야합니다.",
    // "Add Column"
    addColumn: "열 추가",
    // "Add Row"
    addRow: "행 추가",
    // "Remove"
    removeRow: "제거",
    // "There are no rows."
    noRowsText: "행이 없습니다.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "행 {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "추가",
    // "Remove"
    removePanel: "제거",
    // [Auto-translated] "Show Details"
    showDetails: "세부 정보 표시",
    // [Auto-translated] "Hide Details"
    hideDetails: "세부 정보 숨기기",
    // "item"
    choices_Item: "항목",
    // [Auto-translated] "Choice option"
    choices_Choice: "선택 옵션",
    // "Column"
    matrix_column: "열",
    // "Row"
    matrix_row: "행",
    // "text"
    multipletext_itemname: "텍스트",
    // "The results are being saved on the server..."
    savingData: "결과가 서버에 저장 중입니다...",
    // "An error occurred and we could not save the results."
    savingDataError: "오류가 발생하여 결과를 저장할 수 없습니다.",
    // "The results were saved successfully!"
    savingDataSuccess: "결과가 성공적으로 저장되었습니다.",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "응답이 64KB를 초과합니다. 파일 크기를 줄이고 다시 시도하거나 설문조사 소유자에게 문의하십시오.",
    // "Try again"
    saveAgainButton: "다시 시도하세요.",
    // "min"
    timerMin: "분",
    // "sec"
    timerSec: "초",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "현재 페이지에서 {0}을 소요해 총 {1}이 걸렸습니다.",
    // "You have spent {0} on this page."
    timerSpentPage: "현재 페이지에서 {0}이 걸렸습니다.",
    // "You have spent {0} in total."
    timerSpentSurvey: "총 {0}이 걸렸습니다.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "현재 페이지에서 {0}/{1}을 소요해 총 {2}/{3}이 걸렸습니다.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "현재 페이지에서 {0}/{1}이 걸렸습니다.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "총 {0}/{1}이 걸렸습니다.",
    // "Clear"
    clearCaption: "지우기",
    // [Auto-translated] "Select"
    selectCaption: "고르다",
    // "Sign here"
    signaturePlaceHolder: "서명하세요.",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "서명 없음",
    // "Select File"
    chooseFileCaption: "파일 선택",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "사진 찍기",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "아래 버튼을 클릭하여 카메라로 사진을 찍습니다.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "업로드할 파일을 드래그 앤 드롭하거나 선택하거나 카메라를 사용하여 사진을 찍습니다.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "파일 바꾸기",
    // "Remove this file"
    removeFileCaption: "파일 제거",
    // "Yes"
    booleanCheckedLabel: "예",
    // "No"
    booleanUncheckedLabel: "아니오",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "{0} 파일을 제거 하시겠습니까?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "모든 파일을 제거 하시겠습니까?",
    // "Question Title"
    questionTitlePatternText: "질문 제목",
    // "Cancel"
    modalCancelButtonText: "취소",
    // "Apply"
    modalApplyButtonText: "적용",
    // "Type to search..."
    filterStringPlaceholder: "검색 유형...",
    // [Auto-translated] "No data to display"
    emptyMessage: "표시할 데이터가 없습니다.",
    // [Auto-translated] "Loading..."
    loadingPage: "로드...",
    // [Auto-translated] "Loading..."
    loadingData: "로드...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "아직 항목이 없습니다.\n새 항목을 추가하려면 아래 버튼을 클릭하세요.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "항목 없음",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "새 패널",
    // "More"
    more: "더보기",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "그래",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "모든 선택 항목이 순위를 위해 선택됩니다.",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "선택 항목을 여기로 드래그하여 순위를 매깁니다",
    // [Auto-translated] "OK"
    ok: "그래",
    // [Auto-translated] "Cancel"
    cancel: "취소",
    // "Create \"{0}\" item..."
    createCustomItem: '"{0}" 항목 만들기...',
    // [Auto-translated] "Table of contents"
    toc: "목차",
    // [Auto-translated] "Progress bar"
    progressbar: "진행률 표시줄"
  };
  surveyCore.setupLocale({ localeCode: "ko", strings: koreanStrings, nativeName: "한국어", englishName: "Korean" });

  var latvianSurveyStrings = {
    // "Previous"
    pagePrevText: "Iepriekšēja lapa",
    // "Next"
    pageNextText: "Nākamā lapa",
    // "Complete"
    completeText: "Iesniegt",
    // "Preview"
    previewText: "Priekšskatījums",
    // "Edit"
    editText: "Rediģēt",
    // "Start"
    startSurveyText: "Sākt",
    // [Auto-translated] "Please leave a comment"
    commentText: "Lūdzu, atstājiet komentāru",
    // "Other (describe)"
    otherItemText: "Cits (lūdzu, aprakstiet!)",
    // "None"
    noneItemText: "Nav",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Atteikties atbildēt",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Es nezinu",
    // "Select All"
    selectAllItemText: "Izvēlēties visus",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Noņemt atlasi visiem",
    // "Page {0} of {1}"
    progressText: "{0}. lapa no {1}",
    // "{0} of {1}"
    indexText: "{0} no {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Ierakstīt {0} no {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panelis {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Atbildēts uz {0} / {1} jautājumiem",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Nav neviena jautājuma.",
    // "Thank you for completing the survey"
    completingSurvey: "Pateicamies Jums par anketas aizpildīšanu!",
    // "You have already completed this survey."
    completingSurveyBefore: "Mūsu ieraksti liecina, ka Jūs jau esat aizpildījis šo aptauju.",
    // "Loading Survey..."
    loadingSurvey: "Ielāde no servera...",
    // "Select..."
    placeholder: "Izvēlēties...",
    // "Select..."
    ratingOptionsCaption: "Nospiediet šeit, lai novērtētu...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Atlasiet...",
    // [Auto-translated] "value"
    value: "Vērtība",
    // "Response required."
    requiredError: "Lūdzu, atbildiet uz jautājumu!",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Lūdzu, atbildiet uz vismaz vienu jautājumu.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Lūdzu, atbildiet uz jautājumiem visās rindās.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Katrai rindai jābūt unikālai vērtībai.",
    // "The value should be numeric."
    numericError: "Atbildei ir jābūt skaitlim.",
    // "The value should not be less than {0}"
    minError: "Vērtība nedrīkst būt mazāka par {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Lūdzu, ievadiet vērtību, kas atbilst {0} soļa lielumam.",
    // "The value should not be greater than {0}"
    maxError: "Vērtība nedrīkst būt lielāka par {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Nederīga ievade",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Numuri nav atļauti.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Lūdzu, aizpildiet vērtību, lai tā atbilstu vajadzīgajam formātam.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Lūdzu, ievadiet vismaz {0} simbolus.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Lūdzu, ievadiet mazāk nekā {0} rakstzīmes.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Lūdzu, ievadiet vairāk nekā {0} rakstzīmes un mazāk nekā {1} rakstzīmes.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Lūdzu, aizpildiet vismaz {0} rindas.",
    // "Please select at least {0} option(s)."
    minSelectError: "Lūdzu, izvēlieties vismaz {0} variantu.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Lūdzu, izvēlieties ne vairak par {0} variantiem.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' jābūt vienādam vai lielākam nekā {1}, un vienādam vai mazākam, nekā {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' jābūt vienādam vai lielākam {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' jābūt vienādam vai lielākam {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Lūdzu, ievadiet pareizu e-pasta adresi!",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Izteicienam: {0} jāatgriež “true”.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Pieprasījumā tika atgriezta kļūda “{0}”. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Pieprasījums atgrieza tukšus datus vai rekvizīts “path” ir nepareizs",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Faila lielums nedrīkst pārsniegt {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Baiti, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Maksimālais augšupielādējamo failu skaits ir {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: 'Failus nevar augšupielādēt. Lūdzu, pievienojiet apdarinātāju notikumam "onUploadFiles".',
    // "Response required: enter another value."
    otherRequiredError: "Lūdzu, ievadiet datus laukā 'Cits'",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Jūsu fails tiek augšupielādēts. Lūdzu, uzgaidiet dažas sekundes un mēģiniet vēlreiz.",
    // "Loading..."
    loadingFile: "Notiek ielāde ...",
    // "Choose file(s)..."
    chooseFile: "Izvēlieties failus ...",
    // "No file selected"
    noFileChosen: "Nav izvēlēts neviens fails",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Lai pievienotu, ievelciet failu šeit vai arī klikšķiniet uz zemāk redzamās pogas",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Vai vēlaties izdzēst ierakstu?",
    // "This value should be unique."
    keyDuplicationError: "Šai vērtībai jābūt unikālai.",
    // "Add Column"
    addColumn: "Pievienot kolonnu",
    // "Add Row"
    addRow: "Pievienot rindu",
    // "Remove"
    removeRow: "Noņemt",
    // "There are no rows."
    noRowsText: "Nav rindu.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Rinda {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Pievieno jaunu",
    // "Remove"
    removePanel: "Noņemt",
    // [Auto-translated] "Show Details"
    showDetails: "Rādīt detalizētu informāciju",
    // [Auto-translated] "Hide Details"
    hideDetails: "Slēpt detaļas",
    // "item"
    choices_Item: "vienums",
    // [Auto-translated] "Choice option"
    choices_Choice: "Izvēles iespēja",
    // "Column"
    matrix_column: "Sleja",
    // "Row"
    matrix_row: "Rinda",
    // "text"
    multipletext_itemname: "teksts",
    // "The results are being saved on the server..."
    savingData: "Rezultāti tiek saglabāti serverī ...",
    // "An error occurred and we could not save the results."
    savingDataError: "Radās kļūda, un mēs nevarējām saglabāt rezultātus.",
    // "The results were saved successfully!"
    savingDataSuccess: "Rezultāti tika veiksmīgi saglabāti!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Jūsu atbilde pārsniedz 64 KB. Lūdzu, samaziniet faila(-u) lielumu un mēģiniet vēlreiz vai sazinieties ar aptaujas īpašnieku.",
    // "Try again"
    saveAgainButton: "Mēģiniet vēlreiz",
    // [Auto-translated] "min"
    timerMin: "min",
    // "sec"
    timerSec: "sek",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Šajā lapā esat iztērējis {0} un kopā {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "Šajā lapā esat iztērējis {0}.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Kopā esat iztērējis {0}.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Šajā lapā esat iztērējis {0} no {1} un kopā {2} no {3}.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Šajā lapā esat iztērējis {0} no {1}.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Kopā esat iztērējis {0} no {1}.",
    // "Clear"
    clearCaption: "Iztīrīt",
    // [Auto-translated] "Select"
    selectCaption: "Atlasiet",
    // "Sign here"
    signaturePlaceHolder: "Parakstieties šeit",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Nav paraksta",
    // "Select File"
    chooseFileCaption: "Izvēlēties failu",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Uzņemt fotoattēlu",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Noklikšķiniet uz pogas zemāk, lai uzņemtu fotoattēlu, izmantojot kameru.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Velciet un nometiet vai atlasiet failu, ko augšupielādēt vai uzņemt fotoattēlu, izmantojot kameru.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Aizstāt failu",
    // "Remove this file"
    removeFileCaption: "Noņemiet šo failu",
    // "Yes"
    booleanCheckedLabel: "Jā",
    // "No"
    booleanUncheckedLabel: "Nē",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Vai tiešām vēlaties noņemt šo failu: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Vai tiešām vēlaties noņemt visus failus?",
    // "Question Title"
    questionTitlePatternText: "Jautājuma nosaukums",
    // "Cancel"
    modalCancelButtonText: "Atcelt",
    // "Apply"
    modalApplyButtonText: "Pielietot",
    // "Type to search..."
    filterStringPlaceholder: "Ierakstiet, lai meklētu...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Nav datu, ko rādīt",
    // [Auto-translated] "Loading..."
    loadingPage: "Iekraušanas...",
    // [Auto-translated] "Loading..."
    loadingData: "Iekraušanas...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Vēl nav neviena ieraksta.\nNoklikšķiniet uz zemāk esošās pogas, lai pievienotu jaunu ierakstu.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Nav ierakstu",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Jauns panelis",
    // [Auto-translated] "More"
    more: "Vairāk",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "LABI",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Visas izvēles tiek atlasītas ranžēšanai",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Velciet izvēles šeit, lai tās sakārtotu",
    // [Auto-translated] "OK"
    ok: "LABI",
    // [Auto-translated] "Cancel"
    cancel: "Atcelt",
    // "Create \"{0}\" item..."
    createCustomItem: 'Izveidot vienumu "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Satura rādītājs",
    // [Auto-translated] "Progress bar"
    progressbar: "Progresa josla"
  };
  surveyCore.setupLocale({ localeCode: "lv", strings: latvianSurveyStrings, nativeName: "latviešu", englishName: "Latvian" });

  var lithuaniaSurveyStrings = {
    // "Previous"
    pagePrevText: "Atgal",
    // "Next"
    pageNextText: "Toliau",
    // "Complete"
    completeText: "Baigti",
    // "Preview"
    previewText: "Peržiūra",
    // "Edit"
    editText: "Redaguoti",
    // "Start"
    startSurveyText: "Pradėti",
    // [Auto-translated] "Please leave a comment"
    commentText: "Prašome palikti komentarą",
    // "Other (describe)"
    otherItemText: "Kita (įvesti)",
    // "None"
    noneItemText: "Nėra",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Atsisakyti atsakyti",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Nežinau",
    // "Select All"
    selectAllItemText: "Pasirinkti visus",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Panaikinkite visų žymėjimą",
    // "Page {0} of {1}"
    progressText: "Puslapis {0} iš {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{1} {0}",
    // "{0} of {1}"
    panelDynamicProgressText: "Įrašyti {0} iš {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Skydelis {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Atsakė į {0} / {1} klausimus",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Apklausoje nėra matomo puslapio ar klausimo.",
    // "Thank you for completing the survey"
    completingSurvey: "Dėkojame už dalyvavimą apklausoje!",
    // "You have already completed this survey."
    completingSurveyBefore: "Mūsų įrašai rodo, kad jau atlikote šią apklausą.",
    // "Loading Survey..."
    loadingSurvey: "Prašome palaukti...",
    // "Select..."
    placeholder: "Pasirinkti...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Žymėti...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Žymėti...",
    // "value"
    value: "reikšmė",
    // "Response required."
    requiredError: "Būtina atsakyti į šį klausimą.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Būtina atsakyti bent į vieną klausimą.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Prašome atsakyti į klausimus visose eilutėse.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Kiekviena eilutė turi turėti unikalią reikšmę.",
    // "The value should be numeric."
    numericError: "Turi būti skaičiai.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Vertė neturėtų būti mažesnė nei {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Įveskite reikšmę, atitinkančią {0} žingsnio dydį.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Vertė neturėtų būti didesnė nei {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Neleistina įvestis",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Numeriai neleidžiami.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Užpildykite reikšmę, kad ji atitiktų reikiamą formatą.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Prašome suvesti bent {0} simbolius.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Prašome suvesti mažiau nei {0} simbolių.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Prašome suvesti daugiau nei {0} ir mažiau nei {1} simbolių.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Prašome suvesti ne mažiau nei {0} eilučių.",
    // "Please select at least {0} option(s)."
    minSelectError: "Prašome pasirinkti bent {0} variantų.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Pasirinkite ne daugiau kaip {0} variantus.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' turi būti lygus arba didesnis nei {1} ir lygus arba mažesnis nei {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' turėtų būti lygus arba didesnis nei {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' turėtų būti lygus ar mažesnis už {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Prašome įvesti galiojantį elektroninio pašto adresą.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Reikšmė: {0} turi grąžinti 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Užklausa grąžino klaidą'{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Užklausa grąžino tuščius duomenis arba 'path' savybė yra neteisinga",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Failo dydis neturi viršyti {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Baitai, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Maksimalus failų, kuriuos galite įkelti, skaičius yra {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: 'Failų įkelti negalima. Pridėkite įvykio "onUploadFiles" tvarkytoją.',
    // "Response required: enter another value."
    otherRequiredError: "Įveskite kitą reikšmę.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Jūsų failas yra keliamas. Palaukite keletą sekundžių ir bandykite dar kartą.",
    // "Loading..."
    loadingFile: "Prašome palaukti...",
    // "Choose file(s)..."
    chooseFile: "Pasirinkti failą(us)...",
    // "No file selected"
    noFileChosen: "Nepasirinktas joks failas",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Nuvilkite failą čia arba spustelėkite žemiau esantį mygtuką, kad pasirinktumėte failą, kurį norite įkelti.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Ar norite ištrinti įrašą?",
    // "This value should be unique."
    keyDuplicationError: "Ši reikšmė turėtų būti unikali.",
    // "Add Column"
    addColumn: "Pridėti stulpelį",
    // "Add Row"
    addRow: "Pridėti eilutę",
    // "Remove"
    removeRow: "Ištrinti",
    // [Auto-translated] "There are no rows."
    noRowsText: "Eilių nėra.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Eilutė {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{eilutėPavadinimas}",
    // "Add new"
    addPanel: "Pridėti naują",
    // "Remove"
    removePanel: "Ištrinti",
    // [Auto-translated] "Show Details"
    showDetails: "Rodyti išsamią informaciją",
    // [Auto-translated] "Hide Details"
    hideDetails: "Slėpti išsamią informaciją",
    // "item"
    choices_Item: "elementas",
    // [Auto-translated] "Choice option"
    choices_Choice: "Pasirinkimo galimybė",
    // "Column"
    matrix_column: "Stulpelis",
    // "Row"
    matrix_row: "Eilutė",
    // [Auto-translated] "text"
    multipletext_itemname: "SMS žinutė",
    // "The results are being saved on the server..."
    savingData: "Rezultatai saugomi serveryje...",
    // "An error occurred and we could not save the results."
    savingDataError: "Įvyko klaida ir mes negalėjome išsaugoti rezultatų.",
    // "The results were saved successfully!"
    savingDataSuccess: "Rezultatai buvo išsaugoti sėkmingai!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Jūsų atsakymas viršija 64 KB. Sumažinkite failo (-ų) dydį ir bandykite dar kartą arba susisiekite su apklausos savininku.",
    // "Try again"
    saveAgainButton: "Bandyti dar kartą",
    // [Auto-translated] "min"
    timerMin: "min",
    // "sec"
    timerSec: "sek",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Praleidote {0} šiame puslapyje ir {1} iš viso.",
    // "You have spent {0} on this page."
    timerSpentPage: "Praleidote {0} šiame puslapyje.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Praleidote {0} iš viso.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Praleidote {0} iš {1} šiame puslapyje ir {2} iš {3} iš viso.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Praleidote {0} iš {1} šiame puslapyje.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Praleidote {0} iš {1} iš viso.",
    // "Clear"
    clearCaption: "Valyti",
    // [Auto-translated] "Select"
    selectCaption: "Žymėti",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Pasirašykite čia",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Nėra parašo",
    // "Select File"
    chooseFileCaption: "Pasirinkti failą",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Fotografuoti",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Spustelėkite žemiau esantį mygtuką, kad nufotografuotumėte fotoaparatu.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Nuvilkite arba pasirinkite failą, kurį norite įkelti arba nufotografuoti naudodami fotoaparatą.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Pakeiskite failą",
    // "Remove this file"
    removeFileCaption: "Ištrinti šį failą",
    // "Yes"
    booleanCheckedLabel: "Taip",
    // "No"
    booleanUncheckedLabel: "Ne",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Ar tikrai norite pašalinti šį failą: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Ar tikrai norite pašalinti visus failus?",
    // "Question Title"
    questionTitlePatternText: "Klausimo pavadinimas",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Atšaukti",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Vartoti",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Įveskite, kad ieškotumėte...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Nėra rodomų duomenų",
    // [Auto-translated] "Loading..."
    loadingPage: "Pakrovimo...",
    // [Auto-translated] "Loading..."
    loadingData: "Pakrovimo...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Įrašų dar nėra.\nSpustelėkite žemiau esantį mygtuką, kad pridėtumėte naują įrašą.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Įrašų nėra",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Naujas skydelis",
    // [Auto-translated] "More"
    more: "Daugiau",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "GERAI",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Visi pasirinkimai atrenkami reitingui",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Vilkite pasirinkimus čia, kad juos reitinguotumėte",
    // [Auto-translated] "OK"
    ok: "GERAI",
    // [Auto-translated] "Cancel"
    cancel: "Atšaukti",
    // "Create \"{0}\" item..."
    createCustomItem: 'Sukurkite elementą "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Turinys",
    // [Auto-translated] "Progress bar"
    progressbar: "Eigos juosta"
  };
  surveyCore.setupLocale({ localeCode: "lt", strings: lithuaniaSurveyStrings, nativeName: "lietuvių", englishName: "Lithuanian" });

  var macedonianSurveyStrings = {
    // "Previous"
    pagePrevText: "Претходна",
    // "Next"
    pageNextText: "Следно",
    // "Complete"
    completeText: "Заврши",
    // "Preview"
    previewText: "Преглед",
    // "Edit"
    editText: "Уредување",
    // "Start"
    startSurveyText: "Започнете",
    // [Auto-translated] "Please leave a comment"
    commentText: "Молиме оставете коментар",
    // "Other (describe)"
    otherItemText: "Друго (опиши)",
    // "None"
    noneItemText: "Ништо",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Одбиј да одговориш.",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Не знам",
    // "Select All"
    selectAllItemText: "Селектирај се",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Отстранете селекција на сите",
    // "Page {0} of {1}"
    progressText: "Страница {0} од {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} на {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Сними {0} од {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Панел {панел Индекс}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Одговорени на {0} / {1} прашања",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Нема видлива страница или прашање во истражувањето.",
    // "Thank you for completing the survey"
    completingSurvey: "Ви благодариме што го завршивте истражувањето!",
    // "You have already completed this survey."
    completingSurveyBefore: "Нашите записи покажуваат дека веќе сте го завршиле ова истражување.",
    // "Loading Survey..."
    loadingSurvey: "Анкетата се вчитува ...",
    // "Select..."
    placeholder: "Изберете ...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Изберете...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Изберете...",
    // "value"
    value: "вредност",
    // "Response required."
    requiredError: "Ве молам, одговорете на прашањето.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Ве молам, одговорете барем на едно прашање.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Ве молиме, одговорете на прашања во сите редови.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Секој ред мора да има уникатна вредност.",
    // "The value should be numeric."
    numericError: "Вредноста треба да биде нумеричка.",
    // "The value should not be less than {0}"
    minError: "Вредноста не треба да биде помала од {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Молиме внесете вредност која одговара на големината на чекорот на {0}.",
    // "The value should not be greater than {0}"
    maxError: "Вредноста не треба да биде поголема од {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Невалиден внес",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Броевите не се дозволени.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Ве молиме пополнете ја вредноста за да одговара на потребниот формат.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Внесете најмалку {0} знак/ци.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Внесете не повеќе од {0} знак/ци.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Внесете најмалку {0} и не повеќе од {1} знаци.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Пополнете најмалку {0} ред(ови).",
    // "Please select at least {0} option(s)."
    minSelectError: "Ве молиме изберете најмалку {0} варијанта(и).",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Изберете не повеќе од {0} варијанта(и).",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' треба да биде најмалку {1} и најмногу {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' треба да биде најмалку {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' треба да биде најмногу {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Ве молиме внесете валидна е-маил адреса.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Изразот: {0} треба да се врати 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Барањето врати грешка '{0}'. {1} ",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Барањето врати празни податоци или својството 'path' е неточно",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Големината на датотеката не треба да надминува {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Бајтови, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Максималниот број на датотеки што можеш да ги прикачиш е {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Фајловите не можат да се качуваат. Ве молиме додадете раководител за настанот 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Внесете ја другата вредност.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Вашата датотека се поставува. Ве молиме почекајте неколку секунди и обидете се повторно.",
    // "Loading..."
    loadingFile: "Се вчитува ...",
    // "Choose file(s)..."
    chooseFile: "Изберете датотека (и) ...",
    // "No file selected"
    noFileChosen: "Не се избрани датотеки",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Пуштете датотека овде или кликнете на копчето подолу за да ја вчитате датотеката.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Дали сакате да го избришете записот?",
    // "This value should be unique."
    keyDuplicationError: "Оваа вредност треба да биде единствена.",
    // "Add Column"
    addColumn: "Додај колона",
    // "Add Row"
    addRow: "Додади ред",
    // "Remove"
    removeRow: "Отстрани",
    // "There are no rows."
    noRowsText: "Нема редови.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Ред {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Додади ново",
    // "Remove"
    removePanel: "Отстрани",
    // [Auto-translated] "Show Details"
    showDetails: "Прикажување на деталите",
    // [Auto-translated] "Hide Details"
    hideDetails: "Сокриј ги деталите.",
    // "item"
    choices_Item: "ставка",
    // [Auto-translated] "Choice option"
    choices_Choice: "Опција за избор",
    // "Column"
    matrix_column: "Колона",
    // "Row"
    matrix_row: "Ред",
    // [Auto-translated] "text"
    multipletext_itemname: "текст.",
    // "The results are being saved on the server..."
    savingData: "Резултатите се зачувуваат на серверот ...",
    // "An error occurred and we could not save the results."
    savingDataError: "Настана грешка и не можевме да ги зачуваме резултатите.",
    // "The results were saved successfully!"
    savingDataSuccess: "Резултатите беа успешно зачувани!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Вашиот одговор надминува 64KB. Молиме намалете ја големината на вашите документи и пробајте повторно или контактирајте го сопственикот на анкетата.",
    // "Try again"
    saveAgainButton: "Обиди се повторно",
    // "min"
    timerMin: "мин",
    // "sec"
    timerSec: "сек",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Поминавте {0} на оваа страница и вкупно {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "Поминавте {0} на оваа страница.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Вие потрошивте вкупно {0}.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Поминавте {0} од {1} на оваа страница и {2} од {3} вкупно.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Поминавте {0} од {1} на оваа страница.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Вие потрошивте вкупно {0} од {1}.",
    // "Clear"
    clearCaption: "Да расчисти",
    // [Auto-translated] "Select"
    selectCaption: "Избери",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Потпиши се овде.",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Нема потпис",
    // "Select File"
    chooseFileCaption: "Изберете датотека",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Фотографирајте",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Кликнете на копчето подолу за да фотографирате користејќи ја камерата.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Влечете и фрлајте или изберете датотека за качување или фотографирање користејќи ја камерата.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Заменете го фајлот.",
    // "Remove this file"
    removeFileCaption: "Отстранете ја оваа датотека",
    // "Yes"
    booleanCheckedLabel: "Да",
    // "No"
    booleanUncheckedLabel: "Не",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Дали сте сигурни дека сакате да ја отстраните оваа датотека: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Дали сте сигурни дека сакате да ги отстраните сите датотеки?",
    // "Question Title"
    questionTitlePatternText: "Наслов на прашањето",
    // "Cancel"
    modalCancelButtonText: "Откажи",
    // "Apply"
    modalApplyButtonText: "Аплицирај",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Тип за пребарување...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Нема податоци за прикажување",
    // [Auto-translated] "Loading..."
    loadingPage: "Вчитување...",
    // [Auto-translated] "Loading..."
    loadingData: "Вчитување...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Сè уште нема записи.\nКликнете на копчето подолу за да додадете нов запис.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Нема записи",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Нов панел",
    // [Auto-translated] "More"
    more: "Повеќе",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "ДОБРО",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Сите избори се избрани за рангирање",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Повлечете избори тука за да ги рангирате",
    // [Auto-translated] "OK"
    ok: "ДОБРО",
    // [Auto-translated] "Cancel"
    cancel: "Откажи",
    // "Create \"{0}\" item..."
    createCustomItem: 'Креирање на "{0}" ставка...',
    // [Auto-translated] "Table of contents"
    toc: "Содржина",
    // [Auto-translated] "Progress bar"
    progressbar: "Лента за напредок"
  };
  surveyCore.setupLocale({ localeCode: "mk", strings: macedonianSurveyStrings, nativeName: "македонски", englishName: "Macedonian" });

  var malaySurveyStrings = {
    // "Previous"
    pagePrevText: "Sebelumnya",
    // "Next"
    pageNextText: "Seterusnya",
    // "Complete"
    completeText: "Selesai",
    // "Preview"
    previewText: "Pratonton",
    // [Auto-translated] "Edit"
    editText: "Suntingan",
    // "Start"
    startSurveyText: "Mula",
    // [Auto-translated] "Please leave a comment"
    commentText: "Sila tinggalkan komen",
    // "Other (describe)"
    otherItemText: "Lain (terangkan)",
    // "None"
    noneItemText: "Tiada",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Enggan menjawab",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Tak tahu",
    // "Select All"
    selectAllItemText: "Pilih Semua",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Nyahpilih semua",
    // "Page {0} of {1}"
    progressText: "Halaman {0} daripada {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Rekod {0} daripada {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "{0}/{1} soalan telah dijawab",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Tiada halaman atau soalan boleh dilihat dalam tinjauan.",
    // "Thank you for completing the survey"
    completingSurvey: "Terima kasih kerana melengkapkan tinjauan!",
    // "You have already completed this survey."
    completingSurveyBefore: "Rekod kami menunjukkan yang anda telah melengkapkan tinjauan ini.",
    // "Loading Survey..."
    loadingSurvey: "Memuatkan Tinjauan...",
    // "Select..."
    placeholder: "Pilih...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Pilih...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Pilih...",
    // "value"
    value: "nilai",
    // "Response required."
    requiredError: "Respons diperlukan.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Respons diperlukan: jawab sekurang-kurangnya satu soalan.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Respons diperlukan: jawab soalan dalam semua baris.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Setiap baris mesti mempunyai nilai yang unik.",
    // "The value should be numeric."
    numericError: "Nilai mestilah numerik.",
    // "The value should not be less than {0}"
    minError: "Nilai tidak boleh kurang daripada {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Sila masukkan nilai yang sepadan dengan saiz langkah {0}.",
    // "The value should not be greater than {0}"
    maxError: "Nilai tidak boleh lebih besar daripada {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Input tidak sah",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Nombor tidak dibenarkan.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Sila lengkapkan nilai untuk dipadankan dengan format yang diperlukan.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Sila masukkan sekurang-kurangnya {0} aksara.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Sila masukkan tidak lebih daripada {0} aksara.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Sila masukkan sekurang-kurangnya {0} dan tidak lebih daripada {1} aksara.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Sila isikan sekurang-kurangnya {0} baris.",
    // "Please select at least {0} option(s)."
    minSelectError: "Sila pilih sekurang-kurangnya {0} varian.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Sila pilih tidak lebih daripada {0} varian.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' mestilah sekurang-kurangnya {1} dan paling banyak {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' mestilah sekurang-kurangnya {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' mestilah paling banyak {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Sila masukkan alamat e-mel yang sah.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Ekspresi: {0} hendaklah mengembalikan nilai 'benar'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Permintaan mengembalikan ralat '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Permintaan mengembalikan data kosong atau ciri 'laluan' salah",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Saiz fail hendaklah tidak melebihi {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bait, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Bilangan maksimum fail yang boleh anda muat naik ialah {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Fail tidak boleh dimuat naik. Sila tambah pengendali untuk acara 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Respons diperlukan: masukkan nilai lain.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Fail anda sedang dimuat naik. Sila tunggu beberapa saat dan cuba lagi.",
    // "Loading..."
    loadingFile: "Memuat...",
    // "Choose file(s)..."
    chooseFile: "Pilih fail...",
    // "No file selected"
    noFileChosen: "Tiada fail dipilih",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Letakkan fail di sini atau klik butang di bawah untuk memuatkan fail.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Adakah anda ingin memadamkan rekod?",
    // "This value should be unique."
    keyDuplicationError: "Nilai ini hendaklah unik.",
    // "Add Column"
    addColumn: "Tambahkan lajur",
    // "Add Row"
    addRow: "Tambahkan baris",
    // "Remove"
    removeRow: "Alih keluar",
    // "There are no rows."
    noRowsText: "Tiada baris.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Baris {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Tambah baharu",
    // "Remove"
    removePanel: "Alih keluar",
    // [Auto-translated] "Show Details"
    showDetails: "Tunjukkan Butiran",
    // [Auto-translated] "Hide Details"
    hideDetails: "Sembunyikan Butiran",
    // [Auto-translated] "item"
    choices_Item: "Item",
    // [Auto-translated] "Choice option"
    choices_Choice: "Pilihan pilihan",
    // "Column"
    matrix_column: "Lajur",
    // "Row"
    matrix_row: "Baris",
    // "text"
    multipletext_itemname: "teks",
    // "The results are being saved on the server..."
    savingData: "Keputusan sedang disimpan pada pelayan...",
    // "An error occurred and we could not save the results."
    savingDataError: "Ralat berlaku dan kami tidak dapat menyimpan keputusan.",
    // "The results were saved successfully!"
    savingDataSuccess: "Keputusan berjaya disimpan!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Respons anda melebihi 64KB. Sila kurangkan saiz fail anda dan cuba lagi atau hubungi pemilik tinjauan.",
    // "Try again"
    saveAgainButton: "Cuba lagi",
    // [Auto-translated] "min"
    timerMin: "minit",
    // "sec"
    timerSec: "saat",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Anda telah meluangkan {0} pada halaman ini dan {1} secara keseluruhan.",
    // "You have spent {0} on this page."
    timerSpentPage: "Anda telah meluangkan {0} pada halaman ini.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Anda telah meluangkan {0} secara keseluruhan.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Anda telah meluangkan {0} daripada {1} pada halaman ini dan {2} daripada {3} secara keseluruhan.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Anda telah meluangkan {0} daripada {1} pada halaman ini.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Anda telah meluangkan {0} daripada {1} secara keseluruhan.",
    // "Clear"
    clearCaption: "Kosongkan",
    // [Auto-translated] "Select"
    selectCaption: "Pilih",
    // "Sign here"
    signaturePlaceHolder: "Tandatangan di sini",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Tiada tandatangan",
    // "Select File"
    chooseFileCaption: "Pilih fail",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Ambil gambar",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Klik butang di bawah untuk mengambil gambar menggunakan kamera.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Seret dan lepas atau pilih fail untuk memuat naik atau mengambil foto menggunakan kamera.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Gantikan fail",
    // "Remove this file"
    removeFileCaption: "Alih keluar fail ini",
    // "Yes"
    booleanCheckedLabel: "Ya",
    // "No"
    booleanUncheckedLabel: "Tidak",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Anda pasti ingin mengalih keluar fail ini: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Anda pasti ingin mengalih keluar semua fail?",
    // "Question Title"
    questionTitlePatternText: "Tajuk Soalan",
    // "Cancel"
    modalCancelButtonText: "Batal",
    // "Apply"
    modalApplyButtonText: "Guna",
    // "Type to search..."
    filterStringPlaceholder: "Taip untuk membuat carian...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Tiada data untuk dipaparkan",
    // [Auto-translated] "Loading..."
    loadingPage: "Memuatkan...",
    // [Auto-translated] "Loading..."
    loadingData: "Memuatkan...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Belum ada entri.\nKlik butang di bawah untuk menambahkan entri.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Tiada penyertaan",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Panel Baru",
    // [Auto-translated] "More"
    more: "Lebih banyak",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Semua pilihan dipilih untuk kedudukan",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Seret pilihan di sini untuk meletakkan kedudukan mereka",
    // [Auto-translated] "OK"
    ok: "OK",
    // [Auto-translated] "Cancel"
    cancel: "Batal",
    // "Create \"{0}\" item..."
    createCustomItem: 'Buat item "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Jadual kandungan",
    // [Auto-translated] "Progress bar"
    progressbar: "Bar kemajuan"
  };
  surveyCore.setupLocale({ localeCode: "ms", strings: malaySurveyStrings, nativeName: "melayu", englishName: "Malay" });

  var norwegianSurveyStrings = {
    // "Previous"
    pagePrevText: "Forrige",
    // "Next"
    pageNextText: "Neste",
    // "Complete"
    completeText: "Fullfør",
    // "Preview"
    previewText: "Forhåndsvisning",
    // "Edit"
    editText: "Redigere",
    // [Auto-translated] "Start"
    startSurveyText: "Start",
    // [Auto-translated] "Please leave a comment"
    commentText: "Legg igjen en kommentar",
    // "Other (describe)"
    otherItemText: "Annet (beskriv)",
    // "None"
    noneItemText: "Ingen",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Nekter å svare",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Vet ikke",
    // "Select All"
    selectAllItemText: "Velg alle",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Fjern merket for alle",
    // "Page {0} of {1}"
    progressText: "Side {0} av {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} av {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Ta opp {0} av {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Besvarte {0} / {1} spørsmål",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Det er ingen synlig side eller spørsmål i undersøkelsen.",
    // "Thank you for completing the survey"
    completingSurvey: "Takk for at du fullførte undersøkelsen!",
    // "You have already completed this survey."
    completingSurveyBefore: "Våre data viser at du allerede har gjennomført denne undersøkelsen.",
    // "Loading Survey..."
    loadingSurvey: "Undersøkelsen laster...",
    // "Select..."
    placeholder: "Velg...",
    // "Select..."
    ratingOptionsCaption: "Velg...",
    // "Select..."
    buttongroupOptionsCaption: "Velg...",
    // "value"
    value: "verdi",
    // "Response required."
    requiredError: "Vennligst svar på spørsmålet.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Vennligst svar på minst ett spørsmål.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Vennligst svar på spørsmål i alle rader.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Hver rad må ha en unik verdi.",
    // "The value should be numeric."
    numericError: "Verdien skal være numerisk.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Verdien bør ikke være mindre enn {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Angi en verdi som samsvarer med trinnstørrelsen på {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Verdien bør ikke være større enn {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Ugyldig input",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Tall er ikke tillatt.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Vennligst fyll ut verdien for å matche det nødvendige formatet.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Vennligst skriv inn minst {0} tegn.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Vennligst skriv inn mindre enn {0} tegn.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Vennligst skriv inn mer enn {0} og mindre enn {1} tegn.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Vennligst fyll inn minst {0} rader.",
    // "Please select at least {0} option(s)."
    minSelectError: "Vennligst velg minst {0} varianter.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Vennligst ikke velg mer enn {0} varianter.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' bør være lik eller mer enn {1} og lik eller mindre enn {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' bør være lik eller mer enn {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' bør være lik eller mindre enn {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Vennligst skriv inn en gyldig e-post adresse.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Uttrykket: {0} skal returnere 'sant'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Forespørselen returnerte feilen '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Forespørselen returnerte tomme data, eller 'sti' -egenskapen er feil",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Filstørrelsen bør ikke overstige {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bytes, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Maksimalt antall filer du kan laste opp er {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Filer kan ikke lastes opp. Legg til et behandlingsprogram for onUploadFiles-hendelsen.",
    // "Response required: enter another value."
    otherRequiredError: "Vennligst skriv inn den andre verdien.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Filen din lastes opp. Vennligst vent noen sekunder og prøv igjen.",
    // "Loading..."
    loadingFile: "Laster inn ...",
    // "Choose file(s)..."
    chooseFile: "Velg fil (er) ...",
    // "No file selected"
    noFileChosen: "Ingen fil valgt",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Dra og slipp en fil her eller klikk på knappen nedenfor for å velge en fil du vil laste opp.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Ønsker du å slette posten?",
    // "This value should be unique."
    keyDuplicationError: "Denne verdien skal være unik.",
    // "Add Column"
    addColumn: "Legg til kolonne",
    // "Add Row"
    addRow: "Legg til rad",
    // "Remove"
    removeRow: "Fjern",
    // [Auto-translated] "There are no rows."
    noRowsText: "Det er ingen rader.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Rad {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Legg til ny",
    // "Remove"
    removePanel: "Fjerne",
    // [Auto-translated] "Show Details"
    showDetails: "Vis detaljer",
    // [Auto-translated] "Hide Details"
    hideDetails: "Skjul detaljer",
    // "item"
    choices_Item: "element",
    // [Auto-translated] "Choice option"
    choices_Choice: "Valg alternativ",
    // "Column"
    matrix_column: "Kolonne",
    // "Row"
    matrix_row: "Rad",
    // [Auto-translated] "text"
    multipletext_itemname: "Tekst",
    // "The results are being saved on the server..."
    savingData: "Resultatene lagres på serveren ...",
    // "An error occurred and we could not save the results."
    savingDataError: "Det oppsto en feil, og vi kunne ikke lagre resultatene.",
    // "The results were saved successfully!"
    savingDataSuccess: "Resultatene ble lagret!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Svaret ditt overstiger 64 kB. Reduser størrelsen på filen(e) og prøv på nytt eller kontakt eieren av undersøkelsen.",
    // "Try again"
    saveAgainButton: "Prøv igjen",
    // [Auto-translated] "min"
    timerMin: "Min",
    // "sec"
    timerSec: "sek",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Du har tilbrakt {0} på denne siden og {1} totalt.",
    // "You have spent {0} on this page."
    timerSpentPage: "Du har tilbrakt {0} på denne siden.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Du har tilbrakt {0} totalt.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Du har tilbrakt {0} av {1} på denne siden og totalt {2} av {3}.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Du har tilbrakt {0} av {1} på denne siden.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Du har tilbrakt {0} av {1} totalt.",
    // "Clear"
    clearCaption: "Tøm",
    // "Select"
    selectCaption: "Velg",
    // "Sign here"
    signaturePlaceHolder: "Signer her",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Ingen signatur",
    // "Select File"
    chooseFileCaption: "Velg Fil",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Ta bilde",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Klikk på knappen nedenfor for å ta et bilde med kameraet.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Dra og slipp eller velg en fil for å laste opp eller ta et bilde med kameraet.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Erstatt fil",
    // "Remove this file"
    removeFileCaption: "Fjern denne filen",
    // "Yes"
    booleanCheckedLabel: "Ja",
    // "No"
    booleanUncheckedLabel: "Nei",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Er du sikker på at du vil fjerne denne filen: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Er du sikker på at du vil fjerne alle filene?",
    // "Question Title"
    questionTitlePatternText: "Spørsmålstittel",
    // "Cancel"
    modalCancelButtonText: "Avbryt",
    // "Apply"
    modalApplyButtonText: "Bruk",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Skriv for å søke ...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Ingen data å vise",
    // [Auto-translated] "Loading..."
    loadingPage: "Lasting...",
    // [Auto-translated] "Loading..."
    loadingData: "Lasting...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Ingen oppføringer ennå.\nKlikk på knappen nedenfor for å legge til en ny oppføring.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Ingen oppføringer",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Nytt panel",
    // [Auto-translated] "More"
    more: "Mer",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Alle valg er valgt for rangering",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Dra valg hit for å rangere dem",
    // [Auto-translated] "OK"
    ok: "OK",
    // "Cancel"
    cancel: "Avbryt",
    // "Create \"{0}\" item..."
    createCustomItem: 'Lag "{0}" element...',
    // [Auto-translated] "Table of contents"
    toc: "Innhold",
    // [Auto-translated] "Progress bar"
    progressbar: "Fremdriftsindikator"
  };
  surveyCore.setupLocale({ localeCode: "no", strings: norwegianSurveyStrings, nativeName: "norsk", englishName: "Norwegian" });

  var persianSurveyStrings = {
    // "Previous"
    pagePrevText: "قبلی",
    // "Next"
    pageNextText: "بعدی",
    // "Complete"
    completeText: "تکمیل",
    // "Preview"
    previewText: "پیش نمایش",
    // "Edit"
    editText: "ویرایش",
    // "Start"
    startSurveyText: "شروع",
    // [Auto-translated] "Please leave a comment"
    commentText: "لطفا نظر خود را بنویسید",
    // "Other (describe)"
    otherItemText: "دیگر(توضیح)",
    // "None"
    noneItemText: "هیچ",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "امتناع از پاسخ دادن",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "نمی دانم",
    // "Select All"
    selectAllItemText: "انتخاب همه",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "لغو انتخاب همه",
    // "Page {0} of {1}"
    progressText: "صفحه {0} از {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "مورد {0} از {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "پنل {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "تعداد پاسخ {0}/{1} سوال",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "صفحه ای یا گزینه ای برای این پرسشنامه موجود نیست.",
    // "Thank you for completing the survey"
    completingSurvey: "از شما بابت تکمیل این پرسشنامه متشکریم",
    // "You have already completed this survey."
    completingSurveyBefore: "به نظر می رسد هم هم اکنون پرسشنامه را تکمیل کرده اید.",
    // "Loading Survey..."
    loadingSurvey: "درحال ایجاد پرسشنامه",
    // "Select..."
    placeholder: "انتخاب کنید...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "انتخاب...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "انتخاب...",
    // "value"
    value: "مقدار",
    // "Response required."
    requiredError: "لطفا به سوال پاسخ دهید",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "لطفا حداقل به یک سوال پاسخ دهید.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "لطفا سوالات تمام سطرها را پاسخ دهید.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "هر سطر باید یک مقدار منحصر به فرد داشته باشد.",
    // "The value should be numeric."
    numericError: "مقدار باید عددی باشد",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "ارزش نباید کمتر از {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "لطفا مقداری را وارد کنید که با اندازه گام {0} مطابقت داشته باشد.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "ارزش نباید بیشتر از {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "ورودی نامعتبر",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "شماره ها مجاز نیستند.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "لطفا مقدار را تکمیل کنید تا با قالب مورد نیاز مطابقت داشته باشد.",
    // "Please enter at least {0} character(s)."
    textMinLength: "لطفا حداقل  {0} حرف وارد کنید",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "لطفا کمتر از  {0} حرف وارد کنید.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "لطفا بیشتر از  {0} حرف و کمتر از {1} حرف وارد کنید.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "لطفا حداقل {0} سطر وارد کنید.",
    // "Please select at least {0} option(s)."
    minSelectError: "حداقل {0} انتخاب کنید.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "لطفا بیشتر از  {0} انتخاب کنید.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' باید بین {1} و {2} باشد",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' بزرگتر مساوی {1} باشد",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' باید کوچکتر یا مساوی {1} باشد",
    // "Please enter a valid e-mail address."
    invalidEmail: "لطفا ایمیل صحیح درج کنید",
    // "The expression: {0} should return 'true'."
    invalidExpression: "عبارت: {0} پاسخ باید 'true' باشد.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "درخواست با خطا روبرو شد: '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "درخواست مسیری خالی بازگشت داده یا مسیر درست تنظیم نشده",
    // "The file size should not exceed {0}."
    exceedMaxSize: "بیشترین حجم مجاز فایل: {0}",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "بایت ها, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "حداکثر تعداد فایل هایی که می توانید بارگذاری کنید {0} است.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: 'پروندهها را نمیتوان بارگذاری کرد. لطفا یک گرداننده برای رویداد "onUploadFiles" اضافه کنید.',
    // "Response required: enter another value."
    otherRequiredError: "مقدار 'دیگر' را وارد کنید",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "فایل در حال آیلود است. لطفا صبر کنید.",
    // "Loading..."
    loadingFile: "بارگیری...",
    // "Choose file(s)..."
    chooseFile: "انتخاب فایل(ها)...",
    // "No file selected"
    noFileChosen: "هیچ فایلی انتخاب نشده",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "یک فایل را در اینجا بکشید و رها کنید یا روی دکمه زیر کلیک کنید تا فایلی را برای آپلود انتخاب کنید.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "آیا مایل به حذف این ردیف هستید؟",
    // "This value should be unique."
    keyDuplicationError: "این مقدار باید غیر تکراری باشد",
    // "Add Column"
    addColumn: "ستون جدید",
    // "Add Row"
    addRow: "سطر جدید",
    // "Remove"
    removeRow: "حذف",
    // [Auto-translated] "There are no rows."
    noRowsText: "هیچ ردیفی وجود ندارد.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "ردیف {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "جدید",
    // "Remove"
    removePanel: "حذف",
    // [Auto-translated] "Show Details"
    showDetails: "نمایش جزئیات",
    // [Auto-translated] "Hide Details"
    hideDetails: "مخفی کردن جزئیات",
    // "item"
    choices_Item: "آیتم",
    // [Auto-translated] "Choice option"
    choices_Choice: "گزینه انتخاب",
    // "Column"
    matrix_column: "ستون",
    // "Row"
    matrix_row: "سطر",
    // [Auto-translated] "text"
    multipletext_itemname: "پیامک",
    // "The results are being saved on the server..."
    savingData: "نتایج در حال ذخیره سازی در سرور است",
    // "An error occurred and we could not save the results."
    savingDataError: "خطایی در ذخیره سازی نتایج رخ داده است",
    // "The results were saved successfully!"
    savingDataSuccess: "نتایج با موفقیت ذخیره شد",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "پاسخ شما بیش از 64 کیلوبایت است. لطفا حجم فایل(های) خود را کاهش دهید و دوباره امتحان کنید یا با مالک نظرسنجی تماس بگیرید.",
    // "Try again"
    saveAgainButton: "مجدد تلاش کنید",
    // "min"
    timerMin: "دقیقه",
    // "sec"
    timerSec: "ثانیه",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "شما مدت {0} در این صفحه و مدت {1} را در مجموع سپری کرده اید.",
    // "You have spent {0} on this page."
    timerSpentPage: "شما مدت {0} را در این صفحه سپری کرده اید.",
    // "You have spent {0} in total."
    timerSpentSurvey: "شما مدت {0} را در مجموع سپری کرده اید.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "شما مدت {0} از {1} در این صفحه و مدت {2} از {3} را در مجموع سپری کرده اید.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "شما مدت {0} از {1} را در این صفحه سپری کرده اید.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "شما مدت {0} از {1} را در مجموع سپری کرده اید.",
    // "Clear"
    clearCaption: "خالی کردن",
    // [Auto-translated] "Select"
    selectCaption: "انتخاب",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "اینجا را امضا کنید",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "بدون امضا",
    // "Select File"
    chooseFileCaption: "انتخاب فایل",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "گرفتن عکس",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "روی دکمه زیر کلیک کنید تا با استفاده از دوربین عکس بگیرید.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "کشیدن و رها کردن یا انتخاب یک فایل برای اپلود یا گرفتن عکس با استفاده از دوربین.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "جایگزینی پرونده",
    // "Remove this file"
    removeFileCaption: "حذف این فایل",
    // "Yes"
    booleanCheckedLabel: "بله",
    // "No"
    booleanUncheckedLabel: "خیر",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "آیا میخواهید این فایل را پاک کنید: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "آیا میخواهید تمام فایل ها را پاک کنید?",
    // "Question Title"
    questionTitlePatternText: "عنوان سوال",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "لغو",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "درخواست",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "تایپ برای جستجو...",
    // [Auto-translated] "No data to display"
    emptyMessage: "داده ای برای نمایش وجود ندارد",
    // [Auto-translated] "Loading..."
    loadingPage: "بارگذاری...",
    // [Auto-translated] "Loading..."
    loadingData: "بارگذاری...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "هنوز هیچ مدخلی وجود ندارد.\nبرای افزودن ورودی جدید روی دکمه زیر کلیک کنید.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "بدون ورودی",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "پنل جدید",
    // [Auto-translated] "More"
    more: "بیشتر",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "باشه",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "همه گزینه ها برای رتبه بندی انتخاب می شوند",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "گزینه ها را در اینجا بکشید تا آنها را رتبه بندی کنید",
    // [Auto-translated] "OK"
    ok: "باشه",
    // [Auto-translated] "Cancel"
    cancel: "لغو",
    // "Create \"{0}\" item..."
    createCustomItem: 'مورد "{0}" ایجاد کنید...',
    // [Auto-translated] "Table of contents"
    toc: "جدول محتویات",
    // [Auto-translated] "Progress bar"
    progressbar: "نوار پیشرفت"
  };
  surveyCore.setupLocale({ localeCode: "fa", strings: persianSurveyStrings, nativeName: "فارْسِى", englishName: "Persian", rtl: true });

  var polishSurveyStrings = {
    // "Previous"
    pagePrevText: "Wstecz",
    // "Next"
    pageNextText: "Dalej",
    // "Complete"
    completeText: "Gotowe",
    // "Preview"
    previewText: "Premiera",
    // "Edit"
    editText: "Edycja",
    // [Auto-translated] "Start"
    startSurveyText: "Start",
    // [Auto-translated] "Please leave a comment"
    commentText: "Proszę o komentarz",
    // "Other (describe)"
    otherItemText: "Inna odpowiedź (wpisz)",
    // "None"
    noneItemText: "Brak",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Odmów odpowiedzi",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Nie wiem",
    // "Select All"
    selectAllItemText: "Wybierz wszystkie",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Odznacz wszystko",
    // "Page {0} of {1}"
    progressText: "Strona {0} z {1}",
    // "{0} of {1}"
    indexText: "{0} od {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Zapis {0} z {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Odpowiedzi na {0}/{1} pytania",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Nie ma widocznych pytań.",
    // "Thank you for completing the survey"
    completingSurvey: "Dziękujemy za wypełnienie ankiety!",
    // "You have already completed this survey."
    completingSurveyBefore: "Z naszych zapisów wynika, że wypełniłeś już tę ankietę.",
    // "Loading Survey..."
    loadingSurvey: "Trwa wczytywanie ankiety...",
    // "Select..."
    placeholder: "Wybierz...",
    // "Select..."
    ratingOptionsCaption: "Kliknij tutaj, aby ocenić...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Wybrać...",
    // "value"
    value: "Wartość",
    // "Response required."
    requiredError: "Proszę odpowiedzieć na to pytanie.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Proszę odpowiedzieć na co najmniej jedno pytanie.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Proszę odpowiedzieć na wszystkie pytania.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Każdy wiersz musi mieć unikatową wartość.",
    // "The value should be numeric."
    numericError: "W tym polu można wpisać tylko liczby.",
    // "The value should not be less than {0}"
    minError: "Wartość nie powinna być mniejsza niż {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Wprowadź wartość odpowiadającą rozmiarowi kroku {0}.",
    // "The value should not be greater than {0}"
    maxError: "Wartość nie powinna być większa niż {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Nieprawidłowe wejście",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Liczby są niedozwolone.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Prosimy o wypełnienie wartości, aby pasowało do wymaganego formatu.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Proszę wpisać co najmniej {0} znaków.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Proszę wpisać mniej niż {0} znaków.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Proszę wpisać więcej niż {0} i mniej niż {1} znaków.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Proszę uzupełnić przynajmniej {0} wierszy.",
    // "Please select at least {0} option(s)."
    minSelectError: "Proszę wybrać co najmniej {0} pozycji.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Proszę wybrać nie więcej niż {0} pozycji.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "Odpowiedź '{0}' powinna być większa lub równa {1} oraz mniejsza lub równa {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "Odpowiedź '{0}' powinna być większa lub równa {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "Odpowiedź '{0}' powinna być mniejsza lub równa {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Proszę podać prawidłowy adres email.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Wyrażenie: {0} powinno wracać 'prawdziwe'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Żądanie zwróciło błąd '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Żądanie nie zwróciło danych albo ścieżka jest nieprawidłowa",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Rozmiar przesłanego pliku nie może przekraczać {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bajty, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Maksymalna liczba plików, które możesz przesłać, to {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: 'Nie można przesłać plików. Dodaj moduł obsługi zdarzenia "onUploadFiles".',
    // "Response required: enter another value."
    otherRequiredError: "Proszę podać inną odpowiedź.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Trwa przenoszenie Twojego pliku, proszę spróbować ponownie za kilka sekund.",
    // "Loading..."
    loadingFile: "Ładowanie...",
    // "Choose file(s)..."
    chooseFile: "Wybierz plik(i)...",
    // "No file selected"
    noFileChosen: "Nie wybrano żadnego pliku",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Upuść plik tutaj lub kliknij przycisk poniżej, aby załadować plik.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Chcesz skasować nagranie?",
    // "This value should be unique."
    keyDuplicationError: "Ta wartość powinna być wyjątkowa.",
    // "Add Column"
    addColumn: "Dodaj kolumnę",
    // "Add Row"
    addRow: "Dodaj wiersz",
    // "Remove"
    removeRow: "Usuń",
    // "There are no rows."
    noRowsText: "Nie ma rzędów.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Wiersz {indeks wiersza}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Dodaj panel",
    // "Remove"
    removePanel: "Usuń",
    // [Auto-translated] "Show Details"
    showDetails: "Pokaż szczegóły",
    // [Auto-translated] "Hide Details"
    hideDetails: "Ukryj szczegóły",
    // "item"
    choices_Item: "element",
    // [Auto-translated] "Choice option"
    choices_Choice: "Opcja wyboru",
    // "Column"
    matrix_column: "Kolumna",
    // "Row"
    matrix_row: "Wiersz",
    // "text"
    multipletext_itemname: "tekst",
    // "The results are being saved on the server..."
    savingData: "Zapisuję wyniki ankiety na serwerze...",
    // "An error occurred and we could not save the results."
    savingDataError: "Wystąpił błąd i wyniki nie mogły zostać zapisane.",
    // "The results were saved successfully!"
    savingDataSuccess: "Wyniki zostały poprawnie zapisane!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Twoja odpowiedź przekracza 64 KB. Zmniejsz rozmiar plików i spróbuj ponownie lub skontaktuj się z właścicielem ankiety.",
    // "Try again"
    saveAgainButton: "Spróbuj ponownie",
    // [Auto-translated] "min"
    timerMin: "min",
    // "sec"
    timerSec: "sek",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Spędziłeś {0} na tej stronie a w sumie {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "Spędziłeś {0} na tej stronie.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Spędziłeś w sumie {0}.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Spędziłeś {0} z {1} na tej stronie a w sumie {2} z {3}.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Spędziłeś {0} z {1} na tej stronie",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Spędziłeś {0} z {1}.",
    // "Clear"
    clearCaption: "Wyczyść",
    // [Auto-translated] "Select"
    selectCaption: "Wybrać",
    // "Sign here"
    signaturePlaceHolder: "Podpisz tutaj",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Brak podpisu",
    // "Select File"
    chooseFileCaption: "Wybierz plik",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Zrób zdjęcie",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Kliknij przycisk poniżej, aby zrobić zdjęcie aparatem.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Przeciągnij i upuść lub wybierz plik, który chcesz przesłać lub zrobić zdjęcie za pomocą aparatu.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Zastąp plik",
    // "Remove this file"
    removeFileCaption: "Usuń ten plik",
    // "Yes"
    booleanCheckedLabel: "Tak",
    // "No"
    booleanUncheckedLabel: "Nie",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Jesteś pewien, że chcesz usunąć ten plik: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Jesteś pewien, że chcesz usunąć wszystkie pliki?",
    // "Question Title"
    questionTitlePatternText: "Tytuł pytania",
    // "Cancel"
    modalCancelButtonText: "Anulować",
    // "Apply"
    modalApplyButtonText: "Zastosować",
    // "Type to search..."
    filterStringPlaceholder: "Wpisz aby wyszukać...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Brak danych do wyświetlenia",
    // [Auto-translated] "Loading..."
    loadingPage: "Ładowania...",
    // [Auto-translated] "Loading..."
    loadingData: "Ładowania...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Nie ma jeszcze wpisów.\nKliknij przycisk poniżej, aby dodać nowy wpis.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Brak zgłoszeń",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Nowy panel",
    // [Auto-translated] "More"
    more: "Więcej",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Wszystkie opcje są wybierane do rankingu",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Przeciągnij opcje tutaj, aby je uszeregować",
    // [Auto-translated] "OK"
    ok: "OK",
    // [Auto-translated] "Cancel"
    cancel: "Anuluj",
    // "Create \"{0}\" item..."
    createCustomItem: 'Utwórz element "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Spis treści",
    // [Auto-translated] "Progress bar"
    progressbar: "Pasek postępu"
  };
  surveyCore.setupLocale({ localeCode: "pl", strings: polishSurveyStrings, nativeName: "polski", englishName: "Polish" });

  var portugueseSurveyStrings = {
    // "Previous"
    pagePrevText: "Anterior",
    // "Next"
    pageNextText: "Próximo",
    // "Complete"
    completeText: "Finalizar",
    // "Preview"
    previewText: "Pré-visualização",
    // "Edit"
    editText: "Editar",
    // "Start"
    startSurveyText: "Começar",
    // [Auto-translated] "Please leave a comment"
    commentText: "Por favor, deixe um comentário",
    // "Other (describe)"
    otherItemText: "Outros (descrever)",
    // "None"
    noneItemText: "Nenhum",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Recusar-se a responder",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Não sei",
    // "Select All"
    selectAllItemText: "Selecionar Todos",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Desmarcar tudo",
    // "Page {0} of {1}"
    progressText: "Página {0} de {1}",
    // "{0} of {1}"
    indexText: "{0} de {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Registo {0} de {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Painel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Respostas {0}/{1} perguntas",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Não há página visível ou pergunta no questionário.",
    // "Thank you for completing the survey"
    completingSurvey: "Obrigado por finalizar o questionário!",
    // "You have already completed this survey."
    completingSurveyBefore: "Os nossos registos mostram que já finalizou o questionário.",
    // "Loading Survey..."
    loadingSurvey: "O questionário está a carregar...",
    // "Select..."
    placeholder: "Selecione...",
    // "Select..."
    ratingOptionsCaption: "Selecione aqui para avaliar...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Selecionar...",
    // "value"
    value: "valor",
    // "Response required."
    requiredError: "Por favor, responda à pergunta.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Por favor, responda pelo menos a uma pergunta.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Por favor, responda às perguntas em todas as linhas.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Cada linha deve ter um valor exclusivo.",
    // "The value should be numeric."
    numericError: "O valor deve ser numérico.",
    // "The value should not be less than {0}"
    minError: "O valor não deverá ser menor que {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Insira um valor que corresponda ao tamanho da etapa de {0}.",
    // "The value should not be greater than {0}"
    maxError: "O valor não deverá ser maior que {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Entrada inválida",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Números não são permitidos.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Por favor, complete o valor para corresponder ao formato exigido.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Por favor, insira pelo menos {0} caracteres.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Por favor, insira menos de {0} caracteres.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Por favor, insira mais de {0} e menos de {1} caracteres.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Preencha pelo menos {0} linhas.",
    // "Please select at least {0} option(s)."
    minSelectError: "Selecione pelo menos {0} opções.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Por favor, selecione no máximo {0} opções.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "O '{0}' deve ser igual ou superior a {1} e igual ou menor que {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "O '{0}' deve ser igual ou superior a {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "O '{0}' deve ser igual ou inferior a {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Por favor, insira um e-mail válido.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "A expressão: {0} deve retornar 'verdadeiro'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "O pedido retornou o erro '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "O pedido não retornou dados ou o 'caminho' do pedido não está correto",
    // "The file size should not exceed {0}."
    exceedMaxSize: "O tamanho do arquivo não deve exceder {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bytes, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "O número máximo de arquivos que você pode enviar é {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Os arquivos não podem ser carregados. Adicione um manipulador para o evento 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Por favor, insira o outro valor.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "O seu ficheiro está a carregar. Por favor, aguarde alguns segundos e tente novamente.",
    // "Loading..."
    loadingFile: "A carregar...",
    // "Choose file(s)..."
    chooseFile: "Selecione o(s) arquivo(s)...",
    // "No file selected"
    noFileChosen: "Nenhum ficheiro escolhido",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Arraste um ficheiro aqui ou clique no botão abaixo para carregar o ficheiro.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Tem a certeza que deseja apagar?",
    // "This value should be unique."
    keyDuplicationError: "Este valor deve ser único.",
    // "Add Column"
    addColumn: "Adicionar coluna",
    // "Add Row"
    addRow: "Adicionar linha",
    // "Remove"
    removeRow: "Remover linha",
    // "There are no rows."
    noRowsText: "Não existem linhas.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Linha {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Adicionar novo",
    // "Remove"
    removePanel: "Remover",
    // [Auto-translated] "Show Details"
    showDetails: "Mostrar detalhes",
    // [Auto-translated] "Hide Details"
    hideDetails: "Ocultar detalhes",
    // [Auto-translated] "item"
    choices_Item: "Item",
    // [Auto-translated] "Choice option"
    choices_Choice: "Opção de escolha",
    // "Column"
    matrix_column: "Coluna",
    // "Row"
    matrix_row: "Linha",
    // "text"
    multipletext_itemname: "texto",
    // "The results are being saved on the server..."
    savingData: "Os resultados estão a ser guardados no servidor...",
    // "An error occurred and we could not save the results."
    savingDataError: "Ocorreu um erro e não foi possível guardar os resultados.",
    // "The results were saved successfully!"
    savingDataSuccess: "Os resultados foram guardados com sucesso!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Sua resposta excede 64 KB. Reduza o tamanho do(s) seu(s) arquivo(s) e tente novamente ou entre em contato com o proprietário da pesquisa.",
    // "Try again"
    saveAgainButton: "Tente novamente",
    // [Auto-translated] "min"
    timerMin: "min",
    // "sec"
    timerSec: "seg",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Você gastou {0} nesta página e {1} no total.",
    // "You have spent {0} on this page."
    timerSpentPage: "Você gastou {0} nesta página.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Você gastou {0} no total.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Você gastou {0} de {1} nesta página e {2} de {3} no total.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Você gastou {0} de {1} nesta página.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Você gastou {0} de {1} no total.",
    // "Clear"
    clearCaption: "Limpar",
    // [Auto-translated] "Select"
    selectCaption: "Selecionar",
    // "Sign here"
    signaturePlaceHolder: "Assine aqui",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Sem assinatura",
    // "Select File"
    chooseFileCaption: "Escolher ficheiro",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Tirar foto",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Clique no botão abaixo para tirar uma foto usando a câmera.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Arraste e solte ou selecione um arquivo para carregar ou tirar uma foto usando a câmera.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Substituir arquivo",
    // "Remove this file"
    removeFileCaption: "Remover este ficheiro",
    // "Yes"
    booleanCheckedLabel: "Sim",
    // "No"
    booleanUncheckedLabel: "Não",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Tem a certeza que deseja remover este ficheiro: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Tem a certeza que deseja remover todos os ficheiros?",
    // "Question Title"
    questionTitlePatternText: "Título da questão",
    // "Cancel"
    modalCancelButtonText: "Cancelar",
    // "Apply"
    modalApplyButtonText: "Aplicar",
    // "Type to search..."
    filterStringPlaceholder: "Digite para pesquisar...",
    // "No data to display"
    emptyMessage: "Não existe informação a mostrar",
    // [Auto-translated] "Loading..."
    loadingPage: "Carregamento...",
    // [Auto-translated] "Loading..."
    loadingData: "Carregamento...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Ainda não existem registos.\nClique no botão abaixo para adicionar um novo registo.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Sem entradas",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Novo Painel",
    // "More"
    more: "Mais",
    // "OK"
    tagboxDoneButtonCaption: "Terminado",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Todas as opções são selecionadas para classificação",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Arraste as opções aqui para classificá-las",
    // [Auto-translated] "OK"
    ok: "OKEY",
    // [Auto-translated] "Cancel"
    cancel: "Cancelar",
    // "Create \"{0}\" item..."
    createCustomItem: 'Criar item "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Índice",
    // [Auto-translated] "Progress bar"
    progressbar: "Barra de progresso"
  };
  surveyCore.setupLocale({ localeCode: "pt", strings: portugueseSurveyStrings, nativeName: "português", englishName: "Portuguese" });

  var portugueseBrSurveyStrings = {
    // [Auto-translated] "Previous"
    pagePrevText: "Anterior",
    // [Auto-translated] "Next"
    pageNextText: "Próximo",
    // [Auto-translated] "Complete"
    completeText: "Completar",
    // [Auto-translated] "Preview"
    previewText: "Visualizar",
    // [Auto-translated] "Edit"
    editText: "Editar",
    // [Auto-translated] "Start"
    startSurveyText: "Começar",
    // [Auto-translated] "Please leave a comment"
    commentText: "Por favor, deixe um comentário",
    // [Auto-translated] "Other (describe)"
    otherItemText: "Outros (descrever)",
    // [Auto-translated] "None"
    noneItemText: "Nenhum",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Recusar-se a responder",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Não sei",
    // [Auto-translated] "Select All"
    selectAllItemText: "Selecionar tudo",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Desmarcar tudo",
    // [Auto-translated] "Page {0} of {1}"
    progressText: "Página {0} de {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} de {1}",
    // [Auto-translated] "{0} of {1}"
    panelDynamicProgressText: "{0} de {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Painel {panelIndex}",
    // [Auto-translated] "Answered {0}/{1} questions"
    questionsProgressText: "Perguntas respondidas {0}/{1}",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Não há página visível ou pergunta na pesquisa.",
    // "Thank you for completing the survey"
    completingSurvey: "Obrigado por finalizar a pesquisa!",
    // "You have already completed this survey."
    completingSurveyBefore: "Nossos registros mostram que você já finalizou a pesquisa.",
    // "Loading Survey..."
    loadingSurvey: "A pesquisa está carregando...",
    // [Auto-translated] "Select..."
    placeholder: "Selecionar...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Selecionar...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Selecionar...",
    // [Auto-translated] "value"
    value: "valor",
    // "Response required."
    requiredError: "Por favor, responda a pergunta.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Por favor, responda pelo menos uma pergunta.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Por favor, responda as perguntas em todas as linhas.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Cada linha deve ter um valor exclusivo.",
    // [Auto-translated] "The value should be numeric."
    numericError: "O valor deve ser numérico.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "O valor não deve ser inferior a {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Insira um valor que corresponda ao tamanho da etapa de {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "O valor não deve ser maior que {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Entrada inválida",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Números não são permitidos.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Por favor, complete o valor para corresponder ao formato exigido.",
    // [Auto-translated] "Please enter at least {0} character(s)."
    textMinLength: "Introduza pelo menos {0} caractere(s).",
    // [Auto-translated] "Please enter no more than {0} character(s)."
    textMaxLength: "Introduza no máximo {0} caractere(s).",
    // [Auto-translated] "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Insira pelo menos {0} e não mais do que {1} caracteres.",
    // [Auto-translated] "Please fill in at least {0} row(s)."
    minRowCountError: "Por favor, preencha pelo menos {0} linha(s).",
    // [Auto-translated] "Please select at least {0} option(s)."
    minSelectError: "Selecione pelo menos {0} opção(ões).",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Por favor, selecione não mais do que {0} opções.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: 'O "{0}" deve ser pelo menos {1} e no máximo {2}',
    // "The '{0}' should be at least {1}"
    numericMin: 'O "{0}" deve ser pelo menos {1}',
    // "The '{0}' should be at most {1}"
    numericMax: 'O "{0}" deve ser no máximo {1}',
    // "Please enter a valid e-mail address."
    invalidEmail: "Por favor, informe um e-mail válido.",
    // [Auto-translated] "The expression: {0} should return 'true'."
    invalidExpression: "A expressão: {0} deve retornar 'verdadeiro'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "A requisição retornou o erro '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "A requisição não retornou dados ou o 'caminho' da requisição não está correto",
    // [Auto-translated] "The file size should not exceed {0}."
    exceedMaxSize: "O tamanho do arquivo não deve exceder {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bytes, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "O número máximo de arquivos que você pode enviar é {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Os arquivos não podem ser carregados. Adicione um manipulador para o evento 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Por favor, informe o outro valor.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Seu arquivo está sendo carregado. Por favor, aguarde alguns segundos e tente novamente.",
    // "Loading..."
    loadingFile: "Carregando...",
    // [Auto-translated] "Choose file(s)..."
    chooseFile: "Escolha o(s) arquivo(s)...",
    // "No file selected"
    noFileChosen: "Nenhum arquivo escolhido",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Arraste e solte um arquivo aqui ou clique no botão abaixo para selecionar um arquivo para carregar.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Tem certeza que deseja deletar?",
    // "This value should be unique."
    keyDuplicationError: "Esse valor deve ser único.",
    // [Auto-translated] "Add Column"
    addColumn: "Adicionar coluna",
    // [Auto-translated] "Add Row"
    addRow: "Adicionar linha",
    // [Auto-translated] "Remove"
    removeRow: "Retirar",
    // [Auto-translated] "There are no rows."
    noRowsText: "Não há filas.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Linha {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // [Auto-translated] "Add new"
    addPanel: "Adicionar novo",
    // [Auto-translated] "Remove"
    removePanel: "Retirar",
    // [Auto-translated] "Show Details"
    showDetails: "Mostrar detalhes",
    // [Auto-translated] "Hide Details"
    hideDetails: "Ocultar detalhes",
    // [Auto-translated] "item"
    choices_Item: "item",
    // [Auto-translated] "Choice option"
    choices_Choice: "Opção de escolha",
    // [Auto-translated] "Column"
    matrix_column: "Coluna",
    // [Auto-translated] "Row"
    matrix_row: "Remar",
    // [Auto-translated] "text"
    multipletext_itemname: "Texto",
    // "The results are being saved on the server..."
    savingData: "Os resultados esto sendo salvos no servidor...",
    // "An error occurred and we could not save the results."
    savingDataError: "Ocorreu um erro e não foi possível salvar os resultados.",
    // "The results were saved successfully!"
    savingDataSuccess: "Os resultados foram salvos com sucesso!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Sua resposta excede 64 KB. Reduza o tamanho do(s) seu(s) arquivo(s) e tente novamente ou entre em contato com o proprietário da pesquisa.",
    // [Auto-translated] "Try again"
    saveAgainButton: "Tentar novamente",
    // [Auto-translated] "min"
    timerMin: "Min",
    // [Auto-translated] "sec"
    timerSec: "segundo",
    // [Auto-translated] "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Você gastou {0} nesta página e {1} no total.",
    // [Auto-translated] "You have spent {0} on this page."
    timerSpentPage: "Você passou {0} nesta página.",
    // [Auto-translated] "You have spent {0} in total."
    timerSpentSurvey: "Gastou {0} no total.",
    // [Auto-translated] "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Você gastou {0} de {1} nesta página e {2} de {3} no total.",
    // [Auto-translated] "You have spent {0} of {1} on this page."
    timerLimitPage: "Você gastou {0} de {1} nesta página.",
    // [Auto-translated] "You have spent {0} of {1} in total."
    timerLimitSurvey: "Gastou {0} de {1} no total.",
    // "Clear"
    clearCaption: "Excluir tudo",
    // [Auto-translated] "Select"
    selectCaption: "Selecionar",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Assine aqui",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Sem assinatura",
    // "Select File"
    chooseFileCaption: "Escolher arquivo",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Tirar foto",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Clique no botão abaixo para tirar uma foto usando a câmera.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Arraste e solte ou selecione um arquivo para carregar ou tirar uma foto usando a câmera.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Substituir arquivo",
    // "Remove this file"
    removeFileCaption: "Remover este arquivo",
    // [Auto-translated] "Yes"
    booleanCheckedLabel: "Sim",
    // [Auto-translated] "No"
    booleanUncheckedLabel: "Não",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Tem certeza que deseja remover este arquivo: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Tem certeza que deseja remover todos os arquivos?",
    // [Auto-translated] "Question Title"
    questionTitlePatternText: "Título da pergunta",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Cancelar",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Aplicar",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Digite para pesquisar...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Nenhum dado a ser exibido",
    // [Auto-translated] "Loading..."
    loadingPage: "Carregamento...",
    // [Auto-translated] "Loading..."
    loadingData: "Carregamento...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Ainda não há entradas.\nClique no botão abaixo para adicionar uma nova entrada.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Sem entradas",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Novo Painel",
    // [Auto-translated] "More"
    more: "Mais",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OKEY",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Todas as opções são selecionadas para classificação",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Arraste as opções aqui para classificá-las",
    // [Auto-translated] "OK"
    ok: "OKEY",
    // [Auto-translated] "Cancel"
    cancel: "Cancelar",
    // "Create \"{0}\" item..."
    createCustomItem: 'Criar item "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Índice",
    // [Auto-translated] "Progress bar"
    progressbar: "Barra de progresso"
  };
  surveyCore.setupLocale({ localeCode: "pt-br", strings: portugueseBrSurveyStrings, nativeName: "português brasileiro", englishName: "Brazilian Portuguese" });

  var romanianSurveyStrings = {
    // "Previous"
    pagePrevText: "Precedent",
    // "Next"
    pageNextText: "Următor",
    // "Complete"
    completeText: "Finalizare",
    // "Preview"
    previewText: "previzualizare",
    // "Edit"
    editText: "Editați",
    // "Start"
    startSurveyText: "start",
    // [Auto-translated] "Please leave a comment"
    commentText: "Vă rugăm să lăsați un comentariu",
    // "Other (describe)"
    otherItemText: "Altul(precizaţi)",
    // "None"
    noneItemText: "Nici unul",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Refuză să răspundă",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Nu ştiu",
    // "Select All"
    selectAllItemText: "Selectează tot",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Deselectează tot",
    // "Page {0} of {1}"
    progressText: "Pagina {0} din {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} de {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Înregistrare {0} din {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panou {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Răspunsuri la {0} / {1} întrebări",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Nu sunt întrebări pentru acest chestionar",
    // "Thank you for completing the survey"
    completingSurvey: "Vă mulţumim pentru timpul acordat!",
    // "You have already completed this survey."
    completingSurveyBefore: "Din înregistrările noastre reiese că ați completat deja acest chestionar.",
    // "Loading Survey..."
    loadingSurvey: "Chestionarul se încarcă...",
    // "Select..."
    placeholder: "Alegeţi...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Alege...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Alege...",
    // "value"
    value: "valoare",
    // "Response required."
    requiredError: "Răspunsul la această întrebare este obligatoriu.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Vă rugăm să răspundeți la cel puțin o întrebare.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Toate răspunsurile sunt obligatorii",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Fiecare rând trebuie să aibă o valoare unică.",
    // "The value should be numeric."
    numericError: "Răspunsul trebuie să fie numeric.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Valoarea nu trebuie să fie mai mică de {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Introduceți o valoare care se potrivește cu dimensiunea pasului {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Valoarea nu trebuie să fie mai mare de {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Intrare invalidă",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Numerele nu sunt permise.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Vă rugăm să completați valoarea pentru a corespunde formatului cerut.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Trebuie să introduceți minim {0} caractere.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Trebuie să introduceți maxim {0} caractere.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Trebuie să introduceți mai mult de {0} și mai puțin de {1} caractere.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Trebuie să completați minim {0} rânduri.",
    // "Please select at least {0} option(s)."
    minSelectError: "Trebuie să selectați minim {0} opţiuni.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Trebuie să selectați maxim {0} opţiuni.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1} şî mai mic sau egal cu {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "Răspunsul '{0}' trebuie să fie mai mic sau egal ca {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Trebuie să introduceţi o adresa de email validă.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Expresia: {0} ar trebui să returneze „adevărat”.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Request-ul a returnat eroarea '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Request-ul nu a returnat date sau proprietatea 'path' este incorectă",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Dimensiunea fişierului nu trebuie să depăşească {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Octeți, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Numărul maxim de fișiere pe care le poți încărca este {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: 'Fișierele nu pot fi încărcate. Vă rugăm să adăugați un handler pentru evenimentul "onUploadFiles".',
    // "Response required: enter another value."
    otherRequiredError: "Trebuie să completați câmpul 'Altul'.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Fișierul dumneavoastră este în curs de încărcare. Vă rugăm așteptați câteva secunde și reveniți apoi.",
    // "Loading..."
    loadingFile: "Se încarcă...",
    // "Choose file(s)..."
    chooseFile: "Alege fisierele...",
    // "No file selected"
    noFileChosen: "Niciun fișier ales",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Trageți și plasați un fișier aici sau faceți clic pe butonul de mai jos pentru a selecta un fișier de încărcat.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Sunteți sigur că doriți să ștergeți înregistrarea?",
    // "This value should be unique."
    keyDuplicationError: "Valoarea trebuie să fie unică.",
    // "Add Column"
    addColumn: "Adăugați coloană",
    // "Add Row"
    addRow: "Adăugare rând",
    // "Remove"
    removeRow: "Ștergere",
    // [Auto-translated] "There are no rows."
    noRowsText: "Nu există rânduri.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Rând {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Adăugare",
    // "Remove"
    removePanel: "Ștergere",
    // [Auto-translated] "Show Details"
    showDetails: "Arată detalii",
    // [Auto-translated] "Hide Details"
    hideDetails: "Ascunde detalii",
    // "item"
    choices_Item: "opțiune",
    // [Auto-translated] "Choice option"
    choices_Choice: "Opțiune de alegere",
    // "Column"
    matrix_column: "Coloană",
    // "Row"
    matrix_row: "Rând",
    // [Auto-translated] "text"
    multipletext_itemname: "Text",
    // "The results are being saved on the server..."
    savingData: "Rezultatele sunt în curs de salvare...",
    // "An error occurred and we could not save the results."
    savingDataError: "A intervenit o eroare, rezultatele nu au putut fi salvate.",
    // "The results were saved successfully!"
    savingDataSuccess: "Rezultatele au fost salvate cu succes!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Răspunsul tău depășește 64KB. Vă rugăm să reduceți dimensiunea fișierelor și să încercați din nou sau să contactați proprietarul sondajului.",
    // "Try again"
    saveAgainButton: "Încercați din nou",
    // [Auto-translated] "min"
    timerMin: "min",
    // [Auto-translated] "sec"
    timerSec: "SEC",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Ați petrecut {0} pe această pagină și {1} în total.",
    // "You have spent {0} on this page."
    timerSpentPage: "Ați petrecut {0} pe această pagină.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Ați petrecut {0} în total.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Ați petrecut {0} din {1} pe această pagină și {2} din {3} în total.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Ați petrecut {0} din {1} pe această pagină.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Ați petrecut {0} din {1} în total.",
    // "Clear"
    clearCaption: "clar",
    // [Auto-translated] "Select"
    selectCaption: "Alege",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Semnează aici",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Fără semnătură",
    // "Select File"
    chooseFileCaption: "Alege fișierul",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Faceți o fotografie",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Faceți clic pe butonul de mai jos pentru a face o fotografie folosind camera.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Glisați și fixați sau selectați un fișier pentru a încărca sau a face o fotografie folosind camera.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Înlocuire fișier",
    // "Remove this file"
    removeFileCaption: "Eliminați acest fișier",
    // "Yes"
    booleanCheckedLabel: "da",
    // "No"
    booleanUncheckedLabel: "Nu",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Sigur doriți să eliminați acest fișier: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Sigur doriți să eliminați toate fișierele?",
    // "Question Title"
    questionTitlePatternText: "Titlul intrebarii",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Anula",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Aplica",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Tastați pentru a căuta...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Nu există date de afișat",
    // [Auto-translated] "Loading..."
    loadingPage: "Încărcare...",
    // [Auto-translated] "Loading..."
    loadingData: "Încărcare...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Încă nu există înscrieri.\nFaceți clic pe butonul de mai jos pentru a adăuga o nouă intrare.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Fără intrări",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Panou nou",
    // [Auto-translated] "More"
    more: "Mai mult",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Toate opțiunile sunt selectate pentru clasare",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Trageți opțiunile aici pentru a le clasifica",
    // [Auto-translated] "OK"
    ok: "OK",
    // [Auto-translated] "Cancel"
    cancel: "Anula",
    // "Create \"{0}\" item..."
    createCustomItem: 'Creați un articol "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Cuprins",
    // [Auto-translated] "Progress bar"
    progressbar: "Bara de progres"
  };
  surveyCore.setupLocale({ localeCode: "ro", strings: romanianSurveyStrings, nativeName: "română", englishName: "Romanian" });

  var russianSurveyStrings = {
    // "Previous"
    pagePrevText: "Назад",
    // "Next"
    pageNextText: "Далее",
    // "Complete"
    completeText: "Готово",
    // "Preview"
    previewText: "Предварительный просмотр",
    // "Edit"
    editText: "Редактирование",
    // "Start"
    startSurveyText: "Начать",
    // [Auto-translated] "Please leave a comment"
    commentText: "Пожалуйста, оставьте комментарий",
    // "Other (describe)"
    otherItemText: "Другое (пожалуйста, опишите)",
    // "None"
    noneItemText: "Нет",
    // "Refuse to answer"
    refuseItemText: "Отказываюсь отвечать",
    // "Don't know"
    dontKnowItemText: "Не знаю",
    // "Select All"
    selectAllItemText: "Выбрать всё",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Отмена выбора всех",
    // "Page {0} of {1}"
    progressText: "Страница {0} из {1}",
    // "{0} of {1}"
    indexText: "{0} из {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Запись {0} из {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Панель {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Oтвечено на {0}/{1} вопросов",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Нет ни одного вопроса.",
    // "Thank you for completing the survey"
    completingSurvey: "Благодарим Вас за заполнение анкеты!",
    // "You have already completed this survey."
    completingSurveyBefore: "Вы уже проходили этот опрос.",
    // "Loading Survey..."
    loadingSurvey: "Загрузка с сервера...",
    // "Select..."
    placeholder: "Выбрать...",
    // "Select..."
    ratingOptionsCaption: "Нажмите здесь, чтобы оценить...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Выбирать...",
    // "value"
    value: "значение",
    // "Response required."
    requiredError: "Пожалуйста, ответьте на вопрос.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Пожалуйста, ответьте по крайней мере на один вопрос.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Пожалуйста, ответьте на вопросы в каждой строке.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Каждая строка должна иметь уникальное значение.",
    // "The value should be numeric."
    numericError: "Ответ должен быть числом.",
    // "The value should not be less than {0}"
    minError: "Значение не должно быть меньше {0}.",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Пожалуйста, введите значение, которое соответствует размеру шага {0}.",
    // "The value should not be greater than {0}"
    maxError: "Значение не должно превышать {0}.",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Некорректный вход",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Номера не допускаются.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Пожалуйста, заполните значение, чтобы соответствовать необходимому формату.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Пожалуйста введите больше {0} символов.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Пожалуйста введите меньше {0} символов.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Пожалуйста введите больше {0} и меньше {1} символов.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Пожалуйста, заполните не меньше {0} строк.",
    // "Please select at least {0} option(s)."
    minSelectError: "Пожалуйста, выберите хотя бы {0} вариантов.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Пожалуйста, выберите не более {0} вариантов.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' должно быть не меньше чем {1}, и не больше чем {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' должно быть не меньше чем {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' должно быть не больше чем {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Пожалуйста, введите действительный адрес электронной почты.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Выражение {0} должно возвращать 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Запрос вернул ошибку '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Ответ на запрос пришел пустой или свойство 'path' указано неверно",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Размер файла не должен превышать {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Байты, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Максимальное количество файлов, которые вы можете загрузить, — {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Файлы не могут быть загружены. Пожалуйста, добавьте обработчик для события 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Пожалуйста, введите данные в поле 'Другое'",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Ваш файл загружается. Подождите несколько секунд и попробуйте снова.",
    // "Loading..."
    loadingFile: "Загрузка...",
    // "Choose file(s)..."
    chooseFile: "Выберите файл(ы)...",
    // "No file selected"
    noFileChosen: "Файл не выбран",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Перетащите файл сюда или нажмите кнопку ниже, чтобы загрузить файл.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Вы точно хотите удалить запись?",
    // "This value should be unique."
    keyDuplicationError: "Это значение должно быть уникальным.",
    // "Add Column"
    addColumn: "Добавить колонку",
    // "Add Row"
    addRow: "Добавить строку",
    // "Remove"
    removeRow: "Удалить",
    // "There are no rows."
    noRowsText: "Рядов нет.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Строка {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Добавить новую",
    // "Remove"
    removePanel: "Удалить",
    // [Auto-translated] "Show Details"
    showDetails: "Показать подробности",
    // [Auto-translated] "Hide Details"
    hideDetails: "Скрыть подробности",
    // "item"
    choices_Item: "Вариант",
    // [Auto-translated] "Choice option"
    choices_Choice: "Вариант выбора",
    // "Column"
    matrix_column: "Колонка",
    // "Row"
    matrix_row: "Строка",
    // "text"
    multipletext_itemname: "текст",
    // "The results are being saved on the server..."
    savingData: "Результаты сохраняются на сервер...",
    // "An error occurred and we could not save the results."
    savingDataError: "Произошла ошибка, результат не был сохранён.",
    // "The results were saved successfully!"
    savingDataSuccess: "Результат успешно сохранён!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Ваш ответ превышает 64 КБ. Уменьшите размер файла (файлов) и повторите попытку или обратитесь к владельцу опроса.",
    // "Try again"
    saveAgainButton: "Попробовать снова",
    // "min"
    timerMin: "мин",
    // "sec"
    timerSec: "сек",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Вы потратили {0} на этой странице и {1} всего.",
    // "You have spent {0} on this page."
    timerSpentPage: "Вы потратили {0} на этой странице.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Вы потратили {0} в течение теста.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Вы потратили {0} из {1} на этой странице и {2} из {3} для всего теста.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Вы потратили {0} из {1} на этой странице.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Вы потратили {0} из {1} для всего теста.",
    // "Clear"
    clearCaption: "Очистить",
    // [Auto-translated] "Select"
    selectCaption: "Выбирать",
    // "Sign here"
    signaturePlaceHolder: "Подпишите здесь",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Без подписи",
    // "Select File"
    chooseFileCaption: "Выберите файл",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Сделать фото",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Нажмите кнопку ниже, чтобы сделать снимок с помощью камеры.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Перетащите или выберите файл для загрузки или съемки с помощью камеры.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Заменить файл",
    // "Remove this file"
    removeFileCaption: "Удалить файл",
    // "Yes"
    booleanCheckedLabel: "Да",
    // "No"
    booleanUncheckedLabel: "Нет",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Вы уверены, что хотите удалить этот файл: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Вы уверены, что хотите удалить все файлы?",
    // "Question Title"
    questionTitlePatternText: "Название вопроса",
    // "Cancel"
    modalCancelButtonText: "Отменить",
    // "Apply"
    modalApplyButtonText: "Применять",
    // "Type to search..."
    filterStringPlaceholder: "Введите для поиска...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Нет данных для отображения",
    // [Auto-translated] "Loading..."
    loadingPage: "Загрузка...",
    // [Auto-translated] "Loading..."
    loadingData: "Загрузка...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Пока нет записей.\nНажмите кнопку ниже, чтобы добавить новую запись.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Нет записей",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Новая панель",
    // [Auto-translated] "More"
    more: "Больше",
    // "OK"
    tagboxDoneButtonCaption: "Хорошо",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Все варианты отбираются для ранжирования",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Перетащите варианты сюда для их ранжирования",
    // "OK"
    ok: "Хорошо",
    // [Auto-translated] "Cancel"
    cancel: "Отмена",
    // "Create \"{0}\" item..."
    createCustomItem: 'Создать элемент "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Содержание",
    // [Auto-translated] "Progress bar"
    progressbar: "Индикатор выполнения"
  };
  surveyCore.setupLocale({ localeCode: "ru", strings: russianSurveyStrings, nativeName: "русский", englishName: "Russian" });

  var serbianStrings = {
    // "Previous"
    pagePrevText: "Nazad",
    // "Next"
    pageNextText: "Dalje",
    // "Complete"
    completeText: "Završi",
    // "Preview"
    previewText: "Pregledaj",
    // "Edit"
    editText: "Izmeni",
    // "Start"
    startSurveyText: "Započni",
    // [Auto-translated] "Please leave a comment"
    commentText: "Molimo ostavite komentar",
    // "Other (describe)"
    otherItemText: "Drugo (upiši)",
    // "None"
    noneItemText: "Ništa",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Odbijanje odgovora",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Ne znam",
    // "Select All"
    selectAllItemText: "Izaberi sve",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Poništi izbor svih",
    // "Page {0} of {1}"
    progressText: "Stranica {0} od {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Upis {0} od {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Odgovoreno na {0}/{1} pitanja",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Nema vidljivih stranica ili pitanja u anketi.",
    // "Thank you for completing the survey"
    completingSurvey: "Hvala na popunjavanju ankete!",
    // "You have already completed this survey."
    completingSurveyBefore: "Prema našim podacima, već ste popunili ovu anketu.",
    // "Loading Survey..."
    loadingSurvey: "Učitavam anketu...",
    // "Select..."
    placeholder: "Izaberi...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Izaberite...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Izaberite...",
    // "value"
    value: "vrednost",
    // "Response required."
    requiredError: "Molimo odgovorite na ovo pitanje.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Molimo odgovorite na bar jedno pitanje.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Molimo odgovorite na pitanja u svim redovima.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Svaki red mora imati jedinstvenu vrednost.",
    // "The value should be numeric."
    numericError: "Vrednost bi trebalo da bude numerička.",
    // "The value should not be less than {0}"
    minError: "Vrednost ne bi trebalo da bude manja od {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Unesite vrednost koja odgovara veličini koraka {0}.",
    // "The value should not be greater than {0}"
    maxError: "Vrednost ne bi trebalo da bude veća od {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Neispravan unos",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Brojevi nisu dozvoljeni.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Molimo Vas da popunite vrednost koja odgovara potrebnom formatu.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Molimo unesite bar {0} znak(ov)a.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Molimo unesite najviše {0} znak(ov)a.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Molimo unesite najmanje {0} i ne više od {1} znak(ov)a.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Molimo popunite najmanje {0} red(ova).",
    // "Please select at least {0} option(s)."
    minSelectError: "Molimo izaberite najmanje {0} opcija/e.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Molimo izaberite najviše {0} opcija/e.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' bi trebalo da bude najmanje {1} i najviše {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' bi trebalo da bude najmanje {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' bi trebalo da bude najviše {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Molimo unesite ispravnu e-mail adresu.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Izraz: {0} bi trebalo da bude tačan.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Zahtev je naišao na grešku '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Zahtev nije pronašao podatke, ili je putanja netačna",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Veličina fajla ne bi trebalo da prelazi {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bajtovi, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Maksimalan broj fajlova koje možete da otpremite je {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: 'Nije moguće otpremiti datoteke. Dodajte rukovaoca za događaj "onUploadFiles".',
    // "Response required: enter another value."
    otherRequiredError: "Molimo unesite drugu vrednost.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Fajl se šalje. Molimo sačekajte neko vreme i pokušajte ponovo.",
    // "Loading..."
    loadingFile: "Učitavanje...",
    // "Choose file(s)..."
    chooseFile: "Izaberite fajlove...",
    // "No file selected"
    noFileChosen: "Nije izabran nijedan fajl",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Prevucite i ispustite datoteku ovde ili kliknite na dugme ispod da biste izabrali datoteku za otpremanje.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Da li želite da izbrišete unos?",
    // "This value should be unique."
    keyDuplicationError: "Ova vrednost treba da bude jedinstvena.",
    // "Add Column"
    addColumn: "Dodaj kolonu",
    // "Add Row"
    addRow: "Dodaj red",
    // "Remove"
    removeRow: "Ukloni",
    // "There are no rows."
    noRowsText: "Nema redova.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Red {rovIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Dodaj novo",
    // "Remove"
    removePanel: "Ukloni",
    // [Auto-translated] "Show Details"
    showDetails: "Prikaži detalje",
    // [Auto-translated] "Hide Details"
    hideDetails: "Sakrij detalje",
    // "item"
    choices_Item: "stavka",
    // [Auto-translated] "Choice option"
    choices_Choice: "Opcija izbora",
    // "Column"
    matrix_column: "Kolona",
    // "Row"
    matrix_row: "Red",
    // "text"
    multipletext_itemname: "tekst",
    // "The results are being saved on the server..."
    savingData: "U toku je čuvanje podataka na serveru...",
    // "An error occurred and we could not save the results."
    savingDataError: "Došlo je do greške i rezultati nisu sačuvani.",
    // "The results were saved successfully!"
    savingDataSuccess: "Rezultati su uspešno sačuvani!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Vaš odgovor prelazi 64KB. Smanjite veličinu datoteka/datoteka i pokušajte ponovo ili se obratite vlasniku ankete.",
    // "Try again"
    saveAgainButton: "Pokušajte ponovo",
    // [Auto-translated] "min"
    timerMin: "min",
    // "sec"
    timerSec: "sek",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Proveli ste {0} na ovoj stranici i {1} ukupno.",
    // "You have spent {0} on this page."
    timerSpentPage: "Proveli ste {0} na ovoj stranici.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Proveli ste {0} ukupno.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Proveli ste {0} od {1} na ovoj stranici i {2} od {3} ukupno.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Proveli ste {0} od {1} na ovoj stranici.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Proveli ste {0} od {1} ukupno.",
    // "Clear"
    clearCaption: "Poništi",
    // [Auto-translated] "Select"
    selectCaption: "Izaberite",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Potpišite ovde",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Bez potpisa",
    // "Select File"
    chooseFileCaption: "Izaberi fajl",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Fotografisanje",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Kliknite na dugme ispod da biste snimili fotografiju pomoću fotoaparata.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Prevucite i otpustite ili izaberite datoteku za otpremanje ili snimanje fotografije pomoću fotoaparata.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Zameni datoteku",
    // "Remove this file"
    removeFileCaption: "Ukloni ovaj fajl",
    // "Yes"
    booleanCheckedLabel: "Da",
    // "No"
    booleanUncheckedLabel: "Ne",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Da li ste sigurni da želite da uklonite ovaj fajl: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Da li ste sigurni da želite da uklonite sve fajlove?",
    // "Question Title"
    questionTitlePatternText: "Naslov pitanja",
    // "Cancel"
    modalCancelButtonText: "Otkaži",
    // "Apply"
    modalApplyButtonText: "Primeni",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Otkucajte da biste pretražili...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Nema podataka za prikazivanje",
    // [Auto-translated] "Loading..."
    loadingPage: "Učitavanje...",
    // [Auto-translated] "Loading..."
    loadingData: "Učitavanje...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Još nema unosa.\nKliknite na dugme ispod da biste dodali novi unos.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Nema unosa",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Nova tabla",
    // [Auto-translated] "More"
    more: "Viљe",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "U redu",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Svi izbori su izabrani za rangiranje",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Prevucite izbore ovde da biste ih rangirali",
    // [Auto-translated] "OK"
    ok: "U redu",
    // [Auto-translated] "Cancel"
    cancel: "Otkaži",
    // "Create \"{0}\" item..."
    createCustomItem: 'Kreiraj "{0}" stavku...',
    // [Auto-translated] "Table of contents"
    toc: "Sadržaj",
    // [Auto-translated] "Progress bar"
    progressbar: "Traka napretka"
  };
  surveyCore.setupLocale({ localeCode: "sr", strings: serbianStrings, nativeName: "srpski", englishName: "Serbian" });

  var simplifiedChineseSurveyStrings = {
    // "Previous"
    pagePrevText: "上一页",
    // "Next"
    pageNextText: "下一页",
    // "Complete"
    completeText: "提交问卷",
    // "Preview"
    previewText: "预览",
    // "Edit"
    editText: "编辑",
    // "Start"
    startSurveyText: "开始问卷",
    // [Auto-translated] "Please leave a comment"
    commentText: "请发表评论",
    // "Other (describe)"
    otherItemText: "填写其他答案",
    // "None"
    noneItemText: "无",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "拒绝回答",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "不知道",
    // "Select All"
    selectAllItemText: "选择全部",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "取消全选",
    // "Page {0} of {1}"
    progressText: "第 {0} 页, 共 {1} 页",
    // "{0} of {1}"
    indexText: "第 {0} 页，共 {1} 页",
    // [Auto-translated] "{0} of {1}"
    panelDynamicProgressText: "{0}{1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "面板 {面板索引}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "第 {0}/{1} 题",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "问卷中没有问题或页面",
    // "Thank you for completing the survey"
    completingSurvey: "感谢您的参与!",
    // "You have already completed this survey."
    completingSurveyBefore: "你已完成问卷.",
    // "Loading Survey..."
    loadingSurvey: "问卷正在加载中...",
    // "Select..."
    placeholder: "请选择...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "选择。。。",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "选择。。。",
    // "value"
    value: "值",
    // "Response required."
    requiredError: "请填写此问题",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "至少回答一题.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "请填写所有行中问题",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "每行必须具有唯一值。",
    // "The value should be numeric."
    numericError: "答案必须是个数字",
    // "The value should not be less than {0}"
    minError: "该值不能小于 {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "请输入与{0}步长相匹配的值。",
    // "The value should not be greater than {0}"
    maxError: "该值不能大于 {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "无效输入",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "不允许使用数字。",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "请填写该数值以符合所需格式。",
    // "Please enter at least {0} character(s)."
    textMinLength: "答案长度至少 {0} 个字符",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "答案长度不能超过 {0} 个字符",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "答案长度必须在 {0} - {1} 个字符之间",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "最少需要填写 {0} 行答案",
    // "Please select at least {0} option(s)."
    minSelectError: "最少需要选择 {0} 项答案",
    // "Please select no more than {0} option(s)."
    maxSelectError: "最多只能选择 {0} 项答案",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "答案 '{0}' 必须大于等于 {1} 且小于等于 {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "答案 '{0}' 必须大于等于 {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "答案 '{0}' 必须小于等于 {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "请输入有效的 Email 地址",
    // "The expression: {0} should return 'true'."
    invalidExpression: "公式: {0} 无效.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "载入选项时发生错误 '{0}': {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "未能载入有效的选项或请求参数路径有误",
    // "The file size should not exceed {0}."
    exceedMaxSize: "文件大小不能超过 {0}",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "字节、KB、MB、GB、TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "你最多能上传的文件数量是{0}。",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "无法上传文件。请为“onUploadFiles”事件添加处理程序。",
    // "Response required: enter another value."
    otherRequiredError: "请完成其他问题",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "文件上传中... 请耐心等待几秒后重试",
    // "Loading..."
    loadingFile: "加载...",
    // "Choose file(s)..."
    chooseFile: "选择文件...",
    // "No file selected"
    noFileChosen: "未选择文件",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "将文件拖放到此处或单击下面的按钮选择要上传的文件。",
    // "Are you sure you want to delete this record?"
    confirmDelete: "删除记录?",
    // "This value should be unique."
    keyDuplicationError: "主键不能重复",
    // "Add Column"
    addColumn: "添加列",
    // "Add Row"
    addRow: "添加行",
    // "Remove"
    removeRow: "删除答案",
    // "There are no rows."
    noRowsText: "无内容",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "行 {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "新添",
    // "Remove"
    removePanel: "删除",
    // [Auto-translated] "Show Details"
    showDetails: "显示详细信息",
    // [Auto-translated] "Hide Details"
    hideDetails: "隐藏详细信息",
    // "item"
    choices_Item: "选项",
    // [Auto-translated] "Choice option"
    choices_Choice: "Choice 选项",
    // "Column"
    matrix_column: "列",
    // "Row"
    matrix_row: "行",
    // "text"
    multipletext_itemname: "文本",
    // "The results are being saved on the server..."
    savingData: "正在将结果保存到服务器...",
    // "An error occurred and we could not save the results."
    savingDataError: "在保存结果过程中发生了错误，结果未能保存",
    // "The results were saved successfully!"
    savingDataSuccess: "结果保存成功!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "您的回复超过 64KB。请减小文件的大小，然后重试或联系调查所有者。",
    // "Try again"
    saveAgainButton: "请重试",
    // "min"
    timerMin: "分",
    // "sec"
    timerSec: "秒",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "本页用时 {0} 总计用时{1} .",
    // "You have spent {0} on this page."
    timerSpentPage: "本页用时{0} .",
    // "You have spent {0} in total."
    timerSpentSurvey: "总计用时 {0} .",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "本页用时 {0} 共 {1}， 总计用时 {2} 共 {3} .",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "本页用时 {0} 共 {1} .",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "总计用时 {0} 共 {1}.",
    // "Clear"
    clearCaption: "清除",
    // [Auto-translated] "Select"
    selectCaption: "选择",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "在此签名",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "无签名",
    // "Select File"
    chooseFileCaption: "选择文件",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "拍照",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "单击下面的按钮使用相机拍照。",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "拖放或选择要上传的文件或使用相机拍摄照片。",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "替换文件",
    // "Remove this file"
    removeFileCaption: "移除文件",
    // "Yes"
    booleanCheckedLabel: "是",
    // "No"
    booleanUncheckedLabel: "否",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "删除文件: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "删除所有文件?",
    // "Question Title"
    questionTitlePatternText: "标题",
    // "Cancel"
    modalCancelButtonText: "取消",
    // "Apply"
    modalApplyButtonText: "确定",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "键入以搜索...",
    // [Auto-translated] "No data to display"
    emptyMessage: "没有要显示的数据",
    // [Auto-translated] "Loading..."
    loadingPage: "装载。。。",
    // [Auto-translated] "Loading..."
    loadingData: "装载。。。",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "还没有条目。\n单击下面的按钮添加新条目。",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "暂无条目",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "新面板",
    // [Auto-translated] "More"
    more: "更多",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "还行",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "所有选项均被选中进行排名",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "将选项拖到此处以对其进行排名",
    // [Auto-translated] "OK"
    ok: "还行",
    // [Auto-translated] "Cancel"
    cancel: "取消",
    // "Create \"{0}\" item..."
    createCustomItem: "创建 {0} 项...",
    // [Auto-translated] "Table of contents"
    toc: "目录",
    // [Auto-translated] "Progress bar"
    progressbar: "进度条"
  };
  surveyCore.setupLocale({ localeCode: "zh-cn", strings: simplifiedChineseSurveyStrings, nativeName: "简体中文", englishName: "Simplified Chinese" });

  var slovakSurveyStrings = {
    // "Previous"
    pagePrevText: "Predchádzajúca",
    // "Next"
    pageNextText: "Ďalej",
    // "Complete"
    completeText: "Dokončené",
    // "Preview"
    previewText: "Ukážka",
    // "Edit"
    editText: "Upraviť",
    // "Start"
    startSurveyText: "Spustiť",
    // [Auto-translated] "Please leave a comment"
    commentText: "Zanechajte komentár",
    // "Other (describe)"
    otherItemText: "Iné (opíšte)",
    // "None"
    noneItemText: "Žiadne",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Odmietnuť odpovedať",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Neviem",
    // "Select All"
    selectAllItemText: "Vybrať všetky",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Zrušte výber všetkých",
    // "Page {0} of {1}"
    progressText: "Strana {0} z {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Záznam {0} z {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Zodpovedané otázky {0}/{1}",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "V prieskume nie je žiadna vidieľná stránka ani otázka.",
    // "Thank you for completing the survey"
    completingSurvey: "Ďakujeme vám za dokončenie prieskumu.",
    // "You have already completed this survey."
    completingSurveyBefore: "Podľa našich záznamov ste už tento prieskum dokončili.",
    // "Loading Survey..."
    loadingSurvey: "Načítanie prieskumu...",
    // "Select..."
    placeholder: "Vybrať...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Vybrať...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Vybrať...",
    // "value"
    value: "hodnota",
    // "Response required."
    requiredError: "Požaduje sa odozva.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Požaduje sa odozva: zodpovedajte aspoň jednu otázku.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Požaduje sa odozva: zodpovedajte otázky vo všetkých riadkoch.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Každý riadok musí mať jedinečnú hodnotu.",
    // "The value should be numeric."
    numericError: "Hodnota má byť číselná.",
    // "The value should not be less than {0}"
    minError: "Hodnota nemá byť nižšia než {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Zadajte hodnotu, ktorá zodpovedá veľkosti kroku {0}.",
    // "The value should not be greater than {0}"
    maxError: "Hodnota nemá byť vyššia než {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Neplatný vstup",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Čísla nie sú povolené.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Prosím, vyplňte hodnotu tak, aby zodpovedala požadovanému formátu.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Zadajte aspoň {0} znak(-y/-ov).",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Nezadávajte viac než {0} znak(-y/-ov).",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Zadajte aspoň {0} a nie viac než {1} znaky(-ov).",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Vyplňte aspoň {0} riadok(-y/-ov).",
    // "Please select at least {0} option(s)."
    minSelectError: "Vyberte aspoň {0} variant(-y/-ov).",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Nevyberajte viac než {0} variant(-y/-ov).",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "„{0}“ má byť minimálne {1} a maximálne {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "„{0}“ má byť minimálne {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "„{0}“ má byť maximálne {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Zadajte platnú e-mailovú adresu.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Výraz: {0} má vrátiť hodnotu „true“.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Požiadavky vrátila hodnotu „{0}“. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Požiadavka vrátila prázdne údaje alebo je vlastnosť „cesta“ nesprávna",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Veľkosť súboru nemá prekročiť {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bajty, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Maximálny počet súborov, ktoré môžete nahrať, je {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: 'Súbory nie je možné nahrať. Pridajte obslužný program pre udalosť "onUploadFiles".',
    // "Response required: enter another value."
    otherRequiredError: "Požaduje sa odozva: zadajte inú hodnotu.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Súbor sa odovzdáva. Počkajte niekoľko sekúnd a skúste to znova.",
    // "Loading..."
    loadingFile: "Načítanie...",
    // "Choose file(s)..."
    chooseFile: "Vyberte súbor(-y)...",
    // "No file selected"
    noFileChosen: "Žiadny vybratý súbor",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Presuňte súbor sem alebo kliknite na nasledujúce tlačidlo a načítajte súbor.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Chcete záznam odstrániť?",
    // "This value should be unique."
    keyDuplicationError: "Táto hodnota má byť jedinečná.",
    // "Add Column"
    addColumn: "Pridať stĺpec",
    // "Add Row"
    addRow: "Pridať riadok",
    // "Remove"
    removeRow: "Odstrániť",
    // "There are no rows."
    noRowsText: "K dispozícii nie sú žiadne riadky.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Riadok {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Pridať nové",
    // "Remove"
    removePanel: "Odstrániť",
    // [Auto-translated] "Show Details"
    showDetails: "Zobraziť podrobnosti",
    // [Auto-translated] "Hide Details"
    hideDetails: "Skryť podrobnosti",
    // "item"
    choices_Item: "položka",
    // [Auto-translated] "Choice option"
    choices_Choice: "Možnosť výberu",
    // "Column"
    matrix_column: "Stĺpec",
    // "Row"
    matrix_row: "Riadok",
    // [Auto-translated] "text"
    multipletext_itemname: "Text",
    // "The results are being saved on the server..."
    savingData: "Výsledky sa ukladajú na server...",
    // "An error occurred and we could not save the results."
    savingDataError: "V dôsledku chyby sa nepodarilo výsledky uložiť.",
    // "The results were saved successfully!"
    savingDataSuccess: "Výsledky sa úspešne uložili.",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Vaša odpoveď presahuje 64 kB. Znížte veľkosť svojich súborov a skúste to znova alebo kontaktujte vlastníka prieskumu.",
    // "Try again"
    saveAgainButton: "Skúste to znova",
    // [Auto-translated] "min"
    timerMin: "min",
    // "sec"
    timerSec: "s",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Na tejto stránke ste strávili {0} a celkovo {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "Na tejto stránke ste strávili {0}.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Celkovo ste strávili {0}.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Na tejto stránke ste strávili {0} z {1} a celkovo {2} z {3}.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Na tejto stránke ste strávili {0} z {1}.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Celkovo ste strávili {0} z {1}.",
    // "Clear"
    clearCaption: "Vymazať",
    // [Auto-translated] "Select"
    selectCaption: "Vybrať",
    // "Sign here"
    signaturePlaceHolder: "Podpísať tu",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Bez podpisu",
    // "Select File"
    chooseFileCaption: "Vybrať súbor",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Odfotiť",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Kliknutím na tlačidlo nižšie nasnímate fotografiu pomocou fotoaparátu.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Presuňte myšou alebo vyberte súbor, ktorý chcete nahrať alebo nasnímať fotografiu pomocou fotoaparátu.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Nahradenie súboru",
    // "Remove this file"
    removeFileCaption: "Odstrániť tento súbor",
    // "Yes"
    booleanCheckedLabel: "Áno",
    // "No"
    booleanUncheckedLabel: "Nie",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Naozaj chcete odstrániť tento súbor: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Naozaj chcete odstrániť všetky súbory?",
    // "Question Title"
    questionTitlePatternText: "Titul otázky",
    // "Cancel"
    modalCancelButtonText: "Zrušiť",
    // "Apply"
    modalApplyButtonText: "Použiť",
    // "Type to search..."
    filterStringPlaceholder: "Vyhľadávanie písaním...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Žiadne údaje na zobrazenie",
    // [Auto-translated] "Loading..."
    loadingPage: "Nakladanie...",
    // [Auto-translated] "Loading..."
    loadingData: "Nakladanie...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "K dispozícii ešte nie sú žiadne zadania.\nKliknutím na nasledujúce tlačidlo pridajte nové zadanie.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Žiadne vstupy",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Nový panel",
    // [Auto-translated] "More"
    more: "Viacej",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Všetky možnosti sú vybrané na poradie",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Presunutím možností sem ich zoradíte",
    // [Auto-translated] "OK"
    ok: "OK",
    // [Auto-translated] "Cancel"
    cancel: "Zrušiť",
    // "Create \"{0}\" item..."
    createCustomItem: 'Vytvoriť položku "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Obsah",
    // [Auto-translated] "Progress bar"
    progressbar: "Indikátor priebehu"
  };
  surveyCore.setupLocale({ localeCode: "sk", strings: slovakSurveyStrings, nativeName: "Slovenčina", englishName: "Slovak" });

  var spanishSurveyStrings = {
    // "Previous"
    pagePrevText: "Anterior",
    // "Next"
    pageNextText: "Siguiente",
    // "Complete"
    completeText: "Completar",
    // "Preview"
    previewText: "Vista previa",
    // "Edit"
    editText: "Edita",
    // "Start"
    startSurveyText: "Comienza",
    // [Auto-translated] "Please leave a comment"
    commentText: "Por favor, deja un comentario",
    // "Other (describe)"
    otherItemText: "Otro (describa)",
    // "None"
    noneItemText: "Ninguno",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Negarse a responder",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "No sé",
    // "Select All"
    selectAllItemText: "Seleccionar todo",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Anular la selección de todo",
    // "Page {0} of {1}"
    progressText: "Página {0} de {1}",
    // "{0} of {1}"
    indexText: "{0} de {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Registro {0} de {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Respondió a {0}/{1} preguntas",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "No hay página visible o pregunta en la encuesta.",
    // "Thank you for completing the survey"
    completingSurvey: "¡Gracias por completar la encuesta!",
    // "You have already completed this survey."
    completingSurveyBefore: "Nuestros registros muestran que ya ha completado esta encuesta.",
    // "Loading Survey..."
    loadingSurvey: "La encuesta está cargando...",
    // "Select..."
    placeholder: "Seleccione...",
    // "Select..."
    ratingOptionsCaption: "Toca aquí para calificar...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Escoger...",
    // "value"
    value: "valor",
    // "Response required."
    requiredError: "Por favor conteste la pregunta.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Por favor, responda al menos una pregunta.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Por favor conteste las preguntas en cada hilera.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Cada fila debe tener un valor único.",
    // "The value should be numeric."
    numericError: "La estimación debe ser numérica.",
    // "The value should not be less than {0}"
    minError: "La estimación no debe ser menor que {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Introduzca un valor que coincida con el tamaño del paso de {0}.",
    // "The value should not be greater than {0}"
    maxError: "La estimación no debe ser mayor que {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Entrada inválida",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "No se permiten números.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Por favor, completa el valor para que coincida con el formato requerido.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Por favor entre por lo menos {0} símbolos.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Por favor entre menos de {0} símbolos.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Por favor entre más de {0} y menos de {1} símbolos.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Por favor llene por lo menos {0} hileras.",
    // "Please select at least {0} option(s)."
    minSelectError: "Por favor seleccione por lo menos {0} variantes.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Por favor seleccione no más de {0} variantes.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "El '{0}' debe de ser igual o más de {1} y igual o menos de {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "El '{0}' debe ser igual o más de {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "El '{0}' debe ser igual o menos de {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Por favor agregue un correo electrónico válido.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "La expresión: {0} debería devolver 'verdadero'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "La solicitud regresó error '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "La solicitud regresó vacío de data o la propiedad 'trayectoria' no es correcta",
    // "The file size should not exceed {0}."
    exceedMaxSize: "El tamaño del archivo no debe de exceder {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bytes, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "El número máximo de archivos que puedes subir es {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Los archivos no se pueden cargar. Agregue un controlador para el evento 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Por favor agregue la otra estimación.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Su archivo se está subiendo. Por favor espere unos segundos e intente de nuevo.",
    // "Loading..."
    loadingFile: "Cargando...",
    // "Choose file(s)..."
    chooseFile: "Elija archivo(s)...",
    // "No file selected"
    noFileChosen: "No se ha elegido ningún archivo",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Suelte un archivo aquí o haga clic en el botón de abajo para cargar el archivo",
    // "Are you sure you want to delete this record?"
    confirmDelete: "¿Quieres borrar el registro?",
    // "This value should be unique."
    keyDuplicationError: "Este valor debe ser único.",
    // "Add Column"
    addColumn: "Añadir columna",
    // "Add Row"
    addRow: "Agregue una hilera",
    // "Remove"
    removeRow: "Eliminar una hilera",
    // "There are no rows."
    noRowsText: "No hay hileras.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Fila {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Añadir nuevo",
    // "Remove"
    removePanel: "Retire",
    // [Auto-translated] "Show Details"
    showDetails: "Mostrar detalles",
    // [Auto-translated] "Hide Details"
    hideDetails: "Ocultar detalles",
    // "item"
    choices_Item: "artículo",
    // [Auto-translated] "Choice option"
    choices_Choice: "Opción de elección",
    // "Column"
    matrix_column: "Columna",
    // "Row"
    matrix_row: "Hilera",
    // "text"
    multipletext_itemname: "texto",
    // "The results are being saved on the server..."
    savingData: "Los resultados se están guardando en el servidor...",
    // "An error occurred and we could not save the results."
    savingDataError: "Los resultados se están guardando en el servidor...",
    // "The results were saved successfully!"
    savingDataSuccess: "¡Los resultados se guardaron con éxito!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Su respuesta supera los 64 KB. Reduzca el tamaño de su(s) archivo(s) e inténtelo de nuevo o póngase en contacto con el propietario de la encuesta.",
    // "Try again"
    saveAgainButton: "Inténtalo de nuevo.",
    // [Auto-translated] "min"
    timerMin: "min",
    // [Auto-translated] "sec"
    timerSec: "SEC",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Has gastado {0} en esta página y {1} en total.",
    // "You have spent {0} on this page."
    timerSpentPage: "Usted ha pasado {0} en esta página.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Has gastado en total.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Has gastado {0} de {1} en esta página y {2} de {3} en total.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Has gastado {0} de {1} en esta página.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Usted ha gastado {0} de {1} en total.",
    // "Clear"
    clearCaption: "Borrar",
    // [Auto-translated] "Select"
    selectCaption: "Escoger",
    // "Sign here"
    signaturePlaceHolder: "Firma aqui",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Sin firma",
    // "Select File"
    chooseFileCaption: "Elija el archivo",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Tomar foto",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Haga clic en el botón de abajo para tomar una foto con la cámara.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Arrastre y suelte o seleccione un archivo para cargar o tomar una foto con la cámara.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Reemplazar archivo",
    // "Remove this file"
    removeFileCaption: "Elimina este archivo",
    // "Yes"
    booleanCheckedLabel: "Sí",
    // [Auto-translated] "No"
    booleanUncheckedLabel: "No",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "¿Estás seguro de que quieres eliminar este archivo: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "¿Estás seguro de que quieres eliminar todos los archivos?",
    // "Question Title"
    questionTitlePatternText: "Título de la pregunta",
    // "Cancel"
    modalCancelButtonText: "Anular",
    // "Apply"
    modalApplyButtonText: "Aplicar",
    // "Type to search..."
    filterStringPlaceholder: "Escribe para buscar...",
    // [Auto-translated] "No data to display"
    emptyMessage: "No hay datos para mostrar",
    // [Auto-translated] "Loading..."
    loadingPage: "Carga...",
    // [Auto-translated] "Loading..."
    loadingData: "Carga...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Aún no hay entradas.\nHaga clic en el botón de abajo para agregar una nueva entrada.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "No hay entradas",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Nuevo panel",
    // [Auto-translated] "More"
    more: "Más",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "De acuerdo",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Todas las opciones se seleccionan para la clasificación",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Arrastre las opciones aquí para clasificarlas",
    // [Auto-translated] "OK"
    ok: "De acuerdo",
    // [Auto-translated] "Cancel"
    cancel: "Cancelar",
    // "Create \"{0}\" item..."
    createCustomItem: 'Crear artículo "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Tabla de contenidos",
    // [Auto-translated] "Progress bar"
    progressbar: "Barra de progreso"
  };
  surveyCore.setupLocale({ localeCode: "es", strings: spanishSurveyStrings, nativeName: "español", englishName: "Spanish" });

  var swahiliStrings = {
    // "Previous"
    pagePrevText: "Iliyotangulia",
    // "Next"
    pageNextText: "Ifuatayo",
    // "Complete"
    completeText: "Kamili",
    // "Preview"
    previewText: "Hakiki",
    // "Edit"
    editText: "Hariri",
    // "Start"
    startSurveyText: "Anza",
    // [Auto-translated] "Please leave a comment"
    commentText: "Tafadhali acha maoni",
    // "Other (describe)"
    otherItemText: "Nyingine (eleza)",
    // "None"
    noneItemText: "Hakuna",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Kukataa kujibu",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Sijui",
    // "Select All"
    selectAllItemText: "Chagua Zote",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Delete All",
    // "Page {0} of {1}"
    progressText: "Ukurasa {0} wa {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} ya {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Rekodi {0} ya {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Yaliyojibiwa {0}/{1} maswali",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Hakuna ukurasa unaoonekana au swali katika utafiti.",
    // "Thank you for completing the survey"
    completingSurvey: "Asanti kwa kukamilisha utafiti!",
    // "You have already completed this survey."
    completingSurveyBefore: "Recodi zetu zinatuonyesha tayari umekamilisha utafiti.",
    // "Loading Survey..."
    loadingSurvey: "Tunaandaa utafiti...",
    // "Select..."
    placeholder: "Chagua...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Teua...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Teua...",
    // "value"
    value: "thamani",
    // "Response required."
    requiredError: "Tafadhali jibu hili swali.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Tafadhali jibu swali angalau moja.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Tafadhali jibu maswali katika safu zote.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Kila safu lazima iwe na thamani ya kipekee.",
    // "The value should be numeric."
    numericError: "Thamani inapaswa kuwa ya nambari.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Thamani haipaswi kuwa chini ya {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Tafadhali ingiza thamani inayolingana na saizi ya hatua ya {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Thamani haipaswi kuwa kubwa kuliko {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Ingizo batili",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Hesabu haziruhusiwi.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Tafadhali kamilisha thamani ili kuendana na umbizo linalohitajika.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Tafadhali ingiza angalau{0} husika.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Tafadhali ingiza isiozidi {0} husika.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Tafadhali ingiza kiwango zaidi ya {0} na kisichopungua {1} husika.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Tafadhali jaza isiopungua {0} safu.",
    // "Please select at least {0} option(s)."
    minSelectError: "Tafadhali chagua angalau {0} lahaja.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Tafadhali changua isiozidi {0} lahaja.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: " '{0}' inapaswa kuwa sawa au zaidi ya {1} na sawa au chini ya {2}",
    // "The '{0}' should be at least {1}"
    numericMin: " '{0}'inapaswa kuwa sawa au zaidi ya {1}",
    // "The '{0}' should be at most {1}"
    numericMax: " '{0}'inapaswa kuwa sawa au chini ya {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Tafadhali ingiza anwani halali ya barua-pepe.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Usemi:{0} inapaswa kurudi 'kweli'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Ombi lina kosa '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Ombi lilirudisha data tupu au the 'path' mali ya njia sio sahihi",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Saizi ya faili haipaswi kuzidi {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bytes, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Idadi ya juu ya faili unazoweza kupakia ni {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Faili haziwezi kupakiwa. Tafadhali ongeza kishiko kwa tukio la 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Tafadhali ingiza thamani nyingine.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Faili yako inapakia.Tafadhali subiri sekunde kadhaa na ujaribu tena.",
    // "Loading..."
    loadingFile: "Inapakia...",
    // "Choose file(s)..."
    chooseFile: "Chagua faili...",
    // "No file selected"
    noFileChosen: "Hujachagua faili",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Buruta na udondoshe faili hapa au bonyeza kitufe kilicho hapa chini ili kuchagua faili ya kupakia.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Je! Unataka kufuta rekodi?",
    // "This value should be unique."
    keyDuplicationError: "Thamani hii inapaswa kuwa ya kipekee.",
    // "Add Column"
    addColumn: "Ongeza Kolamu",
    // "Add Row"
    addRow: "Ongeza safu",
    // "Remove"
    removeRow: "Toa",
    // [Auto-translated] "There are no rows."
    noRowsText: "Hakuna safu.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Safu {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Ongeza mpya",
    // "Remove"
    removePanel: "Toa",
    // [Auto-translated] "Show Details"
    showDetails: "Onyesha Maelezo",
    // [Auto-translated] "Hide Details"
    hideDetails: "Ficha Maelezo",
    // "item"
    choices_Item: "kitu",
    // [Auto-translated] "Choice option"
    choices_Choice: "Chaguo la uchaguzi",
    // "Column"
    matrix_column: "Kolamu",
    // "Row"
    matrix_row: "Safu",
    // [Auto-translated] "text"
    multipletext_itemname: "Ujumbe",
    // "The results are being saved on the server..."
    savingData: "Matokeo yamehifadhiwa kwa seva...",
    // "An error occurred and we could not save the results."
    savingDataError: "Kosa limetokea na hatukuweza kuhifadhi matokeo.",
    // "The results were saved successfully!"
    savingDataSuccess: "Matokeo yamehifadhiwa!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Jibu lako linazidi 64KB. Tafadhali punguza saizi ya faili zako na ujaribu tena au wasiliana na mmiliki wa utafiti.",
    // "Try again"
    saveAgainButton: "Jaribu tena",
    // "min"
    timerMin: "dakika",
    // "sec"
    timerSec: "sekunde",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Umetumia {0} kwenye ukurasa huu na {1} kwa jumla.",
    // "You have spent {0} on this page."
    timerSpentPage: "Umetumia {0} kwenye ukurasa huu.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Umetumia {0} kwa jumla.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Umetumia {0} ya {1} kwenye ukurasa huu {2} wa {3} kwa jumla.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Umetumia {0} ya {1} kwenye ukurasa huu.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Umetumia {0} ya {1} kwa jumla.",
    // "Clear"
    clearCaption: "Ondoa",
    // [Auto-translated] "Select"
    selectCaption: "Teua",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Ingia hapa",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Hakuna saini",
    // "Select File"
    chooseFileCaption: "Chagua faili",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Chukua Picha",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Bonyeza kitufe hapa chini ili kupiga picha kwa kutumia kamera.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Drag na kuacha au kuchagua faili kupakia au kuchukua picha kwa kutumia kamera.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Badilisha faili",
    // "Remove this file"
    removeFileCaption: "Ondoa faili",
    // "Yes"
    booleanCheckedLabel: "Ndio",
    // "No"
    booleanUncheckedLabel: "Hapana",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Je! Una uhakika kuwa unataka kuondoa faili hii: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Je! Una uhakika kuwa unataka kuondoa faili zote?",
    // "Question Title"
    questionTitlePatternText: "Kichwa cha Swali",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Katisha",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Tekeleza",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Andika ili kutafuta...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Hakuna data ya kuonyesha",
    // [Auto-translated] "Loading..."
    loadingPage: "Kupakia...",
    // [Auto-translated] "Loading..."
    loadingData: "Kupakia...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Bado hakuna maingizo makubwa.\nBofya kitufe kilicho hapa chini ili kuongeza ingizo jipya.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Hakuna maingizo",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Jopo Jipya",
    // [Auto-translated] "More"
    more: "Zaidi",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "Sawa kabisa",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Chaguo zote huchaguliwa kwa cheo",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Buruta chaguzi hapa ili kuziorodhesha",
    // [Auto-translated] "OK"
    ok: "Sawa kabisa",
    // [Auto-translated] "Cancel"
    cancel: "Katisha",
    // "Create \"{0}\" item..."
    createCustomItem: 'Unda kipengee cha "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Jedwali la yaliyomo",
    // [Auto-translated] "Progress bar"
    progressbar: "Upau wa maendeleo"
  };
  surveyCore.setupLocale({ localeCode: "sw", strings: swahiliStrings, nativeName: "swahili", englishName: "Swahili" });

  var swedishSurveyStrings = {
    // "Previous"
    pagePrevText: "Föregående",
    // "Next"
    pageNextText: "Nästa",
    // "Complete"
    completeText: "Slutför",
    // "Preview"
    previewText: "Förhandsvisning",
    // "Edit"
    editText: "Redigera",
    // "Start"
    startSurveyText: "Börja",
    // [Auto-translated] "Please leave a comment"
    commentText: "Lämna gärna en kommentar",
    // "Other (describe)"
    otherItemText: "Annat (beskriv)",
    // "None"
    noneItemText: "Ingen",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Vägra svara",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Vet inte",
    // "Select All"
    selectAllItemText: "Välj alla",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Avmarkera alla",
    // "Page {0} of {1}"
    progressText: "Sida {0} av {1}",
    // "{0} of {1}"
    indexText: "{0} av {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "{0} av {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "{0} / {1} frågor besvarade",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Det finns ingen synlig sida eller fråga i enkäten.",
    // "Thank you for completing the survey"
    completingSurvey: "Tack för att du genomfört enkäten!!",
    // "You have already completed this survey."
    completingSurveyBefore: "Våra register visar att du redan har slutfört denna undersökning.",
    // "Loading Survey..."
    loadingSurvey: "Enkäten laddas...",
    // "Select..."
    placeholder: "Välj...",
    // "Select..."
    ratingOptionsCaption: "Tryck här för att betygsätta...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Utvald...",
    // "value"
    value: "värde",
    // "Response required."
    requiredError: "Frågan är obligatorisk.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Vänligen svara på minst en fråga.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Var vänlig besvara frågorna på alla rader.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Varje rad måste ha ett unikt värde.",
    // "The value should be numeric."
    numericError: "Värdet ska vara numeriskt.",
    // "The value should not be less than {0}"
    minError: "Värdet får inte vara mindre än {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Ange ett värde som matchar stegstorleken för {0}.",
    // "The value should not be greater than {0}"
    maxError: "Värdet får inte vara större än {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Ogiltig indata",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Nummer är inte tillåtna.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Vänligen fyll i värdet för att matcha det önskade formatet.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Ange minst {0} tecken.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Ange färre än {0} tecken.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Ange mer än {0} och färre än {1} tecken.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Var vänlig fyll i minst {0} rader.",
    // "Please select at least {0} option(s)."
    minSelectError: "Var vänlig välj åtminstone {0} varianter.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Var vänlig välj inte fler än {0} varianter.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' ska vara lika med eller mer än {1} samt lika med eller mindre än {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' ska vara lika med eller mer än {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' ska vara lika med eller mindre än {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Var vänlig ange en korrekt e-postadress.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Uttrycket: {0} ska returnera 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Förfrågan returnerade felet '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Antingen returnerade förfrågan ingen data eller så är egenskapen 'path' inte korrekt",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Filstorleken får ej överstiga {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bytes, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Det maximala antalet filer du kan ladda upp är {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Filer kan inte laddas upp. Lägg till en hanterare för händelsen 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Var vänlig ange det andra värdet.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Din fil laddas upp. Var vänlig vänta några sekunder och försök sedan igen.",
    // "Loading..."
    loadingFile: "Laddar...",
    // "Choose file(s)..."
    chooseFile: "Välj fil(er) ...",
    // "No file selected"
    noFileChosen: "Ingen fil vald",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Dra och släpp en fil här eller klicka på knappen nedan för att välja en fil att ladda upp.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Vill du radera posten?",
    // "This value should be unique."
    keyDuplicationError: "Detta värde ska vara unikt.",
    // "Add Column"
    addColumn: "Lägg till kolumn",
    // "Add Row"
    addRow: "Lägg till rad",
    // "Remove"
    removeRow: "Ta bort",
    // [Auto-translated] "There are no rows."
    noRowsText: "Det finns inga rader.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Rad {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Lägg till ny",
    // "Remove"
    removePanel: "Ta bort",
    // [Auto-translated] "Show Details"
    showDetails: "Detaljer",
    // [Auto-translated] "Hide Details"
    hideDetails: "Göm detaljer",
    // "item"
    choices_Item: "Artikel",
    // [Auto-translated] "Choice option"
    choices_Choice: "Alternativ för valmöjligheter",
    // "Column"
    matrix_column: "Kolumn",
    // "Row"
    matrix_row: "Rad",
    // [Auto-translated] "text"
    multipletext_itemname: "Text",
    // "The results are being saved on the server..."
    savingData: "Resultaten sparas på servern ...",
    // "An error occurred and we could not save the results."
    savingDataError: "Ett fel inträffade och vi kunde inte spara resultaten.",
    // "The results were saved successfully!"
    savingDataSuccess: "Resultaten lyckades sparas!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Ditt svar överstiger 64 kB. Minska storleken på dina filer och försök igen eller kontakta undersökningens ägare.",
    // "Try again"
    saveAgainButton: "Försök igen",
    // [Auto-translated] "min"
    timerMin: "Min",
    // "sec"
    timerSec: "sek",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Du har spenderat {0} på den här sidan och {1} totalt.",
    // "You have spent {0} on this page."
    timerSpentPage: "Du har spenderat {0} på den här sidan.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Du har spenderat {0} totalt.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Du har spenderat {0} av {1} på den här sidan och {2} av {3} totalt.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Du har spenderat {0} av {1} på den här sidan.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Du har spenderat {0} av {1} totalt.",
    // "Clear"
    clearCaption: "Klar",
    // [Auto-translated] "Select"
    selectCaption: "Utvald",
    // "Sign here"
    signaturePlaceHolder: "Signera här",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Ingen signatur",
    // "Select File"
    chooseFileCaption: "Välj fil",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Ta foto",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Klicka på knappen nedan för att ta ett foto med kameran.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Dra och släpp eller välj en fil att ladda upp eller ta ett foto med kameran.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Ersätt fil",
    // "Remove this file"
    removeFileCaption: "Ta bort den här filen",
    // "Yes"
    booleanCheckedLabel: "Ja",
    // "No"
    booleanUncheckedLabel: "Nej",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Är du säker på att du vill ta bort den här filen: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Är du säker på att du vill ta bort alla filer?",
    // "Question Title"
    questionTitlePatternText: "Frågetitel",
    // "Cancel"
    modalCancelButtonText: "Avbryt",
    // "Apply"
    modalApplyButtonText: "Spara",
    // "Type to search..."
    filterStringPlaceholder: "Skriv för att söka...",
    // "No data to display"
    emptyMessage: "Ingen data finns",
    // [Auto-translated] "Loading..."
    loadingPage: "Lastning...",
    // [Auto-translated] "Loading..."
    loadingData: "Lastning...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Det finns inga värden än.\nKlicka på knappen nedan för att lägga till nytt värde.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Inga anmälningar",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Ny panel",
    // "More"
    more: "Mer",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OKEJ",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Alla val väljs ut för rankning",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Dra valen hit för att rangordna dem",
    // [Auto-translated] "OK"
    ok: "OKEJ",
    // [Auto-translated] "Cancel"
    cancel: "Annullera",
    // "Create \"{0}\" item..."
    createCustomItem: 'Skapa "{0}"-objekt...',
    // [Auto-translated] "Table of contents"
    toc: "Innehållsförteckning",
    // [Auto-translated] "Progress bar"
    progressbar: "Förloppsindikator"
  };
  surveyCore.setupLocale({ localeCode: "sv", strings: swedishSurveyStrings, nativeName: "svenska", englishName: "Swedish" });

  var tajikSurveyStrings = {
    pagePrevText: "Бозгашт",
    pageNextText: "Оянда",
    completeText: "Иҷро шуд",
    // previewText: "Preview",
    // editText: "Edit",
    startSurveyText: "Оғоз",
    otherItemText: "Дигар (лутфан тавсиф кунед)",
    noneItemText: "Не",
    selectAllItemText: "Ҳамаро интихоб кардан",
    progressText: "Саҳифаи {0} аз {1}",
    // indexText: "{0} of {1}",
    // panelDynamicProgressText: "{0} of {1}",
    // questionsProgressText: "Answered {0}/{1} questions",
    emptySurvey: "Ягон савол вуҷуд надорад.",
    completingSurvey: "Ташаккур барои пур кардани саволнома!",
    completingSurveyBefore: "Шумо аллакай ин пурсишро анҷом додаед.",
    loadingSurvey: "Боргирӣ аз сервер...",
    placeholder: "Интихоб кардан...",
    // ratingOptionsCaption: "Select...",
    value: "қиммат",
    requiredError: "Илтимос, ба савол ҷавоб диҳед.",
    requiredErrorInPanel: "Илтимос, ақалан ба як савол ҷавоб диҳед.",
    requiredInAllRowsError: "Илтимос, ба ҳамаи саволҳо дар ҳамаи сатрҳо ҷавоб диҳед.",
    numericError: "Ҷавоб бояд рақам бошад.",
    // minError: "The value should not be less than {0}",
    // maxError: "The value should not be greater than {0}",
    textMinLength: "Илтимос, аз {0} зиёдтар рамз ворид кунед.",
    textMaxLength: "Илтимос, аз {0} камтар рамз ворид кунед.",
    textMinMaxLength: "Илтимос, аз {0} зиёдтар ва аз {1} камтар рамз ворид кунед.",
    minRowCountError: "Илтимос, на камтар аз {0} сатр пур кунед.",
    minSelectError: "Илтимос, ақалан {0} вариант интихоб кунед.",
    maxSelectError: "Илтимос, на зиёдтар аз {0} вариант интихоб кунед.",
    numericMinMax: "'{0}' бояд на кам аз {1} ва на бисёр аз {2} бошад",
    numericMin: "'{0}' бояд на кам аз {1} бошад",
    numericMax: "'{0}' бояд на зиёд аз {1} бошад",
    invalidEmail: "Илтимос, почтаи электронии воқеиро ворид кунед.",
    invalidExpression: "Ифодаи {0} бояд 'true' баргардонад.",
    urlRequestError: "Дархост хатогӣ бозгардонд '{0}'. {1}",
    urlGetChoicesError: "Ҷавоб ба дархост холӣ омад ё хосияти 'path' нодуруст муайян карда шудааст",
    exceedMaxSize: "Андозаи файл бояд на калон аз {0} бошад.",
    otherRequiredError: "Илтимос, ба майдони 'Дигар' додаҳоро ворид кунед",
    uploadingFile: "Файли шумо бор шуда истодааст. Якчанд сония интизор шавед ва бори дигар кӯшиш кунед.",
    loadingFile: "Боркунӣ...",
    chooseFile: "Файл(ҳо)-ро интихоб кунед...",
    // noFileChosen: "No file chosen",
    // filePlaceholder: "Drop a file here or click the button below to load the file.",
    confirmDelete: "Шумо мутмаин ҳастед, ки мехоҳед воридро тоза кунед?",
    keyDuplicationError: "Ин арзиш бояд беназир бошад.",
    addColumn: "Иловаи сутун",
    addRow: "Иловаи сатр",
    removeRow: "Нест кардан",
    // noRowsText: "There are no rows.",
    addPanel: "Илова кардан",
    removePanel: "Нест кардан",
    choices_Item: "Вариант",
    matrix_column: "Сутун",
    matrix_row: "Сатр",
    // multipletext_itemname: "text",
    savingData: "Натиҷа ба сервер сабт шуда истодаанд...",
    savingDataError: "Хатогӣ ба амал омад, натиҷа сабт нашуд.",
    savingDataSuccess: "Натиҷа бомуваффакият сабт шуд!",
    saveAgainButton: "Бори дигар кӯшиш карданд",
    timerMin: "дақ",
    timerSec: "сон",
    timerSpentAll: "Шумо {0} дар ин саҳифа ва {1} дар умум сарф кардед.",
    timerSpentPage: "Шумо {0} дар ин саҳифа сарф кардед.",
    timerSpentSurvey: "Шумо {0} дар ин тест сарф намудед.",
    timerLimitAll: "Шумо {0} аз {1} дар ин саҳифа ва {2} аз {3} дар умум сарф кардед дар дохили ин тест.",
    timerLimitPage: "Шумо {0} аз {1} дар ин саҳифа сарф кардед.",
    timerLimitSurvey: "Шумо {0} аз {1} дар ҳамаи тест сарф кардед.",
    clearCaption: "Тоза кардан",
    // signaturePlaceHolder: "Sign here",
    // chooseFileCaption: "Choose file",
    removeFileCaption: "Файлро нест кардан"
    // booleanCheckedLabel: "Yes",
    // booleanUncheckedLabel: "No",
    // confirmRemoveFile: "Are you sure that you want to remove this file: {0}?",
    // confirmRemoveAllFiles: "Are you sure that you want to remove all files?",
    // questionTitlePatternText: "Question Title",
    // modalCancelButtonText: "Cancel",
    // modalApplyButtonText: "Apply",
    // filterStringPlaceholder: "Type to search...",
    // emptyMessage: "No data to display",
    // noEntriesText: "There are no entries yet.\nClick the button below to add a new entry.",
    // more: "More"
  };
  surveyCore.setupLocale({ localeCode: "tg", strings: tajikSurveyStrings, nativeName: "тоҷикӣ", englishName: "Tajik" });

  var thaiStrings = {
    // "Previous"
    pagePrevText: "ก่อนหน้า",
    // "Next"
    pageNextText: "ถัดไป",
    // "Complete"
    completeText: "สำเร็จ",
    // "Preview"
    previewText: "ดูตัวอย่าง",
    // "Edit"
    editText: "แก้ไข",
    // "Start"
    startSurveyText: "เริ่ม",
    // [Auto-translated] "Please leave a comment"
    commentText: "กรุณาแสดงความคิดเห็น",
    // "Other (describe)"
    otherItemText: "อื่นๆ (โปรดระบุ)",
    // "None"
    noneItemText: "ไม่มี",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "ปฏิเสธที่จะตอบ",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "ไม่ทราบ",
    // "Select All"
    selectAllItemText: "เลือกทั้งหมด",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "ยกเลิกการเลือกทั้งหมด",
    // "Page {0} of {1}"
    progressText: "หน้าที่ {0} จาก {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} of {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "รายการที่ {0} จาก {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "แผง {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "คำตอบที่ {0}/{1} จำนวนคำถาม",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "ไม่มีหน้าเพจที่มองเห็น หรือ คำถามใน survey นี้",
    // "Thank you for completing the survey"
    completingSurvey: "ขอบคุณที่ทำ survey จนเสร็จ",
    // "You have already completed this survey."
    completingSurveyBefore: "รายการของเราแสดงว่าคุณได้ทำ survey เสร็จเรียบร้อยแล้ว",
    // "Loading Survey..."
    loadingSurvey: "กำลังโหลด Survey...",
    // "Select..."
    placeholder: "เลือก...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "เลือก   ",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "เลือก   ",
    // "value"
    value: "ข้อมูล",
    // "Response required."
    requiredError: "กรุณาตอบคำถาม",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "กรุณาตอบขั้นต่ำหนึ่งคำถาม",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "กรุณาตอบคำถามในทุกๆแถว",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "แต่ละแถวต้องมีค่าที่ไม่ซ้ํากัน",
    // "The value should be numeric."
    numericError: "ข้อมูลที่ใส่ต้องเป็นตัวเลข",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "ค่าไม่ควรน้อยกว่า {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "โปรดป้อนค่าที่ตรงกับขนาดขั้นตอนของ {0}",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "ค่าไม่ควรเกิน{0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "อินพุตไม่ถูกต้อง",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "ไม่อนุญาตให้ใช้หมายเลข",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "โปรดกรอกค่าให้ตรงกับรูปแบบที่ต้องการ",
    // "Please enter at least {0} character(s)."
    textMinLength: "กรุณาใส่ขั้นต่ำจำนวน {0} ตัวอักษร",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "กรุณาใส่ไม่เกินจำนวน {0} ตัวอักษร",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "กรุณาใส่ขั้นต่ำจำนวน {0} และไม่เกินจำนวน {1} ตัวอักษร",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "กรุณาใส่ขั้นต่ำจำนวน {0} แถว",
    // "Please select at least {0} option(s)."
    minSelectError: "กรุณาเลือกอย่างน้อย {0} รายการ",
    // "Please select no more than {0} option(s)."
    maxSelectError: "กรุณาเลือกไม่เกิน {0} รายการ",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' ต้องมากกว่าหรือเท่ากับ {1} และน้อยกว่าหรือเท่ากับ {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' ต้องมากกว่าหรือเท่ากับ {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' น้อยกว่าหรือเท่ากับ {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "กรุณาใส่อีเมล์แอดเดรสที่ถูกต้อง",
    // "The expression: {0} should return 'true'."
    invalidExpression: "The expression: {0} ต้องรีเทิร์น 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "รีเควสรีเทิร์น error '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "รีเควสรีเทิร์นข้อมูลว่างเปล่า หรือ 'path' property ไม่ถูกต้อง",
    // "The file size should not exceed {0}."
    exceedMaxSize: "ขนาดไฟล์ต้องไม่เกิน {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "ไบต์, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "จํานวนไฟล์สูงสุดที่คุณสามารถอัปโหลดได้คือ {0}",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "ไม่สามารถอัปโหลดไฟล์ได้ โปรดเพิ่มตัวจัดการสําหรับเหตุการณ์ 'onUploadFiles'",
    // "Response required: enter another value."
    otherRequiredError: "กรุณาใส่ค่าอื่น",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "ไฟล์ของคุณกำลังอัพโหลดอยู่. กรุณารอสักครู่แล้วทำการลองอีกครั้ง",
    // "Loading..."
    loadingFile: "กำลังโหลด...",
    // "Choose file(s)..."
    chooseFile: "เลือกไฟล์...",
    // "No file selected"
    noFileChosen: "ไม่ไฟล์ที่เลือก",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "ลากและวางไฟล์ที่นี่หรือคลิกปุ่มด้านล่างเพื่อเลือกไฟล์ที่จะอัปโหลด",
    // "Are you sure you want to delete this record?"
    confirmDelete: "คุณต้องการลบรายการนี้จริงหรือไม่?",
    // "This value should be unique."
    keyDuplicationError: "ข้อมูลนี้ต้องเป็น unique.",
    // "Add Column"
    addColumn: "เพิ่มคอลัมน์",
    // "Add Row"
    addRow: "เพิ่มแถว",
    // "Remove"
    removeRow: "ลบ",
    // [Auto-translated] "There are no rows."
    noRowsText: "ไม่มีแถว",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "แถว {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{แถวชื่อ}",
    // "Add new"
    addPanel: "เพิ่ม",
    // "Remove"
    removePanel: "ลบ",
    // [Auto-translated] "Show Details"
    showDetails: "แสดงรายละเอียด",
    // [Auto-translated] "Hide Details"
    hideDetails: "ซ่อนรายละเอียด",
    // "item"
    choices_Item: "ชิ้น",
    // [Auto-translated] "Choice option"
    choices_Choice: "ตัวเลือกตัวเลือก",
    // "Column"
    matrix_column: "คอลัมน์",
    // "Row"
    matrix_row: "แถว",
    // [Auto-translated] "text"
    multipletext_itemname: "ข้อความ",
    // "The results are being saved on the server..."
    savingData: "ผลลัพท์กำลังบันทึกลงที่เซิร์ฟเวอร์...",
    // "An error occurred and we could not save the results."
    savingDataError: "มีความผิดพลาดเกิดขึ้นส่งผลให้ไม่สามารถบันทึกผลได้",
    // "The results were saved successfully!"
    savingDataSuccess: "บันทึกสำเร็จแล้ว",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "คําตอบของคุณเกิน 64KB โปรดลดขนาดไฟล์ของคุณแล้วลองอีกครั้งหรือติดต่อเจ้าของแบบสํารวจ",
    // "Try again"
    saveAgainButton: "รบกวนลองอีกครั้ง",
    // "min"
    timerMin: "นาที",
    // "sec"
    timerSec: "วินาที",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "คุณใช้เวลา {0} บนหน้านี้และ {1} รวมทั้งหมด",
    // "You have spent {0} on this page."
    timerSpentPage: "คุณใช้เวลา {0} บนหน้านี้",
    // "You have spent {0} in total."
    timerSpentSurvey: "คุณใช้เวลา {0} รวมทั้งหมด",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "คุณใช้เวลา {0} ของ {1} บนหน้านี้และ {2} ของ {3} รวมทั้งหมด",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "คุณใช้เวลา {0} ของ {1} บนหน้านี้",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "คุณใช้เวลา {0} ของ {1} รวมทั้งหมด",
    // "Clear"
    clearCaption: "เคลียร์",
    // [Auto-translated] "Select"
    selectCaption: "เลือก",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "ลงชื่อที่นี่",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "ไม่มีลายเซ็น",
    // "Select File"
    chooseFileCaption: "เลือกไฟล์",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "ถ่ายรูป",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "คลิกปุ่มด้านล่างเพื่อถ่ายภาพโดยใช้กล้อง",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "ลากและวางหรือเลือกไฟล์ที่จะอัปโหลดหรือถ่ายภาพโดยใช้กล้อง",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "แทนที่ไฟล์",
    // "Remove this file"
    removeFileCaption: "นำไฟล์นี้ออก",
    // "Yes"
    booleanCheckedLabel: "ใช่",
    // "No"
    booleanUncheckedLabel: "ไม่ใช่",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "คุณแน่ใจที่จะนำไฟล์นี้ออกใช่หรือไม่: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "คุณแน่ใจที่จะนำไฟล์ทั้งหมดออกใช่หรือไม่",
    // "Question Title"
    questionTitlePatternText: "ชื่อคำถาม",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "ยกเลิก",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "ใช้",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "พิมพ์เพื่อค้นหา...",
    // [Auto-translated] "No data to display"
    emptyMessage: "ไม่มีข้อมูลที่จะแสดง",
    // [Auto-translated] "Loading..."
    loadingPage: "การโหลด   ",
    // [Auto-translated] "Loading..."
    loadingData: "การโหลด   ",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "ยังไม่มีรายการ\nคลิกปุ่มด้านล่างเพื่อเพิ่มรายการใหม่",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "ไม่มีรายการ",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "แผงใหม่",
    // [Auto-translated] "More"
    more: "อีก",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "ตกลง, ได้",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "ตัวเลือกทั้งหมดถูกเลือกสําหรับการจัดอันดับ",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "ลากตัวเลือกที่นี่เพื่อจัดอันดับ",
    // [Auto-translated] "OK"
    ok: "ตกลง, ได้",
    // [Auto-translated] "Cancel"
    cancel: "ยกเลิก",
    // "Create \"{0}\" item..."
    createCustomItem: 'สร้างรายการ "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "สารบัญ",
    // [Auto-translated] "Progress bar"
    progressbar: "แถบความคืบหน้า"
  };
  surveyCore.setupLocale({ localeCode: "th", strings: thaiStrings, nativeName: "ไทย", englishName: "Thai" });

  var traditionalChineseSurveyStrings = {
    // "Previous"
    pagePrevText: "上一頁",
    // "Next"
    pageNextText: "下一頁",
    // "Complete"
    completeText: "提交問卷",
    // [Auto-translated] "Preview"
    previewText: "預覽",
    // [Auto-translated] "Edit"
    editText: "編輯",
    // [Auto-translated] "Start"
    startSurveyText: "開始",
    // [Auto-translated] "Please leave a comment"
    commentText: "請發表評論",
    // "Other (describe)"
    otherItemText: "填寫其他答案",
    // [Auto-translated] "None"
    noneItemText: "沒有",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "拒絕回答",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "不知道",
    // [Auto-translated] "Select All"
    selectAllItemText: "全選",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "取消全選",
    // "Page {0} of {1}"
    progressText: "第 {0} 頁, 共 {1} 頁",
    // [Auto-translated] "{0} of {1}"
    indexText: "{1}{0}",
    // [Auto-translated] "{0} of {1}"
    panelDynamicProgressText: "{1}{0}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "面板 {面板索引}",
    // [Auto-translated] "Answered {0}/{1} questions"
    questionsProgressText: "回答了{0}/{1}問題",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "問卷中沒有問題或頁面",
    // "Thank you for completing the survey"
    completingSurvey: "感謝您的參與!",
    // [Auto-translated] "You have already completed this survey."
    completingSurveyBefore: "您已經完成了此調查。",
    // "Loading Survey..."
    loadingSurvey: "問卷載入中...",
    // "Select..."
    placeholder: "請選擇...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "選擇。。。",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "選擇。。。",
    // [Auto-translated] "value"
    value: "價值",
    // "Response required."
    requiredError: "請填寫此問題",
    // [Auto-translated] "Response required: answer at least one question."
    requiredErrorInPanel: "需要回答：至少回答一個問題。",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "請填寫所有行中問題",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "每行必須具有唯一值。",
    // "The value should be numeric."
    numericError: "答案必須是個數字",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "該值不應小於 {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "請輸入與步長相符的值{0}。",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "該值不應大於 {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "無效輸入",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "不允許使用數位。",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "請填寫該數值以符合所需格式。",
    // "Please enter at least {0} character(s)."
    textMinLength: "答案長度至少 {0} 個字元",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "答案長度不能超過 {0} 個字元",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "答案長度必須在 {0} - {1} 個字元之間",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "最少需要填寫 {0} 行答案",
    // "Please select at least {0} option(s)."
    minSelectError: "最少需要選擇 {0} 項答案",
    // "Please select no more than {0} option(s)."
    maxSelectError: "最多只能選擇 {0} 項答案",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "答案 '{0}' 必須大於等於 {1} 且小於等於 {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "答案 '{0}' 必須大於等於 {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "答案 '{0}' 必須小於等於 {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "請輸入有效的 Email 地址",
    // [Auto-translated] "The expression: {0} should return 'true'."
    invalidExpression: "表達式：{0}應返回「true」。",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "載入選項時發生錯誤 '{0}': {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "未能載入有效的選項或請求參數路徑有誤",
    // "The file size should not exceed {0}."
    exceedMaxSize: "文件大小不能超過 {0}",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "位元組、KB、MB、GB、TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "你最多只能上傳檔案數量{0}。",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "無法上傳檔。請為「onUploadFiles」事件添加處理程式。",
    // "Response required: enter another value."
    otherRequiredError: "請完成其他問題",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "文件上傳中... 請耐心等待幾秒後重試",
    // [Auto-translated] "Loading..."
    loadingFile: "裝載。。。",
    // [Auto-translated] "Choose file(s)..."
    chooseFile: "選擇檔案...",
    // [Auto-translated] "No file selected"
    noFileChosen: "未選擇檔案",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "將檔案拖放到此處或按下下面的按鈕選擇要上傳的檔。",
    // [Auto-translated] "Are you sure you want to delete this record?"
    confirmDelete: "您確定要刪除此記錄嗎？",
    // [Auto-translated] "This value should be unique."
    keyDuplicationError: "此值應該是唯一的。",
    // [Auto-translated] "Add Column"
    addColumn: "添加列",
    // "Add Row"
    addRow: "添加答案",
    // "Remove"
    removeRow: "刪除答案",
    // [Auto-translated] "There are no rows."
    noRowsText: "沒有行。",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "行 {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // [Auto-translated] "Add new"
    addPanel: "新增",
    // [Auto-translated] "Remove"
    removePanel: "刪除",
    // [Auto-translated] "Show Details"
    showDetails: "顯示詳細資訊",
    // [Auto-translated] "Hide Details"
    hideDetails: "隱藏詳細資訊",
    // "item"
    choices_Item: "選項",
    // [Auto-translated] "Choice option"
    choices_Choice: "Choice 選項",
    // "Column"
    matrix_column: "列",
    // "Row"
    matrix_row: "行",
    // [Auto-translated] "text"
    multipletext_itemname: "發簡訊",
    // "The results are being saved on the server..."
    savingData: "正在將結果保存到服務器...",
    // "An error occurred and we could not save the results."
    savingDataError: "在保存結果過程中發生了錯誤，結果未能保存",
    // "The results were saved successfully!"
    savingDataSuccess: "結果保存成功!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "您的回復超過 64KB。請減小檔的大小，然後重試或聯繫調查擁有者。",
    // "Try again"
    saveAgainButton: "請重試",
    // [Auto-translated] "min"
    timerMin: "最小",
    // [Auto-translated] "sec"
    timerSec: "秒",
    // [Auto-translated] "You have spent {0} on this page and {1} in total."
    timerSpentAll: "您在此頁面上花費了{0}，總共{1}。",
    // [Auto-translated] "You have spent {0} on this page."
    timerSpentPage: "您在此頁面上花費了{0}。",
    // [Auto-translated] "You have spent {0} in total."
    timerSpentSurvey: "你總共花了{0}。",
    // [Auto-translated] "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "您在此頁面上花費了{0}{1}，總共花費了{2}{3}。",
    // [Auto-translated] "You have spent {0} of {1} on this page."
    timerLimitPage: "您在此頁面上花費了{0}{1}。",
    // [Auto-translated] "You have spent {0} of {1} in total."
    timerLimitSurvey: "您總共花費了{1}的{0}。",
    // [Auto-translated] "Clear"
    clearCaption: "清楚",
    // [Auto-translated] "Select"
    selectCaption: "選擇",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "在此簽名",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "無簽名",
    // [Auto-translated] "Select File"
    chooseFileCaption: "選擇檔案",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "拍照",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "按下下面的按鈕使用相機拍照。",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "拖放或選擇要上傳的檔或使用相機拍攝照片。",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "替換檔",
    // [Auto-translated] "Remove this file"
    removeFileCaption: "刪除此檔",
    // [Auto-translated] "Yes"
    booleanCheckedLabel: "是的",
    // [Auto-translated] "No"
    booleanUncheckedLabel: "不",
    // [Auto-translated] "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "是否確實要刪除此檔：{0}？",
    // [Auto-translated] "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "是否確實要刪除所有檔？",
    // [Auto-translated] "Question Title"
    questionTitlePatternText: "問題標題",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "取消",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "應用",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "鍵入以搜尋...",
    // [Auto-translated] "No data to display"
    emptyMessage: "沒有要顯示的數據",
    // [Auto-translated] "Loading..."
    loadingPage: "裝載。。。",
    // [Auto-translated] "Loading..."
    loadingData: "裝載。。。",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "還沒有條目。\n單擊下面的按鈕添加新條目。",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "暫無條目",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "新面板",
    // [Auto-translated] "More"
    more: "更多",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "還行",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "所有選項均被選中進行排名",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "將選項拖到此處以對其進行排名",
    // [Auto-translated] "OK"
    ok: "還行",
    // [Auto-translated] "Cancel"
    cancel: "取消",
    // "Create \"{0}\" item..."
    createCustomItem: "建立 {0} 項目...",
    // [Auto-translated] "Table of contents"
    toc: "目錄",
    // [Auto-translated] "Progress bar"
    progressbar: "進度條"
  };
  surveyCore.setupLocale({ localeCode: "zh-tw", strings: traditionalChineseSurveyStrings, nativeName: "繁體中文", englishName: "Tranditional Chinese" });

  var turkishSurveyStrings = {
    // "Previous"
    pagePrevText: "Önceki",
    // "Next"
    pageNextText: "Sonraki",
    // "Complete"
    completeText: "Tamamla",
    // "Preview"
    previewText: "Önizleme",
    // "Edit"
    editText: "Düzenle",
    // "Start"
    startSurveyText: "Başlat",
    // [Auto-translated] "Please leave a comment"
    commentText: "Lütfen bir yorum bırakın",
    // "Other (describe)"
    otherItemText: "Diğer (açıklayınız)",
    // "None"
    noneItemText: "Hiçbiri",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Cevap vermeyi reddet",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Bilmiyorum",
    // "Select All"
    selectAllItemText: "Tümünü Seç",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Tümünün seçimini kaldır",
    // "Page {0} of {1}"
    progressText: "Sayfa {0}/{1}",
    // "{0} of {1}"
    indexText: "{0}/{1}",
    // "{0} of {1}"
    panelDynamicProgressText: "{0}/{1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "{0}/{1} soru yanıtlandı",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Ankette görüntülenecek sayfa ya da soru mevcut değil.",
    // "Thank you for completing the survey"
    completingSurvey: "Anketi tamamladığınız için teşekkür ederiz",
    // "You have already completed this survey."
    completingSurveyBefore: "Kayıtlarımız bu anketi zaten tamamladığınızı gösteriyor.",
    // "Loading Survey..."
    loadingSurvey: "Anket Yükleniyor...",
    // "Select..."
    placeholder: "Seçiniz...",
    // "Select..."
    ratingOptionsCaption: "Seçiniz...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Seçmek...",
    // "value"
    value: "değer",
    // "Response required."
    requiredError: "Lütfen soruya cevap verin.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Lütfen en az bir soruyu yanıtlayın.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Lütfen tüm satırlardaki soruları cevaplayın.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Her satırın benzersiz bir değeri olmalıdır.",
    // "The value should be numeric."
    numericError: "Değer sayısal olmalıdır.",
    // "The value should not be less than {0}"
    minError: "Değer {0}'den küçük olmamalıdır",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Lütfen {0} adım boyutuyla eşleşen bir değer girin.",
    // "The value should not be greater than {0}"
    maxError: "Değer {0}'dan büyük olmamalıdır",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Geçersiz girdi",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Numaralara izin verilmez.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Lütfen gerekli formata uygun değeri tamamlayın.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Lütfen en az {0} karakter girin.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Lütfen en fazla {0} karakter girin.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Lütfen {0}’den fazla ve {1}’den az karakter girin.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Lütfen en az {0} satırı doldurun.",
    // "Please select at least {0} option(s)."
    minSelectError: "Lütfen en az {0} seçeneği seçin.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Lütfen en fazla {0} seçeneği seçin.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}', {1}'e eşit veya daha büyük ve {2}'ye eşit veya daha küçük olmalıdır",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' değeri {1} değerine eşit veya büyük olmalıdır",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' değeri {1} değerine eşit ya da küçük olmalıdır.",
    // "Please enter a valid e-mail address."
    invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "İfade: {0} 'true' döndürmelidir.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "İstek '{0}' hatasını döndürdü. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "İstek boş veri döndürdü veya 'path' özelliği yanlış",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Dosya boyutu {0} değerini geçemez.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Baytlar, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Yükleyebileceğiniz maksimum dosya sayısı {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Dosyalar yüklenemiyor. Lütfen 'onUploadFiles' olayı için bir işleyici ekleyin.",
    // "Response required: enter another value."
    otherRequiredError: "Lütfen diğer değerleri girin.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Dosyanız yükleniyor. Lütfen birkaç saniye bekleyin ve tekrar deneyin.",
    // "Loading..."
    loadingFile: "Yükleniyor...",
    // "Choose file(s)..."
    chooseFile: "Dosyaları seçin...",
    // "No file selected"
    noFileChosen: "Dosya seçili değil",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Buraya bir dosya bırakın veya dosyayı yüklemek için aşağıdaki düğmeyi tıklayın.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Kaydı silmek istiyor musunuz?",
    // "This value should be unique."
    keyDuplicationError: "Bu değer benzersiz olmalıdır.",
    // "Add Column"
    addColumn: "Sütun Ekle",
    // "Add Row"
    addRow: "Satır Ekle",
    // "Remove"
    removeRow: "Kaldır",
    // "There are no rows."
    noRowsText: "Satır yok.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Satır {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Yeni ekle",
    // "Remove"
    removePanel: "Kaldır",
    // [Auto-translated] "Show Details"
    showDetails: "Detayları göster",
    // [Auto-translated] "Hide Details"
    hideDetails: "Detayları Gizle",
    // "item"
    choices_Item: "öğe",
    // [Auto-translated] "Choice option"
    choices_Choice: "Seçim seçeneği",
    // "Column"
    matrix_column: "Sütun",
    // "Row"
    matrix_row: "Satır",
    // "text"
    multipletext_itemname: "metin",
    // "The results are being saved on the server..."
    savingData: "Sonuçlar sunucuya kaydediliyor...",
    // "An error occurred and we could not save the results."
    savingDataError: "Bir hata oluştu ve sonuçlar kaydedilemedi.",
    // "The results were saved successfully!"
    savingDataSuccess: "Sonuçlar başarıyla kaydedildi!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Yanıtınız 64 KB'ı aşıyor. Lütfen dosyalarınızın boyutunu küçültün ve tekrar deneyin veya anket sahibiyle iletişime geçin.",
    // "Try again"
    saveAgainButton: "Tekrar deneyin",
    // "min"
    timerMin: "dakika",
    // "sec"
    timerSec: "saniye",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Bu sayfada {0} ve toplamda {1} harcadınız.",
    // "You have spent {0} on this page."
    timerSpentPage: "Bu sayfaya {0} harcadınız.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Toplamda {0} harcadınız.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Bu sayfaya {0}/{1} ve toplamda {2}/{3} harcadınız.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Bu sayfaya {0}/{1} harcadınız.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Toplamda {0}/{1} harcadınız.",
    // "Clear"
    clearCaption: "Temizle",
    // [Auto-translated] "Select"
    selectCaption: "Seçmek",
    // "Sign here"
    signaturePlaceHolder: "Burayı imzalayın",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "İmza yok",
    // "Select File"
    chooseFileCaption: "Dosya seçin",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Fotoğraf Çekin",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Kamerayı kullanarak fotoğraf çekmek için aşağıdaki düğmeyi tıklayın.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Kamerayı kullanarak fotoğraf yüklemek veya fotoğraf çekmek için bir dosyayı sürükleyip bırakın veya seçin.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Dosyayı değiştir",
    // "Remove this file"
    removeFileCaption: "Bu dosyayı kaldır",
    // "Yes"
    booleanCheckedLabel: "Evet",
    // "No"
    booleanUncheckedLabel: "Hayır",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Bu dosyayı kaldırmak istediğinizden emin misiniz: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Tüm dosyaları kaldırmak istediğinizden emin misiniz?",
    // "Question Title"
    questionTitlePatternText: "Soru Başlığı",
    // "Cancel"
    modalCancelButtonText: "İptal",
    // "Apply"
    modalApplyButtonText: "Uygula",
    // "Type to search..."
    filterStringPlaceholder: "Aramak için yazın...",
    // "No data to display"
    emptyMessage: "Görüntülenecek veri yok",
    // [Auto-translated] "Loading..."
    loadingPage: "Yükleme...",
    // [Auto-translated] "Loading..."
    loadingData: "Yükleme...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Henüz giriş yok.\nYeni bir giriş eklemek için aşağıdaki düğmeyi tıklayın.",
    // "No entries"
    noEntriesReadonlyText: "Giriş yok.",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Yeni Panel",
    // "More"
    more: "Daha fazla",
    // "OK"
    tagboxDoneButtonCaption: "TAMAM",
    // "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Tüm seçenekler sıralanmıştır",
    // "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Seçimleri sıralamak için buraya sürükleyip bırakın",
    // [Auto-translated] "OK"
    ok: "TAMAM",
    // [Auto-translated] "Cancel"
    cancel: "İptal",
    // "Create \"{0}\" item..."
    createCustomItem: '"{0}" öğesi oluştur...',
    // [Auto-translated] "Table of contents"
    toc: "İçindekiler",
    // [Auto-translated] "Progress bar"
    progressbar: "İlerleme çubuğu"
  };
  surveyCore.setupLocale({ localeCode: "tr", strings: turkishSurveyStrings, nativeName: "türkçe", englishName: "Turkish" });

  var ukrainianSurveyStrings = {
    // "Previous"
    pagePrevText: "Назад",
    // "Next"
    pageNextText: "Далі",
    // "Complete"
    completeText: "Завершити",
    // "Preview"
    previewText: "Попередній перегляд",
    // "Edit"
    editText: "Редагувати",
    // "Start"
    startSurveyText: "Почати",
    // [Auto-translated] "Please leave a comment"
    commentText: "Будь ласка, залиште коментар",
    // "Other (describe)"
    otherItemText: "Інше (будь ласка, опишіть)",
    // "None"
    noneItemText: "Жоден",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Відмовтеся відповідати",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Не знаю",
    // "Select All"
    selectAllItemText: "Вибрати все",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Зніміть позначку з усіх",
    // "Page {0} of {1}"
    progressText: "Сторінка {0} з {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Запис {0} із {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Панель {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Відповіли на {0}/{1} питань",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Немає жодного питання.",
    // "Thank you for completing the survey"
    completingSurvey: "Дякуємо Вам за заповнення анкети!",
    // "You have already completed this survey."
    completingSurveyBefore: "Ви вже проходили це опитування.",
    // "Loading Survey..."
    loadingSurvey: "Завантаження опитування...",
    // "Select..."
    placeholder: "Вибрати...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Виберіть...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Виберіть...",
    // "value"
    value: "значення",
    // "Response required."
    requiredError: "Будь ласка, дайте відповідь.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Будь ласка, дайте відповідь хоча б на одне питання.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Будь ласка, дайте відповідь на питання в кожному рядку.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Кожен рядок повинен мати унікальне значення.",
    // "The value should be numeric."
    numericError: "Відповідь повинна бути числом.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Значення не повинно бути менше {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Введіть значення, яке відповідає розміру кроку {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Значення не повинно бути більше {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Некоректний вхід",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Номери не допускаються.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Будь ласка, заповніть значення, щоб відповідати потрібному формату.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Будь ласка введіть більше {0} символів.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Будь ласка введіть менше {0} символів.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Будь ласка введіть більше {0} и менше {1} символів.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Будь ласка, заповніть не менше {0} рядків.",
    // "Please select at least {0} option(s)."
    minSelectError: "Будь ласка, виберіть хоча б {0} варіантів.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Будь ласка, виберіть не більше {0} варіантів.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' повинно бути не менше ніж {1}, і не більше ніж {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' повинно бути не менше ніж {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' повинно бути не більше ніж {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Будь ласка, введіть дійсну адресу електронної пошти.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Вираз {0} повинен повертати 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Запит повернув помилку '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Відповідь на запит повернулась порожньою або властивіть 'path' вказано невірно",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Розмір файлу не повинен перевищувати {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Байти, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Максимальна кількість файлів, яку ви можете завантажити, становить {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Файли не можна завантажити. Будь ласка, додайте обробник для події 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Будь ласка, введіть дані в поле 'Інше'",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Ваш файл завантажується. Зачекайте декілька секунд і спробуйте знову.",
    // "Loading..."
    loadingFile: "Завантаження...",
    // "Choose file(s)..."
    chooseFile: "Виберіть файл(и)...",
    // "No file selected"
    noFileChosen: "Файл не вибрано",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Перетягніть файл сюди або натисніть кнопку нижче, щоб вибрати файл для завантаження.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Ви хочете видалити запис?",
    // "This value should be unique."
    keyDuplicationError: "Це значення повинно бути унікальним.",
    // "Add Column"
    addColumn: "Додати колонку",
    // "Add Row"
    addRow: "Додати рядок",
    // "Remove"
    removeRow: "Видалити",
    // [Auto-translated] "There are no rows."
    noRowsText: "Рядів немає.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Рядок {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Додати нову",
    // "Remove"
    removePanel: "Видалити",
    // [Auto-translated] "Show Details"
    showDetails: "Показати подробиці",
    // [Auto-translated] "Hide Details"
    hideDetails: "Сховати подробиці",
    // "item"
    choices_Item: "Варіант",
    // [Auto-translated] "Choice option"
    choices_Choice: "Варіант вибору",
    // "Column"
    matrix_column: "Колонка",
    // "Row"
    matrix_row: "Рядок",
    // [Auto-translated] "text"
    multipletext_itemname: "Текст",
    // "The results are being saved on the server..."
    savingData: "Результати зберігаються на сервер...",
    // "An error occurred and we could not save the results."
    savingDataError: "Відбулася помилка, результат не був збережений.",
    // "The results were saved successfully!"
    savingDataSuccess: "Резвультат успішно збережений!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Ваша відповідь перевищує 64 КБ. Будь ласка, зменшіть розмір вашого файлу (файлів) і спробуйте ще раз або зверніться до власника опитування.",
    // "Try again"
    saveAgainButton: "Спробувати знову",
    // "min"
    timerMin: "хв",
    // "sec"
    timerSec: "сек",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Ви витратили {0} на цій сторінці і {1} загалом.",
    // "You have spent {0} on this page."
    timerSpentPage: "Ви витратили {0} на цій сторінці.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Ви витратили {0} протягом тесту.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Ви витратили {0} з {1} на цій сторінці і {2} з {3} для всього тесту.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Ви витратили {0} з {1} на цій сторінці.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Ви витратили {0} з {1} для всього тесту.",
    // "Clear"
    clearCaption: "Очистити",
    // [Auto-translated] "Select"
    selectCaption: "Виберіть",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Підпишіться тут",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Без підпису",
    // "Select File"
    chooseFileCaption: "Виберіть файл",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Зробити фото",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Натисніть кнопку нижче, щоб зробити фото за допомогою камери.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Перетягніть або виберіть файл, щоб завантажити або зробити фотографію за допомогою камери.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Замінити файл",
    // "Remove this file"
    removeFileCaption: "Видалити файл",
    // "Yes"
    booleanCheckedLabel: "Так",
    // "No"
    booleanUncheckedLabel: "Ні",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Ви впевнені, що хочете видалити цей файл: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Ви впевнені, що хочете видалити всі файли?",
    // "Question Title"
    questionTitlePatternText: "Назва запитання",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Скасувати",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Застосовувати",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Введіть для пошуку...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Немає даних для відображення",
    // [Auto-translated] "Loading..."
    loadingPage: "Завантаження...",
    // [Auto-translated] "Loading..."
    loadingData: "Завантаження...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Записів поки що немає.\nНатисніть кнопку нижче, щоб додати новий запис.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Записів немає",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Нова панель",
    // [Auto-translated] "More"
    more: "Більше",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "ГАРАЗД",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Всі варіанти вибираються для ранжування",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Перетягніть варіанти сюди, щоб ранжувати їх",
    // [Auto-translated] "OK"
    ok: "ГАРАЗД",
    // [Auto-translated] "Cancel"
    cancel: "Скасувати",
    // "Create \"{0}\" item..."
    createCustomItem: 'Створіть пункт "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Зміст",
    // [Auto-translated] "Progress bar"
    progressbar: "Індикатор прогресу"
  };
  surveyCore.setupLocale({ localeCode: "uk", strings: ukrainianSurveyStrings, nativeName: "українська", englishName: "Ukrainian" });

  var vietnameseSurveyStrings = {
    // "Previous"
    pagePrevText: "Trở về",
    // "Next"
    pageNextText: "Tiếp theo",
    // "Complete"
    completeText: "Hoàn thành",
    // "Preview"
    previewText: "Xem trước",
    // "Edit"
    editText: "Chỉnh sửa",
    // "Start"
    startSurveyText: "Bắt đầu",
    // [Auto-translated] "Please leave a comment"
    commentText: "Vui lòng để lại bình luận",
    // "Other (describe)"
    otherItemText: "Khác (mô tả)",
    // "None"
    noneItemText: "Trống",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Từ chối trả lời",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Không biết",
    // "Select All"
    selectAllItemText: "Chọn tất cả",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Bỏ chọn tất cả",
    // "Page {0} of {1}"
    progressText: "Trang {0} / {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} của {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Dòng {0} / {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Bảng điều khiển {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Đã trả lời {0}/{1} câu hỏi",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Không có trang hoặc câu hỏi nào được hiển thị trong cuộc khảo sát này.",
    // "Thank you for completing the survey"
    completingSurvey: "Cảm ơn đã hoàn thành khảo sát!",
    // "You have already completed this survey."
    completingSurveyBefore: "Hồ sơ chúng tôi cho thấy rằng bạn đã hoàn thành cuộc khảo sát này.",
    // "Loading Survey..."
    loadingSurvey: "Đang tải khảo sát...",
    // "Select..."
    placeholder: "Chọn...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Lựa...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Lựa...",
    // "value"
    value: "Giá trị",
    // "Response required."
    requiredError: "Vui lòng trả lời câu hỏi.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Vui lòng trả lời ít nhất một câu hỏi.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Vui lòng trả lời các câu hỏi trên tất cả các dòng.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Mỗi hàng phải có một giá trị duy nhất.",
    // "The value should be numeric."
    numericError: "Giá trị nên là kiểu số.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Giá trị không được nhỏ hơn {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Vui lòng nhập giá trị khớp với kích thước bước của {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Giá trị không được lớn hơn {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Đầu vào không hợp lệ",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Số không được phép.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Vui lòng hoàn thành giá trị để phù hợp với định dạng yêu cầu.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Vui lòng nhập ít nhất {0} kí tự.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Vui lòng nhập ít hơn {0} kí tự.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Vui lòng nhập nhiều hơn {0} hoặc ít hơn {1} kí tự.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Vui lòng nhập ít nhất {0} dòng.",
    // "Please select at least {0} option(s)."
    minSelectError: "Vui lòng chọn ít nhất {0} loại.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Vui lòng không chọn nhiều hơn {0} loại.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "Giá trị '{0}' nên bằng hoặc lớn hơn {1} và bằng hoặc nhỏ hơn {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "Giá trị '{0}' nên bằng hoặc lớn hơn {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "Giá trị '{0}' nên bằng hoặc nhỏ hơn {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Vui lòng điền địa chỉ email hợp lệ.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Biểu thức: {0} nên trả về 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Yêu cầu trả về lỗi '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Yêu cầu trả về dữ liệu trống hoặc thuộc tính 'path' không đúng",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Kích thước tập tin không nên vượt quá {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Byte, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Số lượng tệp tối đa bạn có thể tải lên là {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Không thể tải tệp lên. Vui lòng thêm trình xử lý cho sự kiện 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Vui lòng điền giá trị khác.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Tập tin đang được tải lên. Vui lòng chờ một lúc và thử lại.",
    // "Loading..."
    loadingFile: "Đang tải...",
    // "Choose file(s)..."
    chooseFile: "Chọn các tập tin...",
    // "No file selected"
    noFileChosen: "Không có tập tin nào được chọn",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Kéo và thả tệp vào đây hoặc nhấp vào nút bên dưới để chọn tệp để tải lên.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Bạn muốn xóa dòng này?",
    // "This value should be unique."
    keyDuplicationError: "Giá trị này không nên bị trùng lặp.",
    // "Add Column"
    addColumn: "Thêm cột",
    // "Add Row"
    addRow: "Thêm dòng",
    // "Remove"
    removeRow: "Xóa",
    // [Auto-translated] "There are no rows."
    noRowsText: "Không có hàng.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Hàng {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{hàng Tiêu đề}",
    // "Add new"
    addPanel: "Thêm mới",
    // "Remove"
    removePanel: "Xóa",
    // [Auto-translated] "Show Details"
    showDetails: "Hiển thị chi tiết",
    // [Auto-translated] "Hide Details"
    hideDetails: "Ẩn chi tiết",
    // "item"
    choices_Item: "mục",
    // [Auto-translated] "Choice option"
    choices_Choice: "Tùy chọn lựa chọn",
    // "Column"
    matrix_column: "Cột",
    // "Row"
    matrix_row: "Dòng",
    // [Auto-translated] "text"
    multipletext_itemname: "Nhắn tin",
    // "The results are being saved on the server..."
    savingData: "Kết quả đang lưu lại trên hệ thống...",
    // "An error occurred and we could not save the results."
    savingDataError: "Có lỗi xảy ra và chúng ta không thể lưu kết quả.",
    // "The results were saved successfully!"
    savingDataSuccess: "Kết quả đã được lưu thành công!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Phản hồi của bạn vượt quá 64KB. Vui lòng giảm kích thước tệp của bạn và thử lại hoặc liên hệ với chủ sở hữu khảo sát.",
    // "Try again"
    saveAgainButton: "Thử lại",
    // "min"
    timerMin: "phút",
    // "sec"
    timerSec: "giây",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Bạn đã sử dụng {0} trên trang này và {1} trên toàn bộ.",
    // "You have spent {0} on this page."
    timerSpentPage: "Bạn đã sử dụng {0} trên trang.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Bạn đã sử dụng {0} trên toàn bộ.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Bạn đã sử dụng {0} / {1} trên trang này và {2} / {3} trên toàn bộ.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Bạn đã sử dụng {0} / {1} trên trang này.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Bạn đã sử dụng {0} / {1} trên toàn bộ.",
    // "Clear"
    clearCaption: "Xóa",
    // [Auto-translated] "Select"
    selectCaption: "Lựa",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Ký tên tại đây",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Không có chữ ký",
    // "Select File"
    chooseFileCaption: "Chọn tập tin",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Chụp ảnh",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Nhấp vào nút bên dưới để chụp ảnh bằng máy ảnh.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Kéo và thả hoặc chọn tệp để tải lên hoặc chụp ảnh bằng máy ảnh.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Thay thế tập tin",
    // "Remove this file"
    removeFileCaption: "Xóa tập tin",
    // "Yes"
    booleanCheckedLabel: "Có",
    // "No"
    booleanUncheckedLabel: "Không",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Bạn có chắc chắn muốn xóa tập tin này: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Bạn có chắc chắn muốn xóa toàn bộ tập tin?",
    // "Question Title"
    questionTitlePatternText: "Tiêu đề câu hỏi",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Hủy",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Áp dụng",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Nhập để tìm kiếm...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Không có dữ liệu để hiển thị",
    // [Auto-translated] "Loading..."
    loadingPage: "Tải...",
    // [Auto-translated] "Loading..."
    loadingData: "Tải...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Chưa có mục nhập.\nNhấp vào nút bên dưới để thêm mục mới.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Không có mục nhập",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Bảng điều khiển mới",
    // [Auto-translated] "More"
    more: "Nhiều hơn",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Tất cả các lựa chọn được chọn để xếp hạng",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Kéo các lựa chọn vào đây để xếp hạng chúng",
    // [Auto-translated] "OK"
    ok: "OK",
    // [Auto-translated] "Cancel"
    cancel: "Hủy",
    // "Create \"{0}\" item..."
    createCustomItem: 'Tạo vật phẩm "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Mục lục",
    // [Auto-translated] "Progress bar"
    progressbar: "Thanh tiến trình"
  };
  surveyCore.setupLocale({ localeCode: "vi", strings: vietnameseSurveyStrings, nativeName: "việt nam", englishName: "Vietnamese" });

  var welshSurveyStrings = {
    // "Previous"
    pagePrevText: "Blaenorol",
    // "Next"
    pageNextText: "Nesaf",
    // "Complete"
    completeText: "Cwblhau",
    // "Preview"
    previewText: "Rhagolwg",
    // "Edit"
    editText: "Golygu",
    // "Start"
    startSurveyText: "Dechrau",
    // [Auto-translated] "Please leave a comment"
    commentText: "Gadewch sylw os gwelwch yn dda",
    // "Other (describe)"
    otherItemText: "Arall (disgrifiwch)",
    // "None"
    noneItemText: "Dim",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "Gwrthod ateb",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "Ddim yn gwybod",
    // "Select All"
    selectAllItemText: "Dewis y Cyfan ",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Dad-ddethol yr holl",
    // "Page {0} of {1}"
    progressText: "Tudalen {0} o {1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{0} o {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "Cofnod {0} o {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Wedi ateb {0}/{1} cwestiwn",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Does dim modd gweld tudalen na chwestiwn yn yr arolwg.",
    // "Thank you for completing the survey"
    completingSurvey: "Diolch am lenwi’r holiadur!",
    // "You have already completed this survey."
    completingSurveyBefore: "Rydych chi wedi llenwi’r arolwg hwn yn barod yn ôl ein cofnodion.",
    // "Loading Survey..."
    loadingSurvey: "Wrthi’n Llwytho’r Arolwg...",
    // "Select..."
    placeholder: "Dewiswch...",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "Dewis...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Dewis...",
    // "value"
    value: "gwerth",
    // "Response required."
    requiredError: "Atebwch y cwestiwn.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Atebwch o leiaf un cwestiwn.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Atebwch y cwestiynau ym mhob rhes.",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "Rhaid i bob rhes fod â gwerth unigryw.",
    // "The value should be numeric."
    numericError: "Dylai’r gwerth fod yn rhif.",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "Ni ddylai'r gwerth fod yn llai na {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Rhowch werth sy'n cyfateb i faint cam {0}.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "Ni ddylai'r gwerth fod yn fwy na {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Mewnbwn annilys",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Ni chaniateir rhifau.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Cwblhewch y gwerth er mwyn cydweddu â'r ffurf gofynnol.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Rhowch o leiaf {0} nod.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Rhowch lai na {0} nod.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Rhowch o leiaf {0} nod ond dim mwy na {1}.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Llenwch o leiaf {0} rhes.",
    // "Please select at least {0} option(s)."
    minSelectError: "Dewiswch o leiaf {0} amrywiolyn.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Peidiwch â dewis mwy na {0} amrywiolyn.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "Dylai’r '{0}' fod yr un fath â {1} neu’n fwy, a’r fath â {2} neu’n llai",
    // "The '{0}' should be at least {1}"
    numericMin: "Dylai’r '{0}' fod yr un fath â {1} neu’n fwy",
    // "The '{0}' should be at most {1}"
    numericMax: "Dylai’r '{0}' fod yr un fath â {1} neu’n llai",
    // "Please enter a valid e-mail address."
    invalidEmail: "Rhowch gyfeiriad e-bost dilys.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Dylai’r mynegiad {0} arwain at 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Roedd y cais wedi arwain at y gwall '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Roedd y cais wedi arwain at ddata gwag neu mae priodwedd y ‘path’ yn anghywir ",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Ddylai’r ffeil ddim bod yn fwy na {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Beitiau, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Uchafswm y ffeiliau y gallwch eu llwytho i fyny yw {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Ni ellir llwytho ffeiliau i fyny. Ychwanegwch handler ar gyfer y digwyddiad 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Rhowch y gwerth arall.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Mae eich ffeil wrthi’n llwytho i fyny. Arhoswch ychydig o eiliadau a rhoi cynnig arall arni.",
    // "Loading..."
    loadingFile: "Wrthi’n llwytho...",
    // "Choose file(s)..."
    chooseFile: "Dewiswch ffeil(iau)...",
    // "No file selected"
    noFileChosen: "Heb ddewis ffeil ",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Llusgwch a gollwng ffeil yma neu cliciwch ar y botwm isod i ddewis ffeil i'w llwytho i fyny.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Ydych chi am ddileu’r cofnod?",
    // "This value should be unique."
    keyDuplicationError: "Dylai’r gwerth hwn fod yn unigryw.",
    // "Add Column"
    addColumn: "Ychwanegu colofn ",
    // "Add Row"
    addRow: "Ychwanegu rhes",
    // "Remove"
    removeRow: "Tynnu",
    // [Auto-translated] "There are no rows."
    noRowsText: "Nid oes unrhyw ffraeau.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Rhes {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rhesTeitl}",
    // "Add new"
    addPanel: "Ychwanegu o’r newydd",
    // "Remove"
    removePanel: "Tynnu",
    // [Auto-translated] "Show Details"
    showDetails: "Dangos manylion",
    // [Auto-translated] "Hide Details"
    hideDetails: "Manylion Cuddio",
    // "item"
    choices_Item: "eitem",
    // [Auto-translated] "Choice option"
    choices_Choice: "Dewis opsiwn",
    // "Column"
    matrix_column: "Colofn",
    // "Row"
    matrix_row: "Rhes",
    // [Auto-translated] "text"
    multipletext_itemname: "Testun",
    // "The results are being saved on the server..."
    savingData: "Mae’r canlyniadau’n cael eu cadw ar y gweinydd...",
    // "An error occurred and we could not save the results."
    savingDataError: "Roedd gwall a doedd dim modd cadw’r canlyniadau.",
    // "The results were saved successfully!"
    savingDataSuccess: "Wedi llwyddo i gadw’r canlyniadau!",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Mae eich ymateb yn fwy na 64KB. Lleihau maint eich ffeil(iau) a cheisiwch eto neu cysylltwch â pherchennog yr arolwg.",
    // "Try again"
    saveAgainButton: "Rhowch gynnig arall arni",
    // "min"
    timerMin: "mun",
    // "sec"
    timerSec: "eil",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Rydych chi wedi treulio {0} ar y dudalen hon a {1} gyda’i gilydd.",
    // "You have spent {0} on this page."
    timerSpentPage: "Rydych chi wedi treulio {0} ar y dudalen hon.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Rydych chi wedi treulio {0} gyda’i gilydd.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Rydych chi wedi treulio {0} o {1} ar y dudalen hon a {2} o {3} gyda’i gilydd.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Rydych chi wedi treulio {0} o {1} ar y dudalen hon.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Rydych chi wedi treulio {0} o {1} gyda’i gilydd.",
    // "Clear"
    clearCaption: "Clirio",
    // [Auto-translated] "Select"
    selectCaption: "Dewis",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "Arwydd yma",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "Dim llofnod",
    // "Select File"
    chooseFileCaption: "Dewiswch ffeil ",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "Tynnu Llun",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "Cliciwch y botwm isod i dynnu llun gan ddefnyddio'r camera.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Llusgwch a gollwng neu dewiswch ffeil i lanlwytho neu dynnu llun gan ddefnyddio'r camera.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "Amnewid ffeil",
    // "Remove this file"
    removeFileCaption: "Tynnu’r ffeil hon ",
    // "Yes"
    booleanCheckedLabel: "Iawn",
    // "No"
    booleanUncheckedLabel: "Na",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Ydych chi’n siŵr eich bod am dynnu’r ffeil hon: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Ydych chi’n siŵr eich bod am dynnu pob ffeil?",
    // "Question Title"
    questionTitlePatternText: "Teitl y Cwestiwn ",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "Canslo",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "Cynnig",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "Teipiwch i chwilio...",
    // [Auto-translated] "No data to display"
    emptyMessage: "Dim data i'w arddangos",
    // [Auto-translated] "Loading..."
    loadingPage: "Llwytho...",
    // [Auto-translated] "Loading..."
    loadingData: "Llwytho...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Dim cofnodion eto.\nCliciwch y botwm isod i ychwanegu cofnod newydd.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "Dim cofnodion",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Panel newydd",
    // [Auto-translated] "More"
    more: "Rhagor",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OCÊ",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Dewisir pob dewis ar gyfer graddio",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Llusgwch ddewisiadau yma i'w graddio",
    // [Auto-translated] "OK"
    ok: "OCÊ",
    // [Auto-translated] "Cancel"
    cancel: "Canslo",
    // "Create \"{0}\" item..."
    createCustomItem: 'Creu eitem "{0}"...',
    // [Auto-translated] "Table of contents"
    toc: "Tabl cynnwys",
    // [Auto-translated] "Progress bar"
    progressbar: "Bar cynnydd"
  };
  surveyCore.setupLocale({ localeCode: "cy", strings: welshSurveyStrings, nativeName: "cymraeg", englishName: "Welsh" });

  var teluguStrings = {
    // "Previous"
    pagePrevText: "వెనకటి",
    // "Next"
    pageNextText: "తరువాయ",
    // "Complete"
    completeText: "పూర్తి చేయండి",
    // "Preview"
    previewText: "ముందుగా వీక్షించు",
    // "Edit"
    editText: "మార్పులు చెయ్యి",
    // "Start"
    startSurveyText: "ప్రారంభించు",
    // [Auto-translated] "Please leave a comment"
    commentText: "దయచేసి ఒక వ్యాఖ్య ఇవ్వండి",
    // "Other (describe)"
    otherItemText: "ఇతరమైన(వివరించండి)",
    // [Auto-translated] "None"
    noneItemText: "ఎవరు కాదు",
    // [Auto-translated] "Refuse to answer"
    refuseItemText: "సమాధానం ఇవ్వడానికి నిరాకరించండి",
    // [Auto-translated] "Don't know"
    dontKnowItemText: "తెలియదు",
    // "Select All"
    selectAllItemText: "అన్ని ఎంచుకో",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Deselect all",
    // "Page {0} of {1}"
    progressText: "పేజీ{0}/{1}",
    // [Auto-translated] "{0} of {1}"
    indexText: "{1} {0}[మార్చు]",
    // "{0} of {1}"
    panelDynamicProgressText: "దాఖలాలు{0}/{1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "{0}/{1} ప్రశ్నలకు జవాబు ఇవ్వడం అయినది",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "ఈ సర్వేలో పేజీలు గాని ప్రశ్నలు గాని కనబడుట లేదు",
    // "Thank you for completing the survey"
    completingSurvey: "సర్వేను ముగించి నందుకు ధన్యవాదములు",
    // "You have already completed this survey."
    completingSurveyBefore: " మీరు ఇప్పటికే సర్వేను ముగించినట్లు మా రికార్డులు చూపిస్తున్నాయి",
    // "Loading Survey..."
    loadingSurvey: "సర్వే లోడ్ అవుతుంది",
    // "Select..."
    placeholder: "ఎన్నుకోండి",
    // [Auto-translated] "Select..."
    ratingOptionsCaption: "ఎంచు...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "ఎంచు...",
    // "value"
    value: "విలువ",
    // "Response required."
    requiredError: "దయచేసి ప్రశ్నకు జవాబు ఇవ్వండి",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "దయచేసి కనీసం ఒక్క ప్రశ్నకైనా జవాబు ఇవ్వండి",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "దయచేసి అన్ని వరుసలలో ఉన్న ప్రశ్నలకు జవాబు ఇవ్వండి",
    // [Auto-translated] "Each row must have a unique value."
    eachRowUniqueError: "ప్రతి వరుసకు ఒక ప్రత్యేకమైన విలువ ఉండాలి.",
    // "The value should be numeric."
    numericError: "విలువను సంఖ్యలలో తెలియజేయండి",
    // [Auto-translated] "The value should not be less than {0}"
    minError: "విలువ {0} కంటే తక్కువగా ఉండకూడదు.",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "{0} యొక్క దశ సైజుకు జత అయ్యే విలువను దయచేసి నమోదు చేయండి.",
    // [Auto-translated] "The value should not be greater than {0}"
    maxError: "విలువ {0} కంటే ఎక్కువ ఉండకూడదు.",
    // [Auto-translated] "Invalid input"
    invalidInputError: "చెల్లని ఇన్ పుట్",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "అంకెలు అనుమతించబడవు.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "అవసరమైన ఫార్మెట్ జత అయ్యేవిధంగా దయచేసి విలువను పూర్తి చేయండి.",
    // "Please enter at least {0} character(s)."
    textMinLength: "దయచేసి కనీసం {0} అక్షరాలను నమోదు చేయండి",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "దయచేసి {0} కన్నా తక్కువ అక్షరాలను నమోదు చేయండి",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "దయచేసి {0} కన్నా ఎక్కువ మరియు{1} కన్నా తక్కువ అక్షరాలను నమోదు చేయండి",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "దయచేసి కనీసం {0}వరుసలను పూరించండి",
    // "Please select at least {0} option(s)."
    minSelectError: "దయచేసి కనీసం{0} రకాలను ఎన్నుకోండి",
    // "Please select no more than {0} option(s)."
    maxSelectError: "దయచేసి {0} కన్నా ఎక్కువ రకాలను ఎన్నుకో కండి",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' {1}తొ సమానంగా లేదా {1} కన్నా ఎక్కువ గా మరియు  {2}కన్నా తక్కువ ఉండాలి లెదా {2}తొ సమానంగా ఉండాలి",
    // "The '{0}' should be at least {1}"
    numericMin: "''{0}' {1}తొ  సమానంగా లేదా  {1}కన్నా ఎక్కువగా ఉండాలి",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}'  {1}  తక్కువ లేదా సమానంగా ఉండాలి",
    // "Please enter a valid e-mail address."
    invalidEmail: "దయచేసి సరైన ఈమెయిల్  నమోదు చేయండి",
    // "The expression: {0} should return 'true'."
    invalidExpression: "{0} 'నిజం' అని తిరిగివ్వాలి",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "విన్నపము {0} ని తప్పుగా గుర్తించింది {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "విన్నపము ఖాళీ డేటాని తిరిగిచ్చింది, లేదా path తప్పైన ది",
    // "The file size should not exceed {0}."
    exceedMaxSize: "ఫైల్ పరిమాణం{0} కంటే పెద్దదిగా ఉండకూడదు",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "బైట్ లు, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "మీరు అప్ లోడ్ చేయగల గరిష్ట ఫైళ్ల సంఖ్య {0}.",
    // [Auto-translated] "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "ఫైళ్లను అప్ లోడ్ చేయలేం. దయచేసి 'ఆన్ అప్ లోడ్ ఫైల్స్' ఈవెంట్ కొరకు ఒక హ్యాండ్లర్ ని జోడించండి.",
    // "Response required: enter another value."
    otherRequiredError: "దయచేసి ఇతర విలువలను నమో దించండి",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "మీ ఫైల్ అప్లోడ్ అవుతున్నది దయచేసి కొన్ని సెకండ్లు వేచి ఉండండి మరియు మళ్లీ ప్రయత్నించండి",
    // "Loading..."
    loadingFile: "లోడ్ అవుతున్నది",
    // "Choose file(s)..."
    chooseFile: "ఫైళ్లను ఎన్నుకోండి",
    // "No file selected"
    noFileChosen: "ఏ ఫైల్ ఎన్నుకో లేదు",
    // [Auto-translated] "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "ఒక ఫైల్ ను ఇక్కడ డ్రాగ్ చేసి డ్రాప్ చేయండి లేదా అప్ లోడ్ చేయడానికి ఫైల్ ఎంచుకోవడానికి దిగువ బటన్ మీద క్లిక్ చేయండి.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "మీరు రికార్డులను తొలగించాలని అనుకుంటున్నారా",
    // "This value should be unique."
    keyDuplicationError: "విలువ ప్రత్యేకంగా ఉండాలి",
    // "Add Column"
    addColumn: "కాలం చేర్పించండి",
    // "Add Row"
    addRow: "వరుసలు చేర్పించండి",
    // "Remove"
    removeRow: "తీసేయండి",
    // [Auto-translated] "There are no rows."
    noRowsText: "వరుసలు లేవు.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Row {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "కొత్త దాన్ని చేర్పించండి",
    // "Remove"
    removePanel: "తీసేయండి",
    // [Auto-translated] "Show Details"
    showDetails: "వివరాలు చూపించు",
    // [Auto-translated] "Hide Details"
    hideDetails: "వివరాలను దాచండి",
    // "item"
    choices_Item: "వస్తువులు",
    // [Auto-translated] "Choice option"
    choices_Choice: "ఛాయిస్ ఆప్షన్",
    // "Column"
    matrix_column: "కాలం ",
    // "Row"
    matrix_row: "వరుస",
    // [Auto-translated] "text"
    multipletext_itemname: "వచనం",
    // "The results are being saved on the server..."
    savingData: "ఫలితాంశాలు సర్వర్లో సేవ్ అవుతున్నాయి",
    // "An error occurred and we could not save the results."
    savingDataError: "ఒక లోపము సంభవించినది అందుకని ఫలితాంశాలను సేవ్ చేయలేకపోయాము  ",
    // "The results were saved successfully!"
    savingDataSuccess: "ఫలితాంశాలను విజయవంతంగా సేవ్ చేసాము",
    // [Auto-translated] "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "మీ ప్రతిస్పందన 64KBని మించిపోయింది. దయచేసి మీ ఫైల్(లు) పరిమాణాన్ని తగ్గించండి మరియు మళ్లీ ప్రయత్నించండి లేదా సర్వే యజమానిని సంప్రదించండి.",
    // "Try again"
    saveAgainButton: "మళ్లీ ప్రయత్నించు",
    // "min"
    timerMin: "నిమిషాలు ",
    // "sec"
    timerSec: "సెకండ్లు",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "ఈ పేజీ పైన మీరు{0}  ఉపయోగించారు మొత్తంగా  {1} ఉపయోగించారు",
    // "You have spent {0} on this page."
    timerSpentPage: "ఈ పేజీ పైన మీరు{0} ఉపయోగించారు",
    // "You have spent {0} in total."
    timerSpentSurvey: "మీరు మొత్తంగా {0}  ఉపయోగించారు",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "ఈ పేజీ పైన మీరు {1}లో {0} భాగాన్ని ఉపయోగించారు. మోతంగా {3}లో {2} భాగాన్ని ఉపయోగించారు.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "ఈ పేజీలో మీరు {1}లోని{0} ని ఉపయోగించారు",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: " మొత్తంగా మీరు {1} లో {0} ని ఉపయోగించారు ",
    // "Clear"
    clearCaption: "స్పష్టమ్",
    // [Auto-translated] "Select"
    selectCaption: "ఎంచు",
    // [Auto-translated] "Sign here"
    signaturePlaceHolder: "ఇక్కడ సంతకం చేయండి",
    // [Auto-translated] "No signature"
    signaturePlaceHolderReadOnly: "సంతకం లేదు",
    // "Select File"
    chooseFileCaption: "ఫైల్ ఎంచుకోండి",
    // [Auto-translated] "Take Photo"
    takePhotoCaption: "ఫోటో తీసుకోండి",
    // [Auto-translated] "Click the button below to take a photo using the camera."
    photoPlaceholder: "కెమెరాను ఉపయోగించి ఫోటో తీయడానికి దిగువ బటన్ మీద క్లిక్ చేయండి.",
    // [Auto-translated] "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "కెమెరాను ఉపయోగించి ఫోటోను అప్ లోడ్ చేయడానికి లేదా తీయడానికి ఫైల్ ను డ్రాగ్ మరియు డ్రాప్ చేయండి లేదా ఎంచుకోండి.",
    // [Auto-translated] "Replace file"
    replaceFileCaption: "ఫైలు మార్చండి",
    // "Remove this file"
    removeFileCaption: "ఈ ఫైల్ తీసేయండి",
    // "Yes"
    booleanCheckedLabel: "అవును",
    // "No"
    booleanUncheckedLabel: "లేదు",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: " ఈ ఫైల్ని తీయించాలని మీరు ఖచ్చితంగా అనుకుంటున్నారా:{0} ?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "అన్ని ఫైళ్లను తీసేయాలని మీరు ఖచ్చితంగా అనుకుంటున్నారా",
    // "Question Title"
    questionTitlePatternText: "ప్రశ్న శీర్షిక",
    // [Auto-translated] "Cancel"
    modalCancelButtonText: "రద్దు",
    // [Auto-translated] "Apply"
    modalApplyButtonText: "సరిపడు",
    // [Auto-translated] "Type to search..."
    filterStringPlaceholder: "శోధించడానికి టైప్ చేయండి...",
    // [Auto-translated] "No data to display"
    emptyMessage: "డిస్ ప్లే చేయడానికి డేటా లేదు",
    // [Auto-translated] "Loading..."
    loadingPage: "లోడింగ్...",
    // [Auto-translated] "Loading..."
    loadingData: "లోడింగ్...",
    // [Auto-translated] "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "ఇంకా ఎంట్రీలు లేవు.\nకొత్త ఎంట్రీని జోడించడం కొరకు దిగువ బటన్ మీద క్లిక్ చేయండి.",
    // [Auto-translated] "No entries"
    noEntriesReadonlyText: "ఎంట్రీలు లేవు",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "కొత్త ప్యానెల్",
    // [Auto-translated] "More"
    more: "ఎక్కువ",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "సరే",
    // [Auto-translated] "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "ర్యాంకింగ్ కొరకు అన్ని ఎంపికలు ఎంపిక చేయబడతాయి.",
    // [Auto-translated] "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "వాటిని ర్యాంక్ చేయడం కొరకు ఎంపికలను ఇక్కడ డ్రాగ్ చేయండి",
    // [Auto-translated] "OK"
    ok: "సరే",
    // [Auto-translated] "Cancel"
    cancel: "రద్దు",
    // "Create \"{0}\" item..."
    createCustomItem: '"{0}" ఐటమ్ సృష్టించండి...',
    // [Auto-translated] "Table of contents"
    toc: "విషయ పట్టిక[మార్చు]",
    // [Auto-translated] "Progress bar"
    progressbar: "పురోగతి బార్"
  };
  surveyCore.setupLocale({ localeCode: "tel", strings: teluguStrings, nativeName: "తెలుగు", englishName: "Telugu" });

  var philippinesStrings = {
    // "Previous"
    pagePrevText: "Nakaraang",
    // "Next"
    pageNextText: "Susunod",
    // "Complete"
    completeText: "Kumpleto",
    // "Preview"
    previewText: "Silipin",
    // "Edit"
    editText: "I-edit",
    // "Start"
    startSurveyText: "Magsimula",
    // [Auto-translated] "Please leave a comment"
    commentText: "Mangyaring mag-iwan ng komento",
    // "Other (describe)"
    otherItemText: "Iba pa (ilarawan)",
    // "None"
    noneItemText: "wala",
    // "Refuse to answer"
    refuseItemText: "Tumangging sumagot",
    // "Don't know"
    dontKnowItemText: "hindi ko alam",
    // "Select All"
    selectAllItemText: "Piliin lahat",
    // [Auto-translated] "Deselect all"
    deselectAllItemText: "Alisin ang pagpili ng lahat",
    // "Page {0} of {1}"
    progressText: "Pahina {0} ng {1}",
    // "{0} of {1}"
    indexText: "{0} ng {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "{0} ng {1}",
    // [Auto-translated] "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Sinagot ang {0}/{1} mga tanong",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Ang survey ay hindi naglalaman ng anumang nakikitang elemento.",
    // "Thank you for completing the survey"
    completingSurvey: "Salamat sa pagkumpleto ng survey",
    // "You have already completed this survey."
    completingSurveyBefore: "Nakumpleto mo na ang survey na ito.",
    // "Loading Survey..."
    loadingSurvey: "Nilo-load ang Survey...",
    // "Select..."
    placeholder: "Pumili...",
    // "Select..."
    ratingOptionsCaption: "Pumili...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Pumili ...",
    // "value"
    value: "halaga",
    // "Response required."
    requiredError: "Kinakailangan ang tugon.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Kinakailangan ang tugon: sagutin ang kahit isang tanong.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Kinakailangan ang tugon: sagutin ang mga tanong sa lahat ng row.",
    // "Each row must have a unique value."
    eachRowUniqueError: "Ang bawat hilera ay dapat may natatanging halaga.",
    // "The value should be numeric."
    numericError: "Ang halaga ay dapat na numero.",
    // "The value should not be less than {0}"
    minError: "Ang halaga ay hindi dapat mas mababa sa {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Mangyaring magpasok ng isang halaga na tumutugma sa laki ng hakbang ng {0}.",
    // "The value should not be greater than {0}"
    maxError: "Ang halaga ay hindi dapat mas malaki sa {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Hindi wastong input",
    // [Auto-translated] "Numbers are not allowed."
    textNoDigitsAllow: "Bawal ang mga numero.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Mangyaring kumpletuhin ang halaga upang tumugma sa kinakailangang format.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Mangyaring magpasok ng hindi bababa sa {0} (mga) character.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Mangyaring magpasok ng hindi hihigit sa {0} (mga) character.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Mangyaring magpasok ng hindi bababa sa {0} at hindi hihigit sa {1} (na) character.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Mangyaring punan ang hindi bababa sa {0} (na) hilera.",
    // "Please select at least {0} option(s)."
    minSelectError: "Mangyaring pumili ng hindi bababa sa {0} (mga) opsyon.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Mangyaring pumili ng hindi hihigit sa {0} (mga) opsyon.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "Ang '{0}' ay dapat na hindi bababa sa {1} at hindi hihigit sa {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "Ang '{0}' ay dapat na hindi bababa sa {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "Ang '{0}' ay dapat na hindi hihigit sa {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Mangyaring magpasok ng wastong e-mail address.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Ang expression na: {0} ay dapat magbalik ng 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Ang kahilingan ay nagbalik ng error na '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Ang kahilingan ay nagbalik ng walang laman na data o ang 'path' property ay hindi tama",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Ang laki ng file ay hindi dapat lumampas sa {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Mga byte, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Ang maximum na bilang ng mga file na maaari mong i-upload ay {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Hindi ma-upload ang mga file. Mangyaring magdagdag ng handler para sa kaganapang 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Kinakailangan ang tugon: maglagay ng isa pang halaga.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Ina-upload ang iyong file. Mangyaring maghintay ng ilang segundo at subukang muli.",
    // "Loading..."
    loadingFile: "Naglo-load...",
    // "Choose file(s)..."
    chooseFile: "Pumili ng (mga) file...",
    // "No file selected"
    noFileChosen: "Walang napiling file",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "I-drag at i-drop ang isang file dito o i-click ang button sa ibaba upang pumili ng file na ia-upload.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Sigurado ka bang gusto mong tanggalin ang talang ito?",
    // "This value should be unique."
    keyDuplicationError: "Ang halagang ito ay dapat na natatangi.",
    // "Add Column"
    addColumn: "Magdagdag ng Column",
    // "Add Row"
    addRow: "Magdagdag ng hilera",
    // "Remove"
    removeRow: "Alisin",
    // "There are no rows."
    noRowsText: "Walang mga hilera.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Hilera {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Magdagdag ng bago",
    // "Remove"
    removePanel: "Alisin",
    // "Show Details"
    showDetails: "Ipakita ang mga detalye",
    // "Hide Details"
    hideDetails: "Itago ang Mga Detalye",
    // "item"
    choices_Item: "aytem",
    // [Auto-translated] "Choice option"
    choices_Choice: "Pagpipilian sa pagpipilian",
    // "Column"
    matrix_column: "Kolum",
    // "Row"
    matrix_row: "hilera",
    // [Auto-translated] "text"
    multipletext_itemname: "Text",
    // "The results are being saved on the server..."
    savingData: "Ang mga resulta ay sini-save sa server...",
    // "An error occurred and we could not save the results."
    savingDataError: "May naganap na error at hindi namin mai-save ang mga resulta.",
    // "The results were saved successfully!"
    savingDataSuccess: "Matagumpay na na-save ang mga resulta!",
    // "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Ang iyong tugon ay lumampas sa 64KB. Mangyaring bawasan ang laki ng iyong (mga) file at subukang muli o makipag-ugnayan sa may-ari ng survey.",
    // "Try again"
    saveAgainButton: "Subukan muli",
    // [Auto-translated] "min"
    timerMin: "min",
    // [Auto-translated] "sec"
    timerSec: "Sec",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Gumastos ka ng {0} sa pahinang ito at {1} sa kabuuan.",
    // "You have spent {0} on this page."
    timerSpentPage: "Gumastos ka ng {0} sa pahinang ito.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Gumastos ka ng {0} sa kabuuan.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Gumastos ka ng {0} ng {1} sa pahinang ito at {2} ng {3} sa kabuuan.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Gumastos ka ng {0} sa {1} sa pahinang ito.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Gumastos ka ng {0} sa {1} sa kabuuan.",
    // "Clear"
    clearCaption: "Maaliwalas",
    // [Auto-translated] "Select"
    selectCaption: "Piliin",
    // "Sign here"
    signaturePlaceHolder: "Pumirma dito",
    // "No signature"
    signaturePlaceHolderReadOnly: "Walang pirma",
    // "Select File"
    chooseFileCaption: "Piliin ang File",
    // "Take Photo"
    takePhotoCaption: "Kunan ng litrato",
    // "Click the button below to take a photo using the camera."
    photoPlaceholder: "I-click ang button sa ibaba para kumuha ng larawan gamit ang camera.",
    // "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "I-drag at i-drop o pumili ng file na ia-upload o kumuha ng larawan gamit ang camera.",
    // "Replace file"
    replaceFileCaption: "Palitan ang file",
    // "Remove this file"
    removeFileCaption: "Alisin ang file na ito",
    // "Yes"
    booleanCheckedLabel: "Oo",
    // "No"
    booleanUncheckedLabel: "Hindi",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Sigurado ka bang gusto mong alisin ang file na ito: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Sigurado ka bang gusto mong alisin ang lahat ng file?",
    // "Question Title"
    questionTitlePatternText: "Pamagat ng Tanong",
    // "Cancel"
    modalCancelButtonText: "Kanselahin",
    // "Apply"
    modalApplyButtonText: "Mag-apply",
    // "Type to search..."
    filterStringPlaceholder: "I-type para maghanap...",
    // "No data to display"
    emptyMessage: "walang maipakitang datos",
    // [Auto-translated] "Loading..."
    loadingPage: "Naglo-load...",
    // [Auto-translated] "Loading..."
    loadingData: "Naglo-load...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Wala pang entry.\nI-click ang button sa ibaba para magdagdag ng bagong entry.",
    // "No entries"
    noEntriesReadonlyText: "Walang entry",
    // [Auto-translated] "New Panel"
    tabTitlePlaceholder: "Bagong Panel",
    // "More"
    more: "Higit pa",
    // [Auto-translated] "OK"
    tagboxDoneButtonCaption: "OK",
    // "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Ang lahat ng mga pagpipilian ay pinili para sa pagraranggo",
    // "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "I-drag ang mga pagpipilian dito upang i-rank ang mga ito",
    // [Auto-translated] "OK"
    ok: "OK",
    // "Cancel"
    cancel: "Kanselahin",
    // "Create \"{0}\" item..."
    createCustomItem: 'Lumikha ng "{0}" na item ...',
    // [Auto-translated] "Table of contents"
    toc: "Talaan ng mga nilalaman",
    // [Auto-translated] "Progress bar"
    progressbar: "Email Address *"
  };
  surveyCore.setupLocale({ localeCode: "fil", strings: philippinesStrings, nativeName: "filipino", englishName: "Filipino" });

  var slovenianStrings = {
    // "Previous"
    pagePrevText: "Prejšnja",
    // "Next"
    pageNextText: "Naslednja",
    // "Complete"
    completeText: "Zaključi",
    // "Preview"
    previewText: "Predogled",
    // "Edit"
    editText: "Uredi",
    // "Start"
    startSurveyText: "Začni",
    // [Auto-translated] "Please leave a comment"
    commentText: "Prosimo, pustite komentar",
    // "Other (describe)"
    otherItemText: "Drugo (opišite)",
    // "None"
    noneItemText: "Noben",
    // "Refuse to answer"
    refuseItemText: "Zavrni odgovor",
    // "Don't know"
    dontKnowItemText: "Ne vem",
    // "Select All"
    selectAllItemText: "Izberi vse",
    // "Deselect all"
    deselectAllItemText: "Odstrani izbiro",
    // "Page {0} of {1}"
    progressText: "Stran {0} od {1}",
    // "{0} of {1}"
    indexText: "{0} od {1}",
    // "{0} of {1}"
    panelDynamicProgressText: "{0} od {1}",
    // "Panel {panelIndex}"
    panelDynamicTabTextFormat: "Plošča {panelIndex}",
    // "Answered {0}/{1} questions"
    questionsProgressText: "Odgovorjeno {0}/{1} vprašanj",
    // "The survey doesn't contain any visible elements."
    emptySurvey: "Anketa ne vsebuje vidnih elementov.",
    // "Thank you for completing the survey"
    completingSurvey: "Hvala, ker ste izpolnili anketo",
    // "You have already completed this survey."
    completingSurveyBefore: "To anketo ste že izpolnili.",
    // "Loading Survey..."
    loadingSurvey: "Nalaganje ankete...",
    // "Select..."
    placeholder: "Izberite...",
    // "Select..."
    ratingOptionsCaption: "Izberite...",
    // [Auto-translated] "Select..."
    buttongroupOptionsCaption: "Izbrati...",
    // "value"
    value: "vrednost",
    // "Response required."
    requiredError: "Odgovor je obvezen.",
    // "Response required: answer at least one question."
    requiredErrorInPanel: "Obvezen odgovor: odgovorite na vsaj eno vprašanje.",
    // "Response required: answer questions in all rows."
    requiredInAllRowsError: "Obvezen odgovor: odgovorite na vsa vprašanja v vrsticah.",
    // "Each row must have a unique value."
    eachRowUniqueError: "Vsaka vrstica mora imeti edinstveno vrednost.",
    // "The value should be numeric."
    numericError: "Vrednost mora biti številčna.",
    // "The value should not be less than {0}"
    minError: "Vrednost ne sme biti manjša od {0}",
    // [Auto-translated] "Please enter a value that matches the step size of {0}."
    stepError: "Vnesite vrednost, ki se ujema z velikostjo koraka {0}.",
    // "The value should not be greater than {0}"
    maxError: "Vrednost ne sme biti večja od {0}",
    // [Auto-translated] "Invalid input"
    invalidInputError: "Neveljaven vhod",
    // "Numbers are not allowed."
    textNoDigitsAllow: "Številke niso dovoljene.",
    // [Auto-translated] "Please complete the value to match the required format."
    incompletePatternError: "Prosimo, izpolnite vrednost, da ustreza zahtevani obliki.",
    // "Please enter at least {0} character(s)."
    textMinLength: "Vnesite vsaj {0} znakov.",
    // "Please enter no more than {0} character(s)."
    textMaxLength: "Vnesite največ {0} znakov.",
    // "Please enter at least {0} and no more than {1} characters."
    textMinMaxLength: "Vnesite vsaj {0} in največ {1} znakov.",
    // "Please fill in at least {0} row(s)."
    minRowCountError: "Izpolnite vsaj {0} vrstic.",
    // "Please select at least {0} option(s)."
    minSelectError: "Izberite vsaj {0} možnosti.",
    // "Please select no more than {0} option(s)."
    maxSelectError: "Izberite največ {0} možnosti.",
    // "The '{0}' should be at least {1} and at most {2}"
    numericMinMax: "'{0}' mora biti vsaj {1} in največ {2}",
    // "The '{0}' should be at least {1}"
    numericMin: "'{0}' mora biti vsaj {1}",
    // "The '{0}' should be at most {1}"
    numericMax: "'{0}' mora biti največ {1}",
    // "Please enter a valid e-mail address."
    invalidEmail: "Vnesite veljaven e-poštni naslov.",
    // "The expression: {0} should return 'true'."
    invalidExpression: "Izraz: {0} mora vrniti 'true'.",
    // "The request returned error '{0}'. {1}"
    urlRequestError: "Zahteva je vrnila napako '{0}'. {1}",
    // "The request returned empty data or the 'path' property is incorrect"
    urlGetChoicesError: "Zahteva je vrnila prazne podatke ali lastnost 'path' ni pravilna.",
    // "The file size should not exceed {0}."
    exceedMaxSize: "Velikost datoteke ne sme presegati {0}.",
    // [Auto-translated] "Bytes, KB, MB, GB, TB"
    fileSizeUnits: "Bajti, KB, MB, GB, TB",
    // [Auto-translated] "The maximum number of files you can upload is {0}."
    exceedMaxFiles: "Največje število datotek, ki jih lahko naložite, je {0}.",
    // "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event."
    noUploadFilesHandler: "Datotek ni mogoče naložiti. Dodajte obravnavo za dogodek 'onUploadFiles'.",
    // "Response required: enter another value."
    otherRequiredError: "Obvezen odgovor: vnesite drugo vrednost.",
    // "Your file is uploading. Please wait several seconds and try again."
    uploadingFile: "Vaša datoteka se nalaga. Počakajte nekaj sekund in poskusite znova.",
    // "Loading..."
    loadingFile: "Nalaganje...",
    // "Choose file(s)..."
    chooseFile: "Izberite datoteko...",
    // "No file selected"
    noFileChosen: "Ni izbrane datoteke",
    // "Drag and drop a file here or click the button below to select a file to upload."
    filePlaceholder: "Povlecite in spustite datoteko tukaj ali kliknite spodnji gumb za izbiro datoteke za nalaganje.",
    // "Are you sure you want to delete this record?"
    confirmDelete: "Ste prepričani, da želite izbrisati ta zapis?",
    // "This value should be unique."
    keyDuplicationError: "Ta vrednost mora biti edinstvena.",
    // "Add Column"
    addColumn: "Dodaj stolpec",
    // "Add Row"
    addRow: "Dodaj vrstico",
    // "Remove"
    removeRow: "Odstrani",
    // "There are no rows."
    noRowsText: "Ni vrstic.",
    // [Auto-translated] "Row {rowIndex}"
    rowIndexTemplateTitle: "Vrstica {rowIndex}",
    // [Auto-translated] "{rowTitle}"
    rowNameTemplateTitle: "{rowTitle}",
    // "Add new"
    addPanel: "Dodaj novo",
    // "Remove"
    removePanel: "Odstrani",
    // "Show Details"
    showDetails: "Prikaži podrobnosti",
    // "Hide Details"
    hideDetails: "Skrij podrobnosti",
    // "item"
    choices_Item: "postavka",
    // "Choice option"
    choices_Choice: "Možnost izbire",
    // "Column"
    matrix_column: "Stolpec",
    // "Row"
    matrix_row: "Vrstica",
    // "text"
    multipletext_itemname: "besedilo",
    // "The results are being saved on the server..."
    savingData: "Rezultati se shranjujejo na strežnik...",
    // "An error occurred and we could not save the results."
    savingDataError: "Prišlo je do napake in rezultatov ni bilo mogoče shraniti.",
    // "The results were saved successfully!"
    savingDataSuccess: "Rezultati so bili uspešno shranjeni!",
    // "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact the survey owner."
    savingExceedSize: "Vaš odgovor presega 64 KB. Zmanjšajte velikost datotek in poskusite znova ali se obrnite na lastnika ankete.",
    // "Try again"
    saveAgainButton: "Poskusite znova",
    // [Auto-translated] "min"
    timerMin: "min",
    // "sec"
    timerSec: "sek",
    // "You have spent {0} on this page and {1} in total."
    timerSpentAll: "Na tej strani ste porabili {0}, skupno {1}.",
    // "You have spent {0} on this page."
    timerSpentPage: "Na tej strani ste porabili {0}.",
    // "You have spent {0} in total."
    timerSpentSurvey: "Skupaj ste porabili {0}.",
    // "You have spent {0} of {1} on this page and {2} of {3} in total."
    timerLimitAll: "Na tej strani ste porabili {0} od {1} in skupno {2} od {3}.",
    // "You have spent {0} of {1} on this page."
    timerLimitPage: "Na tej strani ste porabili {0} od {1}.",
    // "You have spent {0} of {1} in total."
    timerLimitSurvey: "Skupaj ste porabili {0} od {1}.",
    // "Clear"
    clearCaption: "Počisti",
    // [Auto-translated] "Select"
    selectCaption: "Izbrati",
    // "Sign here"
    signaturePlaceHolder: "Podpišite se tukaj",
    // "No signature"
    signaturePlaceHolderReadOnly: "Ni podpisa",
    // "Select File"
    chooseFileCaption: "Izberi datoteko",
    // "Take Photo"
    takePhotoCaption: "Slikaj",
    // "Click the button below to take a photo using the camera."
    photoPlaceholder: "Kliknite spodnji gumb, da posnamete fotografijo s kamero.",
    // "Drag and drop or select a file to upload or take a photo using the camera."
    fileOrPhotoPlaceholder: "Povlecite in spustite datoteko za nalaganje ali posnemite fotografijo s kamero.",
    // "Replace file"
    replaceFileCaption: "Zamenjaj datoteko",
    // "Remove this file"
    removeFileCaption: "Odstrani to datoteko",
    // "Yes"
    booleanCheckedLabel: "Da",
    // "No"
    booleanUncheckedLabel: "Ne",
    // "Are you sure that you want to remove this file: {0}?"
    confirmRemoveFile: "Ste prepričani, da želite odstraniti to datoteko: {0}?",
    // "Are you sure that you want to remove all files?"
    confirmRemoveAllFiles: "Ste prepričani, da želite odstraniti vse datoteke?",
    // "Question Title"
    questionTitlePatternText: "Naslov vprašanja",
    // "Cancel"
    modalCancelButtonText: "Prekliči",
    // "Apply"
    modalApplyButtonText: "Uporabi",
    // "Type to search..."
    filterStringPlaceholder: "Vnesite za iskanje...",
    // "No data to display"
    emptyMessage: "Ni podatkov za prikaz",
    // [Auto-translated] "Loading..."
    loadingPage: "Nakladanje...",
    // [Auto-translated] "Loading..."
    loadingData: "Nakladanje...",
    // "No entries yet.\nClick the button below to add a new entry."
    noEntriesText: "Ni še vnosov.\nKliknite spodnji gumb za dodajanje novega vnosa.",
    // "No entries"
    noEntriesReadonlyText: "Ni vnosov",
    // "New Panel"
    tabTitlePlaceholder: "Nova plošča",
    // "More"
    more: "Več",
    // "OK"
    tagboxDoneButtonCaption: "V redu",
    // "All choices are selected for ranking"
    selectToRankEmptyRankedAreaText: "Vse možnosti so izbrane za razvrščanje",
    // "Drag choices here to rank them"
    selectToRankEmptyUnrankedAreaText: "Povlecite izbire sem, da jih razvrstite",
    // "OK"
    ok: "V redu",
    // "Cancel"
    cancel: "Prekliči",
    // "Create \"{0}\" item..."
    createCustomItem: "Ustvari element »{0}« ...",
    // [Auto-translated] "Table of contents"
    toc: "Kazalo vsebine",
    // [Auto-translated] "Progress bar"
    progressbar: "Vrstica napredovanja"
  };
  surveyCore.setupLocale({ localeCode: "sl", strings: slovenianStrings, nativeName: "slovenščina", englishName: "Slovenian" });

}));
