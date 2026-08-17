(function(){
/* ================= ИКОНКИ ================= */
var I = {
  home:'<circle cx="12" cy="12" r="8.2" stroke="currentColor" stroke-width="1.8" opacity=".35"/><path d="M12 3.8a8.2 8.2 0 0 1 7 12.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="12" r="2.1" fill="currentColor"/>',
  team:'<rect x="3" y="8.5" width="5" height="10" rx="2.5" stroke="currentColor" stroke-width="1.8"/><rect x="9.5" y="5" width="5" height="13.5" rx="2.5" stroke="currentColor" stroke-width="1.8"/><rect x="16" y="10.5" width="5" height="8" rx="2.5" stroke="currentColor" stroke-width="1.8"/>',
  tasks:'<rect x="3.5" y="3.5" width="17" height="17" rx="5.5" stroke="currentColor" stroke-width="1.8"/><path d="m8.4 12.2 2.5 2.5 4.7-5" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>',
  profile:'<circle cx="12" cy="8.6" r="3.7" stroke="currentColor" stroke-width="1.8"/><path d="M5.4 20c.6-3.6 3.3-5.7 6.6-5.7s6 2.1 6.6 5.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  plus:'<path d="M12 5.5v13M5.5 12h13" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"/>',
  mic:'<rect x="9" y="2.6" width="6" height="11" rx="3" stroke="currentColor" stroke-width="1.8"/><path d="M5.5 11.2v.8a6.5 6.5 0 0 0 13 0v-.8M12 18.5V21.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  keyb:'<rect x="2.5" y="5.5" width="19" height="13" rx="4.5" stroke="currentColor" stroke-width="1.8"/><path d="M7 10h.01M11 10h.01M15 10h.01M8 14h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.9"/><path d="m15.5 15.5 4 4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>',
  chat:'<path d="M4 6.5A3.5 3.5 0 0 1 7.5 3h9A3.5 3.5 0 0 1 20 6.5v6a3.5 3.5 0 0 1-3.5 3.5H10l-4.6 3.4A.8.8 0 0 1 4 18.8V6.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  clock:'<circle cx="12" cy="12" r="8.4" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.5V12l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  check:'<path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  bell:'<path d="M12 3.4a5.6 5.6 0 0 1 5.6 5.6c0 4.4 1.4 5.6 1.4 5.6H5s1.4-1.2 1.4-5.6A5.6 5.6 0 0 1 12 3.4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M10.2 18a2 2 0 0 0 3.6 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  globe:'<circle cx="12" cy="12" r="8.4" stroke="currentColor" stroke-width="1.8"/><path d="M3.6 12h16.8M12 3.6c2.2 2.3 3.3 5.2 3.3 8.4s-1.1 6.1-3.3 8.4c-2.2-2.3-3.3-5.2-3.3-8.4S9.8 5.9 12 3.6Z" stroke="currentColor" stroke-width="1.8"/>',
  lock:'<rect x="4.5" y="10" width="15" height="10.5" rx="4" stroke="currentColor" stroke-width="1.8"/><path d="M8.4 10V7.6a3.6 3.6 0 0 1 7.2 0V10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  pin:'<path d="M12 21c4-4.2 6-7.2 6-9.9A6 6 0 0 0 6 11.1C6 13.8 8 16.8 12 21Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="11" r="2.3" stroke="currentColor" stroke-width="1.8"/>',
  spark:'<path d="M12 3.6 13.8 9l5.4 1.8-5.4 1.8L12 18l-1.8-5.4L4.8 10.8 10.2 9 12 3.6Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  card:'<rect x="2.8" y="5.4" width="18.4" height="13.2" rx="4.5" stroke="currentColor" stroke-width="1.8"/><path d="M2.8 10h18.4" stroke="currentColor" stroke-width="1.8"/>',
  car:'<path d="m6 9.5 6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  cloud:'<path d="M7.5 18.5A4.5 4.5 0 0 1 7 9.6a5.5 5.5 0 0 1 10.4 1.5A3.9 3.9 0 0 1 17 18.5H7.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m4 4 16 16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  box:'<path d="M3.5 8.2 12 4l8.5 4.2v7.6L12 20l-8.5-4.2V8.2Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M3.5 8.2 12 12.5l8.5-4.3M12 12.5V20" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>'
};
function ic(k, w){ return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"' + (w ? ' style="width:' + w + 'px;height:' + w + 'px"' : '') + '>' + I[k] + '</svg>'; }

/* ================= ДАННЫЕ ================= */
var POINTS = [
  {id:'all',name:'Все точки'},{id:'tver',name:'Тверская'},{id:'sokol',name:'Сокол'},
  {id:'spb',name:'Невский'},{id:'kzn',name:'Казань'}
];
var AVC = {boss:'#6F7C8E', owner:'#8A7F73', petrov:'#77857A', sidorov:'#7C7486', alekseeva:'#8A7A78', gafurov:'#6D8189', melnik:'#87826B'};
var PEOPLE = [
  {id:'petrov',    nm:'Алексей Петров',  ps:'Управляющий точкой', pt:'tver',  load:82, ok:86},
  {id:'sidorov',   nm:'Иван Сидоров',    ps:'Менеджер',           pt:'sokol', load:41, ok:94},
  {id:'alekseeva', nm:'Мария Алексеева', ps:'Бухгалтер',          pt:'tver',  load:67, ok:78},
  {id:'gafurov',   nm:'Рустам Гафуров',  ps:'Старший смены',      pt:'spb',   load:91, ok:71},
  {id:'melnik',    nm:'Ольга Мельник',   ps:'Администратор',      pt:'kzn',   load:38, ok:90}
];
var EXTRA = [
  {id:'boss',  nm:'Александр Смирнов', ps:'Операционный директор', pt:'tver'},
  {id:'owner', nm:'Наталья Ремизова',  ps:'Собственник',           pt:'tver'}
];
function who(id){
  for (var i=0;i<PEOPLE.length;i++) if (PEOPLE[i].id===id) return PEOPLE[i];
  for (var j=0;j<EXTRA.length;j++) if (EXTRA[j].id===id) return EXTRA[j];
  return {id:id, nm:'—', ps:''};
}

/* acc: 0 — не принята, 1 — принята */
var TASKS = [
  {id:1, t:'Проверить счета поставщиков за июль', a:'boss', who:'alekseeva', pt:'tver', st:'overdue', grp:'overdue', acc:1, time:100, exec:62,
   dl:'Вчера, 18:00', left:'просрочено на 20 ч',
   res:'Список всех счетов за июль с расхождениями, передан руководителю',
   desc:'Сверить счета с договорами и актами, выделить расхождения.',
   subs:[['Собрать счета',1],['Проверить данные',1],['Найти расхождения',0],['Составить список',0]],
   why:'Прогресс встал на третьем шаге, последнее обновление вчера в 16:40.'},
  {id:6, t:'Устранить замечания санитарного аудита', a:'boss', who:'gafurov', pt:'spb', st:'overdue', grp:'overdue', acc:1, time:100, exec:45,
   dl:'Позавчера, 12:00', left:'просрочено на 2 дня',
   res:'Все 7 замечаний закрыты, по каждому приложено фото',
   desc:'Закрыть замечания проверки, приложить подтверждающие фото.',
   subs:[['Замечания 1–3',1],['Замечания 4–5',0],['Замечания 6–7',0]],
   why:'Второй перенос срока, исполнитель загружен на 91%.'},
  {id:2, t:'Инвентаризация склада, A-группа', a:'boss', who:'gafurov', pt:'spb', st:'attention', grp:'today', acc:1, time:82, exec:30,
   dl:'Сегодня, 18:00', left:'осталось 3 ч 42 мин',
   res:'Сверенная ведомость по 140 позициям с отметкой расхождений',
   desc:'Пересчитать позиции A-группы, зафиксировать расхождения с учётной системой.',
   subs:[['Выгрузить ведомость',1],['Пересчитать зал',0],['Пересчитать склад',0],['Свести расхождения',0]],
   why:'Времени прошло 82%, выполнено 30%. Похожие инвентаризации занимали 6 часов.'},
  {id:15, t:'Заменить разбитое стекло витрины', a:'boss', who:'gafurov', pt:'spb', st:'attention', grp:'today', acc:0, time:100, exec:0, over:1,
   dl:'Сегодня, 12:00', left:'просрочено на 2 ч',
   res:'Стекло заменено, фото витрины отправлено',
   desc:'Вызвать подрядчика, проконтролировать замену, прислать фото.',
   subs:[['Вызвать подрядчика',0],['Проконтролировать',0],['Прислать фото',0]],
   why:'Поручение не принято четыре часа. Срок уже прошёл.'},
  {id:3, t:'Документы для клиента «Промресурс»', a:'boss', who:'petrov', pt:'tver', st:'attention', grp:'today', acc:1, time:64, exec:40,
   dl:'Сегодня, 19:00', left:'осталось 4 ч 42 мин',
   res:'Договор, спецификация и счёт отправлены клиенту на почту',
   desc:'Собрать пакет документов, согласовать спецификацию, отправить клиенту.',
   subs:[['Подготовить договор',1],['Согласовать спецификацию',0],['Выставить счёт',0]],
   why:'Исполнитель загружен на 82% и сегодня закрывает ещё два срока.'},
  {id:4, t:'Обзвонить клиентов по вчерашним заявкам', a:'boss', who:'sidorov', pt:'sokol', st:'progress', grp:'today', acc:1, time:48, exec:70,
   dl:'Сегодня, 20:00', left:'осталось 5 ч 42 мин',
   res:'Все 18 заявок обработаны, результат каждого звонка зафиксирован',
   desc:'Прозвонить заявки, зафиксировать результат, отметить отказы.',
   subs:[['Первые 9 заявок',1],['Оставшиеся 9 заявок',0]], why:''},
  {id:5, t:'Приёмка поставки и фотофиксация', a:'boss', who:'melnik', pt:'kzn', st:'review', grp:'today', acc:1, time:90, exec:100,
   dl:'Сегодня, 14:00', left:'сдано в 13:48',
   res:'Фото всех паллет, акт приёмки с отметкой о бое',
   desc:'Принять поставку, сверить с накладной, сфотографировать повреждения.',
   subs:[['Сверить накладную',1],['Сфотографировать бой',1],['Оформить акт',1]], why:''},
  {id:8, t:'Заменить ценники по новому прайсу', a:'boss', who:'melnik', pt:'kzn', st:'progress', grp:'tomorrow', acc:0, time:55, exec:0,
   dl:'Завтра, 12:00', left:'осталось 21 ч',
   res:'Ценники в зале соответствуют прайсу, приложено фото стеллажей',
   desc:'Распечатать и заменить ценники согласно новому прайсу.',
   subs:[['Распечатать',0],['Заменить в зале',0],['Фотоотчёт',0]], why:''},
  {id:11, t:'Провести планёрку по итогам недели', a:'boss', who:'petrov', pt:'tver', st:'progress', grp:'tomorrow', acc:1, time:30, exec:33,
   dl:'Завтра, 09:30', left:'осталось 19 ч',
   res:'Протокол планёрки с задачами на неделю разослан участникам',
   desc:'Собрать итоги недели, подготовить повестку, провести встречу.',
   subs:[['Собрать цифры',1],['Подготовить повестку',0],['Разослать протокол',0]], why:''},
  {id:12, t:'Согласовать смету на ремонт витрины', a:'boss', who:'sidorov', pt:'sokol', st:'progress', grp:'after', acc:1, time:25, exec:33,
   dl:'13 августа, 15:00', left:'осталось 2 дня',
   res:'Смета согласована с собственником, подрядчик уведомлён',
   desc:'Получить сметы от двух подрядчиков, сравнить, согласовать.',
   subs:[['Запросить сметы',1],['Сравнить',0],['Согласовать',0]], why:''},
  {id:10, t:'Обучить кассира работе с возвратами', a:'boss', who:'alekseeva', pt:'tver', st:'progress', grp:'week', acc:1, time:35, exec:50,
   dl:'15 августа, 18:00', left:'осталось 4 дня',
   res:'Кассир самостоятельно оформляет возврат, проверено на трёх операциях',
   desc:'Провести обучение, проверить на практике.',
   subs:[['Теория',1],['Практика',0]], why:''},
  {id:13, t:'Сверить остатки по алкогольной группе', a:'boss', who:'sidorov', pt:'sokol', st:'review', grp:'week', acc:1, time:76, exec:100,
   dl:'16 августа, 16:00', left:'сдано досрочно',
   res:'Ведомость сверки с объяснением расхождений',
   desc:'Сверить остатки, объяснить расхождения.',
   subs:[['Выгрузить данные',1],['Сверить',1],['Объяснить расхождения',1]], why:''},
  {id:7, t:'График смен на сентябрь', a:'boss', who:'petrov', pt:'tver', st:'progress', grp:'month', acc:1, time:22, exec:0,
   dl:'22 августа, 18:00', left:'осталось 11 дней',
   res:'Утверждённый график на точку, доведён до сотрудников',
   desc:'Собрать пожелания, составить график, согласовать.',
   subs:[['Собрать пожелания',0],['Составить черновик',0],['Согласовать',0]], why:''},
  {id:14, t:'Подготовить точку к осеннему ассортименту', a:'boss', who:'melnik', pt:'kzn', st:'progress', grp:'later', acc:1, time:8, exec:0,
   dl:'12 сентября, 18:00', left:'осталось больше месяца',
   res:'Зал переоформлен, новая матрица выставлена, фото направлено руководителю',
   desc:'Согласовать матрицу, заказать оформление, перевыложить зал.',
   subs:[['Согласовать матрицу',0],['Заказать оформление',0],['Перевыложить зал',0]], why:''},

  /* поручения самому руководителю — вкладка «Мне поручили» */
  {id:20, t:'Свести отчёт по выручке сети за июль', a:'owner', who:'boss', pt:'tver', st:'attention', grp:'today', acc:0, time:70, exec:0,
   dl:'Сегодня, 20:00', left:'осталось 5 ч 42 мин',
   res:'Сводный отчёт по четырём точкам с комментарием по отклонениям',
   desc:'Собрать выручку по точкам, объяснить отклонения от плана.',
   subs:[['Выгрузить данные',0],['Свести таблицу',0],['Написать комментарий',0]], why:''},
  {id:21, t:'Подготовить предложение по новой точке в Самаре', a:'owner', who:'boss', pt:'tver', st:'progress', grp:'week', acc:1, time:40, exec:33,
   dl:'17 августа, 18:00', left:'осталось 5 дней',
   res:'Расчёт окупаемости и список из трёх помещений с арендой',
   desc:'Найти помещения, посчитать окупаемость, подготовить презентацию.',
   subs:[['Подобрать помещения',1],['Посчитать окупаемость',0],['Собрать презентацию',0]], why:''},
  {id:22, t:'Согласовать бюджет на обучение персонала', a:'owner', who:'boss', pt:'tver', st:'progress', grp:'month', acc:1, time:15, exec:0,
   dl:'25 августа, 18:00', left:'осталось 14 дней',
   res:'Бюджет утверждён собственником, программа обучения зафиксирована',
   desc:'Посчитать стоимость обучения, согласовать с собственником.',
   subs:[['Собрать сметы',0],['Согласовать',0]], why:''},

  /* поручение, выданное сотрудником — чтобы вкладка «Я поручил» жила и у него */
  {id:23, t:'Подготовить зал к утренней приёмке', a:'gafurov', who:'melnik', pt:'spb', st:'progress', grp:'tomorrow', acc:1, time:20, exec:50,
   dl:'Завтра, 08:00', left:'осталось 17 ч',
   res:'Зал освобождён под паллеты, проходы размечены',
   desc:'Освободить место под поставку, разметить проходы.',
   subs:[['Освободить место',1],['Разметить проходы',0]], why:''},

  /* архив — закрытые поручения */
  {id:30, t:'Провести ревизию кассовой дисциплины', a:'boss', who:'alekseeva', pt:'tver', st:'done', grp:'arch', acc:1, time:100, exec:100,
   dl:'8 августа, 18:00', left:'закрыто 8 августа', closed:'8 августа', mark:'Принято',
   res:'Отчёт по кассовой дисциплине за июль с выявленными нарушениями',
   desc:'Проверить кассовые смены за июль, зафиксировать нарушения.',
   subs:[['Выгрузить смены',1],['Проверить',1],['Составить отчёт',1]], why:''},
  {id:31, t:'Заказать форму для новых сотрудников', a:'boss', who:'melnik', pt:'kzn', st:'done', grp:'arch', acc:1, time:100, exec:100,
   dl:'6 августа, 15:00', left:'закрыто 6 августа', closed:'6 августа', mark:'Принято с замечаниями',
   res:'Форма заказана, срок поставки подтверждён поставщиком',
   desc:'Снять размеры, оформить заказ, подтвердить сроки.',
   subs:[['Снять размеры',1],['Оформить заказ',1]], why:''},
  {id:32, t:'Обновить график уборки на августе', a:'boss', who:'gafurov', pt:'spb', st:'done', grp:'arch', acc:1, time:100, exec:100,
   dl:'4 августа, 12:00', left:'закрыто 5 августа', closed:'5 августа', mark:'Принято, закрыто с просрочкой',
   res:'График уборки утверждён и вывешен в подсобном помещении',
   desc:'Составить график, согласовать с клининговой службой.',
   subs:[['Составить',1],['Согласовать',1],['Вывесить',1]], why:''},
  {id:33, t:'Свести отчёт по выручке сети за июнь', a:'owner', who:'boss', pt:'tver', st:'done', grp:'arch', acc:1, time:100, exec:100,
   dl:'5 августа, 20:00', left:'закрыто 5 августа', closed:'5 августа', mark:'Принято',
   res:'Сводный отчёт по четырём точкам с комментарием по отклонениям',
   desc:'Собрать выручку по точкам, объяснить отклонения.',
   subs:[['Выгрузить',1],['Свести',1],['Прокомментировать',1]], why:''}
];

/* приоритет: показываем только критический и высокий, обычный не шумит */
var PRIO = {2:'crit', 6:'crit', 15:'crit', 3:'high', 20:'high', 1:'high', 12:'high'};
function prioOf(t){ return PRIO[t.id] || 'norm'; }

/* напоминания себе — отдельная сущность, без принятия, отчёта и проверки */
var REMINDERS = [
  {id:'r1', own:'boss', t:'Согласовать смету по витрине с собственником', when:'Сегодня, 17:00', done:0},
  {id:'r2', own:'boss', t:'Перезвонить в банк по эквайрингу', when:'Завтра, 11:00', done:0},
  {id:'r3', own:'boss', t:'Забрать документы у юриста', when:'14 августа', done:1},
  {id:'r4', own:'gafurov', t:'Взять ключи от подсобки у охраны', when:'Сегодня, 08:00', done:0}
];

var GROUPS = [
  ['overdue','Просрочено','var(--crit)'], ['today','Сегодня','var(--fg)'],
  ['tomorrow','Завтра','var(--fg)'], ['after','Послезавтра','var(--fg-2)'],
  ['week','На неделе','var(--fg-2)'], ['month','В этом месяце','var(--fg-3)'],
  ['later','Потом','var(--soft-2)']
];
var SEV = {overdue:'var(--crit)', attention:'var(--warn)', review:'var(--ok)', progress:'var(--soft-2)'};

var S = {
  role:'boss', view:'home', point:'all', tab:'in', task:null, person:null, q:'',
  sub:{}, reported:{}, acc:{}, comments:{}, postpone:{}, undo:null,
  collapsed:{}, offline:false, queue:[], hFilter:null, pinged:{}, log:{}, read:{}, rem:{},
  from:null, mfrom:null, draft:{}, fresh:false, expand:{}, loadOpen:{}, edited:{}, onb:{},
  notif:{push:1, email:0, quiet:1, digestAm:1, digestPm:0, limit:1}
};
function me(){ return S.role==='boss' ? 'boss' : 'gafurov'; }

var $ = function(id){ return document.getElementById(id); };
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
function task(id){ for (var i=0;i<TASKS.length;i++) if (TASKS[i].id===id) return TASKS[i]; }
function pointName(id){ for (var i=0;i<POINTS.length;i++) if (POINTS[i].id===id) return POINTS[i].name; return ''; }
function initials(n){ var p = n.split(' '); return (p[0][0] + (p[1] ? p[1][0] : '')).toUpperCase(); }
function avatar(id, cls){ var p = who(id); return '<span class="av' + (cls ? ' ' + cls : '') + '" style="background:' + (AVC[id] || '#7B8189') + '">' + initials(p.nm) + '</span>'; }
function byPoint(l){ if (S.fresh) return []; return S.point==='all' ? l : l.filter(function(x){ return x.pt===S.point; }); }

/* ================= ВРЕМЯ =================
   Срок задачи хранится реальной меткой t.at. Текст срока, группа в списке,
   просрочка и обратный отсчёт считаются от неё, а не вписаны в данные руками. */
var DAY = 86400000;
var WDAY = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
var MON  = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
function nowMs(){ return Date.now(); }
function pad(n){ return n < 10 ? '0' + n : '' + n; }
function dayStart(ms){ var d = new Date(ms); d.setHours(0,0,0,0); return d.getTime(); }
function dayDiff(ms){ return Math.round((dayStart(ms) - dayStart(nowMs())) / DAY); }
function atTime(ms, hh, mm){ return dayStart(ms) + hh * 3600000 + mm * 60000; }
function parseHM(s){ var m = String(s).match(/(\d{1,2}):(\d{2})/); return m ? [+m[1], +m[2]] : [18, 0]; }
/* «завтра», «в пятницу», «через 3 дня» — разбираем словами, как говорит руководитель */
function parseDay(s){
  var l = String(s).toLowerCase();
  if (l.indexOf('позавчера') >= 0) return -2;
  if (l.indexOf('вчера') >= 0) return -1;
  if (l.indexOf('сегодня') >= 0) return 0;
  if (l.indexOf('послезавтра') >= 0) return 2;
  if (l.indexOf('завтра') >= 0) return 1;
  var stem = ['воскресень','понедельник','вторник','сред','четверг','пятниц','суббот'];
  for (var i = 0; i < stem.length; i++){
    if (l.indexOf(stem[i]) >= 0){
      var d = (i - new Date(nowMs()).getDay() + 7) % 7;
      return d === 0 ? 7 : d;
    }
  }
  var num = l.match(/(\d{1,2})\s*(августа|сентября|октября|ноября|декабря|января|февраля|марта|апреля|мая|июня|июля)/);
  if (num){
    var mi = MON.indexOf(num[2]);
    var dt = new Date(nowMs()); dt.setMonth(mi, +num[1]);
    var off = dayDiff(dt.getTime());
    return off < -180 ? off + 365 : off;
  }
  return null;
}
function parseDl(s){
  var hm = parseHM(s), off = parseDay(s);
  return atTime(nowMs() + (off === null ? 0 : off) * DAY, hm[0], hm[1]);
}
function dlOf(t){
  var off = dayDiff(t.at), d = new Date(t.at), hm = pad(d.getHours()) + ':' + pad(d.getMinutes());
  if (off === -2) return 'Позавчера, ' + hm;
  if (off === -1) return 'Вчера, ' + hm;
  if (off === 0)  return 'Сегодня, ' + hm;
  if (off === 1)  return 'Завтра, ' + hm;
  if (off === 2)  return 'Послезавтра, ' + hm;
  if (off > 2 && off <= 7) return WDAY[d.getDay()] + ', ' + hm;
  return d.getDate() + ' ' + MON[d.getMonth()] + ', ' + hm;
}
function plural(n, a, b, c){
  var d = n % 100; if (d > 10 && d < 20) return c;
  d = n % 10; return d === 1 ? a : (d > 1 && d < 5 ? b : c);
}
/* живой обратный отсчёт: тикает каждую секунду, не дожидаясь перерисовки */
function leftOf(t){
  if (t.st === 'done') return 'закрыто';
  var ms = t.at - nowMs(), over = ms < 0, a = Math.abs(ms);
  var dd = Math.floor(a / DAY), hh = Math.floor(a % DAY / 3600000);
  var mm = Math.floor(a % 3600000 / 60000), ss = Math.floor(a % 60000 / 1000);
  var out;
  if (dd > 0)      out = dd + ' ' + plural(dd, 'день', 'дня', 'дней') + ' ' + hh + ' ч';
  else if (hh > 0) out = hh + ' ч ' + pad(mm) + ' мин';
  else             out = mm + ' мин ' + pad(ss) + ' с';
  return over ? 'просрочено на ' + out : out;
}
function grpOf(t){
  if (t.st === 'done') return 'arch';
  if (t.at < nowMs()) return 'overdue';
  var off = dayDiff(t.at);
  if (off === 0) return 'today';
  if (off === 1) return 'tomorrow';
  if (off === 2) return 'after';
  if (off <= 7)  return 'week';
  if (off <= 31) return 'month';
  return 'later';
}
/* доля прошедшего времени от постановки до срока */
function timeOf(t){
  var total = t.at - t.born;
  if (total <= 0) return 100;
  return Math.max(0, Math.min(100, Math.round((nowMs() - t.born) / total * 100)));
}

function isAcc(t){ return S.acc[t.id] !== undefined ? S.acc[t.id] : t.acc; }
function subsOf(t){ return S.sub[t.id] || t.subs.map(function(s){ return s[1]; }); }
function execOf(t){
  if (!isAcc(t)) return 0;
  var s = subsOf(t);
  if (!s.length) return 0;
  return Math.round(s.filter(function(x){ return x; }).length / s.length * 100);
}
/* просрочка — признак, а не статус: считается от срока и не теряется при смене состояния */
function isOver(t){ return t.st !== 'done' && t.at < nowMs(); }
function riskOf(t){
  var e = execOf(t);
  if (t.st==='done')    return {c:'lo', s:'Закрыто ' + t.closed + ' · ' + t.mark};
  if (t.st==='review')  return isOver(t) ? {c:'hi', s:'Сдано с опозданием, ждёт проверки'}
                                         : {c:'lo', s:'Сдано, ждёт проверки'};
  if (isOver(t))        return {c:'hi', s:'Просрочено'};
  if (!isAcc(t))        return {c:'hi', s:'Не принято исполнителем'};
  var g = timeOf(t) - e;
  if (g >= 35) return {c:'hi', s:'Высокий риск просрочки'};
  if (g >= 15) return {c:'md', s:'Отставание от графика'};
  return {c:'lo', s:'Идёт по графику'};
}
function execColor(t){
  var c = riskOf(t).c;
  return c==='hi' ? 'var(--crit)' : (c==='md' ? 'var(--warn)' : 'var(--ok)');
}
/* привязываем демо-данные к текущему моменту: срок из слов («Вчера, 18:00») становится меткой времени */
function initTasks(){
  TASKS.forEach(function(t){
    var hm = parseHM(t.dl), off = parseDay(t.dl);
    if (off === null){
      var byGrp = {overdue:-1, today:0, tomorrow:1, after:2, week:4, month:14, later:40, arch:-4};
      off = byGrp[t.grp] !== undefined ? byGrp[t.grp] : 0;
    }
    t.at = atTime(nowMs() + off * DAY, hm[0], hm[1]);
    /* просрочка больше не статус — состояние работы и срок разведены */
    if (t.st === 'overdue') t.st = 'progress';
    delete t.over;
    t.born = t.at - (t.span || 3) * DAY;
    t.grp = grpOf(t);
    S.sub[t.id] = t.subs.map(function(s){ return s[1]; });
  });
}
function nextId(){ var m = 0; TASKS.forEach(function(t){ if (t.id > m) m = t.id; }); return m + 1; }
/* единственное место, где рождается поручение */
function makeTask(o){
  var t = {
    id: nextId(), t: o.t || 'Без названия', a: me(), who: o.who, pt: o.pt,
    st: 'progress', acc: 0, at: o.at, born: nowMs(),
    res: o.res || '', desc: o.desc || '',
    subs: (o.subs || []).map(function(x){ return [x, 0]; }), why: ''
  };
  t.grp = grpOf(t);
  if (o.prio && o.prio !== 'norm') PRIO[t.id] = o.prio;
  TASKS.push(t);
  S.sub[t.id] = t.subs.map(function(s){ return s[1]; });
  return t;
}
function collectSubs(root){
  var out = [];
  (root || document).querySelectorAll('[data-newsub] .lb').forEach(function(x){ out.push(x.textContent); });
  return out;
}
function readPrio(){
  var el = document.querySelector('#mPrio .radio[aria-pressed="true"]');
  return el && el.dataset.prio ? el.dataset.prio : 'norm';
}
function val(id, dflt){ var n = $(id); return n && n.value ? n.value : (dflt || ''); }
/* откат: снимок задачи до действия, а не одна захардкоженная ветка */
function snapOf(t){
  return {id:t.id, st:t.st, grp:t.grp, at:t.at, who:t.who, closed:t.closed, mark:t.mark,
          acc:S.acc[t.id], sub:S.sub[t.id] ? S.sub[t.id].slice() : undefined,
          reported:S.reported[t.id], pinged:S.pinged[t.id]};
}
function armUndo(t){ S.undo = {kind:'snap', snap: snapOf(t)}; }
function armUndoNew(id){ S.undo = {kind:'new', id: id}; }
function applyUndo(){
  var u = S.undo; S.undo = null;
  if (!u) return false;
  if (u.kind === 'new'){
    for (var i = 0; i < TASKS.length; i++) if (TASKS[i].id === u.id){ TASKS.splice(i, 1); break; }
    delete S.sub[u.id]; delete PRIO[u.id];
    if (S.task === u.id){ S.task = null; S.view = 'tasks'; }
    return true;
  }
  var s = u.snap, t = task(s.id);
  if (!t) return false;
  t.st = s.st; t.grp = s.grp; t.at = s.at; t.who = s.who;
  if (s.closed === undefined) delete t.closed; else t.closed = s.closed;
  if (s.mark === undefined) delete t.mark; else t.mark = s.mark;
  if (s.acc === undefined) delete S.acc[t.id]; else S.acc[t.id] = s.acc;
  if (s.sub === undefined) delete S.sub[t.id]; else S.sub[t.id] = s.sub;
  if (s.reported === undefined) delete S.reported[t.id]; else S.reported[t.id] = s.reported;
  if (s.pinged === undefined) delete S.pinged[t.id]; else S.pinged[t.id] = s.pinged;
  return true;
}
/* мои поручения / выданные мной */
/* новая компания: данных ещё нет */
function live(l){ if (S.fresh) return []; return l.filter(function(t){ return t.st !== 'done'; }); }
function backTo(){ return (S.from && S.from !== S.view) ? S.from : 'tasks'; }
function manualBack(){ return S.mfrom || 'home'; }
function goto(view, keepFrom){
  if (!keepFrom && (view === 'task' || view === 'person')) S.from = S.view;
  S.view = view;
}
function inbox(){ return live(TASKS.filter(function(t){ return t.who === me(); })); }
function outbox(){ return byPoint(live(TASKS.filter(function(t){ return t.a === me() && t.who !== me(); }))); }
function archive(){ if (S.fresh) return []; return TASKS.filter(function(t){ return t.st === 'done' && (t.who === me() || t.a === me()); }); }
function needAttention(){
  return outbox().filter(function(t){
    return isOver(t) || !isAcc(t) || t.st==='review' || S.postpone[t.id] || riskOf(t).c==='hi' || riskOf(t).c==='md';
  });
}

/* ================= КОМПОНЕНТЫ ================= */
/* внутри группы «сегодня/завтра» дата уже сказана заголовком — оставляем время */
function whenText(t, inGroup){
  var txt = dlOf(t);
  if (!inGroup) return txt;
  var g = grpOf(t);
  if (g==='today' || g==='tomorrow' || g==='after' || g==='overdue'){
    var m = txt.match(/(\d{1,2}:\d{2})/);
    return m ? m[1] : txt;
  }
  return txt;
}
function unread(t){
  var c = S.comments[t.id] || [];
  if (!c.length) return 0;
  var last = c[c.length - 1];
  return (last.who !== me() && !S.read[t.id]) ? 1 : 0;
}
function item(t, showWhy, inGroup){
  var p = who(t.who), r = riskOf(t), e = execOf(t), pr = prioOf(t);
  var mineTask = t.who === me();
  var flags = [];
  if (isOver(t)) flags.push('<span class="flag">просрочено</span>');
  if (!isAcc(t)) flags.push('<span class="new">' + (mineTask ? 'новое, не принято' : 'не принято') + '</span>');
  if (S.postpone[t.id]) flags.push('<span class="flag">запрос переноса</span>');
  if (unread(t)) flags.push('<span class="new">новое сообщение</span>');
  else if ((S.comments[t.id] || []).length) flags.push('<span>' + S.comments[t.id].length + ' сообщ.</span>');

  return '<button class="item" data-task="' + t.id + '">' +
    '<span class="dot" style="background:' + (isOver(t) ? 'var(--crit)' : SEV[t.st]) + '"></span>' +
    '<span style="min-width:0;display:flex;gap:11px;align-items:center">' +
    (mineTask ? '' : '<span class="av sm" style="background:' + (AVC[t.who] || "#7B8189") + '">' + initials(p.nm) + '</span>') +
    '<span style="min-width:0"><span class="t">' +
      (pr==='crit' ? '<span class="prio crit">!</span>' : (pr==='high' ? '<span class="prio high">!</span>' : '')) +
      esc(t.t) + '</span>' +
      '<span class="m">' + (mineTask ? '' : esc(p.nm) + ' · ') + esc(whenText(t, inGroup)) +
        (S.point==='all' && !mineTask ? ' · ' + esc(pointName(t.pt)) : '') +
        (flags.length ? ' · ' + flags.join(' · ') : '') + '</span></span>' +
    '</span>' +
    '<span class="dl"><span class="bar slim"><i style="width:' + e + '%;background:' + execColor(t) + '"></i></span></span>' +
    '<span class="pct">' + e + '%</span>' +
    (showWhy && (t.why || r.c==='hi') ? '<span class="why">' + esc(t.why || r.s) + '</span>' : '') +
  '</button>';
}

function groupedList(list){
  var any = false;
  var html = GROUPS.map(function(g){
    var l = list.filter(function(t){ return grpOf(t) === g[0]; });
    if (!l.length) return '';
    any = true;
    var off = !!S.collapsed[g[0]];
    var LIM = 20, shown = S.expand[g[0]] ? l : l.slice(0, LIM), rest = l.length - shown.length;
    return '<div class="group' + (off ? ' closed' : '') + '">' +
      '<button class="group-h' + (off ? ' closed' : '') + '" data-group="' + g[0] + '" aria-expanded="' + !off + '">' +
        '<h3 style="color:' + g[2] + '">' + g[1] + '</h3>' + ic('car') .replace('<svg', '<svg class="car"') +
        '<span class="n">' + l.length + '</span></button>' +
      '<div class="tasklist">' + shown.map(function(t){ return item(t, false, true); }).join('') +
        (rest > 0 ? '<button class="pill" data-expand="' + g[0] + '" style="justify-self:start;margin-top:4px">Показать ещё ' + rest + '</button>' : '') +
      '</div></div>';
  }).join('');
  return any ? html : '<div class="empty">Здесь пусто</div>';
}

/* напоминания себе */
function reminders(){ if (S.fresh) return []; return REMINDERS.filter(function(r){ return r.own === me(); }); }
function remDone(r){ return S.rem[r.id] !== undefined ? S.rem[r.id] : r.done; }
function remList(){
  var l = reminders();
  if (!l.length) return '<div class="empty">Напоминаний нет</div>';
  return l.map(function(r){
    var d = remDone(r);
    return '<button class="rem' + (d ? ' done' : '') + '" data-rem="' + r.id + '">' +
      '<span class="box' + (d ? ' on' : '') + '">✓</span>' +
      '<span class="t">' + esc(r.t) + '</span>' +
      '<span class="when">' + esc(r.when) + '</span></button>';
  }).join('');
}

function archiveList(){
  var l = archive();
  if (S.q){
    var q = S.q.toLowerCase();
    l = l.filter(function(t){ return t.t.toLowerCase().indexOf(q) >= 0 || who(t.who).nm.toLowerCase().indexOf(q) >= 0; });
  }
  if (!l.length) return '<div class="empty">В архиве пока пусто</div>';
  return '<div class="tasklist">' + l.map(function(t){
    return '<button class="item done" data-task="' + t.id + '">' +
      '<span class="dot"></span>' +
      '<span style="min-width:0"><span class="t">' + esc(t.t) + '</span>' +
      '<span class="m">' + esc(who(t.who).nm) + ' · закрыто ' + esc(t.closed) + ' · ' + esc(t.mark) + '</span></span>' +
      '<span class="dl"></span><span class="pct">' + execOf(t) + '%</span></button>';
  }).join('') + '</div>';
}

/* ================= ЭКРАНЫ ================= */
/* ---- первый день компании ---- */
function vFirstDay(){
  var d = S.onb || {};
  function step(n, tt, ss, done, act){
    return '<button class="stepcard' + (done ? ' done' : '') + '"' + (act ? ' data-act="' + act + '"' : '') + '>' +
      '<span class="num">' + (done ? '✓' : n) + '</span>' +
      '<span><span class="tt">' + tt + '</span><span class="ss">' + ss + '</span></span>' +
      '<span class="go">›</span></button>';
  }
  return '<div class="hi">Компания «Гранит»</div><h1>Первый день</h1>' +
    '<div style="max-width:620px;color:var(--fg-2);font-size:15.5px;margin-bottom:28px">' +
      'Пока здесь пусто — это нормально. Три шага, и система начнёт работать. Обычно занимает восемь минут.</div>' +
    '<div class="steps" style="max-width:620px">' +
      step(1, 'Добавьте сотрудников', 'Отправьте ссылку в рабочий чат — они войдут по коду из СМС, ставить ничего не нужно', !!d.people, 'onb-people') +
      step(2, 'Поставьте первое поручение', 'Лучше сразу настоящее. Продиктуйте голосом, как обычно говорите в чате', !!d.task, 'create') +
      step(3, 'Дождитесь, когда его примут', 'Как только сотрудник нажмёт «Принял», вы увидите это здесь — и станет понятно, ради чего всё', false) +
    '</div>' +
    '<div class="card" style="max-width:620px;margin-top:26px">' +
      '<div class="lbl">Что будет дальше</div>' +
      '<div style="font-size:14.5px;color:var(--fg-2);line-height:1.6">Система сама напомнит исполнителю за сутки и за четыре часа до срока. ' +
      'Если работа встанет — сообщит вам, не дожидаясь просрочки. Вам не нужно ничего проверять вручную: ' +
      'на Главной появляется только то, где нужно ваше решение.</div></div>';
}
function blankState(title, text, act, label){
  return '<div class="blank"><div class="ill">' + ic('box') + '</div>' +
    '<h3>' + title + '</h3><p>' + text + '</p>' +
    (act ? '<button class="btn" data-act="' + act + '">' + label + '</button>' : '') + '</div>';
}

function vHome(){
  if (S.fresh) return vFirstDay();
  var list = outbox();
  var notAcc = list.filter(function(t){ return !isAcc(t); });
  var over   = list.filter(function(t){ return isOver(t); });
  var rev    = list.filter(function(t){ return t.st==='review'; });
  var risky  = list.filter(function(t){ return isAcc(t) && !isOver(t) && t.st!=='review' && riskOf(t).c!=='lo'; });
  /* три доли полосы взаимоисключающие и в сумме дают все поручения */
  var segBad = list.filter(function(t){ return isOver(t) || !isAcc(t); });
  var segRisk = list.filter(function(t){ return !isOver(t) && isAcc(t) && t.st!=='review' && riskOf(t).c!=='lo'; });
  var onTrack = list.filter(function(t){ return !isOver(t) && isAcc(t) && (t.st==='review' || riskOf(t).c==='lo'); });
  var need = needAttention();
  var myIn = inbox().filter(function(t){ return t.st!=='review'; });
  var team = byPoint(PEOPLE).slice().sort(function(a,b){ return b.load - a.load; });
  var total = list.length || 1;
  var rem = reminders().filter(function(r){ return !remDone(r); });

  /* фильтр по нажатому счётчику */
  var f = S.hFilter, shown = need, ttl = 'Требуют внимания';
  if (f==='over')  { shown = over;   ttl = 'Просрочено'; }
  if (f==='notacc'){ shown = notAcc; ttl = 'Не приняты исполнителем'; }
  if (f==='risk')  { shown = risky;  ttl = 'Риск срыва'; }
  if (f==='rev')   { shown = rev;    ttl = 'Ждут вашей проверки'; }

  function cnt(k, col, n, l){
    return '<button class="cnt' + (f===k ? ' act' : '') + '" data-hf="' + k + '">' +
      '<span class="d" style="background:' + col + '"></span><span class="v">' + n + '</span><span class="l">' + l + '</span></button>';
  }

  return offlineBar() + '<div class="hi">Добрый день</div><h1>Александр</h1>' +
    (POINTS.length > 2 ? '<div class="pills">' + POINTS.map(function(p){
      /* на плашке ровно то же, что внутри: закрытые в счёт не идут */
      var mine = live(TASKS.filter(function(t){ return t.a===me() && t.who!==me(); }));
      var n = p.id==='all' ? mine.length : mine.filter(function(t){ return t.pt===p.id; }).length;
      return '<button class="pill" data-point="' + p.id + '" aria-pressed="' + (S.point===p.id) + '">' +
        esc(p.name) + '<span class="n">' + n + '</span></button>';
    }).join('') + '</div>' : '<div style="height:26px"></div>') +

    '<div class="grid"><div>' +
      '<div class="counts">' +
        cnt('over','var(--crit)', over.length, 'просрочено') +
        cnt('notacc','var(--fg)', notAcc.length, 'не приняты') +
        cnt('risk','var(--warn)', risky.length, 'риск срыва') +
        cnt('rev','var(--ok)', rev.length, 'на проверке') +
      '</div>' +
      '<div class="lbl"><span>' + ttl + (f ? ' · <span style="text-transform:none;letter-spacing:0">сбросить фильтр</span>' : '') + '</span>' +
        '<span class="mono">' + shown.length + '</span></div>' +
      (f ? '<button class="pill" data-hf="clear" style="margin-bottom:14px">← Показать всё, что требует внимания</button>' : '') +
      '<div class="tasklist">' +
        (shown.length ? shown.map(function(t){ return item(t, true); }).join('')
                     : '<div class="empty">Здесь пусто — и это хорошо</div>') + '</div>' +
    '</div><div>' +
      (rem.length ? '<div class="card" style="margin-bottom:16px"><div class="lbl">Напоминания себе</div>' +
        rem.slice(0,3).map(function(r){
          return '<button class="rem" data-rem="' + r.id + '" style="box-shadow:none;border:0;background:none;padding:9px 0;margin:0">' +
            '<span class="box"></span><span class="t" style="font-size:14.5px">' + esc(r.t) + '</span>' +
            '<span class="when">' + esc(r.when) + '</span></button>';
        }).join('') + '</div>' : '') +
      '<div class="card" style="margin-bottom:16px">' +
        '<div class="headline"><b>' + onTrack.length + '</b> из <b>' + list.length + '</b> поручений идут по графику</div>' +
        '<div class="seg-bar" style="margin-top:14px">' +
          '<i style="width:' + (onTrack.length/total*100) + '%;background:var(--ok)"></i>' +
          '<i style="width:' + (segRisk.length/total*100) + '%;background:var(--warn)"></i>' +
          '<i style="width:' + (segBad.length/total*100) + '%;background:var(--crit)"></i>' +
        '</div>' +
        '<div class="seg-legend"><span><i style="background:var(--ok)"></i>по графику</span>' +
          '<span><i style="background:var(--warn)"></i>отстают</span>' +
          '<span><i style="background:var(--crit)"></i>сорваны или не приняты</span></div></div>' +

      (myIn.length ? '<button class="card" style="margin-bottom:16px;width:100%;text-align:left" data-inbox="1">' +
        '<div class="lbl" style="margin-bottom:8px">Вам поручили</div>' +
        '<div class="headline">' + myIn.length + ' поручения от собственника</div>' +
        '<div class="hint" style="margin-top:8px">Открыть вкладку «Мне поручили» →</div></button>' : '') +

      '<div class="card"><div class="lbl">Загрузка команды</div>' +
        team.map(function(p){
          var col = p.load>=80 ? 'var(--crit)' : (p.load>=60 ? 'var(--warn)' : 'var(--ok)');
          return '<button class="mini" data-person="' + p.id + '">' + avatar(p.id) +
            '<span style="min-width:0"><span class="nm" style="display:block">' + esc(p.nm) + '</span>' +
            '<span class="ps">' + esc(p.ps) + '</span></span>' +
            '<span class="pct" style="color:' + col + '">' + p.load + '%</span></button>';
        }).join('') + '</div>' +
    '</div></div>';
}

function vEmpHome(){
  var notAcc = inbox().filter(function(t){ return !isAcc(t); });
  /* принятое на сегодня; непринятое уже показано отдельным блоком выше — не дублируем */
  var l = inbox().filter(function(t){ var g = grpOf(t); return isAcc(t) && (g==='overdue' || g==='today'); });
  return offlineBar() + '<div class="hi">Добрый день</div><h1>Рустам</h1>' +
    '<div class="grid" style="margin-top:26px"><div>' +
      (notAcc.length ? '<div class="lbl"><span>Новые поручения</span><span class="mono">' + notAcc.length + '</span></div>' +
        '<div class="tasklist" style="margin-bottom:30px">' + notAcc.map(function(t){ return item(t, false); }).join('') + '</div>' : '') +
      '<div class="lbl"><span>Сегодня</span><span class="mono">' + l.length + '</span></div>' +
      '<div class="tasklist">' + (l.length ? l.map(function(t){ return item(t, false); }).join('') : '<div class="empty">На сегодня поручений нет</div>') + '</div>' +
    '</div><div><div class="card">' +
      '<div class="lbl">Как это работает</div>' +
      '<div style="font-size:14.5px;color:var(--fg-2);line-height:1.6">Сначала нажмите «Принял» — руководитель увидит, что поручение дошло. Дальше отмечайте шаги и сдавайте результат. Если что-то непонятно или не успеваете — есть кнопки «Уточнить» и «Перенести срок», молчать не нужно.</div>' +
    '</div></div></div>';
}

function vTeam(){
  var l = byPoint(PEOPLE);
  if (!l.length) return blankState('Сотрудников пока нет',
    'Отправьте ссылку-приглашение в рабочий чат. Сотрудник войдёт по коду из СМС — ставить приложение не нужно.',
    'onb-people', 'Пригласить сотрудников');
  return '<h1>Команда</h1>' +
    '<div class="pills">' + POINTS.map(function(p){
      return '<button class="pill" data-point="' + p.id + '" aria-pressed="' + (S.point===p.id) + '">' + esc(p.name) + '</button>';
    }).join('') + '</div>' +
    '<div class="people">' + l.map(function(p){
      var t = TASKS.filter(function(x){ return x.who===p.id; });
      var over = t.filter(function(x){ return isOver(x); }).length;
      var col = p.load>=80 ? 'var(--crit)' : (p.load>=60 ? 'var(--warn)' : 'var(--ok)');
      return '<button class="person" data-person="' + p.id + '">' +
        '<span class="top-row">' + avatar(p.id) +
        '<span><span class="nm" style="display:block">' + esc(p.nm) + '</span><span class="ps">' + esc(p.ps) + '</span></span>' +
        '<span class="pct" style="color:' + col + '">' + p.load + '%</span></span>' +
        '<span class="bar"><i style="width:' + p.load + '%;background:' + col + '"></i></span>' +
        '<span class="facts"><span><b>' + t.length + '</b> поручений</span>' +
        '<span><b style="color:' + (over ? 'var(--crit)' : '') + '">' + over + '</b> просрочено</span>' +
        '<span><b>' + p.ok + '%</b> в срок</span></span></button>';
    }).join('') + '</div>';
}

function vPerson(){
  var p = who(S.person);
  var t = TASKS.filter(function(x){ return x.who===p.id; });
  var over = t.filter(function(x){ return isOver(x); }).length;
  var col = p.load>=80 ? 'var(--crit)' : (p.load>=60 ? 'var(--warn)' : 'var(--ok)');
  return '<button class="back" data-nav="' + backTo() + '">← Назад</button>' +
    '<div class="grid"><div>' +
      '<h2 class="title">' + esc(p.nm) + '</h2>' +
      '<div class="hi" style="margin:6px 0 18px">' + esc(p.ps) + ' · ' + esc(pointName(p.pt)) + '</div>' +
      '<div class="acts" style="margin:0 0 26px"><button class="btn" data-act="assign-to">' + ic('plus') + ' Поручить задачу</button></div>' +
      '<div class="lbl">В работе</div><div class="tasklist">' + t.map(function(x){ return item(x, false); }).join('') + '</div>' +
    '</div><div>' +
      '<button class="card" style="margin-bottom:16px;width:100%;text-align:left" data-load="' + p.id + '">' +
        '<div class="barline"><span>Текущая загрузка</span><b style="color:' + col + '">' + p.load + '%</b></div>' +
        '<div class="bar"><i style="width:' + p.load + '%;background:' + col + '"></i></div>' +
        (S.loadOpen[p.id]
          ? '<div class="breakdown">' +
              '<div class="brow"><span>Активных поручений</span><b>' + t.length + '</b></div>' +
              '<div class="brow"><span>Критических и высоких</span><b>' + t.filter(function(x){ return prioOf(x) !== 'norm'; }).length + '</b></div>' +
              '<div class="brow"><span>Со сроком сегодня</span><b>' + t.filter(function(x){ return grpOf(x) === 'today'; }).length + '</b></div>' +
              '<div class="brow"><span>Просрочено</span><b style="color:' + (over ? 'var(--crit)' : '') + '">' + over + '</b></div>' +
              '<div class="brow"><span>Обычная пропускная способность</span><b>6 / нед.</b></div>' +
            '</div>'
          : '<div class="hint">Нажмите, чтобы увидеть, из чего складывается цифра →</div>') +
        '</button>' +
      '<div class="card"><div class="lbl">Показатели</div><div class="metrics">' +
        '<div class="metric"><div class="v">' + t.length + '</div><div class="l">активных</div></div>' +
        '<div class="metric"><div class="v" style="color:' + (over ? 'var(--crit)' : '') + '">' + over + '</div><div class="l">просрочено</div></div>' +
        '<div class="metric"><div class="v">' + p.ok + '%</div><div class="l">в срок</div></div></div></div>' +
    '</div></div>';
}

function matches(t){
  var q = S.q.toLowerCase();
  return t.t.toLowerCase().indexOf(q) >= 0 || who(t.who).nm.toLowerCase().indexOf(q) >= 0;
}
function vTasks(){
  var inb = inbox(), out = outbox(), arc = archive(), rem = reminders();

  /* поиск — глобальный: ищем во всех разделах сразу */
  if (S.q){
    var fi = inb.filter(matches), fo = out.filter(matches), fa = arc.filter(matches);
    var found = fi.length + fo.length + fa.length;
    var block = function(title, l, arch){
      if (!l.length) return '';
      return '<div class="group"><div class="group-h" style="pointer-events:none"><h3 style="color:var(--fg-3)">' + title + '</h3>' +
        '<span class="n">' + l.length + '</span></div><div class="tasklist">' +
        l.map(function(t){ return arch
          ? '<button class="item done" data-task="' + t.id + '"><span class="dot"></span><span style="min-width:0">' +
            '<span class="t">' + esc(t.t) + '</span><span class="m">закрыто ' + esc(t.closed) + '</span></span>' +
            '<span class="dl"></span><span class="pct">' + execOf(t) + '%</span></button>'
          : item(t, false); }).join('') + '</div></div>';
    };
    return offlineBar() + tasksHead(inb, out, arc, rem) +
      '<div class="lbl">Найдено: ' + found + '</div>' +
      (found ? block('Мне поручили', fi) + block('Я поручил', fo) + block('Архив', fa, true)
             : '<div class="empty">Ничего не нашлось. Поиск идёт по названию и по человеку, включая архив.</div>');
  }

  return offlineBar() + tasksHead(inb, out, arc, rem) +
    (S.tab==='out' && S.role==='boss' && POINTS.length > 2
      ? '<div class="pills" style="margin:0 0 24px">' + POINTS.map(function(p){
          return '<button class="pill" data-point="' + p.id + '" aria-pressed="' + (S.point===p.id) + '">' + esc(p.name) + '</button>';
        }).join('') + '</div>'
      : '') +
    (S.tab==='arch' ? (arc.length ? archiveList()
        : blankState('Архив пуст', 'Сюда попадают поручения после того, как вы приняли результат. Их нельзя удалить или переписать — это и есть история работы компании.'))
      : S.tab==='self' ? (rem.length ? remList()
        : blankState('Напоминаний нет', 'Личные заметки со сроком: без исполнителя, отчёта и проверки. Их не видит никто, кроме вас.', 'self-rem', 'Добавить напоминание'))
      : S.tab==='in' ? (inb.length ? groupedList(inb)
        : blankState('Вам ничего не поручали', 'Когда руководитель поставит задачу, она появится здесь, а вы получите уведомление.'))
      : (out.length ? groupedList(out)
        : blankState('Вы пока ничего не поручили', 'Нажмите «плюс» и продиктуйте поручение голосом — это занимает пятнадцать секунд.', 'create', 'Создать поручение')));
}
function tasksHead(inb, out, arc, rem){
  var open = rem.filter(function(r){ return !remDone(r); }).length;
  return '<div class="tasks-head">' +
    '<div class="tabs2" style="margin:0">' +
      '<button class="tab2" data-tab="in" aria-pressed="' + (S.tab==='in') + '">Мне поручили<span class="n">' + inb.length + '</span></button>' +
      '<button class="tab2" data-tab="out" aria-pressed="' + (S.tab==='out') + '">Я поручил<span class="n">' + out.length + '</span></button>' +
      '<button class="tab2" data-tab="self" aria-pressed="' + (S.tab==='self') + '">Себе<span class="n">' + open + '</span></button>' +
      '<button class="tab2" data-tab="arch" aria-pressed="' + (S.tab==='arch') + '">Архив<span class="n">' + arc.length + '</span></button>' +
    '</div>' +
    '<div class="search">' + ic('search') + '<input id="q" placeholder="Найти по названию или человеку" value="' + esc(S.q) + '"></div>' +
  '</div>';
}

function vNotify(){
  var n = S.notif;
  function sw(k, t, s){
    return '<button class="sw" data-sw="' + k + '" aria-pressed="' + (n[k] ? 'true' : 'false') + '">' +
      '<span><span class="t">' + t + '</span><span class="s">' + s + '</span></span><span class="knob"></span></button>';
  }
  return '<button class="back" data-nav="profile">← Профиль</button>' +
    '<h1 style="margin-bottom:26px">Уведомления</h1>' +
    '<div class="grid"><div>' +
      '<div class="lbl">Каналы</div><div class="card" style="margin-bottom:26px">' +
        sw('push','Push в приложении','Основной канал. Приходит только то, где нужно ваше действие.') +
        sw('email','Дублировать на почту','Для тех, кто живёт в почте. Обычно не нужно.') +
      '</div>' +
      '<div class="lbl">Когда приходят</div><div class="card" style="margin-bottom:26px">' +
        sw('quiet','Тихие часы','Вне рабочего графика точки приходят только критические поручения.') +
        sw('limit','Ограничить поток','Не больше шести уведомлений в день, остальное собирается в сводку.') +
      '</div>' +
      '<div class="lbl">Сводка вместо потока</div><div class="card">' +
        sw('digestAm','Утренняя сводка в 8:30','Что сегодня, что просрочено, что ждёт вашей проверки.') +
        sw('digestPm','Вечерняя сводка в 18:30','Итоги дня и то, что переезжает на завтра.') +
      '</div>' +
    '</div><div>' +
      '<div class="card"><div class="lbl">Как выглядит сводка</div>' +
        '<div style="font-size:15px;line-height:1.6">' +
          '<b>Доброе утро, Александр.</b><br>' +
          '<span style="color:var(--fg-2)">Сегодня 4 поручения со сроком, 2 просрочено, 1 ждёт вашей проверки.</span>' +
          '<div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--line);font-size:14px;color:var(--fg-2)">' +
          '<span style="color:var(--crit)">●</span> Гафуров — витрина, не принято 4 часа<br>' +
          '<span style="color:var(--warn)">●</span> Гафуров — инвентаризация, отстаёт<br>' +
          '<span style="color:var(--ok)">●</span> Мельник — приёмка сдана, ждёт проверки</div>' +
        '</div>' +
        '<div class="hint">Одно сообщение утром вместо двадцати в течение дня. Немедленно приходит только то, что нельзя отложить: блокировка, сдача на проверку, просрочка.</div>' +
      '</div>' +
    '</div></div>';
}

function offlineBar(){
  if (!S.offline && !S.queue.length) return '';
  if (S.offline){
    return '<div class="offline-bar">' + ic('cloud') +
      '<span><b>Нет сети.</b> Отметки, отчёты и фото сохраняются на устройстве и уйдут сами, когда связь появится.' +
      (S.queue.length ? ' В очереди: ' + S.queue.length + '.' : '') + '</span></div>';
  }
  return '';
}

function wave(n){
  var h = '';
  for (var i = 0; i < n; i++) h += '<i style="height:' + (4 + ((i * 7) % 17)) + 'px"></i>';
  return '<span class="wavebar">' + h + '</span>';
}
function thumbs(){
  var ph = [['Стеллаж A, до','#6D8189'],['Стеллаж A, после','#77857A'],['Акт приёмки','#8A7F73']];
  return '<div class="thumbs">' + ph.map(function(p){
    return '<span class="thumb"><span class="im" style="background:' + p[1] + '">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5.5" width="18" height="13" rx="3"/><circle cx="12" cy="12" r="3.2"/></svg>' +
      '</span><span class="cap">' + p[0] + '</span></span>';
  }).join('') + '</div>';
}
/* лента событий: базовая история собирается из состояния задачи + действия сессии */
function logRows(t){
  var rows = [];
  rows.push(['9 авг, 14:02', '<b>' + esc(who(t.a).nm) + '</b> создал поручение' + (t.id % 2 ? ' голосом' : '')]);
  if (isAcc(t)) rows.push(['9 авг, 14:31', '<b>' + esc(who(t.who).nm) + '</b> принял поручение']);
  else rows.push(['—', 'Поручение ещё не принято исполнителем']);
  var done = (S.sub[t.id] || t.subs.map(function(s){ return s[1]; })).filter(function(x){ return x; }).length;
  if (done) rows.push(['10 авг, 09:15', '<b>' + esc(who(t.who).nm) + '</b> отметил выполненных шагов: ' + done]);
  (S.comments[t.id] || []).forEach(function(c){ rows.push([c.at, '<b>' + esc(who(c.who).nm) + '</b> написал в задачу']); });
  if (S.postpone[t.id]) rows.push(['сейчас', '<b>' + esc(who(t.who).nm) + '</b> запросил перенос срока на ' + esc(S.postpone[t.id].to)]);
  if (S.reported[t.id]) rows.push(['сейчас', '<b>' + esc(who(t.who).nm) + '</b> сдал результат голосовым отчётом']);
  if (t.st === 'done') rows.push([t.closed, '<b>' + esc(who(t.a).nm) + '</b> принял результат: ' + esc(t.mark)]);
  return rows.map(function(r){
    return '<div class="log-row"><span class="tm">' + esc(r[0]) + '</span><span class="tx">' + r[1] + '</span></div>';
  }).join('');
}

function flow(t){
  var acc = isAcc(t), e = execOf(t);
  var st = t.st==='review' ? 3 : (e > 0 ? 2 : (acc ? 2 : 1));
  var steps = [['Поручено',1],['Принято', acc ? 1 : 0],['В работе', e>0 ? 1 : 0],['Сдано', t.st==='review'||t.st==='done'||S.reported[t.id] ? 1 : 0],['Принят результат', t.st==='done' ? 1 : 0]];
  return '<div class="flow">' + steps.map(function(s, i){
    var done = s[1], now = !done && (i===0 || steps[i-1][1]);
    return (i ? '<span class="sep"></span>' : '') +
      '<span class="step ' + (done ? 'done' : (now ? 'now' : '')) + '"><span class="b"></span>' + s[0] + '</span>';
  }).join('') + '</div>';
}

/* главное действие — всегда на виду, в правой колонке */
function primaryAction(t, isAssignee, isAuthor, acc){
  if (t.st === 'done') return '';
  var box = function(h, s, btn, extra){
    return '<div class="act-card"><div class="h">' + h + '</div><div class="s">' + s + '</div>' + btn + (extra || '') + '</div>';
  };
  if (isAssignee && !acc)
    return box('Примите поручение', 'Пока не приняли, руководитель видит его как недоставленное.',
      '<button class="btn" data-act="accept-task">Принял</button>',
      '<button class="btn ghost2" data-act="ask">Сначала уточнить</button>');
  if (isAssignee && !S.reported[t.id])
    return box('Сдать результат', 'Отчитайтесь голосом — система сама превратит запись в структурированный отчёт.',
      '<button class="btn" data-act="voice">Отчитаться голосом</button>',
      '<button class="btn ghost2" data-act="postpone">Не успеваю, перенести срок</button>');
  if (isAuthor && (t.st === 'review' || S.reported[t.id]))
    return box('Результат сдан', 'Проверьте отчёт и вложения, затем примите или верните на доработку.',
      '<div class="row"><button class="btn" data-act="accept">Принять</button>' +
      '<button class="btn ghost2" data-act="rework">Вернуть</button></div>');
  if (isAuthor)
    return box('Поручение в работе', 'Вмешиваться не нужно — система сама сообщит, если появится риск срыва.',
      '<button class="btn ghost2" data-act="ask">Написать в задачу</button>');
  return '';
}

function vTask(){
  var t = task(S.task), p = who(t.who), au = who(t.a), r = riskOf(t);
  var iAmAssignee = t.who === me(), iAmAuthor = t.a === me();
  var acc = isAcc(t);
  var subs = subsOf(t);
  var done = subs.filter(function(x){ return x; }).length;
  var e = execOf(t);
  var shut = t.st === 'done';
  var msgs = S.comments[t.id] || [];
  var pp = S.postpone[t.id];

  var actions = '';
  if (t.st === 'done'){
    actions = '<div class="card"><div class="headline">Поручение закрыто ' + esc(t.closed) + '</div>' +
      '<div class="hint" style="margin-top:6px">Оценка руководителя: ' + esc(t.mark) + '. Задача и вся её история остаются в архиве — их нельзя удалить или переписать.</div>' +
      '<div class="acts"><button class="btn soft" data-act="repeat">Повторить поручение</button></div></div>';
  } else if (iAmAssignee && !acc){
    actions = '<div class="card" style="border:2px solid var(--fg)">' +
      '<div class="headline">Поручение ждёт вашего подтверждения</div>' +
      '<div class="hint" style="margin-top:6px">Пока вы не приняли, руководитель видит его как недоставленное. Если задача не к вам — так и скажите, это нормально.</div>' +
      '<div class="acts"><button class="btn" data-act="accept-task">' + ic('check') + ' Принял</button>' +
      '<button class="btn soft" data-act="ask">' + ic('chat') + ' Уточнить</button>' +
      '<button class="btn soft" data-act="notmine">Это не ко мне</button></div></div>';
  } else if (iAmAssignee){
    actions = '<div class="card"><div class="acts" style="margin-top:0">' +
      (S.reported[t.id] ? '' : '<button class="btn soft" data-act="voice">' + ic('mic') + ' Отчитаться голосом</button>') +
      '<button class="btn soft" data-act="ask">' + ic('chat') + ' Уточнить</button>' +
      '<button class="btn soft" data-act="postpone">' + ic('clock') + ' Перенести срок</button></div>' +
      '<div class="hint">Задачу закрывает руководитель после проверки — вы сдаёте результат, а не отмечаете «готово».</div></div>';
  } else if (iAmAuthor){
    var ago = S.pinged[t.id];
    var edit = '<div class="card" style="margin-top:16px"><div class="lbl">Изменить поручение</div>' +
      '<div class="acts" style="margin-top:0">' +
      '<button class="btn soft" data-act="ed-deadline">' + ic('clock') + ' Изменить срок</button>' +
      '<button class="btn soft" data-act="ed-text">Уточнить формулировку</button>' +
      '<button class="btn soft" data-act="ed-who">Переназначить</button>' +
      '<button class="btn soft" data-act="ed-cancel" style="color:var(--crit)">Отменить поручение</button></div>' +
      '<div class="hint">Любое изменение видно исполнителю и попадает в историю — задним числом переписать поручение нельзя.</div></div>';
    var pingBtn = ago
      ? '<button class="btn soft" style="opacity:.5;cursor:default" disabled>Напоминали ' + ago + ' назад</button>'
      : '<button class="btn soft" data-act="ping">Напомнить исполнителю</button>';
    actions = '<div class="card"><div class="acts" style="margin-top:0">' +
      (t.st==='review' || S.reported[t.id]
        ? '<button class="btn" data-act="accept">Принять результат</button><button class="btn soft" data-act="rework">Вернуть на доработку</button>'
        : pingBtn) +
      '<button class="btn soft" data-act="ask">' + ic('chat') + ' Написать в задачу</button></div>' +
      (ago ? '<div class="hint">Следующее напоминание можно отправить через час. Иначе система превращается в то же самое «ну что там?», от которого мы уходим.</div>' : '') +
      '</div>' + edit;
  }

  return '<button class="back" data-nav="' + backTo() + '">← Назад</button>' +
    '<div class="grid"><div>' +
      '<h2 class="title">' + esc(t.t) + '</h2>' +
      '<div class="chips" style="margin:14px 0 0"><span class="chip' + (r.c==='hi' ? ' on-crit' : '') + '">' + r.s + '</span>' +
        '<span class="chip">' + esc(pointName(t.pt)) + '</span></div>' +
      flow(t) +

      (pp ? '<div class="ask" style="margin-bottom:18px"><b>Запрос переноса срока</b><br>' +
        esc(dlOf(t)) + ' → ' + esc(pp.to) + '<br><span style="color:var(--fg-2)">Причина: ' + esc(pp.why) + '</span>' +
        (iAmAuthor ? '<div class="acts"><button class="btn" data-act="pp-ok">Согласовать</button>' +
          '<button class="btn soft" data-act="pp-no">Отклонить</button></div>'
        : '<div class="hint">Ждёт решения руководителя. Срок пока прежний.</div>') + '</div>' : '') +

      '<div class="card">' +
        '<div class="kv"><span class="k">Кому</span><span class="v">' + esc(p.nm) + ' · ' + esc(p.ps) + '</span></div>' +
        '<div class="kv"><span class="k">Поручил</span><span class="v">' + esc(au.nm) + ' · ' + esc(au.ps) + '</span></div>' +
        '<div class="kv"><span class="k">Срок</span><span class="v">' + esc(dlOf(t)) + '</span></div>' +
        (prioOf(t)!=='norm' ? '<div class="kv"><span class="k">Приоритет</span><span class="v">' +
          (prioOf(t)==='crit' ? '<span style="color:var(--crit);font-weight:600">Критический</span>'
                              : '<span style="color:var(--warn);font-weight:600">Высокий</span>') + '</span></div>' : '') +
        '<div class="kv"><span class="k">Описание</span><span class="v">' + esc(t.desc) + '</span></div>' +
        '<div class="kv"><span class="k">Результат</span><span class="v"><span class="result">' + esc(t.res) + '</span></span></div>' +
        '<div class="kv"><span class="k">Видят</span><span class="v" style="color:var(--fg-2);font-size:14px">' +
          esc(au.nm) + ', ' + esc(p.nm) + ' и руководитель исполнителя. Больше никто.</span></div>' +
      '</div>' +

      '<div class="lbl" style="margin-top:30px"><span>Подзадачи</span><span class="mono">' + done + ' / ' + subs.length + '</span></div>' +
      '<div class="card">' + t.subs.map(function(s, i){
        return '<button class="sub-item' + (subs[i] ? ' on' : '') + (acc && !shut ? '' : ' locked') + '" data-sub="' + i + '">' +
          '<span class="box' + (subs[i] ? ' on' : '') + '">✓</span><span class="lb">' + esc(s[0]) + '</span></button>';
      }).join('') +
      (acc ? '' : '<div class="hint">Шаги откроются после того, как поручение будет принято.</div>') +
      (shut ? '<div class="hint">Поручение закрыто — шаги и история больше не меняются.</div>' : '') + '</div>' +

      '<div class="lbl" style="margin-top:30px"><span>Обсуждение</span>' +
        '<span class="mono">' + (msgs.length || '') + '</span></div>' +
      '<div class="card">' +
        (msgs.length
          ? '<div class="thread">' + msgs.map(function(m){
              return '<div class="msg' + (m.who===me() ? ' mine' : '') + '"><div class="h">' + esc(who(m.who).nm) + ' · ' + esc(m.at) + '</div>' +
                '<div class="b">' + esc(m.text) + '</div></div>';
            }).join('') + '</div>'
          : '<div style="font-size:14px;color:var(--fg-3)">Сообщений нет. Всё, что написано здесь, видят только участники поручения — общих чатов в системе нет.</div>') +
        '<div class="say"><input id="sayText" placeholder="Написать в задачу…">' +
        '<button class="send" data-act="say-send" aria-label="Отправить">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6"/></svg></button></div>' +
      '</div>' +

      '<div class="lbl" style="margin-top:30px">Отчёт</div>' +
      (S.reported[t.id]
        ? '<div class="card"><div class="result" style="background:var(--ok-s)">' +
            '<b style="display:block;margin-bottom:9px">Голосовой отчёт разобран</b>' +
            '<span class="mono" style="font-size:13.5px;color:var(--fg-2);line-height:1.9">Статус: выполнено<br>Проверено: 34 счёта<br>Расхождения: 4<br>Требуют уточнения: 2</span>' +
            '<div style="margin-top:12px;color:var(--fg-2);font-size:14.5px">Нужно связаться с поставщиками по двум счетам.</div></div>' +
            '<div class="voice-row">' +
              '<span class="play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg></span>' +
              wave(38) +
              '<span class="mono" style="font-size:12.5px;color:var(--fg-3);flex:none">0:14</span></div>' +
            '<div class="hint">Оригинал записи сохранён и доступен обоим. Через 30 дней аудио удаляется, расшифровка остаётся навсегда.</div>' +
            thumbs() +
          '</div>'
        : '') +
      actions +

      '<div class="lbl" style="margin-top:30px">История</div>' +
      '<div class="card"><div class="log">' + logRows(t) + '</div>' +
        '<div class="hint">Историю нельзя отредактировать или удалить — ни исполнителю, ни руководителю, ни владельцу компании. Иначе она ничего не доказывает.</div></div>' +

    '</div><div class="sticky">' +
      primaryAction(t, iAmAssignee, iAmAuthor, acc) +
      '<div class="card" style="margin-bottom:16px">' +
        '<div class="lbl">До дедлайна</div>' +
        '<div class="countdown" id="cdown" style="color:' + (isOver(t) ? 'var(--crit)' : '') + '">' + esc(leftOf(t)) + '</div>' +
        '<div class="hint" style="margin-top:12px">' + esc(dlOf(t)) + '</div></div>' +
      '<div class="card">' +
        '<div class="barline"><span>Исполнение</span><b>' + e + '%</b></div>' +
        '<div class="bar"><i style="width:' + e + '%;background:' + execColor(t) + '"></i></div>' +
        '<div class="hint">' + (acc
          ? 'Считается по отмеченным шагам и приложенным доказательствам, а не со слов исполнителя.'
          : 'Пока поручение не принято, исполнение равно нулю — независимо от того, что происходит на самом деле.') + '</div></div>' +
    '</div></div>';
}

function vProfile(){
  var boss = S.role==='boss';
  var m = boss ? ['Александр Смирнов','alex@example.com','Операционный директор','Управление сетью','Наталья Ремизова']
               : ['Рустам Гафуров','rustam@example.com','Старший смены','Невский','Александр Смирнов'];
  var personal = [['Уведомления, тихие часы и сводки','bell','notify'],['Язык и часовой пояс','globe'],['Безопасность и вход','lock']];
  var company  = [['Компания и точки','pin'],['Сотрудники и роли','team'],['Правила эскалации','clock'],['Настройки ИИ и лимиты','spark'],['Тариф и оплата','card']];
  function rows(a){
    return a.map(function(x){
      return '<button class="setrow"' + (x[2] ? ' data-nav="' + x[2] + '"' : '') + '>' + ic(x[1]) + x[0] + '<span class="arrow">›</span></button>';
    }).join('');
  }
  return '<h1>Профиль</h1>' +
    '<div class="grid" style="margin-top:26px"><div>' +
      '<div class="card" style="margin-bottom:16px">' +
        '<div style="display:flex;gap:15px;align-items:center;margin-bottom:8px">' +
          '<span class="av" style="width:56px;height:56px;font-size:16px;background:' + AVC[me()] + '">' + initials(m[0]) + '</span>' +
          '<span><span style="font-size:19px;font-weight:700;letter-spacing:-.03em;display:block">' + esc(m[0]) + '</span>' +
          '<span class="hi">' + esc(m[1]) + '</span></span></div>' +
        '<div class="kv"><span class="k">Роль</span><span class="v">' + esc(m[2]) + '</span></div>' +
        '<div class="kv"><span class="k">Подразделение</span><span class="v">' + esc(m[3]) + '</span></div>' +
        '<div class="kv"><span class="k">Руководитель</span><span class="v">' + esc(m[4]) + '</span></div></div>' +
      '<div class="lbl" style="margin-top:26px">Настройки</div>' + rows(personal) +
      (boss ? '<div class="lbl" style="margin-top:26px">Компания</div>' + rows(company) : '') +
    '</div><div>' +
      '<div class="card" style="margin-bottom:16px"><div class="lbl">Мои показатели</div><div class="metrics">' +
        '<div class="metric"><div class="v">' + inbox().length + '</div><div class="l">мне поручено</div></div>' +
        '<div class="metric"><div class="v">' + (boss ? 86 : 71) + '%</div><div class="l">в срок</div></div>' +
        '<div class="metric"><div class="v" style="color:var(--crit)">' + (boss ? 0 : 1) + '</div><div class="l">просрочено</div></div>' +
      '</div></div>' +
      (boss ? '' : '<div class="card"><div class="lbl">Что будет при просрочке</div>' +
        '<div style="font-size:14.5px;color:var(--fg-2);line-height:1.65">За сутки и за 4 часа до срока придёт напоминание. Через 2 часа после просрочки руководитель получит уведомление, через сутки — его руководитель. Правила видны вам заранее и одинаковы для всех.</div></div>') +
    '</div></div>';
}

function vManual(){
  var d = S.draft || {};
  var whoId = d.who || 'alekseeva';
  var pers = who(whoId);
  var ptId = d.pt || pers.pt;
  var mismatch = ptId !== pers.pt;
  var dl = d.dl || 'Сегодня, 18:00';
  var QUICK = ['Сегодня, 18:00','Завтра, 12:00','Пятница, 18:00','Понедельник, 10:00'];

  return '<button class="back" data-nav="' + manualBack() + '">← Отмена</button>' +
    '<h1 style="margin-bottom:28px">Новое поручение</h1><div style="max-width:660px">' +
    '<div class="field"><label>Название</label><input class="inp" id="mTitle" value="' + esc(d.t || 'Проверить счета за июль') + '"></div>' +
    '<div class="row2">' +
      '<div class="field"><label>Исполнитель</label><select class="inp" id="mWho">' +
        PEOPLE.map(function(x){ return '<option value="' + x.id + '"' + (x.id === whoId ? ' selected' : '') + '>' + esc(x.nm) + '</option>'; }).join('') +
      '</select></div>' +
      '<div class="field"><label>Точка</label><select class="inp" id="mPt">' +
        POINTS.slice(1).map(function(x){ return '<option value="' + x.id + '"' + (x.id === ptId ? ' selected' : '') + '>' + esc(x.name) + '</option>'; }).join('') +
      '</select>' +
      (mismatch ? '<div class="hint" style="color:var(--warn)">' + esc(pers.nm.split(' ')[0]) + ' работает на точке «' + esc(pointName(pers.pt)) + '». Оставить другую точку можно, но проверьте, что это не ошибка.</div>' : '') +
      '</div></div>' +
    '<div class="field"><label>Описание</label><textarea class="inp" id="mDesc">' + esc(d.desc || 'Сверить счета поставщиков за июль с договорами и найти расхождения.') + '</textarea></div>' +
    '<div class="field"><label>Результат</label>' +
      '<textarea class="inp" id="mRes">' + esc(d.res || 'Список счетов с расхождениями, передан руководителю.') + '</textarea>' +
      '<div class="hint">Что должно быть получено, когда задача выполнена. Без этого поля спор «я имел в виду другое» ничем не разрешается.</div></div>' +
    '<div class="field"><label>Срок</label>' +
      '<div class="quick">' + QUICK.map(function(q){
        return '<button class="qchip" data-dl="' + esc(q) + '" aria-pressed="' + (dl === q) + '">' + q.split(',')[0] + '</button>';
      }).join('') + '<button class="qchip" data-dl="custom" aria-pressed="' + (QUICK.indexOf(dl) < 0) + '">Выбрать…</button></div>' +
      '<input class="inp" id="mDl" value="' + esc(dl) + '"></div>' +
    '<div class="field"><label>Приоритет</label><div class="radios" data-radio id="mPrio">' +
      '<button class="radio" data-prio="norm" aria-pressed="true">Обычный</button><button class="radio" data-prio="high" aria-pressed="false">Высокий</button>' +
      '<button class="radio" data-prio="crit" aria-pressed="false">Критический</button></div></div>' +
    '<div class="lbl" style="margin-top:8px">Подзадачи</div><div class="card">' +
      (d.subs || ['Собрать счета','Проверить данные','Найти расхождения','Подготовить список']).map(function(x){
        return '<div class="sub-item" data-newsub><span class="box"></span><span class="lb">' + esc(x) + '</span></div>'; }).join('') + '</div>' +
    '<div class="acts" style="margin-top:26px"><button class="btn" data-act="created">Создать поручение</button>' +
      '<button class="btn soft" data-nav="' + manualBack() + '">Отмена</button></div></div>';
}

/* при смене исполнителя точка подтягивается за ним */
document.addEventListener('change', function(e){
  var w = e.target.closest('#mWho');
  if (!w) return;
  var pt = $('mPt');
  if (pt) pt.value = who(w.value).pt;
});

/* ================= НАВИГАЦИЯ ================= */
function renderTabs(){
  var boss = S.role==='boss', v = S.view;
  var alert = inbox().filter(function(t){ return !isAcc(t); }).length +
              outbox().filter(function(t){ return isOver(t) || !isAcc(t); }).length;
  var h = '<button class="tab" data-nav="home" aria-current="' + (v==='home') + '">' + ic('home') + (boss ? 'Главная' : 'Сегодня') + '</button>';
  h += boss ? '<button class="tab" data-nav="team" aria-current="' + (v==='team' || v==='person') + '">' + ic('team') + 'Команда</button>'
            : '<span></span>';
  h += '<button class="fab" data-act="create" aria-label="Создать поручение">' + ic('plus') + '</button>';
  h += '<button class="tab" data-nav="tasks" aria-current="' + (v==='tasks' || v==='task') + '">' + ic('tasks') +
       (alert ? '<span class="badge">' + alert + '</span>' : '') + 'Задачи</button>';
  h += '<button class="tab" data-nav="profile" aria-current="' + (v==='profile') + '">' + ic('profile') + 'Профиль</button>';
  $('tabbar').innerHTML = h;
}

function render(keepScroll){
  var y = window.scrollY, v = S.view, h;
  if (v==='home')         h = S.role==='boss' ? vHome() : vEmpHome();
  else if (v==='team')    h = vTeam();
  else if (v==='person')  h = vPerson();
  else if (v==='tasks')   h = vTasks();
  else if (v==='task')    h = vTask();
  else if (v==='profile') h = vProfile();
  else if (v==='notify')  h = vNotify();
  else if (v==='manual')  h = vManual();
  $('app').innerHTML = h;
  if (keepScroll) window.scrollTo(0, y); else window.scrollTo(0, 0);
  renderTabs();
  var q = $('q');
  if (q){
    q.addEventListener('input', function(){ S.q = q.value; render(true); setTimeout(function(){ var n = $('q'); if (n){ n.focus(); n.setSelectionRange(n.value.length, n.value.length); } }, 0); });
  }
}

/* ================= МОДАЛКИ ================= */
var PHRASE = 'Петров, завтра до шести проверь все счета за июль и пришли мне список расхождений';
/* таймеры имитации распознавания живут здесь, чтобы закрытие окна их гасило */
var LT = null;
function stopListen(){ if (LT){ clearInterval(LT.w); clearTimeout(LT.t); LT = null; } }
function openModal(h){ $('modalIn').innerHTML = h; $('modal').classList.add('on'); document.body.classList.add('noscroll'); }
function closeModal(){
  stopListen();
  $('modal').classList.remove('on');
  $('modalIn').innerHTML = '';
  document.body.classList.remove('noscroll');
}

function mChoose(){
  openModal('<h3>Создать поручение</h3><p class="s">Скажите обычными словами — или заполните сами.</p>' +
    '<button class="opt primary" data-act="voice-in"><span class="ic">' + ic('mic') + '</span><span><span class="tt">Голосом</span><span class="ss">Опишите задачу своими словами</span></span></button>' +
    '<button class="opt" data-act="text-in"><span class="ic">' + ic('keyb') + '</span><span><span class="tt">Текстом</span><span class="ss">Как написали бы в чат</span></span></button>' +
    '<button class="opt" data-act="manual"><span class="ic">' + ic('plus') + '</span><span><span class="tt">Вручную</span><span class="ss">Заполнить поля самостоятельно</span></span></button>' +
    '<button class="opt" data-act="self-rem"><span class="ic">' + ic('bell') + '</span><span><span class="tt">Напоминание себе</span><span class="ss">Без исполнителя, отчёта и проверки — просто не забыть</span></span></button>');
}
function mSelfRem(){
  openModal('<h3>Напоминание себе</h3><p class="s">Это не поручение: никто его не увидит, принимать и отчитываться не нужно. Только вы и срок.</p>' +
    '<div class="field"><label>О чём напомнить</label><input class="inp" id="remText" value="Согласовать смету по витрине" placeholder="Например: перезвонить в банк"></div>' +
    '<div class="field"><label>Когда</label><input class="inp" id="remWhen" value="Сегодня, 17:00"></div>' +
    '<button class="btn full" data-act="rem-save">Сохранить</button>' +
    '<button class="btn soft full" data-act="close">Отмена</button>');
  setTimeout(function(){ var n = $('remText'); if (n) n.focus(); }, 30);
}
function mListen(){
  openModal('<h3>Слушаю…</h3><p class="s">Говорите как обычно, 10–15 секунд.</p>' +
    '<div style="display:flex;gap:3px;align-items:center;height:52px;margin-bottom:22px" id="lv"></div>' +
    '<div class="result" id="lt" style="min-height:66px">…</div>' +
    '<button class="btn soft full" style="margin-top:18px" data-act="close">Отмена</button>');
  var lv = $('lv'), bars = [];
  for (var i = 0; i < 46; i++){
    var b = document.createElement('i');
    b.style.cssText = 'width:5px;background:var(--fg-2);border-radius:999px;height:6px;display:block';
    lv.appendChild(b); bars.push(b);
  }
  stopListen();
  LT = {w: setInterval(function(){ bars.forEach(function(b){ b.style.height = (5 + Math.random() * 42) + 'px'; }); }, 110), t: null};
  var n = 0, lt = $('lt');
  (function type(){
    if (!LT || !document.body.contains(lt)){ stopListen(); return; }
    if (n <= PHRASE.length){ lt.textContent = PHRASE.slice(0, n); n += 2; LT.t = setTimeout(type, 22); }
    else { clearInterval(LT.w); LT.t = setTimeout(function(){ stopListen(); mDraft(); }, 460); }
  })();
}
function mDraft(){
  openModal('<h3>Я распознал поручение</h3><p class="s">Всё можно поправить прямо здесь. Задача не создастся, пока вы не подтвердите.</p>' +
    '<div class="field"><label>Кому</label><select class="inp" id="dWho">' +
      PEOPLE.map(function(x){ return '<option value="' + x.id + '"' + (x.id === 'petrov' ? ' selected' : '') + '>' + esc(x.nm) + '</option>'; }).join('') +
    '</select></div>' +
    '<div class="field"><label>Что сделать</label><input class="inp" id="dTitle" value="Проверить счета за июль"></div>' +
    '<div class="field"><label>Срок</label>' +
      '<div class="quick">' +
        ['Сегодня, 18:00','Завтра, 18:00','Пятница, 18:00'].map(function(q){
          return '<button class="qchip" data-dl="' + esc(q) + '" aria-pressed="' + (q === 'Завтра, 18:00') + '">' + q.split(',')[0] + '</button>';
        }).join('') + '</div>' +
      '<input class="inp" id="dDl" value="Завтра, 18:00"></div>' +
    '<div class="field"><label>Результат</label><textarea class="inp" id="dRes" style="min-height:56px">Список счетов с расхождениями, передан руководителю</textarea></div>' +
    '<div class="field" style="margin-bottom:14px"><label>Шаги</label>' +
      '<div class="card" style="padding:4px 16px">' +
      ['Собрать счета','Проверить данные','Найти расхождения','Составить список'].map(function(x){
        return '<div class="sub-item" data-newsub><span class="box on" style="background:var(--fg);border-color:var(--fg)">✓</span><span class="lb">' + x + '</span></div>';
      }).join('') + '</div>' +
      '<div class="hint">«до шести» распознано как 18:00 по времени вашей точки</div></div>' +
    '<button class="btn full" data-act="confirm">Подтвердить и поручить</button>' +
    '<button class="btn soft full" data-act="manual">Открыть полную форму</button>');
}

function mAsk(){
  var t = task(S.task), to = t.who === me() ? who(t.a) : who(t.who);
  openModal('<h3>Написать в задачу</h3><p class="s">Сообщение увидят только участники этого поручения — ' + esc(to.nm) + ' и вы. Никаких общих чатов.</p>' +
    '<textarea class="inp" id="askText" placeholder="Например: по какому из трёх объектов начинать?" style="min-height:96px"></textarea>' +
    '<button class="btn full" style="margin-top:18px" data-act="ask-send">Отправить</button>' +
    '<button class="btn soft full" data-act="close">Отмена</button>');
  setTimeout(function(){ var n = $('askText'); if (n) n.focus(); }, 30);
}
function mPostpone(){
  var t = task(S.task);
  openModal('<h3>Перенести срок</h3><p class="s">Сдвинуть срок может только руководитель. Вы отправляете запрос — он согласует или отклонит, и это останется в истории.</p>' +
    '<div class="field"><label>Текущий срок</label><input class="inp" value="' + esc(dlOf(t)) + '" disabled></div>' +
    '<div class="field"><label>Новый срок</label><input class="inp" id="ppTo" value="Завтра, 13:00"></div>' +
    '<div class="field"><label>Причина</label><textarea class="inp" id="ppWhy" placeholder="Что именно мешает успеть">Подрядчик приедет только завтра утром</textarea></div>' +
    '<button class="btn full" data-act="pp-send">Отправить запрос</button>' +
    '<button class="btn soft full" data-act="close">Отмена</button>');
}

function toast(text, undo){
  var o = document.querySelector('.toast'); if (o) o.remove();
  var el = document.createElement('div'); el.className = 'toast';
  el.innerHTML = '<span>' + esc(text) + '</span>' + (undo ? '<button data-act="undo">Отменить</button>' : '');
  document.body.appendChild(el);
  /* исчез тост — снялась и возможность отката, иначе «Отменить» откатит чужое действие */
  setTimeout(function(){ if (el.parentNode) el.remove(); if (undo) S.undo = null; }, undo ? 6000 : 3400);
}

/* ================= СОБЫТИЯ ================= */
document.querySelectorAll('.roleseg [data-role]').forEach(function(b){
  b.addEventListener('click', function(){
    /* фильтр по точке тоже сбрасываем: у сотрудника нет ничего, чем его снять */
    S.role = b.dataset.role; S.view = 'home'; S.task = null; S.tab = 'in'; S.q = '';
    S.point = 'all'; S.from = null; S.mfrom = null; S.hFilter = null; S.undo = null;
    document.querySelectorAll('.roleseg [data-role]').forEach(function(x){ x.setAttribute('aria-pressed', String(x === b)); });
    render();
  });
});

/* переключатель «новая компания» — чтобы посмотреть пустые состояния */
$('freshbtn').addEventListener('click', function(){
  S.fresh = !S.fresh;
  this.querySelector('.led').style.background = S.fresh ? 'var(--warn)' : 'var(--fg-3)';
  $('freshlabel').textContent = S.fresh ? 'Новая компания' : 'Демо-данные';
  S.view = 'home'; S.tab = 'in'; S.q = ''; S.onb = {};
  render();
});

/* переключатель сети */
$('netbtn').addEventListener('click', function(){
  S.offline = !S.offline;
  this.classList.toggle('off', S.offline);
  $('netlabel').textContent = S.offline ? 'Нет сети' : 'Сеть есть';
  if (!S.offline && S.queue.length){
    var n = S.queue.length; S.queue = [];
    render(true); toast('Связь появилась. Отправлено изменений: ' + n);
  } else { render(true); }
});
/* действие, которое в офлайне уходит в очередь */
function queued(label){
  if (!S.offline) return false;
  S.queue.push(label);
  render(true);
  toast('Сохранено на устройстве, уйдёт при связи');
  return true;
}

document.addEventListener('click', function(e){
  var el, t;
  if ((el = e.target.closest('[data-group]'))){
    var g = el.dataset.group;
    S.collapsed[g] = !S.collapsed[g];
    render(true); return;
  }
  if ((el = e.target.closest('[data-sw]'))){
    var k = el.dataset.sw;
    S.notif[k] = S.notif[k] ? 0 : 1;
    render(true); return;
  }
  if ((el = e.target.closest('[data-expand]'))){ S.expand[el.dataset.expand] = 1; render(true); return; }
  if ((el = e.target.closest('[data-load]'))){ var lid = el.dataset.load; S.loadOpen[lid] = !S.loadOpen[lid]; render(true); return; }
  if ((el = e.target.closest('[data-dl]'))){
    var v = el.dataset.dl;
    var box = el.closest('.field') || el.parentNode.parentNode;
    var inp = box.querySelector('input.inp');
    if (v !== 'custom' && inp) inp.value = v;
    box.querySelectorAll('.qchip').forEach(function(x){ x.setAttribute('aria-pressed', String(x === el)); });
    if (v === 'custom' && inp) inp.focus();
    return;
  }
  if ((el = e.target.closest('[data-hf]'))){
    var hf = el.dataset.hf;
    S.hFilter = (hf === 'clear' || S.hFilter === hf) ? null : hf;
    render(true); return;
  }
  if ((el = e.target.closest('[data-rem]'))){
    var rid = el.dataset.rem, cur = null;
    REMINDERS.forEach(function(r){ if (r.id === rid) cur = r; });
    S.rem[rid] = remDone(cur) ? 0 : 1;
    render(true);
    if (S.rem[rid]) toast('Напоминание выполнено');
    return;
  }
  if ((el = e.target.closest('[data-nav]'))){
    var nv = el.dataset.nav;
    /* уход на верхний уровень обрывает цепочку «откуда пришли», иначе «Назад» ведёт само на себя */
    if (nv !== 'person' && nv !== 'task') S.from = null;
    S.view = nv; render(); return;
  }
  if ((el = e.target.closest('[data-tab]')))   { S.tab = el.dataset.tab; S.q=''; render(); return; }
  if ((el = e.target.closest('[data-point]'))) { S.point = el.dataset.point; render(); return; }
  if ((el = e.target.closest('[data-task]')))  { S.task = +el.dataset.task; S.read[S.task] = 1; goto('task'); render(); return; }
  if ((el = e.target.closest('[data-person]'))){ S.person = el.dataset.person; goto('person'); render(); return; }
  if (e.target.closest('[data-goto-tasks]'))   { S.view='tasks'; S.tab='out'; render(); return; }
  if (e.target.closest('[data-inbox]'))        { S.view='tasks'; S.tab='in'; render(); return; }

  if ((el = e.target.closest('[data-sub]'))){
    t = task(S.task);
    if (t.st === 'done'){ toast('Поручение закрыто — историю изменить нельзя'); return; }
    if (!isAcc(t)){ toast('Сначала примите поручение'); return; }
    var i = +el.dataset.sub;
    if (!S.sub[t.id]) S.sub[t.id] = t.subs.map(function(s){ return s[1]; });
    S.sub[t.id][i] = S.sub[t.id][i] ? 0 : 1;
    if (S.offline){ S.queue.push('шаг'); render(true); toast('Сохранено на устройстве, уйдёт при связи'); return; }
    render(true); return;
  }
  if ((el = e.target.closest('[data-radio] .radio'))){
    el.parentNode.querySelectorAll('.radio').forEach(function(x){ x.setAttribute('aria-pressed', String(x === el)); });
    return;
  }

  if ((el = e.target.closest('[data-act]'))){
    var a = el.dataset.act;
    t = S.task ? task(S.task) : null;

    if (a==='create')   { mChoose(); return; }
    if (a==='voice-in') { mListen(); return; }
    if (a==='text-in')  { mDraft(); return; }
    if (a==='close')    { closeModal(); return; }
    if (a==='manual')   { if (S.view!=='manual') S.mfrom = S.view; closeModal(); S.view='manual'; render(); return; }
    /* подтверждение голосового разбора — задача рождается здесь, из того, что видит пользователь */
    if (a==='confirm'){
      var dWho = val('dWho', 'petrov');
      var nt = makeTask({
        t: val('dTitle', 'Без названия'), who: dWho, pt: who(dWho).pt,
        at: parseDl(val('dDl', 'Завтра, 18:00')), res: val('dRes'),
        desc: '', subs: collectSubs($('modalIn'))
      });
      S.onb.task = 1; S.draft = {};
      closeModal(); S.view='tasks'; S.tab='out'; armUndoNew(nt.id); render();
      toast('Поручение создано. Исполнитель: ' + who(nt.who).nm + '.', true); return;
    }
    /* создание из полной формы */
    if (a==='created'){
      var mWho = val('mWho', 'alekseeva');
      var nt2 = makeTask({
        t: val('mTitle', 'Без названия'), who: mWho, pt: val('mPt', who(mWho).pt),
        at: parseDl(val('mDl', 'Сегодня, 18:00')), res: val('mRes'), desc: val('mDesc'),
        subs: collectSubs(), prio: readPrio()
      });
      S.onb.task = 1; S.draft = {};
      S.view='tasks'; S.tab='out'; armUndoNew(nt2.id); render();
      toast('Поручение создано. Исполнитель: ' + who(nt2.who).nm + '.', true); return;
    }

    if (a==='accept-task'){
      armUndo(t);
      S.acc[t.id] = 1;
      if (queued('принятие')) return;
      render(true); toast('Поручение принято, руководитель уведомлён', true); return;
    }
    if (a==='notmine'){
      closeModal();
      (S.comments[t.id] = S.comments[t.id] || []).push({who:me(), at:'сейчас', text:'Это не ко мне — я не отвечаю за эту зону. Прошу переназначить.'});
      render(true); toast('Отправлено автору поручения'); return;
    }
    if (a==='ask')      { mAsk(); return; }
    if (a==='ask-send'){
      var txt = ($('askText').value || '').trim();
      if (!txt){ closeModal(); return; }
      (S.comments[t.id] = S.comments[t.id] || []).push({who:me(), at:'сейчас', text:txt});
      closeModal(); render(true); toast('Сообщение отправлено участникам задачи'); return;
    }
    if (a==='postpone') { mPostpone(); return; }
    if (a==='pp-send'){
      S.postpone[t.id] = {to: $('ppTo').value, why: $('ppWhy').value};
      closeModal(); render(true); toast('Запрос отправлен. Срок пока прежний.'); return;
    }
    if (a==='pp-ok'){
      armUndo(t);
      t.at = parseDl(S.postpone[t.id].to); t.grp = grpOf(t);
      delete S.postpone[t.id];
      render(true); toast('Срок перенесён на ' + dlOf(t) + ', исполнитель уведомлён', true); return;
    }
    if (a==='pp-no'){ delete S.postpone[t.id]; render(true); toast('Перенос отклонён, срок прежний'); return; }

    /* отчёт сдаётся, но шаги за исполнителя никто не отмечает — прогресс считается по сделанному */
    if (a==='voice'){
      armUndo(t);
      S.reported[t.id] = 1; t.st = 'review';
      if (queued('отчёт')) return;
      render(true); toast('Голосовой отчёт разобран и отправлен на проверку', true); return;
    }
    if (a==='accept'){
      armUndo(t);
      t.st = 'done'; t.grp = 'arch'; t.closed = 'сегодня'; t.mark = 'Принято';
      render(true); toast('Результат принят, поручение закрыто', true); return;
    }
    if (a==='rework'){
      armUndo(t);
      t.st = 'progress'; delete S.reported[t.id];
      (S.comments[t.id] = S.comments[t.id] || []).push({who:me(), at:'сейчас', text:'Результат возвращён на доработку.'});
      render(true); toast('Возвращено на доработку с комментарием', true); return;
    }
    if (a==='ping'){
      S.pinged[t.id] = 'только что';
      render(true); toast('Напоминание отправлено. Следующее — не раньше чем через час'); return;
    }
    if (a==='assign-to'){
      var pp = who(S.person);
      S.draft = {who: pp.id, pt: pp.pt, t:'', desc:'', res:''};
      S.mfrom = 'person'; S.view = 'manual'; render();
      toast('Исполнитель и точка подставлены: ' + pp.nm + ', ' + pointName(pp.pt)); return;
    }
    if (a==='say-send'){
      var st = ($('sayText').value || '').trim();
      if (!st) return;
      (S.comments[t.id] = S.comments[t.id] || []).push({who:me(), at:'сейчас', text:st});
      render(true); toast('Сообщение отправлено участникам задачи'); return;
    }
    if (a==='ed-deadline'){
      openModal('<h3>Изменить срок</h3><p class="s">Исполнитель получит уведомление, изменение попадёт в историю.</p>' +
        '<div class="field"><label>Было</label><input class="inp" value="' + esc(dlOf(t)) + '" disabled></div>' +
        '<div class="field"><label>Станет</label>' +
        '<div class="quick">' + ['Сегодня, 18:00','Завтра, 18:00','Пятница, 18:00'].map(function(q){
          return '<button class="qchip" data-dl="' + esc(q) + '">' + q.split(',')[0] + '</button>'; }).join('') + '</div>' +
        '<input class="inp" id="edDl" value="' + esc(dlOf(t)) + '"></div>' +
        '<button class="btn full" data-act="ed-deadline-save">Изменить срок</button>' +
        '<button class="btn soft full" data-act="close">Отмена</button>');
      return;
    }
    if (a==='ed-deadline-save'){
      armUndo(t);
      t.at = parseDl($('edDl').value); t.grp = grpOf(t);
      closeModal(); render(true); toast('Срок изменён на ' + dlOf(t) + ', исполнитель уведомлён', true); return;
    }
    if (a==='ed-text'){
      openModal('<h3>Уточнить формулировку</h3><p class="s">Прежняя версия останется в истории — переписать поручение задним числом нельзя.</p>' +
        '<div class="field"><label>Описание</label><textarea class="inp" id="edDesc">' + esc(t.desc) + '</textarea></div>' +
        '<div class="field"><label>Результат</label><textarea class="inp" id="edRes" style="min-height:56px">' + esc(t.res) + '</textarea></div>' +
        '<button class="btn full" data-act="ed-text-save">Сохранить</button>' +
        '<button class="btn soft full" data-act="close">Отмена</button>');
      return;
    }
    if (a==='ed-text-save'){
      t.desc = $('edDesc').value; t.res = $('edRes').value;
      closeModal(); render(true); toast('Формулировка уточнена, исполнитель уведомлён'); return;
    }
    if (a==='ed-who'){
      openModal('<h3>Переназначить</h3><p class="s">Новый исполнитель получит поручение и должен будет его принять. Прогресс обнулится.</p>' +
        '<div class="field"><label>Кому</label><select class="inp" id="edWho">' +
        PEOPLE.map(function(x){ return '<option value="' + x.id + '"' + (x.id === t.who ? ' selected' : '') + '>' + esc(x.nm) + ' · ' + esc(x.ps) + '</option>'; }).join('') +
        '</select></div>' +
        '<button class="btn full" data-act="ed-who-save">Переназначить</button>' +
        '<button class="btn soft full" data-act="close">Отмена</button>');
      return;
    }
    if (a==='ed-who-save'){
      t.who = $('edWho').value; S.acc[t.id] = 0; delete S.sub[t.id]; delete S.reported[t.id];
      closeModal(); render(true); toast('Переназначено на ' + who(t.who).nm + '. Ждём принятия.'); return;
    }
    if (a==='ed-cancel'){
      openModal('<h3>Отменить поручение?</h3><p class="s">Задача уйдёт в архив с пометкой «отменено автором». Исполнитель получит уведомление. Удалить её нельзя — история сохраняется.</p>' +
        '<div class="field"><label>Причина</label><input class="inp" id="edWhy" value="Отпало, клиент перенёс встречу"></div>' +
        '<button class="btn full" data-act="ed-cancel-save">Отменить поручение</button>' +
        '<button class="btn soft full" data-act="close">Не отменять</button>');
      return;
    }
    if (a==='ed-cancel-save'){
      armUndo(t);
      t.st = 'done'; t.grp = 'arch'; t.closed = 'сегодня'; t.mark = 'Отменено автором: ' + ($('edWhy').value || '');
      closeModal(); S.view = 'tasks'; S.tab = 'out'; render(); toast('Поручение отменено и убрано из работы', true); return;
    }
    if (a==='onb-people'){
      S.onb = S.onb || {}; S.onb.people = 1;
      render(true); toast('Ссылка-приглашение скопирована — отправьте её в рабочий чат'); return;
    }
    if (a==='self-rem'){ mSelfRem(); return; }
    if (a==='rem-save'){
      var txt = ($('remText').value || '').trim();
      if (!txt){ closeModal(); return; }
      REMINDERS.push({id:'r' + (REMINDERS.length + 1), own:me(), t:txt, when:$('remWhen').value, done:0});
      closeModal(); S.view='tasks'; S.tab='self'; render(); toast('Напоминание сохранено. Никто другой его не видит.'); return;
    }
    /* повтор действительно подставляет поля закрытого поручения */
    if (a==='repeat'){
      S.draft = {who:t.who, pt:t.pt, t:t.t, desc:t.desc, res:t.res,
                 dl:'Завтра, 18:00', subs:t.subs.map(function(s){ return s[0]; })};
      S.mfrom = 'tasks'; S.view='manual'; render();
      toast('Поля заполнены из закрытой задачи'); return;
    }
    if (a==='undo'){
      var o = document.querySelector('.toast'); if (o) o.remove();
      if (!applyUndo()){ toast('Отменять нечего'); return; }
      render(true); toast('Действие отменено'); return;
    }
  }
});
$('modal').addEventListener('click', function(e){ if (e.target === this) closeModal(); });
document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeModal(); });

initTasks();
render();

/* обратный отсчёт тикает сам; список перерисовываем раз в минуту, когда меняются группы */
var lastMin = new Date().getMinutes();
setInterval(function(){
  var cd = $('cdown');
  if (cd && S.view === 'task'){
    var t = task(S.task);
    if (t){ cd.textContent = leftOf(t); cd.style.color = isOver(t) ? 'var(--crit)' : ''; }
  }
  var m = new Date().getMinutes();
  if (m !== lastMin){ lastMin = m; if (S.view !== 'task' && !$('modal').classList.contains('on')) render(true); }
}, 1000);
})();
