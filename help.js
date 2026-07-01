// ===========================================
// ZETA Dashboard v5
// help.js
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    const helpBtn = document.getElementById("helpBtn");
    const modal = document.getElementById("helpModal");
    const closeBtn = document.getElementById("closeHelp");
    const content = document.getElementById("helpContent");

    if (!helpBtn || !modal || !closeBtn || !content) return;

    helpBtn.addEventListener("click", () => {

        content.innerHTML = getHelpHTML();

        modal.style.display = "flex";

    });

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });

    window.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

});

function getHelpHTML(){

return `

<h1>📖 Справочник ZETA BI Dashboard</h1>

<p class="help-intro">

Данный Dashboard предназначен для проведения
ABC / XYZ анализа ассортимента предприятия.

</p>

<hr>

<h2>📊 Основные показатели</h2>

<h3>💰 Выручка</h3>

<p>
Общая сумма продаж за анализируемый период.
</p>

<h3>📦 Количество</h3>

<p>
Общее количество проданных единиц товара.
</p>

<h3>🏷 SKU</h3>

<p>
Количество уникальных товарных позиций.
</p>

<hr>

<h2>🟢 ABC анализ</h2>

<p>

<b>Категория A</b><br>

Самые важные товары.
Формируют около 80% всей выручки.

</p>

<p>

<b>Категория B</b><br>

Средняя важность.
Формируют около 15% выручки.

</p>

<p>

<b>Категория C</b><br>

Наименее значимые товары.
Формируют примерно 5% выручки.

</p>

<hr>

<h2>🔵 XYZ анализ</h2>

<p>

<b>X</b><br>

Очень стабильный спрос.

CV ≤ 10%

</p>

<p>

<b>Y</b><br>

Средняя изменчивость.

10% &lt; CV ≤ 25%

</p>

<p>

<b>Z</b><br>

Нестабильный спрос.

CV &gt; 25%

</p>

<hr>

<h2>📈 Что такое CV?</h2>

<p>

CV — коэффициент вариации.

Он показывает,
насколько сильно изменяются продажи товара
от месяца к месяцу.

</p>

<pre>

CV =
Стандартное отклонение
────────────────────── ×100%
Средние продажи

</pre>

<hr>

<h2>🟩 Матрица ABC × XYZ</h2>

<table class="help-table">

<tr>

<th>Категория</th>

<th>Описание</th>

</tr>

<tr>

<td>AX</td>

<td>Высокая выручка и стабильный спрос.</td>

</tr>

<tr>

<td>AY</td>

<td>Высокая выручка, умеренная сезонность.</td>

</tr>

<tr>

<td>AZ</td>

<td>Высокая выручка, нестабильный спрос.</td>

</tr>

<tr>

<td>BX</td>

<td>Средняя важность, стабильные продажи.</td>

</tr>

<tr>

<td>BY</td>

<td>Средняя важность, сезонность.</td>

</tr>

<tr>

<td>BZ</td>

<td>Средняя важность, нестабильный спрос.</td>

</tr>

<tr>

<td>CX</td>

<td>Низкая выручка, стабильные продажи.</td>

</tr>

<tr>

<td>CY</td>

<td>Низкая выручка, сезонность.</td>

</tr>

<tr>

<td>CZ</td>

<td>Низкая выручка и нестабильный спрос.</td>

</tr>

</table>

<hr>

<h2>💡 Рекомендации</h2>

<ul>

<li>AX — всегда поддерживать на складе.</li>

<li>AY — учитывать сезонность.</li>

<li>AZ — закупать индивидуально.</li>

<li>BX — стандартный контроль.</li>

<li>BY — периодический мониторинг.</li>

<li>BZ — осторожные закупки.</li>

<li>CX — минимальный запас.</li>

<li>CY — закупка по необходимости.</li>

<li>CZ — рассмотреть вывод из ассортимента.</li>

</ul>

`;

}
