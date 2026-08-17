/* Лендинг Deadline: отправка заявки на доступ.
   Сервера у проекта нет, поэтому заявка уходит одним из двух путей —
   в сервис форм или письмом. Что именно, задаётся атрибутами data-endpoint
   и data-email на самой форме, см. комментарий в index.html.
   Стиль тот же, что в прототипе: ES5, без сборщика и зависимостей. */
(function(){
  'use strict';

  var form = document.getElementById('req');
  if (!form) return;
  var note = document.getElementById('reqNote');
  var noteText = note ? note.textContent : '';

  function fields(){
    return [].slice.call(form.querySelectorAll('input, select, textarea'));
  }
  function say(text, bad){
    if (!note) return;
    note.textContent = text;
    note.className = 'note' + (bad ? ' bad' : '');
  }
  function clearMark(e){
    e.target.classList.remove('bad');
    if (note && note.className.indexOf('bad') >= 0) say(noteText, false);
  }
  form.addEventListener('input', clearMark);
  form.addEventListener('change', clearMark);

  /* собственная проверка: novalidate стоит намеренно, чтобы подсказки были
     на русском и в стиле страницы, а не системные */
  function firstEmpty(){
    var list = fields(), i;
    for (i = 0; i < list.length; i++){
      if (list[i].hasAttribute('required') && !String(list[i].value).trim()) return list[i];
    }
    return null;
  }
  function collect(){
    var data = {}, list = fields(), i, el;
    for (i = 0; i < list.length; i++){
      el = list[i];
      if (el.name && String(el.value).trim()) data[el.name] = String(el.value).trim();
    }
    data['Страница'] = location.href;
    return data;
  }
  function asText(data){
    var out = [], k;
    for (k in data) if (Object.prototype.hasOwnProperty.call(data, k)) out.push(k + ': ' + data[k]);
    return out.join('\n');
  }

  function thanks(){
    var wrap = form.parentNode;
    var box = document.createElement('div');
    box.className = 'done';
    box.innerHTML = '<h3>Заявка принята</h3>' +
      '<p>Спасибо. Напишем один раз, чтобы договориться о разговоре — обычно в течение пары дней. ' +
      'Пока можно посмотреть <a href="app/">демо</a>, оно работает без регистрации.</p>';
    wrap.replaceChild(box, form);
    box.setAttribute('tabindex', '-1');
    box.focus();
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();

    var bad = firstEmpty();
    if (bad){
      bad.classList.add('bad');
      bad.focus();
      say('Заполните, пожалуйста, поле «' + (bad.previousElementSibling ? bad.previousElementSibling.textContent.replace(/—.*$/, '').trim() : 'обязательное') + '»', true);
      return;
    }

    var endpoint = (form.dataset.endpoint || '').trim();
    var email = (form.dataset.email || '').trim();
    var data = collect();
    var btn = form.querySelector('button[type="submit"]');

    if (endpoint){
      btn.disabled = true;
      say('Отправляем…', false);
      fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(data)
      }).then(function(r){
        if (!r.ok) throw new Error('HTTP ' + r.status);
        thanks();
      })['catch'](function(){
        btn.disabled = false;
        say('Не получилось отправить — проверьте соединение и попробуйте ещё раз.' +
            (email ? ' Или напишите нам на ' + email + '.' : ''), true);
      });
      return;
    }

    if (email){
      /* запасной путь: у человека откроется почтовая программа с готовым письмом */
      var href = 'mailto:' + encodeURIComponent(email) +
        '?subject=' + encodeURIComponent('Заявка на доступ к Deadline') +
        '&body=' + encodeURIComponent(asText(data));
      window.location.href = href;
      setTimeout(thanks, 600);
      return;
    }

    /* ничего не настроено — честно об этом говорим, а не делаем вид, что заявка ушла */
    say('Приём заявок ещё не подключён. Заполните data-endpoint или data-email у формы в index.html.', true);
  });
})();
