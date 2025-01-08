<script setup>
import { ref } from 'vue';
import Tabs from '@/components/Tabs.vue';

const tabs = [
  { name: 'HtmlCSS', lable: 'Html CSS', id: 1 },
  { name: 'JavaScript', lable: 'JavaScript', id: 2 },
  { name: 'Vue', lable: 'Vue JS', id: 3 },
  { name: 'Node', lable: 'Node JS', id: 4 },
];

const selectedTab = ref('Vue');

function selectNewTab(newTab) {
  selectedTab.value = newTab;
}
</script>

<template>
  <h1 class="heading-1">Tabs</h1>
  <div class="wrapper">
    <div class="block">
      <div class="line">
        <Tabs :names="tabs" :selectedTab="selectedTab" @changeTab="selectNewTab">
          <div v-if="selectedTab === 'HtmlCSS'" class="tab-content">
            <p>
              HTML (HyperText Markup Language) — язык разметки, который используется для создания структуры и
              содержимого веб-страниц. Он состоит из тегов, которые обозначают различные элементы страницы, такие как
              заголовки, абзацы, списки, ссылки и множество других элементов.
            </p>
            <p>
              CSS (Cascading Style Sheets) — язык стилей, используемый для описания внешнего вида веб-страницы. Он
              позволяет задавать различные стили для HTML-элементов, такие как цвет, размер шрифта, отступы и многое
              другое.
            </p>
            <p>
              Вместе HTML и CSS составляют основу большинства современных веб-разработок. Они используются для создания
              статических веб-страниц, а также динамических веб-приложений.
            </p>
            <img src="https://i.pinimg.com/236x/8b/50/6a/8b506a90c382e610556d51c957d3999f.jpg?nii=t" alt="" />
          </div>
          <div v-else-if="selectedTab === 'JavaScript'" class="tab-content">
            <p>
              JavaScript — это интерпретируемый и мультипарадигменный язык программирования. Его используют для
              написания frontend- и backend-частей сайтов, а также мобильных приложений.
            </p>
            <p>
              Простыми словами, это язык скриптов или сценариев, которые представляют собой набор инструкций,
              реализуемых при загрузке веб-страницы. Браузер самостоятельно интерпретирует код на JavaScript, для этого
              даже не требуется компиляция (перевод языка программирования в машинный код).
            </p>
            <img src="https://xislabs.com/wp-content/uploads/2022/06/Hire-javascript-Developers-1.png" alt="" />
          </div>
          <div v-else-if="selectedTab === 'Vue'" class="tab-content">
            <p>
              Vue.js — это JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов.
              Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать как
              веб-фреймворк для разработки одностраничных приложений в реактивном стиле.
            </p>
            <img src="https://ucarecdn.com/560699da-cc8f-47ca-b10e-b4b65b9acee0/-/scale_crop/180x180/center/" alt="" />
          </div>
          <div v-else-if="selectedTab === 'Node'" class="tab-content">
            <p>
              Node.js — это бесплатная кросс-платформенная среда выполнения JavaScript с открытым исходным кодом. Она
              создана на движке V8 от Google, который используется для преобразования JavaScript в компьютерный код.
            </p>
            <img src="https://i.pinimg.com/236x/33/b6/e3/33b6e33d25e6e7e8ceb6fd864c202bfc.jpg?nii=t" alt="" />
          </div>
        </Tabs>
      </div>
    </div>
  </div>
</template>
